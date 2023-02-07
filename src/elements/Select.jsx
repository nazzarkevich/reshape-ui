import React, { useState } from 'react';
import {ItemGroup} from '../ItemGroup';
import {Item} from '../Item';
import Select from '../components/Select';
import { UNIT } from '../components/constants';

const units = [
  {
    id:   UNIT.PX,
    name: UNIT.PX
  },
  {
    id:   UNIT.PCT,
    name: UNIT.PCT
  },
  {
    id:   UNIT.EM,
    name: UNIT.EM
  },
  {
    id:   UNIT.REM,
    name: UNIT.REM
  },
  {
    id:   UNIT.VW,
    name: UNIT.VW
  },
  {
    id:   UNIT.VH,
    name: UNIT.VH
  }
];

export const SelectEl = () => {
  const [value, setValue] = useState(units[0].id);

  const onChange = (value) => setValue(value);

  return (
    <ItemGroup title='Select'>
      <Item>
        <Select
          value={value}
          options={units}
          onChange={onChange}
        />
      </Item>
    </ItemGroup>
  );
};