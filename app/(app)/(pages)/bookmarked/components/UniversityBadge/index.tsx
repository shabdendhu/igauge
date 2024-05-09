import React from 'react';

const UniversityBadge = ({ type }: { type: string }) => {
  const getImageBasedOnUniversity = () => {
    switch (type) {
      case 'Diamond':
        return '/rectangle-2043.svg';
      case 'Platinum':
        return '/rectangle-2043.svg';
      case 'Gold':
        return '/rectangle-2043.svg';
      case 'Silver':
        return '/rectangle-2043.svg';
      case 'Bronze':
        return '/rectangle-2043.svg';
      default:
        return '/rectangle-2043.svg';
    }
  };

  return (
    <div className="h-[32.1px] w-[150px] relative shrink-0">
      <img
        className="absolute top-[0px] left-[0px] rounded-[1.62px] w-[141.9px] h-[32.1px] z-[2]"
        alt=""
        src="/rectangle-2041.svg"
      />
      <button className="cursor-pointer border-none p-0 bg-transparent absolute top-[1.65px] left-[2.4px] w-[137px] h-[27.45px]">
        <img
          className="absolute top-[0px] left-[0px] rounded-[1.62px] w-full h-full z-[3]"
          alt=""
          src="/rectangle-2051.svg"
        />
        <div className="absolute top-[7.2px] left-[42px] text-[10px] uppercase font-inter text-black text-left inline-block w-[53.4px] h-[13.65px] min-w-[53.4px] z-[4]">
          Diamond
        </div>
      </button>
    </div>
  );

  return (
    <div className="h-[47px] w-[229.9px] relative shrink-0">
      <img
        className="absolute top-[0px] left-[0px] rounded-[2.48px] w-[217.9px] h-[47px] z-[2]"
        alt=""
        src="/rectangle-2041.svg"
      />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[2.5px] left-[3.7px] w-[210.4px] h-[42.1px]">
        <img
          className="absolute top-[0px] left-[0px] rounded-[2.48px] w-full h-full z-[3]"
          alt=""
          src="/rectangle-2051.svg"
        />
        <div className="absolute top-[11.1px] left-[64.4px] text-mid uppercase font-inter text-black text-left inline-block w-[82px] h-[21px] min-w-[82px] z-[4]">
          Diamond
        </div>
      </button>
    </div>
  );
  // <button className="relative cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[2.5px] left-[3.7px] w-[210.4px] h-[42.1px]">
  //   <img
  //     className="absolute top-[0px] left-[0px] rounded-[2.48px] w-full h-full z-[3]"
  //     alt=""
  //     src={getImageBasedOnUniversity()}
  //   />
  //   <div className="absolute top-[11.1px] left-[64.4px] text-mid uppercase font-inter text-black text-left inline-block w-[82px] h-[21px] min-w-[82px] z-[4]">
  //     Diamond
  //   </div>
  // </button>
  //   );
};

export default UniversityBadge;
