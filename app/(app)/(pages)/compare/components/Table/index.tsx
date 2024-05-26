//@ts-nocheck
"use client";
import classNames from "classnames";
import Badge from "../../../university-detail/sub-components/badge";
import UniversityBadge from "../UniversityBadge";
import _, { set } from "lodash";
import "./index.css";
import { useEffect, useState } from "react";
import { fetchData } from "@/app/(app)/services/institution";
import UniversitySelectionModal from "@/app/(app)/components/v1/Comapre/AddInstitution";
import { Add as AddIcon, Remove as RemoveIcon } from "@mui/icons-material";
import { Button } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import { useSearchParams } from "next/navigation";

type Criteria = {
  coreCriteria: string[];
  advancedCriteria: string[];
  otherFactors: string[];
  [key: string]: string[]; // Add this index signature
};

const defaultunivercity = [
  {
    name: "CMR University",
    coreCriteria: [
      "Diamond",
      "Diamond",
      "Diamond",
      "Diamond",
      "Diamond",
      "Diamond",
      "Diamond",
      "Diamond",
    ],
    advancedCriteria: ["Diamond", "Diamond", "Diamond", "Diamond", "Diamond"],
    otherFactors: [
      "Diamond",
      "Diamond",
      "Diamond",
      "Diamond",
      "Diamond",
      "Diamond",
    ],
    visitSite: "Visit Site",
  },
  {
    name: "Vignan University",
    coreCriteria: [
      "Diamond",
      "Diamond",
      "Diamond",
      "Diamond",
      "Diamond",
      "Diamond",
      "Diamond",
      "Diamond",
    ],
    advancedCriteria: ["Diamond", "Diamond", "Diamond", "Diamond", "Diamond"],
    otherFactors: [
      "Diamond",
      "Diamond",
      "Diamond",
      "Diamond",
      "Diamond",
      "Diamond",
    ],
    visitSite: "Visit Site",
  },
  {
    name: "Vignan University",
    coreCriteria: [
      "Diamond",
      "Diamond",
      "Diamond",
      "Diamond",
      "Diamond",
      "Diamond",
      "Diamond",
      "Diamond",
    ],
    advancedCriteria: ["Diamond", "Diamond", "Diamond", "Diamond", "Diamond"],
    otherFactors: [
      "Diamond",
      "Diamond",
      "Diamond",
      "Diamond",
      "Diamond",
      "Diamond",
    ],
    visitSite: "Visit Site",
  },
];

// const criteria: Criteria = {
//   coreCriteria: [
//     "Employability",
//     "Teaching & Learning",
//     "Faculty Quality",
//     "Student Diversity",
//     "Facilities",
//     "Social Responsibility",
//     "Governance & Structure",
//     "Diversity & Accessibility",
//   ],
//   advancedCriteria: [
//     "Arts and Culture",
//     "Faculty Diversity",
//     "Entrepreneurship",
//     "Research",
//     "Innovation",
//   ],
//   otherFactors: [
//     "Internationalization",
//     "Academic Development",
//     "Location",
//     "Size",
//     "Year of Establishment",
//     "Status",
//   ],
// };

// @ts-ignore
const collectionName = {
  universities: {
    category: "university-category-name",
    subject: "university-subject-name",
    other: "university-other-factors",
  },
  schools: {
    category: "school-category-name",
    subject: "schools-subject_name",
    other: "school-other-factors",
  },
  colleges: {
    category: "college-category-name",
    subject: "college-subject_name",
    other: "college-other-factors",
  },
};
export default function CompareInstitutions() {
  const [universities, setUniversities] = useState([]);
  const [selectedUniversities, setSelectedUniversities] = useState({
    type: "universities",
    ids: [],
  });
  const params = useSearchParams();
  const [criteria, setCriteria] = useState({
    coreCriteria: [],
    advancedCriteria: [],
    otherFactors: [],
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSelectionChange = (ids) => {
    setSelectedUniversities((e) => ({ ...e, ids }));
  };
  const getUnivercities = () => {
    // Iterate over selected universities
    selectedUniversities.ids.map((e, i) => {
      // Fetch data for each university
      fetchData(selectedUniversities.type + "/" + e, { depth: 3 }).then(
        (ele) => {
          // Extract category ratings
          const categoryRatings = ele.ratings["category-ratings"];
          // Create a mapping of badge names to URLs
          const badgeMapping = {};
          categoryRatings.forEach((rating) => {
            badgeMapping[rating?.category_name?.category_name] =
              rating?.category_rating?.badges_image.url;
          });

          // Create the coreCriteria array
          const coreCriteria = criteria.coreCriteria.map(
            (category) => badgeMapping[category.name] || "NA"
          );

          const subjectRatings = ele.ratings.subject_ratings;
          // Create a mapping of badge names to URLs
          const subjectBadgeMapping = {};
          subjectRatings.forEach((rating) => {
            subjectBadgeMapping[rating?.subject_name?.subject_name] =
              rating?.subject_rating?.badges_image.url;
          });

          // Create the coreCriteria array
          const advancedCriteria = criteria.advancedCriteria.map(
            (category) => subjectBadgeMapping[category.name] || "NA"
          );

          const others = ele.ratings.other_factors;

          // Create a mapping of badge names to URLs
          const othersMaping = {};
          others.forEach((rating) => {
            othersMaping[rating?.other_factor?.other_factors] =
              rating?.factor_value;
          });

          // Create the coreCriteria array
          const otherFactors = criteria.otherFactors.map(
            (category) => othersMaping[category.name] || "NA"
          );
          console.log(otherFactors);
          // check if ele.institution_name available in universities
          // if not available then push ele.institution_name in universities
          // else skip

          setUniversities((prevUniversities) => {
            if (!prevUniversities.some((uni) => uni.id === ele.id)) {
              // If not, add the university with its coreCriteria
              return [
                ...prevUniversities,
                {
                  id: ele.id,
                  name: ele.institution_name,
                  coreCriteria,
                  advancedCriteria,
                  otherFactors,
                },
              ];
            }
            // If already present, return the previous state
            return prevUniversities;
          });
        }
      );
    });
  };

  useEffect(() => {
    if (!selectedUniversities?.ids?.length) {
      setIsModalOpen(true);
    } else {
      fetchData(collectionName[selectedUniversities.type].category, {
        page: 0,
        limit: 100,
        depth: 1,
      }).then((e) => {
        setCriteria((state) => ({
          ...state,
          coreCriteria: e.docs.map((i: any) => ({
            name: i.category_name,
            icon: i.icon.url,
          })),
        }));
      });
      fetchData(collectionName[selectedUniversities.type].subject, {
        page: 0,
        limit: 100,
        depth: 1,
      }).then((e) =>
        setCriteria((state) => ({
          ...state,
          advancedCriteria: e.docs.map((i: any) => ({
            name: i.subject_name,
            icon: i.icon.url,
          })),
        }))
      );
      fetchData(collectionName[selectedUniversities.type].other, {
        page: 0,
        limit: 100,
        depth: 1,
      }).then((e) =>
        setCriteria((state) => ({
          ...state,
          otherFactors: e.docs.map((i: any) => ({
            name: i.other_factors,
            icon: i.icon.url,
          })),
        }))
      );
    }
  }, [selectedUniversities]);
  useEffect(() => {
    if (!selectedUniversities.ids.length) {
      setIsModalOpen(true);
    } else {
      if (
        criteria.coreCriteria.length &&
        criteria.advancedCriteria.length &&
        criteria.otherFactors.length
      ) {
        getUnivercities();
      }
    }
  }, [criteria]);

  useEffect(() => {
    if (JSON.parse(params.get("id"))) {
      setSelectedUniversities({
        ids: JSON.parse(params.get("id")),
        type: params.get("type"),
      });
    }
  }, [params]);

  return (
    <>
      <div className="flex justify-between  h-16 mb-5">
        <div className="flex justify-start ">
          <h1 className="text-xl font-bold text-gray-900 ">
            Compare Institutions
          </h1>
        </div>
        <div className="h-10">
          <Button
            onClick={handleOpenModal}
            className=" text-nowrap hidden md:block bg-orange-200 w-full h-full px-5 hover:bg-orange-500"
          >
            <div className="flex justify-center items-center gap-2 text-white">
              <AddIcon />
              Add Institutions to compare
            </div>
          </Button>
        </div>
      </div>
      <div className="overflow-x-auto border-[1px] border-[#EAEAEA] w-full text-[16px]">
        <table className="min-w-full divide-y divide-gray-200 ">
          <thead>
            <tr>
              <th className="min-w-[250px]"></th>
              {universities.map((e) => (
                <th className="min-w-[250px]" scope="col">
                  <div className="flex flex-col items-center justify-center py-0 pr-[7px] pl-0 box-border gap-[0.4px]">
                    <div className="self-stretch flex flex-row items-center justify-center py-0 pr-[7px] pl-1">
                      <img
                        className="h-[164.6px] flex-1 relative max-w-full overflow-hidden object-cover z-[2]"
                        loading="lazy"
                        alt=""
                        src="/image-20@2x.png"
                      />
                    </div>
                    <h3 className="m-0 relative text-inherit font-bold font-inherit z-[2] mq450:text-lgi">
                      {e.name}
                    </h3>
                  </div>
                </th>
              ))}
              {/* <th scope="col">
              <div className="flex flex-col items-center justify-center py-0 pr-[7px] pl-0 box-border gap-[0.4px]">
                <div className="self-stretch flex flex-row items-center justify-center py-0 pr-[7px] pl-1">
                  <img
                    className="h-[164.6px] flex-1 relative max-w-full overflow-hidden object-cover z-[2]"
                    loading="lazy"
                    alt=""
                    src="/image-20@2x.png"
                  />
                </div>
                <h3 className="m-0 relative text-inherit font-bold font-inherit z-[2] mq450:text-lgi">
                  CMR University
                </h3>
              </div>
            </th>
            <th scope="col">
              <div className="flex flex-col items-center justify-center py-0 pr-[7px] pl-0 box-border gap-[0.4px]">
                <div className="self-stretch flex flex-row items-center justify-center py-0 pr-[7px] pl-1">
                  <img
                    className="h-[164.6px] flex-1 relative max-w-full overflow-hidden object-cover z-[2]"
                    loading="lazy"
                    alt=""
                    src="/image-20@2x.png"
                  />
                </div>
                <h3 className="m-0 relative text-inherit font-bold font-inherit z-[2] mq450:text-lgi">
                  CMR University
                </h3>
              </div>
            </th> */}
            </tr>
            <tr>
              <th className="px-6 py-2 text-left text-xs tracking-wider  text-[16px] font-bold mq450:text-lgi align-bottom">
                {`Core Criteria (Badges)`}
              </th>
              <th scope="col">
                <div className="flex flex-col items-center">
                  <img
                    className="w-[152px] h-[108px] object-cover z-[1]"
                    loading="lazy"
                    alt=""
                    src="/image-28@2x.png"
                  />
                </div>
              </th>
              <th scope="col">
                <div className="flex flex-col items-center">
                  <img
                    className="w-[152px] h-[108px] object-cover z-[1]"
                    loading="lazy"
                    alt=""
                    src="/image-28@2x.png"
                  />
                </div>
              </th>
              <th scope="col">
                <div className="flex flex-col items-center">
                  <img
                    className="h-[108px] object-cover z-[1]"
                    loading="lazy"
                    alt=""
                    src="/image-28@2x.png"
                  />
                </div>
              </th>
            </tr>
          </thead>
          {Object.keys(criteria).map((section, sectionIndex) => (
            <tbody
              key={sectionIndex}
              className="bg-white divide-y divide-gray-200"
            >
              {sectionIndex === 0 || (
                <tr>
                  <td
                    colSpan={universities.length + 1}
                    className="h-[77px]"
                  ></td>
                </tr>
              )}
              {section !== "coreCriteria" && (
                <tr className="">
                  <td
                    colSpan={universities.length + 1}
                    className="px-6 py-2 text-left text-xs tracking-wider  text-[16px] font-bold mq450:text-lgi h-[50px]"
                  >
                    {_.capitalize(
                      `${section.replace(/([A-Z])/g, " $1").trim()} (Badges)`
                    )}
                  </td>
                </tr>
              )}

              {criteria?.[section]?.map(
                (criteria: any, criteriaIndex: number) => (
                  <tr
                    key={criteriaIndex}
                    className={classNames({
                      "bg-[#F8F8F8]": criteriaIndex % 2 == 0,
                    })}
                  >
                    <td className="px-6 py-3 whitespace-nowrap  font-medium text-gray-900 flex gap-5">
                      <img className="w-[20px]" src={criteria.icon} />
                      {criteria.name}
                    </td>
                    {universities.map((university, uniIndex) => (
                      <td
                        key={uniIndex}
                        className="px-6 py-3 whitespace-nowrap  text-gray-500"
                      >
                        <div className="university-badge">
                          {console.log(university, "================", section)}
                          {university[section]?.length ? (
                            <>
                              {university[section][criteriaIndex] === "NA" ? (
                                "NA"
                              ) : (
                                <>
                                  {section === "otherFactors" ? (
                                    <span>
                                      {university[section][criteriaIndex]}
                                    </span>
                                  ) : (
                                    <img
                                      src={university[section][criteriaIndex]}
                                      alt={criteria}
                                    />
                                  )}
                                </>
                              )}
                            </>
                          ) : (
                            <></>
                          )}
                        </div>
                      </td>
                    ))}
                  </tr>
                )
              )}
              {section === "otherFactors" && (
                <tr>
                  <td className="px-6 py-3 whitespace-nowrap  font-medium text-gray-900 mx-[20px] w-full">
                    Visit Site
                  </td>
                  {universities.map((university, uniIndex) => (
                    <td key={uniIndex} className="px-6 py-3 whitespace-nowrap">
                      <div className="flex justify-center w-full">
                        <Button className="bg-[#F7A600] py-[17px] px-[50px] text-center w-full text-[15px] flex items-center hover:bg-orange-500 text-white rounded-[0px]">
                          <LaunchIcon className="text-[20px] mr-2 " /> Visit
                          Site
                          {console.log(university)}
                        </Button>
                      </div>
                    </td>
                  ))}
                </tr>
              )}
            </tbody>
          ))}
        </table>
      </div>
      <UniversitySelectionModal
        open={isModalOpen}
        onClose={handleCloseModal}
        onChange={handleSelectionChange}
        selectedUniversities={selectedUniversities}
        setSelectedUniversities={setSelectedUniversities}
      />
    </>
  );
}
