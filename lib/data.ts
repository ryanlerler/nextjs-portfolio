import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import colivingImg from "@/public/coliving.png";
import fakebookImg from "@/public/fakebook.png";
import quizzzzImg from "@/public/quizzzz.png";
import blackjackImg from "@/public/blackjack.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  // {
  //   name: "Experience",
  //   hash: "#experience",
  // },
  // {
  //   name: "Contact",
  //   hash: "#contact",
  // },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Coliving",
    description:
      "A platform to search for room and house for rent in Singapore.",
    tags: [
      "Javascript",
      "PostgreSQL",
      "Express.js",
      "React.js",
      "Node.js",
      "NPM",
      "MVC",
      "Rest API",
      "React-Bootstrap",
      "Sequelize.js",
      "Google Firebase",
      "Google Maps API",
      "Google Places API",
      "Open AI API",
      "Auth0",
      "Netlify",
      "Fly.io",
      "Axios",
      "DBeaver",
      "DrawSQL",
      "Visual Studio Code",
      "Windows Subsystem for Linux",
      "CSS",
      "Git",
    ],
    imageUrl: colivingImg,
    deployedUrl: "https://colivingryan.netlify.app/",
  },
  {
    title: "Fakebook",
    description:
      "This customized social media platform aims to promote freedom and privacy open to all users around the world while eliminating restrictions featured in some social apps.",
    tags: [
      "Javascript",
      "React.js",
      "NPM",
      "Rest API",
      "React-Bootstrap",
      "Google Firebase",
      "Google Maps API",
      "Axios",
      "Visual Studio Code",
      "Windows Subsystem for Linux",
      "CSS",
      "Git",
    ],
    imageUrl: fakebookImg,
    deployedUrl: "https://fakebook-4bdfb.web.app/",
  },
  {
    title: "Quizzzz",
    description:
      "Dynamic quiz app with over 10,000 questions to choose from over 30 categories (including Computer & Math).",
    tags: [
      "Javascript",
      "React.js",
      "NPM",
      "Rest API",
      "React-Bootstrap",
      "Trivia API",
      "OpenTDB API",
      "Axios",
      "Visual Studio Code",
      "Windows Subsystem for Linux",
      "CSS",
      "Git",
    ],
    imageUrl: quizzzzImg,
    deployedUrl: "https://ryanlerler.github.io/project1-quizzzz/",
  },
  {
    title: "Blackjack",
    description:
      "The childhood poker game built in vanilla HTML, CSS, and Javascript.",
    tags: [
      "Javascript",
      "Bootstrap",
      "HTML",
      "Visual Studio Code",
      "Windows Subsystem for Linux",
      "CSS",
      "Git",
    ],
    imageUrl: blackjackImg,
    deployedUrl: "https://ryanlerler.github.io/blackjack/",
  },
] as const;

export const skillsData = [
  "Javascript",
  "PostgreSQL",
  "Express.js",
  "React.js",
  "Node.js",
  "NPM",
  "MVC",
  "Rest API",
  "React-Bootstrap",
  "Sequelize.js",
  "Django",
  "Typescript",
  "Next.js",
  "Python",
  "Django",
  "Google Firebase",
  "Google Maps API",
  "Google Places API",
  "Open AI API",
  "Auth0",
  "Netlify",
  "Fly.io",
  "Axios",
  "DBeaver",
  "DrawSQL",
  "Visual Studio Code",
  "Windows Subsystem for Linux",
  "CSS",
  "Git",
] as const;
