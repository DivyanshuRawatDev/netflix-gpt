import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BACKGROUND_IMAGE } from "../utils/constants";

const GptSearch = () => {
  return (
    <>
      <div className="absolute -z-10 ">
        <img
          className="h-screen md:h-[100%] object-cover"
          src={BACKGROUND_IMAGE}
          alt="background"
        />
      </div>

      <div className="">
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </>
  );
};

export default GptSearch;
