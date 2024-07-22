import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import colivingImg from "@/public/coliving.png";
import fakebookImg from "@/public/fakebook.png";
import quizzzzImg from "@/public/quizzzz.png";
import blackjackImg from "@/public/blackjack.png";
import confusionmatrix from "@/public/confusionmatrix.png";
import podcast from "@/public/podcast.png";

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
    title: "MSc in Artificial Intelligence Postgraduate Student",
    location: "Asia Pacific University of Technology and Innovation",
    description:
      "Python, R, Artificial Intelligence, Applied Machine Learning, Natural Language Processing, Deep Learning, Pattern Recognition, Computational Intelligence Optimization, Image Processing and Computer Vision, Fuzzy Logic",
    icon: React.createElement(LuGraduationCap),
    date: "2024 - 2026",
  },
  {
    title: "AI for Industry - Foundations in AI Learner",
    location: "AI Singapore",
    description:
      "Python, Tensorflow, Keras, Scikit-learn, Numpy, Pandas, Matplotlib, SQL, Git",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "Software Developer",
    location: "Bahwan Cybertek Pte Ltd, Singapore",
    description:
      "MNC experience in maintaining a large-scale goverment enterprise asset management system developed in .Net Framework and C#",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Software Engineering Bootcamp Graduate",
    location: "Rocket Academy, Singapore",
    description:
      "Full-stack software engineering in PERN (PostgreSQL, Express.js, React.js, Node.js) stack",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Technology Educator",
    location: "Roboto Coding Academy, Singapore",
    description:
      "Main trainer for coding and robotics lessons at Singapore local/ international schools and enrichment centres",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
  {
    title: "Senior Math Olympiad Coach/ Curriculum Developer",
    location: "SIMCC, Singapore",
    description:
      "Main trainer for Math Olympiad lessons for both local and overseas students",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2022",
  },
  {
    title: "Senior Singapore Math Program Instructor",
    location: "Academy Teammathics, Malaysia",
    description: "Main trainer for Singapore Math and Math Olympiad lessons",
    icon: React.createElement(CgWorkAlt),
    date: "2017 - 2019",
  },
] as const;

export const projectsData = [
  {
    title: "IBM's Employee Attrition Prediction",
    description:
      "Logistics Regression model trained concluded that working overtime is the largest factor of attrition.",
    tags: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "Seaborn",
      "Matplotlib",
      "Pycharm",
      "Git",
    ],
    imageUrl: confusionmatrix,
    deployedUrl: "https://github.com/ryanlerler/predicting-employee-attrition",
  },
  {
    title: "NLP/ Prompt Engineering",
    description:
      "Extract numbers (in both integers and strings) and dates (including today and yesterday) out from a given paragraph.",
    tags: [
      "Python",
      "FastAPI",
      "Spacy",
      "FeedParser",
      "Open AI API",
      "Pycharm",
      "Git",
    ],
    imageUrl: podcast,
    deployedUrl: "https://github.com/ryanlerler/nlp-prompt-engineering",
  },
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
