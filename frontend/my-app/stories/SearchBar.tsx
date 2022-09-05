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
        value={"sadfds"}
        onChange={(prop) => {
          console.log("asfdsfa");
          //   setFilmName(prop.target.value);
        }}
        label="Enter the film name..."
        variant="outlined"
        placeholder="Search..."
        size="medium"
      />
      <Button
        onClick={() => {
          console.log("dasf");
          //   search();
        }}
      >
        <SearchIcon style={{ fill: "blue" }} />
        Search
      </Button>
    </SearchBarWrapper>
  );
};
