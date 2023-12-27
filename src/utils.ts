export function startCase(str: string) {
  return str
    .split(" ")
    .map(
      (item) => item.charAt(0).toUpperCase() + item.substring(1).toLowerCase()
    )
    .join(" ");
}

export function isPresentDay(timestamp: number) {
  const parsedDate = new Date(timestamp);
  const today = new Date();
  return (
    parsedDate.getFullYear() === today.getFullYear() &&
    parsedDate.getMonth() === today.getMonth() &&
    parsedDate.getDate() === today.getDate()
  );
}
