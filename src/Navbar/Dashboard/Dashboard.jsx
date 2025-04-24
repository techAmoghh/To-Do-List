import React from "react";

function Dashboard() {
  return (
    <>
      <nav
        className="bg-gradient-to-t from-white to-pink-300 w-[30%] xl:w-[30%] xl:mx-[34.9%] xl:min-h-16 min-h-[30px]  grid
      md:grid-cols-4 grid-cols-2 justify-items-center mx-[35%] text-white  xl:rounded-3xl rounded-xl fixed xl:top-[80px] top-[50px] shadow-xl select-none md:px-0 px-7 z-50 "
      >
        <button className="hidden bg-slate-50 md:flex place-items-center md:px-8  rounded-3xl text-sm my-2  shadow-inner  text-violet-800  font-sans font-medium hover:bg-pink-50">
          Add
        </button>
        <div className="bg-white xl:w-[65%] w-[90%] sm:w-[35%]  flex items-center justify-center md:m-2 m-1 rounded-lg xl:text-xl text-[11px] text-black shadow-inner shadow-slate-300 cursor-default">
          100
        </div>
        <div className="bg-white xl:w-[65%] w-[90%] sm:w-[35%]  flex items-center justify-center md:m-2 m-1 rounded-lg xl:text-xl text-[11px] text-black shadow-inner shadow-slate-300 cursor-default">
          100
        </div>
        <button className=" hidden bg-slate-50 md:flex place-items-center md:px-4  rounded-3xl text-sm my-2 shadow-inner text-violet-800 font-sans font-medium hover:bg-pink-50">
          Delete All
        </button>
      </nav>
    </>
  );
}

export default Dashboard;
