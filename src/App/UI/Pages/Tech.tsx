import React from "react";
import Navbar from "../Components/Navbar";
import { Assets } from "../../utils/constants/Assets";

const Tech: React.FunctionComponent = () => {
  return (
    <>
      <Navbar />
      <div className="same_main">
        <h1 className="same_main_header">Passing Knowledge</h1>
        <p className="same_main_p">
          Ekenedilichukwu Okoli is a dedicated and accomplished Tech Trainer
          with a passion for empowering individuals through technology. With
          years of hands-on experience in the tech industry, he has developed a
          deep understanding of various programming languages, frameworks, and
          tools, which he now shares with others in a highly engaging and
          approachable manner.
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
            <p>
              As a Tech Trainer, Ekenedilichukwu excels at breaking down complex
              concepts and presenting them in a way that is both accessible and
              inspiring. His approach to training is learner-centered, ensuring
              that every individual—whether a beginner or an advanced
              learner—feels supported and confident in their learning journey.
              He combines theory with practical, real-world examples, enabling
              his students to immediately apply what they’ve learned in their
              projects or workplace.
            </p>
          </div>
          <div className="same_content_right">
            <div style={{ width: "60%", height: "80%" }}>
              <img
                src={Assets.images.tech_one}
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
                src={Assets.images.tech_two}
                alt="face_image"
                className="same_content_img"
              />
            </div>
          </div>
          <div className="same_content_right">
            <p className="same_content_p">
              Ekenedilichukwu's expertise spans a wide range of technologies,
              including front-end development with React and Next.js, mobile
              application development using React Native, and back-end
              development with Node.js. His deep understanding of software
              development processes, combined with his skills in Amazon Web
              Services (AWS) and cloud-based solutions, allows him to offer
              comprehensive training programs that are both current and relevant
              in today’s fast-evolving tech landscape.
            </p>
          </div>
        </div>
        <div className="same_content">
          <div className="same_content_left">
            <p className="same_content_p">
              Over the years, Ekenedilichukwu has trained numerous developers,
              many of whom have gone on to secure roles in leading tech
              companies or successfully launched their own tech ventures. His
              training sessions are known for being interactive, with a focus on
              problem-solving and critical thinking. He strongly believes in the
              importance of mentorship, often going above and beyond to provide
              guidance to his learners outside of formal sessions. One of his
              key strengths is his ability to foster a collaborative learning
              environment. He encourages peer-to-peer interaction, recognizing
              the value of collective knowledge and teamwork in the learning
              process. This approach not only improves learning outcomes but
              also equips his students with the soft skills necessary to thrive
              in today’s collaborative tech environments.
            </p>
          </div>
          <div className="same_content_right">
            <p className="same_content_p">
              As a Tech Trainer, Ekenedilichukwu is not just committed to
              teaching technical skills, but also to nurturing a growth mindset
              in his learners. He instills a sense of curiosity, resilience, and
              a lifelong love for learning in every student he works with,
              ensuring they are well-equipped to navigate the challenges of a
              constantly changing tech world. In addition to his training
              expertise, Ekenedilichukwu is also a visionary entrepreneur and
              software engineer, bringing real-world industry experience into
              his teaching. This unique blend of technical mastery, practical
              experience, and passion for education makes him a standout Tech
              Trainer who is making a lasting impact on the next generation of
              tech professionals.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tech;
