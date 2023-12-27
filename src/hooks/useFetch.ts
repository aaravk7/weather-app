import { useEffect, useReducer, useRef } from "react";

export type FetchState<T> =
  | {
      status: "loading";
    }
  | {
      status: "error";
      error: string;
    }
  | {
      status: "success";
      data: T;
    };

type Action<T> =
  | { type: "loading" }
  | { type: "success"; payload: T }
  | { type: "error"; error: string };

export function useFetch<T = unknown>(
  url?: string,
  options?: RequestInit
): FetchState<T> {
  const cancelRequest = useRef<boolean>(false);

  const initialState: FetchState<T> = { status: "loading" };

  const fetchReducer = (
    state: FetchState<T>,
    action: Action<T>
  ): FetchState<T> => {
    switch (action.type) {
      case "loading":
        return { ...initialState, status: "loading" };
      case "success":
        return {
          ...initialState,
          data: action.payload,
          status: "success",
        };
      case "error":
        return {
          ...initialState,
          error: action.error,
          status: "error",
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    if (!url) return;

    cancelRequest.current = false;

    const fetchData = async () => {
      dispatch({ type: "loading" });

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          let msg = "Something went wrong";
          if (
            response.headers.get("content-type")?.includes("application/json")
          ) {
            const data = await response.json();
            msg = data.message;
          }
          throw new Error(msg);
        }

        const data = (await response.json()) as T;
        if (cancelRequest.current) return;

        dispatch({ type: "success", payload: data });
      } catch (error) {
        if (cancelRequest.current || !(error instanceof Error)) return;
        dispatch({
          type: "error",
          error: error.message,
        });
      }
    };

    fetchData();

    return () => {
      cancelRequest.current = true;
    };
  }, [url, options]);

  return state;
}
