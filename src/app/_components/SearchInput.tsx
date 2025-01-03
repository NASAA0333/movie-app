"use client";

import { Input } from "postcss";
import { ChangeEvent } from "react";

type SearchInputProps = {
  value: string;
  handleChange: (_event: ChangeEvent<HTMLInputElement>) => void;
};

export const Searchinput = ({ value, handleChange }: SearchInputProps) => {
  return <Input />;
};
