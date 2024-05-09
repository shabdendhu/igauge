import { FunctionComponent } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Card from "./sub-components/Card";
import SortIcon from "@mui/icons-material/Sort";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
const CollectionPageV2Approved: FunctionComponent = () => {
  return (
    <div className="university-search flex flex-col">
      <div className="bg-papayawhip box-border md:h-32 border-[1px] border-solid border-orange-200 flex items-center justify-between w-full md:px-[150px] mdm:px-5 mdm:py-5">
        <b className="text-[36px] font-libre-baskerville  md:h-11 mdm:text-base">
          Top Rated Scools
        </b>
        <div className="  md:w-[257px] md:h-[22px] mdm:text-smi-6">
          <span>{`Home `}</span>
          <b className="text-orange-200">{`>`}</b>
          <span>{` Rated Institution `}</span>
        </div>
      </div>
      <section className="md:mt-[71px] md:mx-[100px] mdm:px-5">
        <div className="grid grid-cols-12 gap-10 mdm:grid-cols-3">
          <div className="col-span-3 border-[1px] border-whitesmoke-100 flex flex-col p-[16px] gap-[5px] mdm:hidden">
            <div className="text-[29px] font-semibold"> Filter</div>
            <div className="text-[16.13px]">Filter by location</div>
            <Select />
            <Select />
            <div className="bg-white box-border  border-[1px] border border-whitesmoke-100 my-[20px]" />
            <Select />
            <Select />
            <Select />
            <div className="bg-white box-border  border-[1px] border- border-whitesmoke-100 my-[20px]" />
          </div>

          {/* Right section */}
          <div className="col-span-3 md:col-span-9 flex flex-col w-full gap-10">
            {/* Card section */}
            <div className="bordder border-red-500 flex justify-between mdm:flex-col mdm:gap-2">
              <div className="flex gap-10 mdm:flex-col mdm:gap-2">
                <span>
                  <IconButton>
                    <SortIcon />
                  </IconButton>
                  Sort A to Z
                </span>
                <span>
                  <IconButton>
                    <SortIcon />
                  </IconButton>
                  Sort from Highest Rating to Lowest
                </span>
                <FormControl size="small" style={{ minWidth: 200 }}>
                  <InputLabel size="small">Sort By Category</InputLabel>
                  <Select
                    // value={age}
                    size="small"
                    placeholder="Sort By Category"
                    label="Age"
                    // onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <TextField
                size="small"
                placeholder="Search"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            {/* eslint-disable */}

            {Array.from({ length: 4 }).map(() => (
              <Card />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CollectionPageV2Approved;
