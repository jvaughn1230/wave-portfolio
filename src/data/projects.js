import dinoBeachCover from "../assets/dinobeach.png";
import palmLeafCover from "../assets/palmclothing.png";
import riptideCover from "../assets/riptide.png";
import SimpleScannerCover from "../assets/simplescanner.png";

export const projects = [
  {
    id: 1,
    name: "Riptide",
    type: "A Bug Tracker",
    description:
      "Built a Bug tracking application using React, NodeJS & MongoDB. Implemented JWT for backend authorization.",
    cover: riptideCover,
    gallery: ["1", "2", "3"],
    stack: ["React", "CSS", "NodeJS", "MongoDB", "Redux/RTK"],
    website: "https://riptidetracker.netlify.app/",
    frontEnd: "https://github.com/jvaughn1230/riptidebugtracker",
    backend: "https://github.com/jvaughn1230/riptide-api",
  },
  {
    id: 2,
    name: "DinoBeach Dev",
    type: "Starup Blog",
    description:
      "Developed web page for DinoBeach Dev startup using React & Strapi. Implemeneted Strapi as a headless CMS option for future clients. Originally built with Gatsby and TailWindCSS before being migrated to React and Regular CSS for better control.",
    cover: dinoBeachCover,
    gallery: ["1", "2", "3"],
    stack: ["React", "CSS", "Strapi"],
    website: "https://dinobeachdev.netlify.app",
    frontEnd: "https://github.com/jvaughn1230/dinobeachdev",
    backend: "https://github.com/jvaughn1230/dinocms",
  },
  {
    id: 3,
    name: "Palm Leaf Clothing",
    type: "ECommerce Store",
    description:
      "Built a full stack Ecommerce store using React, Redux, and Firebase. Implemented Stripe payment API. Originally implemneted legacy Redux before converting to RTK in order to be up to date with current standard.",
    cover: palmLeafCover,
    gallery: ["1", "2", "3"],
    stack: ["React", "CSS", "Firebase", "Redux/RTK"],
    website: "https://palmleaf-clothing.netlify.app/",
    frontEnd: "https://github.com/jvaughn1230/palmleaf-clothing",
    backend: "",
  },
  {
    id: 4,
    name: "SimpleScanner",
    type: "A Brouchere Site",
    description:
      "Built the front end brouchure site for client using HTML, CSS, and JavaScript Website implemented snap scrolling & advanced CSS.",
    cover: SimpleScannerCover,
    gallery: ["1", "2", "3"],
    stack: ["HTML", "CSS", "JavaScript"],
    website: "https://simplescan.onrender.com/",
    frontEnd: "https://github.com/jvaughn1230/simple-scan",
    backend: "",
  },
];
