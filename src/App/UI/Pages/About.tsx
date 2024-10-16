import React from "react";
import Navbar from "../Components/Navbar";
import "../Styles/About.css";
import { Assets } from "../../utils/constants/Assets";
import { SiTypescript } from "react-icons/si";
import { FaPython } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { DiDjango } from "react-icons/di";
import { GrReactjs } from "react-icons/gr";
import { TbBrandReactNative } from "react-icons/tb";
import { FaTools } from "react-icons/fa";
import { DATA } from "../../utils/constants/Data";
import { IoIosArrowForward } from "react-icons/io";

const About: React.FunctionComponent = () => {
  let [buttonValue, setButtonValue] = React.useState<number>(0);

  const increaseBtnValue = () => {
    if (DATA.testimonials.length > buttonValue) {
      setButtonValue(buttonValue++);
    } else {
      setButtonValue(0);
    }
  };
  return (
    <>
      <Navbar />
      <div className="about_main">
        <div className="about_main_intro">
          <div className="about_main_left">
            <div className="about_main_left_con">
              <img
                src={Assets.images.intro}
                alt="face_image"
                className="about_main_img"
              />
            </div>
          </div>
          <div className="about_main_right">
            <h1 className="about_main_header">The 15 Character Brand</h1>
            <p className="about_main_p">
              Ekenedilichukwu Okoli is an accomplished Software Engineer, Tech
              Trainer, and Entrepreneur with a passion for solving real-world
              problems through innovative digital solutions. With a career
              spanning over half a decade in the tech industry, he has honed his
              skills in creating cutting-edge mobile and web applications,
              leading teams, and nurturing technical talents, especially in
              emerging technologies. His experience covers diverse sectors such
              as FinTech, E-commerce, and E-learning, where he has consistently
              delivered high-quality user-centric products.
            </p>
          </div>
        </div>
        {/* <div className="about_middle">
          <div className="about_toggle_btn">
            <div>
              <p>{"2024"}</p>
            </div>
            <div>
              <div>
                <img src={Assets.images.drop_down_b} alt="face_image" />
              </div>
            </div>
          </div>
        </div> */}
        <div className="about_main_intro">
          <div className="about_main_left">
            <p className="about_main_p">
              Ekenedilichukwu is a highly skilled and versatile Software
              Engineer, proficient in various modern technologies including
              React Native, React.js, Next.js, and Redux. His deep understanding
              of JavaScript, TypeScript and Phyton allows him to build scalable,
              maintainable, and efficient software solutions. He has extensive
              experience in front-end development, crafting smooth and
              responsive user interfaces. Ekenedilichukwu also specializes in
              mobile app development, where his work with React Native has
              resulted in several high-performing applications on both Android
              and iOS platforms.
            </p>
          </div>
          <div className="about_main_right">
            {/* <h1 className="about_main_header">I AM EKENEDILICHUKWU OKOLI</h1> */}
            <p className="about_main_p">
              His expertise extends to API integration, cloud computing with
              Amazon Web Services (AWS), and serverless architecture. He has a
              strong grasp of back-end technologies, which gives him the ability
              to build full-stack solutions, and he thrives in environments
              where collaboration and technical leadership are required.
              Throughout his career, he has played pivotal roles in different
              projects including Ecobank Mobile App, Rapid Transfer Mobile,
              Knowlecge City App and Home Zone contributing to the development
              process from conceptualization to deployment.
            </p>
          </div>
        </div>
        <div className="banner">
          <div className="banner_content">
            <div className="banner_content_img">
              <FaTools style={{ width: 40, height: 40, color: "#000000" }} />
            </div>
            <p className="banner_content_p">Technologies / Tools</p>
          </div>
          <div className="banner_content">
            <div className="banner_content_img">
              <SiTypescript
                style={{ width: 40, height: 40, color: "#09396c" }}
              />
            </div>
            <p className="banner_content_p">Typescript</p>
          </div>
          <div className="banner_content">
            <div className="banner_content_img">
              <FaPython style={{ width: 40, height: 40, color: "#09396c" }} />
            </div>
            <p className="banner_content_p">Python</p>
          </div>
          <div className="banner_content">
            <div className="banner_content_img">
              <IoLogoJavascript
                style={{ width: 40, height: 40, color: "#09396c" }}
              />
            </div>
            <p className="banner_content_p">JavaScript</p>
          </div>
          <div className="banner_content">
            <div className="banner_content_img">
              <DiDjango style={{ width: 40, height: 40, color: "#09396c" }} />
            </div>
            <p className="banner_content_p">Django</p>
          </div>
          <div className="banner_content">
            <div className="banner_content_img">
              <GrReactjs style={{ width: 40, height: 40, color: "#09396c" }} />
            </div>
            <p className="banner_content_p">React Js</p>
          </div>
          <div className="banner_content">
            <div className="banner_content_img">
              <TbBrandReactNative
                style={{ width: 40, height: 40, color: "#09396c" }}
              />
            </div>
            <p className="banner_content_p">React Native</p>
          </div>
        </div>
        <div className="about_main_intro">
          <div className="about_main_left">
            <p className="about_main_p">
              As a Tech Trainer, Ekenedilichukwu is dedicated to sharing his
              knowledge and expertise with aspiring software developers and
              engineers. He has trained numerous individuals, especially
              teenagers and young adults, helping them build solid foundations
              in software development and engineering practices. His involvement
              with organizations like LeadPac Foundation highlights his
              commitment to mentoring and uplifting others, particularly those
              with a keen interest in technology.
            </p>
          </div>
          <div className="about_main_right">
            {/* <h1 className="about_main_header">I AM EKENEDILICHUKWU OKOLI</h1> */}
            <p className="about_main_p">
              His approach to teaching is hands-on, focusing on practical skills
              and real-world applications, which ensures that his students can
              transition seamlessly into tech roles after their training. His
              workshops and training programs cover not only the technical
              aspects of software development but also best practices,
              problem-solving techniques, and the latest industry trends.
            </p>
          </div>
        </div>
        <div className="banner_about">
          <div className="banner_content">
            <div className="about_testimony">
              {DATA.testimonials.map((item, index) => {
                if (index === buttonValue) {
                  return (
                    <div className="about_test">
                      <p style={{ color: "#09396c" }}>{item.words}</p>
                      <p
                        style={{ color: "#09396c", marginTop: 15 }}
                      >{`- ${item.fullName}, ${item.company}`}</p>
                    </div>
                  );
                }
              })}
            </div>
            <div
              className="about_testimony_main"
              onClick={() => increaseBtnValue()}
            >
              <p className="banner_content_p">Next Review</p>
              <div className="about_testimony_btn">
                <IoIosArrowForward
                  style={{ width: 40, height: 40, color: "#09396c" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="about_main_intro">
          <div className="about_main_left">
            <p className="about_main_p">
              In addition to his technical career, Ekenedilichukwu is also an
              astute Entrepreneur. As the Founder of D'roid Technologies Ltd, he
              leads a team of talented individuals working remotely to deliver
              tech solutions that meet client needs. Under his leadership,
              D'roid Technologies has grown to become a respected player in the
              tech industry, offering services that range from web and mobile
              app development to social media management and digital marketing.
              He has successfully managed the company’s transition into a
              limited liability company and continues to oversee the development
              of its innovative tech products. One of his key strengths as an
              entrepreneur is his ability to identify gaps in the market and
              develop products and services that provide value to businesses and
              consumers alike. His leadership style is collaborative, and he
              empowers his team to take ownership of their projects while
              providing guidance and support to ensure quality outcomes.
            </p>
          </div>
          <div className="about_main_right">
            {/* <h1 className="about_main_header">I AM EKENEDILICHUKWU OKOLI</h1> */}
            <p className="about_main_p">
              Ekenedilichukwu is a natural leader with proven experience
              managing cross-functional teams. At D'roid Technologies Ltd, he
              leads a diverse group of developers, designers, and content
              creators, coordinating efforts across different projects to ensure
              timely delivery and high standards. His weekly stand-up meetings
              reflect his commitment to communication and transparency within
              his team, helping them stay aligned with the company's goals and
              project timelines. In every role he has held, he has been
              recognized for his leadership, technical expertise, and
              problem-solving abilities. His focus on continuous improvement and
              process optimization has led to the successful delivery of
              numerous projects that meet client expectations and drive business
              growth.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
