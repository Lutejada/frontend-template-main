import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import Link from "next/link";
import { useRouter } from "next/router";
import ItemMenu from "./ItemMenu";
import { Routes } from "@/interfaces";

export default function NestedList() {
  const routes: Routes[] = [
    {
      name: "equipos",
      path: "equipos",
      subItem: [
        { name: "Crear", path: "crear" },
        { name: "Actualizar", path: "actualizar" },
      ],
    },
    { name: "Patrones", path: "patrones" },
    {name:'configuraciones',path:'configure'}
  ];

  return (
    <List
      sx={{ width: "100%", maxWidth: 200, bgcolor: "#90caf9" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      {...routes.map((item) => <ItemMenu route={item} key={item.name} />)}
    </List>
  );
}
