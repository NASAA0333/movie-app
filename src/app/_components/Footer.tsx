export function Footer() {
  return (
    <div className="w-[100%] h-[308px] bg-[#4338CA] flex justify-center items-center :h-[280px] text-white">
      <div className="w-[80%] h-[228px] sm:flex justify-between">
        <div className="w-[247px] h-[52px] ">
          <div className="">
            <div className=""></div>
            <img src="/Logo.png" alt="" />
          </div>
          <h1 className="text-[14px] font-inter ">
            © 2024 Movie Z. All Rights Reserved.
          </h1>
        </div>

        <div className="max-w-[335px] h-[148px] flex justify-between  sm:w-[335px] ">
          <div className="">
            <h1 className="text-[14px] font-inter ">Contact information</h1>
            <div className="  mr-[40px] mt-[12px] w-[100%]">
              <div className="flex items-center gap-[12px] mt-[15px]">
                <img src="/Email.png" alt="" className="size-[16px]" />
                <div className="gap-[10px]">
                  <h1 className="text-[14px] font-inter ">Email:</h1>
                  <h1 className="text-[14px] font-inter ">
                    support@movieZ.com
                  </h1>
                </div>
              </div>
              <div className="flex items-center gap-[12px] mt-[15px]">
                <img src="/Phone.png" alt="" className="size-[16px]" />
                <div className="gap-[10px]">
                  <h1 className="text-[14px] font-inter ">Phone:</h1>
                  <h1 className="text-[14px] font-inter ">
                    +976 (11) 123-4567
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-start flex-col gap-[6px]">
            <h1 className="text-[14px] font-inter ">Follow us</h1>
            <div className="flex flex-col md:flex-row gap-[6px] ">
              <h1 className="text-[14px] font-inter ">Facebook</h1>
              <h1 className="text-[14px] font-inter ">Instagram</h1>
              <h1 className="text-[14px] font-inter ">Twitter</h1>
              <h1 className="text-[14px] font-inter ">Youtube</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
