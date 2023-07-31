import React, { useState, lazy } from "react";
import { LazyLoadImage as Image } from "react-lazy-load-image-component";
const HeroBg = lazy(() => import("../components/heroBackground"));
import { useNavigate } from "react-router-dom";
const AboutK = lazy(() => import("../components/AboutK"));
const Mos = lazy(() => import("../components/Mos"));
const Contact = lazy(() => import("../components/AboutContact"));
const Confidentiality = lazy(() => import("../components/Confidentiality"));

const About = () => {
  const [about, setAbout] = useState("about");

  const content =
    about === "about" ? (
      <AboutK />
    ) : about === "mos" ? (
      <Mos />
    ) : about === "contact" ? (
      <Contact />
    ) : (
      <Confidentiality />
    );

  const navigate = useNavigate();

  return (
    <>
      <HeroBg />
      <div className="relative z-50 h-[60vh] mb-36">
        <h1 className="text-4xl top-[40%] left-0 absolute text-primary-100 font-semibold">
          About
        </h1>
        <p className="text-xl top-[90%] left-0 absolute text-medium">
          Our services are confidential <br /> and free
        </p>
        <Image
          src="/img/KnustLibrary.jpg"
          alt="logo"
          className="w-[68%] absolute -right-12 top-14 h-[340px] "
        />
      </div>
      <div className="grid grid-cols-4 gap-4 ">
        <div>
          <ul>
            <li onClick={ ()=> setAbout('Confi')} className=" text-xl hover:bg-primary-300 p-2 cursor-pointer   text-primary-100">
              Confidentiality
            </li>
            <li onClick={ ()=> setAbout('contact')} className=" text-xl hover:bg-primary-300 p-2 cursor-pointer   text-primary-100">
              Contact
            </li>
            <li onClick={ ()=> setAbout('mos')} className=" text-xl hover:bg-primary-300 p-2 cursor-pointer   text-primary-100">
              Meet Our Staff
            </li>
          </ul>
        </div>
        <div className="col-span-3 ">
          <ul className="flex gap-2 mb-12">
            <li
              onClick={() => navigate("/")}
              className="text-xs cursor-pointer  "
            >
              <span className="hover:underline ">Home</span> &gt;
            </li>
            {
              about === "about" ?    <span className="text-xs">About</span> : <span onClick={()=> setAbout('about')} className="text-xs hover:underline  cursor-pointer">About</span>
            }
         
          </ul>
          {content}
        </div>
      </div>
    </>
  );
};

export default About;
