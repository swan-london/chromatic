import React from 'react';

import Label from './Label';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Label',
  component: Label
};


const Template = (args) => <Label {...args} />;

export const Regular = Template.bind({});
