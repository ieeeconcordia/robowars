// basic nextjs component template for a header

"use client";

import { usePathname } from "next/navigation";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import "./header.css";

export default function Header() {
  const [isNavbarOpen, setIsNavbarOpen] = React.useState(false);
  const pathName = usePathname();

  function openNavbar() {
    setIsNavbarOpen(true);
  }

  function closeNavbar() {
    setIsNavbarOpen(false);
  }

  return (
    <div id="header-container">
      <div id="header-icon-container">
        <Link href="ieeeconcordia.ca">
          <Image
            src="/images/ieee-logo-blue.png"
            width={64}
            height={64}
            alt="IEEE logo"
          />
        </Link>
      </div>
      <div id="navbar-hamburger-container">
        <button onClick={openNavbar}>
          <Image
            src="/images/hamburger-menu.png"
            width={64}
            height={64}
            alt="menu button for navigation"
          />
        </button>
      </div>
      <div
        id="navbar-links-container"
        className={isNavbarOpen ? "navbar-is-open" : "navbar-is-closed"}
      >
        <Link onClick={closeNavbar} 
              className={"navbar-link " + (pathName === "/" && "active")} 
              href="/">
          Home 
        </Link>
        <Link
          onClick={closeNavbar}
          className={"navbar-link " + (pathName === "/" && "active")}
          target="_blank"
          href="https://docs.google.com/document/d/1uE_qKhlLz3xWvRydPu98WYNGkwppWoMsOBT8aPYuovw/edit?usp=sharing"
        >
          Rulebook
        </Link>
        <Link
          onClick={closeNavbar}
          className={"navbar-link " + (pathName === "/organizing-team" && "active")}
          href="/organizing-team"
        >
          Organizing Team
        </Link>
        <Link
          onClick={closeNavbar}
          className={"navbar-link " + (pathName === "/past-competitions" && "active")}
          href="/past-competitions"
        >
          Past Competitions
        </Link>
        <Link
          onClick={closeNavbar}
          className="navbar-link"
          href="https://www.ieeeconcordia.ca/contact"
        >
          Contact Us
        </Link>
        <Link
          onClick={closeNavbar}
          className="navbar-link button"
          href="https://www.ieeeconcordia.ca/sponsorship"
        >
          Sponsorships
        </Link>
        <div className="navbar-close">
          <button onClick={closeNavbar}>
            <Image
              src="/images/close.png"
              width={64}
              height={64}
              alt="menu button for closing the navigation"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
