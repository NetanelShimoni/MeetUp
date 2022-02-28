import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { Button, IconButton } from "@material-ui/core";
import { ExitToAppRounded, HomeSharp } from "@material-ui/icons";
import LogoutIcon from "@mui/icons-material/Logout";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(true);
  return (
    <nav className="navbar">
      <h3 className="logo">
        <Link to="/">
          <img
            className="logo-img"
            src="https://machinelearning.co.il/wp-content/uploads/2020/05/Artboard-Copy-5-3-1.png"
          />
        </Link>
        <img
          className="logo-meetup"
          src="https://www.pikpng.com/pngl/b/259-2591532_contact-page-image-white-meetup-logo-png-clipart.png"
        />
      </h3>
      <ul
        className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setIsMobile(false)}
      ></ul>
      <ul className="nav-links">
        <Link to="/login" className="login">
          <li>
            <LogoutIcon
              style={{ margin: "5px" }}
              fontSize={"large"}
            ></LogoutIcon>
          </li>
        </Link>
        <Link to="/" className="home">
          <li>
            <HomeSharp></HomeSharp>
          </li>
        </Link>
        <Link to="/lastMeetUp" className="lastmeetup">
          <li>מייטאפ אחרון</li>
        </Link>

        <Link to="/about" className="about">
          <li>אודות</li>
        </Link>
      </ul>
      <button className="mobile-menu-icon">
        {isMobile ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </button>
      {/*<Button> Hello World</Button>*/}
    </nav>
  );
};
export default Navbar;
