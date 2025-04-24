import React from "react";
import Navbar from "./Navbar/Navbar";
import Dashboard from "./Navbar/Dashboard/Dashboard";
import Input_box from "./main cointainer/Input_box";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Dashboard />
      <Input_box />
    </>
  );
}

export default App;
