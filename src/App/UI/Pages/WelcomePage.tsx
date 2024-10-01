import React from "react";
import Navbar from "../Components/Navbar";
import "../Styles/WelcomePage.css";
import { Assets } from "../../utils/constants/Assets";
import Button from "@droid-tech/react-ts-button/dist/Button";
import { DATA } from "../../utils/constants/Data";

const WelcomePage: React.FunctionComponent = () => {
  const projectMap = () => {
    return DATA.projectsHomePage.map((item, index) => {
      if (index <= 3) {
        return (
          <div key={index} className="projects_header_item_main">
            <div className="projects_header_item">
              <div className="projects_header_image">
                <img src={item.icon} alt={item.name} />
              </div>
            </div>
          </div>
        );
      }
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
              <h1 className="w_header">Tech</h1>
              <h1 className="w_header">Enthusiast</h1>
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
              <img
                src={Assets.images.face_photo}
                alt="face_image"
                className="alchemist_right_photo_img"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="who_is_ekene">
        <h1 className="who_is_ekene_header">WHO IS EKENEDILICHUKWU</h1>
        <div className="who_is_ekene_content">
          <div className="who_is_ekene_content_left">
            <p>
              He is a skilled Software Engineer, Tech Trainer, and Entrepreneur
              with extensive experience in Software Development. As the Founder
              of D'roid Technologies Ltd, Ekenedilichukwu has led teams in
              building web and mobile applications while focusing on delivering
              high-quality, user-centric solutions across industries such as
              fintech, e-commerce, and education. Ekenedilichukwu's expertise
              spans a range of modern technologies, including React Native,
              React.Js Next.js, Firebase and AWS, among others.
            </p>
            <div className="btns_width">
              <button onClick={() => {}} className="btnMain">
                Read More About Ekene
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
              He excels at breaking down complex technical concepts into
              digestible, actionable steps, making technology accessible to
              beginners while also providing deep insights for more advanced
              learners. Ekenedilichukwu is known for his patient, encouraging
              teaching style, which fosters a supportive learning environment.
              His experience working in dynamic tech environments allows him to
              provide real-world examples, ensuring his students are not only
              learning the theory but also gaining the practical skills they
              need to succeed.
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
              Ekenedilichukwu’s vision revolves around building cutting-edge
              products that combine practicality with innovation. He
              successfully launched D'roid Technologies Ltd, a product-led
              company, to offer tailored software solutions and empower
              businesses by leveraging the latest advancements in mobile and web
              technologies. His leadership style fosters a culture of
              creativity, collaboration, and continuous improvement, allowing
              him to guide his team through the complexities of product
              development and market dynamics.
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
