import React from "react";
import IconList, { $Icon } from "./Icons/IconList";

const context = React.createContext<any>(null);

const UIProvider = (props: { newIconSet?: $Icon[], children: any }) => {

  const iconSet = IconList;
  const { newIconSet } = props;
  if (newIconSet) {
    iconSet.push(...newIconSet);
  }

  return (
    <context.Provider value={{ iconSet }}>{props.children}</context.Provider>
  );
};

UIProvider.context = context;

export default UIProvider;
