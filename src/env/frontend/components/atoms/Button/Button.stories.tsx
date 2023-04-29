import { StoryFn, Meta } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: <>button</>,
};

export const Orange = Template.bind({});

Orange.args = {
  children: <>button</>,
  color: 'orange',
};

export const Gray = Template.bind({});

Gray.args = {
  children: <>button</>,
  color: 'gray',
};
