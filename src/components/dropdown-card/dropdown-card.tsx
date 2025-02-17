// basic nextjs component template for dropdown cards

"use client";

import React from "react";

import "./dropdown-card.css";

export default function DropdownCard({
  title,
  children,
  initialOpen = "false",
}: {
  title: string;
  children: React.ReactNode;
  initialOpen: string;
}) {
  const [isOpen, setIsOpen] = React.useState(initialOpen == "true");

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function openDropdown() {
    setIsOpen(true);
  }

  function closeDropdown() {
    setIsOpen(false);
  }

  return (
    <div id="dropdown-card-container">
      <button id="card-title-container" onClick={toggleDropdown}>
        <p id="card-title">{title}</p>

        <div id="card-arrow-container">
          <svg
            id="card-arrow"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className={isOpen ? "is-up" : "is-down"}
            viewBox="0 0 16 16"
          >
            <path
              id="card-arrow-path"
              fillRule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 
                        10.293l5.646-5.647a.5.5 0 1 1 .708.708l-6 
                        6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 
                        1 0-.708z"
            />
          </svg>
        </div>
      </button>

      <div
        id="card-content-container"
        className={isOpen ? "is-open" : "is-closed"}
      >
        <p id="card-content">{children}</p>
      </div>
    </div>
  );
}
