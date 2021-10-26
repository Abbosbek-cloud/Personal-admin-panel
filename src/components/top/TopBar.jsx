import React from 'react'
import "./topbar.css";
import { NotificationsActive, Settings, Language } from '@material-ui/icons';
import Pf from "../images/profile.jpg";





export default function TopBar() {
  return (
    <div classNam="topbar">
      <div classNam="topbarwrapper">
        <div classNam="top-left">
          <span classNam="logo">
            BekAdmin
          </span>
        </div>
        <div classNam="top-right">
          <div classNam="topbariconcontainer">
            <NotificationsActive/>
            <span classNam="topiconbadge">
              2
            </span>
          </div>
          <div classNam="topbariconcontainer">
            <Language />
            <span classNam="topiconbadge">
              2
            </span>
          </div>
          <div classNam="topbariconcontainer">
            <Settings />
          </div>
          <div classNam="profileimahe">
            <img
              classNam="profilephoto"
              src={Pf}
              alt="Profile"
            />
          </div>
        </div>
      </div>
      
    </div>
  );
}
