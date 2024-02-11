import "./contact.scss";
import linkedin from "../assets/linkedin-rounded-svgrepo-com.svg";
import call from "../assets/phone-flip-svgrepo-com.svg";

const Contact = () => {
  return (
    <div className="Contact">
      <h1>CONTACT</h1>
      <div className="cont">
        <h3>
          FEEL <span>FREE</span>TO CONTACT ME
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
          provident voluptatem sapiente in ratione debitis quam aliquid, quod
          fugiat corporis porro? Repellat veniam natus, veritatis possimus
          perferendis at deleniti odio.
        </p>

        <div className="image-links">
          <div className="left">
            <img src={linkedin} alt="" />
            <a href="#">FIND ME ON LINKEDIN</a>
          </div>
          <div className="right">
            <img src={call} alt="" />
            <a href="#">CALL ME</a>
          </div>
        </div>
        <h3>THANKS FOR SCROLLING BY</h3>
      </div>
    </div>
  );
};

export default Contact;
