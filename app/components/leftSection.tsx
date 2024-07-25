"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import phoneinner from "../../public/assets/mockup/Subtract.svg";
import circle from "../../public/assets/mockup/circle.svg";
import bar1 from "../../public/assets/mockup/bigbar.svg";
import bar2 from "../../public/assets/mockup/smallbar.svg";
import fetchData from "../firebase/fetchData";
import { useCookies } from "next-client-cookies";
import { useSelector, useDispatch } from 'react-redux';
import {GetLink} from "@/app/redux/reducer";



const LeftSection = () => {
  const [loading, setLoading] = useState(true);
  const [dataError, setDataError] = useState<any>();

  const links = useSelector((state: any) => state.info);
  const dispatch = useDispatch()

  const cookies = useCookies();
  useEffect(() => {
    
    const fetchItems = async () => {
      setLoading(true);
      const user = JSON.parse(cookies.get("user") ?? "");
      const {result, error} = await fetchData({userId : `users/${user.uid}/data`});

      if(error) {
        console.log(error);
      }
  
      if(result) {
        console.log(result);
        dispatch(GetLink(result))
      
      }
      setLoading(false);
      console.log(result);
    }

    fetchItems()
   }, [cookies, dispatch])

  return (
     <div className="hidden md:flex flex-col items-center justify-center w-full md:w-[512px] md:h-auto bg-gray-50  lg:absolute left-0 top-[90px] p-4 ">
      <div className="relative flex items-center justify-center  mx-auto border-neutral-500 dark:border-gray-100 bg-white border-[1px] rounded-3xl h-[631px] w-[307px]">
        <div className=" flex flex-col items-center">
         
          <Image
            src={phoneinner}
            width={600}
            height={600}
            alt=""
            className="w-[265px] h-[611px] border-md"
          />

          <div className="">
            <Image
              src={circle}
              width={600}
              height={600}
              alt=""
              className="absolute top-20 left-28 w-[96px] h-[96px] border-md"
            />
          </div>

          <div className="">
            <Image
              src={bar1}
              width={600}
              height={600}
              alt=""
              className="absolute top-48 left-20 w-[160px] h-[16px] border-md"
            />
          </div>

        
          <div className="">
            <Image
              src={bar2}
              width={600}
              height={600}
              alt=""
              className="absolute top-56 left-32 w-[72px] h-[8px] border-md"
            />
          </div>


<div className="grid grid-cols-1 absolute top-64 left-9 gap-4">

{links && links.map((item : any) => {
       
       return(<>
       <div className=" w-[237px] h-[44px] border-md bg-gray-200">
       
{item.name}
             </div>
       </> ) 
       
       })}

         
             </div>
            
        </div>
      </div>
    </div>
  );
};

export default LeftSection;