import React, { useState } from 'react';
import {Item} from '../Item';
import {ItemGroup} from '../ItemGroup';
import Input from "../components/Input";

export const InputElement = () => {
  const [value, setValue] = useState('100px');

  const onChange = (e) => setValue(e.target.value);

  return (
    <ItemGroup title='Input'>
      <Item title='Default'>
        <Input
          placeholder='Enter something'
          onChange={onChange}
          value={value}
        />
      </Item>
      <Item title='Secondary'>
        <Input
          placeholder='Enter something'
          onChange={onChange}
          secondary
          value={value}
        />
      </Item>
      <Item title='Error'>
        <Input
          placeholder='Enter something'
          onChange={onChange}
          error
          value={value}
        />
      </Item>
    </ItemGroup>
  );
};