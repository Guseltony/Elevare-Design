import ceo from "../../assets/images/members/ceo.jpg";
import pm from "../../assets/images/members/project.jpg";
import ms from "../../assets/images/members/marketter.jpg";
import ui from "../../assets/images/members/developer.jpg";
import dev from "../../assets/images/members/UIUX.jpg";

import {
  FaLinkedinIn,
  FaXTwitter,
  FaGithub,
  FaDribbble,
  FaBehance,
  FaInstagram,
} from "react-icons/fa6";

export const teamMembers = [
  {
    id: 1,
    name: "James Carter",
    image: ceo,
    position: "CEO & Founder",
    description:
      "Vision-driven leader with 10+ years of experience in business strategy, digital solutions, and creative direction.",
    social: [FaXTwitter, FaLinkedinIn],
  },
  {
    id: 2,
    name: "Sophia Martinez",
    image: pm,
    position: "Project Manager",
    description:
      "Detail-oriented project manager ensuring seamless collaboration, timely delivery, and high client satisfaction.",
    social: [FaXTwitter, FaLinkedinIn, FaInstagram],
  },
  {
    id: 3,
    name: "Daniel Okoro",
    image: dev,
    position: "Lead Developer",
    description:
      "Fullstack developer passionate about building scalable applications, clean architecture, and modern UI/UX.",
    social: [FaXTwitter, FaLinkedinIn, FaGithub],
  },
  {
    id: 4,
    name: "Emily Johnson",
    image: ui,
    position: "UI/UX Designer",
    description:
      "Creative designer focused on crafting intuitive, user-centered digital experiences with a touch of elegance.",
    social: [FaXTwitter, FaLinkedinIn, FaDribbble, FaBehance],
  },
  {
    id: 5,
    name: "Ahmed Musa",
    image: ms,
    position: "Marketing Strategist",
    description:
      "Growth-driven marketer skilled in SEO, digital campaigns, and brand storytelling that converts audiences.",
    social: [FaXTwitter, FaLinkedinIn, FaInstagram],
  },
];
