import React from 'react';

import Title from './Title';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Title',
  component: Title
};


const Template = (args) => <Title {...args} />;

export const TitleH3 = Template.bind({});
