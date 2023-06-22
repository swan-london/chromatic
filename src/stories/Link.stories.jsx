import React from 'react';

import Link from './Link';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Link',
  component: Link
};


const Template = (args) => <Link {...args} />;

export const Regular = Template.bind({});
