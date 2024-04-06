import { Grid, Button } from "@mui/material";
import { Mtext } from "../typography/MText";
import AddIcon from "@mui/icons-material/Add";
export const AdminSection = ({ adminName }: any) => (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={6}>
        <p></p>
        <Mtext fontSize="24px" fontWeight={600}>Hello {adminName},</Mtext>
        <Mtext fontSize="16px" fontColor="gray">Lorem ipsum dolor .</Mtext>
      </Grid>
      <Grid item xs={6} container justifyContent="flex-end">
        <Button
          startIcon={<AddIcon />}
          variant="contained"
          size="medium"

          sx={{ textTransform: "capitalize" }}
        >
          Manage Booking
        </Button>
      </Grid>
    </Grid>
  );
  
  