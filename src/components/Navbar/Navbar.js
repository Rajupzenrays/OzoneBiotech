import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";
import Logo from '../../Images/Ozone-logo.png'
import { CiSearch } from 'react-icons/ci'
import Cart from '../../Images/Buy.svg'
import favIcon from '../../Images/Heart.svg'
import profileIcon from '../../Images/profileIcon.png'

function Navbar() {
  const location = useLocation();

  return (
    <div className="container internal_navbar_container">
      <nav>
        <div className="left_part">
          <Link to="/">
            <img src={Logo} alt="logo" style={{ height: "60px", width: "100px" }} />
          </Link>

          <div>
            <ul id="internal_navbar">
              <li>
                <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/all-product" className={location.pathname === '/all-product' ? 'active' : ''}>
                  Our Products
                </Link>
              </li>

              <li>
                <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
                  About Us
                </Link>
              </li>


              <li>
                <Link to="/contactus" className={location.pathname === '/contactus' ? 'active' : ''}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <ul id="internal_navbar">
            <li>
              <div className="search-container">
                <input type="search" className="search" placeholder="Search" />
                <CiSearch className="search-icon" />
              </div>
            </li>
            <li>
              <Link to="/cart" className={location.pathname === '/cart' ? 'active' : ''}>
                <img src={Cart} alt="" />
              </Link>
            </li>
            <li>
              <Link to="/fav" className={location.pathname === '/fav' ? 'active' : ''}>
                <img src={favIcon} alt="favIcon" />
              </Link>
            </li>
            <li>
              <Link to="/" className={location.pathname === '/profile' ? 'active' : ''}>
                <img className={"profile"} src={profileIcon} alt="profile" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
