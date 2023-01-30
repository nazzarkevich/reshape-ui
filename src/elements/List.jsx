import React from 'react';
import {Item} from '../Item';
import {ItemGroup} from '../ItemGroup';
import List from "../components/List";
import ListItem from "../components/ListItem";
import ListItemText from "../components/ListItemText";

export const ListEl = () => {
  return (
    <ItemGroup title='List'>
      <Item title='Default'>
        <List>
          <ListItem>
            <ListItemText>List Item 1</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>List Item 2</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>List Item 3</ListItemText>
          </ListItem>
        </List>
      </Item>
      <Item title='Active 1 and inactive 2 items'>
        <List>
          <ListItem>
            <ListItemText active>List Item 1</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText inactive>List Item 2</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>List Item 3</ListItemText>
          </ListItem>
        </List>
      </Item>
    </ItemGroup>
  );
};