import React, { useState, lazy } from "react";
import { useNavigate } from "react-router-dom";
const HeroBg = lazy(() => import("../components/heroBackground"));
const Help = lazy(() => import("../components/help"));
const Resources = lazy(() => import("../components/Resources"));
const SelfHelp = () => {
  const navigate = useNavigate();
  const [help, setHelp] = useState("self");
  const content = help === "self" ? <Help /> : <Resources />;
  return (
    <>
   
      <div className="z-50 mt-14 mb-12 grid grid-cols-4">
        <div>
        <ul>
            <li onClick={ ()=> setHelp('r')} className=" text-xl hover:bg-primary-300 p-2 cursor-pointer   text-primary-100">
              Recommended Resources
            </li>
          
          </ul>
        </div>
        <div className=" p-2 col-span-3">
          <ul className="flex gap-2 mb-12">
            <li
              onClick={() => navigate("/")}
              className="text-xs cursor-pointer  "
            >
              <span className="hover:underline ">Home</span> &gt;
            </li>
            {help === "self" ? null : (
              <span
                onClick={() => setHelp("self")}
                className="text-xs hover:underline  cursor-pointer"
              >
                About
              </span>
            )}
          </ul>
          {content}
        </div>

      </div>
    </>
  );
};

export default SelfHelp;
