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
import dummyData from "@/datatypes/home.json";
import { AnyARecord } from "dns";
import { fetchData } from "../services/institution";
import { useCalculateFontSize } from "../hooks/use-calculate-font-size";
const SelectUnivercity = ({ onChange }: any) => {
  const [selectedValue, setSelectedValue] = useState<any>("");
  const [options, setOptions] = useState([
    {
      label: "University",
      value: "universities",
    },
    {
      label: "College",
      value: "colleges",
    },
    {
      label: "School",
      value: "schools",
    },
    {
      label: "Autonomous College",
      value: "colleges",
    },
  ]);
  const handleChange = (event: any) => {
    setSelectedValue(event);
    onChange && onChange(event);
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
        defaultValue={"University"}
        options={options}
        onChange={handleChange}
      />
    </div>
  );
};

const SelectRatings = ({ onChange, institutionType }: any) => {
  const [selectedValue, setSelectedValue] = useState<any>("Select Ratings");
  const [options, setOptions] = useState([{ badges_name: "" }]);
  const ratingCollections: any = {
    colleges: "college-overall-rating",
    schools: "school-overall-rating",
    universities: "university-overall-rating",
  };
  const handleChange = (event: any) => {
    setSelectedValue(event.badges_name);
    console.log({ event });
    onChange(event);
    // Do something with the selected value
    // console.log("Selected value:", event);
  };

  useEffect(() => {
    // getAllRatingBadges()
    //   .then((data: any) => setOptions(data?.docs))
    //   .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    fetchData(
      ratingCollections[institutionType] || "university-overall-rating",
      { depth: 3 }
    )
      .then((data: any) => setOptions(data?.docs))
      .catch((err) => console.log(err));
    console.log(ratingCollections[institutionType]);
  }, [institutionType]);

  return (
    <div className="h-full w-full flex relative">
      <Select
        getLabel={(e: any) => e.badges_name}
        defaultValue={selectedValue}
        options={options}
        onChange={handleChange}
      />
    </div>
  );
};

const SearchUniversity = ({
  router,
  institutionType = "universities",
  ratings,
}: any) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [options, setOptions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleFocus = () => {
    setIsOpen(true);
  };

  const handleBlur = () => {
    // setIsOpen(false);
  };

  const debounce = (func: any, delay: any) => {
    let timer: any;
    return (...args: any) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const debouncedSearch = debounce(async (value: any) => {
    if (false) {
      const collections = ["colleges", "schools", "universities"];
      const searchResults = await Promise.all(
        collections.map((collection) =>
          fetchData(collection, {
            filter: { institution_name: { contains: value } },
            limit: 10,
          })
        )
      );
      const allResults = searchResults.reduce(
        (acc, current) => acc.concat(current.docs),
        []
      );
      setOptions(
        allResults.map((e: any) => ({ label: e.institution_name, value: e.id }))
      );
    } else {
      fetchData(institutionType || "universities", {
        filter: { institution_name: { contains: value } },
        limit: 10,
      }).then((e) =>
        setOptions(
          e.docs.map((e: any) => ({ label: e.institution_name, value: e.id }))
        )
      );
    }
  }, 500);

  const handleSearch = (e: any) => {
    const { value } = e.target;
    setSearchTerm(value);
    debouncedSearch(value);
  };

  const handleClickInstitute = (id: any) => {
    router.push(
      `/university-detail?id=${id}&institution_type=${
        institutionType || "universities"
      }`
    );
  };

  return (
    <div className="flex grid grid-cols-12 w-2/4 h-[70px] mq900:w-full mq900:h-[50px] mq900:p-[10px]">
      <div className="h-[70px] col-span-8 flex-1 bg-white box-border flex flex-row items-center justify-start pt-[23px] px-[23px] pb-6 gap-[15px] w-full z-[3] border-[2px] border-solid border-orange-200 mq1440:p-[12px] mq1920:p-[18px] mq900:h-[50px] relative">
        <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
          <img
            className="w-5 h-5 relative z-[1] mq1440:h-[14px]"
            alt=""
            src="/search.svg"
          />
        </div>

        <input
          className="w-52 [border:none] [outline:none] font-red-hat-display text-xl bg-[transparent] h-[26px] relative text-darkslategray-100 text-left inline-block p-0 z-[1] mq450:text-base mq1440:text-[14px] mq1600:text-[20px]"
          placeholder="Search for Institutions..."
          type="text"
          value={searchTerm}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleSearch}
        />
      </div>

      <button className="h-[70px] items-center col-span-4 cursor-pointer [border:none] pt-[23px] px-5 pb-6 bg-orange-200 w-full flex flex-row items-start justify-center box-border z-[3] mq1440:p-[16px] mq900:h-[50px]">
        <div className="h-[79px] w-full relative bg-orange-200 hidden" />
        <div className="relative text-5xl font-red-hat-display text-black text-center inline-block z-[1] mq450:text-lgi mq1440:text-[14px] mq1600:text-[20px]">
          Search
        </div>
      </button>
      <div className="col-span-8 z-[99]">
        {isOpen
          ? options.map((e: any, i) => (
              <div
                key={i}
                className="h-[70px] w-full border cursor-pointer bg-white hover:bg-orange-500 px-[20px] flex items-center font-red-hat-display text-5xl text-black mq450:text-lgi mq1440:text-[14px] mq1600:text-[20px]"
                onClick={() => handleClickInstitute(e.value)}
              >
                {e?.label || ""}
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

const Features = ({ pageData }: any) => {
  return (
    <div className=" w-2/3 grid grid-cols-4 mq900:grid-cols-2 gap-4 w-full">
      {pageData.content[4].counters.map((e: any, i: number) => (
        <div key={i} className=" flex justify-center mq900:w-full">
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
    </div>
  );
};
const TextBlock = ({ header, description }: any) => {
  const fontSize = useCalculateFontSize();
  return (
    <div className="h-full  flex flex-1 flex-col justify-around ">
      <h1
        style={{
          fontSize: fontSize(50, 34, 1920, 400),
        }}
        className="text-inherit font-bold font-inherit inline-block max-w-full z-[2] mq450:text-19xl mq900:text-32xl mq1600:text-[45px]"
      >
        {header.prefix}
        <TypingEffect words={header.texts.map((e: any) => e.text)} />
        {header.suffix}
      </h1>
      <div className="w-full relative text-xl font-red-hat-text text-[20px] z-[2] mq450:text-base ">{`Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. `}</div>
    </div>
  );
};
const FrameComponent10: any = ({ pageData = dummyData }: any) => {
  const router = useRouter();
  const [institutionType, setinstitutionType] = useState<any>("");
  const [ratings, setRatings] = useState<any>("");
  const handleChangeInstitutionType = (e: any) => {
    console.log(e, "==============");
    setinstitutionType(e.value);
  };
  const handleChangeRating = (e: any) => {
    console.log(e, "==============");
    setRatings(e.id);
  };
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
            <div className="w-[21%] mdm:w-2/4">
              <img src={pageData?.content[1]?.image.url} />
            </div>
            <div className=" w-[58%] mdm:absolute mdm:top-[300px] mdm:z-3 mdm:left-0 mdm:w-screen mdm:px-20 mq900:px-5 mq900:top-[200px]">
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
            <div className=" w-[21%] mdm:w-2/4">
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
              <SelectUnivercity onChange={handleChangeInstitutionType} />
            </div>
            <div className=" flex px-[10px] w-1/4 h-[70px] mq900:w-1/2 mq900:h-[50px]">
              <SelectRatings
                onChange={handleChangeRating}
                institutionType={institutionType}
                label="Select Ratings"
              />
            </div>
            <SearchUniversity
              institutionType={institutionType}
              ratings={ratings}
              router={router}
            />
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
