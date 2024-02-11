import "./Testimonials.scss";
import jenny from "../assets/1949b4ea2ba23199d2b5aafbb64c84a8.jpg";

const Testimonials = () => {
  return (
    <div className="Testimonials">
      <h1>TESTIMONIALS</h1>
      <div className="testimonials-cont">
        <div className="upp-one">
        <div className="one">
          <div className="left">
            <img src={jenny} alt="" />
          </div>
          <div className="jenny-text">
            <h4>Jenny</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
              aliquid minima, libero eveniet at, doloremque commodi dolore,
              molestiae deserunt maxime cum id quibusdam. Voluptatum quos,
              quisquam quod voluptates deserunt architecto.
            </p>
          </div>
        </div>
        <div className="one">
          <div className="left">
            <img src={jenny} alt="" />
          </div>
          <div className="jenny-text">
            <h4>Jenny</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
              aliquid minima, libero eveniet at, doloremque commodi dolore,
              molestiae deserunt maxime cum id quibusdam. Voluptatum quos,
              quisquam quod voluptates deserunt architecto.
            </p>
          </div>
        </div>
        </div>

        <div className="lower-test">
        <div className="one">
          <div className="left">
            <img src={jenny} alt="" />
          </div>
          <div className="jenny-text">
            <h4>Jenny</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
              aliquid minima, libero eveniet at, doloremque commodi dolore,
              molestiae deserunt maxime cum id quibusdam. Voluptatum quos,
              quisquam quod voluptates deserunt architecto.
            </p>
          </div>
        </div>
        <div className="one">
          <div className="left">
            <img src={jenny} alt="" />
          </div>
          <div className="jenny-text">
            <h4>Jenny</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
              aliquid minima, libero eveniet at, doloremque commodi dolore,
              molestiae deserunt maxime cum id quibusdam. Voluptatum quos,
              quisquam quod voluptates deserunt architecto.
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
