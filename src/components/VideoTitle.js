import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/3">{overview}</p>
      <div className="">
        <button className="bg-gray-500 text-white py-4 px-14 text-xl font-bold opacity-50 rounded-md">
          ▶ Play
        </button>
        <button className="mx-2 bg-gray-500 text-white py-4 px-14 text-xl font-bold opacity-50 rounded-md">
          ℹ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
