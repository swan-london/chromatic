import React from 'react';

import Text from './Text';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Text',
  component: Text
};


const Template = (args) => <Text {...args} />;

export const H3Text = Template.bind({});
