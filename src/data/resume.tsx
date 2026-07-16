/**
 * Data for resume text
 */

import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Marlon Sandoval",
  initials: "MS",
  url: "https://mgsandoval.xyz",
  location: "La Ceiba, Honduras",
  locationLink: "https://www.google.com/maps/place/la+ceiba+atlantida",
  description:
    "Web Developer with experience building apps using React, Next.js, and TypeScript. Passionate about building scalable and efficient web applications.",
  summary:
    "I'm a web developer based in **Honduras** who loves building apps, I manage web apps, JWT verification and SQL databases. I'm currently studying Computer Engineering at the Technological University of Honduras. Passionate about learning about my stack and challenges.",
  avatarUrl: "/me.jpg",
  
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/mgsandoval",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/marlon-sandoval",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send me an Email!",
        url: "mailto:gabriel.sandoval6111@gmail.com?subject=Hello%20Marlon!%20I%20found%20you%20on%20your%20portfolio...",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  projects: [
    {
      title: "Pafisa App",
      href: undefined,
      slug: "pafisa-app",
      dates: "November 2025 - Present",
      active: true,
      description:
        "Pafisa is an app which handles product quality and warehouse stock transferring with the integration of SAP B1.",
      technologies: [
        "Next",
        "Typescript",
        "TailwindCSS",
        "Express",
        "JavaScript",
        "ASP.NET",
        "C#",
        "MSSQL",
        "SAP Business One",
      ],
      links: undefined,
      image: "/pafisa.png",
      video: undefined,
    },

    {
      title: "Marketer Surveys",
      href: "undefined",
      slug: "marketer-surveys",
      dates: "June 2026 - Present",
      active: true,
      description:
        "Surveys app made for Difiesta marketers. Manages user roles and surveys.",
      technologies: [
        "Next",
        "Typescript",
        "TailwindCSS",
        "Express",
        "JavaScript",
        "MSSQL",
      ],
      links: undefined,
      image: undefined,
      video: undefined,
    },

    {
      title: "Month Closures Dashboard",
      href: undefined,
      slug: "month-closures-dashboard",
      dates: "November 2025 - March 2026",
      active: true,
      description:
        "Dashboard that has last two months closures data, allows to filter by month. Has a Honduras map page to view data by department/state.",
      technologies: [
        "Next",
        "Typescript",
        "TailwindCSS",
        "MUI",
        "JavaScript",
        "MSSQL",
        "MongoDB",
      ],
      links: undefined,
      image: undefined,
      video: undefined,
    },
  ],
} as const;
