import React from "react";
import AllProjects from "../../util/AllProjects.json";
import ProyectCard from "./ProyectCard.jsx";

export default function AllProyectsCard() {
  return (
    <>
      {AllProjects.map((p) => (
        <ProyectCard
          key={p.id}
          img={p.imgPath}
          name={p.name}
          stack={p.tecStack}
          id={p.id}
        />
      ))}
    </>
  );
}
