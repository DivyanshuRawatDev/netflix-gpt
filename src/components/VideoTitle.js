import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-14 absolute bg-gradient-to-r from-black">
      <h1 className="text-6xl text-white font-bold">{title}</h1>
      <p className="py-6 text-lg text-white w-1/3">{overview}</p>
      <div className="">
        <button className="bg-white text-black py-4 px-14 text-xl font-bold hover:opacity-80 rounded-md">
          ▶ Play
        </button>
        <button className="mx-2 bg-gray-500 text-white py-4 px-14 text-xl font-bold opacity-80 hover:opacity-60 rounded-md">
          ℹ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
