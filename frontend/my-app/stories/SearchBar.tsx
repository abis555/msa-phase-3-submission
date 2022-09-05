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
        value={"filmName"}
        onChange={(prop) => {
          console.log("asfdsfa");
        }}
        label="Enter the film name..."
        variant="outlined"
        placeholder="Search..."
        size="medium"
      />
      <Button
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
