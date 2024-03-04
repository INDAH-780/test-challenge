import React from "react";
import "./Dashboard.css";
import { FaUser } from "react-icons/fa";
import { FaAlignJustify } from "react-icons/fa6";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaRegCalendarDays } from "react-icons/fa6";
import { FaSliders } from "react-icons/fa6";
import { FaUserLarge } from "react-icons/fa6";
import { FaList } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";
import { FaRegSun } from "react-icons/fa6";
import { FaHourglass } from "react-icons/fa6";
import { FaRegMessage } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import { FaBell } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Dashboard() {
  return (
    <div className="main-container">
      <div className="colored">
        <div className="try">
          <h2>
            <FaSliders /> NJOKWA
          </h2>
          <h4>
            <FaAlignJustify /> Dashboard
          </h4>
          <h4>
            <FaRegCalendarDays /> Events
          </h4>
          <button>
            <FaUserLarge /> My Account
          </button>
          <h4>
            <FaList /> Transactions
          </h4>
          <h4>
            <FaArrowTrendUp /> Latest Activity
          </h4>
          <h4>
            <FaRegMessage />
            Chats
          </h4>
          <div className="moon">
            <FaMoon />
          </div>
        </div>
      </div>
      <div className="not-colored">
        <div className="search-bar">
          <h3>MY ACCOUNT</h3>
          {/*
          <div className="searchIcon">
            <FaMagnifyingGlass />
          </div>*/}
          <div>
            <input type="search" placeholder="Search here" className="search" />
          </div>
          <div className="icon">
            <FaBell />
          </div>
          <div className="icon">
            <FaRegSun />
          </div>
        </div>
        <div className="forms">
          <form id="form">
            <div className="form-control">
              <label>Names</label>

              {/*<FaUser className="icons" />*/}

              <input type="text" name="full-name" />
            </div>
            <div className="form-control">
              <label>Institutional Email</label>
              {/*<FaUser className="icons" />*/}
              <input type="email" name="email" />
            </div>
            <div className="form-control">
              <label>Phone Number</label>
              {/*<FaUser className="icons" />*/}
              <input type="number" name="phone-number" />
            </div>
            <div className="form-control">
              <label>Password</label>
              {/*<FaEyeSlash className="icons" />*/}
              <input type="password" name="password" />
            </div>
            <div className="form-control">
              <label>Confirm Password</label>
              {/*<FaEyeSlash className="icons" />*/}
              <input type="password" name="confirm-password" />
            </div>

            <button id="update">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
