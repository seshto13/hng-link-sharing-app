"use client";
import Image from "next/image";
import Navbar from "../components/navbar";
import LeftSection from "../components/leftSection";
import ProfileRightSection from "../components/profileRightSection";
import { Provider } from "react-redux";
import store from "@/app/redux/store";

function page() {
  return (
    <div className="relative flex flex-col items-center justify-center max-h-full m-6">
      <Provider store={store}>
        <Navbar />
        <div className="md:f bg-gray-500">
          <LeftSection />
          <ProfileRightSection />
        </div>
      </Provider>
    </div>
  );
}

export default page;
