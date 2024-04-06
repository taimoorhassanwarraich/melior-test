import { Box, Grid, Link } from "@mui/material";
import React from "react";
import { Mtext } from "../typography/MText";
import { EmailOutlined, FollowTheSigns } from "@mui/icons-material";
import profile from "../../assets/profile.jpeg";
export const PostCard = () => {
  return (
    <Grid item xs={12} md={4}>
      <div className="card post-card">
        <Box display={"flex"} alignItems={'center'} gap={1} mb={1}>
          <img src={profile} className="avatar" alt="" />
          <Mtext fontSize="14px" fontColor="gray" fontWeight={600}>
            Jhon Smith
          </Mtext>
        </Box>
        <Link color={"#000000"} fontSize={"20px"} fontWeight={600}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </Link>
        <Box display={"flex"} gap={1} mt={1} alignItems={"center"}>
          <EmailOutlined fontSize="small" />
          <Mtext fontColor="gray" fontSize="16px">
            125
          </Mtext>
          <FollowTheSigns fontSize="small" />
          <Mtext fontColor="gray" fontSize="16px">
            158
          </Mtext>
        </Box>
      </div>
    </Grid>
  );
};
