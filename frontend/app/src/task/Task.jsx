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

function Task() {
  const [panelValue, setPanelValue] = React.useState(0);
  const [inputValue, setInputValue] = React.useState("");
  const [activeData, setActiveData] = React.useState();
  const [isDataFetched, setIsDataFetched] = React.useState(false);

  const handleTabs = (event, newValue) => {
    setPanelValue(newValue);
  };

  function tabValue(index) {
    return {
      id: `${index}`,
    };
  }

  async function getActiveAPI() {
    try {
      const response = await axios.get(
        "https://clownfish-app-egma9.ondigitalocean.app/active/"
      );
      setActiveData(response.data);
      console.log(response);
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
        setIsDataFetched(!isDataFetched);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  React.useEffect(() => {
    getActiveAPI();
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
        />
        <Button variant="contained" onClick={postActiveAPI}>
          Add
        </Button>
      </Stack>
      <Box>
        <Box>
          <Tabs variant="fullWidth" value={panelValue} onChange={handleTabs}>
            <Tab label="Active" {...tabValue(0)} />
            <Tab label="Completed" {...tabValue(1)} />
          </Tabs>
        </Box>
        {activeData && activeData.count > 0
          ? activeData.results.map((items) => (
              <TabPanel index={0} value={panelValue} id={items.id}>
                {items.is_active}
              </TabPanel>
            ))
          : null}

        <TabPanel index={1} value={panelValue}>
          Completed
        </TabPanel>
      </Box>
    </Container>
  );
}

export default Task;
