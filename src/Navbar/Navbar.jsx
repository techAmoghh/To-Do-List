import React from "react";

function Navbar() {
  return (
    <>
      <nav className="sticky top-0 bg-gradient-to-t from-pink-300 to-violet-800 md:p-10 p-5 flex max-w-full md:justify-around justify-between items-center rounded-b-[1000px] xl:rounded-b-full shadow-xl shadow-slate-300  select-none z-40">
        <div className="hidden md:flex"></div>
        <div className=" md:hidden font-extrabold p-1 flex rounded-full bg-violet-400 text-xs  shadow-xl  text-slate-100  ">
          <button className="  w-7 ">=</button>
 
          <button className="   flex  w-18 place-items-center   rounded-3xl text-[8px]   font-sans font-medium px-2">
            Add
          </button>

          <button className="  flex  w-18 place-items-center   rounded-3xl text-[8px]   font-sans font-medium px-2">
            Delete All
          </button>
        </div>
        <div className=" font-bold text-xl xl:text-3xl font-sans p-1  w-[168px]  flex justify-center fixed  md:left-[44%] left-[130px]   text-slate-100 drop-shadow-xl cursor-pointer  ">
          DO-IT
        </div>
        <div>
          <button className="font-bold md:p-2 p-2 px-3 rounded-full bg-violet-400 xl:text-xs text-[8px] shadow-xl  text-slate-100  ">
            Day
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
