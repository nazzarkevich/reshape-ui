import React from 'react';
import { Item } from '../Item';
import { ItemGroup } from '../ItemGroup';
import Tag from "../components/Tag";

export const TagElement = () => {
return (
  <ItemGroup title='Tag'>
    <Item title='Default' subtitle='Represents CSS Class selector - for example .wrapper'>
      <Tag>main-wrapper</Tag>
    </Item>
    <Item title='Selected'>
      <Tag active>main-wrapper</Tag>
    </Item>
    <Item title='Editable'>
      <Tag editable>main-wrapper</Tag>
    </Item>
    <Item title='Error' subtitle='Error state while editing'>
      <Tag error editable>main-wrapper</Tag>
    </Item>
    <Item title='Secondary' subtitle='Represents CSS Element selector for example h1, div ...'>
      <Tag secondary>main-wrapper</Tag>
    </Item>
  </ItemGroup>
);
};