import {  Box, Chip, Grid } from "@mui/material";
import "./App.css";
import { StatsCard } from "./components/cards/StatsCard";
import { AdminSection } from "./components/header/AdminSection";
import { MeetingHeader } from "./components/header/MeetingHeader";
import { MeetingCard } from "./components/cards/MeetingCard";
import { EventsHeader } from "./components/header/EventsHeader";
import { EventCard, EventCardBottom } from "./components/cards/EventCard";
import { Mtext } from "./components/typography/MText";
import { PostCard } from "./components/cards/PostCard";
import person from './assets/images/person.jpeg'
import chair from './assets/images/chair.jpeg'
// import sample from './assets/image001.jpg'
import { Done } from "@mui/icons-material";
import { sampleMeetings, stats } from "./helpers/Helper";
function App() {
  return (
    <>
    <Box sx={{background:'#F5F5F5',px:{xs:2,md:10},py:{xs:2,md:5}}}>
      <div className="App ">
        <AdminSection adminName="Adrian" />
        <Grid container spacing={3} mt={1}>
          {stats.map((item, index) => {
            return <StatsCard key={index} index={index} Stats={item} />;
          })}
        </Grid>
        <MeetingHeader />
        <Grid container mt={"5px"} spacing={2}>
          {sampleMeetings.map((meeting, index) => (
            <MeetingCard key={index} meeting={meeting} />
          ))}
        </Grid>
        <EventsHeader />
        <Grid container spacing={2} mt={1} >
          <EventCard image={person}>
            <EventCardBottom>
              <Mtext>$600</Mtext>
            </EventCardBottom>
          </EventCard>
          <EventCard image={chair}>
            <EventCardBottom>
              <Chip size="small" avatar={<Done/>} label={"completed"} />
            </EventCardBottom>
          </EventCard>
          <PostCard/>
        </Grid>
      </div>
      </Box>
      {/* <img src={sample} alt="" /> */}
    </>
  );
}

export default App;
