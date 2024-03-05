import React, { useRef } from "react";
import lang from "./../utils/languageContest";
import { useSelector } from "react-redux";
import openai from "./../utils/openAI";

const GptSearchBar = () => {
  const searchText = useRef();

  const handleGptSearchClick = async () => {
    try {
      console.log(searchText.current.value);

      const gptQuery =
        "Act as a Movie Recomdation system and suggest some movies for the query" +
        searchText.current.value +
        ". only give me names of 5 movies, comma seprated. like the example result ahead. Example Result: Gadar, Sholey, Don, Golmaal, Koi Mil Gaya";

      const gptResults = await openai.chat.completions.create({
        messages: [{ role: "user", content: gptQuery }],
        model: "gpt-3.5-turbo",
      });
      console.log(gptResults.choices);
    } catch (error) {
      console.log(error);
      alert("OPENAI API Billing System Expired");
    }
  };

  const language = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[40%] md:pt-[10%] flex justify-center">
      <form
        className=" w-full md:w-1/2 bg-black grid grid-cols-12 text-xs md:text-lg"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9 "
          placeholder={lang[language].gptSearchPlaceholder}
        />
        <button
          className=" col-span-3 m-4 py-2 px-3 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
