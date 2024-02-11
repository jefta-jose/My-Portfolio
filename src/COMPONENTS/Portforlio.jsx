import "./portfolio.scss";
import noiseguard from "../assets/Screenshot (87).png";
import socialmedia from "../assets/Screenshot (88).png";
import todo from "../assets/Screenshot (89).png";

const Portforlio = () => {
  return (
    <div className="Portforlio">
      <h1>MY PORTFOLIO</h1>
      <div className="frontend">
        <div className="a-a-a">
          <div className="portfolio-filling">
            <div className="upper-image">
              <img src={noiseguard} alt="" />
            </div>
            <div className="upper-det">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur doloribus laudantium odio delectus culpa explicabo
                velit dolores autem eveniet repellat aliquam quos est nam harum
                aliquid, quidem quibusdam error cumque.
              </p>
            </div>
            <button>READ MORE</button>
          </div>

          <div className="portfolio-filling">
            <div className="upper-image">
              <img src={socialmedia} alt="" />
            </div>
            <div className="upper-det">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur doloribus laudantium odio delectus culpa explicabo
                velit dolores autem eveniet repellat aliquam quos est nam harum
                aliquid, quidem quibusdam error cumque.
              </p>
            </div>
            <button>READ MORE</button>
          </div>

          <div className="portfolio-filling">
            <div className="upper-image">
              <img src={todo} alt="" />
            </div>
            <div className="upper-det">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur doloribus laudantium odio delectus culpa explicabo
                velit dolores autem eveniet repellat aliquam quos est nam harum
                aliquid, quidem quibusdam error cumque.
              </p>
            </div>
            <button>READ MORE</button>
          </div>
        </div>

        <div className="b-b-b">
          <div className="portfolio-filling">
            <div className="upper-image">
              <img src={noiseguard} alt="" />
            </div>
            <div className="upper-det">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur doloribus laudantium odio delectus culpa explicabo
                velit dolores autem eveniet repellat aliquam quos est nam harum
                aliquid, quidem quibusdam error cumque.
              </p>
            </div>
            <button>READ MORE</button>
          </div>

          <div className="portfolio-filling">
            <div className="upper-image">
              <img src={socialmedia} alt="" />
            </div>
            <div className="upper-det">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur doloribus laudantium odio delectus culpa explicabo
                velit dolores autem eveniet repellat aliquam quos est nam harum
                aliquid, quidem quibusdam error cumque.
              </p>
            </div>
            <button>READ MORE</button>
          </div>

          <div className="portfolio-filling">
            <div className="upper-image">
              <img src={todo} alt="" />
            </div>
            <div className="upper-det">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur doloribus laudantium odio delectus culpa explicabo
                velit dolores autem eveniet repellat aliquam quos est nam harum
                aliquid, quidem quibusdam error cumque.
              </p>
            </div>
            <button>READ MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portforlio;
