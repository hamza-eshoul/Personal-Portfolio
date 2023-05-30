import React from "react";
import image from "../img/professional-image.jpg";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import {} from "react-icons/ai";

const Header = () => {
  return (
    <div className="flex justify-center items-center py-6 headerBg">
      {/* Container */}
      <div className="flex flex-col tabletHeaderContainer desktopContainer max-w-[1500px] mx-10 ">
        {/* Img */}
        <div className="w-full h-[600px] relative tabletHeaderImg desktopImg lgDesktopImg">
          <img src={image} className="h-full w-full " />
          <p className="absolute bottom-1 text-center text-[55px] xl:text-6xl text-mainBlue font-bold font-playFair w-full tabletHeaderName">
            Hamza <span className="text-white">Eshoul</span>{" "}
          </p>
        </div>

        {/* About Card */}
        <div className="tablet:bg-white tablet:shadow-2xl tabletHeaderCard desktopCard  pt-8 px-5 pb-5 my-10 flex flex-col gap-6 w-full lgDesktopCard ">
          <h2 className="text-4xl font-playFair text-center  tabletHeaderAbout desktopAbout">
            {" "}
            About me
          </h2>
          <div>
            <p className="text-gray-600 text-base text-justify leading-7 mb-auto tabletHeaderP1">
              {" "}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloribus aliquid autem recusandae officiis expedita velit!
              <span className="tablethiddenP">
                expedita velit! expedita velit! adipisicing elit amet
                consectetur{" "}
              </span>
              <span className="desktophiddenP hidden">
                expedita velit! expedita velit! adipisicing elit amet
                consectetur expedita velit! expedita velit! adipisicing elit
                amet consectetu expedita velit! expedita velit! adipisicing elit
                amet consectetu expedit
              </span>
            </p>
            <p className="text-gray-600 text-base text-justify leading-7 mb-auto tabletHeaderP2">
              tempore consequuntur at, placeat accusamus. ipsum. Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Nesciunt soluta,
              aperiam distinctio omnis quidem at adipisci libero harum? Maxime
              ab vero id suscipit sint. Eos amet ullam nostrum accusantium.
              Corrupti! Lorem
            </p>
          </div>

          <div className="flex justify-center items-center desktopIcons tabletHeaderIcons desktopHeaderIcons gap-2  text-3xl ">
            <AiFillGithub />
            <AiFillLinkedin />
            <AiFillTwitterCircle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
