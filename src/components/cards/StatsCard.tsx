import { Grid } from "@mui/material";
import React from "react";
import { Mtext } from "../typography/MText";
import './Card.css'
export const StatsCard = ({ Stats, index }: any) => {
  return (
    <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
      <div className="card stats-card">
        <div className="stats-icon">
          <img src={Stats.image} width={"100px"} height={"100px"} alt="" />
        </div>
        <Mtext fontSize="16px" fontWeight={600}>
          {Stats.title}
        </Mtext>
        <div className="relative" style={{ marginTop: "16px" }}>
          <Mtext fontColor="black" fontSize="40px" fontWeight={600}>
            {Stats.subtitle}
            {index === 0 && <span style={{ color: "gray",fontSize:'20px' }}>/23</span>}
          </Mtext>
          {index === 2 && <div className="circle-icon"></div>}
        </div>
      </div>
    </Grid>
  );
};
