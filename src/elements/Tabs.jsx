import React from 'react';
import {Item} from '../Item';
import {ItemGroup} from '../ItemGroup';
import Tabs from "../components/Tabs";
import Tab from "../components/Tab";

export const TabsEl = () => {
  return (
    <ItemGroup title='Tab icons'>
      <Item title='Default'>
        <Tabs onChange={(value) => console.log(value)}>
          <Tab value='1' iconName='brush'/>
          <Tab value='2' iconName='code'/>
        </Tabs>
      </Item>
    </ItemGroup>
  );
};