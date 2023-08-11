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
            <Link to="/profile">
              <CgProfile />
              <p>Profile</p>
            </Link>
          </li>
          <li className="nav__container__list__link">
            <Link to="#">
              <PiTelevisionSimpleBold />
              <p> Newsfeed</p>
            </Link>
          </li>
          <li className="nav__container__list__link">
            <Link to="#">
              <SiOpenbadges />
              <p> Badges</p>
            </Link>
          </li>
          <li className="nav__container__list__link">
            <Link to="#">
              <MdOutlineExplore />
              <p>Explore Stories</p>
            </Link>
          </li>
          <li className="nav__container__list__link">
            <Link to="#">
              <MdGroups2 />
              <p>Popular Groups</p>
            </Link>
          </li>
        </ul>
        <ul className="nav__container__list"></ul>
      </div>
    </nav>
  );
};

export default Navbar;
