import lexicalEditorTheme from "../theme/lexicalEditorTheme";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { TableNode, TableCellNode, TableRowNode } from "@lexical/table";
import { ListNode, ListItemNode } from "@lexical/list";
import { ImageNode } from "../components/CustomNodes/ImageNode";

// Catch any errors that occur during Lexical updates and log them
// or throw them as needed. If you don't throw them, Lexical will
// try to recover gracefully without losing user data.
function onError(error) {
  console.error(error);
}

export const lexicalEditorConfig = {
  namespace: "MyEditor",
  theme: lexicalEditorTheme,
  onError,

  nodes: [
    HeadingNode,
    ListNode,
    ListItemNode,
    QuoteNode,
    CodeNode,
    CodeHighlightNode,
    TableNode,
    TableCellNode,
    TableRowNode,
    AutoLinkNode,
    LinkNode,
    ImageNode,
  ],
};
