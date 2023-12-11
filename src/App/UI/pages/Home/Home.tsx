/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef } from "react";
import NavBar from "../../components/NavBar/NavBar";
import { Assets } from "../../../utils/constants/Assets";
import "../Home/Home.css";
import { windowWidth } from "../WelcomePage/WelcomePage";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import GlobalButton from "../../components/GlobalButton/GlobalButton";
import ItemContainer from "../../components/ItemContainer/ItemContainer";
import "animate.css/animate.min.css";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { pdf } from "../../../utils/constants/Data";

const Home: React.FunctionComponent = () => {
  const [open, setOpen] = React.useState(false);
  const schedleAcallClose = () => setOpen(false);
  const [userLocation, setUserLocation] = React.useState<string | null>();
  const [bottom, setBottom] = React.useState<React.ReactNode>();

  const [toastM, setToastM] = React.useState<string>("");

  const [toast, setToast] = React.useState<boolean>(false);

  console.log(userLocation);

  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const [hireMe, setHireMe] = React.useState<boolean>(false);
  const modalRef = useRef<HTMLDialogElement | null>(null);

  const [checked, setChecked] = React.useState(false);
  const navigate = useNavigate();

  // const getCurrentLocation = () => {
  //   return new Promise((resolve, reject) => {
  //     navigator.geolocation.getCurrentPosition(resolve, reject);
  //   });
  // };

  // useEffect(() => {
  //   const getUserLocation = async () => {
  //     try {
  //       const position: any = await getCurrentLocation();
  //       const userCountry = await getCountryFromCoordinates(
  //         position.coords.latitude,
  //         position.coords.longitude
  //       );
  //       setUserLocation(userCountry);
  //     } catch (error) {
  //       console.error("Error getting user location:", error);
  //     }
  //   };

  //   getUserLocation();
  // }, []);

  // const getCountryFromCoordinates = async (latitude: any, longitude: any) => {
  //   const apiKey = "YOUR_GOOGLE_MAPS_API_KEY";
  //   const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;

  //   try {
  //     const response = await fetch(apiUrl);
  //     const data = await response.json();

  //     if (data.results.length > 0) {
  //       // Extract country name from the response
  //       const country = data.results[0].address_components.find((component: any) =>
  //         component.types.includes("country")
  //       );

  //       return country ? country.long_name : "Country Not Found in try";
  //     } else {
  //       return "Country Not Found in else";
  //     }
  //   } catch (error) {
  //     console.error("Error fetching country:", error);
  //     return "Country Not Found in catch";
  //   }
  // };

  function showToast() {
    setToast(true);
    setTimeout(() => {
      setToast(false);
    }, 5000);
  }

  return (
    <>
      <NavBar />
      {toast ? (
        <div className="toast-div">
          <p className="toast-p">{toastM}</p>
        </div>
      ) : null}
      <div className="main-container">
        <p className="header-text">Mobile & Web Alchemist</p>
        <p className="sub-header-text">
          Crafting Magic with Code, Design, and User-Centricity.
        </p>
        <div className="top-container">
          <div className="top-container-left">
            <img src={Assets.images.home_image} alt="" className="img-photo" />
          </div>

          <div className="top-container-right">
            <p className="top-container-right-p">
              Mobile and web development are my realms, where I reign supreme. I
              craft fluid and responsive mobile apps for Android and iOS, with
              sleek UI and groundbreaking functionalities that set new standards
              in UX and performance.
            </p>
            <p>
              As a web developer, I weave the threads of HTML, CSS, and
              JavaScript into awe-inspiring web experiences. My solutions
              transcend the ordinary, offering seamless interactions,
              captivating visuals, and pixel-perfect designs that captivate
              users and leave a lasting impression.
            </p>
            <div className="home-button-container">
              <GlobalButton
                text={"Hire Me"}
                bgColor={"#212C2F"}
                textColor={"#5D9AE2"}
                onPress={() => {
                  setToastM("You can send me a DM via +44 7778 745043");
                  showToast()
                }}
              />

              <GlobalButton
                text={"Request My Resume"}
                bgColor={"#212C2F"}
                textColor={"#5D9AE2"}
                onPress={() => {
                  setToastM("Send me an email and i'll send a copy of my CV to you.");
                  showToast();
                }}
              />

              <a href="tel:+447778745043">
                <GlobalButton
                  text={"Schedule a Call"}
                  bgColor={"#2C2817"}
                  textColor={"#E2C65E"}
                />
              </a>
            </div>
            {/* <div>{bottom}</div> */}
          </div>
        </div>
        <div className="featured-projects">
          <div className="featured-projects-top">
            <p className="featured-projects-p">Latest Projects</p>
            <div className="featured-projects-appstore">
              <div className="google-image">
                <img src={Assets.images.google} alt="" className="g-image" />
              </div>
              <div className="apple-image">
                <img src={Assets.images.apple} alt="" className="a-image" />
              </div>
            </div>
          </div>
          <div className="featured-items-con">
            <ItemContainer
              headerImage={
                <img
                  src={Assets.images.rTransfer}
                  alt=""
                  width={windowWidth < 900 ? 100 : "100%"}
                  height={windowWidth < 900 ? 100 : "100%"}
                />
              }
              headerText={"Rapid Transfer App"}
              headerTextColor={"#ffffff"}
              bgColor={"#181813"}
              width={windowWidth < 900 ? "30%" : "35%"}
              desc={"Lead, Front-End Engineer(Mobile / Web)"}
              descColor={"#ffffff"}
              title={""}
              titleColor={""}
              jContent={"center"}
            />
            <ItemContainer
              headerImage={
                <img
                  src={Assets.images.ecobank_pay}
                  alt=""
                  width={windowWidth < 900 ? 100 : "100%"}
                  height={windowWidth < 900 ? 100 : "100%"}
                />
              }
              headerText={"Ecobank Pay"}
              headerTextColor={"#ffffff"}
              bgColor={"#0D0F12"}
              width={windowWidth < 900 ? "30%" : "35%"}
              desc={"Mobile Engineer"}
              descColor={"#ffffff"}
              title={""}
              titleColor={""}
              jContent={"center"}
            />
          </div>
          <div className="featured-items-con">
            <ItemContainer
              headerImage={
                <img
                  src={Assets.images.kc}
                  alt=""
                  width={windowWidth < 900 ? 100 : "100%"}
                  height={windowWidth < 900 ? 100 : "100%"}
                />
              }
              headerText={"Knowledge City Inc"}
              headerTextColor={"#ffffff"}
              bgColor={"#16120E"}
              width={windowWidth < 900 ? "30%" : "35%"}
              desc={"Mobile Engineer"}
              descColor={"#ffffff"}
              title={""}
              titleColor={""}
              jContent={"center"}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img src={Assets.images.skills} alt="" className="skills-image" />
            </div>
          </div>
          <GlobalButton
            text={"All Projects"}
            bgColor={"#2C2817"}
            textColor={"#E2C65E"}
            onPress={() => navigate("/projects")}
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
              <img src={Assets.images.dev_tools} alt="" className="top-img" />
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
                onPress={() => navigate("/tools")}
              />
            </div>
          </div>
        </div>
        <div className="contact-div">
          <p className="contact-div-header">Let's Build Together</p>
          <div className="contact-div-details">
            {/* <p className="contact-div-phone">📞 +234 - 706 - 8815 - 984</p> */}
            <p className="contact-div-phone">📞 +44 7778745043</p>
            <p className="contact-div-email">📨 seniordevekene@gmail.com</p>
          </div>
          <div className="social-div">
            <div
              className="social"
              style={{ background: "#22190E" }}
              onClick={() => alert("Send a mail to: seniordevekene@gmail.com")}
            >
              <img src={Assets.images.mail} alt="" width={40} height={40} />
            </div>
            {/* <div
              className="social"
              style={{ background: "#0C1114" }}
              onClick={() => alert("")}
            >
              <img src={Assets.images.linkedin} alt="" width={40} height={40} />
            </div> */}
            <div
              className="social"
              style={{ background: "#0E1610" }}
              onClick={() =>
                alert("Send a whatsapp message to: +44 7778745043")
              }
            >
              <img src={Assets.images.whatapps} alt="" width={40} height={40} />
            </div>
            {/* <div
              className="social"
              style={{ background: "#160C10" }}
              onClick={() => alert("")}
            >
              <img src={Assets.images.twitter} alt="" width={40} height={40} />
            </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
