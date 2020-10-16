// Icons.stories.tsx

import React from "react";
import { Story } from "@storybook/react/types-6-0";
import Icon, { $IconProps } from "../components/Icons/index";
import { IconTheme } from "../components/Icons/IconTheme";
import IconList from "../components/Icons/IconList";

export default {
  title: "Icon",
  component: Icon,
  argTypes: {
    theme: {
      name: "theme",
      type: { name: "string", required: true },
      defaultValue: "antd",
      description: "The Icon Theme",
      control: { type: "select", options: IconTheme },
    },
    name: {
      name: "name",
      type: { name: "string", required: true },
      defaultValue: "antd",
      description: "The Icon Names",
      control: { type: "select", options: IconList.map((x) => x.name) },
    },
    className: {
      name: "className",
      type: { name: "string" },
      description: "CSS Class Name",
    },
    rotate: {
      name: "rotate",
      description: "Rotate degrees (not working in IE9)",
      type: { name: "number" },
    },
    spin: {
      name: "spin",
      description: "Rotate icon with animation",
      type: { name: "boolean" },
      defaultValue: false,
      control: { type: "boolean" },
    },
    style: {
      name: "style",
      type: { name: "CSSProperties" },
      description: "The style properties of icon, like `fontSize` and `color`",
      control: { type: "object" },
    },
  },
};

const Template: Story<$IconProps> = (args: $IconProps) => <Icon {...args} />;

export const demo = Template.bind({});
demo.args = {
  theme: "antd",
  name: "Home",
};
