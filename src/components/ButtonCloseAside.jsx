import React from "react";

export default function ButtonCloseAside() {
  const handleClick = () => {
    const closeAsideButtonEl = document.querySelector("#button-close-aside-id");
    closeAsideButtonEl.addEventListener("click", () => {
      const asideEl = document.querySelector("aside");
      asideEl.classList.remove("activated");
    });
  };

  return (
    <button
      class="w-16 h-16 bg-transparent absolute top-0 right-0 m-5 rounded-full grid items-center text-2xl text-white"
      id="button-close-aside-id"
      onClick={handleClick}
    >
      <span class="text-center">❌</span>
    </button>
  );
}
