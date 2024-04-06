import { Grid, Button } from "@mui/material";
import React from "react";
import { Mtext } from "../typography/MText";

export const MeetingHeader = () => {
  return (
    <Grid container spacing={2} mt={1} justifyContent="space-between" alignItems="center">
      <Grid item xs={8} md={6}>
        <Mtext fontSize="16px" fontWeight={600}>Upcoming Events</Mtext>
      </Grid>
      <Grid item xs={4} md={6} container justifyContent="flex-end">
        <Button variant="text" sx={{ color: "black",fontWeight:600 ,textTransform: "capitalize" }}>
          View all(20)
        </Button>
      </Grid>
    </Grid>
  );
};
