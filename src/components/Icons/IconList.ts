import { IconTheme } from "./IconTheme";
import * as AI from "react-icons/ai";
import * as BI from "react-icons/bi";
import * as FA from "react-icons/fa";
import * as FC from "react-icons/fc";
import { IconType } from "react-icons/lib";

export interface $IconObject {
  theme: IconTheme | string;
  component?: IconType | any;
}

export interface $Icon {
  name: string;
  icons: $IconObject[];
}

const IconList: $Icon[] = [
  {
    name: "Add",
    icons: [
      { theme: IconTheme.AntDesign, component: AI.AiOutlinePlusCircle },
      { theme: IconTheme.BoxIcons, component: BI.BiPlusCircle },
      { theme: IconTheme.FlatColorIcons, component: FC.FcPlus },
      { theme: IconTheme.FontAwesome, component: FA.FaPlus },
    ],
  },
  {
    name: "Close",
    icons: [
      { theme: IconTheme.AntDesign, component: AI.AiOutlineCloseCircle },
      { theme: IconTheme.BoxIcons, component: BI.BiXCircle },
      { theme: IconTheme.FontAwesome, component: FA.FaWindowClose },
    ],
  },
  {
    name: "Down",
    icons: [
      { theme: IconTheme.AntDesign, component: AI.AiOutlineArrowDown },
      { theme: IconTheme.BoxIcons, component: BI.BiChevronDown },
      { theme: IconTheme.FlatColorIcons, component: FC.FcDown },
      { theme: IconTheme.FontAwesome, component: FA.FaAngleDown },
    ],
  },
  {
    name: "Github",
    icons: [
      { theme: IconTheme.AntDesign, component: AI.AiFillGithub },
      { theme: IconTheme.FontAwesome, component: FA.FaGithub },
    ],
  },
  {
    name: "Home",
    icons: [
      { theme: IconTheme.AntDesign, component: AI.AiOutlineHome },
      { theme: IconTheme.BoxIcons, component: BI.BiHome },
      { theme: IconTheme.FlatColorIcons, component: FC.FcHome },
      { theme: IconTheme.FontAwesome, component: FA.FaHome },
    ],
  },
  {
    name: "Idea",
    icons: [
      { theme: IconTheme.AntDesign, component: AI.AiOutlineBulb },
      { theme: IconTheme.BoxIcons, component: BI.BiBulb },
      { theme: IconTheme.FlatColorIcons, component: FC.FcIdea },
      { theme: IconTheme.FontAwesome, component: FA.FaRegLightbulb },
    ],
  },
  {
    name: "Info",
    icons: [
      { theme: IconTheme.AntDesign, component: AI.AiOutlineInfoCircle },
      { theme: IconTheme.BoxIcons, component: BI.BiInfoCircle },
      { theme: IconTheme.FlatColorIcons, component: FC.FcInfo },
      { theme: IconTheme.FontAwesome, component: FA.FaInfo },
    ],
  },
  {
    name: "Left",
    icons: [
      { theme: IconTheme.AntDesign, component: AI.AiOutlineArrowLeft },
      { theme: IconTheme.BoxIcons, component: BI.BiChevronLeft },
      { theme: IconTheme.FlatColorIcons, component: FC.FcLeft },
      { theme: IconTheme.FontAwesome, component: FA.FaAngleLeft },
    ],
  },
  {
    name: "Minus",
    icons: [
      { theme: IconTheme.AntDesign, component: AI.AiOutlineMinusCircle },
      { theme: IconTheme.BoxIcons, component: BI.BiMinusCircle },
      { theme: IconTheme.FlatColorIcons, component: FC.FcMinus },
      { theme: IconTheme.FontAwesome, component: FA.FaMinus },
    ],
  },
  {
    name: "Note",
    icons: [
      { theme: IconTheme.AntDesign, component: AI.AiOutlineFileText },
      { theme: IconTheme.BoxIcons, component: BI.BiNotepad },
      { theme: IconTheme.FlatColorIcons, component: FC.FcRules },
      { theme: IconTheme.FontAwesome, component: FA.FaRegStickyNote },
    ],
  },
  {
    name: "PDF",
    icons: [
      { theme: IconTheme.AntDesign, component: AI.AiOutlineFilePdf },
      { theme: IconTheme.BoxIcons, component: BI.BiFile },
      { theme: IconTheme.FlatColorIcons, component: FC.FcDocument },
      { theme: IconTheme.FontAwesome, component: FA.FaRegFilePdf },
    ],
  },
  {
    name: "Right",
    icons: [
      { theme: IconTheme.AntDesign, component: AI.AiOutlineArrowRight },
      { theme: IconTheme.BoxIcons, component: BI.BiChevronRight },
      { theme: IconTheme.FlatColorIcons, component: FC.FcRight },
      { theme: IconTheme.FontAwesome, component: FA.FaAngleRight },
    ],
  },
  {
    name: "Up",
    icons: [
      { theme: IconTheme.AntDesign, component: AI.AiOutlineArrowUp },
      { theme: IconTheme.BoxIcons, component: BI.BiChevronUp },
      { theme: IconTheme.FlatColorIcons, component: FC.FcUp },
      { theme: IconTheme.FontAwesome, component: FA.FaAngleUp },
    ],
  },
  {
    name: "User",
    icons: [
      { theme: IconTheme.AntDesign, component: AI.AiOutlineUser },
      { theme: IconTheme.BoxIcons, component: BI.BiUser },
      { theme: IconTheme.FlatColorIcons, component: FC.FcBusinessman },
    ],
  },
];


export default IconList;
