import React from 'react';
import {Item} from '../Item';
import {ItemGroup} from '../ItemGroup';
import Markers from "../components/Markers";

export const FlexFlowerEl = () => {
  return (
    <ItemGroup title='Flex controller'>
      <Item title='Default'>
        <Markers/>
      </Item>
    </ItemGroup>
  );
};