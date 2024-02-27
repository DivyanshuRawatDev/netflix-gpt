import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleBtnClick = () => {
    //Validate the form data using regex :-
    const message = checkValidateData(
      email.current.value,
      password.current.value,
      name.current ? name.current.value : null
    );

    setErrorMessage(message);

    if (message) return;

    //SignIn and SignUp Logic :-

    if (!isSignInForm) {
      // Signup Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName } = auth.currentUser;
              console.log(user);
              dispatch(addUser({ uid, email, displayName }));

              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error);
            });
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage("SignUP" + errorCode + " " + errorMessage);
        });
    } else {
      // SignIn Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://nextflix-azure.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fassets%2FloginBg.fbb89a9bb4b8a97b24555364c3cbca41.jpg&w=1920&q=75"
          alt="background"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 bg-black w-3/12 my-32 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            ref={name}
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <p className="text-red-500 font-bold text-md py-2">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleBtnClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already Registered? Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
