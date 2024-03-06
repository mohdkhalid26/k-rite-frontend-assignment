import React, { useContext, useState } from "react";
import "./Products.scss";
import Data from "./data/Data";
import { IoIosSearch, IoMdSettings } from "react-icons/io";
import { IoMdArchive } from "react-icons/io";
import { FaCaretDown, FaBell } from "react-icons/fa";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import FilterBar from "./filter_bar/FilterBar";
import { GlobalInfo } from "../Main";
import { MdDelete } from "react-icons/md";

function Products() {
  const { tableBodyData } = useContext(GlobalInfo);
  const [data, setData] = useState(tableBodyData);
  function searchBrand(val) {
    let filterData = tableBodyData.filter((d, i) => {
      return d.brandData.name.toLowerCase().indexOf(val.toLowerCase()) !== -1;
    });
    setData(!val ? tableBodyData : filterData);
  }
  return (
    <div className="products">
      <div className="products-head-div">
        <h3>Products</h3>
        <div className="right-div-of-products-head-div">
          <div className="input-div">
            <span className="search-icon">
              <IoIosSearch />
            </span>
            <input
              onChange={(e) => searchBrand(e.target.value)}
              type="text"
              placeholder="Search Brand"
            />
          </div>
          <span className="msg-icon">
            <HiOutlineChatAlt2 />
          </span>
          <span className="setting-icon">
            <IoMdSettings />
          </span>
        </div>
      </div>
      <FilterBar />
      <Data data={data} />
      <div className="more-option-flot-btn-div">
        <button>
          <span>
            <FaBell />
          </span>
          <span>Selected</span>
        </button>
        <button>
          <span>
            <IoMdArchive />
          </span>
          <span>Archive</span>
        </button>
        <button>
          <span>
            <MdDelete />
          </span>
          <span>Delete</span>
        </button>
        <button>
          <span>
            <FaCaretDown />
          </span>
          <span>More</span>
        </button>
        <button>
          <span>x</span>
        </button>
      </div>
    </div>
  );
}

export default Products;
