import React from "react";
import Navbar from "../Components/Navbar";
import { Assets } from "../../utils/constants/Assets";
import "../Styles/Software.css"

const Entreprener: React.FunctionComponent = () => {
  return (
    <>
      <Navbar />
      <div className="same_main">
        <h1 className="same_main_header">Silicon Valley Visionary</h1>
        <p className="same_main_p">
          Ekenedilichukwu Okoli is an innovative and dynamic entrepreneur with a
          passion for leveraging technology to solve real-world problems. His
          journey as a business leader began with a clear vision: to use his
          deep expertise in software development, coupled with his
          entrepreneurial spirit, to build solutions that not only drive
          technological advancement but also create meaningful impact across
          multiple industries.
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
              has successfully transformed his vision into a growing enterprise.
              He founded D'roid Technologies as a product-led company that
              provides cutting-edge software solutions for businesses of all
              sizes. Under his leadership, the company has evolved into a
              full-fledged technology powerhouse, specializing in software
              development, mobile applications, and digital transformation
              solutions for a variety of industries, including FinTech,
              E-commerce, and Education. Ekenedilichukwu’s leadership is
              characterized by his hands-on approach and a commitment to
              fostering innovation within his teams. He leads by example,
              pushing his employees to think creatively and work collaboratively
              to solve challenges. He has built and now manages a remote team of
              talented professionals, including developers, designers, and
              content creators, cultivating an environment where diverse talents
              come together to achieve common goals. His use of collaborative
              tools like Microsoft Teams ensures seamless communication and
              operational efficiency, regardless of geographical boundaries.
            </p>
          </div>
          <div className="same_content_right">
            <div>
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
            <div>
              <img
                src={Assets.images.cap_pic}
                alt="face_image"
                className="same_content_img"
              />
            </div>
          </div>
          <div className="same_content_right">
            <p className="same_content_p">
              Welcome to my Services page, where I turn your digital visions
              into reality. As a skilled and dedicated software engineer, I
              offer a range of innovative and cutting-edge services that elevate
              your digital presence and drive business success. From crafting
              seamless mobile experiences to building robust web solutions, I am
              your partner in technological excellence. Explore my diverse
              services and let's embark on an extraordinary journey together.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Entreprener;
