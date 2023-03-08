import React, { useEffect, useState } from "react";
import "./../Styles/home.scss";
import HeroImage from "../assets/Hero.png";
import { Link } from "react-router-dom";
import AnimatedLetters from "../components/AnimatedLetters";

const Home = () => {
  const [letterClass, setletterClass] = useState("text-animate");
  const nameArray = ["S", "c", "i", "A", "s", "t", "r", "a"];

  useEffect(() => {
    return setletterClass(() => {
      setletterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <div className="container">
      <span>
        <div className="container2">
          <div className="title">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
          </div>
          <div className="slogan">For the love of Science</div>
          <Link to="/Materials" className="button1">
            Get your Materials here
          </Link>
        </div>

        <div className="logo-container">
          <img className="solid-logo" src={HeroImage} alt="Hero" />
        </div>
      </span>
    </div>
  );
};

export default Home;
