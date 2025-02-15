"use client";

import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    console.log({ theme });
    if (theme === "dark") setDarkMode(true);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const modeChange = () => {
    setDarkMode(!darkMode);
  };

  console.log({ darkMode });

  return (
    <nav className=" w-[100%] h-[59px] flex justify-center items-center bg-white dark:bg-black">
      <div className=" flex w-[90%] justify-between">
        <Link href="/">
          <img src="/LogoPP.png" className="text-white h-[20px] w-[82px] " />
        </Link>
        <div className="flex flex-row gap-2">
          <div className="size-[36px]  flex justify-center items-center rounded-[9px] border-[1px] border-gray-400 ">
            <img
              src="/search.png"
              className="flex justify-center items-center "
            />
          </div>
          <div className="size-[36px]  flex justify-center items-center rounded-[9px] border-[1px] border-gray-400 "></div>
          <div
            className="relative w-16 h-8 flex items-center dark:bg-gray-900 bg-teal-500 cursor-pointer rounded-full p-1"
            onClick={modeChange}
          >
            <Moon className="text-white" size={18} />
            <div
              className="absolute bg-white dark:bg-medium w-6 h-6 rounded-full shadow-md transfrom transition-transform duration-300"
              style={darkMode ? { left: "2px" } : { right: "2px" }}
            ></div>
            <Sun className="ml-auto text-yellow-400" size={18} />
          </div>
        </div>
      </div>
    </nav>
  );
}
