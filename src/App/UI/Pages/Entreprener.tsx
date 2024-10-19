import React from "react";
import Navbar from "../Components/Navbar";
import { Assets } from "../../utils/constants/Assets";
import "../Styles/Software.css";

const Entreprener: React.FunctionComponent = () => {
  return (
    <>
      <Navbar />
      <div className="same_main">
        <h1 className="same_main_header">Silicon Valley Visionary</h1>
        <p className="same_main_p">
          Ekenedilichukwu Okoli is a dynamic entrepreneur with a visionary
          approach to solving modern-day problems through technology and
          business. His entrepreneurial journey began at the intersection of his
          passion for innovation and his desire to create lasting value across
          multiple sectors, especially technology. Over the years, he has
          distinguished himself as a forward-thinking leader who is committed to
          empowering people, businesses, and communities through his ventures.
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
              As the Founder and CEO of D'roid Technologies Ltd, Ekenedilichukwu
              has successfully built and scaled a technology-driven company that
              specializes in delivering cutting-edge digital solutions, mobile
              applications, and tech products. With a focus on quality and
              user-centered design, his company has become a go-to platform for
              businesses looking to enhance their technological infrastructure.
              Under his leadership, D'roid Technologies has grown rapidly,
              attracting a talented team of developers, designers, and marketers
              who work remotely to bring ambitious projects to life.
              Ekenedilichukwu’s commitment to fostering collaboration and
              productivity has helped the company maintain high standards of
              excellence and customer satisfaction.
            </p>
          </div>
          <div className="same_content_right">
            <div style={{ width: "60%", height: "80%" }}>
              <img
                src={Assets.images.suit_pic}
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
                src={Assets.images.cap_pic}
                alt="face_image"
                className="same_content_img"
              />
            </div>
          </div>
          <div className="same_content_right">
            <p className="same_content_p">
              What sets Ekenedilichukwu apart as an entrepreneur is his
              relentless focus on solving real-world problems and turning
              challenges into opportunities. He believes that entrepreneurship
              is not just about creating businesses, but about creating
              solutions that make a tangible difference. His ability to think
              critically and strategically has led him to successfully navigate
              the often unpredictable landscape of running a tech business. From
              identifying market gaps to launching innovative products,
              Ekenedilichukwu consistently pushes the boundaries of what is
              possible in the tech world.
            </p>
          </div>
        </div>
        <div className="same_content">
          <div className="same_content_left">
            <p className="same_content_p">
              Beyond D'roid Technologies, Ekenedilichukwu has demonstrated a
              passion for mentorship and leadership, particularly in the tech
              community. He actively shares his knowledge and experience with
              young entrepreneurs and tech enthusiasts, helping them navigate
              their own paths to success. He has also been involved in
              initiatives aimed at fostering technical skills development and
              entrepreneurship among young people in Nigeria and beyond,
              reflecting his belief in the power of technology to drive
              socio-economic development.
            </p>
          </div>
          <div className="same_content_right">
            <p className="same_content_p">
              Beyond D'roid Technologies, Ekenedilichukwu has demonstrated a
              passion for mentorship and leadership, particularly in the tech
              community. He actively shares his knowledge and experience with
              young entrepreneurs and tech enthusiasts, helping them navigate
              their own paths to success. He has also been involved in
              initiatives aimed at fostering technical skills development and
              entrepreneurship among young people in Nigeria and beyond,
              reflecting his belief in the power of technology to drive
              socio-economic development.
            </p>
          </div>
        </div>
        <div className="same_content">
          <div className="same_content_left">
            <p className="same_content_p">
              Ekenedilichukwu’s entrepreneurial mindset is grounded in a strong
              commitment to innovation, resilience, and impact. He constantly
              explores new ideas and emerging trends in the technology industry,
              making sure that his ventures are at the cutting edge of
              innovation. Whether it is integrating new technologies or scaling
              up operations, his focus remains on creating sustainable
              businesses that thrive in an ever-evolving digital world.
            </p>
          </div>
          <div className="same_content_right">
            <p className="same_content_p">
              In addition to his entrepreneurial endeavors, Ekenedilichukwu is
              also passionate about giving back. He is keen on using his success
              to contribute positively to society, particularly by empowering
              young people with the skills and resources they need to thrive in
              the modern workforce. His belief in the transformative power of
              technology is evident in his efforts to create access to tech
              education and opportunities, particularly for underserved
              communities. Overall, Ekenedilichukwu Okoli is an entrepreneur who
              embodies vision, innovation, and purpose. His work has not only
              impacted businesses and industries but also touched lives by
              making technology more accessible and impactful. As he continues
              to build and scale new ventures, his entrepreneurial journey
              remains a source of inspiration for aspiring business leaders who
              wish to make their mark on the world.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Entreprener;
