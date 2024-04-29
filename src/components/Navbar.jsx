import React from "react";
import { PhantomIcon, GraduateHatIcon, FolderIcon } from "../util/icons.jsx";
import "./Navbar.css";

export default function NavbarReact({ arraySectionsId, handleView }) {
  const arrayItems = [
    {
      svg: <PhantomIcon />,
      text: "Know Me!",
      path: "/",
      section: "knowme",
    },
    {
      svg: <GraduateHatIcon />,
      text: "My knowledge",
      path: "/",
      section: "habilities",
    },
    {
      svg: <FolderIcon />,
      text: "My projects",
      path: "/projects",
    },
  ];

  const handleClick = ({ target }) => {
    console.log("Clickedao");
    console.log(JSON.stringify(target));
  };

  return (
    <>
      {arrayItems.map((item) => (
        <li
          key={item.text}
          class="relative h-max aside-element navbarElement"
          onClick={handleClick}
        >
          <button class="bg-transparent h-full w-full">
            <div>{item.svg}</div>
            <div class="absolute bg-slate-900 rounded text-white w-max px-2 py-1 hoverBoard">
              <p>{item.text}</p>
            </div>
          </button>
        </li>
      ))}
    </>
  );
}
