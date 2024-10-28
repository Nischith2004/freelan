import "./Nav.css";
import { useMediaQuery } from "react-responsive";

import { useState, useEffect } from "react";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import ThreeDRotation from "@mui/icons-material/ThreeDRotation";
import CottageIcon from "@mui/icons-material/Cottage";

export default function Nav() {
  const isTabletOrMobile = useMediaQuery({ query: "(min-width: 640px)" });
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    const closeDropdown = (event) => {
      if (!event.target.closest(".dropdown")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", closeDropdown);
    return () => document.removeEventListener("mousedown", closeDropdown);
  }, []);

  return (
    <nav className="nav">
      <ul id="uolist">
        <li className="logo">
          <h1>
            <i className="fa-thin fa-florin-sign"></i>freelan
          </h1>
        </li>
        {isTabletOrMobile ? (
          <>
            <li className="navflex">
              <a href="#homepage1">Homepage</a>
            </li>
            <li className="navflex">
              <a href="#content1">Content</a>
            </li>

            <li className="navflex">
              <a href="#service1">service</a>
            </li>

            <li className="navflex">
              <a href="#contact1">contact</a>
            </li>
          </>
        ) : (
          <li className="menuicon">
            <div className="dropdown">
              <button onClick={toggleDropdown} className="dropdownToggle">
                <CottageIcon color="pink"></CottageIcon>
              </button>
              {isOpen && (
                <ul className="dropdownMenu">
                  <li>
                    <a href="#homepage1">Homepage</a>
                  </li>
                  <li>
                    <a href="#Content1">Content</a>
                  </li>
                  <li>
                    <a href="#service1">service</a>
                  </li>
                  <li>
                    <a href="#contact1">contact</a>
                  </li>
                </ul>
              )}
            </div>
          </li>
        )}
      </ul>
    </nav>
  );
}
