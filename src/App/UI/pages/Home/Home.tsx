import React from "react";
import Box from "@mui/material/Box";
import { Button, colors } from "@mui/material";
import "../Home/Home.css";
import kcImage from "../../../images/png/kcimage.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import hhhh from "../../../images/png/software.png";
import drone from "../../../images/png/drone.png";
import elearn from "../../../images/png/eLearning.png";
import itachi from "../../../images/png/itachi.png";
import phone from "../../../images/png/mobile.png";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";

export const windowWidth: number = window.screen.width;
export const windowHeight: number = window.screen.height;

const Home: React.FC<any> = () => {
  return (
    <div>
      <div className="containerHome" style={{ width: windowWidth }}>
        <div className="innerConDiv">
          <p
            style={{
              fontSize: 60,
              textAlign: "center",
              fontWeight: "bolder",
              fontFamily: "Times New Roman",
              paddingTop: 60,
            }}
          >
            {"Ekenedilichukwu Okoli"}
          </p>

          <p
            style={{
              fontSize: 20,
              fontFamily: "Times New Roman",
              textAlign: "center",
              color: "yellow",
            }}
          >
            Software Engineer, Mobile / Web
          </p>
          <p
            style={{
              fontSize: 15,
              fontFamily: "Times New Roman",
              textAlign: "center",
              color: "#EEDC5B",
              marginTop: 10,
            }}
          >
            Javscript, Typscript, Kotlin, React Native, React js, Scrum, Android
            Studio, Xxcode
          </p>

          <p
            style={{
              letterSpacing: 2,
              lineHeight: 2,
              justifySelf: "center",
              paddingLeft: 100,
              paddingRight: 100,
              marginTop: 50,
              textAlign: "justify",
            }}
          >
            Welcome to my personal portfolio! I'm a passionate
            software engineer with 4 years of professional experience. I thrive
            on the exciting challenges that software engineering presents and
            the endless possibilities it offers for innovation and
            problem-solving.
            {"\n"}
            <br/>
            <br/>
            From a young age, I've been captivated by the world
            of technology and its ability to shape the way we live, work, and
            connect with each other. This passion led me to pursue a career in
            software engineering, where I could bring my ideas to life and make
            a meaningful impact.
          </p>
          

          <div
            style={{
              width: "100%",
              justifyContent: "center",
              height: 60,
              marginTop: 40,
              display: "flex",
              gap: 20,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                height: "100%",
              }}
            >
              <a href="#">
                <TwitterIcon
                  style={{ color: "#ffffff", width: 40, height: 40 }}
                />
              </a>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <a href="#">
                <InstagramIcon
                  style={{ color: "#ffffff", width: 40, height: 40 }}
                />
              </a>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <a href="#">
                <FacebookIcon
                  style={{ color: "#ffffff", width: 40, height: 40 }}
                />
              </a>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <a href="#">
                <LinkedInIcon
                  style={{ color: "#ffffff", width: 40, height: 40 }}
                />
              </a>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <a href="#">
                <GitHubIcon
                  style={{ color: "#ffffff", width: 40, height: 40 }}
                />
              </a>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <a href="#">
                <YouTubeIcon
                  style={{ color: "#ffffff", width: 40, height: 40 }}
                />
              </a>
            </div>
          </div>

          <div
            style={{
              marginTop: 40,
              display: "flex",
              gap: 20,
              justifyContent: "center",
              paddingBottom: 60,
            }}
          >
            <Button
              style={{ backgroundColor: "yellow", color: "black" }}
              variant="contained"
            >
              Hire Me
            </Button>
            <Button
              style={{ borderColor: "yellow", color: "white" }}
              variant="outlined"
            >
              Download my CV
            </Button>
            <Button
              style={{ backgroundColor: "yellow", color: "black" }}
              variant="contained"
              href="/about"
            >
              About Me
            </Button>
          </div>
        </div>

        {/* <div
          style={{
            width: windowWidth / 2,
            // backgroundColor: "blue",
            height: windowHeight - 300,ƒ
          }}
        >
          <img
            src={homeImage}
            alt="home Logo"
            style={{ width: "100%", height: "100%" }}
          />
        </div> */}
      </div>
      <div
        style={{
          backgroundColor: "#EEDC5B",
          // height: 500,
        }}
      >
        {/* <div style={{ marginLeft: 50, paddingTop: 30 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <WorkHistoryIcon
              style={{
                color: "#191970",
                width: 40,
                height: 40,
                paddingTop: 28,
              }}
            />
            <Typography
              style={{
                marginTop: 30,
                // textAlign: "center",
                fontSize: 40,
                fontWeight: "bolder",
                color: "#191970",
              }}
            >
              Work History
            </Typography>
          </div>
          <div>
            <div
              style={{
                marginTop: 40,
                display: "flex",
                gap: 20,
                justifyContent: "center",
                paddingBottom: 60,
              }}
            >
              <Button
                style={{ borderColor: "#191970", color: "black" }}
                variant="outlined"
              >
                Last One year
              </Button>
              <Button
                style={{ borderColor: "#191970", color: "black" }}
                variant="outlined"
              >
                Last Two years
              </Button>
              <Button
                style={{ borderColor: "#191970", color: "black" }}
                variant="outlined"
              >
                Last Three years
              </Button>
              <Button
                style={{ borderColor: "#191970", color: "black" }}
                variant="outlined"
              >
                Last Four years
              </Button>
              <Button
                style={{ borderColor: "#191970", color: "black" }}
                variant="outlined"
              >
                Last Five years
              </Button>
            </div>
          </div>
        </div> */}
      </div>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 30,
          }}
        >
          <div
            style={{
              // backgroundColor: "red",
              width: windowWidth / 2,
            }}
          >
            <Typography
              style={{
                marginTop: 30,
                textAlign: "center",
                fontSize: 40,
                fontWeight: "bolder",
                color: "black",
              }}
            >
              The Knowledge City App
            </Typography>
            <p
              style={{
                letterSpacing: 2,
                lineHeight: 2,
                justifySelf: "center",
                paddingLeft: 20,
                paddingRight: 20,
                marginTop: 50,
                textAlign: "justify",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div
            style={{
              // backgroundColor: "green",
              width: windowWidth / 2,
              alignItems: "center",
            }}
          >
            {/* <p>jbculyelufhsibicu</p> */}
            <img src={kcImage} alt="" style={{ width: 360, height: 600 }} />
          </div>
        </div>
        <Button
          style={{ borderColor: "#191970", color: "black" }}
          variant="outlined"
        >
          Last Five years
        </Button>
      </div>
      <Typography
        style={{
          marginTop: 30,
          textAlign: "center",
          fontSize: 40,
          fontWeight: "bolder",
          color: "#191970",
        }}
      >
        The Pentagon
      </Typography>
      <p
        style={{
          letterSpacing: 2,
          lineHeight: 2,
          justifySelf: "center",
          paddingLeft: 100,
          paddingRight: 100,
          marginTop: 50,
          textAlign: "justify",
        }}
      >
        Welcome to my personal portfolio! I'm , a passionate software engineer
        with 4 years of professional experience. I thrive on the exciting
        challenges that software engineering presents and the endless
        possibilities it offers for innovation and problem-solving. From a young
        age, I've been captivated by the world of technology and its ability to
        shape the way we live, work, and connect with each other. This passion
        led me to pursue a career in software engineering, where I could bring
        my ideas to life and make a meaningful impact.
      </p>
      <div
        style={{
          padding: 60,
          display: "flex",
          gap: 20,
          justifyContent: "center",
        }}
      >
        <Card sx={{ maxWidth: 345, backgroundColor: "#ffffff" }}>
          <CardMedia
            sx={{ height: 140 }}
            image={hhhh}
            title="Software Development"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              color="#00008b"
            >
              Software Development
            </Typography>
            <Typography variant="body2" color="#00008b">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            {/* <Button size="small" style={{color: "#000000"}}>Share</Button> */}

            <Button
              href="/softwareeng"
              size="small"
              style={{ color: "#000000" }}
            >
              Learn More
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345, backgroundColor: "#ffffff" }}>
          <CardMedia
            sx={{ height: 140 }}
            image={drone}
            title="Drone Services"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              color="#00008b"
            >
              Drone Services
            </Typography>
            <Typography variant="body2" color="#00008b">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button href="/drone" size="small" style={{ color: "#000000" }}>
              Learn More
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345, backgroundColor: "#ffffff" }}>
          <CardMedia sx={{ height: 140 }} image={elearn} title="E - Learning" />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              color="#00008b"
            >
              E - Learning
            </Typography>
            <Typography variant="body2" color="#00008b">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            {/* <Button size="small" style={{color: "#000000"}}>Share</Button> */}
            <Button href="/elearning" size="small" style={{ color: "#000000" }}>
              Learn More
            </Button>
          </CardActions>
        </Card>
      </div>
      <div
        style={{
          paddingLeft: 60,
          // paddingTop: 60,
          paddingBottom: 60,
          display: "flex",
          gap: 20,
          justifyContent: "center",
          paddingRight: 60,
        }}
      >
        <Card sx={{ maxWidth: 345, backgroundColor: "#ffffff" }}>
          <CardMedia
            sx={{ height: 140 }}
            image={phone}
            title="Drone Services"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              color="#00008b"
            >
              D'roid Mobile
            </Typography>
            <Typography variant="body2" color="#00008b">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            {/* <Button size="small" style={{color: "#000000"}}>Share</Button> */}
            <Button href="/mobile" size="small" style={{ color: "#000000" }}>
              Learn More
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345, backgroundColor: "#ffffff" }}>
          <CardMedia sx={{ height: 140 }} image={itachi} title="E - Learning" />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              color="#00008b"
            >
              Ani-Max
            </Typography>
            <Typography variant="body2" color="#00008b">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            {/* <Button size="small" style={{color: "#000000"}}>Share</Button> */}
            <Button href="/animax" size="small" style={{ color: "#000000" }}>
              Learn More
            </Button>
          </CardActions>
        </Card>
      </div>
      <div
        style={{
          width: windowWidth,
          backgroundColor: "#00008b",
          height: 500,
          padding: windowWidth / 40,
        }}
      >
        <Typography
          style={{
            color: "yellow",
            fontSize: 30,
            fontFamily: "Times New Roman",
          }}
        >
          Reviews{" "}
        </Typography>
      </div>
    </div>
  );
};

export default Home;
