import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { HashLink } from "react-router-hash-link";
import "../../styles/header.css";

const Header = () => {
  const [burgerClicked, setBurgerClicked] = useState<boolean>(false);
  const burger = useRef<HTMLHeadingElement>(null);
  const url = useLocation();
  const handleBurgerButtonClick = () => {
    burgerClicked ? setBurgerClicked(false) : setBurgerClicked(true);
  };
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (
        (burger.current != null) &&
        !burger.current.contains(event.target as HTMLInputElement)
      ) {
        setBurgerClicked(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [burger]);
  useEffect(() => {
    setBurgerClicked(false);
  }, [url]);

  return (
    <header>
      <div className="header-wrap">
        <div className="full-header">
          <Link to="/" className="logo">
            YRSHVA
          </Link>
          <div className="full-nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <HashLink to="/about#contact">Contact</HashLink>
          </div>
        </div>
      </div>
      <div className="small-header" ref={burger}>
        <div className="burger-wrap">
          <Link to="/" className="logo">
            YRSHVA
          </Link>
          <div className="burger-icon">
            <button onClick={handleBurgerButtonClick}>
              <MenuIcon className="fa-plus-circle" sx={{ fontSize: 30 }} />
            </button>
          </div>
        </div>
        {burgerClicked && (
          <div className="dropdown">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;
