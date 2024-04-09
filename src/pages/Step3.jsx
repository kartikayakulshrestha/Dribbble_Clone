import React from "react";
import spink from "../assets/pink.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"
const Step3 = () => {
  const navigate = useNavigate();
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  function handlesubmit(){
    navigate("/verify")
  }
  return (
    <div>
      <div className=" min-h-[100vh]">
        <div className="ml-[40px] mb-4  flex">
          <img className="" src={spink} height={"40px"} width={"100px"} />
          <div
            className="h-8 w-8 mt-9 ml-9 rounded-md text-xl bg-slate-300 text-center"
            onClick={() => {
              navigate("/signup/step2");
            }}
          >
            {" "}
            &lt;{" "}
          </div>
        </div>
        <div className="text-5xl text-center font-bold">
          What brings you to Dribbble?
        </div>
        <div className="ml-2 text-slate-500 text-center mt-7">
          Select the options that best describe you. Don't worry, you can
          explore other options later.
        </div>
        <div className="spacer min-h-8"></div>
        <div className="grid grid-cols-12 xl:mx-[250px]">
          <div className="col-span-4 px-5 m-3">
            <div
              className={`border-2 ${
                check1 ? "border-[#EA4B8B]" : " border-slate-400"
              } rounded-xl `}
              onClick={() => {
                check1 ? setCheck1(false) : setCheck1(true);
              }}
            >
              <div className={`${check1 ? "-translate-y-28" : ""}`}>
                <img
                  className="h-[200px] w-[300px]"
                  src={img1}
                />
                <p className={` text-2xl text-center font-bold`}>
                  I'm looking to hire a designer
                </p>
                {check1 ? (
                  <p className={`  text-center `}>
                    With over 7 million shots from a vast community of
                    designers, Dribbble is the leading source for design.
                    inspiration
                  </p>
                ) : (
                  ""
                )}
                <br></br>
                {check1 ? (
                  <span className="text-white text-center font-bold rounded-full mx-[40%] p-1  bg-[#EA4B8B]">
                    &#10003;
                  </span>
                ) : (
                  <span className="text-white text-center font-bold rounded-full mx-[40%] p-2  border-2 border-[#EA4B8B]">
                    {" "}
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="col-span-4 px-5 m-3">
            <div
              className={`border-2 ${
                check2 ? "border-[#EA4B8B]" : " border-slate-400"
              } rounded-xl `}
              onClick={() => {
                check2 ? setCheck2(false) : setCheck2(true);
              }}
            >
              <div className={`${check2 ? "-translate-y-28" : ""}`}>
                <img
                  className="h-[200px] w-[300px]"
                  src={img2}
                />
                <p className={` text-2xl text-center font-bold`}>
                I'm looking to hire a designer
                </p>
                {check2 ? (
                  <p className={`  text-center `}>
                    With over 7 million shots from a vast community of
                    designers, Dribbble is the leading source for design.
                    inspiration
                  </p>
                ) : (
                  ""
                )}
                <br></br>
                {check2 ? (
                  <span className="text-white text-center font-bold rounded-full mx-[40%] p-1  bg-[#EA4B8B]">
                    &#10003;
                  </span>
                ) : (
                  <span className="text-white text-center font-bold rounded-full mx-[40%] p-2  border-2 border-[#EA4B8B]">
                    {" "}
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="col-span-4 px-5 m-3">
            <div
              className={`border-2 ${
                check3 ? "border-[#EA4B8B]" : " border-slate-400"
              } rounded-xl `}
              onClick={() => {
                check3 ? setCheck3(false) : setCheck3(true);
              }}
            >
              <div className={`${check3 ? "-translate-y-28" : ""}`}>
                <img
                  className="h-[200px] w-[300px]"
                  src={img3}
                />
                <p className={` text-2xl text-center font-bold`}>
                I'm looking for design inspiration
                </p>
                {check3 ? (
                  <p className={`  text-center `}>
                    With over 7 million shots from a vast community of
                    designers, Dribbble is the leading source for design.
                    inspiration
                  </p>
                ) : (
                  ""
                )}
                <br></br>
                {check3 ? (
                  <span className="text-white text-center font-bold rounded-full mx-[40%] p-1  bg-[#EA4B8B]">
                    &#10003;
                  </span>
                ) : (
                  <span className="text-white text-center font-bold rounded-full mx-[40%] p-2  border-2 border-[#EA4B8B]">
                    {" "}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
        {check1 || check2 || check3 ?<p className="text-center font-bold">Anything else? You can select multiple</p>:""}

        <button type="submit" className={`${ check1 || check2 || check3 ?"bg-[#EA4B8B]":"bg-[#ea8fb3]"} mt-3 text-lg rounded-xl text-white px-20 py-2 ml-[43%]`} disabled={check1 || check2 || check3?false:true} onClick={handlesubmit}> Finish</button>
        {check1 || check2 || check3?<p className='text-slate-400'>or please return</p>:true}
      </div>
    </div>
  );
};

export default Step3;
