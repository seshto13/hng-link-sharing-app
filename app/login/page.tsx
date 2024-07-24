"use client";
import React, { useState } from "react";
import Link from "next/link";
import image from "../../public/assets/icons/Vector.png";
import envelope from "../../public/assets/envelope.png";

import lock from "../../public/assets/icons/lock.svg";
import Image from "next/image";
import signIn from "../firebase/signin";
import { useRouter } from "next/navigation";
import type { NextRequest } from "next/server";
//import Cookies from "js-cookie";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [authError, setAuthError] = useState("");

  const router = useRouter();

  const handleSubmit = async (event: any) => {
    setUsernameError("");
    setPasswordError("");
    event.preventDefault();
    if (email.trim() == null || email == "") {
      setUsernameError("Please enter the username");
      return;
    }

    if (password.trim() == null || password.trim() == "") {
      setPasswordError("Please enter the password");
      return;
    }

    if (!/\d/.test(password) || !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      setPasswordError(
        "Password must contain at least one number and one symbol"
      );

      return;
    }
    const { result, error } = await signIn(email, password);

    if (error) {
      console.log((error as Error).message);
      setAuthError("Invalid credentials");

      return;
    }

    // else successful
    console.log(result?.user);
    //Cookies.set("SESSION", true);
    // Cookies.set("user", JSON.stringify(result?.user));
    return router.push("/");

    //alert("Form submitted successfully");
  };

  const togglePasswordVisibility = () => {
    // setShowPassword(!showPassword);
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="md:max-w-screen h-full bg-gray-100 text-black border-2 flex flex-col items-center justify-center py-12">
      <div className="flex items-center justify-center gap-2">
        <Image
          src={image}
          width={100}
          height={100}
          alt="logo"
          className=" w-10 h-10 border-md"
        />
        <p className=" text-black text-4xl  font-bold leading-[48px]">
          devlinks
        </p>
      </div>

      <form
        className="md:w-[476px] h-[482px] p-6 rounded-lg bg-white my-16"
        onSubmit={handleSubmit}
      >
        <div className="login-container" id="login">
          <div className="">
            <header className="text-black text-3xl font-bold leading-[48px]">
              Login
            </header>
            <p className="text-base leading-6 font-normal text-neutral-500">
              Add your details below to get back into the app
            </p>
          </div>
          <br />

          <span className="text-red-500 text-sm italic">{authError}</span>
          <div className="w-full bg-white text-zinc-800">
            <p className="text-xs font-normal leading-5">Email address</p>
            <div className="relative">
              <div
                className="absolute inset-y-0 left-0 pl-3  
                    flex items-center gap-4 
                    pointer-events-none"
              >
                <Image
                  src={envelope}
                  width={100}
                  height={100}
                  alt=""
                  className=" w-4 h-4 border-md"
                />
              </div>
              <input
                type="text"
                className="w-full  px-8 p-3 rounded-xl  border-2 border-gray-300 hover:border-violet-300 cursor-pointer hover:shadow-md hover:shadow-violet-600 hover:shadow-opacity-25"
                id="username"
                placeholder="e.g alex@email.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
          </div>
          <p className="text-red-500 text-sm italic">{usernameError}</p>

          <br />

          <p className="text-xs font-normal leading-5">Password</p>

          <div className="relative">
            <div
              className="absolute inset-y-0 left-0 pl-3  
                    flex items-center gap-4 
                    pointer-events-none"
            >
              <Image
                src={lock}
                width={100}
                height={100}
                alt=""
                className=" w-4 h-4 border-md"
              />
            </div>
            <input
              className="w-full  px-8 p-3 rounded-xl  border-2 border-gray-300 hover:border-violet-300 cursor-pointer hover:shadow-md hover:shadow-violet-600 hover:shadow-opacity-25"
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="e.g enter your password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />

            <div
              className="inset-y-0 left-0 pl-3  
                    flex items-center gap-4 
                    pointer-events-none"
            >
              {passwordError && (
                <p className=" text-red-500 text-sm italic">{passwordError}</p>
              )}
            </div>
          </div>

          <br />
          <div className="">
            <button
              className="w-full text-white  border-2 border-gray-300 rounded-xl bg-violet-600 hover:bg-violet-300 font-semibold py-4 px-4 focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
          </div>

          <br />
          <div className="flex items-center justify-center gap-2">
            <p className="text-black">{`Don't have an account?`} </p>
            <Link
              href="/register"
              className="text-violet-600 hover:text-violet-900"
            >
              Create account
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
