import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Header from "./Header/Header";
import Nav from "./Nav/Nav";
import Portfolio from "./Portfolio/Portfolio";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Nav />
      <Header />
      <Portfolio />
    </div>
  );
}

export default App;
