"use client";
import { useCalculateFontSize } from "@/app/(app)/hooks/use-calculate-font-size";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
// import Select from "@/app/(app)/components/v1/Select";
import type { NextPage } from "next";

const NameInputField: NextPage = () => {
  const fontSize = useCalculateFontSize();

  return (
    <div className="mt-10 flex flex-col gap-y-7">
      <div>
        <h3
          style={{
            fontSize: fontSize(36, 20, 1920, 400),
          }}
          className=" font-normal font-red-hat-text  hover:text-black  text-xl "
        >
          Basic Information
        </h3>
      </div>
      <div className="">
        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-10 mt-4">
          <TextField
            type="text"
            name=""
            id=""
            className="border h-12 placeholder:text-xs  "
            placeholder="Name"
          />
          <TextField
            type="email"
            name=""
            id=""
            className="border h-12 placeholder:text-xs "
            placeholder="Email"
          />
          <TextField
            type="number"
            name=""
            id=""
            className="border h-12 placeholder:text-xs "
            placeholder="Phone Number"
          />
        </div>
      </div>
      <div className="">
        <h3
          style={{
            fontSize: fontSize(36, 20, 1920, 400),
          }}
          className=" font-normal font-red-hat-text  hover:text-black  text-xl "
        >
          More Information
        </h3>
      </div>
      <div>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 mt-4">
          {/* <Select
            getLabel={(e: any) => e.lable}
            onChange={(e: any) => console.log(e)}
            defaultValue={"Select"}
            options={[
              { lable: "Male", value: "male" },
              { lable: "Female", value: "male" },
              { lable: "Others", value: "others" },
            ]}
          /> */}
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={age}
              label="Gender"
              // onChange={handleChange}
            >
              <MenuItem value={"male"}>Male</MenuItem>
              <MenuItem value={"female"}>Female</MenuItem>
              <MenuItem value={"others"}>Others</MenuItem>
            </Select>
          </FormControl>

          {/* <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            placeholder="Gender"
            size="small"

            onChange={handleChange}
          >
            <MenuItem value={"male"}>Male</MenuItem>
            <MenuItem value={"female"}>Female</MenuItem>
            <MenuItem value={"others"}>Others</MenuItem>
          </Select> */}
          <TextField
            type="text"
            name=""
            id=""
            className="border h-12 placeholder:text-xs pl-[25px] "
            placeholder="Date of Birth"
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">State</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={age}
              label="Gender"
              // onChange={handleChange}
            >
              <MenuItem value={"male"}>Male</MenuItem>
              <MenuItem value={"female"}>Female</MenuItem>
              <MenuItem value={"others"}>Others</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">City</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={age}
              label="Gender"
              // onChange={handleChange}
            >
              <MenuItem value={"male"}>Male</MenuItem>
              <MenuItem value={"female"}>Female</MenuItem>
              <MenuItem value={"others"}>Others</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">User Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={age}
              label="Gender"
              // onChange={handleChange}
            >
              <MenuItem value={"male"}>Male</MenuItem>
              <MenuItem value={"female"}>Female</MenuItem>
              <MenuItem value={"others"}>Others</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="mt-6">
          <Button className="bg-orange-200 px-14 py-5 text-[15px] font-semibold rounded-[0] text-white hover:bg-orange-500 ">
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NameInputField;

// <TextField
// className="w-[95px] [border:none] [outline:none] font-red-hat-text text-2xl bg-[transparent] h-7 relative text-darkslategray-100 text-left flex p-0 z-[1] hover:font-red-hat-text hover:text-2xl hover:text-left hover:text-darkslategray-100 hover:flex hover:w-[95px] hover:h-7 hover:p-0 mq450:text-mid"
// placeholder="Email"
// type="text"
// />
