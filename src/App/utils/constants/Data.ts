import { ProjectType, articleType, coursesFreeType, fontType } from "../Types";
import { Assets } from "./Assets";

export const LINKS = {
  github: `https://github.com/developerekene`,
  linkedIn: `https://www.linkedin.com/in/ekenedilichukwu-okoli-7615591b5/`,
  twitter: `https://twitter.com/developer_ekene`,
};

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

export const coursesFree: coursesFreeType[] = [
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

export const ARTICLES: articleType[] = [
  {
    image: "",
    title: "Creating a React.js Project: A Step-by-Step Guide",
    intro:
      "React.js has become a powerhouse for building modern, dynamic web applications. In this guide, we'll walk through the steps to create a new React.js project, from setting up your development environment to creating your first components. Before diving in, ensure that you have Node.js and npm (Node Package Manager) installed on your machine. You can download them from nodejs.org.",
    body: [
      {
        innerTitle: "Step 1: Set Up Your Development Environment",
        desc: "Open your terminal or command prompt. Install Create React App globally by running the following command below. This will create a new React app named my-react-app.",
        eg: `npx create-react-app my-react-app`,
      },
      {
        innerTitle: "Step 2: Navigate to Your Project",
        desc: "Change into your project directory",
        eg: `cd my-react-app`,
      },
      {
        innerTitle: "Step 3: Start the Development Server",
        desc: "Start the development server with",
        eg: `npm start`,
      },
      {
        innerTitle: "Step 4: Explore the Project Structure",
        desc: "Open the project in your preferred code editor, Explore the project structure. Key folders include...",
        eg: `src: Contains your source code, public: Contains static assets and the HTML file`,
      },
      {
        innerTitle: "Step 5: Create Your First React Component",
        desc: "Navigate to the src folder, Open the App.js file and modify it to create your component:",
        eg: ``,
      },
      {
        innerTitle: "Responsive Design",
        desc: "HTML plays a pivotal role in building responsive web pages. Utilizing CSS media queries alongside flexible layouts ensures that content adapts seamlessly to various screen sizes.",
        eg: `import React from 'react';

        function App() {
          return (
            <div>
              <h1>Hello, React!</h1>
            </div>
          );
        }
        
        export default App;`,
      },
      {
        innerTitle: "Conclusion",
        desc: "Congratulations! You've successfully created a new React.js project and built your first component. From here, you can start building more complex applications by adding components, managing state, and integrating with external APIs.",
        eg: ``,
      },
    ],
  },
  {
    image: "",
    title: "A Deep Dive into HTML",
    intro:
      "HTML, or HyperText Markup Language, is the backbone of web development. It provides the structural foundation for creating content on the World Wide Web. In this deep dive, we'll explore the core concepts, elements, and best practices that make HTML an essential language for every web developer",
    body: [
      {
        innerTitle: "Elements and Tags",
        desc: "At its core, HTML consists of elements, each represented by tags. Tags define the structure and semantics of content. Understanding the distinction between block and inline elements is crucial for creating well-organized and visually appealing web pages.",
        eg: `
          <div>This is a block element</div>
          <span>This is an inline element</span>
          `,
      },
      {
        innerTitle: "Document Structure",
        desc: "HTML documents follow a hierarchical structure. The <html>, <head>, and <body> tags define the essential sections of an HTML document. This structure provides a framework for organizing content and specifying metadata.",
        eg: `<!DOCTYPE html>
          <html>
          <head>
            <title>Document Title</title>
          </head>
          <body>
            <!-- Content Goes Here -->
          </body>
          </html>`,
      },
      {
        innerTitle: "HTML5 Features",
        desc: "HTML5 introduced a range of new features and APIs, enhancing the capabilities of web development. These include semantic elements like <article>, <section>, and <nav>, which contribute to better document structure and accessibility.",
        eg: `
        <article>
          <h1>Article Title</h1>
          <p>Article Content Goes Here</p>
        </article>`,
      },
      {
        innerTitle: "Forms and Multimedia",
        desc: "HTML facilitates user interaction through forms and supports multimedia elements. The <form> tag, along with input types, allows the creation of interactive user interfaces. Meanwhile, multimedia elements like <audio> and <video> enrich the content with dynamic media.",
        eg: `
        <form>
          <label for="username">Username:</label>
          <input type="text" id="username" name="username">
          <button type="submit">Submit</button>
        </form>
        
        <audio controls>
          <source src="audio.mp3" type="audio/mp3">
          Your browser does not support the audio tag.
        </audio>
        `,
      },
      {
        innerTitle: "Accessibility",
        desc: "Creating accessible content is a fundamental responsibility. Proper use of semantic elements, providing alternative text for images, and ensuring keyboard navigation are vital for an inclusive web experience.",
        eg: ``,
      },
      {
        innerTitle: "Responsive Design",
        desc: "HTML plays a pivotal role in building responsive web pages. Utilizing CSS media queries alongside flexible layouts ensures that content adapts seamlessly to various screen sizes.",
        eg: ``,
      },
      {
        innerTitle: "Conclusion",
        desc: "In this deep dive, we've scratched the surface of HTML's vast capabilities. From document structure to multimedia integration, HTML remains a cornerstone of web development. Embracing its features and adhering to best practices empowers developers to create engaging and accessible digital experiences",
        eg: ``,
      },
    ],
  },
  {
    image: "",
    title: "Going into Programming? Here are the Basic Things You Need to Know",
    intro:
      "Embarking on a journey into the world of programming is an exciting endeavor. Whether you're driven by a passion for technology, the desire to solve problems, or the appeal of creating something from scratch, programming offers a vast and rewarding landscape. In this guide, we'll cover the fundamental concepts and essential knowledge you need to kickstart your programming journey",
    body: [
      {
        innerTitle: "1. Programming Languages",
        desc: "Definition: Programming languages are formal systems designed to instruct computers. They encompass a set of rules and syntax for creating software, Key Languages: Start with beginner-friendly languages like Python or JavaScript.",
        eg: ``,
      },
      {
        innerTitle: "2. Algorithms and Logic",
        desc: "Definition: Algorithms are step-by-step procedures or formulas for solving problems. Logic involves the reasoning and decision-making process, Importance: Algorithms form the backbone of programming, enabling efficient problem-solving",
        eg: ``,
      },
      {
        innerTitle: "3. Data Structures",
        desc: "Definition: Data structures organize and store data for efficient retrieval and modification, Examples: Arrays, linked lists, stacks, and queues.",
        eg: ``,
      },
      {
        innerTitle: "4. Version Control Systems",
        desc: "Definition: Version control systems like Git help track changes in your code, facilitating collaboration and code management.",
        eg: ``,
      },
      {
        innerTitle: "5. Integrated Development Environments (IDEs)",
        desc: "Definition: IDEs provide a comprehensive environment for coding, debugging, and testing, Popular IDEs: Visual Studio Code, PyCharm, IntelliJ IDEA.",
        eg: ``,
      },
      {
        innerTitle: "6. Command Line Interface (CLI)",
        desc: "Definition: The CLI allows users to interact with the computer by typing commands. Proficiency in the CLI enhances developer efficiency.",
        eg: ``,
      },
      {
        innerTitle: "7. Understanding Web Technologies",
        desc: "HTML and CSS: Basics of web development, JavaScript: Core language for web interactivity.",
        eg: ``,
      },
      {
        innerTitle: "8. Variables and Data Types",
        desc: "Variables: Containers for storing data, Data Types: Define the type of data a variable can hold (e.g., string, integer, boolean)",
        eg: ``,
      },
      {
        innerTitle: "9. Control Flow",
        desc: "Conditional Statements: Execute different code based on conditions, Loops: Repeat a set of instructions until a certain condition is met.",
        eg: ``,
      },
      {
        innerTitle: "10. Functions",
        desc: "Definition: Functions are blocks of reusable code. They enhance code modularity and maintainability.",
        eg: ``,
      },
      {
        innerTitle: "11. Next Steps",
        desc: "Online Resources: Utilize platforms like this one you are on, Codecademy, freeCodeCamp, and Khan Academy for interactive learning, Practice: Apply your knowledge by working on small projects. GitHub is an excellent platform to showcase your work, Community Engagement: Join coding communities, attend meetups, and participate in forums to learn from others and seek guidance.",
        eg: ``,
      },
      {
        innerTitle: "Conclusion",
        desc: "Entering the programming world can be both challenging and immensely rewarding. By mastering these foundational concepts and tools, you'll be well-equipped to navigate the exciting and ever-evolving landscape of programming.",
        eg: ``,
      },
    ],
  },
];

export const FONTS: fontType[] = [
  {
    title: "Rammetto",
    about: `Rammetto is a typeface based on the Stephenson Blake uppercase display font, Basuto, released in 1926. The Rammetto design refines some of the old font's forms, introduces a full set of lowercase characters and adds extended support for European languages.`,
    font: `@import url("https://fonts.googleapis.com/css?family=Rammetto One")`,
    ownedBy: `Owned by Google`,
  },
  {
    title: "Playpen Sans",
    about: `Playpen Sans is one of the font families produced by TypeTogether after more than two years of primary research into handwriting education for Latin-based languages. It has seven automatic alternates for each character and a built-in shuffler that both ensures variation and avoids repetitive shapes in close proximity.`,
    font: `@import url("https://fonts.googleapis.com/css?family=Playpen Sans")`,
    ownedBy: `Owned by Google`,
  },
  {
    title: "Mazzard",
    about: `Mazzard is a sans serif font collection published by Pepper Type. Mazzard is a superfamily of three geometric grotesques with three different x-heights. It features rich language support including Cyrillic, and offers a wide variety of alternate forms to choose from..`,
    font: `@import url("https://db.onlinewebfonts.com/c/eb5b5ee332420add9a40ee988cb6ac37?family=MazzardH-Regular")`,
    ownedBy: `Owned by Pepper Type`,
  },
];

export const COLORS = [
  {
    name: "Black",
    hexCode: "#000000",
    rgb: "rgb(0, 0, 0)",
  },
  {
    name: "Charcoal",
    hexCode: "#36454F",
    rgb: "rgb(54, 69, 79)",
  },
  {
    name: "Dark Green",
    hexCode: "#023020",
    rgb: "rgb(2, 48, 32)",
  },
  {
    name: "Dark Purple",
    hexCode: "#301934",
    rgb: "rgb(48, 25, 52)",
  },
  {
    name: "Jet Black",
    hexCode: "#343434",
    rgb: "rgb(52, 52, 52)",
  },
];
