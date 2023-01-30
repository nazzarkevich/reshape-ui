import React from 'react';
import {Item} from '../Item';
import {ItemGroup} from '../ItemGroup';
import Divider from "../components/Divider";

export const DividerEl = () => {
  return (
    <ItemGroup title='Divider'>
      <Item title='Default'>
        <Divider/>
      </Item>
    </ItemGroup>
  );
};