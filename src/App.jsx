import { useState } from "react";
import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import HowTo from "./components/HowTo/HowTo";
import Tokenomics from "./components/Tokenomics/Tokenomics";
import Footer from "./components/Footer/Footer";
import Algorithm from "./components/Algorithm/Algorithm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Algorithm />
      {/* <HowTo />
      <Tokenomics />
      <Footer /> */}
    </>
  );
}

export default App;
