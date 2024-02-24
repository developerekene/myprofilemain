import React from "react";
import "../Privacy/Privacy.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

const Privacy: React.FunctionComponent = () => {
  return (
    <>
      <NavBar />
      <div className="privacy-container">
        <div>
          <p className="privacy-header">Privacy Policy</p>
          <p className="privacy-subtitle">
            We are committed to safeguarding your privacy. This Privacy Policy
            describes how we collect, use, disclose, and protect your personal
            information. By using this website www.ekenedilichukwu.com or our
            services, you consent to the practices described in this policy.
          </p>
          <p className="privacy-title">Information We Collect</p>
          <p className="privacy-p">
            We use your information to provide, maintain, and improve our
            services, including delivering the content you request and enhancing
            user experiences. We may also use your contact information to send
            you updates, newsletters, or respond to your inquiries.
            Additionally, we use data for analytics and research to understand
            how our services are used and to identify trends that can help us
            improve.
          </p>
          <p className="privacy-title">How We Use Your Information</p>
          <p className="privacy-p">
            We use your information to provide, maintain, and improve our
            services, including delivering the content you request and enhancing
            user experiences. We may also use your contact information to send
            you updates, newsletters, or respond to your inquiries.
            Additionally, we use data for analytics and research to understand
            how our services are used and to identify trends that can help us
            improve.
          </p>
          <p className="privacy-title">Sharing Your Information</p>
          <p className="privacy-p">
            We do not share your personal information with third parties unless
            required by law or to protect our rights.
          </p>
          <p className="privacy-title">Cookies and Similar Technologies</p>
          <p className="privacy-p">
            We use cookies and similar technologies to collect information about
            your interactions with our services. You can manage cookie
            preferences through your browser settings.
          </p>
          <p className="privacy-title">Your Choices</p>
          <p className="privacy-p">
            You may have the right to access, correct, or delete your personal
            information.
          </p>
          <p className="privacy-title">Security</p>
          <p className="privacy-p">
            We take reasonable measures to protect your information from
            unauthorized access, disclosure, or alteration. However, no data
            transmission over the internet or stored on a server can be
            guaranteed to be 100% secure
          </p>
          <p className="privacy-title">Changes to This Policy</p>
          <p className="privacy-p">
            We may update this Privacy Policy to reflect changes to our
            information practices. We will notify you of significant changes
            through our website or other means.
          </p>
          <p className="privacy-title">Contact Us</p>
          <p className="privacy-p">
            If you have questions or concerns about this Privacy Policy, please
            contact us at 07068815984.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Privacy;
