import React, { useState } from "react";
import { Icons, IconTheme, IconList } from "kramer-react-ui";




const IconSet = () => {
  const [searchName, setSearchName] = useState<string>("");

  const FetchIcon = ({ theme, name }: { theme: string, name: string }) => {
    return (<li><Icons theme={theme} name={name} /><div>{name}</div></li>)
  }

  const ThemeTitle = (title: string) => {
    const result = title.replace(/([A-Z])/g, " $1");
    return result.charAt(0).toUpperCase() + result.slice(1);
  }

  const DisplayIconSet = ({ theme }: { theme: string, index: number }) => {
    return <div className="themeSet">
      <h3>{ThemeTitle(theme)}</h3>
      <ul className="iconSet">
        {IconList.map((x, index) => {
          if (searchName.length > 1) {
            const pattern = new RegExp(`${searchName}`, "i");
            if (pattern.test(x.name)) {
              return <FetchIcon {...{ theme, name: x.name }} key={index} />
            }
            return null;
          } else {
            return <FetchIcon {...{ theme, name: x.name }} key={index} />
          }
        })}
      </ul>
    </div>
  }

  return (
    <div>
      <h2>Icon Sets</h2>
      <div className="inputForm"><label>Search: </label> <input type="text" onChange={(e) => setSearchName(e.target.value)} /></div>
      <div className="list">
        {Object.values(IconTheme).map((theme, idx) => (<DisplayIconSet {...{ theme, index: idx }} key={idx} />
        ))}
      </div>
    </div>
  );
};


export default IconSet;

IconList.map((x) => x.name)

