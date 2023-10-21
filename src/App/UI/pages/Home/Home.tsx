import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { Assets } from "../../../utils/constants/Assets";
import "../Home/Home.css";
import { AiFillApple } from "react-icons/ai";
import { AiFillGoogleCircle } from "react-icons/ai";
import { windowWidth } from "../WelcomePage/WelcomePage";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import GlobalButton from "../../components/GlobalButton/GlobalButton";
import ItemContainer from "../../components/ItemContainer/ItemContainer";
import { TypeAnimation } from "react-type-animation";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Contact: React.FC<any> = () => {
  const [checked, setChecked] = React.useState(false);
  const navigate = useNavigate();
  return (
    <>
      <NavBar />
      <div className="main-container">
        {/* <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <TypeAnimation
            sequence={[
              `Mobile & Web Alchemist\nCrafting Magic with Code, Design, and User-Centricity\nLine Three\nLine Four\nLine Five
            
        Line Seven`, // actual line-break inside string literal also gets animated in new line, but ensure there are no leading spaces
              1000,
              "",
            ]}
            wrapper="span"
            speed={10}
            style={{
              whiteSpace: "pre-line",
              fontSize: "2em",
              display: "inline-block",
              color: "White",
            }}
            repeat={0}
          />
        </div> */}

        {/* <AnimationOnScroll animateIn="animate__bounceIn"> */}
        <p className="header-text">Mobile & Web Alchemist</p>
        {/* </AnimationOnScroll> */}
        <p className="sub-header-text">
          Crafting Magic with Code, Design, and User-Centricity.
        </p>
        <div className="top-container">
          <div className="top-container-left">
            <img src={Assets.images.home_image} alt="" />
          </div>

          <div className="top-container-right">
            {/* <AnimationOnScroll animateIn="animatte__bounceIn"> */}
            <p>
              Mobile and web development are my realms, where I reign supreme. I
              craft fluid and responsive mobile apps for Android and iOS, with
              sleek UI and groundbreaking functionalities that set new standards
              in UX and performance.
            </p>
            {/* </AnimationOnScroll> */}
            <p>
              As a web developer, I weave the threads of HTML, CSS, and
              JavaScript into awe-inspiring web experiences. My solutions
              transcend the ordinary, offering seamless interactions,
              captivating visuals, and pixel-perfect designs that captivate
              users and leave a lasting impression.
            </p>
            <div className="home-button-container">
              <GlobalButton
                text={"Hire me"}
                bgColor={"#212C2F"}
                textColor={"#5D9AE2"}
                onPress={() => alert("Hire Me")}
              />
              <GlobalButton
                text={"My Resume"}
                bgColor={"#212C2F"}
                textColor={"#5D9AE2"}
                onPress={() => alert("My Resume")}
              />
              <GlobalButton
                text={"Schedule a Call"}
                bgColor={"#2C2817"}
                textColor={"#E2C65E"}
                onPress={() => alert("Schedule a call")}
              />
            </div>
          </div>
        </div>
        <div className="featured-projects">
          <div className="featured-projects-top">
            <p className="featured-projects-p">Latest Projects</p>
            <div className="featured-projects-appstore">
              <div className="google-image" onClick={() => alert("google")}>
                <img src={Assets.images.google} alt="" />
              </div>
              <div className="apple-image">
                <img src={Assets.images.apple} alt="" />
              </div>
            </div>
          </div>
          <div className="featured-items-con">
            <ItemContainer
              headerImage={<img src={Assets.images.rTransfer} alt="" />}
              headerText={"Rapid Transfer App"}
              headerTextColor={"#ffffff"}
              bgColor={"#181813"}
              width={"35%"}
              desc={"Lead, Front-End Engineer(Mobile / Web)"}
              descColor={"#ffffff"}
              title={""}
              titleColor={""}
              jContent={"center"}
            />
            <ItemContainer
              headerImage={<img src={Assets.images.ecobank_pay} alt="" />}
              headerText={"Ecobank Pay"}
              headerTextColor={"#ffffff"}
              bgColor={"#0D0F12"}
              width={"35%"}
              desc={"Mobile Engineer"}
              descColor={"#ffffff"}
              title={""}
              titleColor={""}
              jContent={"center"}
            />
          </div>
          <div className="featured-items-con">
            <ItemContainer
              headerImage={<img src={Assets.images.kc} alt="" />}
              headerText={"Knowledge City Inc"}
              headerTextColor={"#ffffff"}
              bgColor={"#16120E"}
              width={"35%"}
              desc={"Mobile Engineer"}
              descColor={"#ffffff"}
              title={""}
              titleColor={""}
              jContent={"center"}
            />
            {/* <img src={Assets.images.home_banner} alt=""/> */}
            <div
              style={{
                width: "50%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img src={Assets.images.skills} alt="" width={500} height={500} />
            </div>
          </div>
          <GlobalButton
            text={"All Projects"}
            bgColor={"#2C2817"}
            textColor={"#E2C65E"}
            onPress={() => alert("All Projects")}
          />
        </div>
        <div className="all-tools">
          <p className="featured-projects-p">Featured Projects</p>
          <img
            src={Assets.images.home_banner}
            alt=""
            width={"100%"}
            style={{ marginTop: 20 }}
          />
        </div>
        <div className="dev-tools-div">
          <p className="contact-div-header">Amazing Dev Tools</p>
          <div className="inner-dev-tools">
            <div className="dev-tools-image">
              <img src={Assets.images.dev_tools} alt="" />
            </div>
            <div className="dev-tools-p">
              <p>
                Explore a curated collection of powerful resources and tools
                designed to supercharge your development journey. From code
                editors to testing utilities and productivity enhancers, our
                array of Developer Tools is your one-stop destination for
                optimizing your workflow.
              </p>
              <p>
                Whether you're a seasoned developer or just starting your coding
                adventure, these tools are here to simplify, streamline, and
                supercharge your projects.
              </p>
              <p>Dive in and elevate your development experience today!</p>
              <GlobalButton
                text={"Explore All Tools"}
                bgColor={"#212C2F"}
                textColor={"#5D9AE2"}
                onPress={() => alert("My Resume")}
              />
            </div>
          </div>
        </div>
        <div className="contact-div">
          <p className="contact-div-header">Let's Build Together</p>
          <div className="contact-div-details">
            <p className="contact-div-phone">📞 +234 - 706 - 8815 - 984</p>
            <p className="contact-div-email">📨 developerekene@gmail.com</p>
          </div>
          <div className="social-div">
            <div className="social" style={{background: '#22190E'}} onClick={() => alert("")}>
              <img src={Assets.images.mail} alt="" width={40} height={40}/>
            </div>
            <div className="social" style={{background: '#0C1114'}} onClick={() => alert("")}>
              <img src={Assets.images.linkedin} alt="" width={40} height={40}/>
            </div>
            <div className="social" style={{background: '#0E1610'}} onClick={() => alert("")}>
              <img src={Assets.images.whatapps} alt="" width={40} height={40}/>
            </div>
            <div className="social" style={{background: '#160C10'}} onClick={() => alert("")}>
              <img src={Assets.images.twitter} alt="" width={40} height={40}/>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
