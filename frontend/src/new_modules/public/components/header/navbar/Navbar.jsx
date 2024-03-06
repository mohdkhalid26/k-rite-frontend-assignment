import React, { useState } from "react";
import "./Navbar.scss";
import pixImg from "../../../../../assets/pix.png";
import dpImg1 from "../../../../../assets/image_B3lcVW0m_1682495747807_raw.jpg";
import {
  MdDesignServices,
  MdDeveloperMode,
  MdFolder,
  MdArrowDropDown,
} from "react-icons/md";
import { GrAnnounce } from "react-icons/gr";
import { useNavigate } from "react-router";

function Navbar() {
    
    const navigate = useNavigate()
  const [navOptionData] = useState([
    {
      name: "Design Team",
      icon1: <MdDesignServices />,
      icon2: null,
      innerData: null,
    },
    {
      name: "Marketing Team",
      icon1: <GrAnnounce />,
      icon2: null,
      innerData: null,
    },
    {
      name: "Development Team",
      icon1: <MdDeveloperMode />,
      icon2: null,
      innerData: null,
    },
    {
      name: "Products",
      icon1: <MdFolder />,
      icon2: <MdArrowDropDown />,
      innerData: [
        { name: "Roadmap" },
        { name: "Feedback" },
        { name: "Performance" },
        { name: "Team" },
        { name: "Analytics" },
      ],
    },
    { name: "Sales", icon1: <MdFolder />, icon2: null, innerData: null },
    { name: "Design", icon1: <MdFolder />, icon2: null, innerData: null },
    { name: "Office", icon1: <MdFolder />, icon2: null, innerData: null },
    { name: "Logout", icon1: <MdFolder />, icon2: null, innerData: null },
  ]);
  return (
    <nav>
      <div className="profile-div">
        <div className="brand-icon-div-of-profile-div">
          <img src={pixImg} alt="pixImg" />
        </div>
        <div className="brand-name-div-of-profile-div">
          <span>PIX</span>
          <b>Innovate Hub</b>
        </div>
        <div className="profile-dp-div">
          <img src={dpImg1} alt="dpImg1" />
        </div>
      </div>
      {navOptionData?.map((d, i) => {
        return (
          <div style={{cursor: d.innerData !== null ? "pointer" : ""}} className="nav-option-div" key={i + 1}>
            <span className="icon1-span">{d.icon1}</span>
            <span className="option-name-span">{d.name}</span>
            <span className="icon2-span">{d.icon2}</span>
            {d.innerData != null ? (
              <div className="inner-option-div">
                {d.innerData.map((d, i) => {
                  return (
                    <span key={i + 1} className="inner-option-span">
                      {d.name}
                    </span>
                  );
                })}
              </div>
            ) : (
              ""
            )}
          </div>
        );
      })}
      <div className="contact-btn-div">
        <button onClick={()=>navigate("/contact")}>Contact</button>
      </div>
    </nav>
  );
}

export default Navbar;
