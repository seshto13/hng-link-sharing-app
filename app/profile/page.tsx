import Image from "next/image";
import Navbar from "../components/navbar";
import LeftSection from "../components/leftSection";
import ProfileRightSection from "../components/profileRightSection";

function page() {
  return (
    <div className="relative flex flex-col items-center justify-center max-h-full m-6">
    <Navbar />
    <div className="md:f bg-gray-500">
    <LeftSection />
    <ProfileRightSection/>
    </div>
       </div>
  )
}

export default page