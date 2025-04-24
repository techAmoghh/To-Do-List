import React from "react";

function Input_box() {
  return (
    <>
      <nav className=" flex w-full  justify-center relative md:top-14 top-4 z-0">
        <textarea
          className="md:w-[700px] w-[250px] bg-pink-50 md:min-h-20 min-h-6 my-1 md:rounded-3xl rounded-lg shadow-xl md:border-2 border-2 border-pink-100 md:text-lg  text-xs md:outline-2 outline-1 outline-dashed outline-violet-300 md:p-2  md:px-3 px-1  tracking-wide  "
          rows="2"
          placeholder="Enter your text here..."
        ></textarea>
      </nav>
    </>
  );
}

export default Input_box;
