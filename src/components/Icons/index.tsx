import React from "react";
import Icon from "./Icon";
import { IconTheme, IconThemes } from "./IconTheme";
import IconList, { $IconObject, $Icon } from "./IconList";

export { IconTheme, IconThemes };

export interface $IconProps {
  theme: any;
  name: string;
  className?: string;
  rotate?: number;
  spin?: boolean;
  style?: object;
}

const getIcon = ({ theme, name }: $IconProps) => {
  let iconObj: $IconObject | undefined;
  const newIcon: $Icon | undefined = IconList.find((item) => {
    if (item.name === name) {
      iconObj = item.icons.find((icon) => icon.theme === theme);
      if (!iconObj) {
        iconObj = item.icons[0];
      }
      return item;
    }
    return undefined;
  });
  if (newIcon && iconObj && iconObj.component) {
    return <iconObj.component />;
  }
  return null;
};

const Icons = (props: $IconProps) => {
  const icon = getIcon(props);
  return icon && <Icon {...props}>{icon}</Icon >;
};
export default Icons;
