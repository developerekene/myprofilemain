import { Assets } from "./Assets";

const DATA = {
  navLinks: [
    {
      link: "About Me",
      path: "/aboutus",
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

  projectsHomePage: [
    {
      name: "Knowledge City",
      icon: Assets.images.kkc,
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
