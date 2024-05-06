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
import { useStore2 } from "../store/useStore2";

function Task() {
  const active = useStore2((state) => state.active);
  const addTask = useStore2((state) => state.addTask);
  const [panelValue, setPanelValue] = React.useState(0);
  const [inputValue, setInputValue] = React.useState("");

  const handleTabs = (event, newValue) => {
    setPanelValue(newValue);
  };

  function tabValue(index) {
    return {
      id: `${index}`,
    };
  }
  console.log(active);
  console.log(inputValue);
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
        <Button variant="contained" onClick={() => addTask(inputValue)}>
          Add
        </Button>
      </Stack>
      <Box>
        <Box>
          <Tabs variant="fullWidth" value={panelValue} onChange={handleTabs}>
            <Tab label="Active" {...tabValue(0)} />
            <Tab label="Completed" {...tabValue(1)} />
            <Tab label="Deleted" {...tabValue(2)} />
          </Tabs>
        </Box>
        {active.length > 0
          ? active.map((items) => (
              <TabPanel index={0} value={panelValue}>
                {items}
              </TabPanel>
            ))
          : null}

        <TabPanel index={1} value={panelValue}>
          Completed
        </TabPanel>
        <TabPanel index={2} value={panelValue}>
          Deleted
        </TabPanel>
      </Box>
    </Container>
  );
}

export default Task;
