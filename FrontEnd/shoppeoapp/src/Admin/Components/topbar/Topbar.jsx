import React from "react";
import "./tobbar.css";

import {CiSettings } from "react-icons/ci"
import {MdOutlineNotificationsNone,MdLanguage} from "react-icons/md"
export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Shoppeo</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <MdOutlineNotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <MdLanguage />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <CiSettings/>
          </div>
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}