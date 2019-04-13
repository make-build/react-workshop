import React from "react";
import styles from "./Navbar.module.css";

const navItems = [
  { name: "MAKE/BUILD", link: "#MAKE" },
  { name: "Details", link: "#Details" },
  { name: "Schedule", link: "#Schedule" },
  { name: "Sponsors", link: "#Sponsors" },
  { name: "FAQ", link: "#FAQ" }
];

const NavItem = ({ text, link }) => (
  <div className="column">
    <a className={styles.navItem} href={link}>
      <h4 className={styles.navText}>{text}</h4>
    </a>
  </div>
);

const Navbar = () => {
  return (
    <div id="navbar" className="columns is-multiline">
      {navItems.map((el, i) => (
        <NavItem key={i} text={el.name} link={el.link} />
      ))}
    </div>
  );
};

export default Navbar;
