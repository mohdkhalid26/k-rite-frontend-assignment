import React from "react";
import "./TableBody.scss";
import { HiOutlineChatAlt2 } from "react-icons/hi";
function TableBody({ data }) {
  return (
    <tbody>
      {data?.map((d, i) => {
        return (
          <tr className={`${d.brandData.name}-tr`} key={i + 1}>
            <td className={`${d.brandData.name}-td-1 td1`}>
              <input type="checkbox" />
              <img src={d.brandData.img} width={25} alt="brand img" />
              <span className="name">{d.brandData.name}</span>
              {d.brandData.msg !== null ? (
                <span className="msg">
                  <HiOutlineChatAlt2 /> {d.brandData.msg}
                </span>
              ) : (
                ""
              )}
            </td>
            <td className={`${d.brandData.name}-td-2 td2`}>{d.descripData}</td>
            <td className={`${d.brandData.name}-td-3 td3`}>
              {d.membersDp?.map((d4, i4) => {
                return (
                  <img src={d4} key={i4 + 1} width={34} alt="member img" />
                );
              })}
            </td>
            <td className={`${d.brandData.name}-td-4 td4`}>
              {d.categoryData?.map((d2, i2) => {
                return <span key={i2 + 1}>{d2}</span>;
              })}
            </td>
            <td className={`${d.brandData.name}-td-5 td5`}>
              {d.tagsData?.map((d3, i3) => {
                return <span key={i3 + 1}>{d3}</span>;
              })}
            </td>
            <td className={`${d.brandData.name}-td-6 td6`}>
              <span> {d.meetTime}</span>
            </td>
            <td className={`${d.brandData.name}-td-7 td7`}></td>
          </tr>
        );
      })}
    </tbody>
  );
}

export default TableBody;
