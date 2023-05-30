import React from "react";
import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import image2 from "../img/professional-image2.jpg";

const Footer = () => {
  return (
    <footer className="bg-mainBlue text-white flex items-center justify-center ">
      {/* Container */}
      <div className="flex flex-col gap-4 w-full tablet:mx-16 pt-10 tablet:py-10 text-xl tablet:text-base tablet:flex-row desktop:text-lg lgdesktop:text-xl xldesktop:text-[22px]">
        {/* Contact Info */}
        <div className="flex flex-col gap-4 tablet:w-1/2 desktop:w-[45%] px-6 tablet:px-0">
          <h1 className="text-3xl text-center tablet:text-left lgdesktop:text-4xl">
            {" "}
            Contact Me
          </h1>
          <p className="w-full text-2xl tablet:text-base desktop:text-lg lgdesktop:text-xl tablet:w-[80%] text-justify font-normal">
            {" "}
            Please get in touch if you think our work could be mutually
            beneficial
          </p>

          <div className="footerText">
            <p> 1234 Random Road </p>
            <p>Random Town, Morroco 12345</p>
          </div>

          <div className="flex gap-4 items-center footerText">
            <BsTelephone className="text-xl" />
            <p> 06-67-15-35-55</p>
          </div>

          <div className="flex gap-4 items-center footerText">
            <CiMail className="text-xl" />
            <p> hamza.eshoul.pro@gmail.com</p>
          </div>

          <div className="flex justify-center items-center tablet:justify-normal tablet:items-baseline gap-8 tablet:gap-3 text-5xl tablet:text-[34px] text-black mb-16 tablet:mb-0">
            <AiFillGithub />
            <AiFillLinkedin />
            <AiFillTwitterCircle />
          </div>
        </div>

        {/* Img */}
        <div className="tablet:w-1/2 desktop:w-[55%] h-[380px] ">
          <img src={image2} className="h-full w-full  " />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
