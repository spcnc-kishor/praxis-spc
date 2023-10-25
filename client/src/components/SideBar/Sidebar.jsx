import "./SidebarStyle.css";
import { MdDashboard } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { FaPeopleRoof, FaBriefcase } from "react-icons/fa6";
import { BsBarChartFill, BsFillFileEarmarkRuledFill } from "react-icons/bs";
import { HiFolderOpen } from "react-icons/hi";
import { AiFillSetting } from "react-icons/ai";
import { Link } from "react-router-dom";

const optionsInfo = [
  { title: "Dashboard", icon: MdDashboard, href: "/" },
  { title: "Manage Organisation", icon: IoIosPeople, href: "/" },
  { title: "Manage People", icon: FaPeopleRoof, href: "/" },
  { title: "Manage Engagement", icon: FaBriefcase, href: "/" },
  { title: "Sales Pipeline", icon: BsBarChartFill, href: "/" },
  { title: "Library", icon: HiFolderOpen, href: "/" },
];

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__menu">
        {optionsInfo?.map((option, index) => (
          <Link
            to={option.href}
            className="sidebar__menu__item_link"
            key={index}
          >
            <div className={`sidebar__menu__item`}>
              <div className="sidebar_menuitem_icon">
                <option.icon />
              </div>
              <div className="sidebar_menuitem_text">
                <p>{option.title}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="sidebar__menu">
        <Link to={""} className="sidebar__menu__item_link">
          <div className={`sidebar__menu__item`}>
            <div className="sidebar_menuitem_icon">
              <AiFillSetting />
            </div>
            <div className="sidebar_menuitem_text">
              <p>People Settings</p>
            </div>
          </div>
        </Link>
        <Link to="" className="sidebar__menu__item_link">
          <div className={`sidebar__menu__item`}>
            <div className="sidebar_menuitem_icon">
              <BsFillFileEarmarkRuledFill />
            </div>
            <div className="sidebar_menuitem_text">
              <p>HR Policies</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
