import "./AboutMe.scss";
import frontend from "../assets/web-design-svgrepo-com.svg";
import backend from "../assets/web-design-svgrepo-com(1).svg";
import graphics from "../assets/graphic-design-book-svgrepo-com.svg";

const AboutMe = () => {
  return (
    <div className="AboutMe">
      <h1>ABOUT ME</h1>
      <h4>
        I'm <span>Jeff Ndegwa,</span> Full Stack Developer / Designer
      </h4>
      <p>
        👋 Hi there, I'm Jeff Ndegwa, a dedicated developer on an exciting
        journey to becoming an efficient full-stack powerhouse. Currently
        immersed in learning the intricacies of React, JavaScript, and Node, I'm
        passionate about mastering the tools that drive innovation in the tech
        world. 💡 Every line of code is a step forward in my quest for
        proficiency. I find joy in unraveling the mysteries of React, the
        dynamism of JavaScript, and the server-side magic of Node.js. As I
        navigate through this learning adventure, I'm motivated by the desire to
        contribute meaningful solutions to real-world problems. 🚀 Join me on
        this coding odyssey as I hone my skills and work towards becoming a
        versatile full-stack developer. Whether it's crafting engaging user
        interfaces or optimizing server performance, every challenge is an
        opportunity to grow and learn. Let's code, learn, and build together.
        The journey to full-stack efficiency is an ongoing process, and I'm
        thrilled to be on this path! 🌐💻
      </p>
      <div className="tasks">
        <div className="left-tasks">
          <div className="top">
            <div className="experiences">
              <h1>3 +</h1>
              <p>YEARS EXPERIENCE</p>
            </div>
            <div className="project">
              <h1>30 +</h1>
              <p>PROJECTS DONE</p>
            </div>
          </div>
          <div className="bottom">
            <div className="clients">
              <h1>300 +</h1>
              <p>HAPPY CLIENTS</p>
            </div>
            <div className="followers">
              <h1>3K +</h1>
              <p>FOLLOWERS</p>
            </div>
          </div>
        </div>
        <div className="what-i-do">
          <div className="front-end">
            <div className="o-o-o">
              <img src={frontend} alt="" />
            </div>
            <div className="t-t-t">
              <h3>FrontEnd Design</h3>
              <p>
                🚀 With a keen eye for aesthetics and a passion for user-centric
                design, I thrive on blending creativity with functionality to
                deliver front-end solutions that leave a lasting impression.
              </p>
            </div>
          </div>
          <div className="back-end">
            <div className="o-o-o">
              <img src={backend} alt="" />
            </div>
            <div className="t-t-t">
              <h3>BackEnd Design</h3>
              <p>
                ⚙️ My focus on back-end development involves building the engine
                that powers applications, handling databases, and optimizing
                server-side processes to deliver responsive and dynamic user
                experiences.
              </p>
            </div>
          </div>
          <div className="graphic-design">
            <div className="o-o-o">
              <img src={graphics} alt="" />
            </div>
            <div className="t-t-t">
              <h3>Graphic Design</h3>
              <p>
                🎨 With a passion for visual storytelling, I harness the power
                of graphic design to craft compelling narratives through
                captivating visuals that leave a lasting impression.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
