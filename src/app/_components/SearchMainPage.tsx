import { ChangeEvent, useState } from "react";
import { SearchInput } from "./SearchInput";
import { SearchResultList } from "./SearchResultList";
import ThemeToggle from "./Darkmode";

export const SearchForMainPage = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  //   const removeSearchValue = () => {
  //     setSearchValue("");
  //   };

  return (
    <div className=" relative ">
      <SearchInput handleChange={handleChange} value={searchValue} />
      {searchValue && <SearchResultList searchValue={searchValue} />}
    </div>
  );
};
