import React from "react";
import Button from "./Button.jsx";
import { FaStar } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="w-full bg-black text-white py-12 pt-20">
      <div className="w-11/12 md:w-1/2 m-auto flex flex-col items-center text-center mt-10">
        <h1 className="text-white font-bold text-[50px] md:text-5xl leading-tight">
          The #1 Best{" "}
          <span className="bg-[#2ABAB1] text-black px-2 py-1 rounded-lg">
            Dev
          </span>{" "}
          <br />
          Stories
          <img
            src="src/images/speaker.png"
            alt="Speaker Icon"
            className="inline-block size-16 bg-[#2ABAB1] rounded-full p-1 mx-2 align-middle mb-4"
          />{" "}
          Platform.
        </h1>
        <p className="text-gray-300 mt-4 text-lg md:text-xl mb-16">
          The World's Best Developer Platform for Sharing and Reading Behind
          Development Stories, experiences, and real-world coding journeys!
        </p>
        <Button
          btnname={"READ STORIES - IT'S FREE"}
          className="mt-6 px-6 py-3 bg-[#2ABAB1] text-black font-semibold rounded-lg"
        />
      </div>

      <div
        style={{
          background: "linear-gradient(black, #2ABAB1)",
          position: "relative",
        }}
      >
        <marquee
          className="text-[100px] font-bold mt-8"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1,
            width: "100%",
            textAlign: "center",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          minima animi amet fugiat fuga, architecto, molestiae accusamus iure
          dolores aperiam facere ducimus! Inventore voluptatibus, molestias
          neque suscipit pariatur saepe necessitatibus.
        </marquee>

        <img
          src="src/images/backgrand-img.png"
          style={{
            position: "relative",
            width: "100%", // Wrap percentage values in quotes
            height: "100vh", // Wrap "100vh" in quotes
            zIndex: 2,
            display: "block",
            margin: "0 auto",
          }}
        />
      </div>
      {/* Text above image */}
      <div className="border border-white w-fit  text-white bg-black h-auto p-4 rounded-3xl absolute left-[76px] right-[756px] b[] top-[1099px] z-10">
        <h3 className="text-2xl md:text-3xl">
          # 1 Dev Stories Platform <br />
          in World
        </h3>
        <div className="flex y mt-2">
          <img src="src/images/one.jpg" className="w-12 rounded-full h-11" />
          <img src="src/images/second.jpg" className="w-12 rounded-full h-11" />
          <img src="src/images/thrid.jpg" className="w-12 rounded-full h-11" />
          <img src="src/images/fourth.jpg" className="w-12 rounded-full h-11" />
          <div className="flex flex-col ">
            <div className="flex text-customOrange">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div>200+ 5-star reviews</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
