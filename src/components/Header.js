import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import {
  NETFLIX_LOGO,
  SMILE_LOGO,
  SUPPORTED_LANGUAGES,
} from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isGPT, setIsGPT] = useState(false);

  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
    setIsGPT(!isGPT);
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className=" absolute px-4 md:px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex  justify-between items-center ">
      <div className="flex">
        <img
          className={`w-20 h-10 md:h-full md:w-44  mx-auto ${
            isGPT ? "mb-[50%] md:mb-0" : "mb-1"
          }`}
          src={NETFLIX_LOGO}
          alt="logo"
        />
      </div>
      {user && (
        <div className="flex flex-col-reverse md:flex-row mb-2 items-center ">
          {isGPT && (
            <div className="flex ml-auto">
              <select
                className="p-2 bg-gray-900 text-white "
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>
          )}
          <div className="flex m-2 gap-2 items-center mt-2 md:mt-0">
            <button
              className="md:py-2 text-sm md:text-lg  px-4 my-2  bg-red-700 m-2 text-white rounded-sm"
              onClick={handleGptSearch}
            >
              {isGPT ? "Home" : "GPT"}
            </button>
            <img
              className="w-5 h-5 md:w-10 md:h-10 "
              src={SMILE_LOGO}
              alt="userIcon"
            />
            <button
              onClick={handleSignOut}
              className="text-white font-bold text-sm md:text-lg"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
