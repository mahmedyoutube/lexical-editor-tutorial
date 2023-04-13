import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Divider } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 300,
  bgcolor: "background.paper",
  boxShadow: 24,
};

export default function ModalWrapper({ open, onClose, children, title }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            sx={{ px: 1 }}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            {title}
          </Typography>
          <Divider />
          <Box sx={{ p: 2 }}>{children}</Box>
        </Box>
      </Modal>
    </div>
  );
}
