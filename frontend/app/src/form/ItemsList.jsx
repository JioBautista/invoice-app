import React from "react";
import { TextField, Box, IconButton, Grid } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function ItemsList(props) {
  const { fields, register, remove } = props;

  const textFieldStyles = {
    variant: "outlined",
    size: "small",
    margin: "normal",
    fullWidth: "fullWidth",
  };
  return (
    <Grid container spacing={1}>
      {/* RENDER ITEMS */}
      {fields.map((item, index) => (
        <React.Fragment key={item.id}>
          <Grid item xs={6}>
            <TextField
              {...textFieldStyles}
              label="Item Name"
              {...register(`items.${index}.name`)}
            />
          </Grid>

          <Grid item xs={2}>
            <TextField
              {...textFieldStyles}
              label="Qty"
              {...register(`items.${index}.quantity`)}
            />
          </Grid>

          <Grid item xs={4}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <TextField
                {...textFieldStyles}
                label="Price"
                {...register(`items.${index}.price`)}
              />
              <IconButton onClick={() => remove(index)}>
                <DeleteIcon color="error" />
              </IconButton>
            </Box>
          </Grid>
        </React.Fragment>
      ))}
    </Grid>
  );
}

export default ItemsList;
