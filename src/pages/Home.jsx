import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Home.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="landing">
        <NavBar />
        <div className="hero">
          <div className="title" data-aos="fade-right">
            Welcome to <span>GlamBella </span>Studios
          </div>
          <div className="sub-section">
            <div className="left" data-aos="fade-right">
             
              <div className="lower">
              Unleash Your Inner Fashionista-Bella's Trendsetting Treasures Await</div>
            </div>
  <div className="container" data-aos="fade-left">
  <video
    src="./images/canva-pink-bright-aesthetic-spring-female-fashion-girl-mobile-video-olq_Rv-Lk8I.mp4"
    autoPlay
    loop
    muted
    className="video video1" // Add a unique class name for the first video
  />
  <video
    src="./images/canva-pink-flower-aesthetic-feminine-spring-instagram-mobile-video-d2JOJNYJS_c.mp4"
    autoPlay
    loop
    muted
    className="video video2" // Add a unique class name for the second video
  />
  <video
    src="./images/canva-pink-new-arrival-instagram-reel-7hwrtHSyz3s.mp4"
    autoPlay
    loop
    muted
    className="video video3" // Add a unique class name for the third video
  />
</div>



          </div>
        </div>
        <div className="features-container">
          <div className="feature-a">
            <div className="section-a">
              <div className="container" data-aos="flip-right">
                <img src="./images/clothing.png" alt="" />
                <div className="title text-center">Clothing</div>
              </div>
              <div
                className="container"
                data-aos="flip-down"
                data-aos-delay="300"
              >
                <img src="./images/footwear1.png" alt="" />
                <div className="title text-center">Footwear</div>
              </div>

              <div
                className="container"
                data-aos="flip-left"
                data-aos-delay="600"
              >
                <img src="./images/deliver.jpeg" alt="" />
                <div className="title text-center">Jewellery</div>
              </div>
            </div>

            <div className="section-b" data-aos="fade-up" data-aos-delay="800">
              
              <p className="content">
              "Discover your style, one thread at a time, with Glambella Fashion Studio's exquisite 
              collection of clothing, footwear, and jewelry. Explore endless possibilities and redefine glamour with every step you take."
              </p>
            </div>

            <div className="section-c">
  
             
             <a href="/about#team"> <button data-aos="fade-up-right" data-aos-delay="1000">
                Meet Our  Team
              </button></a>
            </div>
          </div>
          <div className="feature-b" id="services">
            <div className="box b1" data-aos="fade-down-left">
              <img src="./images/down1.png" alt="Delivery Services" srcset="" />
              <div className="title">Delivery Services</div>
              <p></p>
            </div>
            <div
              className="box b2"
              data-aos="fade-up-right"
              data-aos-delay="200"
            >
              <img src="./images/event.png" alt="Fashion Events" srcset="" />
              <div className="title">Fashion Events</div>
              <p></p>
            </div>
            <div
              className="box b3"
              data-aos="fade-down-left"
              data-aos-delay="400"
            >
              <img src="./images/pm.png" alt="Product Management" srcset="" />
              <div className="title" >Product Management</div>
              <p></p>
            </div>
            <div
              className="box b4"
              data-aos="fade-up-right"
              data-aos-delay="600"
            >
              <img src="./images/smm.png" alt="SEO" srcset="" />
              <div className="title">Social Media Management</div>
              <p></p>
            </div>
          </div>
         
        </div>

        <div className="testimonials-container" data-aos="fade-in">
          <div className="title">What Our Customers Say</div>
          <div
            className="carousel-container"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <CCarousel interval={2500}>
              <CCarouselItem>
                <CImage
                  className="d-block w-100"
                  src="./images/test_1.png"
                  alt="slide 1"
                />
              </CCarouselItem>
              <CCarouselItem>
                <CImage
                  className="d-block w-100"
                  src="./images/test_2.png"
                  alt="slide 2"
                />
              </CCarouselItem>
              <CCarouselItem>
                <CImage
                  className="d-block w-100"
                  src="./images/test_3.png"
                  alt="slide 3"
                />
              </CCarouselItem>
             
            </CCarousel>
          </div>

          <div className="brief" data-aos="fade-up" data-aos-delay="300">
            <div className="title">Get Started</div>
            <div className="details">
            "Are you ready to set sail on a voyage of digital elegance? Step aboard for a complimentary 
            consultation, and together, let's navigate the path to Bella's resplendent success."
            </div>
            <a href="/contact">
              <button className="contact-us-button">Contact Us</button>
            </a>
          </div>
        </div>

        <div className="bottom" data-aos="fade-up">
          <div className="bottom-logo-container">
            <img src="./images/logo.png" alt="" srcset="" />
            <div className="subtitle">glambellastudios.com</div>
          </div>
          <div className="links-container">
  <div className="links">
    <div className="title">Collections</div>
    <div className="subsection">
      <div className="container">
        <div className="link">Clothing</div>
        <div className="link">Footwear</div>
        <div className="link">Accessories</div>
        <div className="link">Jewelry</div>
        <div className="link">Beauty Products</div>
      </div>
      <div className="container">
        
      </div>
    </div>
  </div>
  
            <div className="links">
              <div className="title">GlamBella Fashion Studios</div>
              <div className="link">
              "At Glambella Fashion Studio, we provide a comprehensive solution, offering an array of exquisite digital 
              products and bespoke business features. 
              From cutting-edge SEO strategies to innovative marketing tools, 
              our services empower every individual to flourish and thrive in the online realm of fashion."
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
