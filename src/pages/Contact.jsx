import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import NavBar from "../components/NavBar";
import Slider from "@mui/material/Slider";
import FooterLight from "../components/FooterLight";

import "../styles/Contact.css";
import { grey } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material";

const Contact = () => {
  const [value, setValue] = React.useState(30000);

  const theme = createTheme({
    palette: {
      primary: {
        main: grey[600],
      },
      secondary: {
        main: grey[300],
      },
    },
  });

  const marks = [
    {
      value: 10000,
      label: "10K",
    },
    {
      value: 100000,
      label: "100K",
    },
  ];
  return (
    <div className="contact">
      <NavBar />
      <div className="intro">
        <div className="content" data-aos="fade-right" data-aos-delay="250">
          <div className="logo_name">
            <span>
              <span>GlamBella</span> Studios
            </span>
          </div>
          <div className="title">Hello Customers!</div>
          <div className="desc">
            
"If you encounter any issues with our products 
or website, please fill out the form below, and we'll swiftly address your concerns with utmost care.".
          </div>
        </div>
        <div className="illustration" data-aos="fade-left" data-aos-delay="450">
          <img src="./images/char 1.png" alt="" srcset="" />
        </div>
      </div>


      <div className="form-area">
        <div className="header">
          <div className="title" data-aos="fade-right" data-aos-delay="250">
            <span>Tell us about your problem</span> 
          </div>
          <div
            className="illustration"
            data-aos="fade-left"
            data-aos-delay="450"
          >
            <img src="./images/char 3.png" alt="" srcset="" />
          </div>
        </div>

        <div className="form" data-aos="zoom-out-down" data-aos-delay="250">
          <form action="">
            <div className="type">
              <div className="project_type">
                <input
                  type="radio"
                  name="project_type"
                  id="website"
                  value="website"
                />
                <label for="website">Website Maintainence</label>
              </div>


              <div className="project_type">
                <input
                  type="radio"
                  name="project_type"
                  id="branding"
                  value="branding"
                />
                <label for="branding">Exchange / Return </label>
              </div>
            </div>
            <div className="details">
              <div className="fields">
                <input type="text" placeholder="Your Name" />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="E-Mail"
                />
                <textarea
                  name="about"
                  id="about"
                  placeholder="About Your Problem"
                ></textarea>
              </div>
              <div className="illustration">
                <img src="./images/charimage.png" alt="" srcset="" />
              </div>
            </div>
            <hr />
            <div className="info">
              <div className="budget">
                
                <div className="slider_container">

                </div>
               
              </div>
              <div className="attachments">
                <div className="wrapper">
                  <div className="title">Add Attachments</div>
                  <div className="upload">
                    <span>PDF Files Only</span>
                    <br />
                    <label>
                      <input type="file" name="file" id="file" />
                      <span>Select File</span>
                    </label>
                  </div>
                  <button>Upload</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="contact-info">
        <div className="title" data-aos="fade-left" data-aos-delay="250">
          Our Contact Info
        </div>
        <div className="info-box" data-aos="zoom-in" data-aos-delay="250">
          <div className="details">
            <div className="field">
              <div className="label">Phone no.</div>
              <div className="value"> +91 8006547893 </div>
            </div>
            <div className="field">
              <div className="label">E-Mail</div>
              <div className="value">
                sehajkourraina2004@gmail.com
              </div>
            </div>
            <div className="field">
              <div className="label">Address</div>
              <div className="value">
                Karan Bagh Basti, Jammu , 181101
              </div>
            </div>
          </div>
          <div className="illustration">
            <img src="./images/char 4.png" alt="" srcset="" />
          </div>
        </div>
      </div>
      <FooterLight />
    </div>
  );
};

export default Contact;
