import React from "react";
import Navbar from "../Components/Navbar";
import "../Styles/WelcomePage.css";
import { Assets } from "../../utils/constants/Assets";
import Button from "@droid-tech/react-ts-button/dist/Button";
import { DATA } from "../../utils/constants/Data";

const WelcomePage: React.FunctionComponent = () => {
  const projectMap = () => {
    return DATA.projectsHomePage.map((item, index) => {
      // if (index) {

      // }
      return (
        <div key={index} className="projects_header_item_main">
          <div className="projects_header_item">
            <div className="projects_header_image">
              <img src={item.icon} alt={item.name} />
            </div>
          </div>
        </div>
      );
    });
  };

  const testimonialMap = () => {
    return DATA.testimonials.map((items, index) => {
      if (index === 0) {
        return (
          <div className="testimonials_container_words">
            <p className="testimonials_text">{items.words}</p>
            <p className="testimonials_by">
              {`- ${items.fullName}, ${items.title}, ${items.company}`}
            </p>
          </div>
        );
      }
    });
  };
  return (
    <div>
      <Navbar />
      <div className="welcome_home">
        <div className="alchemist">
          <div className="alchemist_left">
            <div className="alchemist_left_inner">
              <h1 className="w_header">Mobile & </h1>
              <h1 className="w_header">Web Alchemist</h1>
              <p className="w_para">
                Creating beautiful, scalable and award winning applications
                since 2018
              </p>
              <div className="btns">
                <div className="btns_width">
                  <button className="btnMain">Schedule an Appiontment</button>
                </div>
                <div className="btns_width">
                  <button className="btnMain">Download Resume</button>
                </div>
              </div>
            </div>
          </div>
          <div className="alchemist_right">
            <div className="alchemist_right_photo">
              <img src={Assets.images.face_photo} alt="face_image" />
            </div>
          </div>
        </div>
      </div>
      <div className="who_is_ekene">
        <h1 className="who_is_ekene_header">WHO IS EKENEDILICHUKWU</h1>
        <div className="who_is_ekene_content">
          <div className="who_is_ekene_content_left">
            <p>
              I craft fluid and responsive mobile apps for Android and iOS, with
              sleek UI and groundbreaking functionalities that set new standards
              in UX and performance.
            </p>
            <p>
              I weave the threads of HTML, CSS, and JavaScript into
              awe-inspiring web experiences. My solutions transcend the
              ordinary, offering seamless interactions, captivating visuals, and
              pixel-perfect designs that captivate users and leave a lasting
              impression
            </p>
            <div className="btns_width">
              <button onClick={() => {}} className="btnMain">
                Read More About Me
              </button>
            </div>
          </div>
          <div className="who_is_ekene_content_right">
            <div>
              <img src={Assets.images.who_is} alt="face_image" />
            </div>
          </div>
        </div>
      </div>
      <div className="banner">
        <div className="banner_content">
          <div className="banner_content_img">
            <img src={Assets.images.mobile} alt="mobile_img" />
          </div>
          <p className="banner_content_p">Mobile App Development</p>
        </div>
        <div className="banner_content">
          <div className="banner_content_img">
            <img src={Assets.images.web} alt="face_image" />
          </div>
          <p className="banner_content_p">Web Development</p>
        </div>
        <div className="banner_content">
          <div className="banner_content_img">
            <img src={Assets.images.layout} alt="face_image" />
          </div>
          <p className="banner_content_p">Front- End Tools & Libraries</p>
        </div>
        <div className="banner_content">
          <div className="banner_content_img">
            <img src={Assets.images.version_control} alt="face_image" />
          </div>
          <p className="banner_content_p">Version Control & Collaboration</p>
        </div>
        <div className="banner_content">
          <div className="banner_content_img">
            <img src={Assets.images.back_end} alt="face_image" />
          </div>
          <p className="banner_content_p">Backend Development</p>
        </div>
      </div>
      <div className="projects">
        <h1 className="projects_header">Latest Projects</h1>
        <div className="projects_header_content">{projectMap()}</div>
        <div className="btns_welcome">
          <button onClick={() => {}} className="btnMain">
            {`All Projects ( ${DATA.projectsHomePage.length} )`}
          </button>
        </div>
      </div>
      <div className="testimonials">
        <h1 className="testimonials_header">
          What They Say About Ekenedilichukwu
        </h1>
        <div className="testimonials_container">{testimonialMap()}</div>
        <div className="testimonials_btn">
          <button onClick={() => {}} className="btnSec">
            See more Testimonials
          </button>
          <button onClick={() => {}} className="btnSec">
            Watch Videos
          </button>
        </div>
      </div>
      <div className="tech_trainer">
        <h1 className="tech_trainer_header">As a Tech Trainer</h1>
        <div className="tech_trainer_con">
          <div>
            <img src={Assets.images.trainer} alt="mobile_img" />
          </div>
          <div className="tech_trainer_p">
            <p>
              Explore a curated collection of powerful resources and tools
              designed to supercharge your development journey. From code
              editors to testing utilities and productivity enhancers, our array
              of Developer Tools is your one-stop destination for optimizing
              your workflow. Whether you're a seasoned developer or just
              starting your coding adventure, these tools are here to simplify,
              streamline, and supercharge your projects. Dive in and elevate
              your development experience today!
            </p>
            <div className="btns_width">
              <button className="btnMain">Read More</button>
            </div>
          </div>
        </div>
      </div>
      <div className="entre">
        <h1 className="entre_header">As an Entrepreneur</h1>
        <div className="entre_con">
          <div className="entre_p">
            <p>
              Explore a curated collection of powerful resources and tools
              designed to supercharge your development journey. From code
              editors to testing utilities and productivity enhancers, our array
              of Developer Tools is your one-stop destination for optimizing
              your workflow. Whether you're a seasoned developer or just
              starting your coding adventure, these tools are here to simplify,
              streamline, and supercharge your projects. Dive in and elevate
              your development experience today!
            </p>
            <button onClick={() => {}} className="btnSec">
              Read More
            </button>
          </div>
          <div>
            <img src={Assets.images.entre} alt="mobile_img" />
          </div>
        </div>
      </div>
      <div className="contact">
        <div className="contact_left">
          <h1 className="contact_header">Contact </h1>
          <h1 className="contact_header">Ekenedilichukwu at </h1>
          <h1 className="contact_header">any of the following: </h1>
        </div>
        <div className="contact_right">
          <div className="contact_right">
            <div className="contact_right_img">
              <div>
                <img src={Assets.images.gMail} alt="face_image" />
              </div>
              <p>seniordevekene@gmail.com</p>
            </div>
            <div className="contact_right_img">
              <div>
                <img src={Assets.images.whatsApp} alt="face_image" />
              </div>
              <p> +447886386437</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
