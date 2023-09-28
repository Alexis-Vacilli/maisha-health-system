"use client";


import loginPic from "../../../../public/images/logo.png";
import imgWebLogo from "../../../../public/images/Medical prescription-bro.png";
import { CiUser, CiLock } from "react-icons/ci";
import { FaHospital } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const FacilityLogin = () => {
  const [showForm, setShowForm] = useState(false);
  const setFacility = (value) => {
    let facility = value;
    facility == "null" ? setShowForm(false) : setShowForm(true);
  };

  return (
    <section className="w-full p-4 sm:p-40 bg-[#EFF0FB] h-screen flex items-center justify-center">
      <div className=" w-full  bg-whiteTheme-primaryColor flex  justify-center rounded-md shadow-sm ">
        <div className=" w-full lg:w-1/2  p-10 lg:px-20 bg-white flex flex-col justify-start gap-3 lg:rounded-l-md">
          {showForm && (
            <>
              <div className="flex flex-col items-center md:items-start ">
                <Link href={"/"}>
                  <Image src={loginPic} alt="web logo" className=" w-44" />
                </Link>
                <h2 className="pl-1 my-4 text-3xl font-semibold">Login</h2>
                <p className="pl-1 font-light text-base">
                  Youre just about there! Input your credentials to get access.
                </p>
              </div>
              <div className="pl-1">
                <form action="" className="flex flex-col gap-3">
                  <div className="border-2 border-[#D0D6FF] rounded-md p-2 px-4 flex items-center gap-3 w-full hover:border-slate-400 focus-within:border-slate-400">
                    <CiUser size={30} className="text-slate-400" />{" "}
                    <input
                      type="text"
                      className="border border-transparent w-full focus:border-none focus:outline-none"
                      placeholder="Email or Phone number"
                    />
                  </div>
                  <div className="border-2 border-[#D0D6FF] rounded-md p-2 px-4 flex items-center gap-3 w-full hover:border-slate-400 focus-within:border-slate-400">
                    <CiLock size={30} className="text-slate-400" />{" "}
                    <input
                      type="password"
                      className="border border-transparent w-full focus:border-none focus:outline-none"
                      placeholder="Password"
                    />
                  </div>
                  <div className="w-full">
                    <Link href="#">
                      <p className="text-right font-semibold text-whiteTheme-primaryColor ">
                        Forgot Password?
                      </p>
                    </Link>
                  </div>
                  <div className="flex full">
                    <button className="primary-btn w-full py-2 flex items-center gap-3 justify-evenly font-bold hover-style">
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </>
          )}

          {!showForm && (
            <>
              <div className="flex flex-col items-center md:items-start ">
                <Link href={"/"}>
                  <Image src={loginPic} alt="web logo" className=" w-44" />
                </Link>
                <h2 className="pl-1 my-4 text-3xl font-semibold">
                  Facilities{" "}
                </h2>
                <p className="pl-1 font-light text-base">
                  Please select Facilities you are logging into.
                </p>
              </div>
              <div className="pl-1">
                <div className="border-2 border-[#D0D6FF] rounded-md p-2 px-4 flex items-center gap-3 w-full hover:border-slate-400 focus-within:border-slate-400">
                  <FaHospital size={30} className="text-slate-400" />
                  <select
                    name="facility"
                    id="facility"
                    className="border border-transparent w-full focus:border-none focus:outline-none"
                    onChange={(value) => setFacility(value)}
                  >
                    <option value="null">Choose Facility</option>
                    <option value="Kibungo">Kibungo</option>
                    <option value="Kigali">Kigali</option>
                    <option value="Nyarugenge">Nyarugenge</option>
                  </select>
                </div>
              </div>
              <Link href={"/"}>
                <div className="flex pl-1">
                  <button className="primary-btn w-full py-2 flex items-center gap-3 justify-evenly font-bold hover-style bg-whiteTheme-primaryColor text-white">
                    Go to Home
                  </button>
                </div>
              </Link>
            </>
          )}
        </div>
        <div className="w-1/2 hidden lg:flex  h-[500px] bg-loginBg rounded-r-md flex-col items-center justify-center gap-2 text-white bg-whiteTheme-primaryColor">
          <Image src={imgWebLogo} alt="Login" className="w-40" />
          <h3 className="font-semibold text-2xl mt-4">
            Welcome to Maisha Health care System
          </h3>
          <p className="w-72 text-center">
            Elevating Healthcare Efficiency Where Technology Meets Compassion!
          </p>
        </div>
      </div>
    </section>
  );
};

export default FacilityLogin;
