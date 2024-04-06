import { Grid } from "@mui/material";
import React from "react";
import { Mtext } from "../typography/MText";

export const EventsHeader = () => {
  return (
    <Grid container mt={2} pt={2} sx={{borderTop:'1px solid gray'}}>
      <Grid item md={8}>
        <Mtext fontSize="16px" fontWeight={600}>
          Upcomming News
        </Mtext>
      </Grid>
      <Grid item md={4}>
        <Mtext fontSize="16px" fontWeight={600}>
          Lorem, ipsum dolor
        </Mtext>
      </Grid>
    </Grid>
  );
};