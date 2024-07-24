import Image from "next/image";
import Navbar from "./components/navbar";
import LeftSection from "./components/leftSection";
import LinkRightSection from "./components/linkRightSection";

export default function Home() {
  return (
   <div className="w-full flex flex-col items-center justify-center max-h-full m-6">
<Navbar />
<div className="w-full flex-col md:flex bg-gray-500">
<LeftSection />
<LinkRightSection/>
</div>
   </div>
  );
}
