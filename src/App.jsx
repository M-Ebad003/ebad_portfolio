import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "#components/Navbar";
import Welcome from "#components/Welcome";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <Navbar />
      <Welcome />
    </main>
  );
}

export default App;
