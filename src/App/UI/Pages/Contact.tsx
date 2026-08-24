import type React from "react";
import { useState } from "react";
import FloatingTechLogos from "../Components/FloatingTechLogos";
import PageTransition from "../Components/PageTransition";
import styles from "../Styles/contact.module.css";
import FloatingTechLogosA from "../Components/FloatingTechLogosA";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log("Form submitted:", formData);

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => {
        setSubmitStatus(null);
        setShowForm(false);
      }, 3000);
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setSubmitStatus(null);
  };

  const calendlyUrl = "https://calendly.com/droidtechint";

  return (
    <>
      <FloatingTechLogosA />
      <PageTransition>
        <div className={styles.contactContainer}>
          <div className={styles.contactContent}>
            <div className={styles.header}>
              <h1 className={styles.title}>Let's Work Together</h1>
              <p className={styles.subtitle}>
                Ready to bring your ideas to life? Get in touch and let's
                discuss how we can collaborate on your next project.
              </p>
            </div>

            {!showForm ? (
              <>
                <div className={styles.buttonContainer}>
                  <button
                    className={styles.primaryButton}
                    onClick={() => setShowForm(true)}
                  >
                    <span>💬</span>
                    Send Message
                  </button>
                  <a
                    href={calendlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.secondaryButton}
                  >
                    <span>📅</span>
                    Schedule Meeting
                  </a>
                </div>

                <div className={styles.contactInfo}>
                  <h3 className={styles.contactInfoTitle}>
                    Other Ways to Connect
                  </h3>
                  <div className={styles.contactMethods}>
                    <div className={styles.contactMethod}>
                      <span className={styles.contactIcon}>📧</span>
                      {/* <span>seniordevekene@gmail.com</span> */}
                    </div>
                    <div className={styles.contactMethod}>
                      <span className={styles.contactIcon}>📱</span>
                      {/* <span>+44 (0)7778745043</span> */}
                    </div>
                    <div className={styles.contactMethod}>
                      <span className={styles.contactIcon}>📍</span>
                      <span> Lincolnshire UK</span>
                    </div>
                  </div>

                  <div className={styles.socialLinks}>
                    <a
                      href="https://linkedin.com/in/yourprofile"
                      className={styles.socialLink}
                      title="LinkedIn"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a
                      href="https://github.com/yourusername"
                      className={styles.socialLink}
                      title="GitHub"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>

                    <a
                      href="https://instagram.com/yourusername"
                      className={styles.socialLink}
                      title="Instagram"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M18.154 2H21.5L14.327 10.04L22.825 22H16.418L11.111 14.979L5.036 22H1.684L9.317 13.39L1.125 2H7.704L12.51 8.466L18.154 2ZM17.006 20H18.839L7.09 3.939H5.122L17.006 20Z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </>
            ) : (
              <div className={styles.formContainer}>
                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={styles.input}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={styles.input}
                      placeholder="Enter your email address"
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="subject" className={styles.label}>
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={styles.input}
                      placeholder="What's this about?"
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.label}>
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className={styles.textarea}
                      placeholder="Tell me about your project or how I can help you..."
                      rows={5}
                      required
                    />
                  </div>

                  <div className={styles.formActions}>
                    <button
                      type="submit"
                      className={styles.submitButton}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className={styles.loading}></span>
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                    <button
                      type="button"
                      className={styles.cancelButton}
                      onClick={handleCancel}
                    >
                      Cancel
                    </button>
                  </div>
                </form>

                {submitStatus === "success" && (
                  <div className={styles.successMessage}>
                    <strong>Message sent successfully!</strong>
                    <br />
                    Thank you for reaching out. I'll get back to you within 24
                    hours.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className={styles.errorMessage}>
                    <strong>Oops! Something went wrong.</strong>
                    <br />
                    Please try again or contact me directly via email.
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </PageTransition>
    </>
  );
};

export default Contact;
