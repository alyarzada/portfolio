import {
  Instagram,
  Linkedin,
  Github,
  Wallpaper,
  Hammer,
  Database,
  TabletSmartphone,
} from "lucide-react";

// front end
import html from "@/assets/svg/html.svg";
import css from "@/assets/svg/css.svg";
import tailwind from "@/assets/svg/tailwind.svg";
import mui from "@/assets/svg/mui.svg";
import motion from "@/assets/svg/framer-motion.svg";
import js from "@/assets/svg/js.svg";
import ts from "@/assets/svg/ts.svg";
import react from "@/assets/svg/react.svg";
import next from "@/assets/svg/nextjs.svg";
import redux from "@/assets/svg/redux.svg";
import swr from "@/assets/svg/swr.svg";
import tanstack from "@/assets/svg/tanstack.svg";

// backend
import node from "@/assets/svg/nodejs.svg";
import express from "@/assets/svg/express.svg";
import nextauth from "@/assets/svg/nextauthh.png";
import prisma from "@/assets/svg/prisma.svg";
import postgres from "@/assets/svg/postgres.svg";
import mongodb from "@/assets/svg/mongodb.svg";
import graphql from "@/assets/svg/graphql.svg";
import rest from "@/assets/svg/rest.svg";
import firebase from "@/assets/svg/firebase.svg";
import socket from "@/assets/svg/socketio.svg";
import strapi from "@/assets/svg/strapi.svg";
import stripe from "@/assets/svg/stripe.svg";
import jwt from "@/assets/svg/jwt.svg";
import mongoose from "@/assets/svg/mongoose.png";

// tools
import github from "@/assets/svg/github.svg";
import jira from "@/assets/svg/jira-1.svg";
import bitbucket from "@/assets/svg/bitbucket-svgrepo-com.svg";
import trello from "@/assets/svg/trello.svg";

// projects
import jubee from "@/assets/images/jubee.png";
import rahatbina from "@/assets/images/rahatbina.jpg";
import dashboard from "@/assets/images/dashboard.webp";
import blog from "@/assets/images/blog.jpg";
import ecommerce from "@/assets/images/e-commerce.jpg";
import facebook from "@/assets/images/facebook.png";

// -------------------------------------------------------------------------------------

export const navLinks = [
  {
    id: 1,
    title: "ABOUT",
    path: "#about",
  },
  {
    id: 2,
    title: "WORK",
    path: "#portfolio",
  },
  {
    id: 3,
    title: "CONTACT",
    path: "#contact",
  },
];

// -------------------------------------------------------------------------------------

export const socialMediaLinks = [
  {
    id: 1,
    icon: Instagram,
    path: "https://www.instagram.com/tunaralyarzada/",
  },
  {
    id: 2,
    icon: Linkedin,
    path: "https://www.linkedin.com/in/tunar-alyarzada-08ab51252/",
  },
  {
    id: 3,
    icon: Github,
    path: "https://github.com/alyarzada",
  },
];

// -------------------------------------------------------------------------------------

export const servicesData = [
  {
    id: 1,
    title: "Front-End (React)",
    description: "",
    image: "",
  },
  {
    id: 2,
    title: "Back-End (Node.js)",
    description: "",
    image: "",
  },
  {
    id: 3,
    title: "Full-stack (React-Node.js)",
    description: "",
    image: "",
  },
];

// -------------------------------------------------------------------------------------

export const projectsData = [
  {
    id: 1,
    title: "Jubee platform",
    description: "",
    image: jubee,
    techs: [
      "React.js",
      "TypeScript",
      "TailwindCSS",
      "MUI",
      "React Query",
      "Hook Form",
      "Zod",
      "Firebase",
      "Apexcharts",
      "i18next",
    ],
    githubLink: "",
    private: true,
    demoLink: "https://dev.jubee.eu",
  },
  {
    id: 2,
    title: "Rahat Bina",
    description: "",
    image: rahatbina,
    techs: [
      "React.js",
      "TailwindCSS",
      "MUI",
      "Redux Toolkit",
      "Fullcalendar",
      "Formik",
      "Yup",
      "React-dropzone",
      "Leaflet",
    ],
    private: true,
    githubLink: "https://github.com/alyarzada/blog",
    demoLink: "",
  },
  {
    id: 3,
    title: "Dashboard",
    description: "",
    image: dashboard,
    techs: [
      "React.js",
      "TypeScript",
      "UnoCSS",
      "Graphql",
      "Apollo/client",
      "Hygraph CMS",
    ],
    private: false,
    githubLink: "https://github.com/alyarzada/blog",
    demoLink: "",
  },
  {
    id: 4,
    title: "Blog with CMS",
    description: "",
    image: blog,
    techs: [
      "React.js",
      "TypeScript",
      "UnoCSS",
      "Graphql",
      "Apollo/client",
      "Hygraph CMS",
    ],
    githubLink: "https://github.com/alyarzada/blog-graphql-cms-react",
    private: false,
    demoLink: "https://blogapp-byalyarzada.netlify.app",
  },
  {
    id: 5,
    title: "E-commerce",
    description: "",
    image: ecommerce,

    techs: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Ant Design",
      "SWR",
      "Zustand",
      "Formik",
      "Yup",
      "Prisma",
      "PostgreSQL",
    ],
    githubLink: "https://github.com/alyarzada/ecommerce-next",
    private: false,
    demoLink: "",
  },
  {
    id: 6,
    title: "Social Media App",
    description: "",
    image: facebook,
    techs: [
      "React.js",
      "TypeScript",
      "Ant Design",
      "React Query",
      "Framer-motion",
      "Node",
      "MongoDB",
      "Mongoose",
      "JWT",
    ],
    githubLink: "https://github.com/alyarzada/facebook-clone-fullstack",
    private: false,
    demoLink: "",
  },
];

// -------------------------------------------------------------------------------------

export const experienceData = [
  {
    id: 1,
    title: "React Developer (remote)",
    location: "Netondo (Jubee Platform) - Vilnius, Lithuania",
    description: [
      "Building the application from scratch based on Figma design with pixel-perfect precision, specifically tailored for a complex Finance and Money transferring system",
      "Collaborated closely with stakeholders to understand and incorporate specific financial regulations and compliance requirements into the application's architecture and functionality",
      "Utilize a modern tech stack, including but not limited to TypeScript, React Query, Tailwind CSS, React Hook Form, Zod",
      "Applied extensive customization to forms and UI components using Material UI",
      "Successfully implemented complex multi-step form patterns using custom hooks",
      "Implemented Two-Factor Authentication (2FA) methods for enhanced security and so on",
    ],
    date: "07/2023 - Current",
  },
  {
    id: 2,
    title: "React Developer",
    location: "Lider Advertising (Rahat Bina Platform) - Baku, Azerbaijan",
    description: [
      "Successfully transformed projects originally written in vanilla JavaScript into efficient and responsive React.js application",
      "Designed and implemented a role-based authorization system",
      "Integrated and customized big calendars, date-pickers, data-tables, and charts to meet project requirements",
      "Collaborated with backend developers to integrate and consume RESTful APIs",
    ],
    date: "10/2021 - 04/2023",
  },
];

// -------------------------------------------------------------------------------------

export const educationData = [
  {
    id: 1,
    location: "Azerbaijan State Economic University",
    title: "Business Administration and Management (Bach deg)",
    date: "2015 - 2019",
  },
  {
    id: 2,
    location: "Baku Business University",
    title: "MBA (Master of Business Administration)",
    date: "2019 - 2021",
  },
];

// -------------------------------------------------------------------------------------

export const skillsData = [
  {
    id: 1,
    field: "Frontend",
    icon: <Wallpaper />,
    desc: "I specialize in crafting elegant and intuitive user interfaces, utilizing a modern tech stack.",
    techs: [
      {
        id: 1,
        title: "HTML",
        icon: html,
      },
      {
        id: 2,
        title: "CSS",
        icon: css,
      },
      {
        id: 3,
        title: "JavaScript",
        icon: js,
      },
      {
        id: 4,
        title: "TypeScript",
        icon: ts,
      },
      {
        id: 5,
        title: "React JS",
        icon: react,
      },
      {
        id: 6,
        title: "Next JS",
        icon: next,
      },
      {
        id: 7,
        title: "Tailwind CSS",
        icon: tailwind,
      },
      {
        id: 8,
        title: "Framer Motion",
        icon: motion,
      },
      {
        id: 9,
        title: "Material UI",
        icon: mui,
      },
      {
        id: 10,
        title: "Shadcn UI",
        icon: mui,
      },

      {
        id: 11,
        title: "Redux Toolkit",
        icon: redux,
      },
      {
        id: 12,
        title: "Zustand",
        icon: redux,
      },
      {
        id: 13,
        title: "React Query",
        icon: tanstack,
      },
      {
        id: 14,
        title: "SWR",
        icon: swr,
      },
    ],
  },
  {
    id: 2,
    field: "Backend",
    desc: "I'm great at making strong server apps that run smoothly with the latest tech.",
    icon: <Database />,
    techs: [
      {
        id: 1,
        title: "Node JS",
        icon: node,
      },
      {
        id: 2,
        title: "Express JS",
        icon: express,
      },
      {
        id: 3,
        title: "Prisma",
        icon: prisma,
      },
      {
        id: 4,
        title: "JWT",
        icon: jwt,
      },
      {
        id: 5,
        title: "PostgreSQL",
        icon: postgres,
      },
      {
        id: 6,
        title: "MongoDB",
        icon: mongodb,
      },
      {
        id: 7,
        title: "GraphQL",
        icon: graphql,
      },
      {
        id: 8,
        title: "REST API",
        icon: rest,
      },
      {
        id: 9,
        title: "Firebase",
        icon: firebase,
      },
      {
        id: 10,
        title: "Socket.io",
        icon: socket,
      },
      {
        id: 11,
        title: "Strapi",
        icon: strapi,
      },

      {
        id: 12,
        title: "Stripe",
        icon: stripe,
      },
    ],
  },
  {
    id: 3,
    field: "Mobile",
    desc: "I focus on developing dynamic and intuitive mobile applications for both iOS and Android platforms",
    icon: <TabletSmartphone />,
    techs: [
      {
        id: 1,
        title: "React Native",
        icon: react,
      },
    ],
  },
  {
    id: 4,
    field: "Tools",
    desc: "I leverage a variety of tools to streamline development processes and enhance collaboration.",
    icon: <Hammer />,
    techs: [
      {
        id: 1,
        title: "Git / Github",
        icon: github,
      },
      {
        id: 2,
        title: "Bitbucket",
        icon: bitbucket,
      },
      {
        id: 3,
        title: "Jira",
        icon: jira,
      },
      {
        id: 4,
        title: "Trello",
        icon: trello,
      },
    ],
  },
];
