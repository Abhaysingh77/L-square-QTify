import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Style from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "@mui/material";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className={Style.appBar}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Link to='/'>
            <Logo />
          </Link>
          <SearchBar />
          <Button>Give Feedback</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
