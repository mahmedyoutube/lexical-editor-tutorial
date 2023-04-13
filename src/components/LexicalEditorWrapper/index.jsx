import { $getRoot, $getSelection } from "lexical";
import { useEffect } from "react";

import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { MuiContentEditable, placeHolderSx } from "./styles";
import { Box, Divider } from "@mui/material";
import { lexicalEditorConfig } from "../../config/lexicalEditorConfig";
import LexicalEditorTopBar from "../LexicalEditorTopBar";
import TreeViewPlugin from "../CustomPlugins/TreeViewPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import ImagesPlugin from "../CustomPlugins/ImagePlugin";
import FloatingTextFormatToolbarPlugin from "../CustomPlugins/FloatingTextFormatPlugin";

function LexicalEditorWrapper(props) {
  return (
    <LexicalComposer initialConfig={lexicalEditorConfig}>
      <LexicalEditorTopBar />
      <Divider />
      <Box sx={{ position: "relative", background: "white" }}>
        <RichTextPlugin // #312D4B
          contentEditable={<MuiContentEditable />}
          placeholder={<Box sx={placeHolderSx}>Enter some text...</Box>}
          ErrorBoundary={LexicalErrorBoundary}
        />
        <OnChangePlugin onChange={onChange} />
        <HistoryPlugin />
        <TreeViewPlugin />
        <ListPlugin />
        <LinkPlugin />
        <ImagesPlugin captionsEnabled={false} />
        <FloatingTextFormatToolbarPlugin />
      </Box>
    </LexicalComposer>
  );
}

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

export default LexicalEditorWrapper;
