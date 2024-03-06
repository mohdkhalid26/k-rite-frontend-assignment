import React from "react";
import "./Data.scss";
import { TbBrandVscode } from "react-icons/tb";
import TableBody from "./table_body/TableBody";

function Data({data}) {
  return (
    <div className="products-data-div">
      <table>
        <thead>
          <tr>
            <th className="th1">

            <label className="label"  htmlFor="all brand check">
              <input
                type="checkbox"
                name="all brand check"
                id="all brand check"
                />
              <b>Brand</b>
              <span>+</span>
            </label>
                </th>

            <th className="th2">Description</th>
            <th className="th3">Members</th>
            <th className="th4">Categories</th>
            <th className="th5">Tags</th>
            <th className="th6">Next Meeting</th>
            <th className="th7">+</th>
          </tr>
        </thead>
        <TableBody data = {data}/>
        <tfoot>
          <tr>
            <td className="td1">
              <span className="count-icon-span">
                <TbBrandVscode />
              </span>
              <b>Count</b>
            </td>
            <td className="td2">
              {" "}
              <b>+ Add Calculation</b>
            </td>
            <td className="td3">
              {" "}
              <b>+ Add Calculation</b>
            </td>
            <td className="td4">
              {" "}
              <b>+ Add Calculation</b>
            </td>
            <td className="td5">
              {" "}
              <b>+ Add Calculation</b>
            </td>
            <td className="td6"></td>
            <td className="td7"></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default Data;
