import { Box, Grid } from "@mui/material";
import React from "react";
import { Mtext } from "../typography/MText";
import './Card.css'
export const EventCard = ({ image, children }: any) => {
    return (
      <Grid item xs={12} md={4}>
        <div className="card">
          <Grid container>
            <Grid item xs={12} md={3}>
            <Box sx={{ height: { xs: 250, md: 155 }, width: "100%" }}>
              <img src={image} alt="" style={{ width: "100%", height: "100%", objectFit: "fill" }} />
            </Box>
            </Grid>
            <Grid item xs={12} md={9} py={1} pl={1}>
              <Mtext fontSize="20px" fontWeight={600} lineHeight={'24px'}>
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
  

  export const EventCardBottom = ({ children }: any) => {
    return (
      <Box display={"flex"} justifyContent={"space-between"} mt={2} pr={2}>
        <Mtext fontSize="16px">
          20 <span style={{color:'gray'}}>/40</span>
        </Mtext>
        {children}
      </Box>
    );
  };