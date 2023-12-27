import { FormEvent, useState } from "react";
import Button from "../Button/Button";
import TextField from "../TextField/TextField";
import styles from "./Searchbar.module.css";

interface SearchBarProps {
  onSearch: (val: string) => void;
}

const SearchBar = (props: SearchBarProps) => {
  const [input, setInput] = useState<string>("");

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (input.length === 0) return;
    props.onSearch(input);
  };

  return (
    <form className={styles["search-bar"]} onSubmit={handleSearch}>
      <TextField
        value={input}
        onChange={(e) => setInput(e.currentTarget.value)}
        placeholder="Enter Name Of City"
      />
      <Button type="submit">Search</Button>
    </form>
  );
};
export default SearchBar;
