import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 ">
      <h1 className="text-2xl md:text-3xl py-4 text-white font-semibold">
        {title}
      </h1>
      <div
        className="flex overflow-x-scroll"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="flex gap-4">
          {movies &&
            movies.map((movie) => {
              return (
                <MovieCard key={movie.id} posterPath={movie.poster_path} />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
