import type { NextPage } from "next";

const NameInputField: NextPage = () => {
  return (
    <div className="mt-10 flex flex-col gap-y-7">
      <div>
        <h3 className=" font-normal font-red-hat-text  hover:text-black  text-xl ">
          Basic Information
        </h3>
      </div>
      <div className="">
        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-10 mt-4">
          <input
            type="text"
            name=""
            id=""
            className="border h-12 placeholder:text-xs pl-[25px] "
            placeholder="Name"
          />
          <input
            type="email"
            name=""
            id=""
            className="border h-12 placeholder:text-xs pl-[25px]"
            placeholder="Email"
          />
          <input
            type="number"
            name=""
            id=""
            className="border h-12 placeholder:text-xs pl-[25px]"
            placeholder="Phone Number"
          />
        </div>
      </div>
      <div className="">
        <h3 className=" font-normal font-red-hat-text  hover:text-black  text-xl ">
          More Information
        </h3>
      </div>
      <div>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 mt-4">
          <select
            name="Gender"
            id=""
            className="border h-12  text-xs pl-[25px] "
          >
            <option value="Gender">Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <input
            type="text"
            name=""
            id=""
            className="border h-12 placeholder:text-xs pl-[25px] "
            placeholder="Date of Birth"
          />
          <select name="State" id="" className="border h-12 text-xs pl-[25px] ">
            <option value="State">State</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Odisha">Odisha</option>
            <option value="Other">Other</option>
          </select>
          <select name="City" id="" className="border h-12 text-xs pl-[25px] ">
            <option value="Select City">State</option>
            <option value="Bhubaneswar">Bhubaneswar</option>
            <option value="Cuttack">Cuttack</option>
            <option value="Sambalpur">Sambalpur</option>
          </select>
          <select
            name="Category"
            id=""
            className="border h-12 text-xs pl-[25px] "
          >
            <option value="User Category">User Category</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Odisha">Odisha</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="mt-6">
          <button className="bg-orange-200 px-14 py-3 text-xs font-semibold">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default NameInputField;

// <input
// className="w-[95px] [border:none] [outline:none] font-red-hat-text text-2xl bg-[transparent] h-7 relative text-darkslategray-100 text-left flex p-0 z-[1] hover:font-red-hat-text hover:text-2xl hover:text-left hover:text-darkslategray-100 hover:flex hover:w-[95px] hover:h-7 hover:p-0 mq450:text-mid"
// placeholder="Email"
// type="text"
// />
