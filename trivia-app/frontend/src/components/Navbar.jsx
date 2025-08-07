import React, { useState, useEffect } from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { getSideBarData } from "./SidebarData"; // now a function
import '../CSS/App.css';
import { IconContext } from "react-icons";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/user", {
          method: "GET",
          credentials: "include",
        });

        setIsAuthenticated(res.ok);
      } catch (err) {
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  const menuItems = getSideBarData(isAuthenticated); // dynamically filtered

  return (
    <>
      <IconContext.Provider value={{ color: "undefined" }}>
        <div className="navbar-test">
          <Link to="#" className="menu-bars-test">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {menuItems.map((item, index) => {
              const Icon = item.icon || (() => null);
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    <Icon />
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;