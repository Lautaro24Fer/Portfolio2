import React from "react";

export default function ButtonOpenAside() {
  const handleClick = () => {
    const asideBoard = document.querySelector("aside");
    asideBoard.classList.add("activated");
  };

  return (
    <button
      className="fixed w-16 h-16 bg-slate-800 bottom-0 left-0 m-8 rounded-full grid items-center text-2xl"
      style={{ border: "1px solid white" }}
      id="button-open-aside-id"
      onClick={handleClick}
    >
      <span className="text-center">🖐🏻</span>
    </button>
  );
}
