import React from 'react';
import {Item} from '../Item';
import {ItemGroup} from '../ItemGroup';
import Link from "../components/Link";

export const LinkEl = () => {
  return (
    <ItemGroup title='Button'>
      <Item title='Default'>
        <Link>About me</Link>
      </Item>
      <Item title='Active'>
        <Link active>About me</Link>
      </Item>
      <Item title='Inactive'>
        <Link inactive>About me</Link>
      </Item>
    </ItemGroup>
  );
};