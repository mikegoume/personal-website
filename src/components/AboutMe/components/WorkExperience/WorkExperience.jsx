import React from "react";
import Proseed from "../../../../assets/images/proseed.jpg";
import Ordereze from "../../../../assets/images/ordereze.png";
import Reveal from "../../../Reveal";

const WorkExperience = () => {
  return (
    <div
      id="work-container"
      className="flex flex-col pt-20 justify-center w-4/5 lg:w-full mx-auto"
    >
      <Reveal>
        <p className="text-2xl text-left font-bold mb-8">Work Experience</p>
      </Reveal>
      <div className="flex flex-col transition-all duration-1000 mb-8">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-7 items-center">
          <img alt="" src={Ordereze} className="w-1/2 lg:w-1/5 mb-3 lg:mb-0" />
          <div className="w-full">
            <div className="flex flex-row justify-between align-center mb-3">
              <Reveal>
                <p className="font-sans text-lg lg:text-xl font-bold">
                  Ordereze
                </p>
              </Reveal>
              <Reveal>
                <p className="font-sans text-sm lg:text-base font-medium">
                  04/2021 - 08/2022
                </p>
              </Reveal>
            </div>
            <div className="flex flex-row justify-between align-center mb-5">
              <Reveal>
                <p className="font-sans text-sm lg:text-base font-semibold">
                  Front-End React Developer
                </p>
              </Reveal>
              <Reveal>
                <p className="font-sans text-sm lg:text-base">Thessaloniki</p>
              </Reveal>
            </div>
            <div className="pl-6 pt-5">
              <ul className="list-disc">
                <li className="text-sm font-normal">
                  <Reveal>
                    <p className="font-sans text-sm lg:text-base text-left">
                      Assessed project requirements using Agile & Scrum
                      principles
                    </p>
                  </Reveal>
                </li>
                <li className="text-sm font-normal">
                  <Reveal>
                    <p className="font-sans text-sm lg:text-base text-left">
                      Used understanding of React fundamentals to promote better
                      component lifecycle practices
                    </p>
                  </Reveal>
                </li>
                <li className="text-sm font-normal">
                  <Reveal>
                    <p className="font-sans text-sm lg:text-base text-left">
                      Added hooks in the project and moved class-based
                      components to functional components
                    </p>
                  </Reveal>
                </li>
                <li className="text-sm font-normal">
                  <Reveal>
                    <p className="font-sans text-sm lg:text-base text-left">
                      Helped the implementation of payment processors for online
                      ordering (Clover, Square, Stripe).
                    </p>
                  </Reveal>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <div className="flex flex-col transition-all duration-1000 mb-8">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-7 items-center">
          <img
            alt=""
            src={Proseed}
            className="w-full h-[150px] lg:h-auto lg:w-1/5 mb-3 lg:mb-0"
          />
          <div className="w-full">
            <div className="flex flex-row justify-between align-center mb-3">
              <Reveal>
                <p className="font-sans text-lg lg:text-xl font-bold">
                  Proseed
                </p>
              </Reveal>
              <Reveal>
                <p className="font-sans text-sm lg:text-base font-medium">
                  09/2021 - 03/2021
                </p>
              </Reveal>
            </div>
            <div className="flex flex-row justify-between align-center mb-5">
              <Reveal>
                <p className="font-sans text-sm lg:text-base font-semibold">
                  Web-Developer (Internship)
                </p>
              </Reveal>
              <Reveal>
                <p className="font-sans text-sm lg:text-base">
                  Heraklion, Crete
                </p>
              </Reveal>
            </div>
            <div className="pl-6 pt-5">
              <ul className="list-disc">
                <li className="text-sm font-normal">
                  <Reveal>
                    <p className="font-sans text-sm lg:text-base text-left">
                      Designed mockups in Lo-Fi and Hi-Fi using Figma
                    </p>
                  </Reveal>
                </li>
                <li className="text-sm font-normal">
                  <Reveal>
                    <p className="font-sans text-sm lg:text-base text-left">
                      Designed the REST API of the application Built the
                      database routes and queries, using MongoDB, Mongoose and
                      Express technologies.
                    </p>
                  </Reveal>
                </li>
                <li className="text-sm font-normal">
                  <Reveal>
                    <p className="font-sans text-sm lg:text-base text-left">
                      Contributed to team projects in order to get valuable
                      experience and empower my teamwork skills
                    </p>
                  </Reveal>
                </li>
                <li className="text-sm font-normal">
                  <Reveal>
                    <p className="font-sans text-sm lg:text-base text-left">
                      Helped the implementation of mobile application using
                      React Native
                    </p>
                  </Reveal>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
