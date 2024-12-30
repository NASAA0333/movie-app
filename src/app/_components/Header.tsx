export function Header() {
  return (
    <div className=" w-[100%] h-[59px] flex justify-center items-center">
      <div className=" flex w-[90%] justify-between">
        <img src="/LogoPP.png" className="text-white h-[20px] w-[82px] " />
        <div className="flex flex-row gap-2">
          <div className="size-[36px]  flex justify-center items-center rounded-[9px] border-[1px] border-gray-400 ">
            <img
              src="/search.png"
              className="flex justify-center items-center "
            />
          </div>
          <div className="size-[36px]  flex justify-center items-center rounded-[9px] border-[1px] border-gray-400 ">
            <img
              src="/moon.png"
              className="flex justify-center items-center "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
