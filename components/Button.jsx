import React from "react";

const Button = ({ children }) => {
  return (
    <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg ">
      {children}
    </button>
  );
};

export default Button;
