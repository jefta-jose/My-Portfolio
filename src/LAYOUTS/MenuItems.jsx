import home from "../assets/home-1-svgrepo-com.svg";
import about from "../assets/people-svgrepo-com.svg";
import resume from "../assets/briefcase-svgrepo-com.svg";
import portfolio from "../assets/portfolio-briefcase-svgrepo-com.svg";
import testimonials from "../assets/customer-testimonial-svgrepo-com.svg";
import contact from "../assets/phone-flip-svgrepo-com.svg";
import "../LAYOUTS/MenuItems.scss";
import { NavLink } from "react-router-dom";

const MenuItems = () => {
  return (
    <div className="menu-items-container">
      <NavLink to={"/"}>
        <img src={home} alt="" />
      </NavLink>

      <NavLink to={"/about"}>
        <img src={about} alt="" />
      </NavLink>

      <NavLink to={"/resume"}>
        <img src={resume} alt="" />
      </NavLink>

      <NavLink to={"/portfolio"}>
        <img src={portfolio} alt="" />
      </NavLink>

      <NavLink to={"/testimonials"}>
        <img src={testimonials} alt="" />
      </NavLink>

      <NavLink to={"/contact"}>
        <img src={contact} alt="" />
      </NavLink>
    </div>
  );
};

export default MenuItems;
