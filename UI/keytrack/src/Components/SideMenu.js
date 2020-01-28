//skeleton side menu
//not get installed material-ui.

import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from '@material-ui/core/ListItemText'

function SideMenu({items}){
  return (
    <div className="sideMenu">
      <List disablePadding dense>
        {items.map(({label, name,...rest})=>(
          <ListItem keyname={name} button {...rest}>
            <ListItemText>{label}</ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  )
}
export default SideMenu
