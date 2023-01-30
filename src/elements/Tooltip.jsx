import React from 'react';
import Tooltip from '../components/Tooltip';
import SwitchIconButton from '../components/SwitchIconButton';
import { Item } from '../Item';
import { ItemGroup } from '../ItemGroup';

export const TooltipElement = () => {
  return (
    <ItemGroup title='Tooltip'>
      <Item title='Default'>
        <Tooltip title='Super Tooltip'>
          <SwitchIconButton iconName='width'/>
        </Tooltip>
      </Item>
      <Item title='Bottom'>
        <Tooltip title='Super Tooltip' placement='bottom'>
          <SwitchIconButton iconName='width'/>
        </Tooltip>
      </Item>
      <Item title='Top start'>
        <Tooltip title='Super Tooltip' placement='top-start'>
          <SwitchIconButton iconName='width'/>
        </Tooltip>
      </Item>
      <Item title='Top End'>
        <Tooltip title='Super Tooltip' placement='top-end'>
          <SwitchIconButton iconName='width'/>
        </Tooltip>
      </Item>
    </ItemGroup>
  );
};