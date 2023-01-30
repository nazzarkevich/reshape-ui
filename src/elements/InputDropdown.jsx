import React from 'react';
import {Item} from '../Item';
import {ItemGroup} from '../ItemGroup';
import InputDropdown from "../components/InputDropdown";

export const InputDropdownEl = () => {
  return (
    <ItemGroup title='InputDropdown'>
      <Item title='Default'>
        <InputDropdown
          value={'12'}
          selectedId={'px'}
          showDropdown={true}
          placeholder='width'
        />
      </Item>
      <Item title='Secondary'>
        <InputDropdown
          secondary={true}
          value={'12'}
          selectedId={'px'}
          showDropdown={true}
          placeholder='width'
        />
      </Item>
      <Item title='Error'>
        <InputDropdown
          error={true}
          value={'12'}
          selectedId={'px'}
          showDropdown={true}
          placeholder='width'
        />
      </Item>
    </ItemGroup>
  );
};