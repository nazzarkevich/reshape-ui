import React from 'react';
import {Item} from '../Item';
import {ItemGroup} from '../ItemGroup';
import IconButton from "../components/IconButton";

export const IconButtonElement = () => {
  return (
    <ItemGroup title='IconButton'>
      <Item title='Default'>
        <IconButton iconName='import'/>
      </Item>
      <Item title='Primary'>
        <IconButton iconName='import' primary/>
      </Item>
      <Item title='Active'>
        <IconButton iconName='import' active/>
      </Item>
    </ItemGroup>
  );
};