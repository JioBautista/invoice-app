import React from "react";
import { Grid, TextField, Alert, MenuItem } from "@mui/material";
import { DateField } from "@mui/x-date-pickers";
import dayjs from "dayjs";

function BillTo(props) {
  const paymentTermsValues = [
    {
      value: 1,
      label: "Net 1 Day",
    },
    {
      value: 7,
      label: "Net 7 Days",
    },
    {
      value: 14,
      label: "Net 14 Days",
    },
    {
      value: 30,
      label: "Net 30 Days",
    },
  ];

  const statusChoices = [
    {
      value: "paid",
      label: "Paid",
    },
    {
      value: "pending",
      label: "Pending",
    },
  ];
  const { clientData, register, errors } = props;
  const textFieldStyles = {
    size: "small",
    margin: "normal",
    variant: "outlined",
    fullWidth: "fullWidth",
  };
  return (
    <Grid container spacing={1}>
      {/* NAME */}
      <Grid item xs={12}>
        <TextField
          {...textFieldStyles}
          label="Client's Name"
          defaultValue={
            clientData && clientData.client_name ? clientData.client_name : null
          }
          {...register("client_name", {
            required: true,
            maxLength: 30,
          })}
        />
        {errors.client_name && <Alert severity="error">Required</Alert>}
      </Grid>

      {/* EMAIL */}
      <Grid item xs={12}>
        <TextField
          {...textFieldStyles}
          label="Client's Email"
          defaultValue={
            clientData && clientData.client_email
              ? clientData.client_email
              : null
          }
          {...register("client_email", {
            required: true,
            pattern:
              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i,
          })}
        />
        {errors.client_email && <Alert severity="error">Required</Alert>}
      </Grid>

      {/* STREET ADDRESS */}
      <Grid item xs={12}>
        <TextField
          {...textFieldStyles}
          label="Street Address"
          defaultValue={
            clientData && clientData.client_address
              ? clientData.client_address.street
              : null
          }
          {...register("client_address.street", {
            required: true,
            maxLength: 30,
          })}
        />
        {errors.client_address && errors.client_address.street && (
          <Alert severity="error">Required</Alert>
        )}
      </Grid>

      {/* CITY */}
      <Grid item xs={12} sm={6}>
        <TextField
          {...textFieldStyles}
          label="City"
          defaultValue={
            clientData && clientData.client_address
              ? clientData.client_address.city
              : null
          }
          {...register("client_address.city", { required: true })}
        />
        {errors.client_address && errors.client_address.city && (
          <Alert severity="error">Required</Alert>
        )}
      </Grid>

      {/* POST CODE */}
      <Grid item xs={12} sm={6}>
        <TextField
          {...textFieldStyles}
          label="Postal Code"
          defaultValue={
            clientData && clientData.client_address
              ? clientData.client_address.postCode
              : null
          }
          {...register("client_address.postCode", { required: true })}
        />
        {errors.client_address && errors.client_address.postCode && (
          <Alert severity="error">Required</Alert>
        )}
      </Grid>

      {/* COUNTRY */}
      <Grid item xs={12}>
        <TextField
          {...textFieldStyles}
          label="Country"
          defaultValue={
            clientData && clientData.client_address
              ? clientData.client_address.country
              : null
          }
          {...register("client_address.country", { required: true })}
        />
        {errors.client_address && errors.client_address.country && (
          <Alert severity="error">Required</Alert>
        )}
      </Grid>

      {/* INVOICE NUMBER */}

      <Grid item xs={12}>
        <TextField
          {...textFieldStyles}
          label="Invoice Number"
          defaultValue={
            clientData && clientData.invoice_num ? clientData.invoice_num : null
          }
          {...register("invoice_num", {
            required: true,
            maxLength: {
              value: 6,
              message: "Invoice number cannot be more than 6 characters",
            },
          })}
        />
        {errors.invoice_num && (
          <Alert severity="error">
            {errors.invoice_num.message
              ? errors.invoice_num.message
              : "Required"}
          </Alert>
        )}
      </Grid>

      {/* PAYMENT TERMS */}
      <Grid item xs={6}>
        <TextField
          select
          {...textFieldStyles}
          label="Payment Terms"
          defaultValue={
            clientData && clientData.payment_terms
              ? clientData.payment_terms
              : paymentTermsValues[0].value
          }
          {...register("payment_terms", { required: true })}
        >
          {paymentTermsValues.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>

      {/* PAYMENT STATUS */}
      <Grid item xs={6}>
        <TextField
          select
          {...textFieldStyles}
          label="Status"
          defaultValue={
            clientData && clientData.status
              ? clientData.status
              : statusChoices[0].value
          }
          {...register("status", { required: true })}
        >
          {statusChoices.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>

      {/* CREATED AT */}
      <Grid item xs={6}>
        <TextField
          name="createdAt"
          label="Invoice Date"
          format="YYYY-MM-DD"
          size="small"
          margin="normal"
          defaultValue={clientData ? clientData.created_at : null}
          {...register("created_at", { required: true })}
          fullWidth
        />
        {errors.created_at && <Alert severity="error">Required</Alert>}
      </Grid>

      {/* PAYMENT DUE */}
      <Grid item xs={6}>
        <TextField
          name="paymentDue"
          label="Invoice Due"
          format="YYYY-MM-DD"
          size="small"
          margin="normal"
          defaultValue={clientData ? clientData.payment_due : null}
          {...register("payment_due", { required: true })}
          fullWidth
        />
        {errors.payment_due && <Alert severity="error">Required</Alert>}
      </Grid>

      {/* DESCRIPTION */}
      <Grid item xs={6}>
        <TextField
          {...textFieldStyles}
          label="Description"
          defaultValue={
            clientData && clientData.description ? clientData.description : null
          }
          {...register("description", { required: true })}
        />
        {errors.description && <Alert severity="error">Required</Alert>}
      </Grid>

      {/* ITEMS GRAND TOTAL */}
      <Grid item xs={6}>
        <TextField
          {...textFieldStyles}
          label="Grand Total"
          defaultValue={
            clientData && clientData.total ? clientData.total : null
          }
          {...register("total", { required: true })}
        />
        {errors.total && <Alert severity="error">Required</Alert>}
      </Grid>
    </Grid>
  );
}

export default BillTo;
