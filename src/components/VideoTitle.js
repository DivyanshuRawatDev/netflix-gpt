import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[25%] md:px-14 px-6 md:px24 absolute bg-gradient-to-r from-black ">
      <h1 className="text-xl md:text-6xl text-white font-bold">{title}</h1>
      <p className="py-6 text-lg text-white w-1/3 hidden md:block">
        {overview}
      </p>
      <div className="flex">
        <button className="bg-white text-black py-1 md:py-4 px-3 md:px-14 text-md md:text-xl font-bold hover:opacity-80 rounded-md my-4 md:my-0  ">
          ▶ Play
        </button>
        <button className="mx-2 bg-gray-500 text-white py-4 px-14 text-xl font-bold opacity-80 hover:opacity-60 rounded-md hidden md:block">
          ℹ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
