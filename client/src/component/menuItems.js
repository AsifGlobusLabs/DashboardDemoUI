// menuItems.js
//import React, { useEffect, useState } from "react";
//import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import { _post } from "../CommonUtilAPI/GLApiClient";

export const menuItems = () => {
  const menuData = null;
  console.log("USER_CD by Sam", window.sessionStorage.getItem("USER_CD"));
  const response = _post("/Menu", {
    USER_CD: window.sessionStorage.getItem("USER_CD"),
  });
  console.log("Menu", response.data[0]);
  if (response.status === 200) {
  }
  return;
};
/*
export const menuItems = [
  {
    text: "HR",
    icon: <LeaderboardIcon />,
    path: "/dashboard",
    submenu: [
      { text: "Employee", path: "/employee" },
      { text: "Code Selection", path: "/code-selection" },
      { text: " Leave Selection", path: "/code-selection" },
    ],
  },
  {
    text: "CM",
    icon: <LeaderboardIcon />,
    path: "/dashboard",
    submenu: [
      { text: "Basic Setting", path: "/employee" },
      { text: "Common Code", path: "/code-selection" },
    ],
  },
];
*/
