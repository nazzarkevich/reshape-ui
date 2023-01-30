import React from 'react';
import Node from '../components/Node';
import Icon from '../components/Icon';
import { Item } from '../Item';
import { ItemGroup } from '../ItemGroup';

export const NodeElement = () => {
return (
  <ItemGroup title='Node'>
    <Item title='Default'>
      <Node startIcon={<Icon name='arrow-down'/>} nodeIcon={<Icon name='div'/>} label='div'/>
    </Item>
    <Item title='Hovered'>
      <Node nodeIcon={<Icon name='div'/>} label='div' hovered/>
    </Item>
    <Item title='Selected'>
      <Node nodeIcon={<Icon name='div'/>} label='div' primary/>
    </Item>
    <Item title='Selected children'>
      <Node nodeIcon={<Icon name='div'/>} label='div' tertiary/>
    </Item>
  </ItemGroup>
);
};