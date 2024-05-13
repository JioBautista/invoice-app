import React from "react";
import { Box, Button, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useStore } from "../store/useStore";

function ButtonsBox(props) {
  const { mobile, append } = props;
  const { toggleForm, toggleDrawer, mode } = useStore((state) => ({
    mode: state.mode,
    toggleForm: state.toggleForm,
    toggleDrawer: state.toggleDrawer,
  }));

  const outlinedButton = {
    variant: "outlined",
    size: mobile ? "small" : "large",
    sx: { borderRadius: "1.25rem" },
  };
  const containedButton = {
    ...outlinedButton,
    variant: "contained",
  };
  return (
    <Box sx={{ padding: 2 }}>
      {/* ADD NEW ITEM BUTTON */}
      <Button
        variant="contained"
        size="large"
        fullWidth
        sx={{
          borderRadius: "1.25rem",
          margin: "auto",
          mb: 3,
        }}
        startIcon={<AddIcon />}
        onClick={() => append()}
      >
        Add New Item
      </Button>

      <Stack
        direction={"row"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
      >
        {mode === "edit" ? (
          <>
            <Button {...outlinedButton} onClick={toggleDrawer}>
              Cancel
            </Button>
            <Button {...containedButton} onClick={toggleForm} type="submit">
              Save Changes
            </Button>
          </>
        ) : (
          <>
            <Button {...outlinedButton} onClick={toggleDrawer}>
              Discard
            </Button>
            <Button {...containedButton} type="submit" onClick={toggleForm}>
              Create
            </Button>
          </>
        )}
      </Stack>
    </Box>
  );
}

export default ButtonsBox;
