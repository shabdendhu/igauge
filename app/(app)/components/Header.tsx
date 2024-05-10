"use client";
import { InboxIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React, { AnchorHTMLAttributes, FunctionComponent } from "react";

const Header: FunctionComponent = () => {
  // const [menu, setMenu] = useState(false);
  // const [menu, setMenu] = React.useState(false);
  // const menuList = ["Contact", "Resource", "About"];

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: "right", open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: "right") => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="w-full">
        <img
          className="object-fill  w-[60%] px-4 my-5"
          alt=""
          src="/igaugeinvertedrgb.svg"
        />
      </div>
      <List>
        <ul className="border border-red-500 font-normal">
          <li className=" flex justify-between text-sm font-normal  p-3">
            <p className="font-normal"> Higher Education</p> <p>{`>`}</p>
          </li>
          <Divider />
          <li className=" flex justify-between text-sm font-normal  p-3">
            <p className="font-normal"> School education</p>
          </li>
          <li className=" flex justify-between text-sm font-normal  p-3">
            <p className="font-normal"> Media</p>
          </li>
          <li className=" flex justify-between text-sm font-normal  p-3">
            <p className="font-normal"> Events</p>
          </li>
          <li className=" flex justify-between text-sm font-normal  p-3">
            <p className="font-normal"> Tought Leadership</p>
          </li>
          <li className=" flex justify-between text-sm font-normal  p-3">
            <p className="font-normal"> Menu Item</p>
          </li>
          <li className=" flex justify-between text-sm font-normal  p-3">
            <p className="font-normal"> Menu Item</p>
          </li>
          <li className=" flex justify-between text-sm font-normal  p-3">
            <p className="font-normal"> About</p>
          </li>
          <li className=" flex justify-between text-sm font-normal  p-3">
            <p className="font-normal"> Resource</p>
          </li>
          <li className=" flex justify-between text-sm font-normal  p-3">
            <p className="font-normal"> Contact</p>
          </li>
        </ul>
        <ListItem disablePadding>
          <Accordion className="w-full shadow-none">
            <AccordionSummary
              expandIcon={`>`}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <p className="font-normal"> Higher Education</p>
            </AccordionSummary>
            <AccordionDetails>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
              <List>
                <ListItem disablePadding>bara</ListItem>
                <ListItem disablePadding>alu</ListItem>
                <ListItem disablePadding>chart</ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
        </ListItem>
      </List>
      <List>ghjk</List>
      <Divider />
    </Box>
  );
  return (
    <header className=" flex  justify-between items-center px-6  font-red-hat-display w-full h-auto font-normal  gap-x-10 my-2  z-50 bg-white  mb-0  sticky top-0 border-b">
      <div className="flex justify-center items-center w-[150px] h-[72px] md:w-[225px]">
        <img
          className="object-fill h-full w-full"
          alt=""
          src="/igaugeinvertedrgb.svg"
        />
      </div>

      <div className="hidden md:block text-sm md:text-base">
        <div className="flex flex-col items-center justify-center h-28   ">
          <div className=" flex w-full  justify-end gap-x-7 h-full items-center border-b">
            <div className="relative inline-block min-w-[51px]">Contact</div>

            <div className="relative inline-block min-w-[59px]">Resource</div>
            <div className="relative inline-block min-w-[39px]">About</div>
            <div className="relative inline-block min-w-[66px] whitespace-nowrap">
              Menu item
            </div>

            <div className="flex flex-row items-start justify-start gap-[13px]">
              <img
                className="h-[19px] w-[19px]  cursor-pointer"
                alt=""
                src="/frame-2.svg"
              />
              <img
                className="h-[19px] w-[19px]  cursor-pointer"
                alt=""
                src="/frame-3.svg"
              />
              <img
                className="h-[19px] w-[19px]  cursor-pointer"
                alt=""
                src="/twitter-1.svg"
              />
              <img
                className="h-[19px] w-[19px]   cursor-pointer"
                alt=""
                src="/linkedin.png"
              />
              <img
                className="h-[19px] w-[19px]   cursor-pointer"
                alt=""
                src="/youtube.svg"
              />
            </div>
          </div>
          <div className=" h-full w-full items-center ">
            <div className="flex justify-between items-center h-full gap-x-5">
              {/* <div className="flex  flex-row items-start justify-start gap-x-1 "> */}
              <button
                type="button"
                className=" flex  flex-row items-start justify-start gap-x-1"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
              >
                <div className="relative inline-block  whitespace-nowrap">
                  Higher Education
                </div>
                <div className="flex flex-col items-start justify-start pt-[9px] ">
                  <img
                    className="min-w-[7px] h-1 relative"
                    alt=""
                    src="/vector.svg"
                  />
                </div>
              </button>
              {/* <div className="relative inline-block  whitespace-nowrap">
                  Higher Education
                </div>
                <div className="flex flex-col items-start justify-start pt-[9px] ">
                  <img
                    className="min-w-[7px] h-1 relative"
                    alt=""
                    src="/vector.svg"
                  />
                </div> */}
              {/* </div> */}
              <div className="relative inline-block  whitespace-nowrap">
                School Education
              </div>
              <div className="flex flex-row items-start justify-start gap-x-1">
                <div className="relative inline-block  whitespace-nowrap">
                  Media
                </div>
                <div className="flex flex-col items-start justify-start pt-[9px] ">
                  <img
                    className="min-w-[7px] h-1 relative"
                    alt=""
                    src="/vector-1.svg"
                  />
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-x-1">
                <div className="relative inline-block  whitespace-nowrap">
                  Events
                </div>
                <div className="flex flex-col items-start justify-start pt-[9px] ">
                  <img
                    className="min-w-[7px] h-1 relative"
                    alt=""
                    src="/vector-2.svg"
                  />
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-x-1">
                <div className="relative whitespace-nowrap">
                  Thought Leadership
                </div>
                <div className="flex flex-col items-start justify-start pt-[9px] ">
                  <img
                    className="min-w-[7px] h-1 relative"
                    alt=""
                    src="/vector.svg"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-5 h-5 ">
                <img className="w-5 h-5 " alt="" src="/search.svg" />
              </div>
              <div className="hover:text-white">
                <button className="cursor-pointer [border:none] py-4 px-7 rounded-none  bg-orange-100 flex flex-row items-center justify-center gap-[9px] whitespace-nowrap z-[1] hover:bg-chocolate duration-300 ">
                  <img
                    className="h-5 w-6 relative min-h-[21px]"
                    alt=""
                    src="/vector-4.svg"
                  />
                  <div className="relative text-base uppercase font-red-hat-display text-black text-left inline-block min-w-[57px] whitespace-nowrap">
                    Sign In
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex md:hidden font-bold  gap-x-4 ">
        <img className="w-6 h-6 relative z-[1]" alt="" src="/search.svg" />
        <img className="w-6 h-6 relative z-[1]" alt="" src="/vector-4.svg" />
        <Button className="min-w-0 p-0" onClick={toggleDrawer("right", true)}>
          <img className="w-6 h-6 relative z-[1]" alt="" src="/menu.svg" />
        </Button>
        <Drawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
        >
          {list("right")}
        </Drawer>
        {/* menu icon here */}
      </div>
    </header>
  );
};

export default Header;

// <header className="self-stretch flex flex-row items-start justify-between py-0 pr-0 pl-[135px] box-border gap-[20px] max-w-full z-[5] text-left text-mini text-black font-red-hat-display mq900:pl-[33px] mq900:box-border mq1275:pl-[67px] mq1275:box-border gap-[300px]">
//   <div className="self-stretch w-[1920px] relative bg-white hidden max-w-full" />
//   <div className="h-[91px] w-[225px] flex flex-col items-start justify-start pt-[19px] px-0 pb-0 box-border">
//     <img
//       className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full z-[1]"
//       loading="lazy"
//       alt=""
//       src="/igaugeinvertedrgb.svg"
//     />
//   </div>
//   <div className="flex flex-col items-start justify-start max-w-full">
//     <div className="self-stretch box-border flex flex-row items-start justify-center pt-3.5 pb-3 pr-5 pl-[97px] gap-[53px] max-w-full z-[1] border-b-[1px] border-solid border-whitesmoke-200 mq450:gap-[53px_26px] mq450:pl-5 mq450:box-border mq900:pl-12 mq900:box-border">
//       <nav className="m-0 w-[515px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border max-w-full mq900:w-0 mq1600:hidden">
//         <nav className="m-0 self-stretch h-[17px] flex flex-row items-start justify-between pt-0 px-0 pb-0 box-border gap-[20px] text-left text-sm text-black font-red-hat-display mq900:hidden">
//           <div className="w-[81px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border">
//             <div className="relative inline-block min-w-[51px]">
//               Contact
//             </div>
//           </div>
//           <div className="relative inline-block min-w-[59px]">Resource</div>
//           <div className="relative inline-block min-w-[39px]">About</div>
//           <div className="relative inline-block min-w-[66px] whitespace-nowrap">
//             Menu item
//           </div>
//           <div className="relative inline-block min-w-[66px] whitespace-nowrap">
//             Menu item
//           </div>
//         </nav>
//       </nav>
//       <div className="flex flex-row items-start justify-start gap-[13px]">
//         <img
//           className="h-[19px] w-[19px] relative min-h-[19px]"
//           alt=""
//           src="/frame-2.svg"
//         />
//         <img
//           className="h-[19px] w-[19px] relative min-h-[19px]"
//           alt=""
//           src="/frame-3.svg"
//         />
//         <img
//           className="h-[19px] w-[19px] relative overflow-hidden shrink-0 min-h-[19px]"
//           alt=""
//           src="/twitter-1.svg"
//         />
//         <img
//           className="h-[19px] w-[19px] relative rounded-31xl overflow-hidden shrink-0 min-h-[19px]"
//           alt=""
//           src="/linkedin.svg"
//         />
//         <img
//           className="h-[19px] w-[19px] relative rounded-31xl overflow-hidden shrink-0 min-h-[19px]"
//           alt=""
//           src="/youtube.svg"
//         />
//       </div>
//     </div>
//     <div className="flex flex-row items-end justify-start py-0 pr-5 pl-0 box-border gap-[52px] max-w-full mq900:gap-[52px_26px]">
//       <div className="flex flex-col items-start justify-end pt-0 px-0 pb-5 box-border max-w-full">
//         <div className="self-stretch flex flex-row items-start justify-between pt-0 pb-1 pr-1 pl-0 gap-[20px] z-[1]">
//           <div className="flex flex-row items-start justify-start py-0 pr-[5px] pl-0 gap-[7px]">
//             <div className="relative inline-block min-w-[115px] whitespace-nowrap">
//               Higher Education
//             </div>
//             <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
//               <img
//                 className="w-[7px] h-1 relative"
//                 alt=""
//                 src="/vector.svg"
//               />
//             </div>
//           </div>
//           <div className="relative inline-block min-w-[116px] whitespace-nowrap">
//             School Education
//           </div>
//           <div className="flex flex-row items-start justify-start py-0 pr-[4.5px] pl-0 gap-[6.5px]">
//             <div className="relative inline-block min-w-[41px] whitespace-nowrap">
//               Media
//             </div>
//             <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
//               <img
//                 className="w-[7px] h-1 relative"
//                 alt=""
//                 src="/vector-1.svg"
//               />
//             </div>
//           </div>
//           <div className="flex flex-row items-start justify-start py-0 pr-[11.799999999999272px] pl-0 gap-[9.200000000000728px]">
//             <div className="relative inline-block min-w-[46px] whitespace-nowrap">
//               Events
//             </div>
//             <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
//               <img
//                 className="w-[7px] h-1 relative"
//                 alt=""
//                 src="/vector-2.svg"
//               />
//             </div>
//           </div>
// <div className="flex flex-row items-start justify-start gap-[8px]">
//   <div className="relative whitespace-nowrap">
//     Thought Leadership
//   </div>
//   <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
//     <img
//       className="w-[7px] h-1 relative"
//       alt=""
//       src="/vector.svg"
//     />
//   </div>
// </div>
//         </div>
//       </div>
//<div className="flex flex-col items-start justify-end pt-0 px-0 pb-6">
// <img className="w-5 h-5 relative z-[1]" alt="" src="/search.svg" />
// </div>
//       <button className="cursor-pointer [border:none] py-[23px] px-[34px]  bg-orange-100 flex flex-row items-center justify-center gap-[9px] whitespace-nowrap z-[1] hover:bg-chocolate">
//         <img
//           className="h-[21px] w-[22px] relative min-h-[21px]"
//           alt=""
//           src="/vector-4.svg"
//         />
//         <div className="relative text-base uppercase font-red-hat-display text-black text-left inline-block min-w-[57px] whitespace-nowrap">
//           Sign In
//         </div>
//       </button>
//     </div>
//   </div>
// </header>
