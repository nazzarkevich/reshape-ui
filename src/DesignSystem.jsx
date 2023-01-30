import React from 'react';
import { NodeElement } from './elements/Node';
import { TagElement } from './elements/Tag';
import { TooltipElement } from './elements/Tooltip';
import { ButtonElement } from './elements/Button';
import { InputElement } from './elements/Input';
import { IconButtonElement } from './elements/IconButton';
import { SwitchIconButtonEl } from './elements/SwitchIconButton';
import { AutocompleteEl } from './elements/Autocomplete';
import { InputDropdownEl } from './elements/InputDropdown';
import { ListEl } from './elements/List';
import { TabsEl } from './elements/Tabs';
import { FlexFlowerEl } from './elements/FlexFlower';
import { DividerEl } from './elements/Divider';
import { MenuEl } from './elements/Menu';

export const DesignSystem = () => {
  return (
    <>
      <NodeElement/>
      <TagElement/>
      <TooltipElement/>
      <ButtonElement/>
      <InputElement/>
      <IconButtonElement/>
      <SwitchIconButtonEl/>
      <AutocompleteEl/>
      <InputDropdownEl/>
      <ListEl/>
      <TabsEl/>
      <FlexFlowerEl/>
      <DividerEl/>
      <MenuEl/>
    </>
  );
}
