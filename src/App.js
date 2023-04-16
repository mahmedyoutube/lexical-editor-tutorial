import { ThemeProvider } from "@emotion/react";
import "./App.css";
import EditorWrapper from "./components/Editor/EditorWrapper";
import theme from "./theme";
import { CssBaseline, Grid, Typography } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid
        container
        sx={{ minHeight: "100vh", mt: 10 }}
        alignItems="center"
        flexDirection="column"
      >
        <Grid item>
          <Typography variant="h4">Lexical Editor App</Typography>
        </Grid>
        <Grid item xs={9} sx={{ width: "100%", mt: 5 }}>
          <EditorWrapper />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
