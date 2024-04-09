import React, { useState } from "react";

import spell from "../assets/spelllogo.png";
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux"
import { theemail } from "../redux/counterSlice";

const Login = () => {
  const navigate= useNavigate()
  const dispatch = useDispatch()
  const [email,setemail]=useState("")
  const handlesubmit=()=>{
    dispatch(theemail(email))
    navigate("/signup/step2");
    
  }
  return (
    <div>
      <div className="">
        <div className="grid  md:grid-cols-12">
          <div className="sm:min-h-[100vh]  md:col-span-5 bg-[#F2D184] pr-5 ">
            <p className="">
              <div className="md:hidden text-nowrap text-end pt-5 pr-3">
                Already a member?{" "}
                <a className=" " href="/signin">
                  Signin
                </a>
              </div>
            </p>
            <div className="spacer min-h-16"></div>
            <div className="ml-[60px] ">
              <img
                src={spell}
                height={"40px"}
                width={"100px"}
                className=" contrast-0 mt-2 "
              ></img>
            </div>
            <p className="text-[#805C10] text-3xl font-bold pl-14 mt-5">
              Discover the world's top Designers & Creatives
            </p>
            <div className="">
              <img src="https://cdn.dribbble.com/users/76454/screenshots/6592185/001_4x.png?resize=1000x750&vertical=center" width={"100%"}></img>
            </div>

            <p className="text-[#805C10] font-medium pl-14 mt-5 mb-5">
              {" "}
              Art By <span className="underline">Peter Tarka</span>
            </p>
          </div>

          {/*right side*/}
          <div className="min-h-[100px]  md:col-span-7">
            <div className="min-h-16 text-nowrap mr-4 text-end pt-5 pr-3 invisible md:visible">
              Already a member?{" "}
              <a className=" " href="/signin">
                Signin
              </a>
            </div>

            <div className=" min-h-[600px] mt-9 mr-[20px] ml-[20px] xl:ml-[150px] lg:mr-[150px] ">
              <text className="font-extrabold text-3xl">
                Sign up to Dribbble
              </text>
              <form onSubmit={handlesubmit}>
                <div className="grid lg:grid-cols-6 mt-6 mb-8">
                  <div className="lg:col-span-3 ">
                    <label className="text-lg font-bold">Name</label><br></br>
                    <input type="text" placeholder="Name" className="rounded-lg min-h-10 min-w-[90%]  p-3" required></input>
                  </div>
                  <div className="lg:col-span-3">
                    <label className="text-lg font-bold">Username</label><br></br>
                    <input type="text" className="rounded-lg min-h-10 min-w-[90%]  p-3" placeholder="Username" required></input>
                  </div>
                </div>

                <label className="text-lg font-bold ">Email</label><br></br>
                <input type="text" className="rounded-lg min-h-10 min-w-[90%] p-3 mb-8" placeholder="Email" onChange={(e)=>{setemail(e.target.value)}} value={email} required></input>
                <label className="text-lg font-bold ">Password</label><br></br>
                <input type="password" className="rounded-lg min-h-10 min-w-[90%]  p-3 mb-8" placeholder="6+ Characters" required></input>
                <br />
                <div className="grid grid-cols-12">
                  <div className="col-span-1 py-2 px-3"><input type="checkbox"  required></input></div>
                  <div className="col-span-11"><text className="">
                  Creating an account means you're okay with our{" "}
                  <span className="text-[#5A47BC]">Terms of Service, Privacy Policy</span> , and our
                  default <span className="text-[#5A47BC]">Notification Settings</span>
                </text> </div>
                </div>
                
                
                <br />
                <button type="submit" className="bg-[#EA4B8B] text-lg rounded-xl text-white px-12 py-2"> Create Account</button>
              </form>

              <text className="text-xs">
                This site is protected by reCAPTCHA and the Google<br />
                <span className="text-[#5A47BC]">Privacy Policy</span> and <span  className="text-[#5A47BC]">Terms of Service</span>{" "}
                apply.
              </text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
