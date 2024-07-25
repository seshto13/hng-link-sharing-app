"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import image from "../../public/assets/icons/ph_link-bold.png";
import teen from "../../public/assets/icons/teenyicons_github-solid.svg";
import { RxDropdownMenu } from "react-icons/rx";
import Dropdown from "./dropDown";
import { getFirestore } from "firebase/firestore";
import firebaseApp from "../config/firebaseConfig";
import { useCookies } from "next-client-cookies";
import saveData from "../firebase/saveData";

const auth = getFirestore(firebaseApp);
const Platform = () => {
  const [name, setName] = useState(menu[0].name);
  const [link, setLink] = useState("");
  const [items, setItems] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  const cookies = useCookies();

  const submitLink = async () => {
    const data = {
      name: name,
      link: link,
    };

    const user = JSON.parse(cookies.get("user") ?? "");
    console.log(user);

    const { result, error } = await saveData({
      colllection: `users/${user.uid}/data`,
      id: name,
      data: data,
    });

    if (error) {
      alert(error);
    }

    console.log("result " + result);

    if (result) {
      console.log("result " + result);
    }
  };
  return (
    <div>
      <Dropdown />
      <br />
      <div className="bg-gray-100 p-4">
        <div className="relative ">
          <div
            className="absolute inset-y-0 left-0 top-10 pl-2  
                    flex items-center gap-8 
                    pointer-events-none"
          >
            <Image
              src={teen}
              width={100}
              height={100}
              alt=""
              className=" w-5 h-5 border-md"
            />
          </div>
          <select
            className="w-full md:w-[674px] px-8 p-3 mt-10 rounded-xl  border-2 border-gray-300 hover:border-violet-300 cursor-pointer hover:shadow-md hover:shadow-violet-600 hover:shadow-opacity-25"
            id="username"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          >
            {menu &&
              menu.map((item, index) => {
                return <option key={index}>{item.name}</option>;
              })}
          </select>
        </div>

        <div className="relative">
          <div
            className="absolute inset-y-0 left-0 top-10 pl-2  
                    flex items-center gap-8 
                    pointer-events-none"
          >
            <Image
              src={image}
              width={100}
              height={100}
              alt=""
              className=" w-5 h-5 border-md"
            />
          </div>
          <input
            type="text"
            className="w-full md:w-[674px] px-8 p-3 mt-10 rounded-xl  border-2 border-gray-300 hover:border-violet-300  hover:shadow-md hover:shadow-violet-600 hover:shadow-opacity-25"
            id="text"
            value={link}
            onChange={(event) => setLink(event.target.value)}
            placeholder="e.g https://www.github.com/benwright"
          />
        </div>
      </div>

      <button
        className="px-4 py-2 border-2  bg-violet-600 text-white rounded-md"
        onClick={() => submitLink()}
      >
        Save
      </button>
    </div>
  );
};

export default Platform;

const menu = [
  {
    name: "GitHub",
    icon: "",
    color: "bg-zinc-900 text-white",
  },
  {
    name: "Frontend Mentor",
    icon: "",
    color: "bg-zinc-300 text-zinc-800",
  },
  {
    name: "Twitter",
    icon: "",
    color: "bg-sky-400 text-white",
  },
];
