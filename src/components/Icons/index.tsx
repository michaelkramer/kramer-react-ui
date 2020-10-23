import React, { useState, useEffect, useContext } from "react";
import Icon from "./Icon";
import { $Icon, $IconObject } from "./IconList";
import UIProvider from "../UIProvider";

export interface $IconProps {
  theme: any;
  name: string;
  className?: string;
  rotate?: number;
  spin?: boolean;
  style?: object;
}

const Icons = (props: $IconProps) => {
  const [icon, setIcon] = useState<JSX.Element | undefined>(<span className="init" />);
  const { iconSet } = useContext<{ iconSet: $Icon[] }>(UIProvider.context);

  useEffect(() => {
    const { theme, name } = props;
    let iconObj: $IconObject | undefined;

    if (iconSet) {
      const newIcon: $Icon | undefined = iconSet.find((item: $Icon) => item.name === name);
      if (newIcon) {
        iconObj = newIcon.icons.find((icon) => icon.theme === theme);
        if (!iconObj) {
          iconObj = newIcon.icons[0];
        }
        setIcon(iconObj.component);
      }

    }
    return () => {

    };
  }, [iconSet, props]);

  return icon && <Icon {...props}>{icon}</Icon>;

};
export default Icons;
