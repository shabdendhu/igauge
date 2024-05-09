import { NextPage } from "next";

const OTPApproved: NextPage = () => {
  return (
    <div className="w-full bg-white  flex  justify-between items-center  ">
      <div className="flex flex-col sm:grid sm:grid-cols-10  w-full h-full">
        <div className="flex justify-center sm:grid sm:col-span-4  font-semibold  items-center w-full p-14 ">
          <div className="w-full max-w-[400px] min-w-auto">
            <form action="submit" className="flex flex-col gap-y-6 w-full">
              <div>
                <h3 className=" font-bold font-libre-baskerville text-[20px] sm:text-[36px] text-left">
                  Enter OTP
                </h3>
                <p className="font-red-hat-text font-semibold text-[20px]">
                  xxxxxxx890
                </p>
              </div>
              <div className="flex justify-between gap-x-1 h-[45px]">
                <input
                  className="h-full w-auto max-w-[45px]  border-2 font-normal pl-2 rounded-md"
                  type="number"
                />
                <input
                  className="h-full w-auto max-w-[45px]  border-2 font-normal pl-2 rounded-md"
                  type="number"
                />
                <input
                  className="h-full w-auto max-w-[45px]  border-2 font-normal pl-2 rounded-md"
                  type="number"
                />
                <input
                  className="h-full w-auto max-w-[45px]  border-2 font-normal pl-2 rounded-md"
                  type="number"
                />
                <input
                  className="h-[45px] w-[45px]  border-2 font-normal pl-2 rounded-md"
                  type="number"
                />
              </div>

              <button className="cursor-pointer py-4 px-5 bg-orange-200  rounded-md justify-center hover:scale-105 active:scale-95">
                Verify OTP
              </button>

              <div>
                Didn&apos;t Recieve ? &nbsp;
                <span className="underline text-[#272761] text-base">
                  Resend
                </span>
              </div>
            </form>
          </div>
        </div>
        <div className="flex xs:grid xs:col-span-6 xs:w-full  overflow-hidden h-[500px] w-full bg-[#272761]">
          <div className="flex flex-col justify-center relative items-center ">
            <img
              className="  w-[400px] h-[385px] object-contain z-10"
              loading="lazy"
              alt=""
              src="/image-15@2x.png"
            />
            <div className="h-full w-full flex justify-between z-0 absolute ">
              <div className="h-full border-r-[0.6px] border-gray-100/5 " />
              <div className="h-full border-r-[0.6px] border-gray-100/5 " />
              <div className="h-full border-r-[0.6px] border-gray-100/5 " />
              <div className="h-full border-r-[0.6px] border-gray-100/5 " />
              <div className="h-full border-r-[0.6px] border-gray-100/5 " />
              <div className="h-full border-r-[0.6px] border-gray-100/5 " />
              <div className="h-full border-r-[0.6px] border-gray-100/5 " />
              <div className="h-full border-r-[0.6px] border-gray-100/5 " />
              <div className="h-full border-r-[0.6px] border-gray-100/5 " />
            </div>
            <div className="px-16 font-libre-baskerville pb-3 z-0">
              <p className="text-center text-white">
                “Universities exist to transmit knowledge and understanding of
                ideas and values to students not to provide entertainment for
                spectators or employment for athletes.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTPApproved;
