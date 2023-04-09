import { Collapse, List, ListItemButton, ListItemIcon } from '@mui/material'
import React from 'react'
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { StarBorder } from '@material-ui/icons';
import { ListItemText } from '@material-ui/core';
import { useRouter } from 'next/router';
import { Routes } from '../../interfaces/index';


interface Props {
    route:Routes
}

const ItemMenu = ({route}:Props) => {
    const {name,path,subItem} = route
    const router = useRouter();

    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(!open);
      };
  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary={name} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        
          {
            subItem?.length
            ?
            <List component="div" disablePadding>
            {...subItem.map((e)=>(<ListItemButton key={ Math.random() } sx={{ pl: 6 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary={e.name} onClick={() => router.push(`${e.path}`)}/>
              </ListItemButton>))
            }
            </List>
            :null
          }          
        
      </Collapse>
    </>
  )
}

export default ItemMenu
