const dinobeachImages = require.context("../assets/dinobeach", true);
const dinobeachImageList = dinobeachImages
  .keys()
  .map((image) => dinobeachImages(image));

const palmleafImages = require.context("../assets/palmleaf", true);
const palmleafImageList = palmleafImages
  .keys()
  .map((image) => palmleafImages(image));

const riptideImages = require.context("../assets/riptide", true);
const riptideImageList = riptideImages
  .keys()
  .map((image) => riptideImages(image));

const simplescanImages = require.context("../assets/simplescan", true);
const simplescanImageList = simplescanImages
  .keys()
  .map((image) => simplescanImages(image));

export const projectsData = [
  {
    id: 1,
    name: "Riptide",
    type: "A Bug Tracker",
    description:
      "Built a Bug tracking application using React, NodeJS & MongoDB. Implemented JWT for backend authorization.",
    cover: riptideImageList[0],
    gallery: riptideImageList,
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
    cover: dinobeachImageList[0],
    gallery: dinobeachImageList,
    stack: ["React", "CSS", "Strapi"],
    website: "https://dinobeachdev.netlify.app",
    frontEnd: "https://github.com/jvaughn1230/dinobeachdev",
  },
  {
    id: 3,
    name: "Palm Leaf Clothing",
    type: "ECommerce Store",
    description:
      "An E-Commerce application built using React, Redux, Stripe API and Styled Components. Allows users to browser items by collection. User's can signup for an account with e-mail or through their Gmail account.",
    cover: palmleafImageList[0],
    gallery: palmleafImageList,
    stack: [
      "React",
      "CSS",
      "Firebase",
      "Redux/RTK",
      "Stripe API",
      "Styled Components",
      "OAuth",
    ],
    website: "https://palmleaf-clothing.netlify.app/",
    frontEnd: "https://github.com/jvaughn1230/palmleaf-clothing",
    backend: "",
  },
  {
    id: 4,
    name: "SimpleScan",
    type: "A Brouchere Site",
    description:
      "Built the front end brouchure site for client using HTML, CSS, and JavaScript Website implemented snap scrolling & advanced CSS.",
    cover: simplescanImageList[0],
    gallery: simplescanImageList,
    stack: ["HTML", "CSS", "JavaScript"],
    website: "https://simplescan.onrender.com/",
    frontEnd: "https://github.com/jvaughn1230/simple-scan",
    backend: "",
  },
];
