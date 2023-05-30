import React, { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsBoxArrowUpRight } from "react-icons/bs";

const WorkCard = ({ isMyWorkActive, cardColor }) => {
  return (
    <div className="shadow-xl h-[420px] lgdesktop:h-[480px] xldesktop:h-[560px] max-w-md relative mt-10">
      {isMyWorkActive ? (
        <h1 className="text-center tablet:text-left w-full text-4xl font-playFair py-3 absolute top-[-60px]">
          {" "}
          My Work{" "}
        </h1>
      ) : (
        ""
      )}{" "}
      {/* Project Screenshot  */}
      <div className={`w-full h-[50%] ${cardColor} mt-10 tablet:mt-0`}>
        <div className="flex justify-center items-center h-full">
          <h1 className="text-white text-[36px] lgdesktop:text-[48px] xldesktop:text-[60px] text-center">
            {" "}
            screenshot of project{" "}
          </h1>
        </div>
      </div>
      {/* Project Info  */}
      <div className="w-full h-[50%] bg-slate-50">
        <div className="flex flex-col px-4 py-3 gap-2">
          <div className="flex justify-between items-center text-lg">
            <h3 className="text-xl"> Project Name</h3>
            <div className="flex gap-3">
              <AiFillGithub className="text-xl" />
              <BsBoxArrowUpRight />
            </div>
          </div>{" "}
          <p className="text-lg text-justify text-gray-700">
            {" "}
            Short description of the project. Just a couple sentences will do
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
