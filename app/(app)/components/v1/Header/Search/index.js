"use client";
import React, { useState, useCallback } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, Menu, TextField, Autocomplete } from "@mui/material";
import { debounce } from "lodash";
import { fetchData } from "@/app/(app)/services/institution";

const Search = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [institutions, setInstitutions] = useState([]);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSearch = useCallback(
    debounce(async (query) => {
      const collections = ["colleges", "schools", "universities"];
      const searchResults = await Promise.all(
        collections.map((collection) =>
          fetchData(collection, {
            filter: { institution_name: { contains: query } },
          })
        )
      );
      const allResults = searchResults.reduce(
        (acc, current) => acc.concat(current.docs),
        []
      );
      console.log(allResults);
      setInstitutions(allResults);
    }, 300),
    []
  );

  const handleChange = (event, value) => {
    setSearchQuery(value);
    handleSearch(value);
  };

  return (
    <div className="flex flex-col items-center justify-center w-5 h-5">
      <IconButton
        onClick={handleClick}
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
            border: "2px solid orange",
            borderRadius: 0,
            width: 300,
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
        <Autocomplete
          id="input-with-icon-adornment"
          freeSolo
          options={institutions}
          getOptionLabel={(r) => r.institution_name || ""}
          value={searchQuery}
          onChange={handleChange}
          className="outline-none"
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Search for institution"
              InputProps={{
                ...params.InputProps,
                startAdornment: <SearchIcon sx={{ mr: 1 }} />,
                className: "w-full h-full px-5 py-3 ",
                sx: {
                  "&.MuiOutlinedInput-root": {
                    "& fieldset": {
                      border: "none",
                    },
                    "&:hover fieldset": {
                      border: "none",
                    },
                    "&.Mui-focused fieldset": {
                      border: "none",
                    },
                  },
                },
              }}
            />
          )}
        />
      </Menu>
    </div>
  );
};

export default Search;
