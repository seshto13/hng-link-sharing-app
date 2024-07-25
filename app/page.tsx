"use client";
import Image from "next/image";
import Navbar from "./components/navbar";
import LeftSection from "./components/leftSection";
import LinkRightSection from "./components/linkRightSection";
import {Provider} from "react-redux";
import store from "./redux/store";

export default function Home() {
  return (
   <div className="w-full flex flex-col items-center justify-center max-h-full m-6">
    <Provider store={store}>
<Navbar />
<div className="w-full flex-col md:flex bg-gray-500">
<LeftSection />
<LinkRightSection/>
</div>
</Provider>
   </div>
  );
}