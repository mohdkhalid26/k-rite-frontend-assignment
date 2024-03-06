import React from "react";
import "./FilterBar.scss";
import { GrAppsRounded } from "react-icons/gr";
import { MdSort } from "react-icons/md";
import { FaCaretDown, FaFilter } from "react-icons/fa";
import { SiGooglemeet } from "react-icons/si";
import { FaTruckRampBox } from "react-icons/fa6";
function FilterBar() {
  return (
    <div className="products-filter-options-div">
      <div className="left-div-of-products-filter-options-div">
        <div className="all-brands-div">
          <span className="brand-icon-span">
            <GrAppsRounded />
          </span>
          <span className="name-span">All Brands</span>
          <span className="icon2-span">
            <FaCaretDown />
          </span>
        </div>
        <div className="desk-div">
          {" "}
          <span className="name-span">Desk</span>
          <span className="icon2-span">
            <FaCaretDown />
          </span>
        </div>
        <div className="tags-div">
          {" "}
          <span className="name-span">Tags</span>
          <span className="icon2-span">
            <FaCaretDown />
          </span>
        </div>
        <div className="sort-div">
          <span className="sort-icon-span">
            <MdSort />
          </span>
          <span className="name-span">Sort</span>
        </div>
        <div className="filter-div">
          <span className="filter-icon-span">
            <FaFilter />
          </span>
          <span className="name-span">Filter</span>
        </div>
      </div>
      <div className="right-div-of-products-filter-options-div">
        <div className="meeting-div">
          <span className="meeting-icon-span">
            <SiGooglemeet />
          </span>
          <span className="name-span">Meeting</span>
        </div>
        <div className="imp-exp-div">
          <span className="imp-exp-icon-span">
            <FaTruckRampBox />
          </span>
          <span className="name-span">Import/Export</span>
        </div>
      </div>
    </div>
  );
}

export default FilterBar;
