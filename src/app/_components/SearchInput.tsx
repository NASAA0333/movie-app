"use client";

import { Input } from "postcss";
import { ChangeEvent } from "react";
// import Input

type SearchInputProps = {
  value: string;
  handleChange: (_event: ChangeEvent<HTMLInputElement>) => void;
};

export const SearchInput = ({ value, handleChange }: SearchInputProps) => {
  return (
    <input
      type="text"
      value={value}
      placeholder="Search..."
      onChange={HandleChange}
      className="h-10 p-4"
    />
  );
};
