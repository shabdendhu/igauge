"use client";
import { FunctionComponent, useCallback, useEffect, useState } from "react";
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
  Input,
  InputAdornment,
  OutlinedInput,
  TextField,
} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { getAllInstitutions } from "@/utils/getInstitution";
import { useCalculateFontSize } from "../../hooks/use-calculate-font-size";
import { fetchData } from "@/app/(app)/services/institution";
import { debounce, set } from "lodash";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useSearchParams } from "next/navigation";
import { addBookmarkInstitutionByUserId } from "../../services/bookmark";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { orange } from "@mui/material/colors";

const CollectionPageV2Approved: FunctionComponent = () => {
  const fontSize = useCalculateFontSize();
  const [universities, setUniversities] = useState<any>([]);
  const [states, setStates] = useState<any>([]);
  const [cities, setCities] = useState<any>([]);
  const [subjects, setSubjects] = useState<any>([]);
  const [ratingBadges, setRatingBadges] = useState<any>([]);
  const [overallRating, setOverallRating] = useState<any>([]);
  const [sort, setSort] = useState<any>("");
  const [search, setSearch] = useState<any>("");
  const [certified, setCertified] = useState("");
  const [category, setCategory] = useState<any>([]);
  const [institution, setInstitution] = useState([
    "universities",
    "schools",
    "colleges",
  ]);
  const [filters, setFilters] = useState({
    state: [],
    city: [],
    "ratings.overall_rating": { equals: null },
    "ratings.subject_ratings.subject_rating": { equals: null },
    "ratings.category-ratings.category_rating": { equals: null },
    institution_name: "",
    type: {
      institution_type: "universities",
      subj_ratings: "university-subject-ratings",
      overall_rating: "university-overall-rating",
      category_rating: "university-category-rating",
    },
    elead: "yes",
  });
  const fetchDataWithFilter = useCallback((filter: any) => {
    fetchData(filter.type.institution_type, {
      page: 0,
      limit: 5,
      depth: 1,
      filter: {
        state: { in: filter.state.map((e: any) => e.id) },
        city: { in: filter.city.map((e: any) => e.id) },
        "ratings.overall_rating": filter["ratings.overall_rating"].equals
          ? filter["ratings.overall_rating"]
          : undefined,
        "ratings.subject_ratings.subject_rating": filter[
          "ratings.subject_ratings.subject_rating"
        ].equals
          ? filter["ratings.subject_ratings.subject_rating"]
          : undefined,
        "ratings.category-ratings.category_rating": filter[
          "ratings.category-ratings.category_rating"
        ].equals
          ? filter["ratings.category-ratings.category_rating"]
          : undefined,
        institution_name: {
          like: filter.institution_name || undefined, // Adjust the search term as needed
        },
        "e-lead": { equals: filter.elead },
      },
    })
      .then((data) => setUniversities(data.docs))
      .catch((error) => console.log("Error fetching data:", error));
  }, []);
  useEffect(() => {
    fetchData("states", { page: 0, limit: 100, filter: {} }).then((data) =>
      setStates(data.docs)
    );
    fetchData("cities", { page: 0, limit: 100, filter: {} }).then((data) =>
      setCities(data.docs)
    );
  }, []);

  useEffect(() => {
    fetchData(filters.type.subj_ratings, {
      page: 0,
      limit: 100,
      filter: {},
    }).then((data) => setSubjects(data.docs));
    fetchData(filters.type.overall_rating, {
      page: 0,
      limit: 100,
      filter: {},
    }).then((data) => setOverallRating(data.docs));
    fetchData(filters.type.category_rating, {
      page: 0,
      limit: 100,
      filter: {},
    }).then((data) => setCategory(data.docs));
  }, [filters.type.subj_ratings, filters.type.overall_rating]);

  useEffect(() => {
    fetchDataWithFilter(filters);
  }, [filters, fetchDataWithFilter]);

  const handleFilterChange = (type: string, value: any) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [type]: value,
    }));
  };

  const handleSelectChange = (event: any) => {
    const value = event.target.value;

    const institutionDetails = {
      universities: {
        institution_type: "universities",
        subj_ratings: "university-subject-ratings",
        overall_rating: "university-overall-rating",
        category_rating: "university-category-rating",
      },
      colleges: {
        institution_type: "colleges",
        subj_ratings: "college-rating-badges",
        overall_rating: "college-overall-rating",
        category_rating: "collage-category-rating",
      },
      schools: {
        institution_type: "schools",
        subj_ratings: "school-subject-rating-badges",
        overall_rating: "school-overall-rating",
        category_rating: "school-category-rating",
      },
    };

    switch (value) {
      case "universities":
        handleFilterChange("type", institutionDetails.universities);
        break;
      case "colleges":
        handleFilterChange("type", institutionDetails.colleges);
        break;
      case "schools":
        handleFilterChange("type", institutionDetails.schools);
        break;
      default:
        break;
    }
  };

  //newly added
  // useEffect(() => {
  //   fetchData("universities", {
  //     page: 0,
  //     limit: 5,
  //     filter: filters,
  //   })
  //     .then((data) => {
  //       console.log(data, "fetched data");
  //       setUniverCityes(data.docs);
  //     })
  //     .catch((error) => {
  //       console.log("Error fetching data:", error);
  //     });
  //   fetchData("university-subject-ratings", {
  //     page: 0,
  //     limit: 5,
  //     filter: {},
  //   })
  //     .then((data) => {
  //       console.log(data, "fetched data");
  //       setSubjects(data.docs);
  //     })
  //     .catch((error) => {
  //       console.log("Error fetching data:", error);
  //     });
  //   fetchData("university-overall-rating", {
  //     page: 0,
  //     limit: 5,
  //     filter: {},
  //   })
  //     .then((data) => {
  //       console.log(data, "fetched data");
  //       setOverallRating(data.docs);
  //     })
  //     .catch((error) => {
  //       console.log("Error fetching data:", error);
  //     });
  //   fetchData("states", {
  //     page: 0,
  //     limit: 5,
  //     filter: {},
  //   })
  //     .then((data) => {
  //       console.log(data, "fetched data");
  //       setStates(data.docs);
  //     })
  //     .catch((error) => {
  //       console.log("Error fetching data:", error);
  //     });
  //   fetchData("cities", {
  //     page: 0,
  //     limit: 5,
  //     filter: {},
  //   })
  //     .then((data) => {
  //       console.log(data, "fetched data");
  //       setCities(data.docs);
  //     })
  //     .catch((error) => {
  //       console.log("Error fetching data:", error);
  //     });
  // }, []);
  //impliment search debounse

  const debouncedFetchData = useCallback(
    debounce((searchTerm: string) => {
      handleFilterChange("institution_name", searchTerm);
    }, 500),
    []
  );
  const handleChangeCheckBox = (key: string, e: any) => {
    handleFilterChange(key, e.target.checked ? "yes" : "no");
    console.log(key, e.target.checked);
  };
  useEffect(() => {
    console.log({
      univercityes: universities,
      states,
      cities,
      overallRating,
      subjects,
    });
  }, [universities, states, cities, overallRating, subjects]);
  const handleClickSortByAlphabetically = () => {};

  const handleClickSortByRating = () => {};
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
      <section className="md:mt-[71px] md:mx-[150px] mdm:px-5 mb-5">
        <div className="grid grid-cols-12 gap-[50px] mdm:grid-cols-3 mdm:gap-10">
          <div className="col-span-3 border-[1px] border-whitesmoke-100 flex flex-col p-[16px] gap-[15px] mdm:hidden">
            <div className="text-[29px] font-semibold"> Filter</div>
            <div className="text-[16.13px]">Filter by location</div>

            <Autocomplete
              id="combo-box-demo"
              options={states}
              multiple
              value={filters.state}
              getOptionLabel={(e: any) => e.state_name}
              onChange={(e, i) => handleFilterChange("state", i)}
              renderInput={(params) => (
                <OutlinedInput
                  {...params}
                  placeholder="Select State"
                  startAdornment={
                    <InputAdornment position="start">
                      <LocationOnIcon
                        style={{
                          color: "#DC6A6A",
                        }}
                      />
                    </InputAdornment>
                  }
                  style={{
                    paddingRight: 10,
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        // onClick={handleClickShowPassword}
                        // onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        <KeyboardArrowDownIcon />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              )}
            />
            <Autocomplete
              id="combo-box-demo"
              options={cities}
              value={filters.city}
              multiple
              getOptionLabel={(e: any) => e.city_name}
              onChange={(e, i) => handleFilterChange("city", i)}
              renderInput={(params) => (
                <OutlinedInput
                  {...params}
                  placeholder="Select City"
                  startAdornment={
                    <InputAdornment position="start">
                      <LocationOnIcon
                        style={{
                          color: "#DC6A6A",
                        }}
                      />
                    </InputAdornment>
                  }
                  style={{
                    paddingRight: 10,
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        // onClick={handleClickShowPassword}
                        // onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        <KeyboardArrowDownIcon />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              )}
            />

            <div className="bg-white box-border  border-[1px] border border-whitesmoke-100 my-[20px]" />
            <FormControl style={{ minWidth: 200 }}>
              <InputLabel>Filter by Institutions</InputLabel>
              <Select
                // multiple
                multiline
                value={filters.type.institution_type}
                placeholder="Filter by Institutions"
                label="Age"
                onChange={handleSelectChange}
              >
                <MenuItem value={"universities"}>University</MenuItem>
                <MenuItem value={"colleges"}>College</MenuItem>
                <MenuItem value={"schools"}>School</MenuItem>
                <MenuItem value={"autonomous-college"}>
                  Autonomous College
                </MenuItem>
              </Select>
            </FormControl>
            <FormControl style={{ minWidth: 200 }}>
              <InputLabel>Filter by Ratings</InputLabel>
              <Select
                value={filters["ratings.overall_rating"].equals}
                multiline
                // multiple
                placeholder="Filter by Ratings"
                onChange={(e) =>
                  handleFilterChange("ratings.overall_rating", {
                    equals: e.target.value,
                  })
                }
              >
                {overallRating.map((e: any, i: number) => (
                  <MenuItem key={i} value={e.id}>
                    {e.badges_name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl style={{ minWidth: 200 }}>
              <InputLabel>Filter by Subject</InputLabel>
              <Select
                value={filters["ratings.subject_ratings.subject_rating"].equals}
                placeholder="Filter by Subject"
                onChange={(e: any) =>
                  handleFilterChange("ratings.subject_ratings.subject_rating", {
                    equals: e.target.value,
                  })
                }
              >
                {subjects.map((e: any, i: number) => (
                  <MenuItem key={i} value={e.id}>
                    {e.badges_name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControlLabel
              control={
                <Checkbox
                  onChange={(e: any) => handleChangeCheckBox("elead", e)}
                  defaultChecked
                  sx={{
                    color: orange[800],
                    "&.Mui-checked": {
                      color: orange[600],
                    },
                  }}
                />
              }
              label="E-LEAD & Adv E-LEAD Certified"
            />
            <FormControlLabel
              control={
                <Checkbox
                  // onChange={(e: any) => handleChangeCheckBox("subject", e)}
                  defaultChecked
                  sx={{
                    color: orange[800],
                    "&.Mui-checked": {
                      color: orange[600],
                    },
                  }}
                />
              }
              label="Subject & Category"
            />
            <div className="bg-white box-border  border-[1px] border- border-whitesmoke-100 my-[20px]" />
          </div>

          <div className="col-span-3 md:col-span-9 flex flex-col w-full gap-10">
            <div className="bordder border-red-500 flex justify-between mdm:flex-col mdm:gap-2">
              <div className="flex gap-10 mdm:flex-col mdm:gap-2">
                <span>
                  <IconButton onClick={handleClickSortByAlphabetically}>
                    <SortIcon />
                  </IconButton>
                  Sort A to Z
                </span>
                <span>
                  <IconButton onClick={handleClickSortByRating}>
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
                    value={
                      filters["ratings.category-ratings.category_rating"].equals
                    }
                    onChange={(e: any) =>
                      handleFilterChange(
                        "ratings.category-ratings.category_rating",
                        {
                          equals: e.target.value,
                        }
                      )
                    }
                  >
                    {category.map((e: any, i: number) => (
                      <MenuItem key={i} value={e.id}>
                        {e.badges_name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <TextField
                size="small"
                placeholder="Search"
                onChange={(e) => debouncedFetchData(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </div>

            {universities?.map((university: any, i: number) => (
              <Card university={university} filters={filters} key={i} />
            ))}
          </div>
        </div>
      </section>
      <div
        style={{
          background: "linear-gradient(90deg, #272761 0%, #321489 100%)",
        }}
        className=" overflow-hidden border-red-500 bordcer-[2px] aspect-[1920/628] relative flex items-center justify-between px-5 md:px-20"
      >
        <div className="aspect-[600/311]  h-[50%] borcder border-red-500 flex flex-col justify-between mdm:h-[60%]">
          <div
            style={{
              fontSize: fontSize(48, 12, 1920, 400),
              fontWeight: 700,
              textAlign: "left",
            }}
            className="text-white font-semibold text-center font-libre-baskerville"
          >
            Register to QS i-gauge to compare Institutions
          </div>
          <div
            style={{
              fontSize: fontSize(20, 4, 1920, 400),
              fontFamily: "Libre Baskerville",
              fontWeight: 400,
              textAlign: "left",
            }}
            className="text-white font-semibold text-center font-red-hat-text "
          >
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium...
          </div>
          <button>
            <img
              src="Button.svg"
              style={{
                height: fontSize(76, 15, 1920, 400),
              }}
            />
          </button>
        </div>
        <img src="qs.svg" className="h-full" />
        <img src="circle-left.png" className="absolute bottom-[-50%] left-0" />
      </div>
    </div>
  );
};

export default CollectionPageV2Approved;
