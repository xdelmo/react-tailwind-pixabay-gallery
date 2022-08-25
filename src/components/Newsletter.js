import React, { useState } from "react";
import { motion } from "framer-motion";
import WebSVG from "./WebSVG";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Create a function which gets event from the browser as a parameter
  function handleUserInput(event) {
    // Set a new state with event.value from input
    setEmail(event.target.value);
  }

  React.useEffect(() => {
    // Regular expression to match string like
    // "any word with atleast 1 letter" + "@" + "any word with atleast 1 letter" + "." + "final word with atleast 2 letters"
    const validation = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    if (validation) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
  }, [email]);

  // Utility variable to improve accessibility to form input
  let borderColorInput = "";
  if (email.length > 0 && !isEmailValid) {
    borderColorInput = "border-red-600";
  } else if (isEmailValid) {
    borderColorInput = "border-green-600";
  }

  function handleSubmit(e) {
    // prevent refresh page on button click
    e.preventDefault();
    // to display elements according to subscription's state
    setIsSubscribed(true);
  }

  const formCardVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.75,
      },
    },
  };

  return (
    <div className="bg-teal-700">
      <div className="container gap-5 px-5 py-8 mx-auto text-white bg-teal-700 border-black ">
        <motion.div
          className="relative p-8 overflow-hidden bg-teal-800 rounded-lg shadow-lg"
          variants={formCardVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* import SVG as React component */}
          <WebSVG />
          {/* <img
            src="/images/web-world.png"
            className="absolute hidden w-2/6 -right-10 -bottom-30 md:block"
            alt="world connections"
          /> */}
          {/* ICON AND TITLE */}
          <div className="flex flex-row items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
              />
            </svg>{" "}
            <span className="ml-3 text-3xl font-semibold">Newsletter</span>
          </div>
          {!isSubscribed ? (
            <div className="">
              <p className="my-2 tracking-wide">
                Join our photography community now!
              </p>
              <form
                className="flex flex-col gap-2 md:flex-row"
                onSubmit={handleSubmit}
              >
                <input
                  type="email"
                  className={`text-black px-4 py-2 rounded-lg border-2 placeholder-slate-600 md:w-2/4 ${borderColorInput}`}
                  name="email"
                  value={email}
                  placeholder="your@email.com"
                  onChange={(event) => handleUserInput(event)}
                  required
                />
                {!isEmailValid && email.length > 0 && (
                  <p className="text-xs italic font-bold text-red-300 md:hidden">
                    Please type a valid email!
                  </p>
                )}
                <button className="items-center focus:ring-4 focus:outline-none focus:ring-blue-300 btn">
                  Subscribe
                </button>
              </form>
            </div>
          ) : (
            <p className="my-2 italic text-underlined">
              Thank you for joining our newsletter!
            </p>
          )}
          {!isEmailValid && email.length > 0 && (
            <p className="hidden my-2 text-xs italic font-bold text-red-300 md:block">
              Please type a valid email!
            </p>
          )}
          {!isSubscribed && (
            <p className="mt-2 text-xs italic text-gray-300">
              Your email is safe with us. We don't spam.
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default Newsletter;
