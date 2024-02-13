import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";

import classes from "./navbar.module.css";

const Menu = () => {
  return (
    <>
      <p>
        <a href="#home">Home</a>
      </p>
      <p>
        <a href="#wgpt3">What is GPT3?</a>
      </p>
      <p>
        <a href="#possibility">Open AI</a>
      </p>
      <p>
        <a href="#features">Case studies</a>
      </p>
      <p>
        <a href="#blog">Library</a>
      </p>
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbar_links}>
        <div className={classes.navbar_links_logo}>
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className={classes.navbar_links_container}>
          <Menu />
        </div>
      </div>
      <div className={classes.navbar__sign}>
        <a className={classes.navbar__sign_in}>Sign in</a>
        <a href="#" className={classes.navbar__sign_up}>
          Sign up
        </a>
      </div>
      <div className={classes.navbar__menu}>
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className={`${classes.navbar__menu_container} scale-up-center`}>
            <div className={classes.navbar___menu_container_links}>
              <div className={classes.navbar___menu_container_links_nav}>
                <Menu />
              </div>
              <hr className={classes.navbar___menu_container_links_hr} />
              <div className={classes.navbar__menu_container_sign}>
                <a className={classes.navbar__menu_container_sign_in}>
                  Sign in
                </a>
                <a href="#" className={classes.navbar__menu_container_sign_up}>
                  Sign up
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
