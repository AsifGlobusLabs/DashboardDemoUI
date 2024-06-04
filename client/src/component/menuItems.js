// menuItems.js
import React from "react";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";

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
