import React, { useState } from 'react';
import {ItemGroup} from '../ItemGroup';
import {Item} from '../Item';
import Autocomplete from "../components/Autocomplete";

const options = [
  {
    name: 'The Shawshank Redemption',
    id: 'Frank Darabont',
  },
  {
    name: 'The Godfather',
    id: 'Francis Ford Coppola',
  },
  {
    name: 'The Dark Knight',
    id: 'Christopher Nolan',
  },
  {
    name: '12 Angry Men',
    id: 'Sidney Lumet',
  },
  {
    name: 'Schindler"s List',
    id: 'Steven Spielberg',
  },
  {
    name: 'Pulp Fiction',
    id: 'Quentin Tarantino',
  },
  {
    name: 'The Lord of the Rings: The Return of the King',
    id: 'Peter Jackson',
  },
];

export const AutocompleteEl = () => {
  const [value, setValue] = useState();

  const onChange = (e, value) => setValue(value);

  return (
    <ItemGroup title='Autocomplete'>
      <Item subtitle={`Currently doesn't show selected title, because we didn't used it for classes`}>
        <Autocomplete
          placeholder='Select movies'
          options={options}
          onChange={onChange}
        />
      </Item>
    </ItemGroup>
  );
};