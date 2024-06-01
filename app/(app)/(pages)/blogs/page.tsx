//@ts-nocheck
"use client";
import type { NextPage } from "next";
import FrameComponent11 from "../../components/FrameComponent1";
import BlogCardSmall from "@/app/(app)/components/v1/BlogCardSmall";
import { useCalculateFontSize } from "../../hooks/use-calculate-font-size";
import { useEffect, useState } from "react";
import { fetchData } from "../../services/institution";
import { useRouter } from "next/navigation";
import MultiActionAreaCard from "./components/card";
import LinierCard from "./components/LinerCard";
import PageHeader from "@/app/(app)/components/v1/PageHeader";
import { Pagination } from "@mui/material";
import { useDebounce } from "../../hooks/useDebounse";
// import { useDebounce } from "../../hooks/use-debounce"; // Import the debounce hook

const BlogsV2Approved: NextPage = () => {
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);
  const [latestBlogs, setLatestBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [blogcategory, setBlogcategory] = useState([]);
  const [searchText, setSearchText] = useState("");
  const debouncedSearchText = useDebounce(searchText, 500); // Use the debounce hook
  const fontSize = useCalculateFontSize();

  useEffect(() => {
    fetchData("blogs", {
      page: page - 1,
      limit: 10,
      depth: 1,
      filter: {
        blog_title: { like: debouncedSearchText }, // Use debounced value here
      },
    }).then((data) => {
      setBlogs(data.docs);
      setTotalPages(data.totalPages);
    });
  }, [page, debouncedSearchText]); // Listen for changes to debouncedSearchText

  useEffect(() => {
    fetchData("blogs", {
      page: 0,
      limit: 3,
      depth: 1,
      sort: {
        createdAt: -1, // Sort by createdAt in descending order
      },
    }).then((data) => setLatestBlogs(data.docs));
    fetchData("blogs-category", {}).then((e) => setBlogcategory(e?.docs));
  }, []);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div>
      <PageHeader
        header={"Blogs"}
        path={
          <>
            Home <span className="text-orange-400"> &gt; </span>
            Blogs
          </>
        }
      />
      <div className="max-w-[1920px] m-auto px-6 md:px-[100px] pt-20">
        <div className="w-full block md:hidden ">
          <div className="flex justify-center items-center px-5  w-full    h-10  ">
            <div className="flex w-full h-full justify-start items-center  rounded-sm ">
              <div className="flex justify-start items-center border rounded-md  h-full w-full px-3 mr-5 ">
                <div className="min-w-5">
                  <img
                    className="w-5 h-5 relative z-[2]"
                    alt=""
                    src="/search.svg"
                  />
                </div>
                <input
                  className="ml-3 h-full   text-sm    "
                  type="text"
                  id="search"
                  placeholder="Search something.."
                  onChange={handleSearch} // Attach search handler
                />
              </div>
            </div>
            <div className="flex items-center gap-x-1 mx-1">
              <img
                className="w-4 h-4 relative z-[2]"
                alt=""
                src="/search.svg"
              />
              <p className="text-xs font-red-hat-text">Filter</p>
            </div>
          </div>
        </div>

        <div className="w-full h-full bg-white  hidden md:block">
          <h1
            style={{
              fontSize: fontSize(48, 14, 1920, 400),
            }}
            className="font-libre-baskerville text-lg md:text-4xl font-semibold"
          >
            Latest Blog Posts
          </h1>
          <div className="  mt-6">
            <div className="flex w-full  gap-5">
              <MultiActionAreaCard data={latestBlogs[0]} />
              <div className="flex flex-col h-full w-1/2   gap-y-4  ">
                {latestBlogs.slice(1, 3).map((e, i) => (
                  <LinierCard
                    onClick={() => router.push("/blog?id=" + e.id)}
                    data={e}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Grid system starts from here */}
        <div className="grid grid-cols-9  gap-8">
          <div className="col-start-1 col-span-9 md:col-span-7 ">
            <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-3 md:gap-[50px]">
              {blogs.map((blog, i) => (
                <MultiActionAreaCard key={i} className="w-full" data={blog} />
              ))}
            </div>
            <Pagination
              count={totalPages}
              page={page}
              onChange={handlePageChange}
              color="primary"
              className="mt-8"
            />
          </div>
          <div className="col-start-8 col-span-2    mt-10 hidden md:block">
            <div className="flex flex-col px-2 border rounded-sm py-10">
              <div className="flex items-center border  rounded-sm mx-3 px-2   gap-x-4">
                <img
                  className="w-4 h-4 relative z-[2]"
                  alt=""
                  src="/search.svg"
                />
                <input
                  className=" w-full outline-none text-sm   max-w-[300px] h-14 "
                  type="text"
                  onChange={handleSearch} // Attach search handler
                  id="search"
                  placeholder="Search for Articles"
                />
              </div>
              {/* Check boxes list */}
              {blogcategory.map((e, i) => (
                <div key={i} className="flex flex-col  mt-2 gap-7">
                  <div className="flex items-center justify-start  px-3  gap-2">
                    <input
                      type="checkbox"
                      className="w-4 h-4  accent-orange-200"
                    />
                    <label className="font-red-hat-text font-normal">
                      {e?.blog_category_name}
                    </label>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-28  rounded-[5.52px] bg-darkslateblue flex flex-col items-start justify-end pt-[210.7px] pb-[39.7px] pr-[38.6px] pl-[39px] box-border relative gap-[20.7px] max-w-full text-[30px] text-white font-libre-baskerville mq450:pt-[137px] mq450:pb-[26px] mq450:box-border">
              <div className="w-[395px] h-[442.4px] relative rounded-[5.52px] bg-darkslateblue hidden max-w-full " />
              <b className="self-stretch relative z-[1] mq450:text-[25px] mq900:text-[34px]">
                Register for Free
              </b>
              <button className="cursor-pointer  p-5   bg-orange-200 self-stretch flex flex-row items-start justify-center z-[1]">
                <p className="flex items-center text-[23px] h-[25px] font-red-hat-display text-black  ">
                  Register
                </p>
              </button>
              <img
                className="w-[307.8px] h-[251.6px] absolute !m-[0] top-[-61.8px] left-[32px] object-contain z-[1]"
                loading="lazy"
                alt=""
                src="/image-161@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="mt-5">
        <FrameComponent11 />
      </div> */}
    </div>
  );
};

export default BlogsV2Approved;
