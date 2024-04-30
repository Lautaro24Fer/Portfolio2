import React from "react";
import {
  JavascriptIcon,
  HtmlIcon,
  CssIcon,
  ReactIcon,
  TailwindIcon,
  GitIcon,
  CsharpIcon,
  MongodbIcon,
  PostgresIcon,
  AstroIcon,
  TypescryptIcon,
  ExpressIcon,
} from "../util/icons.jsx";
import "./HabilitiesAnimation.css";
import { Suspense } from "react";

export default function HabilitiesItems() {
  const AllIcons = [
    {
      svg: <HtmlIcon />,
      name: "HTML",
      color: "#ffa600bc",
    },
    {
      svg: <CssIcon />,
      name: "CSS",
      color: "#0a3bff87",
    },
    {
      svg: <JavascriptIcon />,
      name: "Javascript",
      color: "#ffff00d0",
    },
    {
      svg: <ReactIcon />,
      name: "React",
      color: "#00fffb7e",
    },
    {
      svg: <TailwindIcon />,
      name: "Tailwind",
      color: "#00ffeaa7",
    },
    {
      svg: <GitIcon />,
      name: "GIT",
      color: "#ff4400a4",
    },
    {
      svg: <ExpressIcon />,
      name: "Express",
      color: "#0080009a",
    },
    {
      svg: <MongodbIcon />,
      name: "MongoDB",
      color: "#00cb009a",
    },
    {
      svg: <CsharpIcon />,
      name: "C#",
      color: "#8000809c",
    },
    {
      svg: <PostgresIcon />,
      name: "PostgreSQL",
      color: "#0053e1a8",
    },
    {
      svg: <TypescryptIcon />,
      name: "Typescrypt",
      color: "#1600e1b1",
    },
    {
      svg: <AstroIcon />,
      name: "Astro",
      color: "#2b2b2bc8",
    },
  ];

  return (
    <>
      <Suspense fallback={<h4>Wait a moment...</h4>}>
        {AllIcons.map((item, index) => (
          <div
            key={index}
            className="relative rounded-md h-14 items-center p-2 gap-2 tecElement"
            style={{
              border: "1px solid white"
            }}
          >
            <div
              className="bgProgressBar absolute h-full w-full"
              style={{
                backgroundColor: `${item.color ? item.color : "brown"}`,
              }}
            ></div>
            <div
              className="text-lg z-10"
              style={{
                gridColumn: "1/2",
                placeItems: "center",
              }}
            >
              {item.svg}
            </div>
            <p
              className="h-full w-full flex items-center z-10 tecName"
              style={{ gridColumn: "2/5" }}
            >
              {item.name}
            </p>
          </div>
        ))}
      </Suspense>
    </>
  );
}
