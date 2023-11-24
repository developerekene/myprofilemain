/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { Assets } from "../../../utils/constants/Assets";
import "../Home/Home.css";
import { windowWidth } from "../WelcomePage/WelcomePage";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import GlobalButton from "../../components/GlobalButton/GlobalButton";
import ItemContainer from "../../components/ItemContainer/ItemContainer";
import "animate.css/animate.min.css";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

type Anchor = "top" | "left" | "bottom" | "right";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Home: React.FunctionComponent = () => {
  const [open, setOpen] = React.useState(false);
  const scheduleAcallOpen = () => setOpen(true);
  const schedleAcallClose = () => setOpen(false);

  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const [state, setState] = React.useState({
    // top: false,
    // left: false,
    // bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: windowWidth / 3.5, padding: 5 }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Kindly Fill the form below
        </Typography>
        <Divider />

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div>
    </Box>
  );

  const [checked, setChecked] = React.useState(false);
  const navigate = useNavigate();

  return (
    <>
      <NavBar />
      <div className="main-container">
        <div>
          <Modal
            open={open}
            onClose={schedleAcallClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <p className="">Schedle a Call</p>
              <p className="">Kindly call me on this number: +44 7778745043</p>
            </Box>
          </Modal>
        </div>
        <p className="header-text">Mobile & Web Alchemist</p>
        <p className="sub-header-text">
          Crafting Magic with Code, Design, and User-Centricity.
        </p>
        <div className="top-container">
          <div className="top-container-left">
            <img src={Assets.images.home_image} alt="" />
          </div>

          <div className="top-container-right">
            <p>
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
              <div>
                {(["right"] as const).map((anchor) => (
                  <React.Fragment key={anchor}>
                    <button
                      className="hireme-button"
                      onClick={toggleDrawer(anchor, true)}
                    >
                      {"Hire Me"}
                    </button>
                    <Drawer
                      anchor={anchor}
                      open={state[anchor]}
                      onClose={toggleDrawer(anchor, false)}
                    >
                      {list(anchor)}
                    </Drawer>
                  </React.Fragment>
                ))}
              </div>

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
                onPress={scheduleAcallOpen}
              />
            </div>
          </div>
        </div>
        <div className="featured-projects">
          <div className="featured-projects-top">
            <p className="featured-projects-p">Latest Projects</p>
            <div className="featured-projects-appstore">
              <div className="google-image" onClick={() => alert("google")}>
                <img src={Assets.images.google} alt="" className="g-image" />
              </div>
              <div className="apple-image">
                <img src={Assets.images.apple} alt="" className="a-image" />
              </div>
            </div>
          </div>
          <div className="featured-items-con">
            <ItemContainer
              headerImage={<img src={Assets.images.rTransfer} alt="" />}
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
              headerImage={<img src={Assets.images.ecobank_pay} alt="" />}
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
              headerImage={<img src={Assets.images.kc} alt="" />}
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
                width: windowWidth < 900 ? "60%" : "50%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src={Assets.images.skills}
                alt=""
                width={windowWidth < 900 ? 400 : 500}
                height={windowWidth < 900 ? 400 : 500}
              />
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
            <p className="contact-div-email">📨 developerekene@gmail.com</p>
          </div>
          <div className="social-div">
            <div
              className="social"
              style={{ background: "#22190E" }}
              onClick={() => alert("")}
            >
              <img src={Assets.images.mail} alt="" width={40} height={40} />
            </div>
            <div
              className="social"
              style={{ background: "#0C1114" }}
              onClick={() => alert("")}
            >
              <img src={Assets.images.linkedin} alt="" width={40} height={40} />
            </div>
            <div
              className="social"
              style={{ background: "#0E1610" }}
              onClick={() => alert("")}
            >
              <img src={Assets.images.whatapps} alt="" width={40} height={40} />
            </div>
            <div
              className="social"
              style={{ background: "#160C10" }}
              onClick={() => alert("")}
            >
              <img src={Assets.images.twitter} alt="" width={40} height={40} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
