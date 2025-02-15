import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import SidebarItem, { SidebarItemProps } from './SidebarItem';

export default {
  title: 'Sidebar/SidebarItem',
  component: SidebarItem,
  argTypes: {},
  decorators: [
    Story => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as Meta;

const Template: Story<SidebarItemProps> = args => {
  return (
    <Grid item style={{ backgroundColor: 'rgba(0, 0, 0, 0.87)' }}>
      <List>
        <SidebarItem {...args} />
      </List>
    </Grid>
  );
};

export const Selected = Template.bind({});
Selected.args = {
  selectedName: 'cluster',
  name: 'cluster',
  label: 'Cluster',
  icon: 'mdi:hexagon-multiple-outline',
  fullWidth: true,
};

export const Unselected = Template.bind({});
Unselected.args = {
  selectedName: 'meow',
  name: 'cluster',
  label: 'Cluster',
  icon: 'mdi:hexagon-multiple-outline',
  fullWidth: true,
};

export const SublistExpanded = Template.bind({});
SublistExpanded.args = {
  selectedName: 'cluster',
  name: 'cluster',
  label: 'Cluster',
  fullWidth: true,
  icon: 'mdi:hexagon-multiple-outline',
  subList: [
    {
      selectedName: 'cluster',
      name: 'namespaces',
      label: 'Namespaces',
      hasParent: true,
    },
  ],
};

export const Sublist = Template.bind({});
Sublist.args = {
  selectedName: 'meow',
  name: 'cluster',
  label: 'Cluster',
  fullWidth: true,
  icon: 'mdi:hexagon-multiple-outline',
  subList: [
    {
      selectedName: 'cluster',
      name: 'namespaces',
      label: 'Namespaces',
      hasParent: true,
    },
  ],
};
