import React, { useState } from 'react';
import {Item} from '../Item';
import {ItemGroup} from '../ItemGroup';
import InputDropdown from "../components/InputDropdown";
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

export const InputDropdownEl = () => {
  const [value, setValue] = useState('12');
  const [id, setId] = useState(units[0].id);

  const handleInputChange = (event) => {
    setValue(event.target.value);
  }

  const onDropdownChange = (value) => {
    setId(value);
  }

  return (
    <ItemGroup title='InputDropdown'>
      <Item title='Default'>
        <InputDropdown
          value={value}
          selectedId={id}
          showDropdown={true}
          onInputChange={handleInputChange}
          onDropdownChange={onDropdownChange}
          options={units}
        />
      </Item>
      <Item title='Secondary'>
        <InputDropdown
          secondary={true}
          value={value}
          selectedId={id}
          showDropdown={true}
          onInputChange={handleInputChange}
          onDropdownChange={onDropdownChange}
          options={units}
        />
      </Item>
      <Item title='Error'>
        <InputDropdown
          error={true}
          value={value}
          selectedId={id}
          showDropdown={true}
          onInputChange={handleInputChange}
          onDropdownChange={onDropdownChange}
          options={units}
        />
      </Item>
    </ItemGroup>
  );
};