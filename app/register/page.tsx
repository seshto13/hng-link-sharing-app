"use client";
import React, { useState } from "react";
import Link from "next/link";
//import image from "../../public/assets/Vector.png";
import image from "../../public/assets/icons/Vector.png";
import envelope from "../../public/assets/envelope.png";
import lock from "../../public/assets/icons/lock.svg";
import Image from "next/image";
import SignUp from "../firebase/signup";
import { useRouter } from "next/navigation";
import firebaseApp from "../config/firebaseConfig";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");

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
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      return;
    }
    if (!/\d/.test(password) || !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      setPasswordError(
        "Password must contain at least one number and one symbol"
      );
      return;
    }

    const { result, error } = await SignUp(email, password);

    if (error) {
      return console.log(error);
    }

    // else successful
    console.log(result);
    alert("Account created successfully");
    ///return router.push("/");
  };

  const togglePasswordVisibility = () => {
    // setShowPassword(!showPassword);
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="max-w-screen max-h-full bg-gray-50 text-black border-2 flex flex-col items-center justify-center py-12">
      <div className="flex items-center justify-center gap-2">
        <Image
          src={image}
          width={100}
          height={100}
          alt=""
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
              Create account
            </header>
            <p className="text-base leading-6 font-normal text-neutral-500">
              Let’s get you started sharing your links!
            </p>
          </div>
          <br />

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

          <p className="text-xs font-normal leading-5">Create password</p>
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
              type="password"
              placeholder="At least 8 characters"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />

            {passwordError && (
              <p className="text-red-500 text-sm italic">{passwordError}</p>
            )}
          </div>
          <br />
          <p className="text-xs font-normal leading-5">Confirm password</p>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center gap-4 pointer-events-none">
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
              id="confirmpassword"
              type="password"
              placeholder="At least 8 characters"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />

            {passwordError && (
              <p className="text-red-500 text-sm italic">{passwordError}</p>
            )}
          </div>
          <br />
          <p className="text-xs font-normal leading-5">
            Password must contain at least 8 characters
          </p>
          <br />
          <div className="">
            <button
              className="w-full text-white  border-2 border-gray-300 rounded-xl bg-violet-600 hover:bg-violet-300 font-semibold py-4 px-4 focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Create new account
            </button>
          </div>

          <br />
          <div className="flex items-center justify-center gap-2">
            <p className="text-black">{`Already have an account?`} </p>
            <Link
              href="/register"
              className="text-violet-600 hover:text-violet-900"
            >
              Create new account
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
