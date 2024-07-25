import React from "react";
import ImageUpload from "./imageUpload";
import ProfileForm from "./profileForm";
import ButtonSave from "./buttonSave";

const profileRightSection = () => {
  return (
    <div className="flex flex-col justify-center lg:absolute left-[500px] top-[100px] md:w-[700px] bg-white p-4 my-16">
      <header className="text-[32px] font-base md:font-bold leading-[150%] text-zinc-800 flex-grow px-3">
        Profile Details
      </header>
      <p className="text-base font-light p-4">
        Add your details to create a personal touch to your profile.
      </p>
      <ImageUpload />
      <br />
      <ProfileForm />
      <br />
      <hr className="border-1 border-gray-200" />
      <ButtonSave />
      <br />
    </div>
  );
};

export default profileRightSection;
