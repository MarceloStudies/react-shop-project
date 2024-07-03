import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/NavBar/Navbar";
import Hero from "./components/Hero/Hero";
import Category from "./components/Category/Category";
import CategorySecondary from "./components/Category/CategorySecondary";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Products from "./components/Products/Products";
import Blogs from "./components/Blogs/Blogs";
import Partners from "./components/Partners/Partners";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";


import headphone from "./assets/hero/headphone.png";
import smartwatch2 from "./assets/category/smartwatch2-removebg-preview.png";

const BannerData={
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sales",
  title4: "Loren Ipsum, dolor sit amet consectur adipising elit. Eaque, reiciendis.",
  bgColor: "primary",
}
const BannerData2={
  discount: "30% OFF",
  title: "Happy Hours",
  date: "14 Jan to 28 Jan",
  image: smartwatch2,
  title2: "Smart Solo",
  title3: "Winter Sales",
  title4: "Loren Ipsum, dolor sit amet consectur adipising elit. Eaque, reiciendis.",
  bgColor: "green-600",
}


const App = () => {
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
  }, [])


  return <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
    <Navbar handleOrderPopup={handleOrderPopup} />
    <Hero handleOrderPopup={handleOrderPopup} />
    <Category/>
    <CategorySecondary/>
    <Services/>
    <Banner data={BannerData} />
    <Products />
    <Banner data={BannerData2} />
    <Blogs />
    <Partners />
    <Footer />
    <Popup orderPopup={orderPopup} handleOrderPopup = {handleOrderPopup}/>
  </div>;
};

export default App;
