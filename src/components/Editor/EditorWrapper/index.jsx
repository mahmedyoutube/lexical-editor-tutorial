import { $getRoot, $getSelection } from "lexical";
import { useEffect } from "react";

import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { MuiContentEditable, placeHolderSx } from "./styles";
import { Box } from "@mui/material";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import Toolbar from "../Toolbar";
import lexicalEditorTheme from "../../../theme/lexicalEditorTheme";
import lexicalEditorConfig from "../config";
import ImagesPlugin from "../plugin/ImagePlugin";
import FloatingTextFormatToolbarPlugin from "../plugin/FloatingTextFormatPlugin";

// When the editor changes, you can get notified via the
// LexicalOnChangePlugin!
function onChange(editorState) {
  editorState.read(() => {
    // Read the contents of the EditorState here.
    const root = $getRoot();
    const selection = $getSelection();

    console.log(root, selection);
  });
}

// Lexical React plugins are React components, which makes them
// highly composable. Furthermore, you can lazy load plugins if
// desired, so you don't pay the cost for plugins until you
// actually use them.
function MyCustomAutoFocusPlugin() {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    // Focus the editor when the effect fires!
    editor.focus();
  }, [editor]);

  return null;
}

function EditorWrapper() {
  return (
    <LexicalComposer initialConfig={lexicalEditorConfig}>
      <Toolbar />
      <Box sx={{ position: "relative", background: "white", mt: 1 }}>
        <RichTextPlugin
          contentEditable={<MuiContentEditable />}
          placeholder={<Box sx={placeHolderSx}>Enter your text here</Box>}
          ErrorBoundary={LexicalErrorBoundary}
        />
        <OnChangePlugin onChange={onChange} />
        <HistoryPlugin />
        <MyCustomAutoFocusPlugin />
        <OnChangePlugin onChange={onChange} />
        <HistoryPlugin />
        <ImagesPlugin captionsEnabled={false} />
        <ListPlugin />
        <LinkPlugin />
        <FloatingTextFormatToolbarPlugin />
      </Box>
    </LexicalComposer>
  );
}

export default EditorWrapper;
