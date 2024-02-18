import React, { useEffect, useState } from "react";
import NavBar from "../components/home/navigationBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/Home.css";
import InroDiv from "../components/home/intro";
import BlogAndReview from "../components/home/blogsAndReviews";
import PlaceSelection from "../components/home/placeSelection";
import PopularPlan from "../components/home/popularPlans";
import Footer from "../components/general/footer";
import OurService from "../components/home/ourServices";

const Home = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <div className="main-div">
      <NavBar scrolled={scrolled} />
      <InroDiv />
      <OurService />
      <PopularPlan />
      <PlaceSelection />
      <BlogAndReview />
      <Footer />
    </div>
  );
};

export default Home;
