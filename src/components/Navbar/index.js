import React from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { MdOutlineExplore, MdGroups2 } from "react-icons/md";
import { SiOpenbadges } from "react-icons/si";
import { PiTelevisionSimpleBold } from "react-icons/pi";
const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav__container">
        <h3>New Feeds</h3>
        <ul className="nav__container__list">
          <li className="nav__container__list__link">
            <CgProfile />
            <Link to="/profile">Profile</Link>
          </li>
          <li className="nav__container__list__link">
            <PiTelevisionSimpleBold />
            <Link to="#">Newsfeed</Link>
          </li>
          <li className="nav__container__list__link">
            <SiOpenbadges />
            <Link to="#">Badges</Link>
          </li>
          <li className="nav__container__list__link">
            <MdOutlineExplore />
            <Link to="#">Explore Stories</Link>
          </li>
          <li className="nav__container__list__link">
            <MdGroups2 />
            <Link to="#">Popular Groups</Link>
          </li>
        </ul>
        <ul className="nav__container__list"></ul>
      </div>
    </nav>
  );
};

export default Navbar;
