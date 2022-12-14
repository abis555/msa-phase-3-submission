import { TextField, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import styled from "@emotion/styled";

const SearchBarWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const SearchBar: React.FC = () => {
  return (
    <SearchBarWrapper>
      <TextField
        id="search-bar"
        className="text"
        value={null}
        onChange={(prop) => {
          console.log("TextField changed");
        }}
        label="Enter the film name..."
        variant="outlined"
        placeholder="Search..."
        size="medium"
      />
      <Button
        variant="outlined"
        style={{ marginLeft: "8px" }}
        onClick={() => {
          console.log("Left click");
        }}
      >
        <SearchIcon style={{ fill: "blue" }} />
        Search
      </Button>
    </SearchBarWrapper>
  );
};
