"use client";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, Input, Menu, MenuItem, TextField } from "@mui/material";
const Search = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="flex flex-col items-center justify-center w-5 h-5 ">
      {/* <img className="w-5 h-5 " alt="" src="/search.svg" /> */}
      <IconButton
        onClick={handleClick} // Triggered when the mouse enters the component
        // onBlur={handleClose}
        size="small"
        sx={{ m: 0, p: 0, display: "flex", alignItems: "center" }}
        aria-controls={open ? "account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <SearchIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        className="py-0"
        onClose={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            borderRadius: 0,
            width: 200,
            mt: 1.5,
            px: 0,
            py: 0,
            "& .MuiList-root": {
              py: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <TextField className="w-full h-full" />
      </Menu>
    </div>
  );
};

export default Search;
