import {
  Box,
  Button,
  Grid,
  Tooltip,
} from "@mui/material";
import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import VideocamIcon from "@mui/icons-material/Videocam";
import { Mtext } from "../typography/MText";
import GradingIcon from "@mui/icons-material/Grading";
import BlurOnIcon from "@mui/icons-material/BlurOn";
import { MeetingCardHeader } from "../header/MeetingCardHeader";
export const MeetingCard = ({ meeting }:any)  => {
    const { title, tags, startDate, endDate, status, completed } = meeting;
  
    return (
      <Grid item md={4} xs={12}>
        <div className="card meeting-card">
          <MeetingCardHeader title={title} tags={tags} />
          <Grid container alignItems={"center"} mt={1}>
            <Grid item md={3}>
              <Mtext fontColor="gray" fontSize="12px">
                Start meeting
              </Mtext>
              <Box display={"flex"} gap={1} alignItems={"center"}>
                <VideocamIcon fontSize="small" />
                <Mtext fontSize="12px" fontWeight={600}>
                  {startDate}
                </Mtext>
              </Box>
            </Grid>
            <Grid item md={1}>
              <AccessTimeIcon />
            </Grid>
            <Grid item md={7}>
              <Mtext fontColor="gray" fontSize="12px">
                End meeting
              </Mtext>
              <Mtext fontWeight={600} fontSize="12px">
                {endDate}
              </Mtext>
            </Grid>
          </Grid>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box display={"flex"} alignItems={"center"} gap={1}>
              <BlurOnIcon />
              <Mtext fontSize="12px">{status}</Mtext>
            </Box>
            <Tooltip
              title={completed ? "Completed" : "Not Completed"}
              placement="top"
              arrow
            >
              <Button
                variant="contained"
                sx={{
                  borderRadius: "5px",
                  textTransform: "lowercase",
                  background: completed ? "#8EC5A5" : "#d7b6ab",
                }}
                size="small"
                startIcon={<GradingIcon fontSize="small" />}
              >
                {completed ? "completed" : "in progress"}
              </Button>
            </Tooltip>
          </Box>
        </div>
      </Grid>
    );
  };
  
  