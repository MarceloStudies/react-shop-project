import React from "react";
import LightButton from "../../assets/website/light-mode-button.png";
import DarkButton from "../../assets/website/dark-mode-button.png";

const DarkMode = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;

  React.useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  });
  
  return (
    <div className="relative">
      <img
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
        src={LightButton}
        alt="image-button-sun-with-clouds"
        className={`w-12 cursor-pointer absolute right-0 z-10 ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        } transition-all duration-300`}
      />
      <img
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
        src={DarkButton}
        alt="image-button-sun-with-clouds"
        className={`w-12 cursor-pointer ${
          theme === "light" ? "opacity-0" : "opacity-100"
        }`}
      />
    </div>
  );
};

export default DarkMode;
