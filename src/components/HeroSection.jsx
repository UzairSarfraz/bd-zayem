import React from "react";
import Button from "./Button.jsx";

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
            className="inline-block size-16  bg-[#2ABAB1] rounded-full p-1 mx-2 align-middle mb-4"
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
          className="text-5xl font-bold mt-12"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1, // Lower z-index to place it behind the image
            width: "100%", // Adjust width as needed
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
          className="{}"
          style={{
            position: "relative",
            zIndex: 2, // Higher z-index to place it above the marquee
            display: "block",
            margin: "0 auto", // Center the image horizontally
          }}
        />
      </div>
    </div>
  );
};

export default HeroSection;
