import { Stack } from "@mui/material";
import React from "react";

import { categories } from "../utils/data";

// const selectedCategory = "New";

function SideBar({ setSelectedCategory, selectedCategory }) {
  return (
    <Stack
      direction="row"
      sx={{ overflowY: "auto", md: "95%", flexDirection: { md: "column" } }}
    >
      {categories.map((category) => (
        <button
          className="category-btn"
          onClick={() => setSelectedCategory(category.name)}
          style={{
            backgroundColor: category.name === selectedCategory && "#fc1503",
            color: "white",
          }}
          key={category.name}
        >
          <span
            style={{
              color: category.name === selectedCategory ? "white" : "red",
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{
              opacity: category.name === selectedCategory ? "1" : "0.7",
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
}

export default SideBar;
