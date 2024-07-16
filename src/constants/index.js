import {
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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  essica,
  ecomerce,
  todo,
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

export const technologies = [
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

export const experiences = [
  {
    title: "Web Developer & Graphic Designer",
    company_name: "JOSKAR MEDIA",
    icon: starbucks,
    iconBg: "#383E56",
    date: "August 2021 - December 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full-stack Developer",
    company_name: "Freelancing",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Dec 2022 - Feb 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Mentor (Volunteer),",
    company_name: "MICROVERSE, Remote",
    icon: shopify,
    iconBg: "#383E56",
    date: "Feb 2023 - October 2023",
    points: [
      "Mentored 3 junior web developers, providing technical support through code reviews using Slack and Zoom calls.",
      "Proposed improvements to code organization to improve code quality and overall performance by 100%.",
      "Provided advice and tips on maintaining motivation to ensure longevity in the program",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React.js Developer,social media manager, Graphic designer",
    company_name: "Essica & wankan Academy",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "October 2023 - May 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Develop layouts for print and digital media, including brochures, advertisements, websites, social media posts, and more",
    ],
  },
];

export const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Miranja proved me wrong.",
    name: "Mr Kimani",
    designation: "CFO",
    company: "Essica com",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Tracy does.",
    name: "wayne Omalla",
    designation: "COO",
    company: "solar company",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Tracy optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Shalline",
    designation: "CTO",
    company: "Mike Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

export const projects = [
  {
    name: "e-commerce platform",
    description:
      "An innovative e-commerce platform offering a seamless shopping experience with a wide range of products, and fast delivery.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: ecomerce,
    source_code_link:
      "https://github.com/Tracy-miranja/ecommerce-website/tree/dev",
  },
  {
    name: "Todo-List",
    description:
      "An intuitive web app designed to help you manage tasks efficiently, set reminders, and boost productivity with ease.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: todo,
    source_code_link: "https://github.com/Tracy-miranja/TO-DO-LIST",
  },
  {
    name: "Carpet cleaning",
    description:
      "An easy-to-use website offering convenient online booking for professional carpet cleaning services.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Mangodb",
        color: "green-text-gradient",
      },
      {
        name: "Express.js",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: essica,
    source_code_link: "https://github.com/Tracy-miranja/essica-carpet-cleaning",
  },
];

export default technologies;
