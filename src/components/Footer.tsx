import Image from "next/image";

export function Footer() {
  return (
    <div className="w-[100%] h-[308px] bg-[#4338CA] flex justify-center items-center sm:">
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

        <div className="max-w-[335px] h-[148px] flex justify-between items-center sm:w-[335px] ">
          <div className="">
            <h1 className="text-[14px] font-inter ">Contact information</h1>
            <div className="">
              <div className="">
                <div className=""></div>
                <div className="">
                  <h1 className="text-[14px] font-inter ">Email:</h1>
                  <h1 className="text-[14px] font-inter ">
                    support@movieZ.com
                  </h1>
                </div>
              </div>
              <div className="">
                <div className=""></div>
                <div className="">
                  <h1 className="text-[14px] font-inter ">Phone:</h1>
                  <h1 className="text-[14px] font-inter ">
                    +976 (11) 123-4567
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <h1 className="text-[14px] font-inter ">Follow us</h1>
            <div className="sm:">
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

// width: Fill (375px)px;
// height: Hug (308px)px;
// padding: 40px var(--spacing5) 40px var(--spacing5);
// gap: 48px;
// opacity: 0px;

// width: Fill (335px)px;
// height: Hug (228px)px;
// gap: var(--spacing7);
// opacity: 0px;

// width: Fill (335px)px;
// height: Hug (228px)px;
// gap: var(--spacing7);
// opacity: 0px;

// width: Fill (335px)px;
// height: Hug (228px)px;
// gap: var(--spacing7);
// opacity: 0px;

// width: Fill (335px)px;
// height: Hug (228px)px;
// gap: var(--spacing7);
// opacity: 0px;

// width: Fill (335px)px;
// height: Hug (228px)px;
// gap: var(--spacing7);
// opacity: 0px;
