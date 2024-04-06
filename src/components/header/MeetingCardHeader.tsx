import { Box, Typography, Chip, IconButton } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
export const MeetingCardHeader = ({ title, tags }:any) => {
    return (
      <div className="meeting-container">
        <Box display="flex" alignItems="center" gap={2}>
          <div
            style={{
              height: "60px",
              background: "red",
              width: "2px",
              borderRadius: 5,
            }}
          />
          <div>
            <Typography variant="h5" fontWeight={700} component="h2">
              {title}
            </Typography>
  
            <Box display={"flex"} mt={1} alignItems={"center"} gap={2}>
              {tags.map((tag:any, index:number) => (
                <Chip key={index} size="small" label={tag} />
              ))}
            </Box>
          </div>
        </Box>
        <IconButton>
          <MoreHorizIcon />
        </IconButton>
      </div>
    );
  };
  