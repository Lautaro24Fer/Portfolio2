import React from "react";
import { PhantomIcon, GraduateHatIcon, FolderIcon } from "../util/icons.jsx";
import "./Navbar.css";

export default function NavbarReact({}) {
  const arrayItems = [
    {
      svg: <PhantomIcon />,
      text: "Know Me!",
      path: "/",
      section: "knowme",
      title: "KnowMe!",
      id: "knowme",
    },
    {
      svg: <GraduateHatIcon />,
      text: "My knowledge",
      path: "/",
      section: "habilities",
      title: "My Knowledge",
      id: "habilities",
    },
    {
      svg: <FolderIcon />,
      text: "My projects",
      path: "/projects",
      title: "Work",
    },
  ];

  const handleClick = () => {
    document.querySelectorAll("li").forEach((item) => {
      item.addEventListener("click", (e) => {
        if (item.id) {
          const section = document.querySelectorAll(`#section_${item.id}`)[0];
          section.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  };

  return (
    <>
      {arrayItems.map((item) => (
        <li
          key={item.text}
          className="relative h-max aside-element navbarElement"
          onClick={handleClick}
          id={item.id ? item.id : null}
        >
          {!item.id ? (
            <a href="/projects" className="absolute h-full w-full"></a>
          ) : null}
          <button className="bg-transparent h-full w-full">{item.title}</button>
        </li>
      ))}
    </>
  );
}
