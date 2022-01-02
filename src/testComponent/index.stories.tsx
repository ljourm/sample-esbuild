import React from "react";

import Component, { Props } from "./";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "My/TestComponent",
  component: Component,
  argTypes: {
    onHogeClicked: { action: "onHogeClickedEvent" },
  },
};

// // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Component {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
const primaryOptions: Props = {
  message1: "hoge",
  message2: "fuga",
  numberA: 5,
  numberB: 7,
};
Primary.args = primaryOptions;
