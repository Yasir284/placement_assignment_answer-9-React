import React, { useContext } from "react";
import ThemeContext from "../context/theme.context";
import { Dark, Light } from "../Icons/icons";

export default function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <nav
      className={`h-[15vh] py-4 px-10 flex flex-row justify-between items-center transition-all ease-in-out duration-300 ${
        theme === "Light"
          ? "bg-[#111111] text-[#eeeeee]"
          : "bg-[#eeeeee] text-[#111111]"
      }`}
    >
      <h1 className="font-extrabold text-3xl">Theme Toggler</h1>

      <button
        className={`flex flex-row gap-4 justify-center items-center py-4 px-10 rounded-full transition-all ease-in-out duration-300 ${
          theme === "Light"
            ? "bg-[#eeeeee] text-[#111111]"
            : "bg-[#111111] text-[#eeeeee]"
        }`}
        onClick={() => setTheme(theme === "Dark" ? "Light" : "Dark")}
      >
        {theme === "Dark" ? (
          <>
            <Dark size="1.5rem" />
            <span>Dark Mode</span>
          </>
        ) : (
          <>
            <Light size="1.5rem" />
            <span>Light Mode</span>
          </>
        )}
      </button>
    </nav>
  );
}
