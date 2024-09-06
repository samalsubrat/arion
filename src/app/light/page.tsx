import React from "react";
import Reels from "./components/Reel";
import Reviews from "./components/Review";

const page = () => {
  return (
    <>
      <div className="p-0 m-0 bg-gray-100">
        <Reels />
        <Reviews/>
        <div className="p-10"/>
      </div>
    </>
  );
};

export default page;
