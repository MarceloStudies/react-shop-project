import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/NavBar/Navbar";
import Footer from "./components/Footer/Footer";

const App = ({ children }) => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar handleOrderPopup={handleOrderPopup} />
      <main className="h-full w-full">{children}</main>
      <Footer />
    </div>
  );
};

export default App;
