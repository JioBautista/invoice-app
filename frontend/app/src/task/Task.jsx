import React from "react";
import {
  Container,
  Typography,
  Button,
  TextField,
  Stack,
  Tab,
  Tabs,
  Box,
} from "@mui/material";
import TabPanel from "./TabPanel";
import axios from "axios";
import { useStore } from "../store/useStore";

function Task() {
  // STATES FROM STORE
  const { isDataFetched, setIsDataFetched } = useStore((state) => ({
    isDataFetched: state.isDataFetched,
    setIsDataFetched: state.setIsDataFetched,
  }));
  // STATES FOR TAB & PANELS COMPONENTS
  const [panelValue, setPanelValue] = React.useState(0);
  const [inputValue, setInputValue] = React.useState();

  // STATES FOR ACTIVE & COMPLETED API
  const [activeData, setActiveData] = React.useState();
  const [comepletedData, setCompletedData] = React.useState();

  // FOR TABS & PANEL COMPONENT
  const handleTabs = (event, newValue) => {
    setPanelValue(newValue);
  };

  function tabValue(index) {
    return {
      id: `${index}`,
    };
  }

  // DATA FETCHING
  async function getActiveAPI() {
    try {
      const response = await axios.get(
        "https://clownfish-app-egma9.ondigitalocean.app/active/"
      );
      setActiveData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getCompletedAPI() {
    try {
      const response = await axios.get(
        "https://clownfish-app-egma9.ondigitalocean.app/completed/"
      );
      setCompletedData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const postActiveAPI = () => {
    axios
      .post("https://clownfish-app-egma9.ondigitalocean.app/active/", {
        is_active: inputValue,
      })
      .then(function (res) {
        setActiveData(res.data);
        setIsDataFetched();
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  React.useEffect(() => {
    getActiveAPI();
    getCompletedAPI();
  }, [isDataFetched]);
  return (
    <Container sx={{ paddingBlock: 12 }} maxWidth="md">
      <Typography variant="h3" fontWeight={"bold"} sx={{ mb: 3 }}>
        Task Manager
      </Typography>
      <Stack direction={"row"} alignItems={"center"} gap={1} mb={3}>
        <TextField
          variant="outlined"
          label="New Task"
          size="small"
          onChange={(ev) => {
            setInputValue(ev.target.value);
          }}
          fullWidth
        />
        <Button variant="contained" onClick={postActiveAPI}>
          Add
        </Button>
      </Stack>
      <Box>
        <Box>
          <Tabs variant="fullWidth" value={panelValue} onChange={handleTabs}>
            <Tab
              label={`Active (${activeData && activeData.count})`}
              {...tabValue(0)}
            />
            <Tab
              label={`Completed (${comepletedData && comepletedData.count})`}
              {...tabValue(1)}
            />
          </Tabs>
        </Box>
        {activeData && activeData.count > 0
          ? activeData.results.map((items) => (
              <TabPanel index={0} value={panelValue} id={items.id}>
                {items.is_active}
              </TabPanel>
            ))
          : null}
        {comepletedData && comepletedData.count > 0
          ? comepletedData.results.map((items) => (
              <TabPanel index={1} value={panelValue} id={items.id}>
                {items.is_completed}
              </TabPanel>
            ))
          : null}
      </Box>
    </Container>
  );
}

export default Task;
