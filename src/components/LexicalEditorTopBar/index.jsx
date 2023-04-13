import { Divider, Grid } from "@mui/material";
import toolbarIconsList from "./toolbarIconsList";
import { Box } from "mdi-material-ui";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import useOnClickListener from "./useOnClickListener";
import { createPortal } from "react-dom";
import FloatingLinkEditor from "./FloatingLinkEditor";
import { InsertImageDialog } from "../CustomPlugins/ImagePlugin";

const LexicalEditorTopBar = () => {
  const { onClick, selectedEventTypes, blockType, isLink, editor, modal } =
    useOnClickListener();

  const isIconSelected = (plugin) =>
    selectedEventTypes.includes(plugin.event) ||
    blockType.includes(plugin.event);

  return (
    <Grid
      container
      justifyContent="space-between"
      spacing={2}
      alignItems="center"
      sx={{ background: "white", py: 1.5, px: 0.5 }}
    >
      {toolbarIconsList.map((plugin) => (
        <Grid
          key={plugin.id}
          sx={{
            cursor: "pointer",
          }}
          item
        >
          {
            <plugin.Icon
              sx={plugin.iconSx}
              onClick={() => onClick(plugin.event)}
              color={isIconSelected(plugin) ? "secondary" : undefined}
            />
          }
        </Grid>
      ))}
      {modal}
      {isLink &&
        createPortal(<FloatingLinkEditor editor={editor} />, document.body)}
    </Grid>
  );
};

export default LexicalEditorTopBar;
