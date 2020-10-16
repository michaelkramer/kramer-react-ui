import { AiOutlineAntDesign } from "react-icons/ai";
import { BiCheckbox } from "react-icons/bi";
import { FcApproval } from "react-icons/fc";
import { FaFontAwesome } from "react-icons/fa";

enum IconTheme {
  AntDesign = "AntDesign",
  FlatColorIcons = "FlatColorIcons",
  BoxIcons = "BoxIcons",
  FontAwesome = "FontAwesome",
}

const IconThemes = [
  {
    label: IconTheme.AntDesign,
    value: IconTheme.AntDesign,
    icon: AiOutlineAntDesign,
  },
  {
    label: IconTheme.FlatColorIcons,
    value: IconTheme.FlatColorIcons,
    icon: FcApproval,
  },
  {
    label: IconTheme.BoxIcons,
    value: IconTheme.BoxIcons,
    icon: BiCheckbox,
  },
  {
    label: IconTheme.FontAwesome,
    value: IconTheme.FontAwesome,
    icon: FaFontAwesome,
  },
];

export { IconTheme, IconThemes };
