import { Grid } from "@mui/material";
import React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import { Mtext } from "../typography/MText";

export const StatsCard = ({ Stats, index }: any) => {
  return (
    <Grid item xs={12} md={3}>
      <div className="card stats-card">
        <img src={Stats.image} className="stats-icon" alt="" />
        <Mtext  fontSize="20px" fontWeight={600}>
        {Stats.title}
        </Mtext>
        <div className="relative"style={{marginBottom:'10px'}}>
          <Mtext fontColor="black" fontSize="36px" fontWeight={600}>
        
            {Stats.subtitle} {index===0 &&<span style={{color:'gray'}}>/23</span>}
          </Mtext>
          {index === 2 && (
            <div className="circle-icon">
            </div>
          )}
        </div>

      </div>
    </Grid>
  );
};
