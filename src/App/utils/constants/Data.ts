import { ProjectType } from "../Types";
import { Assets } from "./Assets";

export const navUl = [
  {
    link: "My Services",
    render: "/services",
  },
  {
    link: "Projects",
    render: "/projects",
  },
  {
    link: "Dev Tools",
    render: "/tools",
  },
  {
    link: "Learning",
    render: "/courses",
  },
  {
    link: "About Me",
    render: "/about",
  },
  // {
  //   link: "Contact",
  //   render: "/contact",
  // },
  // {
  //   link: "More",
  //   render: "/more",
  // },
];

export const coursesFree = [
  {
    title: "Upload React Website to Firebase",
    subTitle:
      "A Step-by-Step Guide to Deploying Your React Website on Firebase",
    objective:
      "The objective of this course is to provide learners with a clear and comprehensive step-by-step guide on deploying their React websites to the Firebase hosting platform. Throughout the tutorial, participants will learn the necessary techniques to configure their projects, set up Firebase hosting, and successfully publish their React websites to make them accessible to a global audience. By the end of the tutorial, learners will have gained the confidence and practical knowledge needed to deploy and share their React projects with the world using Firebase hosting.",
    targetAudience:
      "Beginners in Web Development, Aspiring Web Designers, Content Creators and Bloggers, Marketing Professionals, High School and College Students, Career Changers, Tech Enthusiasts",
    cover: Assets.images.react_cover,
    time: "2h, 38m",
    totalStudents: "207",
    releasedDate: "March, 2023",
  },
  {
    title: "HTML Mastery",
    subTitle: "Building Dynamic Web Pages from Scratch",
    objective:
      "The main objective of this HTML course is to empower learners with the essential knowledge and practical skills to confidently create and structure web pages using HTML. By the end of the course, learners will be able to build well-organized, visually appealing, and responsive web content, laying the foundation for their journey into web development.",
    targetAudience:
      "Beginners in Web Development, Aspiring Web Designers, Entrepreneurs and Small Business Owners, Content Creators and Bloggers, Marketing Professionals, High School and College Students, Career Changers, Tech Enthusiasts",
    cover: Assets.images.html_cover,
    time: "2h, 38m",
    totalStudents: "207",
    releasedDate: "March, 2023",
  },
  {
    title: "CSS from Scratch",
    subTitle: "Creating Stunning Web Designs",
    objective:
      "Creating Stunning Web Designs course is to equip students with a comprehensive understanding of CSS (Cascading Style Sheets) and its role in web design. Through hands-on projects and practical exercises, students will learn to proficiently use CSS to style and layout web pages, enabling them to create visually captivating and responsive websites from the ground up. By the end of the course, students will have gained the skills and confidence needed to apply advanced CSS techniques, enabling them to design and implement engaging user interfaces that enhance the user experience across various devices and screen sizes.",
    targetAudience:
      "Beginners in Web Development, Aspiring Web Designers, Entrepreneurs and Small Business Owners, Content Creators and Bloggers, Marketing Professionals, High School and College Students, Career Changers, Tech Enthusiasts",
    cover: Assets.images.css_cover,
    time: "5h, 19m",
    totalStudents: "112",
    releasedDate: "March, 2023",
  },
  {
    title: "Vs Code",
    subTitle: "Installing, Uses and Guide on the Number One Code Editor",
    objective: "This Video covers the basic for getting and using Vs Code. ",
    targetAudience:
      "Beginners in Web Development, Aspiring Web Designers, Entrepreneurs and Small Business Owners, Content Creators and Bloggers, Marketing Professionals, High School and College Students, Career Changers, Tech Enthusiasts",
    cover: Assets.images.vscode_cover,
    time: "58m",
    totalStudents: "89",
    releasedDate: "April, 2023",
  },
  {
    title: "Inteli J IDE",
    subTitle: "Installing, Uses and Guide using Inteli J",
    objective: "This Video covers the basic for getting and using Inteli J",
    targetAudience:
      "Beginners in Web Development, Aspiring Web Designers, Entrepreneurs and Small Business Owners, Content Creators and Bloggers, Marketing Professionals, High School and College Students, Career Changers, Tech Enthusiasts",
    cover: Assets.images.intelliJ_cover,
    time: "1h, 8m",
    totalStudents: "23",
    releasedDate: "April, 2023",
  },
];

export const coursesPaid = [
  {
    title: "Javascript 101",
    subTitle: "Unleashing your Superpower in data manipulation.",
    objective:
      "Javascript 101 course is to provide students with a comprehensive understanding of JavaScript, empowering them to become proficient web developers capable of creating dynamic and interactive web applications. Throughout the course, students will learn essential JavaScript concepts, including variables, functions, DOM manipulation, and event handling. By the end of the course, students will have gained the skills and confidence needed to leverage JavaScript to build modern, responsive, and engaging web experiences, making them well-equipped to pursue a successful career in front-end web development.",
    targetAudience:
      "Beginners in Web Development, Aspiring Web Designers, Entrepreneurs and Small Business Owners, Content Creators and Bloggers, Marketing Professionals, High School and College Students, Career Changers, Tech Enthusiasts",
    cover: Assets.images.jsbasic_cover,
    time: "3h, 12m",
    totalStudents: "127",
    releasedDate: "June, 2023",
  },
  {
    title: "Javascript +",
    subTitle: "Taking your Data manipulation to a Kage level.",
    objective:
      "course is to take students beyond the fundamentals of JavaScript and elevate their skills to an advanced level. Through hands-on projects and in-depth learning, students will delve into complex JavaScript concepts, such as asynchronous programming, ES6 features, functional programming, and working with APIs. By the end of the course, students will have gained a deeper understanding of JavaScript's powerful capabilities and will be equipped to build sophisticated web applications, implement cutting-edge features, and pursue advanced development roles with confidence.",
    targetAudience:
      "Beginners in Web Development, Aspiring Web Designers, Entrepreneurs and Small Business Owners, Content Creators and Bloggers, Marketing Professionals, High School and College Students, Career Changers, Tech Enthusiasts",
    cover: Assets.images.jsplus_cover,
    time: "5h, 33m",
    totalStudents: "138",
    releasedDate: "July, 2023",
  },
  // {
  //   title: "Vs Code",
  //   subTitle: "Installing, Uses and Guide on the Number One Code Editor",
  //   objective: "This Video covers the basic for getting and using Vs Code. ",
  //   targetAudience: "Beginners in Web Development, Aspiring Web Designers, Entrepreneurs and Small Business Owners, Content Creators and Bloggers, Marketing Professionals, High School and College Students, Career Changers, Tech Enthusiasts",
  //   cover: Assets.images.vscode_cover,
  //   time: "58m",
  //   totalStudents: "89"
  // },
  // {
  //   title: "Inteli J IDE",
  //   subTitle: "Installing, Uses and Guide using Inteli J",
  //   objective: "This Video covers the basic for getting and using Inteli J",
  //   targetAudience: "Beginners in Web Development, Aspiring Web Designers, Entrepreneurs and Small Business Owners, Content Creators and Bloggers, Marketing Professionals, High School and College Students, Career Changers, Tech Enthusiasts",
  //   cover: Assets.images.intelliJ_cover,
  //   time: "1h, 8m",
  //   totalStudents: "23"
  // },
];

export const textData = {
  more: {
    mainHeader: "Beyond the Code: Unveiling the Person Behind the Projects",
    mainHeaderPone:
      "Take a glimpse into the multifaceted world beyond the lines of code. Here, I invite you to join me on a journey that goes beyond my professional endeavors, delving into the passions, inspirations, and adventures that shape who I am.",
    mainHeaderPtwo:
      "From my outdoor escapades that invigorate my spirit to the books that fuel my imagination, this page celebrates the tapestry of experiences that make me a well-rounded individual. I'm more than a software engineer; I'm an explorer, a learner, and a dreamer.",
    mainHeaderPthree:
      "In this digital sanctuary, we'll unravel the stories and interests that define my character, finding common ground and shared passions. Join me as we go beyond the code and embark on an odyssey of growth, curiosity, and human connection. Let's connect on a deeper level, and together, celebrate the essence of being human in a world of technology.",
  },
};

export const PROJECTS: ProjectType[] = [
  {
    icon: Assets.images.rTransfer,
    title: "Single Rapid Transfer App",
    header: "Lead Software Engineer",
    company: "E - Process Nigeria",
    date: "Mar 2023 - Nov 2023 | Full Time",
    aboutApp: `Rapid Transfer is a fintech mobile app that simplifies global money management. It empowers users to navigate international transactions with ease and confidence, instantly transferring funds to friends, family, or business partners anywhere in the world, even in a different currency. \n Rapid Transfer ensures swift and secure cross-border transactions, eliminating high fees and delays.`,
    jobDescriptionTitle: `As a Software Engineer Lead working on Rapid Transfer App, I was responsible for:`,
    jobDescription: [
      "Delegating tasks to team members",
      "Executing the full software development lifecycle",
      "Helping team members fix issues",
      "Assigning tasks in Jira",
      "Organizing work and setting up the initial app",
      "Developing flowcharts, layouts, and documentation to identify requirements and solutions",
      "Writing well-designed, testable code",
      "Communicating goals to team members",
      "Producing specifications and determining operational feasibility",
      "Integrating software components into a fully functional system",
      "Reporting progress to project supervisors",
      "Developing software verification plans and quality assurance procedures",
      "Nurturing team members' strengths and identifying areas for improvement",
    ],
    techTitle: "Technologies:",
    techUsed: [
      "React Native",
      "Typescript",
      "Redux / Redux Toolkit",
      "Git / Gitlab",
      "Jira",
      "Android Studio / Emulator",
      "Xcode and Simlator",
      "VS-Code",
    ],
  },
  {
    icon: Assets.images.ecobank_pay,
    title: "EcoBank Pay",
    header: "Mobile Engineer",
    company: "E - Process Nigeria",
    date: "Jan 2023 - Mar 2023 | Full Time",
    aboutApp: `EcobankPay is a cutting-edge fintech mobile application designed to simplify local money transfers with speed, security, and convenience. Tailored for seamless transactions within the same currency and country, EcobankPay empowers you to effortlessly send, receive, and schedule payments with just a few taps. Say goodbye to cash transactions and delays. EcobankPay enables instant, hassle-free money transfers to friends, family, or business associates within the same country and currency. Enjoy the ease of splitting bills, sharing expenses, and sending gifts effortlessly.`,
    jobDescriptionTitle: `As a Mobile Engineer working on EcoBank Pay, I was responsible for:`,
    jobDescription: [
      "Developed new user-facing features for our cross-platform mobile app",
      "Collaborated with Product and Design to create a seamless user experience",
      "Contributed to the architecture, development, and maintenance of our mobile app",
      "Built reusable code and libraries for future use",
      "Leveraged native APIs for deep integrations with both platforms",
      "Ensured the technical feasibility of UI/UX designs",
    ],
    techTitle: "Technologies:",
    techUsed: [
      "React Native",
      "Typescript",
      "Redux / Redux Toolkit",
      "Git / Gitlab",
      "Jira",
      "Android Studio / Emulator",
      "Xcode and Simlator",
      "VS-Code",
    ],
  },
  {
    icon: Assets.images.kc,
    title: "Knowledge City Inc",
    header: "Mobile Engineer",
    company: "Knowledge City Inc",
    date: "Feb 2022 - Ongoing | Contract",
    aboutApp: `KnowledgeCity is an innovative E-learning mobile app that unlocks a world of learning and exploration at your fingertips. With a wealth of features designed to enrich your mind and open doors to new opportunities, KnowledgeCity is your go-to platform for personal and professional growth. Enhance your skills with a vast selection of online courses covering a diverse range of subjects. Whether you're a lifelong learner or pursuing career advancement, KnowledgeCity's comprehensive course catalog caters to all levels and interests.`,
    jobDescriptionTitle: `As a Mobile Engineer working on Knowledge City App, I was responsible for:`,
    jobDescription: [
      "Delegating task to team members",
      "Executing the full software development lifecycle",
      "Helping team members fix issues",
      "Assigning tasks in Jira",
      "Organizing work and setting up the initial app",
      "Developing flowcharts, layouts, and documentation to identify requirements and solutions",
      "Writing well-designed, testable code",
      "Communicating goals to team members",
      "Producing specifications and determining operational feasibility",
      "Integrating software components into a fully functional system",
      "Reporting progress to project supervisors",
      "Developing software verification plans and quality assurance procedures",
      "Nurturing team members' strengths and identifying areas for improvement",
    ],
    techTitle: "Technologies:",
    techUsed: [
      "React Native",
      "Typescript",
      "Redux / Redux Toolkit",
      "Git / Gitlab",
      "Jira",
      "Android Studio / Emulator",
      "Xcode and Simlator",
      "VS-Code",
      "Firebase",
    ],
  },
  {
    icon: Assets.images.access,
    title: "African Fintech Foundary",
    header: "Mobile Engineer",
    company: "E - Process Nigeria",
    date: "May 2022 - Dec 2022 | Full Time",
    aboutApp: `AccessHomes is a revolutionary mobile app that puts the world of real estate at your fingertips. Seamlessly search for your dream home, explore property options, and connect with sellers, all from the comfort of your own space, no matter where you are in the world. Embark on a global property hunt from the convenience of your smartphone. Whether you're across the street or across the globe, AccessHomes empowers you to explore a wide range of houses and lands in different locations.`,
    jobDescriptionTitle: `As a Mobile Engineer working on EcoBank Pay, I was responsible for:`,
    jobDescription: [
      "Developed new user-facing features for our cross-platform mobile app",
      "Collaborated with Product and Design to create a seamless user experience",
      "Contributed to the architecture, development, and maintenance of our mobile app",
      "Built reusable code and libraries for future use",
      "Leveraged native APIs for deep integrations with both platforms",
      "Ensured the technical feasibility of UI/UX designs",
    ],
    techTitle: "Technologies:",
    techUsed: [
      "React Native",
      "Typescript",
      "Redux / Redux Toolkit",
      "Git / Gitlab",
      "Jira",
      "Android Studio / Emulator",
      "Xcode and Simlator",
      "VS-Code",
    ],
  },
  {
    icon: Assets.images.nav_logo,
    title: "Ekenedilichkw Portfolio",
    header: "Front-End Engineer",
    company: "",
    date: "Jun 2021 - Dec 2023 | Personal Project",
    aboutApp: `Welcome to my digital haven! Explore the tapestry of my professional journey, from crafting immersive mobile experiences to shaping dynamic web projects. This portfolio is a testament to a life dedicated to innovation, collaboration, and continuous learning. Join me in this visual odyssey of projects, trainings, and tech adventures. May you leave inspired, happy, and motivated to embark on your own creative endeavors.`,
    jobDescriptionTitle: `As a Front - End Engineer working on my Portfolio, I was responsible for:`,
    jobDescription: [
      "Developed new user-facing features for the web app",
      "Collaborated with Design personal to create a seamless user experience",
      "Contributed to the architecture, development, and maintenance of the app",
      "Built reusable code for future use",
      "Leveraged native APIs for deep integrations",
      "Ensured the technical feasibility of UI/UX designs",
      "Setup React Router",
    ],
    techTitle: "Technologies:",
    techUsed: [
      "React Js",
      "Typescript",
      "Redux / Redux Toolkit",
      "Git",
      "VS-Code",
      "Google's FireBase",
    ],
  },
];
