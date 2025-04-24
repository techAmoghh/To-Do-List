import { useState } from "react";
import Navbar from "./Navbar/Navbar";
import Dashboard from "./Navbar/Dashboard/Dashboard";
import Body from "./main cointainer/Body";  

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Dashboard />
      <Body />
    </>
  );
}

export default App;
