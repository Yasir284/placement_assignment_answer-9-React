import React, { useContext } from "react";
import ThemeContext from "../context/theme.context";

export default function Main() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div
      className={`h-[85vh] w-full flex flex-col justify-center items-center gap-8 transition-all ease-in-out duration-300
    ${
      theme === "Dark"
        ? "bg-[#111111] text-[#eeeeee]"
        : "bg-[#eeeeee] text-[#111111]"
    }
    `}
    >
      <h1 className="font-extrabold text-5xl">Context API Theme Toggler</h1>

      <p className="w-[30rem] text-center text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut laudantium
        vero velit eveniet quod odit provident cum fuga voluptates voluptatibus
        mollitia optio sed, illo reprehenderit assumenda odio. Distinctio, sed
        nesciunt.
      </p>

      <button
        className={`py-4 px-8 rounded-full transition-all ease-in-out duration-300 ${
          theme === "Dark"
            ? "bg-[#eeeeee] text-[#111111]"
            : "bg-[#111111] text-[#eeeeee]"
        }`}
        onClick={() => {
          setTheme(theme === "Dark" ? "Light" : "Dark");
        }}
      >
        Click Me
      </button>
    </div>
  );
}
