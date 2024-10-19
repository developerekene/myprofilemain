import React from "react";
import Navbar from "../Components/Navbar";
import "../Styles/Software.css";
import { Assets } from "../../utils/constants/Assets";

const SoftwareEng: React.FunctionComponent = () => {
  return (
    <>
      <Navbar />
      <div className="same_main">
        <h1 className="same_main_header">A Skill I Love</h1>
        <p className="same_main_p">
          Ekenedilichukwu Okoli is a highly skilled and versatile Software
          Engineer with a strong background in developing innovative solutions
          across web and mobile platforms. With over 5 years of experience in
          the tech industry, Ekenedilichukwu has honed his expertise in crafting
          user-centric applications using a range of modern technologies,
          including React.js, React Native, Next.js, Anaconda, Django,
          TypeScript, Python and JavaScript. His deep understanding of the
          software development lifecycle, from concept to deployment, enables
          him to deliver top-tier digital products that solve real-world
          problems efficiently and effectively.
        </p>
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
        <div className="same_content">
          <div className="same_content_left">
            <p className="same_main_p">
              Throughout his career, his solid understanding of APIs, Amazon Web
              Services (AWS), and cloud-based architectures enables him to
              design and implement full-stack applications that are not only
              functional but also secure, scalable, and optimized for the cloud.
              His use of Redux for state management and expertise in CSS,
              TailwindCSS or BootstrapCSS, and other styling frameworks ensure
              that the applications he builds are aesthetically pleasing,
              responsive, and consistent across different platforms.
            </p>
          </div>
          <div className="same_content_right">
            <div style={{ width: "60%", height: "80%" }}>
              <img
                src={Assets.images.ent}
                alt="face_image"
                className="same_content_img"
              />
            </div>
          </div>
        </div>
        <div className="same_content">
          <div className="same_content_left">
            <div style={{ width: "60%", height: "80%" }}>
              <img
                src={Assets.images.dev}
                alt="face_image"
                className="same_content_img"
              />
            </div>
          </div>
          <div className="same_content_right">
            <p className="same_content_p">
              Ekenedilichukwu is particularly passionate about Test-Driven
              Development (TDD), ensuring that his projects are built with a
              strong foundation of unit and integration tests that guarantee
              code reliability and reduce bugs in production. His
              problem-solving skills, combined with his ability to write clean,
              maintainable code, ensure that the solutions he delivers are
              efficient and adaptable for future growth.
            </p>
          </div>
        </div>
        <div className="same_content">
          <div className="same_content_left">
            <p className="same_main_p">
              As a team leader, Ekenedilichukwu has excelled at managing
              cross-functional teams. In his current role as the Founder and CEO
              of D'roid Technologies Ltd, he leads a dynamic team of developers,
              UI/UX designers, and content creators, fostering a collaborative
              environment. He oversees the design, development, and deployment
              of cutting-edge mobile and web applications for clients, while
              also ensuring that all products are aligned with business goals.
              His leadership has helped shape D'roid Technologies into a
              product-led company that delivers high-quality technological
              solutions.
            </p>
          </div>
          <div className="same_content_right">
            <p className="same_content_p">
              Ekenedilichukwu’s strong technical background is complemented by
              his ability to mentor junior developers, ensuring they are
              equipped with the right skills to contribute effectively to
              projects. His hands-on experience with Agile methodologies and
              Scrum frameworks enables him to manage sprints, ensure timely
              delivery of features, and foster a continuous feedback loop,
              ensuring that client expectations are met and often exceeded.
            </p>
          </div>
        </div>
        <div className="same_content">
          <div className="same_content_left">
            <p className="same_main_p">
              As a team leader, Ekenedilichukwu has excelled at managing
              cross-functional teams. In his current role as the Founder and CEO
              of D'roid Technologies Ltd, he leads a dynamic team of developers,
              UI/UX designers, and content creators, fostering a collaborative
              environment. He oversees the design, development, and deployment
              of cutting-edge mobile and web applications for clients, while
              also ensuring that all products are aligned with business goals.
              His leadership has helped shape D'roid Technologies into a
              product-led company that delivers high-quality technological
              solutions.
            </p>
          </div>
          <div className="same_content_right">
            <p className="same_content_p">
              Ekenedilichukwu’s strong technical background is complemented by
              his ability to mentor junior developers, ensuring they are
              equipped with the right skills to contribute effectively to
              projects. His hands-on experience with Agile methodologies and
              Scrum frameworks enables him to manage sprints, ensure timely
              delivery of features, and foster a continuous feedback loop,
              ensuring that client expectations are met and often exceeded.
            </p>
          </div>
        </div>
        <div className="same_content">
          <div className="same_content_left">
            <p className="same_main_p">
              Beyond his engineering capabilities, Ekenedilichukwu is an
              entrepreneur who is deeply passionate about the transformative
              power of technology in solving real-world problems. He is
              constantly exploring emerging trends and tools to push the
              boundaries of what software can do. His focus on user experience
              and functionality allows him to craft solutions that not only meet
              technical specifications but also provide seamless and intuitive
              user experiences.
            </p>
          </div>
          <div className="same_content_right">
            <p className="same_content_p">
              Ekenedilichukwu Okoli is an accomplished and forward-thinking
              software engineer whose commitment to excellence in both code and
              leadership makes him a valuable asset to any project. His ability
              to merge technical acumen with strong leadership and mentorship
              capabilities positions him as a standout professional in the field
              of software engineering.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SoftwareEng;
