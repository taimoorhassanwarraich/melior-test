import { Box, Grid } from "@mui/material";
import React from "react";
import { Mtext } from "../typography/MText";
import { relative } from "path";

export const EventCard = ({ image, children }: any) => {
  return (
    <Grid item md={4} xs={12}>
      <div className="card">
        <Grid container>
          <Grid item md={3}>
            <div style={{ height: "160px" }}>
              <img src={image} width={"100%"} height={"100%"} alt="" />
            </div>
          </Grid>
          <Grid item md={9} py={1} pl={1}>
            <Mtext fontSize="20px" fontWeight={600}>
              Lorem ipsum dolor sit amet consectetur.
            </Mtext>
            <Mtext fontColor="gray" fontSize="12px">
              Date Time
            </Mtext>
            <Mtext fontSize="14px" fontWeight={600}>
              May 15, 2024
            </Mtext>

            {children}
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
};
