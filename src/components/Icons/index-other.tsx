// import React, { useReducer } from "react";////, { useState, useEffect }
// import Icon from "./Icon";
// // import { IconTheme, IconThemes } from "./IconTheme";
// import { $Icon } from "./IconList";//$IconObject
// import UIProvider from "../UIProvider";
// // export { IconTheme, IconThemes };

// export interface $IconProps {
//   theme: any;
//   name: string;
//   className?: string;
//   rotate?: number;
//   spin?: boolean;
//   style?: object;
// }


// interface $Props {
//   set: $Icon[];
//   icon?: JSX.Element;
//   theme?: string;
//   name?: string;
// }

// const initialArg: $Props = {
//   set: [],
// };

// const updateState = (state: $Props = initialArg, action: any) => {
//   switch (action.type) {
//     case "init":
//       console.log(action);
//       return Object.assign({}, state, {

//       });
//     case "icon":
//       console.log(action);
//       return Object.assign({}, state, {

//       });
//     default:
//       return state;
//   }
// };


// const Icons = (props: $IconProps) => {
//   const [state, dispatch] = useReducer(updateState, initialArg);

//   //const [icon, setIcon] = useState<JSX.Element | undefined>(<span className="init" />);

//   //const [set, setSet] = useState<$Icon[]>();


//   //const { iconSet } = useContext<{ iconSet: $Icon[] }>(UIProvider.context);
//   //console.log(ccc);
//   // function getIcon(iconSet: $Icon[], { theme, name }: $IconProps) {
//   //   let iconObj;//: $IconObject | undefined;
//   //   console.log("inside", iconSet);
//   //   const newIcon: $Icon | undefined = iconSet.find((item: $Icon) => item.name === name);
//   //   if (newIcon) {
//   //     iconObj = newIcon.icons.find((icon) => icon.theme === theme);
//   //     console.log(iconObj);
//   //     if (!iconObj) {
//   //       iconObj = newIcon.icons[0];
//   //     }
//   //     return iconObj.component;
//   //   }
//   //   return undefined;
//   // }
//   // if (newIcon && iconObj && iconObj.component) {
//   //   return <iconObj.component />;
//   // }

//   //   return undefined;
//   // }

//   // useEffect(() => {
//   //   const { theme, name, set } = state;
//   //   let iconObj;

//   //   if (set) {
//   //     const newIcon: $Icon | undefined = set.find((item: $Icon) => item.name === name);
//   //     if (newIcon) {
//   //       iconObj = newIcon.icons.find((icon) => icon.theme === theme);
//   //       console.log(iconObj);
//   //       if (!iconObj) {
//   //         iconObj = newIcon.icons[0];
//   //       }
//   //       dispatch({ type: "icon", component: iconObj.component });
//   //     }

//   //   }
//   //   return () => {

//   //   };
//   // }, [state.set, state.theme, state.name]);
//   //console.log(newIcon, iconObj);
//   // if (newIcon && iconObj && iconObj.component) {
//   //   setIcon(<iconObj.component />);
//   // } else {
//   //   setIcon(<span className="useEffect" />);
//   // }
//   //}
//   // return () => {

//   // };
//   // }, [iconSet, props]);
//   // getIcon(props);
//   // console.log("inthe consumer", props);
//   return <UIProvider.context.Consumer>{({ iconSet }) => {
//     dispatch({ type: "init", iconSet, theme: props.theme, name: props.name });
//     //setSet(iconSet);
//     //const icon = getIcon(iconSet, props);
//     //console.log(icon);
//     return <div>{state.icon && <Icon  {...props}>{state.icon}</Icon>}</div>;

//   }}</UIProvider.context.Consumer >;
// };
// //: <span className="end" />


// // const Icons = (props: $IconProps) => {
// //   return <UIProvider.context.Consumer>{({ iconSet }) => {
// //     console.log(iconSet, props);

// //     const { name, theme } = props;
// //     const newIcon: $Icon | undefined = iconSet.find((item: $Icon) => item.name === name);
// //     console.log(newIcon);
// //     if (newIcon) {
// //       const icon = newIcon.icons.find((item) => item.theme === theme);
// //       if (icon && icon.component) {
// //         return <icon.component />;
// //       } else {
// //         const temp = newIcon.icons[0];
// //         return <temp.component />;
// //       }
// //     }
// // console.log(iconObj);
// // if (!iconObj) {
// //   iconObj = item.icons[0];
// // }
// // if (newIcon && iconObj && iconObj.component) {
// //   //return <iconObj.component />;
// // }
// //setIconSet(ctx.iconSet);
// //   const icon = getIcon(iconSet, props);
// //   console.log(icon);
// //   return icon && <Icon  {...props}>{icon}</Icon>;
// //     return <div>something</div>;
// //   }}</UIProvider.context.Consumer >;
// // };
// export default Icons;
