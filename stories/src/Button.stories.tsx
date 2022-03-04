import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from '@getit-ui/button';

export default {
  title: 'atoms/button',
  component: Button,
  argTypes: {
    classNames: {
      control: 'object',
      type: { name: 'other', value: '' },
      defaultValue: [],
    },
    textContent: {
      control: 'text',
      type: { name: 'string', required: true },
      defaultValue: 'button',
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const DefaultTemplate = Template.bind({});
DefaultTemplate.args = {};

export const RedButton = Template.bind({});
RedButton.args = {
  classNames: [],
  textContent: 'red button',
};
