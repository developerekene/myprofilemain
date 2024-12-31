import { ArticlePostType, LibraryType } from "../Types";
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
    {
      link: "Library",
      path: "/library",
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
      name: "Knowledge City Website",
      icon: Assets.images.kkc,
      appDesc: `Knowledge City is more than just an educational platform—it is a
        community where learners from all walks of life can come together to expand 
        their knowledge, build valuable skills, and take control of their personal 
        and professional development. Through innovative technologies, expert-led courses, 
        and a focus on inclusivity and accessibility, Knowledge City is leading the charge 
        in shaping the future of education. Join us and embark on a journey of growth and
         discovery in the digital age.`,
      responsibility: `
        Delegating tasks to team members,
        Executing the full software development lifecycle,
        Helping team members fix issues,
        Assigning tasks in Github Projects,
        Organizing work and setting up the initial app Developing flowcharts,
        Guiding layouts and documentation requirements and solutions Writing well-designed testable code,
        Communicating goals to team members,
        Producing specifications and determining operational feasibility,
        Integrating software components into a fully functional system,
        Developing software verification plans and quality assurance procedures,
        Nurturing team members' strengths and identifying areas for improvement,
      `,
      link: ``,
      technologies: `
        React Native,
        Typescript,
        Redux / Redux Toolkit,
        Git / Gitlab,
        Jira,
        Android Studio / Emulator,
        Xcode and Simlator,
        VS-Code,
      `,
      category: `Front-End Projects`,
    },
    {
      name: "D'roid Technologies Website",
      icon: Assets.images.droid,
      appDesc: `D'roid Technologies is a forward-thinking, product-led company specializing 
      in offering innovative tech solutions that cater to the needs of businesses and 
      individuals in today’s rapidly evolving digital world. Established with a vision 
      to empower enterprises and individuals alike, D'roid Technologies focuses on delivering 
      high-quality mobile and web development services, alongside providing exceptional user 
      experiences through modern software solutions.`,
      responsibility: `
        Delegating tasks to team members,
        Executing the full software development lifecycle,
        Helping team members fix issues,
        Assigning tasks in Github Projects,
        Organizing work and setting up the initial app Developing flowcharts,
        Guiding layouts and documentation requirements and solutions Writing well-designed testable code,
        Communicating goals to team members,
        Producing specifications and determining operational feasibility,
        Integrating software components into a fully functional system,
        Developing software verification plans and quality assurance procedures,
        Nurturing team members' strengths and identifying areas for improvement,
      `,
      link: ``,
      technologies: `
        React Native,
        Typescript,
        Redux / Redux Toolkit,
        Git / Gitlab,
        Jira,
        Android Studio / Emulator,
        Xcode and Simlator,
        VS-Code,
      `,
      category: `Front-End Projects`,
    },
    {
      name: "Rapid Transfer Mobile",
      appDesc: `Rapidtransfer is a mobile application that allows individuals to remit monies to beneficiaries in any of the thirty-three (33) African countries where Ecobank operates through a payment card for funding`,
      icon: Assets.images.rapid_transfer,
      responsibility: `
        Delegating tasks to team members,
        Executing the full software development lifecycle,
        Helping team members fix issues,
        Assigning tasks in Github Projects,
        Organizing work and setting up the initial app Developing flowcharts,
        Guiding layouts and documentation requirements and solutions Writing well-designed testable code,
        Communicating goals to team members,
        Producing specifications and determining operational feasibility,
        Integrating software components into a fully functional system,
        Developing software verification plans and quality assurance procedures,
        Nurturing team members' strengths and identifying areas for improvement,
      `,
      link: ``,
      technologies: `
        React Native,
        Typescript,
        Redux / Redux Toolkit,
        Git / Gitlab,
        Jira,
        Android Studio / Emulator,
        Xcode and Simlator,
        VS-Code,
      `,
      category: `Mobile App Projects`,
    },
    {
      name: "Ecobank Pay Mobile",
      icon: Assets.images.eco_bank,
      appDesc: `The Ecobank Pay app is a payment management tool for merchants that aims to streamline the payment process.`,
      responsibility: `
         Delegating tasks to team members,
         Executing the full software development lifecycle,
         Helping team members fix issues,
         Assigning tasks in Github Projects,
         Organizing work and setting up the initial app Developing flowcharts,
         Guiding layouts and documentation requirements and solutions Writing well-designed testable code,
         Communicating goals to team members,
         Producing specifications and determining operational feasibility,
         Integrating software components into a fully functional system,
         Developing software verification plans and quality assurance procedures,
         Nurturing team members' strengths and identifying areas for improvement,
       `,
      link: ``,
      technologies: `
         React Native,
         Typescript,
         Redux / Redux Toolkit,
         Git / Gitlab,
         Jira,
         Android Studio / Emulator,
         Xcode and Simlator,
         VS-Code,
       `,
      category: `Mobile App Projects`,
    },
    {
      name: "Ecobank Website",
      icon: Assets.images.eco_logo,
      appDesc: `Ecobank, whose official name is Ecobank Transnational Inc. (ETI), is a pan-African banking conglomerate, with banking operations in 33 African countries. It is the leading independent regional banking group in West Africa and Central Africa, serving wholesale and retail customers`,
      responsibility: `
         Delegating tasks to team members,
         Executing the full software development lifecycle,
         Helping team members fix issues,
         Assigning tasks in Github Projects,
         Organizing work and setting up the initial app Developing flowcharts,
         Guiding layouts and documentation requirements and solutions Writing well-designed testable code,
         Communicating goals to team members,
         Producing specifications and determining operational feasibility,
         Integrating software components into a fully functional system,
         Developing software verification plans and quality assurance procedures,
         Nurturing team members' strengths and identifying areas for improvement,
       `,
      technologies: `
         React Native,
         Typescript,
         Redux / Redux Toolkit,
         Git / Gitlab,
         Jira,
         Android Studio / Emulator,
         Xcode and Simlator,
         VS-Code,
       `,
      link: `https://ecobank.com`,
      category: `Front-End Projects`,
    },
    {
      name: "E-Process Website",
      icon: Assets.images.e_process,
      appDesc: `We bring to the table deep industry experience and a track record of consistently surpassing customer expectations, as we collaborate with clients to solve their most pressing challenges from strategy through execution.`,
      responsibility: `
         Delegating tasks to team members,
         Executing the full software development lifecycle,
         Helping team members fix issues,
         Assigning tasks in Github Projects,
         Organizing work and setting up the initial app Developing flowcharts,
         Guiding layouts and documentation requirements and solutions Writing well-designed testable code,
         Communicating goals to team members,
         Producing specifications and determining operational feasibility,
         Integrating software components into a fully functional system,
         Developing software verification plans and quality assurance procedures,
         Nurturing team members' strengths and identifying areas for improvement,
       `,
      technologies: `
         React Native,
         Typescript,
         Redux / Redux Toolkit,
         Git / Gitlab,
         Jira,
         Android Studio / Emulator,
         Xcode and Simlator,
         VS-Code,
       `,
      link: `https://eprocessconsulting.com/`,
      category: `Front-End Projects`,
    },
    {
      name: "D'roid Carousel",
      icon: Assets.images.npm_pic,
      appDesc: `The Carousel component is a customizable React component that creates a responsive and interactive image slider. It's built with TypeScript and styled-components, providing a smooth sliding experience with navigation controls and indicators.`,
      responsibility: `
         Delegating tasks to team members,
         Executing the full software development lifecycle,
         Helping team members fix issues,
         Assigning tasks in Github Projects,
         Organizing work and setting up the initial app Developing flowcharts,
         Guiding layouts and documentation requirements and solutions Writing well-designed testable code,
         Communicating goals to team members,
         Producing specifications and determining operational feasibility,
         Integrating software components into a fully functional system,
         Developing software verification plans and quality assurance procedures,
         Nurturing team members' strengths and identifying areas for improvement,
       `,
      link: ``,
      technologies: `
         React Native,
         Typescript,
         Redux / Redux Toolkit,
         Git / Gitlab,
         Jira,
         Android Studio / Emulator,
         Xcode and Simlator,
         VS-Code,
       `,
      category: `NPM Projects`,
    },
    {
      name: "D'roid Check Box",
      icon: Assets.images.npm_pic,
      appDesc: `AppCheckbox is a customizable React checkbox component built with TypeScript. It provides a simple way to add checkbox functionality to your React applications with a clean, modern design.

      `,
      responsibility: `
         Delegating tasks to team members,
         Executing the full software development lifecycle,
         Helping team members fix issues,
         Assigning tasks in Github Projects,
         Organizing work and setting up the initial app Developing flowcharts,
         Guiding layouts and documentation requirements and solutions Writing well-designed testable code,
         Communicating goals to team members,
         Producing specifications and determining operational feasibility,
         Integrating software components into a fully functional system,
         Developing software verification plans and quality assurance procedures,
         Nurturing team members' strengths and identifying areas for improvement,
       `,
      link: ``,
      technologies: `
         React Native,
         Typescript,
         Redux / Redux Toolkit,
         Git / Gitlab,
         Jira,
         Android Studio / Emulator,
         Xcode and Simlator,
         VS-Code,
       `,
      category: `NPM Projects`,
    },
    {
      name: "Cash Basket Web",
      icon: Assets.images.cash_b,
      appDesc: `Cash Basket is a global financial services product for African immigrants. With Cash Basket, you can instantly transfer money from the UK, US and Canada to Africa, Asia, Europe and South America.`,
      responsibility: `
         Delegating tasks to team members,
         Executing the full software development lifecycle,
         Helping team members fix issues,
         Assigning tasks in Github Projects,
         Organizing work and setting up the initial app Developing flowcharts,
         Guiding layouts and documentation requirements and solutions Writing well-designed testable code,
         Communicating goals to team members,
         Producing specifications and determining operational feasibility,
         Integrating software components into a fully functional system,
         Developing software verification plans and quality assurance procedures,
         Nurturing team members' strengths and identifying areas for improvement,
       `,
      link: ``,
      technologies: `
         React Native,
         Typescript,
         Redux / Redux Toolkit,
         Git / Gitlab,
         Jira,
         Android Studio / Emulator,
         Xcode and Simlator,
         VS-Code,
       `,
      category: `Front-End Projects`,
    },
    {
      name: "D'roid Button",
      icon: Assets.images.npm_pic,
      appDesc: `Button is a customizable React component for creating buttons with various styling options. It's written in TypeScript for better type safety and maintainability.

      Features
      Customizable appearance (background color, text color, dimensions)
      Configurable margins
      Optional icon support
      Disabled state handling
      TypeScript support for type safety`,
      responsibility: `
         Delegating tasks to team members,
         Executing the full software development lifecycle,
         Helping team members fix issues,
         Assigning tasks in Github Projects,
         Organizing work and setting up the initial app Developing flowcharts,
         Guiding layouts and documentation requirements and solutions Writing well-designed testable code,
         Communicating goals to team members,
         Producing specifications and determining operational feasibility,
         Integrating software components into a fully functional system,
         Developing software verification plans and quality assurance procedures,
         Nurturing team members' strengths and identifying areas for improvement,
       `,
      link: ``,
      technologies: `
         React Native,
         Typescript,
         Redux / Redux Toolkit,
         Git / Gitlab,
         Jira,
         Android Studio / Emulator,
         Xcode and Simlator,
         VS-Code,
       `,
      category: `NPM Projects`,
    },
    {
      name: "D'roid Tool Tip",
      icon: Assets.images.npm_pic,
      appDesc: `The Tooltip component is a reusable React component that displays a small tooltip when hovering over a specific element. It is inspired by the Material UI design and written in TypeScript for better type safety and maintainability.`,
      responsibility: `
         Delegating tasks to team members,
         Executing the full software development lifecycle,
         Helping team members fix issues,
         Assigning tasks in Github Projects,
         Organizing work and setting up the initial app Developing flowcharts,
         Guiding layouts and documentation requirements and solutions Writing well-designed testable code,
         Communicating goals to team members,
         Producing specifications and determining operational feasibility,
         Integrating software components into a fully functional system,
         Developing software verification plans and quality assurance procedures,
         Nurturing team members' strengths and identifying areas for improvement,
       `,
      link: ``,
      technologies: `
         React Native,
         Typescript,
         Redux / Redux Toolkit,
         Git / Gitlab,
         Jira,
         Android Studio / Emulator,
         Xcode and Simlator,
         VS-Code,
       `,
      category: `NPM Projects`,
    },
    {
      name: "D'roid Card",
      icon: Assets.images.npm_pic,
      appDesc: `The Card component is a flexible and customizable UI component for displaying content in a card format. It supports various elements such as a title, subtitle, icon, image, content, actions, and tags, making it suitable for a wide range of use cases.`,
      responsibility: `
         Delegating tasks to team members,
         Executing the full software development lifecycle,
         Helping team members fix issues,
         Assigning tasks in Github Projects,
         Organizing work and setting up the initial app Developing flowcharts,
         Guiding layouts and documentation requirements and solutions Writing well-designed testable code,
         Communicating goals to team members,
         Producing specifications and determining operational feasibility,
         Integrating software components into a fully functional system,
         Developing software verification plans and quality assurance procedures,
         Nurturing team members' strengths and identifying areas for improvement,
       `,
      link: ``,
      technologies: `
         React Native,
         Typescript,
         Redux / Redux Toolkit,
         Git / Gitlab,
         Jira,
         Android Studio / Emulator,
         Xcode and Simlator,
         VS-Code,
       `,
      category: `NPM Projects`,
    },
    {
      name: "Drizzle Den Website",
      icon: Assets.images.drizzle,
      appDesc: `A global restaurant chain that serves millions of customers every day.`,
      responsibility: `
         Delegating tasks to team members,
         Executing the full software development lifecycle,
         Helping team members fix issues,
         Assigning tasks in Github Projects,
         Organizing work and setting up the initial app Developing flowcharts,
         Guiding layouts and documentation requirements and solutions Writing well-designed testable code,
         Communicating goals to team members,
         Producing specifications and determining operational feasibility,
         Integrating software components into a fully functional system,
         Developing software verification plans and quality assurance procedures,
         Nurturing team members' strengths and identifying areas for improvement,
       `,
      link: ``,
      technologies: `
         React Native,
         Typescript,
         Redux / Redux Toolkit,
         Git / Gitlab,
         Jira,
         Android Studio / Emulator,
         Xcode and Simlator,
         VS-Code,
       `,
      category: `Front-End Projects`,
    },
    {
      name: "Leads Prime Secondary School",
      icon: Assets.images.leadsPrime,
      appDesc: `This is the website of a secondary school in Lagos Nigeria. The have both primary and secondary sections and parents review have gone up the charts de to the new look of the website`,
      responsibility: `
         Delegating tasks to team members,
         Executing the full software development lifecycle,
         Helping team members fix issues,
         Assigning tasks in Github Projects,
         Organizing work and setting up the initial app Developing flowcharts,
         Guiding layouts and documentation requirements and solutions Writing well-designed testable code,
         Communicating goals to team members,
         Producing specifications and determining operational feasibility,
         Integrating software components into a fully functional system,
         Developing software verification plans and quality assurance procedures,
         Nurturing team members' strengths and identifying areas for improvement,
       `,
      link: ``,
      technologies: `
         React Native,
         Typescript,
         Redux / Redux Toolkit,
         Git / Gitlab,
         Jira,
         Android Studio / Emulator,
         Xcode and Simlator,
         VS-Code,
       `,
      category: `Front-End Projects`,
    },
    {
      name: "D'roid Alert Notification",
      icon: Assets.images.npm_pic,
      appDesc: `AlertNotification is a pre-compiled React component for displaying alert messages with different types (success, error, warning). It's built with TypeScript and styled-components, providing a clean and modern design that's ready to use out of the box.

      Features
      Three alert types: success, error, and warning
      Customizable message content
      Closable alerts
      Pre-styled with a modern design
      TypeScript support for type safety`,
      responsibility: `
         Delegating tasks to team members,
         Executing the full software development lifecycle,
         Helping team members fix issues,
         Assigning tasks in Github Projects,
         Organizing work and setting up the initial app Developing flowcharts,
         Guiding layouts and documentation requirements and solutions Writing well-designed testable code,
         Communicating goals to team members,
         Producing specifications and determining operational feasibility,
         Integrating software components into a fully functional system,
         Developing software verification plans and quality assurance procedures,
         Nurturing team members' strengths and identifying areas for improvement,
       `,
      link: `https://www.npmjs.com/package/@droid-tech/react-ts-alert-notification`,
      technologies: `
         React Native,
         Typescript,
         Redux / Redux Toolkit,
         Git / Gitlab,
         Jira,
         Android Studio / Emulator,
         Xcode and Simlator,
         VS-Code,
       `,
      category: `NPM Projects`,
    },
    {
      name: "Knowledge City Mobile",
      icon: Assets.images.kkc,
      appDesc: `Knowledge City is more than just an educational platform—it is a
        community where learners from all walks of life can come together to expand 
        their knowledge, build valuable skills, and take control of their personal 
        and professional development. Through innovative technologies, expert-led courses, 
        and a focus on inclusivity and accessibility, Knowledge City is leading the charge 
        in shaping the future of education. Join us and embark on a journey of growth and
         discovery in the digital age.`,
      responsibility: `
         Delegating tasks to team members,
         Executing the full software development lifecycle,
         Helping team members fix issues,
         Assigning tasks in Github Projects,
         Organizing work and setting up the initial app Developing flowcharts,
         Guiding layouts and documentation requirements and solutions Writing well-designed testable code,
         Communicating goals to team members,
         Producing specifications and determining operational feasibility,
         Integrating software components into a fully functional system,
         Developing software verification plans and quality assurance procedures,
         Nurturing team members' strengths and identifying areas for improvement,
       `,
      link: ``,
      technologies: `
         React Native,
         Typescript,
         Redux / Redux Toolkit,
         Git / Gitlab,
         Jira,
         Android Studio / Emulator,
         Xcode and Simlator,
         VS-Code,
       `,
      category: `Mobile App Projects`,
    },
    {
      name: "Ecobank Omni Lite Mobile",
      icon: Assets.images.ecobank_lite,
      appDesc: `With its easy to use features, the Omni Lite app empowers Commercial Banking clients to perform all their regular banking transactions and payments conveniently and in a secure manner.`,
      responsibility: `
         Delegating tasks to team members,
         Executing the full software development lifecycle,
         Helping team members fix issues,
         Assigning tasks in Github Projects,
         Organizing work and setting up the initial app Developing flowcharts,
         Guiding layouts and documentation requirements and solutions Writing well-designed testable code,
         Communicating goals to team members,
         Producing specifications and determining operational feasibility,
         Integrating software components into a fully functional system,
         Developing software verification plans and quality assurance procedures,
         Nurturing team members' strengths and identifying areas for improvement,
       `,
      link: ``,
      technologies: `
         React Native,
         Typescript,
         Redux / Redux Toolkit,
         Git / Gitlab,
         Jira,
         Android Studio / Emulator,
         Xcode and Simlator,
         VS-Code,
       `,
      category: `Mobile App Projects`,
    },
    {
      name: "D'roid Avatar",
      icon: Assets.images.npm_pic,
      appDesc: `Avatar is a customizable React component for displaying user avatars with various styling options. It's written in TypeScript for better type safety and maintainability.

      Features
      Customizable appearance (variant, size, colors)
      Supports image and text avatars
      Optional badge support
      Grouped avatars
      TypeScript support for type safety`,
      responsibility: `
         Delegating tasks to team members,
         Executing the full software development lifecycle,
         Helping team members fix issues,
         Assigning tasks in Github Projects,
         Organizing work and setting up the initial app Developing flowcharts,
         Guiding layouts and documentation requirements and solutions Writing well-designed testable code,
         Communicating goals to team members,
         Producing specifications and determining operational feasibility,
         Integrating software components into a fully functional system,
         Developing software verification plans and quality assurance procedures,
         Nurturing team members' strengths and identifying areas for improvement,
       `,
      link: ``,
      technologies: `
         React Native,
         Typescript,
         Redux / Redux Toolkit,
         Git / Gitlab,
         Jira,
         Android Studio / Emulator,
         Xcode and Simlator,
         VS-Code,
       `,
      category: `NPM Projects`,
    },
    {
      name: "D'roid Text Area",
      icon: Assets.images.npm_pic,
      appDesc: `TextArea is a customizable React functional component that renders a textarea input field. It allows for various styling and layout options through its props, making it flexible and easy to use in different UI designs.

      Features
      Customizable Border: Adjust border color, width, and radius.
      Flexible Dimensions: Control the number of rows and columns.
      Margin Control: Set top and bottom margins for spacing.
      Placeholder Text: Define custom placeholder text.
      Default Values: Pre-configured rows and columns for quick setup.
      CSS Integration: Supports className and inline styles.
      Lightweight: Simple, focused functionality.
      TypeScript Support: Provides type safety and IntelliSense.
      `,
      responsibility: `
         Delegating tasks to team members,
         Executing the full software development lifecycle,
         Helping team members fix issues,
         Assigning tasks in Github Projects,
         Organizing work and setting up the initial app Developing flowcharts,
         Guiding layouts and documentation requirements and solutions Writing well-designed testable code,
         Communicating goals to team members,
         Producing specifications and determining operational feasibility,
         Integrating software components into a fully functional system,
         Developing software verification plans and quality assurance procedures,
         Nurturing team members' strengths and identifying areas for improvement,
       `,
      link: ``,
      technologies: `
         React Native,
         Typescript,
         Redux / Redux Toolkit,
         Git / Gitlab,
         Jira,
         Android Studio / Emulator,
         Xcode and Simlator,
         VS-Code,
       `,
      category: `NPM Projects`,
    },
    {
      name: "Ecobank Authenticator Mobile",
      icon: Assets.images.ecobank_auth,
      appDesc: `This app will generate a security code which an existing customer performing a transaction on Ecobank Online and Ecobank omni lite can use to further secure their transaction.`,
      responsibility: `
         Delegating tasks to team members,
         Executing the full software development lifecycle,
         Helping team members fix issues,
         Assigning tasks in Github Projects,
         Organizing work and setting up the initial app Developing flowcharts,
         Guiding layouts and documentation requirements and solutions Writing well-designed testable code,
         Communicating goals to team members,
         Producing specifications and determining operational feasibility,
         Integrating software components into a fully functional system,
         Developing software verification plans and quality assurance procedures,
         Nurturing team members' strengths and identifying areas for improvement,
       `,
      link: ``,
      technologies: `
         React Native,
         Typescript,
         Redux / Redux Toolkit,
         Git / Gitlab,
         Jira,
         Android Studio / Emulator,
         Xcode and Simlator,
         VS-Code,
       `,
      category: `Mobile App Projects`,
    },
    {
      name: "Access Bank Mobile App",
      icon: Assets.images.acces_bank,
      appDesc: `The Access More App is an innovative mobile payment application that offers a more than banking experience. The App is built to help our customers consummate their financial transactions, payment solutions and enjoy a lifestyle experience.`,
      responsibility: `
         Delegating tasks to team members,
         Executing the full software development lifecycle,
         Helping team members fix issues,
         Assigning tasks in Github Projects,
         Organizing work and setting up the initial app Developing flowcharts,
         Guiding layouts and documentation requirements and solutions Writing well-designed testable code,
         Communicating goals to team members,
         Producing specifications and determining operational feasibility,
         Integrating software components into a fully functional system,
         Developing software verification plans and quality assurance procedures,
         Nurturing team members' strengths and identifying areas for improvement,
       `,
      link: ``,
      technologies: `
         React Native,
         Typescript,
         Redux / Redux Toolkit,
         Git / Gitlab,
         Jira,
         Android Studio / Emulator,
         Xcode and Simlator,
         VS-Code,
       `,
      category: `Mobile App Projects`,
    },
    {
      name: "Ekenedilichukwu Portfolio",
      icon: Assets.images.main_logo,
      appDesc: `Ths website contains all the information about Ekene. What he has done, how he achieved it and the path he took to get there.`,
      responsibility: `
         Delegating tasks to team members,
         Executing the full software development lifecycle,
         Helping team members fix issues,
         Assigning tasks in Github Projects,
         Organizing work and setting up the initial app Developing flowcharts,
         Guiding layouts and documentation requirements and solutions Writing well-designed testable code,
         Communicating goals to team members,
         Producing specifications and determining operational feasibility,
         Integrating software components into a fully functional system,
         Developing software verification plans and quality assurance procedures,
         Nurturing team members' strengths and identifying areas for improvement,
       `,
      link: ``,
      technologies: `
         React Native,
         Typescript,
         Redux / Redux Toolkit,
         Git / Gitlab,
         Jira,
         Android Studio / Emulator,
         Xcode and Simlator,
         VS-Code,
       `,
      category: `Front-End Projects`,
    },
    {
      name: "D'roid Loader",
      icon: Assets.images.npm_pic,
      appDesc: `The Loader component is a customizable React component that displays a spinning loader animation. It's built using styled-components and TypeScript for better styling control and type safety.

      Features
      Customizable size
      Customizable color
      Smooth spinning animation
      TypeScript support for type safety`,
      responsibility: `
         Delegating tasks to team members,
         Executing the full software development lifecycle,
         Helping team members fix issues,
         Assigning tasks in Github Projects,
         Organizing work and setting up the initial app Developing flowcharts,
         Guiding layouts and documentation requirements and solutions Writing well-designed testable code,
         Communicating goals to team members,
         Producing specifications and determining operational feasibility,
         Integrating software components into a fully functional system,
         Developing software verification plans and quality assurance procedures,
         Nurturing team members' strengths and identifying areas for improvement,
       `,
      link: ``,
      technologies: `
         React Native,
         Typescript,
         Redux / Redux Toolkit,
         Git / Gitlab,
         Jira,
         Android Studio / Emulator,
         Xcode and Simlator,
         VS-Code,
       `,
      category: `NPM Projects`,
    },
    {
      name: "D'roid Tabs",
      icon: Assets.images.npm_pic,
      appDesc: `The Tabs component is a customizable React component that creates a tabbed interface. It's written in TypeScript for better type safety and maintainability.

      Features
      Customizable tab labels
      Customizable tab content
      Customizable styles for tabs, tab list, tab panels, and active tabs
      TypeScript support for type safety`,
      responsibility: `
         Delegating tasks to team members,
         Executing the full software development lifecycle,
         Helping team members fix issues,
         Assigning tasks in Github Projects,
         Organizing work and setting up the initial app Developing flowcharts,
         Guiding layouts and documentation requirements and solutions Writing well-designed testable code,
         Communicating goals to team members,
         Producing specifications and determining operational feasibility,
         Integrating software components into a fully functional system,
         Developing software verification plans and quality assurance procedures,
         Nurturing team members' strengths and identifying areas for improvement,
       `,
      link: ``,
      technologies: `
         React Native,
         Typescript,
         Redux / Redux Toolkit,
         Git / Gitlab,
         Jira,
         Android Studio / Emulator,
         Xcode and Simlator,
         VS-Code,
       `,
      category: `NPM Projects`,
    },
    {
      name: "Okoli Brothers Web",
      icon: Assets.images.okolibro,
      appDesc: `Okoli Brothers is a shipping company with the main aim 
      of commuting goods and services between continents.`,
      responsibility: `
         Delegating tasks to team members,
         Executing the full software development lifecycle,
         Helping team members fix issues,
         Assigning tasks in Github Projects,
         Organizing work and setting up the initial app Developing flowcharts,
         Guiding layouts and documentation requirements and solutions Writing well-designed testable code,
         Communicating goals to team members,
         Producing specifications and determining operational feasibility,
         Integrating software components into a fully functional system,
         Developing software verification plans and quality assurance procedures,
         Nurturing team members' strengths and identifying areas for improvement,
       `,
      link: ``,
      technologies: `
         React Native,
         Typescript,
         Redux / Redux Toolkit,
         Git / Gitlab,
         Jira,
         Android Studio / Emulator,
         Xcode and Simlator,
         VS-Code,
       `,
      category: `Front-End Projects`,
    },
    {
      name: "Order It",
      icon: Assets.images.order_it,
      appDesc: `Order It prides its self for getting your needs to your door step on time and intact.`,
      responsibility: `
         Delegating tasks to team members,
         Executing the full software development lifecycle,
         Helping team members fix issues,
         Assigning tasks in Github Projects,
         Organizing work and setting up the initial app Developing flowcharts,
         Guiding layouts and documentation requirements and solutions Writing well-designed testable code,
         Communicating goals to team members,
         Producing specifications and determining operational feasibility,
         Integrating software components into a fully functional system,
         Developing software verification plans and quality assurance procedures,
         Nurturing team members' strengths and identifying areas for improvement,
       `,
      link: ``,
      technologies: `
         React Native,
         Typescript,
         Redux / Redux Toolkit,
         Git / Gitlab,
         Jira,
         Android Studio / Emulator,
         Xcode and Simlator,
         VS-Code,
       `,
      category: `Front-End Projects`,
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

const LIBRARY: LibraryType = [
  {
    title: "Articles",
    desc: "Explore a curated collection of insightful articles on a wide range of topics, including technology, science, and self-improvement.",
    icon: Assets.images.articleImage, // Icon for better visual representation
    url: "/library/articles", // URL for navigating to this section
    itemCount: 120, // Number of articles available
    lastUpdated: "2024-01-20", // Last update date
    tags: ["learning", "knowledge", "insights"] // Related tags for filtering or categorization
  },
  {
    title: "Books",
    desc: "Access a diverse library of books, from fiction and non-fiction to academic and professional resources.",
    icon: Assets.images.booksImage,
    url: "/library/books",
    itemCount: 45, // Number of books available
    lastUpdated: "2024-01-15",
    tags: ["reading", "education", "resources"]
  },
  {
    title: "Gallery",
    desc: "Browse through an extensive gallery of images, illustrations, and infographics for inspiration and learning.",
    icon: Assets.images.galleryImage,
    url: "/library/gallery",
    itemCount: 250, // Number of items in the gallery
    lastUpdated: "2024-01-18",
    tags: ["creativity", "visuals", "media"]
  },
  {
    title: "Videos",
    desc: "Watch educational and entertaining videos, including tutorials, documentaries, and webinars.",
    icon: Assets.images.vidoesImage,
    url: "/library/videos",
    itemCount: 75,
    lastUpdated: "2024-01-22",
    tags: ["multimedia", "tutorials", "education"]
  },
  {
    title: "Podcasts",
    desc: "Listen to engaging podcasts on various subjects, hosted by experts and thought leaders.",
    icon: Assets.images.podcastImage,
    url: "/library/podcasts",
    itemCount: 30,
    lastUpdated: "2024-01-10",
    tags: ["audio", "learning", "discussions"]
  }
];

const POSTS: ArticlePostType[] = [
  {
    article_id: "27eb21a58b7",
    title: "Understanding JavaScript Closures: A Beginner's Guide",
    slug: "understanding-javascript-closures",
    description: "A comprehensive guide to understanding JavaScript closures, with examples and practical use cases.",
    content: "<p>JavaScript closures are an essential concept for any developer. This guide walks you through...</p>",
    author: {
      author_id: "auth_123",
      name: "Jane Doe",
      profile_url: "/profiles/jane-doe",
      avatar_url: "/avatars/jane-doe.png",
      bio: "Jane is a software engineer with 10+ years of experience in full-stack development."
    },
    co_authors: [
      {
        author_id: "auth_124",
        name: "John Smith",
        profile_url: "/profiles/john-smith",
        avatar_url: "/avatars/john-smith.png",
        bio: "John is a JavaScript enthusiast and a technical writer."
      }
    ],
    categories: ["JavaScript", "Web Development", "Programming Fundamentals"],
    tags: ["closures", "JavaScript", "programming"],
    published_at: "2024-01-10T10:30:00Z",
    updated_at: "2024-01-12T08:45:00Z",
    status: "published",
    views: 15234,
    likes: 2345,
    comments_count: 45,
    comments: [
      {
        comment_id: "comment_001",
        user_id: "user_456",
        user_name: "Alex Taylor",
        user_avatar: "/avatars/alex-taylor.png",
        content: "This article is a great introduction to closures. Thanks for writing it!",
        posted_at: "2024-01-10T12:00:00Z",
        replies: [
          {
            reply_id: "reply_001",
            user_id: "user_789",
            user_name: "Chris Johnson",
            user_avatar: "/avatars/chris-johnson.png",
            content: "I agree! The examples are very clear.",
            posted_at: "2024-01-10T12:30:00Z"
          }
        ]
      }
    ],
    media: {
      images: [
        {
          image_id: "img_001",
          url: "/images/javascript-closures.png",
          alt_text: "Diagram of JavaScript closures",
          caption: "JavaScript closures explained visually."
        }
      ],
      videos: [
        {
          video_id: "vid_001",
          url: "/videos/javascript-closures.mp4",
          title: "Understanding Closures in JavaScript",
          thumbnail: "/thumbnails/javascript-closures.png"
        }
      ]
    },
    seo: {
      meta_title: "Understanding JavaScript Closures: A Beginner's Guide",
      meta_description: "Learn JavaScript closures with this beginner-friendly guide. Includes examples and practical use cases.",
      keywords: ["JavaScript closures", "JavaScript tutorial", "programming concepts"],
      canonical_url: "/articles/understanding-javascript-closures"
    },
    analytics: {
      shares: {
        facebook: 500,
        twitter: 300,
        linkedin: 200
      },
      average_read_time_minutes: 8,
      bounce_rate: 25
    },
    editorial_notes: {
      created_by: "editor_001",
      last_reviewed_by: "editor_002",
      notes: "Ensure the article includes links to related resources."
    }
  },
  {
    article_id: "de8a4113f4b",
    title: "A Complete Guide to CSS Flexbox for Beginners",
    slug: "complete-guide-css-flexbox",
    description: "An in-depth guide to CSS Flexbox, covering everything you need to know to create responsive layouts.",
    content: "<p>Flexbox is a powerful layout module in CSS that allows developers to design flexible and responsive layouts...</p>",
    author: {
      author_id: "auth_125",
      name: "Emily Carter",
      profile_url: "/profiles/emily-carter",
      avatar_url: "/avatars/emily-carter.png",
      bio: "Emily is a front-end developer passionate about web design and user experience."
    },
    co_authors: [
      {
        author_id: "auth_126",
        name: "Michael Brown",
        profile_url: "/profiles/michael-brown",
        avatar_url: "/avatars/michael-brown.png",
        bio: "Michael is a CSS expert and a technical educator who loves simplifying complex concepts."
      }
    ],
    categories: ["CSS", "Web Design", "Responsive Design"],
    tags: ["flexbox", "CSS", "responsive design"],
    published_at: "2024-02-05T09:00:00Z",
    updated_at: "2024-02-07T14:15:00Z",
    status: "published",
    views: 10456,
    likes: 1890,
    comments_count: 32,
    comments: [
      {
        comment_id: "comment_002",
        user_id: "user_457",
        user_name: "Sophia Lee",
        user_avatar: "/avatars/sophia-lee.png",
        content: "This article helped me understand Flexbox! The visuals are especially useful.",
        posted_at: "2024-02-05T11:00:00Z",
        replies: [
          {
            reply_id: "reply_002",
            user_id: "user_790",
            user_name: "Liam Wilson",
            user_avatar: "/avatars/liam-wilson.png",
            content: "Agreed! The diagrams are top-notch.",
            posted_at: "2024-02-05T11:30:00Z"
          }
        ]
      }
    ],
    media: {
      images: [
        {
          image_id: "img_002",
          url: "/images/css-flexbox-guide.png",
          alt_text: "Diagram showing CSS Flexbox properties",
          caption: "Illustration of CSS Flexbox properties in action."
        }
      ],
      videos: [
        {
          video_id: "vid_002",
          url: "/videos/css-flexbox-guide.mp4",
          title: "Mastering CSS Flexbox for Beginners",
          thumbnail: "/thumbnails/css-flexbox.png"
        }
      ]
    },
    seo: {
      meta_title: "A Complete Guide to CSS Flexbox for Beginners",
      meta_description: "Learn CSS Flexbox with this comprehensive guide. Perfect for beginners, includes examples and visual aids.",
      keywords: ["CSS Flexbox", "CSS tutorial", "responsive web design"],
      canonical_url: "/articles/complete-guide-css-flexbox"
    },
    analytics: {
      shares: {
        facebook: 350,
        twitter: 250,
        linkedin: 150
      },
      average_read_time_minutes: 10,
      bounce_rate: 20
    },
    editorial_notes: {
      created_by: "editor_003",
      last_reviewed_by: "editor_004",
      notes: "Include examples for both row and column layouts."
    }
  },
  {
    article_id: "0ab85ddc18c",
    title: "Mastering React Hooks: A Practical Guide",
    slug: "mastering-react-hooks-guide",
    description: "Learn how to effectively use React Hooks to manage state and lifecycle methods in your functional components.",
    content: "<p>React Hooks revolutionized functional components by introducing state and side effects management...</p>",
    author: {
      author_id: "auth_127",
      name: "David Johnson",
      profile_url: "/profiles/david-johnson",
      avatar_url: "/avatars/david-johnson.png",
      bio: "David is a senior software engineer specializing in modern web development frameworks."
    },
    co_authors: [
      {
        author_id: "auth_128",
        name: "Laura Green",
        profile_url: "/profiles/laura-green",
        avatar_url: "/avatars/laura-green.png",
        bio: "Laura is a React developer and an advocate for clean, maintainable code."
      }
    ],
    categories: ["React", "JavaScript", "Web Development"],
    tags: ["React Hooks", "functional components", "state management"],
    published_at: "2024-03-01T08:00:00Z",
    updated_at: "2024-03-02T10:30:00Z",
    status: "published",
    views: 18345,
    likes: 3120,
    comments_count: 48,
    comments: [
      {
        comment_id: "comment_003",
        user_id: "user_458",
        user_name: "Oliver Martin",
        user_avatar: "/avatars/oliver-martin.png",
        content: "The section on useEffect hooks was incredibly helpful. Great article!",
        posted_at: "2024-03-01T10:00:00Z",
        replies: [
          {
            reply_id: "reply_003",
            user_id: "user_791",
            user_name: "Emma Brown",
            user_avatar: "/avatars/emma-brown.png",
            content: "I second this! I finally understand dependency arrays.",
            posted_at: "2024-03-01T10:45:00Z"
          }
        ]
      }
    ],
    media: {
      images: [
        {
          image_id: "img_003",
          url: "/images/react-hooks-guide.png",
          alt_text: "Visual representation of React Hooks",
          caption: "Understanding React Hooks and their lifecycle."
        }
      ],
      videos: [
        {
          video_id: "vid_003",
          url: "/videos/react-hooks-guide.mp4",
          title: "Practical React Hooks Tutorial",
          thumbnail: "/thumbnails/react-hooks.png"
        }
      ]
    },
    seo: {
      meta_title: "Mastering React Hooks: A Practical Guide",
      meta_description: "Comprehensive guide to React Hooks with practical examples. Learn useState, useEffect, and more.",
      keywords: ["React Hooks", "React tutorial", "web development"],
      canonical_url: "/articles/mastering-react-hooks-guide"
    },
    analytics: {
      shares: {
        facebook: 450,
        twitter: 320,
        linkedin: 220
      },
      average_read_time_minutes: 12,
      bounce_rate: 18
    },
    editorial_notes: {
      created_by: "editor_005",
      last_reviewed_by: "editor_006",
      notes: "Add a section about custom hooks."
    }
  },
  {
    article_id: "2101659950a",
    title: "The Ultimate Guide to Git and GitHub",
    slug: "ultimate-guide-git-github",
    description: "A detailed guide to mastering Git and GitHub for version control and collaborative development.",
    content: "<p>Git and GitHub are essential tools for modern software development. In this guide, we’ll cover...</p>",
    author: {
      author_id: "auth_129",
      name: "Anna Roberts",
      profile_url: "/profiles/anna-roberts",
      avatar_url: "/avatars/anna-roberts.png",
      bio: "Anna is a DevOps engineer with expertise in CI/CD and version control systems."
    },
    co_authors: [
      {
        author_id: "auth_130",
        name: "Chris Evans",
        profile_url: "/profiles/chris-evans",
        avatar_url: "/avatars/chris-evans.png",
        bio: "Chris is a full-stack developer passionate about teaching others best practices."
      }
    ],
    categories: ["Git", "Version Control", "Collaboration"],
    tags: ["Git", "GitHub", "team collaboration"],
    published_at: "2024-02-15T07:00:00Z",
    updated_at: "2024-02-16T12:20:00Z",
    status: "published",
    views: 12560,
    likes: 1980,
    comments_count: 36,
    comments: [
      {
        comment_id: "comment_004",
        user_id: "user_459",
        user_name: "James White",
        user_avatar: "/avatars/james-white.png",
        content: "Loved the section on branching strategies. Clear and concise.",
        posted_at: "2024-02-15T09:00:00Z",
        replies: [
          {
            reply_id: "reply_004",
            user_id: "user_792",
            user_name: "Sarah Miller",
            user_avatar: "/avatars/sarah-miller.png",
            content: "I agree! That part really cleared up a lot of confusion.",
            posted_at: "2024-02-15T09:30:00Z"
          }
        ]
      }
    ],
    media: {
      images: [
        {
          image_id: "img_004",
          url: "/images/git-guide.png",
          alt_text: "Git branching diagram",
          caption: "Git branching and merging explained."
        }
      ],
      videos: [
        {
          video_id: "vid_004",
          url: "/videos/git-guide.mp4",
          title: "Introduction to Git and GitHub",
          thumbnail: "/thumbnails/git-guide.png"
        }
      ]
    },
    seo: {
      meta_title: "The Ultimate Guide to Git and GitHub",
      meta_description: "Master Git and GitHub with this ultimate guide. Perfect for beginners and professionals alike.",
      keywords: ["Git", "GitHub", "version control"],
      canonical_url: "/articles/ultimate-guide-git-github"
    },
    analytics: {
      shares: {
        facebook: 300,
        twitter: 200,
        linkedin: 180
      },
      average_read_time_minutes: 15,
      bounce_rate: 22
    },
    editorial_notes: {
      created_by: "editor_007",
      last_reviewed_by: "editor_008",
      notes: "Expand on the section about resolving merge conflicts."
    }
  },
  {
    article_id: "965a7e12ffa",
    title: "An Introduction to TypeScript for JavaScript Developers",
    slug: "introduction-to-typescript",
    description: "Get started with TypeScript, a superset of JavaScript that adds static typing and modern features.",
    content: "<p>TypeScript offers a powerful type system to help developers build more reliable and scalable applications...</p>",
    author: {
      author_id: "auth_131",
      name: "Sophia Lee",
      profile_url: "/profiles/sophia-lee",
      avatar_url: "/avatars/sophia-lee.png",
      bio: "Sophia is a JavaScript and TypeScript instructor dedicated to teaching programming fundamentals."
    },
    co_authors: [],
    categories: ["TypeScript", "JavaScript", "Programming Languages"],
    tags: ["TypeScript", "static typing", "JavaScript"],
    published_at: "2024-03-10T09:00:00Z",
    updated_at: "2024-03-12T11:40:00Z",
    status: "published",
    views: 9200,
    likes: 1450,
    comments_count: 27,
    comments: [
      {
        comment_id: "comment_005",
        user_id: "user_460",
        user_name: "Daniel Parker",
        user_avatar: "/avatars/daniel-parker.png",
        content: "Finally, a simple introduction to TypeScript! Great examples.",
        posted_at: "2024-03-10T11:00:00Z",
        replies: [
          {
            reply_id: "reply_005",
            user_id: "user_793",
            user_name: "Ethan Harris",
            user_avatar: "/avatars/ethan-harris.png",
            content: "I agree. The part about interfaces was especially helpful.",
            posted_at: "2024-03-10T11:30:00Z"
          }
        ]
      }
    ],
    media: {
      images: [
        {
          image_id: "img_005",
          url: "/images/typescript-guide.png",
          alt_text: "TypeScript code example",
          caption: "TypeScript basics illustrated with examples."
        }
      ],
      videos: [
        {
          video_id: "vid_005",
          url: "/videos/typescript-guide.mp4",
          title: "Getting Started with TypeScript",
          thumbnail: "/thumbnails/typescript.png"
        }
      ]
    },
    seo: {
      meta_title: "An Introduction to TypeScript for JavaScript Developers",
      meta_description: "Start learning TypeScript with this beginner-friendly guide. Includes code examples and tips.",
      keywords: ["TypeScript", "JavaScript", "programming"],
      canonical_url: "/articles/introduction-to-typescript"
    },
    analytics: {
      shares: {
        facebook: 240,
        twitter: 190,
        linkedin: 130
      },
      average_read_time_minutes: 8,
      bounce_rate: 25
    },
    editorial_notes: {
      created_by: "editor_009",
      last_reviewed_by: "editor_010",
      notes: "Include more advanced examples for experienced developers."
    }
  }
]

export { DATA, POSTS, LIBRARY };
