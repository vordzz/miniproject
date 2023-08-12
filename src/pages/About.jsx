import React, { useState } from "react";
import { LazyLoadImage as Image } from "react-lazy-load-image-component";
import HeroBg from "../components/heroBackground";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function About({ children }) {
  const location = useLocation();

  return (
    <>
      <HeroBg />
      <div className="relative z-50 h-[60vh] mb-36">
        <h1 className="text-4xl top-[40%] left-0 absolute text-primary-100 font-semibold">About</h1>
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
            <Link to={"/about/confidentiality"}>
              <li className=" text-xl hover:bg-primary-300 p-2 cursor-pointer   text-primary-100">
                Confidentiality
              </li>
            </Link>
            <Link to={"/about/contact"}>
              <li className=" text-xl hover:bg-primary-300 p-2 cursor-pointer   text-primary-100">
                Contact
              </li>
            </Link>
            <Link to={"/about/staff"}>
              <li className=" text-xl hover:bg-primary-300 p-2 cursor-pointer   text-primary-100">
                Meet Our Staff
              </li>
            </Link>
          </ul>
        </div>
        <div className="col-span-3 ">
          <ul className="flex gap-2 mb-12">
            <li className="text-xs cursor-pointer  ">
              <a href="/" className="hover:underline ">
                Home
              </a>{" "}
              &gt;
            </li>

            {location.pathname !== "/about" && (
              <a href="/about" className="text-xs hover:underline  cursor-pointer">
                About
              </a>
            )}
          </ul>
          {children}
        </div>
      </div>
    </>
  );
}

export default About;
