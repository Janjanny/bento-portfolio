import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./page/Home";

function App() {
  return (
    <>
      <Navbar />
      <Outlet/>
    </>
  );
}

export default App;
