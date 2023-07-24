import React from "react";
import { Button } from "@mui/material";
import ProfilePicture from "../../assets/images/profilePicture.jpg";
import "./Opening.css";
import Reveal from "../Reveal";

const Opening = () => {
  return (
    <div className="flex flex-col-reverse justify-center lg:flex-row h-screen lg:justify-between items-center">
      <div className="lg:w-3/5 w-4/5">
        <Reveal>
          <p className="font-mono text-5xl text-left font-extrabold mb-2 lg:text-5xl">
            Hey, i'm Michalis.
          </p>
        </Reveal>
        <Reveal>
          <p className="font-mono text-2xl text-left mb-2 lg:text-3xl">
            I'm a{" "}
            <span className="font-sans font-bold text-orange">
              Front-End React Developer
            </span>
            .
          </p>
        </Reveal>
        <Reveal>
          <p className="font-sans text-sm text-left mb-2 lg:text-lg">
            I've spent the last 2 years building and scaling software for some
            pretty cool companies. I'm bassed in Heraklion, Greece
          </p>
        </Reveal>
        <Reveal>
          <Button
            className="contact-me-button"
            variant="contained"
            sx={{
              alignSelf: "center",
              backgroundColor: "#ff901b",
              ":hover": "#ff901b",
            }}
          >
            Contact Me
          </Button>
        </Reveal>
      </div>
      <div className="w-1/2 mb-5 lg:w-4/12 lg:mb-0 image-container">
        <img alt="" src={ProfilePicture} />
      </div>
    </div>
  );
};

export default Opening;
