import React from 'react'
import './sidebar.css'
import { LineStyle, Timeline, TrendingUp, Report, WorkOutline, DynamicFeed, PermIdentity, MailOutline, ChatBubbleOutline, StorefrontOutlined, AttachMoneyOutlined } from '@material-ui/icons'
import { Link } from "react-router-dom"

export default function Sidebar() {
  return (
    
    <div classNam="sidebar">
      <div classNam="sidebarWrapper">
        <div classNam="sidebarMenu">
          <h3 classNam="sidebarTitle">Dashboard</h3>
          <ul classNam="sidebarList">
            <Link to="/" className="link">
              <li classNam="sidebarListItem active">
                <LineStyle className="sidebaricon"/>
                Home
              </li>
            </Link>
            <li classNam="sidebarListItem">
              <Timeline className="sidebaricon"/>
              Analytics
            </li>
            <li classNam="sidebarListItem">
              <TrendingUp className="sidebaricon"/>
              Sales
            </li>
          </ul>
        </div>
        <div classNam="sidebarMenu">
          <h3 classNam="sidebarTitle">Quick Menu</h3>
          <ul classNam="sidebarList">
            <Link to="/users" className="link">
              <li classNam="sidebarListItem">
                  <PermIdentity className="sidebaricon"/>
                  Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li classNam="sidebarListItem">
                <StorefrontOutlined className="sidebaricon"/>
                Products
              </li>
            </Link>
            <li classNam="sidebarListItem">
              <AttachMoneyOutlined className="sidebaricon"/>
              Transactions
            </li>
          </ul>
        </div>
        <div classNam="sidebarMenu">
          <h3 classNam="sidebarTitle">Notifications</h3>
          <ul classNam="sidebarList">
            <li classNam="sidebarListItem">
              <MailOutline className="sidebaricon"/>
              Mail
            </li>
            <li classNam="sidebarListItem">
              <DynamicFeed className="sidebaricon"/>
              Feedback
            </li>
            <li classNam="sidebarListItem">
              <ChatBubbleOutline className="sidebaricon"/>
              Feedback
            </li>
          </ul>
        </div>
        <div classNam="sidebarMenu">
          <h3 classNam="sidebarTitle">Staff</h3>
          <ul classNam="sidebarList">
            <li classNam="sidebarListItem">
              <WorkOutline className="sidebaricon"/>
              Manage
            </li>
            <li classNam="sidebarListItem">
              <Timeline className="sidebaricon"/>
              Analytics
            </li>
            <li classNam="sidebarListItem">
              <Report className="sidebaricon"/>
              Report
            </li>
          </ul>
        </div>


      </div>
    </div>
  )
}
