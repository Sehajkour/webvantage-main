import React from "react";
import NavBar from "../components/NavBar";
import FooterLight from "../components/FooterLight";
import "../styles/About.css";

const About = () => {
  return (
    <>
      <div className="about">
        <NavBar />
        <div className="hero">
          <div className="content" data-aos="fade-right" data-aos-delay="250">
            <div className="_name">
              <span>
                Essence of <span>GLAMBELLA </span>
              </span>
            </div>
            <div className="_title">
            Collections that celebrate individuality and self-expression
            </div>
            <div className="_cta">
              <button>EXPLORE</button>
            </div>
          </div>

          <div className="container" data-aos="fade-left">

 <video
    src="./images/5822768-sd_540_960_25fps.mp4"
    autoPlay
    loop
    muted
    className="video4" // Add a unique class name for the first video
  />          </div>
        </div>

        <div className="about_us">
          <div className="content" data-aos="fade-left" data-aos-delay="300">
            <div className="heading">
              <span>About Us</span>
            </div>
            <div className="title">
            "Championing individuality through trendsetting fashion, Glambella Fashion Studio brings forth curated collections that inspire confidence and self-expression."
            </div>
          </div>
          <div
            className="illustration"
            data-aos="fade-left"
            data-aos-delay="450"
          >
            <img src="./images/thirty.jpg" alt="" srcset="" />
          </div>
        </div>

        <div className="team" id="team">
          <div className="heading" data-aos="fade-down" data-aos-delay="200">
            Our Designers
          </div>
          <div
            className="sub-heading"
            data-aos="fade-down"
            data-aos-delay="300"
          >
            Meet the creative artists behind this!
          </div>
          <div className="team-cards">
            <div
              className="card card_a"
              data-aos="fade-down-right"
              data-aos-delay="450"
            >
              <img
                src="https://th.bing.com/th?id=OIP.HVKgHJvJj-OhTLE0D_RXDwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                height={100}
                width={100}
                alt=""
                srcset=""
              />
              <span>Sehaj Kour</span>
              <span>(Founder)</span>
            </div>
            <div
              className="card card_b"
              data-aos="fade-down"
              data-aos-delay="550"
            >
              <img
                src="https://th.bing.com/th/id/OIP.cYoqGCLPx43ULn_VWQaGOAHaHa?w=189&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                height={100}
                width={100}
                alt=""
                srcset=""
              />
              <span>Danny befzo</span>
              <span>(Costume Designer)</span>
            </div>
            <div
              className="card card_c"
              data-aos="fade-down-left"
              data-aos-delay="650"
            >
              <img
                src="https://th.bing.com/th/id/OIP.PYKPSCZ25DFa5jsELrkwhQHaHa?w=204&h=204&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                height={100}
                width={100}
                alt=""
                srcset=""
              />
              <span>Jennifer lauren</span>
              <span>(Fashion Consultant)</span>
            </div>
          </div>
        </div>

        <div className="blogs">
          <div className="blog" data-aos="fade-right" data-aos-delay="200">
            <div className="image">
              <img src="./images/image_1.png" alt="" srcset="" />
            </div>
            <div className="content">
              <div className="title">
              Unique and Trendsetting Designs
              </div>
              <div className="sub">
              Glambella Fashion Studios is renowned for its innovative and trendsetting designs.
              Their pieces often blend classic elegance with contemporary flair, appealing to fashion-forward individuals who seek to make a statement with their attire. 
              </div>
            </div>
          </div>

          <div className="blog" data-aos="fade-left" data-aos-delay="400">
            <div className="content">
              <div className="title">
              Sustainable and Ethical Practices
              </div>
              <div className="sub">
              Glambella Fashion Studios distinguishes itself by its commitment to sustainability and ethical practices.
              They prioritize using eco-friendly materials and production methods, ensuring that their clothing not only looks good but also aligns with the values of conscientious consumers. 
              </div>
            </div>
            <div className="image">
              <img src="./images/image_2.png" alt="" srcset="" />
            </div>
          </div>
        </div>

        <div className="sub-footer" data-aos="fade-up" data-aos-delay="400">
          <h1>Get Started</h1>
          <hr />
          <p>
          "Step into the future of fashion at Glambella Fashion Studios, where scintillating success awaits in every stitch."
          </p>

          <div className="button-container">
            <button>Let's Shop</button>
            <a href="/contact">
              <button className="contact-us-btn">Contact Us </button>
            </a>
          </div>
        </div>
      </div>
      <FooterLight />
    </>
  );
};

export default About;
