import { styled, Box, TextField } from "@mui/material";

export const FloatingDivContainer = styled(Box)({
  position: "absolute",
  zIndex: 100,
  top: -10000,
  left: -10000,
  marginTop: -6,
  maxWidth: 300,
  width: "100%",
  opacity: 0,
  display: "flex",
  backgroundColor: "#fff",
  boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.3)",
  borderRadius: 8,
  transition: "opacity 0.5s",
});

export const FloatingDivLinkInput = styled(TextField)({
  display: "block",
  paddingRight: 20,
  boxSizing: "border-box",
  width: "100%",
  borderRadius: 15,
  margin: "8px 12px",
  fontSize: 15,
  color: "rgb(5, 5, 5)",
  border: 0,
  outline: 0,
  position: "relative",
  fontFamily: "inherit",
});

export const FloatingDivLink = styled("a")({
  display: "block",
  width: "calc(100% - 24px)",
  boxSizing: "border-box",
  margin: "8px 12px",
  padding: "8px 12px",
  borderRadius: 15,
  backgroundColor: "#eee",
  fontSize: 15,
  color: "rgb(5, 5, 5)",
  border: 0,
  outline: 0,
  position: "relative",
  fontFamily: "inherit",
});
