import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaDatabase } from "react-icons/fa";
import { FaServer } from "react-icons/fa";
import { IoIosColorPalette } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { BsBootstrapFill } from "react-icons/bs";

export const skills = [
  {
    id: 1,
    name: "ReactJS",
    icon: <FaReact size={40} />,
    summary:
      "I am well versed in the React ecosystem and consider it my go-to for creating efficient front end code.",
  },
  {
    id: 2,
    name: "Styling",
    icon: <IoIosColorPalette size={40} />,
    summary:
      "I am experienced in using CSS, Tailwind CSS & Sass to create beautiful, responsive websites. ",
  },
  {
    id: 3,
    name: "Server Development",
    icon: <FaServer size={40} />,
    summary:
      "I write efficient and secure servers using NodeJS and Express. I have experience implementing various libraries for improved security including JWT and bcrypt.",
  },
  {
    id: 4,
    name: "Database Development",
    icon: <FaDatabase size={40} />,
    summary:
      "I have experience developing both SQL and NoSQL databases to efficiently and securely store data. I've worked with MongoDB/Mongoose, PostgreSQL, & Firebase.",
  },
  {
    id: 5,
    name: "JavaScript",
    icon: <IoLogoJavascript size={40} />,
    summary:
      "I am well verse in core JavaScript including DOM manipulation when working with non-React front-ends.",
  },
  {
    id: 6,
    name: "HTML/Bootstrap",
    icon: <FaHtml5 size={40} />,
    summary:
      "I have a strong understanding of how to use HTML develop well structured and appealing front ends for applications.",
  },
  {
    id: 7,
    name: "Bootstrap",
    icon: <BsBootstrapFill size={40} />,
    summary:
      "I am experience with implementing the Bootstrap for front end development",
  },
  // {
  //   id: 7,
  //   name: "Testing",
  //   icon: <IoLogoJavascript size={40} />,
  //   summary:
  //     "I knowledgeable about using testing libraries to ensure my code works as expected without bugs",
  // },
];
