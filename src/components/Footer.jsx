import React from "react";
import { LazyLoadImage as Image } from "react-lazy-load-image-component";
import { Link as RouterLink } from "react-router-dom";
import { Links } from "../shareddata/navlinks";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="grid py-6 px-4 relative grid-cols-3 mt-8 bg-primary-100 gap-5 text-white ">
        {/* left side of footer */}
        <div className="px-4 col-span-2 ">
          <h3 className="text-4xl mb-3 font-semibold">
            Knust Counseling Center
          </h3>
          <div className="flex  gap-6">
            <p className=" text-sm">
              St. Liam Hall, Third Floor <br />
              Notre Dame, IN 46556 USA <br />
              Phone 574-631-7336 <br />
              Fax 574-631-5643
            </p>

            <div className="flex flex-col gap-2">
              <a
                href="#"
                className="text-white hover:underline text-sm ease-in duration-300 mr-4"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-white hover:underline text-sm ease-in duration-300 mr-4"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-white hover:underline text-sm ease-in duration-300"
              >
                Instagram
              </a>
            </div>
          </div>
          <p className="text-sm text-center mt-4">
            {" "}
            &copy; {currentYear} Knust Counseling Center
          </p>
        </div>
        {/* right side of footer */}
        <div className="absolute right-0 top-0 w-[40%] h-full px-6 py-6 bg-blue-900">
          <div className="flex items-center gap-1">
            <Image src="/img/knustlogo.png" alt="logo" width="70" height="70" />
            <span>
              <p className="text-white font-Rakkas text-xs">
                Kwame Nkrumah University of science and Technology
              </p>
              <h1 className="text-white font-bold font-Rakkas text-lg">
                Knust Counseling Center
              </h1>
            </span>
          </div>
          <ul className="mt-2 flex flex-col gap-1">
            {Links.map((link) => (
              <RouterLink
                key={link.id}
                to={link.src}
                className="text-white hover:underline text-xs ease-in duration-300"
              >
                {link.name}
              </RouterLink>
            ))}
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
