"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import image from "../../public/assets/icons/ph_link-bold.png";
import teen from "../../public/assets/icons/teenyicons_github-solid.svg";
import fetchDatabase from "../firebase/fetchDatanase";
import { RxDropdownMenu } from "react-icons/rx";
import Dropdown from "./dropDown";
import { getFirestore } from "firebase/firestore";
import firebaseApp from "../config/firebaseConfig";

const auth = getFirestore(firebaseApp);
const Platform = () => {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [items, setItems] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  async function fetchItems() {
    setLoading(true);
    setItems([{ name: "Tommy" }, { name: "Tommy" }]);
    //const querySnapshot = await getDocs(collection(auth, "users"))
    console.log("Logos here");
    // console.log(querySnapshot.docs)
    /*querySnapshot.docs.map((doc) => {
      
      console.log(doc._document?.data?.value?.mapValue.fields.link.stringValue)
      console.log(doc._document?.data?.value?.mapValue.fields.name.stringValue)
    })*/
    //setItems(querySnapshot.docs);
    /*if(querySnapshot.docs !==  null) {
     const  result = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
     setItems([{'name' :'Tommy'},{'name' :'Tommy'}])
    setLoading(false);
   // setData(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
   //let result = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
   //console.log(result);
   console.log("Data Here");
   console.log(items);
   console.log(result);

    }*/

    setLoading(false);
    console.log(items);
  }

  useEffect(() => {
    fetchItems();
  }, []);

  const handleAddLink = async () => {
    const data = {
      name: name,
      link: link,
    };

    const { result, error } = await fetchDatabase({
      colllection: "users",
      id: "user-id",
    });

    if (error) {
      alert(error);
    }

    console.log("result " + result);

    if (result) {
      console.log("result " + result);
    }
    /*const { result, error } = await getDocument({
      collection: "users",
      id: "user-id",
    });*

    if (error) {
      return console.log(error);
    }
    

    console.log(result);
    /*const data = {
      name: name,
      link: link,
    };
    const { result, error } = await addData({
      colllection: "users",
      id: "user-id",
      data: data,
    });

    if (error) {
      return console.log(error);
    }*/
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
        >
          {menu &&
            menu.map((item) => {
              return <option>{item.name}</option>;
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
          value="hhhh"
          // onChange={(event) => setLink(event.target.value)}
          placeholder="e.g https://www.github.com/benwright"
        />
      </div>
      </div>

      <button
        className="p-4 border-spacing-1 border-red-500"
        onClick={() => handleAddLink()}
      >
        {" "}
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
