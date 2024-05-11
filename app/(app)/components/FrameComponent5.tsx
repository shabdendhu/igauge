"use client";
import { getInstitutionsByType } from "@/utils/getInstitution";
import { FunctionComponent, useEffect, useRef, useState } from "react";

const FrameComponent5: FunctionComponent = () => {
  const [collection, setCollections] = useState([
    { name: "Employability", image: "/rectangle-161@2x.png" },
    { name: "Faculty", image: "/rectangle-162@2x.png" },
    { name: "Facilities", image: "/rectangle-163@2x.png" },
    { name: "Research", image: "/rectangle-164@2x.png" },
    { name: "Learning", image: "/rectangle-165@2x.png" },
  ]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [data, setData] = useState<any>([]);
  const [selectedUniversity, setSelectedUniversity] = useState<any>("");
  const handleSelectUniversity = (e: any) => {
    console.log(
      e.ratings.features.map((e: any) => ({
        name: e.feature_name.features_name,
      })),
      "mmmmmmmmmmmmmmmmmmmmmm"
    );
    setSelectedUniversity(e);
    setIsMenuOpen(false);
  };
  useEffect(() => {
    getInstitutionsByType("university")
      .then((e) => {
        if (e.docs.length) {
          setData(e.docs);
        } else {
          setData([]);
        }
      })
      .catch((err) => console.error(err));
  }, []);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <section className="w-full h-[923px] flex flex-row items-start justify-start pt-0 px-0 pb-10 box-border max-w-[115%] shrink-0 text-left text-5xl text-white font-red-hat-display">
      <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-end py-[91px] pr-0 pl-[157px] box-border relative max-w-full mq900:pl-5 mdm:pt-[130px] mdm:self-auto mq900:pb-[59px] mq900:box-border mq1275:pl-[78px] mq1275:box-border mdm:pl-5">
        <div className="w-full h-[530px] overflow-x-auto shrink-0 flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border gap-[23px] max-w-full z-[2] no-scrollbar">
          {collection.map((e) => (
            <div className="collection-university-card self-stretch w-[390px] shrink-0 flex flex-row items-end justify-start p-[31px] box-border relative max-w-full cursor-pointer">
              <div className="bg-gradient-to-b from-darkgray to-black w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-8xs max-w-full overflow-hidden max-h-full object-cover bg-gradient-to-t from-black  to-transparent" />
              <img
                className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-8xs max-w-full overflow-hidden max-h-full object-cover"
                loading="lazy"
                alt=""
                src={e.image}
              />
              <div className="relative font-semibold z-[1] mq450:text-lgi">
                {e.name}
              </div>
            </div>
          ))}
          {/* <div className="collection-university-card self-stretch w-[390px] shrink-0 flex flex-row items-end justify-start p-[31px] box-border relative max-w-full">
      <div className=" bg-gradient-to-t  w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-8xs max-w-full overflow-hidden max-h-full object-cover bg-gradient-to-t from-black  to-transparent" />
      <img
        className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-8xs max-w-full overflow-hidden max-h-full object-cover opacity-80"
        loading="lazy"
        alt=""
        src={image}
      />
      <div className="relative font-semibold z-[1] mq450:text-lgi">{title}</div>
    </div> */}
        </div>
        <div className="flex z-[99] w-[300px] self-center mt-[50px] mdm:w-[182px] md:hidden">
          <img className="h-full w-full" alt="" src="/frame-29.svg" />
        </div>
        <div className="w-full !m-[0] absolute top-[0px] left-[0px] flex flex-row items-start justify-start max-w-full text-36xl text-black font-libre-baskerville">
          <img
            className="h-[604px] w-[618px] absolute !m-[0] bottom-[-280px] left-[-258px] z-[1]"
            alt=""
            src="/frame-49.svg"
          />
          <div className="w-[334px] !m-[0] absolute top-[-53px] right-[0px] flex flex-row items-start justify-start py-0 px-0 box-border max-w-full mdm:hidden">
            <div className="h-[388px] w-[388px] relative shrink-0 [debug_commit:1de1738] max-w-[117%]">
              <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-orange-200 w-full h-full z-[1]" />
              <img
                className="absolute top-[195px] left-[72px] w-[182px] h-[14.7px] z-[2]"
                alt=""
                src="/frame-29.svg"
              />
            </div>
          </div>
          <div className="flex-1 bg-blanchedalmond flex flex-col items-start justify-start pt-[74px] px-[157px] pb-[675px] box-border min-h-[883px] max-w-full mdm:pt-[30px] mdm:px-5">
            {/* <div className="w-full h-[883px] relative bg-blanchedalmond hidden max-w-full z-[1]" /> */}
            <div className="w-full flex flex-row items-start justify-center max-w-full mdm:w2/3">
              <div className="w-[538px] flex flex-row items-start justify-end pt-[58px] px-[85px] pb-[53px] box-border bg-cover bg-no-repeat bg-[top] max-w-full z-[1]"></div>
            </div>
            <h1 className="m-0 w-full flex items-center gap-[10px] justify-start relative text-inherit font-bold font-inherit whitespace-pre-wrap inline-block max-w-full z-[2] mt-[-97px] mq450:text-[25px] mq900:text-[30px] mq1440:text-[45px] ">
              Collections
              <div className="relative flex items-center gap-[3px] z-[2]">
                Universities
                {/* onclick open menu and on outside click close menu*/}
                <img
                  onClick={toggleMenu}
                  className="ml-2 h-[20px] w-[20px] object-contain cursor-pointer"
                  alt=""
                  src="/polygon-9.svg"
                />
                <img
                  className="h-[134px] w-[400px] top-[-50%] absolute z-[-1] object-cover max-w-full mq450:h-[50px] mq900:h-[60px]"
                  alt=""
                  src="/untitled-design-3-1@2x.png"
                />
                {/* menu */}
                {isMenuOpen && (
                  <div
                    ref={menuRef}
                    className="w-full bg-white  absolute top-[70px] max-h-[280px] overflow-auto"
                  >
                    {/* menu items */}
                    {data.map((e: any) => (
                      <div
                        title={e.institution_name}
                        onClick={() => handleSelectUniversity(e)}
                        className="h-[70px] hover:bg-orange-100 cursor-pointer px-5 py-3 font-red-hat-display  text-5xl mq450:text-lgi mq1440:text-[14px] mq1600:text-[20px]  flex items-center "
                      >
                        {e.institution_name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent5;
