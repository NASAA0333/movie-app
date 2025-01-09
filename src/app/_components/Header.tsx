import Link from "next/link";
import ThemeToggle from "./Darkmode";

const Header = () => {
  // const [theme, setTheme] = useState(`light`);
  // const [isOpen, setIsOpen] = useState(false);

  // useEffect(() => {
  //   document.documentElement.classList.toggle(`dark`, theme === `dark`);
  // }, [theme]);

  // const toggleTheme = () => {
  //   setTheme(theme === `light` ? `dark` : `light`);
  // };

  // const toggleDropdown = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <nav className=" w-[100%] h-[59px] flex justify-center items-center bg-black dark:bg-white">
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
          {/* <button
              onClick={toggleTheme}
              className=" text-gray-900 bg-gray-200 rounded-lg dark:bg-gray-700 dark:text-gray-100 hover:bg-gray-400 dark:hover:bg-gray-400"
            >
              {theme === `light` ? <Sun /> : <Moon />}
            </button> */}
        </div>
      </div>
    </nav>
  );
};

export { Header };
