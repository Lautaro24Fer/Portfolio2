import React, { useEffect } from "react";
import "./ProyectCard.css";

export default function ProyectCard({ img, name, stack, id }) {
  return (
    <>
      <div
        className="flex flex-col rounded-lg gap-2 proyectCardReact"
        style={{
          height: "28rem",
          width: "25rem",
          border: "1px solid white",
          viewTransitionName: `project ${id} card`,
        }}
      >
        <div
          className="imgContainer rounded-lg h-4/5 p-3 relative flex justify-center items-center"
          style={{ borderRadius: "1rem 1rem 0 0", backgroundColor: "#101010" }}
        >
          <a href={`/projects/${id}`} className="absolute h-full w-full"></a>
          <img
            src={img}
            alt={`${name}_img`}
            className="h-full object-contain"
          />
        </div>
        <div className="descriptionContainer w-full px-3 flex flex-col gap-3">
          <h4 className="text-lg">{name}</h4>
          <div className="flex gap-2 flex-wrap">
            {stack.map((s) => (
              <div
                className="text-center rounded-full px-3 py-1 bg-purple-600 w-20 flex justify-center"
                key={s}
              >
                {s}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
