/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import "../Services/Services.css";
import GroupButton from "../../components/GroupButton/GroupButton";
import Card from "../../components/Card/Card";

const SoftWareEng: React.FunctionComponent = () => {
  const [btnOneBG, setBtnOneBG] = React.useState<string>("#2e3644");
  const [btnTwoBG, setBtnTwoBG] = React.useState<string>("#4D5061");
  const [btnThreeBG, setBtnThreeBG] = React.useState<string>("#4D5061");

  const [showFirstItems, setShowFirstItems] = React.useState<boolean>(true);
  const [showSecondItems, setShowSecondItems] = React.useState<boolean>(false);

  const waBasicPlan = (
    <div className="wa-basic-plan">
      <h3 className="wa-basic-plan-header">Basic Plan</h3>
      <h3 className="wa-basic-plan-amount">£799</h3>
      <p className="wa-basic-plan-p">
        Static Website: Development of a basic static website.
      </p>
      <p className="wa-basic-plan-p">
        Up to 5 Pages: Creation of up to 5 web pages.
      </p>
      <p className="wa-basic-plan-p">
        Up to 5 Pages: Creation of up to 5 web pages.
      </p>
      <p className="wa-basic-plan-p">
        Basic SEO: Basic search engine optimization.
      </p>
      <p className="wa-basic-plan-p">Email Support: Support via email.</p>
      <p className="wa-basic-plan-p">
        The Basic Plan is suitable for individuals or small businesses looking
        to establish an online presence.
      </p>
    </div>
  );

  const waBusinessPlan = (
    <div className="wa-business-plan">
      <h3 className="wa-business-plan-header">Business Plan</h3>
      <h3 className="wa-business-plan-amount">£1,999</h3>
      <p className="wa-business-plan-p">
        Dynamic Website: Development of a dynamic, interactive website.
      </p>
      <p className="wa-business-plan-p">
        Up to 15 Pages: Creation of up to 15 web pages.
      </p>
      <p className="wa-business-plan-p">
        Advanced SEO: Comprehensive search engine optimization.
      </p>
      <p className="wa-business-plan-p">
        Priority Support: Faster response times for support.
      </p>
      {/* <p className="wa-basic-plan-p">Email Support: Support via email.</p> */}
      <p className="wa-business-plan-p">
        The Business Plan is designed for businesses seeking an advanced web
        presence.
      </p>
    </div>
  );
  const waEcommercePlan = (
    <div className="wa-commerce-plan">
      <h3 className="wa-commerce-plan-header">ECommerce Plan</h3>
      <h3 className="wa-commerce-plan-amount">£3,499</h3>
      <p className="wa-commerce-plan-p">
        E-Commerce Site: Development of a feature-rich e-commerce platform.
      </p>
      <p className="wa-commerce-plan-p">
        Unlimited Pages: Creation of an extensive web store.
      </p>
      <p className="wa-commerce-plan-p">
        SEO & Marketing: In-depth SEO and online marketing support.
      </p>
      <p className="wa-commerce-plan-p">
        24/7 Support: Round-the-clock assistance for your e-commerce site.
      </p>
      {/* <p className="wa-basic-plan-p">Email Support: Support via email.</p> */}
      <p className="wa-commerce-plan-p">
        The E-Commerce Plan is perfect for businesses wanting a robust online
        store.
      </p>
    </div>
  );

  const webContent = (
    <div style={{ display: "flex", justifyContent: "space-between", gap: 20 }}>
      <Card
        content={waBasicPlan}
        buttonText={"Choose the Basic Plan"}
        buttonPress={() => {}}
      />
      <Card
        content={waBusinessPlan}
        buttonText={"Choose the Business Plan"}
        buttonPress={() => {}}
      />
      <Card
        content={waEcommercePlan}
        buttonText={"Choose the ECommerce Plan"}
        buttonPress={() => {}}
      />
    </div>
  );

  const [content, setContent] = React.useState<React.ReactNode>(webContent);
  return (
    <div>
      <NavBar />
      <div className="main-containerr">
        <div className="service-inner">
          <p className="service-header">Unleash the power of Technology</p>
          <p className="service-p">
            Welcome to my Services page, where I turn your digital visions into
            reality. As a skilled and dedicated software engineer, I offer a
            range of innovative and cutting-edge services that elevate your
            digital presence and drive business success. From crafting seamless
            mobile experiences to building robust web solutions, I am your
            partner in technological excellence. Explore my diverse services and
            let's embark on an extraordinary journey together.
          </p>
        </div>
        <GroupButton
          showBtnOne={true}
          showBtnTwo={true}
          showBtnThree={true}
          pressBtnOne={() => {
            setBtnOneBG("#2e3644");
            setBtnTwoBG("#4D5061");
            setBtnThreeBG("#4D5061");
            setContent(webContent);
          }}
          pressBtnTwo={() => {
            setBtnOneBG("#4D5061");
            setBtnTwoBG("#2e3644");
            setBtnThreeBG("#4D5061");
            setContent(
              <>
                <p style={{ color: "#ffffff" }}>Mobile Content</p>
              </>
            );
          }}
          pressBtnThree={() => {
            setBtnOneBG("#4D5061");
            setBtnTwoBG("#4D5061");
            setBtnThreeBG("#2e3644");
            setContent(
              <>
                <p style={{ color: "#ffffff" }}>Other Services</p>
              </>
            );
          }}
          btnOneText={"Web Applications"}
          btnTwoText={"Mobile Applications"}
          btnThreeText="Other Services"
          btnOneBg={btnOneBG}
          btnTwoBg={btnTwoBG}
          btnThreeBg={btnThreeBG}
        />
        {/* <div className="services-items">
          <ItemService
            headerText={"Custom Software Development"}
            desc={
              "Design and develop bespoke software solutions to meet the unique needs of your business, from web applications to mobile apps."
            }
            headerTextColor={"#E8C547"}
            icon={<AiFillContainer color="#E8C547" width={200} height={200} />}
            onPress={() => alert("Custom Software Development")}
          />
          <ItemService
            headerText={"Front - End Development"}
            desc={
              "Craft intuitive and responsive user interfaces using cutting-edge HTML, CSS, and JavaScript frameworks.."
            }
            headerTextColor={"#E8C547"}
            icon={<AiFillIeSquare color="#E8C547" width={200} height={200} />}
            onPress={() => alert("Custom Software Development")}
          />
          <ItemService
            headerText={"Mobile App Development"}
            desc={
              "Build native or cross-platform mobile applications for Android and iOS, ensuring optimal performance and user experience."
            }
            headerTextColor={"#E8C547"}
            icon={<AiFillAndroid color="#E8C547" width={200} height={200} />}
            onPress={() => alert("Custom Software Development")}
          />
        </div>
        <div className="services-items">
          <ItemService
            headerText={"Web Application Development"}
            desc={
              "Develop interactive and feature-rich web applications that deliver seamless user experiences.."
            }
            headerTextColor={"#479BE8"}
            icon={<AiFillHtml5 color="#479BE8" width={200} height={200} />}
            onPress={() => alert("Custom Software Development")}
          />
          <ItemService
            headerText={"Software Testing & Quality Assurance"}
            desc={
              "Conduct comprehensive testing and quality assurance to identify and fix bugs, ensuring a smooth and reliable user experience."
            }
            headerTextColor={"#479BE8"}
            icon={
              <AiFillSafetyCertificate
                color="#479BE8"
                width={200}
                height={200}
              />
            }
            onPress={() => alert("Custom Software Development")}
          />
          <ItemService
            headerText={"API Integration"}
            desc={
              "Integrate third-party APIs to enhance application functionality and expand its capabilities."
            }
            headerTextColor={"#479BE8"}
            icon={
              <AiFillInteraction color="#479BE8" width={200} height={200} />
            }
            onPress={() => alert("Custom Software Development")}
          />
        </div>
        <div className="services-items">
          <ItemService
            headerText={"Code Review & Refactoring"}
            desc={
              "Review existing codebases to identify areas of improvement and implement refactoring to enhance code quality and maintainability."
            }
            headerTextColor={"#BCC4D1"}
            icon={<AiFillSignal color="#BCC4D1" width={200} height={200} />}
            onPress={() => alert("Custom Software Development")}
          />
          <ItemService
            headerText={"Technical Consulting & Training"}
            desc={
              "Provide expert technical guidance, advice, and training to individuals or teams on software development best practices and technologies."
            }
            headerTextColor={"#BCC4D1"}
            icon={<AiFillHighlight color="#BCC4D1" width={200} height={200} />}
            onPress={() => alert("Custom Software Development")}
          />
          <ItemService
            headerText={"SCRUM Master"}
            desc={
              "Provide expert technical guidance, advice, and training to individuals or teams on software development best practices and technologies."
            }
            headerTextColor={"#BCC4D1"}
            icon={
              <AiFillMinusCircle color="#BCC4D1" width={200} height={200} />
            }
            onPress={() => alert("Custom Software Development")}
          />
        </div> */}
        <div className="services-items">{content}</div>
      </div>
      <Footer />
    </div>
  );
};

export default SoftWareEng;
