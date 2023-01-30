import React from 'react';
import {Item} from '../Item';
import {ItemGroup} from '../ItemGroup';
import Menu from "../components/Menu";

let menuOptions = [];

for (let i = 0; i < 10; i++) {
  menuOptions.push({
    id: `${i}`,
    name: `Menu item ${i}`
  });
}

export const MenuEl = () => {
  return (
    <ItemGroup title='Menu'>
      <Item title='Inactive Options'>
        <Menu
          options={menuOptions}
          inactiveOptions={['1', '2']}
          open={true}
          style={{width: 300}}
        />
      </Item>
    </ItemGroup>
  );
};