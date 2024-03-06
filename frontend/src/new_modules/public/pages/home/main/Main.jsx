import React, { createContext } from "react";
import Products from "./products/Products";
import "./Main.scss";
import amdImg from "../../../../../assets/amd.png";
import artstationImg from "../../../../../assets/artstation.png";
import awsImg from "../../../../../assets/aws.png";
import golangImg from "../../../../../assets/golang.png";
import miImg from "../../../../../assets/mi.png";
import paypalImg from "../../../../../assets/paypal.png";
import shopifyImg from "../../../../../assets/shopify.png";
import vkImg from "../../../../../assets/vk.png";
import wazeImg from "../../../../../assets/waze.png";
import wixImg from "../../../../../assets/wix.png";
import dp1 from "../../../../../assets/image_B3lcVW0m_1682495747807_raw.jpg";
import dp2 from "../../../../../assets/image_NqroioTL_1680177600328_raw.webp";
import dp3 from "../../../../../assets/image_WU2VQrKy_1689529885549_raw.jpg";
import dp4 from "../../../../../assets/image_ZWQUkrn9_1688149864469_raw.jpg";
import dp5 from "../../../../../assets/image_pDVcI-rk_1688253154064_raw.webp";

export const GlobalInfo = createContext();
function Main() {
  const tableData = [
    {
      brandData: {
        img: wixImg,
        name: "Wix",
        msg: 2,
      },
      descripData: "Lorem ipsum dolor sit amet consectetur adipisicing",
      membersDp: [dp1, dp2, dp3, dp4, dp5, dp1],
      categoryData: ["Automation"],
      tagsData: ["#Digital", "#Tech", "#IT"],
      meetTime: "in 30 minutes",
    },
    {
      brandData: {
        img: wazeImg,
        name: "Waze",
        msg: 5,
      },
      descripData: "Lorem ipsum dolor sit amet consectetur adipisicing",
      membersDp: [dp1, dp2, dp4, dp5],
      categoryData: ["E-commerce", "B2B"],
      tagsData: ["#Marketing", "#Digital"],
      meetTime: "Tommorow",
    },
    {
      brandData: {
        img: vkImg,
        name: "VK",
        msg: null,
      },
      descripData: "Lorem ipsum dolor sit amet consectetur adipisicing",
      membersDp: [dp1, dp3, dp5, dp2, dp4],
      categoryData: ["SASS", "Mobile"],
      tagsData: ["#Design", "#UI/UX", "#Developer"],
      meetTime: "Next month",
    },
    {
      brandData: {
        img: shopifyImg,
        name: "Shopify",
        msg: null,
      },
      descripData: "Lorem ipsum dolor sit amet consectetur adipisicing",
      membersDp: [dp2, dp4],
      categoryData: ["B2B", "Market", "E-commerce"],
      tagsData: ["#Backend"],
      meetTime: "in 1 hours",
    },

    {
      brandData: {
        img: paypalImg,
        name: "PayPal",
        msg: 1,
      },
      descripData: "Lorem ipsum dolor sit amet consectetur adipisicing",
      membersDp: [dp5],
      categoryData: ["Money"],
      tagsData: ["#Accounting"],
      meetTime: "No contact",
    },
    {
      brandData: {
        img: wixImg,
        name: "Wix",
        msg: 2,
      },
      descripData: "Lorem ipsum dolor sit amet consectetur adipisicing",
      membersDp: [dp1, dp2, dp3, dp4, dp5, dp1],
      categoryData: ["Automation"],
      tagsData: ["#Digital", "#Tech", "#IT"],
      meetTime: "in 30 minutes",
    },
    {
      brandData: {
        img: wazeImg,
        name: "Waze",
        msg: 5,
      },
      descripData: "Lorem ipsum dolor sit amet consectetur adipisicing",
      membersDp: [dp1, dp2, dp4, dp5],
      categoryData: ["E-commerce", "B2B"],
      tagsData: ["#Marketing", "#Digital"],
      meetTime: "Tommorow",
    },
    {
      brandData: {
        img: vkImg,
        name: "VK",
        msg: null,
      },
      descripData: "Lorem ipsum dolor sit amet consectetur adipisicing",
      membersDp: [dp1, dp3, dp5, dp2, dp4],
      categoryData: ["SASS", "Mobile"],
      tagsData: ["#Design", "#UI/UX", "#Developer"],
      meetTime: "Next month",
    },
    {
      brandData: {
        img: shopifyImg,
        name: "Shopify",
        msg: null,
      },
      descripData: "Lorem ipsum dolor sit amet consectetur adipisicing",
      membersDp: [dp2, dp4],
      categoryData: ["B2B", "Market", "E-commerce"],
      tagsData: ["#Backend"],
      meetTime: "in 1 hours",
    },

    {
      brandData: {
        img: paypalImg,
        name: "PayPal",
        msg: 1,
      },
      descripData: "Lorem ipsum dolor sit amet consectetur adipisicing",
      membersDp: [dp5],
      categoryData: ["Money"],
      tagsData: ["#Accounting"],
      meetTime: "No contact",
    },
    {
      brandData: {
        img: miImg,
        name: "MI",
        msg: 2,
      },
      descripData: "Lorem ipsum dolor sit amet consectetur adipisicing",
      membersDp: [dp1, dp2, dp3, dp4, dp5, dp1],
      categoryData: ["Automation"],
      tagsData: ["#Digital", "#Tech", "#IT"],
      meetTime: "in 30 minutes",
    },
    {
      brandData: {
        img: golangImg,
        name: "GoLang",
        msg: 5,
      },
      descripData: "Lorem ipsum dolor sit amet consectetur adipisicing",
      membersDp: [dp1, dp2, dp4, dp5],
      categoryData: ["E-commerce", "B2B"],
      tagsData: ["#Marketing", "#Digital"],
      meetTime: "Tommorow",
    },
    {
      brandData: {
        img: awsImg,
        name: "AWS",
        msg: null,
      },
      descripData: "Lorem ipsum dolor sit amet consectetur adipisicing",
      membersDp: [dp1, dp3, dp5, dp2, dp4],
      categoryData: ["SASS", "Mobile"],
      tagsData: ["#Design", "#UI/UX", "#Developer"],
      meetTime: "Next month",
    },
    {
      brandData: {
        img: artstationImg,
        name: "Art Station",
        msg: null,
      },
      descripData: "Lorem ipsum dolor sit amet consectetur adipisicing",
      membersDp: [dp2, dp4],
      categoryData: ["B2B", "Market", "E-commerce"],
      tagsData: ["#Backend"],
      meetTime: "in 1 hours",
    },

    {
      brandData: {
        img: amdImg,
        name: "AMD",
        msg: 1,
      },
      descripData: "Lorem ipsum dolor sit amet consectetur adipisicing",
      membersDp: [dp5],
      categoryData: ["Money"],
      tagsData: ["#Accounting"],
      meetTime: "No contact",
    },
  ];
  return (
    <main>
      <GlobalInfo.Provider value={{ tableBodyData: tableData }}>
        <Products />
      </GlobalInfo.Provider>
    </main>
  );
}

export default Main;
