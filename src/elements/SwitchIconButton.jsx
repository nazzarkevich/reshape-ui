import React from 'react';
import { Item } from '../Item';
import { ItemGroup } from '../ItemGroup';
import SwitchIconButton from "../components/SwitchIconButton";

export const SwitchIconButtonEl = () => {
return (
  <ItemGroup title='SwitchIconButton'>
    <Item title='Default'>
      <SwitchIconButton iconName='width' switchedIconName='delete'/>
    </Item>
    <Item title='Active'>
      <SwitchIconButton iconName='width' switchedIconName='delete' status='active'/>
    </Item>
    <Item title='Inactive' subtitle='Represent Inherited styles'>
      <SwitchIconButton iconName='width' switchedIconName='delete' status='applied'/>
    </Item>
    <Item title='Error'>
      <SwitchIconButton iconName='width' status='error'/>
    </Item>
  </ItemGroup>
);
};