"use state";
import React from "react";
import Image from "next/image";
import image from "../../public/assets/images/getstartedimg.png";
import ButtonSave from "./buttonSave";

const getStarted = () => {
  return (
    <div className="flex flex-col w-full h-[469px]">
      <div className="flex flex-col items-center p-3">
        <div className="p-4">
          <Image
            src={image}
            alt="Get started image"
            className="w-[249px] h-[160px]"
          />{" "}
        </div>

        <p className="text-2xl font-bold leading-6 ">
          Let&apos;s get you started
        </p>
        <br />
        <p className="text-sm">
          Use the &lsquo;Add new link&lsquo; button to get started. Once you
          have more than one link, you can reorder and edit them. We&apos;re
          here to help you share your profiles with everyone!
        </p>
      </div>

      <hr className="border-1 border-gray-200" />
      <ButtonSave />
    </div>
  );
};

export default getStarted;
