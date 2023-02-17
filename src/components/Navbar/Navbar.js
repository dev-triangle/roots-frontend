import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import { IoMenu, IoClose } from "react-icons/io5";
import { NavLink as PageLink } from "react-router-dom";
import { NavHashLink as NavLink } from "react-router-hash-link";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import "./Navbar.css";
function Navbar() {
  const [drawer, setDrawer] = useState(false);

  const handleDrawerOpen = () => {
    setDrawer(true);
  };

  const handleDrawerClose = () => {
    setDrawer(false);
  };

  const location = useLocation();
  const scrollPosition = useScrollPosition();

  // console.log(location.pathname)

  const notHome = location.pathname.length > 1 ? true : false;

  const navStyleHome = {
    background: scrollPosition > 300 ? "#111111" : "rgba(17, 17, 17, 0.1)",
    boxShadow:
      scrollPosition > 200 ? "0px 2px 9px rgba(0, 0, 0, 0.11)" : "none",
    backdropFilter: "blur(10px)",
  };
  const navStyle = {
    background: scrollPosition > 300 ? "#111111" : "#111111",
    boxShadow:
      scrollPosition > 200 ? "0px 2px 9px rgba(0, 0, 0, 0.11)" : "none",
    backdropFilter: "none",
  };

  return (
    <div className="navbar" style={notHome ? navStyle : navStyleHome}>
      <div className="navbar__main container">
        <div className="nav_logo"></div>
        <div className="nav_contents">
          <NavLink to="/" className="nav__link">
            HOME
          </NavLink>
          <NavLink to="/items" className="nav__link">
            ITEMS
          </NavLink>
          <NavLink to="/places" className="nav__link">
            PLACES
          </NavLink>
          <PageLink to="/contact" className="nav__link">
            CONTACT
          </PageLink>
          {window.localStorage.getItem("access_token") ? (
            <PageLink to="/profile" className="nav__link">
              MY PROFILE
            </PageLink>
          ) : null}

          {window.localStorage.getItem("access_token") ? (
            <PageLink
              onClick={() => {
                window.localStorage.removeItem("access_token");
                window.localStorage.removeItem("refresh_token");
                window.location.reload();
              }}
              className="nav__link"
            >
              LOGOUT
            </PageLink>
          ) : (
            <PageLink to="/login" className="nav__link">
              LOGIN
            </PageLink>
          )}

          {window.localStorage.getItem("access_token") ? null : (
            <PageLink to="/signup" className="nav__link">
              <button className="nav__signup">SIGNUP</button>
            </PageLink>
          )}
        </div>

        <div
          className="nav_hamburger"
          onClick={() => {
            handleDrawerOpen();
          }}
        >
          <IoMenu className="nam_menu_icon" />
        </div>
      </div>

      <Drawer
        disableScrollLock={true}
        anchor="left"
        open={drawer}
        onClose={() => {
          handleDrawerClose();
        }}
        sx={{
          borderRadius: 20,
          width: "90%",
        }}
      >
        <div className="navbar__mob">
          <div
            className="navbar_mob_close"
            onClick={() => {
              handleDrawerClose();
            }}
          >
            <IoClose />
          </div>
          <div className="navbar__mobcontents">
            <NavLink
              data-aos="fade-right"
              data-aos-duration="200"
              to="/#home"
              onClick={() => {
                handleDrawerClose();
              }}
              className="navmob__link"
            >
              Home
            </NavLink>
            <NavLink
              data-aos="fade-right"
              data-aos-duration="400"
              to="/places"
              onClick={() => {
                handleDrawerClose();
              }}
              className="navmob__link"
            >
              Destinations
            </NavLink>
            <NavLink
              data-aos="fade-right"
              data-aos-duration="400"
              to="/items"
              onClick={() => {
                handleDrawerClose();
              }}
              className="navmob__link"
            >
              Items
            </NavLink>
            <PageLink
              data-aos="fade-right"
              data-aos-duration="600"
              to="/contact"
              onClick={() => {
                handleDrawerClose();
              }}
              className="navmob__link"
            >
              Contact
            </PageLink>

            {window.localStorage.getItem("access_token") ? (
              <PageLink
                data-aos="fade-right"
                data-aos-duration="800"
                onClick={() => {
                  window.localStorage.removeItem("access_token");
                  window.localStorage.removeItem("refresh_token");
                  handleDrawerClose();
                }}
                className="navmob__link"
              >
                Logout
              </PageLink>
            ) : (
              <PageLink
                data-aos="fade-right"
                data-aos-duration="800"
                to="/login"
                onClick={() => {
                  handleDrawerClose();
                }}
                className="navmob__link"
              >
                Login
              </PageLink>
            )}
            {window.localStorage.getItem("access_token") ? (
              <PageLink
                data-aos="fade-right"
                data-aos-duration="800"
                to="/profile"
                onClick={() => {
                  handleDrawerClose();
                }}
                className="navmob__link"
              >
                My Profile
              </PageLink>
            ) : (
              <PageLink
                data-aos="fade-right"
                data-aos-duration="1000"
                to="/signup"
                onClick={() => {
                  handleDrawerClose();
                }}
                className="navmob__link"
              >
                <button className="nav__signup">SIGNUP</button>
              </PageLink>
            )}
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default Navbar;
