import React from "react";
import {
  Container,
  Typography,
  Card,
  CardActions,
  CardContent,
  Grid,
  Button,
  Box,
  Stack,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";

function Overview() {
  const cardStyle = { maxWidth: 500 };
  const buttonStyle = { size: "small", variant: "outlined" };
  const h5Style = { mb: 3, fontWeight: 600, variant: "h5" };
  return (
    <Container sx={{ paddingBlock: 12 }}>
      <Typography variant="subtitle1">May 04 2024</Typography>
      <Typography variant="h3" fontWeight={"bold"} sx={{ mb: 3 }}>
        Welcome Back jiopacho!
      </Typography>
      <Typography {...h5Style}>Overview</Typography>
      <Grid container spacing={2} marginBottom={3}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ ...cardStyle }}>
            <CardContent>
              <Typography>Tasks</Typography>
              <Typography variant="h4">0</Typography>
            </CardContent>
            <CardActions>
              <Button {...buttonStyle}>View Task</Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ ...cardStyle }}>
            <CardContent>
              <Typography>Employees</Typography>
              <Typography variant="h4">0</Typography>
            </CardContent>
            <CardActions>
              <Button {...buttonStyle}>View Employee</Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ ...cardStyle }}>
            <CardContent>
              <Typography>Invoice</Typography>
              <Typography variant="h4">3</Typography>
            </CardContent>
            <CardActions>
              <Button {...buttonStyle}>View Invoice</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

      <Box>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography {...h5Style} mb={0}>
            Notifications
          </Typography>
          <Button {...buttonStyle}>Clear all</Button>
        </Stack>
        <Box>
          <List>
            <ListItem>
              <ListItemText
                primary="NEW"
                secondary={
                  <>
                    <Typography variant="body1">
                      Invoice 12345 created
                    </Typography>
                    <Typography variant="caption">Just now</Typography>
                  </>
                }
              />
            </ListItem>

            <Divider />

            <ListItem>
              <ListItemText
                primary="EDIT"
                secondary={
                  <>
                    <Typography variant="body1">Employee 45 updated</Typography>
                    <Typography variant="caption">1 hour ago</Typography>
                  </>
                }
              />
            </ListItem>

            <Divider />

            <ListItem>
              <ListItemText
                primary="DELETED"
                secondary={
                  <>
                    <Typography variant="body1">Task 25 removed</Typography>
                    <Typography variant="caption">3 hour ago</Typography>
                  </>
                }
              />
            </ListItem>
          </List>
        </Box>
      </Box>
    </Container>
  );
}

export default Overview;
