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
  
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home", navbar: true },
  ],
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
      href: "/pafisa-app",
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
  ],
} as const;
