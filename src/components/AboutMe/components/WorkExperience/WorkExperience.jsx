import React from "react";
import { IconButton } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Proseed from "../../../../assets/images/proseed.jpg";
import Ordereze from "../../../../assets/images/ordereze.png";
import { useState } from "react";

const WorkExperience = () => {
  const [showMoreOrdereze, setShowMoreOrdereze] = useState(false);
  const [showMoreProseed, setShowMoreProseed] = useState(false);

  return (
    <div id="work-container" className="flex-col pt-20 px-10">
      <p className="text-2xl text-left font-bold mb-8">Work Experience</p>
      <div className="flex flex-col transition-all duration-1000">
        <div className="flex flex-row gap-5">
          <img alt="" src={Ordereze} className="w-1/5" />
          <div className="w-full">
            <p className="text-xl font-bold">Ordereze</p>
            <p className="text-base font-semibold">Front-End React Developer</p>
            <p className="text-sm font-medium">04/2021 - 08/2022</p>
          </div>
        </div>
        {showMoreOrdereze && (
          <div className="pl-6 pt-5">
            <ul className="list-disc">
              <li className="text-sm font-normal">
                Assessed project requirements using Agile & Scrum principles
              </li>
              <li className="text-sm font-normal">
                Used understanding of React fundamentals to promote better
                component lifecycle practices
              </li>
              <li className="text-sm font-normal">
                Added hooks in the project and moved class-based components to
                functional components
              </li>
              <li className="text-sm font-normal">
                Helped the implementation of payment processors for online
                ordering (Clover, Square, Stripe).
              </li>
            </ul>
          </div>
        )}
        <IconButton onClick={() => setShowMoreOrdereze(!showMoreOrdereze)}>
          {/* Show {showMoreOrdereze ? "Less" : "More"} */}
          {showMoreOrdereze ? (
            <KeyboardArrowUpIcon />
          ) : (
            <KeyboardArrowDownIcon />
          )}
        </IconButton>
      </div>
      <br></br>
      <div className="flex flex-col">
        <div className="flex flex-row gap-5">
          <img alt="" src={Proseed} className="w-1/5" />
          <div className="w-full">
            <p className="text-xl font-bold">Proseed</p>
            <p className="text-base font-semibold">
              Web-Developer (Internship)
            </p>
            <p className="text-sm font-medium">09/2021 - 03/2021</p>
          </div>
        </div>
        {showMoreProseed && (
          <div className="pl-6 pt-5">
            <ul className="list-disc">
              <li className="text-sm font-normal">
                Designed mockups in Lo-Fi and Hi-Fi using Figma
              </li>
              <li className="text-sm font-normal">
                Designed the REST API of the application Built the database
                routes and queries, using MongoDB, Mongoose and Express
                technologies.
              </li>
              <li className="text-sm font-normal">
                Contributed to team projects in order to get valuable experience
                and empower my teamwork skills
              </li>
              <li className="text-sm font-normal">
                Helped the implementation of mobile application using React
                Native
              </li>
            </ul>
          </div>
        )}
        <IconButton onClick={() => setShowMoreProseed(!showMoreProseed)}>
          {/* Show {showMoreProseed ? "Less" : "More"} */}
          {showMoreProseed ? (
            <KeyboardArrowUpIcon />
          ) : (
            <KeyboardArrowDownIcon />
          )}
        </IconButton>
      </div>
    </div>
  );
};

export default WorkExperience;
