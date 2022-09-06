import React from "react";
import axios from "axios";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { Button, Grid, Paper, Skeleton, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function Index() {
  const [filmName, setFilmName] = useState("");
  const [filmInfo, setFilmInfo] = useState<undefined | any>(undefined);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const FILM_BASE_API_URL = "https://ghibliapi.herokuapp.com/films";
  return (
    <div>
      <div className="search-field">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Typography
            variant={matches ? "h4" : "h3"}
            fontWeight={matches ? "600" : "550"}
            align="center"
            padding="10px 0px 20px 0px"
          >
            Studio Ghibli Movie Search
          </Typography>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <TextField
            id="search-bar"
            className="text"
            value={filmName}
            onChange={(prop) => {
              setFilmName(prop.target.value);
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
              search();
            }}
          >
            <SearchIcon style={{ fill: "blue" }} />
            Search
          </Button>
        </div>
      </div>

      {filmInfo === undefined ? (
        <div></div>
      ) : (
        <div
          id="film-result"
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "40px 10px 0px 10px",
            backgroundImage:
              "url(" +
              "https://upload.wikimedia.org/wikipedia/en/c/ca/Studio_Ghibli_logo.svg" +
              ")",
          }}
        >
          <Paper
            sx={{
              backgroundColor: "#BDF8FF",
              padding: "10px 12px 12px 10px",
            }}
            elevation={24}
          >
            <Grid container direction="row" spacing={3} justifyContent="center">
              <Grid item>
                <div>
                  {filmInfo === undefined || filmInfo.length === 0 ? (
                    <h1> Film not found</h1>
                  ) : (
                    <div>
                      <h1>{filmInfo[0].title}</h1>
                      <p>
                        {filmInfo[0].description}
                        <br />
                        <br />
                        Director: {filmInfo[0].director}
                        <br />
                        <br />
                        Release Year: {filmInfo[0].release_date}
                        <br />
                        <br />
                        Running Time: {filmInfo[0].running_time} mins
                        <br />
                        <br />
                        Rotten Tomato Score: {filmInfo[0].rt_score}
                      </p>
                    </div>
                  )}
                </div>
              </Grid>
              <Grid item>
                <div>
                  {filmInfo[0]?.image ? (
                    <img
                      height={matches ? "200px" : "300px"}
                      width={matches ? "200px" : "300px"}
                      alt={filmInfo[0].title}
                      src={filmInfo[0].image}
                    ></img>
                  ) : (
                    <Skeleton width={300} height={300} />
                  )}
                </div>
              </Grid>
            </Grid>
          </Paper>
        </div>
      )}
    </div>
  );

  function search() {
    console.log(filmName);
    if (filmName === undefined || filmName === "") return;

    const name = filmName.split(" ");

    for (let i = 0; i < name.length; i++) {
      name[i] = name[i][0].toUpperCase() + name[i].slice(1);
    }

    console.log(name.join(" "));

    axios
      .get(FILM_BASE_API_URL + "?title=" + name.join(" "))
      .then((res) => {
        setFilmInfo(res.data);
        console.log(res.data);
      })
      .catch(() => {
        setFilmInfo(null);
      });
  }
}

export default Index;
