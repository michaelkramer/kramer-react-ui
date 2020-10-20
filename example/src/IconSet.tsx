import React, { useState, useContext } from "react";
import { UIProvider, Icons } from "@michaelkramer/kramer-react-ui";
import { $Icon } from "@michaelkramer/kramer-react-ui/dist/components/Icons/IconList";



const IconSet = () => {
  const [searchName, setSearchName] = useState<string>("");
  const { iconSet } = useContext<{ iconSet: $Icon[] }>(UIProvider.context);

  const FetchIcon = ({ theme, name }: { theme: string, name: string }) => {
    return (<li><Icons theme={theme} name={name} /><div>{ThemeTitle(theme)}</div></li>)
  }

  const ThemeTitle = (title: string) => {
    const result = title.replace(/([A-Z])/g, " $1");
    return result.charAt(0).toUpperCase() + result.slice(1);
  }

  const DisplayIconSet = ({ item }: { item: $Icon }) => {
    return (<div className="themeSet"><h3>{ThemeTitle(item.name)}</h3><ul className="iconSet">
      {item.icons.map((icon, idx: number) => {
        return <FetchIcon {...{ theme: icon.theme, name: item.name }} key={idx} />
      })}
    </ul></div>);
  }

  const pattern = new RegExp(`${searchName}`, "i");
  const list = searchName.length > 1 ? iconSet.filter((x: any) => pattern.test(x.name)) : iconSet;

  return (
    <div>
      <h2>Icon Sets</h2>
      <div className="inputForm"><label>Search: </label> <input type="text" onChange={(e) => setSearchName(e.target.value)} /></div>
      <div className="list">
        {
          list.map((item: $Icon, index: number) => {
            return <DisplayIconSet key={index} item={item} />
          })
        }
      </div >
    </div >
  );
};


export default IconSet;

//IconList.map((x) => x.name)

