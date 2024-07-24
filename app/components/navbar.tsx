"use client";

import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import image from "../../public/assets/icons/Vector.png";
import signOut from "../firebase/signout";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [nav, setNav] = useState(false);

  const currentPath = usePathname();

  async function handleLogout() {
    await signOut();
    Cookies.remove("SESSION");
    Cookies.remove("user");

    router.push("/login");
  }

  return (
    <div className="flex items-center justify-between w-[100%] h-auto  text-black py-5 px-6 gap-10 md:px-10 fixed top-0 z-20 space-y-2 bg-white">
      <div className="flex items-center justify-center gap-2">
        <Image
          src={image}
          width={100}
          height={100}
          alt=""
          className=" w-10 h-10 border-md"
        />
        <p
          className={`w-1/3  leading-7 font-semibold  text-violet-600
        text-base md:text-xl lg:text-2xl`}
        >
          devlinks
        </p>
      </div>

      <div className="w-2/3 flex justify-around items-center space-x-12">
        <ul className="hidden  md:flex justify-between items-center gap-10 text-base">
          <Link href="/">
            <li
              className={
                currentPath === "/"
                  ? "text-violet-600"
                  : "hover:text-violet-600 cursor-pointer"
              }
            >
              Link
            </li>
          </Link>

          <Link href="/profile">
            <li
              className={
                currentPath === "/profile"
                  ? "text-violet-600"
                  : "hover:text-violet-600 cursor-pointer"
              }
            >
              Profile Details
            </li>
          </Link>
        </ul>

        <Link href="/preview">
          <button className="w-32 h-12 px-4 py-1 md:py-2 me-2  bg-white border-2 border-violet-600 rounded-md hover:bg-violet-600 text-violet-600  hover:text-white hover:border-0">
            Preview
          </button>
        </Link>
      </div>

      {nav && (
        <div className="md:hidden justify-between items-center gap-8 absolute  top-[85px] lg:top-14 left-0 bg-gray-900  w-[70%] h-96 p-6 space-y-6 text-lg text-white">
          <ul>
            <div className="space-y-20 gap-6 ">
              <Link href="/">
                <div>
                  <li
                    className={
                      currentPath === "/"
                        ? "text-violet-600"
                        : "hover:text-violet-600 cursor-pointer"
                    }
                  >
                    Links
                  </li>
                </div>
              </Link>

              <Link href="/profile">
                <li
                  className={
                    currentPath === "/profile"
                      ? "text-violet-600"
                      : "hover:text-violet-600 cursor-pointer"
                  }
                >
                  Profile Details
                </li>
              </Link>
              <button onClick={() => handleLogout()}>Logout</button>
            </div>
          </ul>
        </div>
      )}

      {!nav ? (
        <div className=" md:hidden cursor-pointer" onClick={() => setNav(true)}>
          <GiHamburgerMenu size={30} />
        </div>
      ) : (
        <div
          className=" md:hidden cursor-pointer"
          onClick={() => setNav(false)}
        >
          <IoIosCloseCircleOutline size={30} />{" "}
        </div>
      )}
    </div>
  );
};
export default Navbar;
