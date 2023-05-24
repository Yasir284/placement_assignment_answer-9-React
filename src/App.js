import "./App.css";
import Main from "./components/Main";
import { useState } from "react";
import ThemeContext from "./context/theme.context";
import Navbar from "./components/Navbar";

function App() {
  const [theme, setTheme] = useState("Light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Navbar />
      <Main />
    </ThemeContext.Provider>
  );
}

export default App;
