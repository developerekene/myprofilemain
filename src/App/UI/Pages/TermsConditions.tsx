import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const TermsConditions: React.FC = () => {
  return (
    <div className="bg-white min-h-screen px-4 md:px-16 py-10">

      {/* Header */}
      <div className="mb-10">
        <a
          href="/"
          className="flex items-center text-blue-900 font-bold hover:text-blue-700 transition"
        >
          <FaArrowLeft className="mr-2" /> Back to Home
        </a>
      </div>

      {/* Title */}
      <div className="mb-10">
        <h1 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-4">
          Terms & Conditions
        </h1>
        <p className="text-gray-600">
          By accessing this website, you agree to the following terms and
          conditions.
        </p>
      </div>

      {/* Sections */}
      <div className="space-y-8 text-gray-700 leading-relaxed">

        <section>
          <h2 className="text-xl font-bold text-black mb-2">
            1. Use of Website
          </h2>
          <p>
            This website is intended for informational and professional purposes.
            You agree not to misuse or exploit any content.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-black mb-2">
            2. Intellectual Property
          </h2>
          <p>
            All content, including text, images, and code, is the property of the
            site owner unless otherwise stated. Unauthorized use is prohibited.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-black mb-2">
            3. Limitation of Liability
          </h2>
          <p>
            We are not liable for any damages resulting from the use or inability
            to use this website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-black mb-2">
            4. External Links
          </h2>
          <p>
            This website may contain links to external sites. We are not
            responsible for their content or practices.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-black mb-2">
            5. Modifications
          </h2>
          <p>
            We reserve the right to modify these terms at any time. Continued use
            of the site indicates acceptance of updated terms.
          </p>
        </section>

      </div>

      <div className="h-20" />
    </div>
  );
};

export default TermsConditions;