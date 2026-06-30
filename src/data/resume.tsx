/**
 * Data for resume text
 */

import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Docker } from "@/components/ui/svgs/docker";

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
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Docker", icon: Docker },
  ],
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
        url: "mailto:gabriel.sandoval6111@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Atomic Finance",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Bitcoin Protocol Engineer",
      logoUrl: "/atomic.png",
      start: "May 2021",
      end: "Oct 2022",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "Shopify",
      badges: [],
      href: "https://shopify.com",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/shopify.svg",
      start: "January 2021",
      end: "April 2021",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
    {
      company: "Nvidia",
      href: "https://nvidia.com/",
      badges: [],
      location: "Santa Clara, CA",
      title: "Software Engineer",
      logoUrl: "/nvidia.png",
      start: "January 2020",
      end: "April 2020",
      description:
        "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    },
    {
      company: "Splunk",
      href: "https://splunk.com",
      badges: [],
      location: "San Jose, CA",
      title: "Software Engineer",
      logoUrl: "/splunk.svg",
      start: "January 2019",
      end: "April 2019",
      description:
        "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    },
    {
      company: "Lime",
      href: "https://li.me/",
      badges: [],
      location: "San Francisco, CA",
      title: "Software Engineer",
      logoUrl: "/lime.svg",
      start: "January 2018",
      end: "April 2018",
      description:
        "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    },
    {
      company: "Mitre Media",
      href: "https://mitremedia.com/",
      badges: [],
      location: "Toronto, ON",
      title: "Software Engineer",
      logoUrl: "/mitremedia.png",
      start: "May 2017",
      end: "August 2017",
      description:
        "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    },
  ],

  education: [
    {
      school: "Buildspace",
      href: "https://buildspace.so",
      degree: "s3, s4, sf1, s5",
      logoUrl: "/buildspace.jpg",
      start: "2023",
      end: "2024",
    },
    {
      school: "University of Waterloo",
      href: "https://uwaterloo.ca",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/waterloo.png",
      start: "2016",
      end: "2021",
    },
    {
      school: "Wilfrid Laurier University",
      href: "https://wlu.ca",
      degree: "Bachelor's Degree of Business Administration (BBA)",
      logoUrl: "/laurier.png",
      start: "2016",
      end: "2021",
    },
    {
      school: "International Baccalaureate",
      href: "https://ibo.org",
      degree: "IB Diploma",
      logoUrl: "/ib.png",
      start: "2012",
      end: "2016",
    },
  ],

  projects: [
    {
      title: "Pafisa App",
      href: "https://chatcollect.com",
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
      // links: [
      //   {
      //     type: "Website",
      //     href: "https://chatcollect.com",
      //     icon: <Icons.globe className="size-3" />,
      //   },
      // ],
      // image: "pafisa.png",
      // video: "",
    },

    {
      title: "Marketer Surveys",
      href: "https://magicui.design",
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
      // links: [
      //   {
      //     type: "Website",
      //     href: "https://magicui.design",
      //     icon: <Icons.globe className="size-3" />,
      //   },
      // ],
      // image: "",
      // video: "",
    },

    {
      title: "Month Closures Dashboard",
      href: "https://llm.report",
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
      // links: [
      //   {
      //     type: "Website",
      //     href: "https://llm.report",
      //     icon: <Icons.globe className="size-3" />,
      //   },
      // ],
      // image: "",
      // video: "",
    },
  ],
} as const;
