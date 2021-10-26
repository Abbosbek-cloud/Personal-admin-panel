import "./widgetSm.css"
import Pf from "../images/profile.jpg";
import { Visibility } from "@material-ui/icons"

export default function WidgetSm() {
  return (
    <div classNam="widgetSm">
      <span classNam="widgetSmTitle">New Join Member</span>
      <ul classNam="widgetSmList">
        <li classNam="widgetSmListItem">
          <img src={Pf} alt="" classNam="widgetSmImage" />
          <div classNam="widgetSmUser">
            <span classNam="username"><b>Abbosbek Sulaymonov</b></span>
            <span classNam="userTitle">Front-End developer</span>
            
          </div>
          <button classNam="widgetSmButton">
              <Visibility className="mr"/>
              Display
            </button>
        </li>
        <li classNam="widgetSmListItem">
          <img src={Pf} alt="" classNam="widgetSmImage" />
          <div classNam="widgetSmUser">
            <span classNam="username"><b>Abbosbek Sulaymonov</b></span>
            <span classNam="userTitle">Front-End developer</span>
            
          </div>
          <button classNam="widgetSmButton">
              <Visibility className="mr"/>
              Display
            </button>
        </li>
        <li classNam="widgetSmListItem">
          <img src={Pf} alt="" classNam="widgetSmImage" />
          <div classNam="widgetSmUser">
            <span classNam="username"><b>Abbosbek Sulaymonov</b></span>
            <span classNam="userTitle">Front-End developer</span>
            
          </div>
          <button classNam="widgetSmButton">
              <Visibility className="mr"/>
              Display
            </button>
        </li>
        <li classNam="widgetSmListItem">
          <img src={Pf} alt="" classNam="widgetSmImage" />
          <div classNam="widgetSmUser">
            <span classNam="username"><b>Abbosbek Sulaymonov</b></span>
            <span classNam="userTitle">Front-End developer</span>
            
          </div>
          <button classNam="widgetSmButton">
              <Visibility className="mr"/>
              Display
            </button>
        </li>
        <li classNam="widgetSmListItem">
          <img src={Pf} alt="" classNam="widgetSmImage" />
          <div classNam="widgetSmUser">
            <span classNam="username"><b>Abbosbek Sulaymonov</b></span>
            <span classNam="userTitle">Front-End developer</span>
          </div>
          <button classNam="widgetSmButton">
              <Visibility className="mr"/>
              Display
            </button>
        </li>
      </ul>
    </div>
  )
}