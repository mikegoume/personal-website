import React from "react";
import { Button, createMuiTheme } from "@mui/material";
import ProfilePicture from "../../assets/images/profilePicture.jpg";
import "./Opening.css";
import Reveal from "../Reveal";

const Opening = () => {
  return (
    <div className="flex flex-col-reverse justify-center lg:flex-row h-screen lg:justify-between items-center">
      <div className="w-3/5">
        <Reveal>
          <p className="font-mono text-5xl text-center font-extrabold mb-2 lg:text-5xl lg:text-left">
            Hey, i'm Michalis.
          </p>
        </Reveal>
        <Reveal>
          <p className="font-mono text-2xl text-center mb-2 lg:text-3xl lg:text-left">
            I'm a{" "}
            <span className="font-sans font-bold text-orange">
              Front-End React Developer
            </span>
            .
          </p>
        </Reveal>
        <Reveal>
          <p className="font-sans text-sm text-center mb-2 lg:text-lg lg:text-left">
            I've spent the last 2 years building and scaling software for some
            pretty cool companies. I'm bassed in Heraklion, Greece
          </p>
        </Reveal>
        <Reveal>
          <Button variant="contained">Contact Me</Button>
        </Reveal>
      </div>
      <div className="w-1/2 mb-5 lg:w-4/12 lg:mb-0 image-container">
        <img alt="" src={ProfilePicture} />
      </div>
    </div>
  );
};

const OpeningContainer = () => {
  const theme = createMuiTheme({
    palette: {
      primary: "",
    },
  });
};

export default Opening;
