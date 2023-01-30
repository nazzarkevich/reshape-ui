import React from 'react';
import {Item} from '../Item';
import {ItemGroup} from '../ItemGroup';
import Button from "../components/Button";

export const ButtonElement = () => {
  return (
    <ItemGroup title='Button'>
      <Item title='Default'>
        <Button>Reshape Button</Button>
      </Item>
      <Item title='Inverse'>
        <Button inverse>Reshape Button</Button>
      </Item>
      <Item title='Contained'>
        <Button variant='contained'>Reshape Button</Button>
      </Item>
    </ItemGroup>
  );
};