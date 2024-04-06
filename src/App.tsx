import {  Box, Chip, Grid } from "@mui/material";
import "./App.css";
import { StatsCard } from "./components/cards/StatsCard";
import { sampleMeetings, stats } from "./Helper";
import { AdminSection } from "./components/header/AdminSection";
import { MeetingHeader } from "./components/header/MeetingHeader";
import { MeetingCard } from "./components/cards/MeetingCard";
import { EventsHeader } from "./components/header/EventsHeader";
import { EventCard, EventCardBottom } from "./components/cards/EventCard";
import { Mtext } from "./components/typography/MText";
import { PostCard } from "./components/cards/PostCard";
import person from './assets/person.jpeg'
import chair from './assets/chair.jpeg'
import sample from './assets/image001.jpg'
function App() {
  return (
    <>
    <Box sx={{background:'#DDDDDD',px:{xs:2,md:10},py:{xs:2,md:5}}}>
      <div className="App bg-gray">
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
              <Chip size="small" label={"completed"} />
            </EventCardBottom>
          </EventCard>
          <PostCard/>
        </Grid>
      </div>
      </Box>
    </>
  );
}

export default App;
