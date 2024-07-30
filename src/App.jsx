import Navbar from "./components/Navbar";
import Home from "./page/Home";

function App() {
  return (
    <>
      <div className="w-full h-screen bg-bg-color text-white">
        <Navbar/>
        <Home/>
      </div>
    </>
  );
}

export default App;
