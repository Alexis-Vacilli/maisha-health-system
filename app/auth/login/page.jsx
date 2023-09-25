import Link from "next/link";
import Image from "next/image";
import { CiUser, CiLock } from "react-icons/ci";
import loginPic from "../../../public/images/Medical prescription-bro.png";
import imgWebLogo from "../../../public/images/logo.png";

const Login = () => {
  return (
    <section className="w-full p-4 sm:p-40 bg-[#EFF0FB] h-screen flex items-center justify-center">
      <div className=" w-full  bg-whiteTheme-primaryColor flex  justify-center rounded-md shadow-sm ">
        <div className=" w-full lg:w-1/2  p-10 lg:px-20 bg-white flex flex-col justify-start gap-3 lg:rounded-l-md">
          <div className="flex flex-col items-center md:items-start ">
            <Link href={"/"}>
              <Image src={imgWebLogo} alt="web logo" className=" w-44" />
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
        </div>
        <div className="w-1/2 hidden lg:flex  h-[500px] bg-loginBg rounded-r-md flex-col items-center justify-center gap-2 text-white bg-whiteTheme-primaryColor">
          <Image src={loginPic} alt="Login" className="w-40" />
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

export default Login;
