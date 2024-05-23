"use client";
import Menu from "@/app/(app)/components/v1/Header/Menu";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
} from "@mui/material";
import Link from "next/link";
import React, { FunctionComponent, useEffect, useState } from "react";
import { fetchData } from "../services/institution";
import Search from "@/app/(app)/components/v1/Header/Search";
const Header: FunctionComponent = () => {
  const [menu, setMenu] = useState({ mainItems: [], top_bar_menu: [] });
  const [state, setState] = React.useState(false);
  useEffect(() => {
    fetchData("/globals/header-menu", {}).then((e) => setMenu(e));
  }, []);

  const toggleDrawer = () => setState((e) => !e);

  const generateSubItems = (subItems: any) => {
    return subItems.map((subItem: any) => (
      <ListItem key={subItem.id} disablePadding>
        <a href={subItem.link}>{subItem.name}</a>
      </ListItem>
    ));
  };

  const generateMenuItems = (menuData: any = []) => {
    return menuData?.map((menuItem: any) => (
      <ListItem key={menuItem.id} disablePadding>
        {menuItem.subItems.length > 0 ? (
          <Accordion className="w-full shadow-none">
            <AccordionSummary
              expandIcon={`>`}
              aria-controls={`${menuItem.id}-content`}
              id={`${menuItem.id}-header`}
            >
              <p className="font-normal">{menuItem.name}</p>
            </AccordionSummary>
            <AccordionDetails>
              <List>{generateSubItems(menuItem.subItems)}</List>
            </AccordionDetails>
          </Accordion>
        ) : (
          <a
            href={menuItem.link}
            className="flex justify-between text-sm font-normal p-3"
          >
            {menuItem.name}
          </a>
        )}
      </ListItem>
    ));
  };
  const ListComponent = ({ menuData = [] }: any) => {
    return (
      <Box role="presentation">
        <div className="w-full">
          <img
            className="object-fill h-full px-4 my-5 max-h-[100px]"
            alt=""
            src="/igaugeinvertedrgb.svg"
          />
        </div>
        <List>{generateMenuItems(menuData)}</List>
        <Divider />
      </Box>
    );
  };
  return (
    <header className=" flex  justify-between items-center px-6  font-red-hat-display w-full h-auto font-normal  gap-x-10 my-2  z-50 bg-white  mb-0  sticky top-0 border-b">
      <div className="flex justify-center items-center w-[150px] h-[72px] md:w-[225px]">
        <img
          className="object-fill h-full w-full md:pl-10"
          alt=""
          src="/igaugeinvertedrgb.svg"
        />
      </div>

      <div className="hidden md:block text-sm md:text-base">
        <div className="flex flex-col items-center justify-center h-28   ">
          <div className=" flex w-full  justify-end gap-x-7 h-full items-center border-b">
            {menu.top_bar_menu.map((e: any) => (
              <Link
                href={e.link}
                className="relative inline-block min-w-[51px]"
              >
                {e.name}
              </Link>
            ))}

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
                src="/youtube.png"
              />
            </div>
          </div>
          <div className=" h-full w-full items-center ">
            <div className="flex justify-between items-center h-full gap-x-5">
              {menu.mainItems.map((e: any) => (
                <Menu items={e} />
              ))}

              <Search />
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
      {/* <div className="border border-red-500 text-black">dd</div> */}

      <div className="flex md:hidden font-bold  gap-x-4 ">
        <IconButton className="min-w-0 p-0">
          <img className="w-6 h-6 relative z-[1]" alt="" src="/search.svg" />
        </IconButton>
        <IconButton className="min-w-0 p-0">
          <img className="w-6 h-6 relative z-[1]" alt="" src="/vector-4.svg" />
        </IconButton>
        <IconButton className="min-w-0 p-0" onClick={() => toggleDrawer()}>
          <img className="w-6 h-6 relative z-[1]" alt="" src="/menu.svg" />
        </IconButton>
        <Drawer anchor={"right"} open={state} onClose={() => toggleDrawer()}>
          {/* {generateMenuItems(menu.mainItems)} */}
          <ListComponent menuData={menu.mainItems || []} />
        </Drawer>
        {/* menu icon here */}
      </div>
    </header>
  );
};

export default Header;
