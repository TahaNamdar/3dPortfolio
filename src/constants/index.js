import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  bs,
  golden,
  fanora,
  taban,
  internships,
  treatanet,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Next Js",
    icon: backend,
  },
  {
    title: "Web Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Fanora Co",
    icon: fanora,
    iconBg: "#383E56",
    date: "Jan 2022 - Present · 2 yrs 3 mos",
    points: [
      "Led React development at treatanet.com, optimizing medical appointments through cutting-edge technology and seamless API management with RTK Query. Pivotal in elevating user experience and enhancing platform efficiency.",
      "Architected and developed GoldenPath.me, a comprehensive planner built on a full-stack Next.js foundation. Expertly employed technologies such as Next.js, TypeScript, Tailwind CSS, React DnD (Drag and Drop), tRPC, Prisma, and MongoDB to create a dynamic and efficient planning platform. Demonstrated proficiency in both front-end and back-end development to deliver a seamless user experience.",
      "Crafted a dynamic sitemap and refined robots.txt for bastaboendet.se, showcasing my SEO prowess. Implemented strategic optimizations to boost search engine visibility, contributing to an enhanced online presence.",
      "Architected and coded the Zarchi Admin Panel, the backbone of an online gold pricing platform. Meticulously designed and developed using React, WebSockets, and Sass, it stands as a testament to my commitment to efficiency and real-time functionality, elevating the user experience.1. Led React development at treatanet.com, optimizing medical appointments through cutting-edge technology and seamless API management with RTK Query. Pivotal in elevating user experience and enhancing platform efficiency. 2. Architected and developed GoldenPath.me, a comprehensive planner built on a full-stack Next.js foundation. Expertly employed technologies such as Next.js, TypeScript, Tailwind CSS, React DnD (Drag and Drop), tRPC, Prisma, and MongoDB to create a dynamic and efficient planning platform. Demonstrated proficiency in both front-end and back-end development to deliver a seamless user experience. 3. Crafted a dynamic sitemap and refined robots.txt for bastaboendet.se, showcasing my SEO prowess. Implemented strategic optimizations to boost search engine visibility, contributing to an enhanced online presence. 4. Architected and coded the Zarchi Admin Panel, the backbone of an online gold pricing platform. Meticulously designed and developed using React, WebSockets, and Sass, it stands as a testament to my commitment to efficiency and real-time functionality, elevating the user experience.",
    ],
  },
  {
    title: "React Developer",
    company_name: "TabaneShahr",
    icon: taban,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Nov 2021 · 11 mos",
    points: [
      "onceptualized and designed an innovative fabric shop app using Adobe XD and Figma. Successfully refactored and redesigned two web applications, addressing 100% of existing bugs and introducing new features for an enhanced user experience.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Rahkarmarket",
    icon: shopify,
    iconBg: "#383E56",
    date: "Aug 2020 - Mar 2021 · 8 mos",
    points: [
      "Conceptualized and designed an innovative fabric shop app using Adobe XD and Figma. Successfully refactored and redesigned two web applications, addressing 100% of existing bugs and introducing new features for an enhanced user experience.",
    ],
  },
  {
    title: "Internship Frontend Developer",
    company_name: "Coursera",
    icon: internships,
    iconBg: "#E6DEDD",
    date: "Mar 2020 - Nov 2020 · 9 mos",
    points: [
      "Passionate about continuous learning, I embarked on a self-study journey mastering HTML, CSS, JavaScript, React, Redux, and Typescript. Eager to expand my knowledge, I joined a dynamic front-end team, contributing to the development and successful deployment of various projects, including a shopping cart, portfolio websites, and a unique application facilitating GitLab token retrieval and project display.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Mediv",
    designation: "CFO",
    company: "Acme Co",
    image:
      "data:image/png;base64,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",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "amir hemati",
    designation: "COO",
    company: "DEF Corp",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmJNokLovBX31nqkXzULMt7I9cjm2fTbWjXhgogS0YTEPufDu906EQJjXt8QESBx-38X4&usqp=CAU",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Raha",
    designation: "CTO",
    company: "456 Enterprises",
    image:
      "https://static.vecteezy.com/system/resources/previews/026/976/729/original/3d-icon-avatar-woman-illustration-of-smiling-happy-girl-cartoon-close-up-portrait-people-of-standing-teenager-on-isolated-on-transparent-background-generative-ai-png.png",
  },
];

const projects = [
  {
    name: "Treatanet.com",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: treatanet,
    source_code_link: "https://treatanet.com/",
  },
  {
    name: "GoldenPath.me",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: golden,
    source_code_link: "https://www.goldenpath.me/",
  },
  {
    name: "bastaboendet.se",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: bs,
    source_code_link: "",
  },
];

export { services, technologies, experiences, testimonials, projects };
