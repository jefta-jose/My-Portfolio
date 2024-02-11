import React from "react";
import "../COMPONENTS/Homepage.scss";
import jefta from "../assets/jefta.jpg";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="homepage-details">
        <div className="details-container">
          <h2>HI THERE!</h2>
          <h1>
            I'M <span>JEFF</span>
          </h1>
          <h3>A FULL STACK WEB DEVELOPER</h3>
          <p>
            Before you get to know me, let me share a developer's classic humor:
            What did the developer say to the coffee machine? "Hey there, I've
            got Java running, do you?" 😄 Now, back to business I'm more than
            just a developer; I'm a coding maestro. I derive genuine joy from
            seeing lines of code come together like a symphony of logic and
            creativity. It's not just a job; it's a passion project where pixels
            meet purpose. Debugging is my meditation, and turning coffee into
            code is practically an art form. If coding were a sport, I'd be the
            Lionel Messi of HTML and the Cristiano Ronaldo of CSS. Embracing the
            chaos of JavaScript is my daily workout routine.
          </p>
          <button>More About Me</button>
        </div>
      </div>

      <div className="homepage-image">
        <img src={jefta} alt="" />
      </div>
    </div>
  );
};

export default Homepage;
