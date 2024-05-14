"use client";
import { FunctionComponent, useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Card from "./sub-components/Card";
import SortIcon from "@mui/icons-material/Sort";
import {
  Autocomplete,
  Checkbox,
  FormControlLabel,
  FormLabel,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { getAllInstitutions } from "@/utils/getInstitution";
import { getAllStates } from "@/utils/state";
import { getAllCities } from "@/utils/city";
import { getAllSubjects } from "@/utils/Subjects";
import { getAllRatingBadges } from "@/utils/Ratings";
import { getAllProductCategories } from "@/utils/Category";
import { equal } from "assert";

const CollectionPageV2Approved: FunctionComponent = () => {
  const [univercityes, setUniverCityes] = useState<any>([]);
  const [states, setStates] = useState<any>([]);
  const [cities, setCities] = useState<any>([]);
  const [subjects, setSubjects] = useState<any>([]);
  const [ratingBadges, setRatingBadges] = useState<any>([]);
  const [sort, setSort] = useState<any>("");
  const [search, setSearch] = useState<any>("");
  const [certified, setCertified] = useState("");
  const [category, setCategory] = useState<any>([]);
  console.log({ univercityes });
  const [filters, setFilters] = useState({
    institution_type: [],
    overall_rating: [],
  });
  const fetchUnivercity = (filter: any = undefined) => {
    getAllInstitutions(filter).then((e) => {
      setUniverCityes(e.docs);
      console.log(e, "kkkkkkkkkkkkkkkkkkkkkkkk");
    });
  };
  useEffect(() => {
    fetchUnivercity();
    getAllStates().then((e) => setStates(e.docs));
    getAllCities().then((e) => setCities(e.docs));
    getAllSubjects().then((e) => setSubjects(e.docs));
    getAllRatingBadges().then((e) => setRatingBadges(e.docs));
    getAllProductCategories().then((e) => setCategory(e.docs));
  }, []);
  //write a function to filter the data based on the filters

  const handleChange = (type: string, value: any) => {
    console.log(type, value);
    setFilters({
      ...filters,
      [type]: value,
    });
  };

  useEffect(() => {
    fetchUnivercity({
      institution_type: {
        all: ["university", "school"],
      },
    });
  }, [filters]);

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
      <section className="md:mt-[71px] md:mx-[150px] mdm:px-5">
        <div className="grid grid-cols-12 gap-[50px] mdm:grid-cols-3 mdm:gap-10">
          <div className="col-span-3 border-[1px] border-whitesmoke-100 flex flex-col p-[16px] gap-[15px] mdm:hidden">
            <div className="text-[29px] font-semibold"> Filter</div>
            <div className="text-[16.13px]">Filter by location</div>

            <Autocomplete
              id="combo-box-demo"
              options={states}
              multiple
              getOptionLabel={(e: any) => e.state_name}
              renderInput={(params) => (
                <TextField {...params} label="Select State" />
              )}
            />
            <Autocomplete
              id="combo-box-demo"
              options={cities}
              multiple
              getOptionLabel={(e: any) => e.city_name}
              renderInput={(params) => (
                <TextField {...params} label="Select City" />
              )}
            />

            <div className="bg-white box-border  border-[1px] border border-whitesmoke-100 my-[20px]" />
            <FormControl style={{ minWidth: 200 }}>
              <InputLabel>Filter by Institutions</InputLabel>
              <Select
                multiple
                multiline
                value={filters.institution_type}
                placeholder="Filter by Institutions"
                label="Age"
                onChange={(e) =>
                  handleChange("institution_type", e.target.value)
                }
              >
                <MenuItem value={"university"}>University</MenuItem>
                <MenuItem value={"college"}>College</MenuItem>
                <MenuItem value={"school"}>School</MenuItem>
                <MenuItem value={"Autonomous College"}>
                  Autonomous College
                </MenuItem>
              </Select>
            </FormControl>
            <FormControl style={{ minWidth: 200 }}>
              <InputLabel>Filter by Ratings</InputLabel>
              <Select
                value={filters.overall_rating}
                multiline
                multiple
                placeholder="Filter by Ratings"
                label="Age"
                onChange={(e) => handleChange("overall_rating", e.target.value)}
              >
                {ratingBadges.map((e: any, i: number) => (
                  <MenuItem key={i} value={e.id}>
                    {e.badges_name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl style={{ minWidth: 200 }}>
              <InputLabel>Filter by Subject</InputLabel>
              <Select
                // value={age}
                placeholder="Filter by Subject"
                label="Age"
                // onChange={handleChange}
              >
                {subjects.map((e: any, i: number) => (
                  <MenuItem key={i} value={i}>
                    {e.subject_name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="E-LEAD & Adv E-LEAD Certified"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Subject & Category"
            />
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
                    {category.map((e: any, i: number) => (
                      <MenuItem key={i} value={e.product_category_name}>
                        {e.product_category_name}
                      </MenuItem>
                    ))}
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

            {univercityes?.map((university: any, i: number) => (
              <Card university={university} key={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CollectionPageV2Approved;
