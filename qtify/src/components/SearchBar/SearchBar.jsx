import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Style from "./SearchBar.module.css";

export default function SearchBar() {
  return (
    <Paper
      className={Style.searchBox}
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: '50vw' }}
    >
      <InputBase
        className={Style.input}
        sx={{ ml: 2, flex: 1 , fontWeight:'bolder'}}
        placeholder="Search a album of your choice"
        inputProps={{
          "aria-label": "Search a album of your choice"
        }}
      />
      <Divider sx={{ border: "1px solid" }} orientation="vertical" flexItem />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
