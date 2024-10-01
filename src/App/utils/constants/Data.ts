import { Assets } from "./Assets";

const DATA = {
  navLinks: [
    {
      link: "About Me",
      path: "/aboutme",
    },
    {
      link: "Projects",
      path: "/projects",
    },
    {
      link: "Who am I?",
      path: "",
    },
  ],

  dropDownLinks: [
    {
      link: "Software Engineering",
      path: "/software-eng",
    },
    {
      link: "Entrepreneur",
      path: "/entrepreneur",
    },
    {
      link: "Tech Training",
      path: "/tech",
    },
  ],

  projectsHomePage: [
    {
      name: "Knowledge City",
      icon: Assets.images.kkc,
      appDesc: `Knowledge City is more than just an educational platform—it is a
        community where learners from all walks of life can come together to expand their knowledge, build valuable skills, and take control of their personal and professional development. Through innovative technologies, expert-led courses, and a focus on inclusivity and accessibility, Knowledge City is leading the charge in shaping the future of education. Join us and embark on a journey of growth and discovery in the digital age.`,
      responsibility: "",
    },
    {
      name: "D'roid Technologies",
      icon: Assets.images.droid,
    },
    {
      name: "Rapid Transfer",
      icon: Assets.images.rapid_transfer,
    },
    {
      name: "Ecobank Pay",
      icon: Assets.images.eco_bank,
    },
  ],

  testimonials: [
    {
      words: `I have had the pleasure of working with Ekene on
      several projects, and I can confidently say that his expertise
      and dedication are unmatched. From the initial consultation to the
      final delivery, he demonstrated a deep understanding of
      our needs and provided innovative solutions that exceeded our
      expectations. The software he developed for us is robust,
      user-friendly, and has significantly improved our operational
      efficiency. His commitment to quality and customer satisfaction
      is evident in every interaction. I highly recommend Ekene to any 
      organization looking for top-tier technology solutions.`,
      fullName: "Mark Ettan",
      title: "Founder",
      company: "LEADPAC Foundation",
    },
    {
      words: `I have learnt a lot from his leadership skills and his ability to carry others along.`,
      fullName: "Udoh Mfon",
      title: "CEO",
      company: "School of Creativity",
    },
  ],
};

export { DATA };
