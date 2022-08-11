import React, { useState } from "react";

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);

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
  let backgroundColorInput = "bg-white";
  if (email.length > 0 && !isEmailValid) {
    backgroundColorInput = "bg-red-300";
  } else if (isEmailValid) {
    backgroundColorInput = "bg-green-300";
  }

  return (
    <div className="bg-teal-700 drop-shadow-lg">
      <div className="container flex flex-col items-center justify-around gap-5 px-5 py-8 mx-auto text-white md:flex-row">
        {/* FIRST BLOCK TEXT FORM */}
        <div className="flex flex-col items-start justify-center">
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
            <span className="ml-3 text-3xl">Newsletter</span>
          </div>
          <p className="mt-2">Join our photography community now!</p>
          <p className="mt-2 text-xs italic text-gray-300">
            Your email is safe with us, we don't spam.
          </p>
        </div>

        {/* SECOND BLOCK SUBMIT FORM */}
        <form className="flex flex-col gap-2">
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            className={`text-black px-4 py-2 rounded-lg placeholder-slate-600 ${backgroundColorInput}`}
            name="email"
            value={email}
            placeholder="your@email.com"
            onChange={(event) => handleUserInput(event)}
            required
          />
          {!isEmailValid && email.length > 0 && (
            <p className="text-xs italic text-gray-300">
              Please type a valid email
            </p>
          )}
          {isEmailValid ? (
            <button
              type="submit"
              className="items-center focus:ring-4 focus:outline-none focus:ring-blue-300 btn"
            >
              Subscribe
            </button>
          ) : (
            <button
              disabled
              type="submit"
              className="items-center btn-disabled"
            >
              Subscribe
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default NewsletterForm;
