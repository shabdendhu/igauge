import type { NextPage } from "next";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Button, Drawer } from "@mui/material";

const SignInApproved: NextPage = () => {
  return (
    <div className="w-full bg-white  flex  justify-between items-center  md:pl-20  ">
      <div className="flex flex-col sm:grid sm:grid-cols-10  w-full h-full">
        <div className="flex justify-center sm:grid sm:col-span-4  font-semibold  items-center w-full p-14 ">
          <div className="w-full  min-w-auto">
            <form action="submit" className="flex flex-col gap-y-6 ">
              <h3 className=" font-bold font-libre-baskerville text-[20px] sm:text-[36px] text-center">
                Sign In to your Account
              </h3>

              <input
                className="h-[52px]  border-2 font-normal pl-2 rounded-sm"
                placeholder="Phone Number"
                type="number"
              />

              <Button className="cursor-pointer py-4 px-5 bg-orange-200  rounded-md justify-center hover:scale-105 active:scale-95">
                Sign In
              </Button>

              <div>
                Don&apos;t have an Account ? &nbsp;
                <span className="underline text-[#272761] text-base">
                  Sign Up
                </span>
              </div>
            </form>
          </div>
        </div>
        <div className="flex xs:grid xs:col-span-6 xs:w-full  overflow-hidden h-[500px] w-full bg-[#272761]">
          <div className="flex flex-col justify-center items-center relative ">
            <img
              className="  w-[400px] h-[385px] object-contain "
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

export default SignInApproved;
