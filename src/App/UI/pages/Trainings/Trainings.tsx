/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import "../Trainings/Trainings.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { Assets } from "../../../utils/constants/Assets";
import GlobalButton from "../../components/GlobalButton/GlobalButton";

const Trainings: React.FunctionComponent = () => {
  const [place, setPlace] = useState<string>("My Stack is...");
  const [content, setContent] = useState<React.ReactNode>(
    <div>
      <p className="train-const">Hello There!</p>
      <p className="train-const">
        Kindly Pick a Stack above to view all reqirememts.
      </p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={Assets.images.starticon} alt="" />
      </div>
    </div>
  );

  return (
    <>
      <NavBar />
      <div className="training-main">
        <div className="training-top">
          <p className="training-top-header" id="start-your-class">
            There is so much to learn, are you excited?
          </p>
          <p className="training-top-p">
            Welcome to the begining of your tech journey. I am Ekenedilichukwu
            Okoli and i am exicited to help you accend to the level of a Tech
            Sage in a short time.
          </p>
          <p className="training-top-p">Let's begin!</p>
          <div className="training-top-inner">
            <div className="training-top-left">
              <p className="">Please choose your stack</p>
            </div>
            <div className="dropdown">
              <span className="dropdown-item">{place}</span>
              <div className="dropdown-content">
                <div
                  onClick={() => {
                    setPlace("Back-End Training");
                    setContent(
                      <div>
                        <p className="train-const-header">Back-End Training</p>
                      </div>
                    );
                  }}
                  style={{ marginBottom: 10 }}
                >
                  <p>Back-End Training</p>
                </div>
                <div
                  onClick={() => {
                    setPlace("Mobile Training");
                    setContent(
                      <div>
                        <p className="train-const-header">Mobile Training</p>
                        <div style={{ marginBottom: 30 }}>
                          <p className="train-const-header-a">
                            Unlock the World of Mobile Development with React
                            Native
                          </p>
                          <p className="train-const-a">Why React Native?</p>
                          <p className="train-const-a">
                            React Native, developed by Facebook, is a
                            game-changer in the mobile app development
                            landscape. It allows you to build cross-platform
                            applications with a single codebase, saving time and
                            resources. Whether you're a beginner or an
                            experienced developer, React Native's simplicity and
                            flexibility make it an ideal choice.
                          </p>
                          <p className="train-const-a">
                            <b>What You'll Learn:</b>
                          </p>
                          <ol>
                            <li className="train-const-a">
                              Fundamentals of React Native:
                            </li>
                            <ul>
                              <li className="train-const-a">
                                Understand the basics of React Native
                                architecture.
                              </li>
                              <li className="train-const-a">
                                Learn how to set up your development
                                environment.
                              </li>
                            </ul>
                            <li className="train-const-a">
                              Building UI Components:
                            </li>
                            <ul>
                              <li className="train-const-a">
                                Dive into the world of React Native components.
                              </li>
                              <li className="train-const-a">
                                Create visually appealing and interactive user
                                interfaces.
                              </li>
                            </ul>
                            <li className="train-const-a">
                              Navigation and Routing:
                            </li>
                            <ul>
                              <li className="train-const-a">
                                Master the art of navigating between screens.
                              </li>
                              <li className="train-const-a">
                                Implement routing for a seamless user
                                experience.
                              </li>
                            </ul>
                            <li className="train-const-a">State Management:</li>
                            <ul>
                              <li className="train-const-a">
                                Grasp the concepts of state and props in React
                                Native.
                              </li>
                              <li className="train-const-a">
                                Explore state management solutions for efficient
                                app development.
                              </li>
                            </ul>
                            <li className="train-const-a">API Integration:</li>
                            <ul>
                              <li className="train-const-a">
                                Connect your app to external APIs
                              </li>
                              <li className="train-const-a">
                                Fetch and display data dynamically.
                              </li>
                            </ul>
                            <li className="train-const-a">
                              Debugging and Optimization:
                            </li>
                            <ul>
                              <li className="train-const-a">
                                Learn effective debugging techniques.
                              </li>
                              <li className="train-const-a">
                                Optimize your app's performance for a smooth
                                user experience.
                              </li>
                            </ul>
                          </ol>
                          <p className="train-const-a">
                            Why Choose Our Classes?
                          </p>
                          <ul>
                            <li>
                              <p className="train-const-a">
                                <b>Hands-On Projects:</b> Apply your knowledge
                                through real-world projects.
                              </p>
                              <p className="train-const-a">
                                <b>Expert Guidance:</b> Learn from experienced
                                instructors in the field.
                              </p>
                              <p className="train-const-a">
                                <b>Interactive Learning:</b> Engage in
                                discussions and collaborative projects.
                              </p>
                              <p className="train-const-a">
                                <b>Career Support:</b> Gain insights into the
                                industry and career guidance.
                              </p>
                            </li>
                          </ul>
                          <div
                            style={{
                              display: "flex",
                              gap: 20,
                              alignItems: "center",
                            }}
                          >
                            <a href="#start-your-class">
                              <GlobalButton
                                text={"Start Your Classes!"}
                                bgColor={"#2C2817"}
                                textColor={"#E8C547"}
                              />
                            </a>
                            <GlobalButton
                              text={"Take your React Native test here!"}
                              bgColor={"#2C2817"}
                              textColor={"#E8C547"}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  }}
                  style={{ marginBottom: 10 }}
                >
                  <p>Mobile Training</p>
                </div>
                <div
                  onClick={() => {
                    setPlace("Web Training");
                    setContent(
                      <>
                        <p className="train-const-header">Web Training</p>
                        <div style={{ marginBottom: 30 }}>
                          <p className="train-const-header-a">
                            HTML and CSS Introduction Class
                          </p>
                          <p className="train-const-a">
                            <b>Objective:</b>
                          </p>
                          <p className="train-const-a">
                            This class aims to provide a foundational
                            understanding of HTML and CSS, the building blocks
                            of web development. Whether you're a beginner or
                            looking to strengthen your skills, this class is
                            designed to empower you with the essentials for
                            creating stunning, responsive web pages.
                          </p>
                          <p className="train-const-a">
                            <b>Agenda:</b>
                          </p>
                          <ol>
                            <li className="train-const-a">
                              Understanding HTML: - Introduction to HTML tags
                              and structure. - Creating a basic HTML document. -
                              Incorporating headings, paragraphs, lists, and
                              links.
                            </li>
                            <li className="train-const-a">
                              CSS Fundamentals: - Introduction to CSS and its
                              role in styling. - Selectors and styling elements.
                              - Applying colors, fonts, and spacing.
                            </li>
                            <li className="train-const-a">
                              Building Your First Web Page: - Hands-on exercise
                              to create a simple webpage. - Combining HTML and
                              CSS for a visually appealing result.
                            </li>
                            <li className="train-const-a">
                              Building Your First Web Page: - Hands-on exercise
                              to create a simple webpage. - Combining HTML and
                              CSS for a visually appealing result.
                            </li>
                            <li className="train-const-a">
                              Responsive Design Basics: - Introduction to
                              responsive design principles. - Media queries for
                              different screen sizes.
                            </li>
                          </ol>
                          <p className="train-const-a">
                            Requirements: No prior coding experience is
                            necessary. Please ensure you have a code editor
                            installed on your laptop to participate in the
                            class.
                          </p>
                          <p className="train-const-a">
                            Date and Time: Message Ekene on +44 7778 745043 for
                            the time and date.
                          </p>
                          <p className="train-const-a">
                            Location: Meeting link will be sent to those who are
                            interested via WhatsApp.
                          </p>
                          <div
                            style={{
                              display: "flex",
                              gap: 20,
                              alignItems: "center",
                            }}
                          >
                            <a href="https://meet.google.com/xwt-jbpa-hke">
                              <GlobalButton
                                text={"Start Your Classes!"}
                                bgColor={"#2C2817"}
                                textColor={"#E8C547"}
                              />
                            </a>
                            <GlobalButton
                              text={"Done with Classes, take your test here!"}
                              bgColor={"#2C2817"}
                              textColor={"#E8C547"}
                            />
                          </div>
                        </div>
                        <div style={{ marginBottom: 30 }}>
                          <p className="train-const-header-a">
                            Master React.js with Our Tutorial Classes
                          </p>
                          <p className="train-const-a">
                            Are you eager to dive into the world of modern web
                            development? Our React.js tutorial classes are
                            designed just for you!
                          </p>
                          <p className="train-const-a">
                            <b>What's React.js?</b>
                          </p>
                          <p className="train-const-a">
                            React.js is a powerful JavaScript library for
                            building user interfaces. Developed and maintained
                            by Facebook, it allows developers to create reusable
                            UI components and build dynamic, single-page
                            applications.
                          </p>
                          <p className="train-const-a">
                            <b>Why Choose Our Classes?</b>
                          </p>
                          <ul>
                            <li className="train-const-a">
                              Hands-on Learning: Get practical, hands-on
                              experience with real-world projects.
                            </li>
                            <li className="train-const-a">
                              Expert Instructors: Learn from industry experts
                              with extensive React.js experience.
                            </li>
                            <li className="train-const-a">
                              Comprehensive Curriculum: Cover the fundamentals
                              and advanced concepts to become a React.js pro.
                            </li>
                            <li className="train-const-a">
                              Interactive Sessions: Engage in Q&A sessions and
                              collaborative problem-solving.
                            </li>
                          </ul>
                          <p className="train-const-a">
                            <b>What You'll Learn:</b>
                          </p>
                          <p className="train-const-a">
                            Setting up a React.js development environment
                            Understanding React components and props Managing
                            state and lifecycle Handling events and forms
                            Routing with React Router State management with
                            Redux Testing and debugging React applications
                            Building and deploying React apps
                          </p>
                          <p className="train-const-a">
                            <b>Who Should Attend?</b>
                          </p>
                          <p className="train-const-a">
                            Whether you're a beginner or an experienced
                            developer looking to upgrade your skills, our
                            tutorial classes cater to all levels.
                          </p>
                          <p className="train-const-a">
                            <b>Duration and Schedule:</b>
                          </p>
                          <p className="train-const-a">
                            Duration: Dependent on the Student. Saturday and
                            Sundays by 5:00 pm
                          </p>
                          <p className="train-const-a">
                            <b>Fees:</b>
                          </p>
                          <p className="train-const-a">
                            Message Ekene to get the updated Fees.
                          </p>
                          <div
                            style={{
                              display: "flex",
                              gap: 20,
                              alignItems: "center",
                            }}
                          >
                            <a href="#start-your-class">
                              <GlobalButton
                                text={"Start Your Classes!"}
                                bgColor={"#2C2817"}
                                textColor={"#E8C547"}
                              />
                            </a>
                            <GlobalButton
                              text={"Take your React Js test here!"}
                              bgColor={"#2C2817"}
                              textColor={"#E8C547"}
                            />
                          </div>
                        </div>
                      </>
                    );
                  }}
                  style={{ marginBottom: 10 }}
                >
                  <p>Web Training</p>
                </div>
              </div>
            </div>
          </div>
          <div className="train-up">{content}</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Trainings;
