import React, { useEffect, useRef, useState } from "react";

const InstitutionSelection = ({ bgImage }) => {
  const menuRef = useRef(null);
  const data = [
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
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedUniversity, setSelectedUniversity] = useState({
    label: "University",
    value: "university",
  });
  const handleSelectUniversity = (e) => {
    console.log(e);
    setSelectedUniversity(e);
    setIsMenuOpen(false);
  };
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
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
    <div
      className="relative flex items-center gap-[3px] z-[2] cursor-pointer whitespace-nowrap"
      onClick={toggleMenu}
    >
      {selectedUniversity.label}
      {/* onclick open menu and on outside click close menu*/}
      <img
        className="ml-2 h-[20px] w-[20px] object-contain cursor-pointer"
        alt=""
        src="/polygon-9.svg"
      />
      <img
        className=" w-fulltop-[-50%] absolute z-[-1] object-cover max-w-full mq450:h-[50px] mq900:h-[60px]"
        alt=""
        src={bgImage}
      />
      {/* menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="w-full bg-white  absolute top-[70px] max-h-[280px] overflow-auto"
        >
          {/* menu items */}
          {data.map((e) => (
            <div
              title={e.label}
              onClick={() => handleSelectUniversity(e)}
              className="h-[70px]  cursor-pointer px-5 py-3 font-red-hat-display mq450:text-lgi mq1440:text-[14px] mq1600:text-[20px]  flex items-center border-b border-whitesmoke-500  font-red-hat-display text-xl text-darkslategray-100 mq1440:text-[14px]  mq900:text-[14px] hover:bg-orange-100"
            >
              {e.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InstitutionSelection;
