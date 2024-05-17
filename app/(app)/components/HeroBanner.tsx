"use client";
import { FunctionComponent, useEffect } from "react";
import { useState } from "react";
import {
  getInstitutionCountsByType,
  searchInstitutions,
} from "@/utils/getInstitution";
import { getAllRatingBadges } from "@/utils/Ratings";
import Select from "@/app/(app)/components/v1/Select";
import TypingEffect from "@/app/(app)/components/v1/TypeingEffect";
import { useRouter } from "next/navigation";

const SelectUnivercity = ({ label = "select" }) => {
  const [selectedValue, setSelectedValue] = useState<any>("");
  const [options, setOptions] = useState([
    {
      label: "University",
      value: "university",
    },
    {
      label: "College",
      value: "college",
    },
    {
      label: "School",
      value: "school",
    },
    {
      label: "Autonomous College",
      value: "Autonomous College",
    },
  ]);
  const handleChange = (event: any) => {
    setSelectedValue(event);
    // Do something with the selected value
    // console.log("Selected value:", event);
  };

  // useEffect(() => {
  //   getAllInstitutions()
  //     .then((data: any) => setOptions(data?.docs))
  //     .catch((err) => console.log(err));
  // }, []);
  // useEffect(() => {
  //   console.log(options);
  // }, [options]);

  return (
    <div className="h-full w-full flex relative">
      <Select
        getLabel={(e: any) => e.label}
        defaultValue={""}
        options={options}
        onChange={handleChange}
      />
      {/* <select
        className="appearance-none  bg-white h-full w-full   top-0 border-[2px] border-[#F7A600] z-5 px-[10px]  font-red-hat-display text-xl text-darkslategray-100 mq1440:text-[14px] mq1600:text-[20px] mq900:text-[14px] text-gray-500"
        value={selectedValue}
        onChange={handleChange}
      >
        <option value="">{label}</option>
        {options.map((e, i) => (
          <option
            style={{
              maxWidth: "100%",
            }}
            value={e?.value}
            key={i}
          >
            {e?.label}
          </option>
        ))}
      </select>
      <img
        className="absolute right-5 top-[50%] transform -translate-y-1/2 w-[11px] h-1.5"
        alt=""
        src="/vector-5.svg"
      /> */}
    </div>
  );
};

const SelectRatings = ({ label = "select" }) => {
  const [selectedValue, setSelectedValue] = useState<any>("Select Ratings");
  const [options, setOptions] = useState([{ badges_name: "" }]);
  //
  const handleChange = (event: any) => {
    setSelectedValue(event.badges_name);
    // Do something with the selected value
    // console.log("Selected value:", event);
  };

  useEffect(() => {
    // getAllRatingBadges()
    //   .then((data: any) => setOptions(data?.docs))
    //   .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    // console.log(options);
  }, [options]);

  return (
    <div className="h-full w-full flex relative">
      <Select
        getLabel={(e: any) => e.badges_name}
        defaultValue={selectedValue}
        options={options}
        onChange={handleChange}
      />
      {/* <select
        className="appearance-none  bg-white h-full w-full   top-0 border-[2px] border-[#F7A600] z-5 px-[10px]  font-red-hat-display text-xl text-darkslategray-100 mq1440:text-[14px] mq1600:text-[20px] mq900:text-[14px] text-gray-500 "
        value={selectedValue}
        onChange={handleChange}
      >
        <option
          className="h-[70px] w-full border cursor-pointer bg-white hover:bg-orange-500  px-[20px] flex items-center font-red-hat-display  text-5xl text-black mq450:text-lgi mq1440:text-[14px] mq1600:text-[20px]"
          value=""
        >
          {label}
        </option>
        {options.map((e, i) => (
          <option
            className="h-[70px] w-full border cursor-pointer bg-white hover:bg-orange-500  px-[20px] flex items-center font-red-hat-display  text-5xl text-black mq450:text-lgi mq1440:text-[14px] mq1600:text-[20px]"
            value={e?.badges_name}
            key={i}
          >
            {e?.badges_name}
          </option>
        ))}
      </select>
      <img
        className="absolute right-5 top-[50%] transform -translate-y-1/2 w-[11px] h-1.5"
        alt=""
        src="/vector-5.svg"
      /> */}
    </div>
  );
};

const SearchUniversity: any = ({ router }: any) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [options, setOptions] = useState<any>([]);
  const [isOpen, setIsOpen] = useState(false);
  const handleFocus = () => {
    setIsOpen(true);
  };

  const handleBlur = () => {
    setIsOpen(false);
  };
  const debounce = <T extends any[]>(
    func: (...args: T) => void,
    delay: number
  ) => {
    let timer: ReturnType<typeof setTimeout>;
    return (...args: T) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const debouncedSearch = debounce((value: string) => {
    // Implement your search logic here
    console.log("Searching for:", value);
    // Call the search function with the debounced search term
    searchInstitutions({
      // Example filters
      filters: {
        // Filter by institution name containing 'University'
        institution_name: { $regex: value, $options: "i" },
        // Filter by type 'public'
        type: "public",
        // Add more filters as needed
      },
      // Example sorting (optional)
      sort: { established_on: -1 }, // Sort by established_on in descending order
      // Example pagination (optional)
      limit: 10, // Limit the results to 10 institutions
    }).then((e) =>
      setOptions(
        e.docs.map((e) => ({ label: e.institution_name, value: e.id }))
      )
    );
  }, 500);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchTerm(value);
    debouncedSearch(value);
  };
  const handleClickInstitute = () => {
    router.push("/university-search");
  };
  return (
    <div className="flex grid grid-cols-12 w-2/4 h-[70px] mq900:w-full mq900:h-[50px] mq900:p-[10px]">
      <div className="h-[70px] col-span-8 flex-1 bg-white box-border flex flex-row items-center justify-start pt-[23px] px-[23px] pb-6 gap-[15px] w-full z-[3] border-[2px] border-solid border-orange-200 mq1440:p-[12px]  mq1920:p-[18px] mq900:h-[50px] relative">
        <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
          <img
            className="w-5 h-5 relative z-[1 mq1440:h-[14px]"
            alt=""
            src="/search.svg"
          />
        </div>

        <input
          className="w-52 [border:none] [outline:none] font-red-hat-display text-xl bg-[transparent] h-[26px] relative text-darkslategray-100 text-left inline-block p-0 z-[1] mq450:text-base mq1440:text-[14px] mq1600:text-[20px] "
          placeholder="Search for Institutions..."
          type="text"
          value={searchTerm}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleSearch}
        />
      </div>

      <button className="h-[70px] items-center col-span-4 cursor-pointer [border:none] pt-[23px] px-5 pb-6 bg-orange-200  w-full flex flex-row items-start justify-center box-border z-[3] mq1440:p-[16px] mq900:h-[50px]">
        <div className="h-[79px] w-full relative bg-orange-200 hidden" />
        <div className="relative text-5xl font-red-hat-display text-black text-center inline-block z-[1] mq450:text-lgi mq1440:text-[14px] mq1600:text-[20px]">
          Search
        </div>
      </button>
      <div className="col-span-8   z-[99]">
        {isOpen ? (
          options.map((e: any, i: any) => (
            <div
              className="h-[70px] w-full border cursor-pointer bg-white hover:bg-orange-500  px-[20px] flex items-center font-red-hat-display  text-5xl text-black mq450:text-lgi mq1440:text-[14px] mq1600:text-[20px]"
              onClick={handleClickInstitute}
            >
              {e.label}
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

const Features = ({ pageData }: any) => {
  const [counts, setCounts] = useState({
    school: 0,
    collage: 0,
    institution: 0,
    rating: 0,
    university: 0,
  });
  useEffect(() => {
    // getInstitutionCountsByType()
    //   .then((data: any) => setCounts({ ...counts, ...data }))
    //   .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    // console.log(counts);
  }, [counts]);

  return (
    <div className=" w-2/3 grid grid-cols-4 mq900:grid-cols-2 gap-4 w-full">
      {pageData.content[4].counters.map((e: any) => (
        <div className=" flex justify-center mq900:w-full">
          <div className="w-[227px] flex flex-col items-start justify-start gap-[19px]">
            <b className="relative mq450:text-14xl mq900:text-25xl">
              {e.number}+
            </b>
            <div className="relative text-xl inline-block min-w-[78px] mq450:text-base">
              {e.title}
            </div>
          </div>
        </div>
      ))}
      {/* <div className=" flex justify-center mq900:w-full">
        <div className="w-[227px] flex flex-col items-start justify-start gap-[19px]">
          <b className="relative mq450:text-14xl mq900:text-25xl">
            {counts.collage}+
          </b>
          <div className="relative text-xl inline-block min-w-[78px] mq450:text-base">
            Collages
          </div>
        </div>
      </div>
      <div className="flex justify-center mq900:w-full">
        <div className="w-[227px] flex flex-col items-start justify-start gap-[19px]">
          <b className="relative mq450:text-14xl mq900:text-25xl">
            {counts.collage + counts.school + counts.university}+
          </b>
          <div className="relative text-xl inline-block min-w-[78px] mq450:text-base">
            Institutions Rated
          </div>
        </div>
      </div>
      <div className="flex justify-center mq900:w-full">
        <div className="w-[227px] flex flex-col items-start justify-start gap-[19px]">
          <b className="relative mq450:text-14xl mq900:text-25xl">20+</b>
          <div className="relative text-xl inline-block min-w-[78px] mq450:text-base">
            Years QS Legacy
          </div>
        </div>
      </div> */}
    </div>
  );
};
const TextBlock = ({ header, description }: any) => {
  // console.log({ header });
  return (
    <div className="h-full  flex flex-1 flex-col justify-around ">
      <h1
        className="text-inherit font-bold font-inherit inline-block max-w-full z-[2]  
                mq450:text-19xl mq900:text-32xl  mq1600:text-[45px] 
                "
      >
        {header.prefix}
        <TypingEffect words={header.texts.map((e: any) => e.text)} />
        {header.suffix}
      </h1>
      <div className="w-full relative text-xl font-red-hat-text text-[20px] z-[2] mq450:text-base ">{`Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. `}</div>
    </div>
  );
};
const FrameComponent10: any = ({ pageData }: any) => {
  const router = useRouter();

  return (
    <section className="min-h-[100px] self-stretch flex flex-row items-start justify-start pt-0 px-0  box-border max-w-full text-center text-45xl text-black font-libre-baskerville mq900:pb-[45px] mq900:box-border mq1275:pb-[69px] mq1275:box-border">
      <div className="h-[1000px] flex-1 relative [background:linear-gradient(180deg,_#fff0d1_71.5%,_#fff)] overflow-hidden max-w-full mq1275:h-auto mq1275:min-h-[983]">
        <img
          className="absolute top-[0px] left-[0px] w-full h-full hidden"
          alt=""
          src="/rectangle-162.svg"
        />
        <div className="absolute w-full h-full">
          <div className="grid grid-cols-10 w-full h-screen mq900:grid-cols-4">
            <div className="col-span-1 border-r-[1.6px] border-solid border-orange-300" />
            <div className="col-span-1 border-r-[1.6px] border-solid border-orange-300" />
            <div className="col-span-1 border-r-[1.6px] border-solid border-orange-300" />
            <div className="col-span-1 border-r-[1.6px] border-solid border-orange-300" />
            <div className="col-span-1 border-r-[1.6px] border-solid border-orange-300" />
            <div className="col-span-1 border-r-[1.6px] border-solid border-orange-300" />
            <div className="col-span-1 border-r-[1.6px] border-solid border-orange-300" />
            <div className="col-span-1 border-r-[1.6px] border-solid border-orange-300" />
            <div className="col-span-1 border-r-[1.6px] border-solid border-orange-300" />
            <div className="col-span-1" />
          </div>
        </div>
        <div className="w-screen min-h-screen px-10 pt-[80px]  mq900:pt-[10px] mq900:px-5 relative">
          <div className="flex h-1/2 mdm:justify-between mdm:px-10 mq900:px-0">
            <div className="w-1/4 mdm:w-2/4">
              <img src={pageData?.content[1]?.image.url} />
            </div>
            <div className=" w-2/4 mdm:absolute mdm:top-[300px] mdm:z-3 mdm:left-0 mdm:w-screen mdm:px-20 mq900:px-5 mq900:top-[200px]">
              <div className=" h-full mdm:hidden">
                <TextBlock
                  className=""
                  header={{
                    prefix: pageData.content[0].prefix,
                    suffix: pageData.content[0].suffix,
                    texts: pageData.content[0].texts,
                  }}
                  description={"missing"}
                />
              </div>
            </div>
            <div className=" w-1/4 mdm:w-2/4">
              <img src={pageData.content[2].image.url} />
            </div>
          </div>
          <div className="pt-10 px-10 md:hidden mdm:px-0">
            <TextBlock
              className
              header={{
                prefix: pageData.content[0].prefix,
                suffix: pageData.content[0].suffix,
                texts: pageData.content[0].texts,
              }}
              description={"missing"}
            />
          </div>
          <div className="w-4/5 mx-auto flex flex-wrap justify-around  px-10 py-10  mdm:px-0 mdm:w-full ">
            <div className="flex px-[10px] w-1/4 h-[70px] mq900:w-1/2 mq900:h-[50px]">
              <SelectUnivercity label="Select Institution" />
            </div>
            <div className=" flex px-[10px] w-1/4 h-[70px] mq900:w-1/2 mq900:h-[50px]">
              <SelectRatings label="Select Ratings" />
            </div>
            <SearchUniversity router={router} />
          </div>
          <div className="self-stretch flex flex-row items-center justify-center max-w-full text-13xl">
            <div className="flex flex-col items-center justify-center py-0 pr-0 pl-5 box-border gap-[45px] max-w-full">
              <div className="w-[1137px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full mq900:px-0">
                <b className="w-[829px] relative inline-block shrink-0 max-w-full z-[3] mq450:text-lgi mq900:text-7xl md:pt-[50px]">
                  {pageData.content[3].text}
                </b>
              </div>
              <div className="self-stretch flex flex-row items-start justify-center justify-start gap-[98px] z-[3] text-left text-36xl font-red-hat-text mq1275:flex-wrap mq1275:justify-center">
                <Features pageData={pageData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent10;
