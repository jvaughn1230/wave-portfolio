import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaDatabase } from "react-icons/fa";
import { FaServer } from "react-icons/fa";
import { IoIosColorPalette } from "react-icons/io";

export const skills = [
  {
    id: 1,
    name: "ReactJS",
    icon: <FaReact size={40} />,
    summary:
      "React has become my go to for front end development due to it's speed and developing efficiency. I am experience in working with the essential tools in the React ecosystem including Redux and React-Router",
  },
  {
    id: 2,
    name: "Styling",
    icon: <IoIosColorPalette size={40} />,
    summary: "I am experiences in CSS, SCSS, and Tailwind CSS",
  },
  {
    id: 3,
    name: "Server Development",
    icon: <FaServer size={40} />,
    summary: "I write efficient and servers using NodeJS, ExpressJS, and JWT. ",
  },
  {
    id: 4,
    name: "Database Development",
    icon: <FaDatabase size={40} />,
    summary:
      "I have experience developing SQL and NoSQL databases including Firebase, MongoDB, and PostgreSQL",
  },
  {
    id: 5,
    name: "Styling",
    icon: <IoLogoJavascript size={40} />,
    summary: "Yay CSS",
  },
];
