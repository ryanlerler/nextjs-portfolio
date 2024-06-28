import React from "react";
import { CgWorkAlt } from "react-icons/cg";
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
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Developer",
    location: "Singapore",
    description:
      "MNC experience in maintaining a large-scale goverment enterprise asset management system",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Technology Educator",
    location: "Singapore",
    description:
      "Main trainer for coding and robotics lessons at Singapore local/ international schools and enrichment centres",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
  {
    title: "Senior Math Olympiad Coach/ Curriculum Developer",
    location: "Singapore",
    description:
      "Main trainer for Math Olympiad lessons for both local and overseas students",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2022",
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
