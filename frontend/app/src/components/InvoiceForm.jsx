import React from "react";
import ErrorDialog from "./ErrorDialog";
import BillFrom from "../form/BillFrom";
import BillTo from "../form/BillTo";
import ItemsList from "../form/ItemsList";
import ButtonsBox from "../form/ButtonsBox";
import { useStore } from "../store/useStore";
import { Drawer, Box, Typography, useMediaQuery } from "@mui/material";
import { useForm, useFieldArray } from "react-hook-form";
import { Navigate } from "react-router-dom";
import axios from "axios";

function InvoiceForm({ clientData }) {
  // REACT-HOOK-FORM
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });

  const token = sessionStorage.getItem("token");
  const headers = { headers: { Authorization: `Bearer ${token}` } };

  // SUBMIT FORM ELEMENT POST REQUEST
  const onSubmit = (data) => {
    axios
      .post("https://clownfish-app-egma9.ondigitalocean.app/clients/", data, {
        ...headers,
      })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
    console.log(data);
  };

  // SUBMIT FORM ELEMENT PUT REQUEST
  const editResource = (data) => {
    axios
      .put(
        `https://clownfish-app-egma9.ondigitalocean.app/clients/${clientData.id}/`,
        data,
        { ...headers }
      )
      .then((res) => console.log(res))
      .catch((error) => console.log(error));

    console.log(data);
  };
  // MEDIA QUERY FOR MOBILE
  const mobile = useMediaQuery("(max-width:500px)");
  const boxStyles = {
    sx: { padding: 2 },
    maxWidth: "500px",
  };

  // STATE MANAGEMENT
  const { drawer, toggleDrawer, mode } = useStore((state) => ({
    drawer: state.drawer,
    toggleDrawer: state.toggleDrawer,
    mode: state.mode,
    formModal: state.formModal,
  }));
  return (
    <>
      <Drawer
        open={drawer}
        onClose={toggleDrawer}
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <form onSubmit={handleSubmit(mode === "new" ? onSubmit : editResource)}>
          {/* BILL FROM BOX */}
          <Box {...boxStyles}>
            {mode === "new" ? (
              <Typography variant="h6">New Invoice</Typography>
            ) : (
              <Typography>Edit Invoice</Typography>
            )}
            <Typography>Bill From</Typography>
            <BillFrom
              clientData={clientData}
              register={register}
              errors={errors}
            />
          </Box>

          {/* BILL TO BOX */}
          <Box {...boxStyles}>
            <Typography>Bill To</Typography>
            <BillTo
              clientData={clientData}
              register={register}
              errors={errors}
            />
          </Box>

          {/* ITEM LIST BOX */}
          <Box {...boxStyles}>
            <Typography>Item List</Typography>
            <ItemsList fields={fields} register={register} remove={remove} />
          </Box>

          {/* BUTTONS BOX */}
          <ButtonsBox mobile={mobile} append={append} />
        </form>
      </Drawer>

      {isSubmitSuccessful ? <Navigate to="/" /> : <ErrorDialog />}
    </>
  );
}

export default InvoiceForm;
