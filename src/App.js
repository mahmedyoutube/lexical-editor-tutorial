import {
  Box,
  CssBaseline,
  Grid,
  ThemeProvider,
  Typography,
} from "@mui/material";
import LexicalEditorWrapper from "./components/LexicalEditorWrapper";
import theme from "./theme";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid
        container
        sx={{ minHeight: "100vh" }}
        flexDirection="column"
        alignItems="center"
      >
        <Grid item sx={{ my: 4 }}>
          <Typography variant="h4">Lexical Editor</Typography>
        </Grid>
        <Grid item sx={{ width: 750, overflow: "hidden" }}>
          <LexicalEditorWrapper />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
