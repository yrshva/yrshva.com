import {
  Box,
  Button,
  List,
  ListItemButton,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { HashLink } from "react-router-hash-link";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import {
  burgerButtonStyles,
  burgerIconStyles,
  burgerWrapStyles,
  fullHeaderStyles,
  linkStyles,
} from "../../styles/headerStyles";

const Header = () => {
  const [burgerClicked, setBurgerClicked] = useState<boolean>(false);
  const burger = useRef<HTMLHeadingElement>(null);
  const url = useLocation();
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 600px)");
  const handleBurgerButtonClick = () => {
    burgerClicked ? setBurgerClicked(false) : setBurgerClicked(true);
  };
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (
        burger.current != null &&
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

  const HeaderView = () => {
    if (isMobile) {
      return (
        <Box ref={burger} display="block">
          <Box sx={burgerWrapStyles}>
            <Link to="/" style={linkStyles}>
              YRSHVA
            </Link>
            <Box sx={burgerIconStyles}>
              <Button onClick={handleBurgerButtonClick} sx={burgerButtonStyles}>
                <MenuIcon sx={{ fontSize: 30 }} />
              </Button>
            </Box>
          </Box>
          {burgerClicked && (
            <Box>
              <List>
                <ListItemButton
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  <ListItemText primary="Home" />
                </ListItemButton>
                <ListItemButton
                  onClick={() => {
                    navigate("/about");
                  }}
                >
                  <ListItemText primary="About" />
                </ListItemButton>
              </List>
            </Box>
          )}
        </Box>
      );
    } else
      return (
        <Box height="60px" display="flex" justifyContent="center">
          <Box sx={fullHeaderStyles}>
            <Link to="/" className="logo" style={linkStyles}>
              YRSHVA
            </Link>
            <Box margin="0 10px">
              <Link to="/" style={linkStyles}>
                Home
              </Link>
              <Link to="/about" style={linkStyles}>
                About
              </Link>
              <HashLink to="/about#contact" style={linkStyles}>
                Contact
              </HashLink>
            </Box>
          </Box>
        </Box>
      );
  };
  return (
    <Box
      position="fixed"
      width="100%"
      bgcolor="#479dff"
      zIndex="100"
      boxShadow="0px 2px 10px 0px rgba(0, 0, 0, 0.1)"
    >
      <HeaderView />
    </Box>
  );
};
export default Header;
