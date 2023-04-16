import { Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import { logo } from "../utils/data";
import SearchBar from "./SearchBar";

function NavBar() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#1E1A1A",
        top: 0,
        justifyContent: "space-between",
        // backgroundColor: "#0008",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45} />
      </Link>
      <SearchBar />
    </Stack>
  );
}

export default NavBar;
