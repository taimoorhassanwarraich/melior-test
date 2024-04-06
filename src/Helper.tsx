import person from "./assets/icons/group.png";
import email from './assets/icons/email.png'
import card from './assets/icons/credit-card.png'
import notes from './assets/icons/notes.png'
export const stats = [
  {
    title: "Verified Sser",
    subtitle: "12",
    image: `${person}`,
  },
  {
    title: "Unread Messages",
    subtitle: "12",
    image: `${notes}`,
  },
  {
    title: "New Messages",
    subtitle: "3",
    image: `${email}`,
  },
  {
    title: "Free Tickets",
    subtitle: "6",
    image: `${card}`,
  },
];

export const sampleMeetings = [
  {
    title: "HDMI Rexon",
    tags: ["weekly update", "daily update"],
    startDate: "May 13, 2024",
    endDate: "May 14, 2024",
    status: "connecting",
    completed: false,
  },
  {
    title: "RJ-46 R(x)m",
    tags: ["team meeting", "project discussion"],
    startDate: "May 15, 2024",
    endDate: "May 16, 2024",
    status: "connected",
    completed: true,
  },
  {
    title: "HJ-11 HDESK",
    tags: ["weekly update", "daily update"],
    startDate: "May 13, 2024",
    endDate: "May 14, 2024",
    status: "connecting",
    completed: false,
  },

];
