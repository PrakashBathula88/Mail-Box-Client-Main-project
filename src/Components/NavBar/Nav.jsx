import React from "react";
import "./Nav.css";
import { Link, useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { BsPersonCircle } from "react-icons/bs";
import { VscQuestion } from "react-icons/vsc";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosKeypad } from "react-icons/io";
export default function Nav() {
  const navigate = useNavigate();
  const homeNavigation = () => {
    navigate("/");
  };
  return (
    <div>
      <nav>
        <ul>
          <div>
            <li>
              <Link to="/" onClick={homeNavigation}>
                <img
                  src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png"
                  alt="Loading...."
                  className="image-settinf"
                ></img>
              </Link>
            </li>
          </div>
          <div className="search-container ">
            <li>
              <IoIosSearch className="search-icon" />
              <input type="search" placeholder="Search..."></input>
            </li>
          </div>
          <div className="All-iconics">
            <div className="question">
              <li>
                <VscQuestion />
              </li>
              <li>
                <IoSettingsOutline />
              </li>
              <li>
                <IoIosKeypad />
              </li>
              <li>
                <Link to="/signin">
                  <BsPersonCircle className="signin" />
                </Link>
              </li>
            </div>
          </div>
        </ul>
      </nav>
    </div>
  );
}
