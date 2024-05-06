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

function Task() {
  const [panelValue, setPanelValue] = React.useState(0);

  const handleTabs = (event, newValue) => {
    setPanelValue(newValue);
  };

  function tabValue(index) {
    return {
      id: `${index}`,
    };
  }
  return (
    <Container sx={{ paddingBlock: 12 }} maxWidth="md">
      <Typography variant="h3" fontWeight={"bold"} sx={{ mb: 3 }}>
        Task Manager
      </Typography>
      <Stack direction={"row"} alignItems={"center"} gap={1} mb={3}>
        <TextField variant="outlined" label="New Task" size="small" />
        <Button variant="contained">Add</Button>
      </Stack>
      <Box>
        <Box>
          <Tabs variant="fullWidth" value={panelValue} onChange={handleTabs}>
            <Tab label="Active" {...tabValue(0)} />
            <Tab label="Completed" {...tabValue(1)} />
            <Tab label="Deleted" {...tabValue(2)} />
          </Tabs>
        </Box>
        <TabPanel index={0} value={panelValue}>
          Active
        </TabPanel>

        <TabPanel index={0} value={panelValue}>
          Schedule Appointment
        </TabPanel>

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
