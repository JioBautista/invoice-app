import React from "react";
import { Grid, TextField, Alert } from "@mui/material";

function BillFrom(props) {
  const { clientData, register, errors } = props;

  const textFieldStyles = {
    size: "small",
    margin: "normal",
    variant: "outlined",
    fullWidth: "fullWidth",
  };
  return (
    <Grid container spacing={1}>
      {/* BILL FROM STREET ADDRESS */}
      <Grid item xs={12}>
        <TextField
          {...textFieldStyles}
          label="Street Address"
          defaultValue={
            clientData && clientData.sender_address
              ? clientData.sender_address.street
              : null
          }
          {...register("sender_address.street", { required: true })}
        />
        {errors.sender_address && errors.sender_address.street && (
          <Alert severity="error">Required</Alert>
        )}
      </Grid>

      {/* BILL FROM CITY */}
      <Grid item xs={6}>
        <TextField
          {...textFieldStyles}
          label="City"
          defaultValue={
            clientData && clientData.sender_address
              ? clientData.sender_address.city
              : null
          }
          {...register("sender_address.city", { required: true })}
        />
        {errors.sender_address && errors.sender_address.city && (
          <Alert severity="error">Required</Alert>
        )}
      </Grid>

      {/* BILL FROM POST CODE */}
      <Grid item xs={6}>
        <TextField
          {...textFieldStyles}
          label="Post Code"
          defaultValue={
            clientData && clientData.sender_address
              ? clientData.sender_address.postCode
              : null
          }
          {...register("sender_address.postCode", { required: true })}
        />
        {errors.sender_address && errors.sender_address.postCode && (
          <Alert severity="error">Required</Alert>
        )}
      </Grid>

      {/* BILL FROM COUNTRY */}
      <Grid item xs={12}>
        <TextField
          {...textFieldStyles}
          label="Country"
          defaultValue={
            clientData && clientData.sender_address
              ? clientData.sender_address.country
              : null
          }
          {...register("sender_address.country", { required: true })}
        />
        {errors.sender_address && errors.sender_address.country && (
          <Alert severity="error">Required</Alert>
        )}
      </Grid>
    </Grid>
  );
}

export default BillFrom;
