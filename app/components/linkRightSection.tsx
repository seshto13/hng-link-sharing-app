"use client";
import React from "react";
import Platform from "./platform";



const LinkRightSection = () => {
  //const []
  return (
    <div className="flex flex-col justify-center mt-16 md:mt-2 md:absolute left-[512px] top-[100px] md:w-[738px]  bg-white p-4">
      <header className="text-[32px] font-bold leading-[150%] text-zinc-800 flex-grow ">
        Customize your links
      </header>
      <p className="text-base font-light">
        Add/edit/remove links below and then share all your profiles with the
        world!
      </p>
      {/* <button className="w-full md:w-[674px] h-6 mt-10 px-3 py-[27px] flex items-center justify-center bg-violet-200 text-violet-600 border-2 border-violet-600 rounded-md">
        <p className="text-center">+ Add new link</p>{" "}
      </button> */}
<br />
  <Platform />   
     
     
    </div>
  );
};

export default LinkRightSection;
