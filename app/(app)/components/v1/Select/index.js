import React, { useEffect, useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Select = ({ options, onChange, defaultValue, getLabel }) => {
  const [selectedValue, setSelectedValue] = useState(
    defaultValue || "Select University"
  );
  const [showOptions, setShowOptions] = useState(false);

  const handleOptionSelect = (option) => {
    onChange(option);
    setSelectedValue(getLabel(option));
    setShowOptions(false);
  };

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const closeOptions = () => {
    setShowOptions(false);
  };

  useEffect(() => {
    setSelectedValue(defaultValue || "Select University");
  }, [defaultValue]);

  return (
    <div className="relative w-full h-full">
      <div
        onClick={toggleOptions}
        className="  bg-white w-full border-[2px] border-orange-100 h-full font-red-hat-display text-xl h-[26px] text-darkslategray-100 text-left inline-block p-0 z-[1] mq450:text-base mq1440:text-[14px] mq1600:text-[20px] flex items-center justify-between px-5 cursor-pointer mq900:px-[10px]"
      >
        <p className="w-[70%] overflow-hidden whitespace-nowrap overflow-hidden overflow-ellipsis">
          {selectedValue}
        </p>
        <ArrowDropDownIcon style={{ color: "#000000" }} />
      </div>
      {showOptions && (
        <div className="absolute top-[70px] left-0 w-full bg-white z-[5]">
          {options.map((option) => (
            <div
              key={option}
              className="px-5 py-3 hover:bg-orange-100 hover:text-[#000000] cursor-pointer h-[70px] flex items-center font-red-hat-display text-xl text-darkslategray-100 mq1440:text-[14px] mq1600:text-[20px] mq900:text-[14px] text-black-500 mq900:px-[10px] mq900:h-full border-b border-whitesmoke-500"
              onClick={() => handleOptionSelect(option)}
            >
              {getLabel(option)}
            </div>
          ))}
        </div>
      )}
      {showOptions && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-5 z-[4]"
          onClick={closeOptions}
        ></div>
      )}
    </div>
  );
};

export default Select;
