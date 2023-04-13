import RedoOutlinedIcon from "@mui/icons-material/RedoOutlined";
import UndoOutlinedIcon from "@mui/icons-material/UndoOutlined";
import FormatBoldOutlinedIcon from "@mui/icons-material/FormatBoldOutlined";
import FormatItalicOutlinedIcon from "@mui/icons-material/FormatItalicOutlined";
import FormatUnderlinedOutlinedIcon from "@mui/icons-material/FormatUnderlinedOutlined";
import StrikethroughSOutlinedIcon from "@mui/icons-material/StrikethroughSOutlined";
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";
import FormatAlignLeftOutlinedIcon from "@mui/icons-material/FormatAlignLeftOutlined";
import FormatAlignRightOutlinedIcon from "@mui/icons-material/FormatAlignRightOutlined";
import FormatAlignJustifyOutlinedIcon from "@mui/icons-material/FormatAlignJustifyOutlined";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import FormatHeader1 from "mdi-material-ui/FormatHeader1";
import FormatHeader2 from "mdi-material-ui/FormatHeader2";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import FormatText from "mdi-material-ui/FormatText";
import CodeIcon from "@mui/icons-material/Code";
import ImageIcon from "@mui/icons-material/Image";

export const eventTypes = {
  paragraph: "paragraph",
  h1: "h1",
  h2: "h2",
  ul: "ul",
  ol: "ol",
  quote: "quote",
  formatCode: "formatCode",
  formatUndo: "formatUndo",
  formatRedo: "formatRedo",
  formatBold: "formatBold",
  formatItalic: "formatItalic",
  formatUnderline: "formatUnderline",
  formatStrike: "formatStrike",
  formatInsertLink: "formatInsertLink",
  formatAlignLeft: "formatAlignLeft",
  formatAlignCenter: "formatAlignCenter",
  formatAlignRight: "formatAlignRight",
  insertImage: "insertImage",
};

const pluginsList = [
  {
    id: 1,
    Icon: FormatText,
    event: eventTypes.paragraph,
  },
  {
    id: 2,
    Icon: FormatHeader1,
    event: eventTypes.h1,
  },
  {
    id: 3,
    Icon: FormatHeader2,
    event: eventTypes.h2,
  },
  {
    id: 4,
    Icon: FormatListBulletedIcon,
    event: eventTypes.ul,
  },

  {
    id: 5,
    Icon: FormatListNumberedIcon,
    event: eventTypes.ol,
  },
  {
    id: 6,
    Icon: FormatQuoteIcon,
    event: eventTypes.quote,
  },

  {
    id: 7,
    Icon: CodeIcon,
    event: eventTypes.formatCode,
  },
  {
    id: 8,
    Icon: UndoOutlinedIcon,
    event: eventTypes.formatUndo,
  },
  {
    id: 9,
    Icon: RedoOutlinedIcon,
    event: eventTypes.formatRedo,
  },
  {
    id: 10,
    Icon: FormatBoldOutlinedIcon,
    event: eventTypes.formatBold,
  },
  {
    id: 11,
    Icon: FormatItalicOutlinedIcon,
    event: eventTypes.formatItalic,
  },
  {
    id: 12,
    Icon: FormatUnderlinedOutlinedIcon,
    event: eventTypes.formatUnderline,
  },
  // { // reactive it if you need it
  //   id: 13,
  //   Icon: StrikethroughSOutlinedIcon,
  //   event: eventTypes.formatStrike,
  // },
  {
    id: 13,
    Icon: ImageIcon,
    event: eventTypes.insertImage,
  },
  {
    id: 14,
    Icon: InsertLinkOutlinedIcon,
    event: eventTypes.formatInsertLink,
  },
  {
    id: 15,
    Icon: FormatAlignLeftOutlinedIcon,
    event: eventTypes.formatAlignLeft,
  },

  {
    id: 16,
    Icon: FormatAlignJustifyOutlinedIcon,
    event: eventTypes.formatAlignCenter,
  },
  {
    id: 17,
    Icon: FormatAlignRightOutlinedIcon,
    event: eventTypes.formatAlignRight,
  },
];

export default pluginsList;
