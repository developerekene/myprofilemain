/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import "../Services/Services.css";
import GroupButton from "../../components/GroupButton/GroupButton";
import Card from "../../components/Card/Card";
import GlobalButton from "../../components/GlobalButton/GlobalButton";

const SoftWareEng: React.FunctionComponent = () => {
  const [btnOneBG, setBtnOneBG] = React.useState<string>("#2e3644");
  const [btnTwoBG, setBtnTwoBG] = React.useState<string>("#4D5061");
  const [btnThreeBG, setBtnThreeBG] = React.useState<string>("#4D5061");

  const [showFirstItems, setShowFirstItems] = React.useState<boolean>(true);
  const [showSecondItems, setShowSecondItems] = React.useState<boolean>(false);

  const [serviceModal, setServiceModal] = React.useState<boolean>(false);

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
    <div className="web-content">
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

  const moStarter = (
    <div className="wa-basic-plan">
      <h3 className="wa-basic-plan-header">Starter Plan</h3>
      <h3 className="wa-basic-plan-amount">£999</h3>
      <p className="wa-basic-plan-p">
        1 Platform: Development for either iOS or Android.
      </p>
      <p className="wa-basic-plan-p">
        Basic UI/UX Design: Clean and functional user interface.
      </p>
      <p className="wa-basic-plan-p">
        Up to 5 Pages: Development for up to 5 app screens.
      </p>
      <p className="wa-basic-plan-p">
        Email Support: Access to our support team via email.
      </p>
      <p className="wa-basic-plan-p">
        The Starter Plan is perfect for small businesses or individuals looking
        to kickstart their mobile app project.
      </p>
    </div>
  );

  const moPro = (
    <div className="wa-business-plan">
      <h3 className="wa-business-plan-header">Pro Plan</h3>
      <h3 className="wa-business-plan-amount">£1,999</h3>
      <p className="wa-business-plan-p">
        2 Platforms: Development for both iOS and Android.
      </p>
      <p className="wa-business-plan-p">
        Custom UI/UX Design: A unique and user-friendly design.
      </p>
      <p className="wa-business-plan-p">
        Up to 10 Pages: Development for up to 10 app pages.
      </p>
      <p className="wa-business-plan-p">
        Priority Support: Fast-track your support requests.
      </p>
      {/* <p className="wa-basic-plan-p">Email Support: Support via email.</p> */}
      <p className="wa-business-plan-p">
        The Pro Plan suits growing businesses seeking a professional and
        feature-rich mobile app.
      </p>
    </div>
  );
  const moEnterprise = (
    <div className="wa-commerce-plan">
      <h3 className="wa-commerce-plan-header">Enterprise Plan</h3>
      <h3 className="wa-commerce-plan-amount">£4,999</h3>
      <p className="wa-commerce-plan-p">
        All Platforms: Development for iOS, Android and Web.
      </p>
      <p className="wa-commerce-plan-p">
        Bespoke UI/UX Design: Tailored design for your brand.
      </p>
      <p className="wa-commerce-plan-p">
        Unlimited Pages: Development for a complete mobile app.
      </p>
      <p className="wa-commerce-plan-p">
        24/7 Support: Round-the-clock support availability.
      </p>
      {/* <p className="wa-basic-plan-p">Email Support: Support via email.</p> */}
      <p className="wa-commerce-plan-p">
        The Enterprise Plan is ideal for large enterprises with advanced mobile
        app requirements.
      </p>
    </div>
  );

  const mobileContent = (
    <div style={{ display: "flex", justifyContent: "space-between", gap: 20 }}>
      <Card
        content={moStarter}
        buttonText={"Choose the Basic Plan"}
        buttonPress={() => {}}
      />
      <Card
        content={moPro}
        buttonText={"Choose the Business Plan"}
        buttonPress={() => {}}
      />
      <Card
        content={moEnterprise}
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
            setContent(mobileContent);
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
        <div className="services-items">{content}</div>
        <div className="services-btn">
          <GlobalButton
            text={"See all Services"}
            bgColor={"#292414"}
            textColor={"#ffffff"}
            onPress={() => {
              alert("This button is working!!!");
            }}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SoftWareEng;
