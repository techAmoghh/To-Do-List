import React, { useState } from "react";

function Input_box() {
  const [input, setinput] = useState("");
  const [content, setcontent] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setcontent([...content, { input }]); // Add the new input to the content array
    setinput(""); // Clear the input field after submission
    console.log(content); // Log the content array to see the added input
  };

  let renderContent = (
    <h2 className="row bg-white xl:min-h-16 min-h-10 flex items-center justify-between xl:m-6 m-3 rounded-xl xl:rounded-2xl p-1 xl:px-2">
      DOING GREAT BUDDY !!!
    </h2>
  );

  const deleteHandler = (i) => {
    let copyContent = [...content];
    copyContent.splice(i, 1);
    setcontent(copyContent); // Log the content array to see the added input
  };

  if (content.length > 0) {
    renderContent = content.map((t, i) => (
      <li key={i}>
        <div className="row bg-white xl:min-h-16 min-h-10 flex items-center justify-between shadow-xl xl:m-6 m-3 rounded-xl xl:rounded-2xl p-1 xl:px-2 text-wrap  break-words whitespace-pre-wrap ">
          {t.input}
          <button
            onClick={() => {
              deleteHandler(i);
            }}
            className="hidden bg-slate-100 md:flex items-center md:px-8 ml-4 rounded-3xl text-sm my-4 shadow-xl text-violet-800 font-sans font-medium hover:bg-pink-50"
          >
            Delete
          </button>
        </div>
      </li>
    ));
  }

  return (
    <div className="overflow-x-hidden">
      <form onSubmit={submitHandler}>
        <nav className="flex w-full justify-center relative md:top-14 top-4 z-0">
          <textarea
            className="w-[50%] sm:w-[80%] md:w-[70%] lg:w-[60%] max-w-[700px] bg-pink-50 md:min-h-20 min-h-6 my-1 md:rounded-3xl rounded-lg shadow-xl md:border-2 border-2 border-pink-100 md:text-lg text-xs md:outline-2 outline-1 outline-dashed outline-violet-300 md:p-2 md:px-3 px-1 tracking-wide"
            rows="2"
            placeholder="Enter your text here..."
            value={input}
            onChange={(e) => setinput(e.target.value)}
          ></textarea>
          <button className="hidden bg-slate-100 md:flex items-center md:px-8 ml-4 rounded-3xl text-sm my-4 shadow-xl text-violet-800 font-sans font-medium hover:bg-pink-50">
            Save
          </button>
        </nav>
      </form>

      <nav className="bg-violet-200 min-h-screen xl:m-20 m-6 xl:mx-40 sm:mx-32 xl:rounded-[80px] rounded-3xl shadow-2xl text-justify xl:text-xl text-md scroll-smooth overflow-x-hidden overflow-y-auto text-wrap">
        <ul>{renderContent}</ul>
      </nav>
    </div>
  );
}

export default Input_box;
