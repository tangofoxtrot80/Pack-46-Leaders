/* ============================================================================
   PACK 46 — PROGRAM CALENDAR DATA
   ----------------------------------------------------------------------------
   This is the ONE file leaders edit to update the calendar and the
   "What's next" list on the home page. No coding experience needed.

   To add an event, copy a block between the { } and change the values.
   Keep the commas between blocks. Dates use the format "YYYY-MM-DD".

   category options (controls the color tag): 
     "meeting"  "recruiting"  "fundraising"  "advancement"
     "camp"     "service"     "social"       "admin"        "training"

   tentpole: true  -> shows as a big badge on the year-at-a-glance trail
   tentpole: false -> shows only in the detailed month list

   "location" and "link" are optional. Leave link as "" if there isn't one.
   ============================================================================ */

window.PACK_EVENTS = [
  // ---------- SUMMER 2026 (program year wind-down + planning) ----------
  {
    date: "2026-07-14",
    title: "Leader Planning Night — 2026–27 Program Year",
    category: "admin",
    tentpole: true,
    location: "TBD",
    note: "Map out the full year: tentpole dates, den assignments, budget.",
    link: ""
  },
  {
    date: "2026-07-28",
    title: "Summertime Pack Activity — Park & Splash Day",
    category: "social",
    tentpole: false,
    location: "Westchase area park",
    note: "Counts toward the National Summertime Pack Award.",
    link: ""
  },

  // ---------- FALL 2026 — RECRUIT, KICK OFF, FUNDRAISE ----------
  {
    date: "2026-08-18",
    title: "Committee Meeting",
    category: "meeting",
    tentpole: false,
    location: "TBD",
    note: "Finalize recruitment plan and fall calendar.",
    link: ""
  },
  {
    date: "2026-08-27",
    title: "Join Scouting Night (Fall Recruitment)",
    category: "recruiting",
    tentpole: true,
    location: "Westchase Elementary",
    note: "Biggest membership push of the year. Bring sign-up tablets + flyers.",
    link: "https://beascout.scouting.org/"
  },
  {
    date: "2026-09-10",
    title: "Pack Kickoff Meeting",
    category: "meeting",
    tentpole: true,
    location: "TBD",
    note: "Welcome new families, hand out den assignments, set expectations.",
    link: ""
  },
  {
    date: "2026-09-12",
    title: "Popcorn Sale Kickoff",
    category: "fundraising",
    tentpole: true,
    location: "Online + Show-and-Sell",
    note: "Pack's main fundraiser. Assign a Popcorn Kernel to lead.",
    link: "https://www.trails-end.com/"
  },
  {
    date: "2026-10-17",
    title: "Raingutter Regatta",
    category: "social",
    tentpole: true,
    location: "TBD",
    note: "Build-and-race event. Order boat kits 4–6 weeks ahead.",
    link: ""
  },
  {
    date: "2026-10-24",
    title: "Fall Family Campout",
    category: "camp",
    tentpole: false,
    location: "Council camp (TBD)",
    note: "Collect Annual Health & Medical Record (Parts A & B) in advance.",
    link: "https://www.scouting.org/health-and-safety/ahmr/"
  },

  // ---------- WINTER 2026–27 — SERVICE, RECHARTER, DERBY ----------
  {
    date: "2026-11-14",
    title: "Scouting for Food (Service Project)",
    category: "service",
    tentpole: false,
    location: "Westchase neighborhoods",
    note: "Council-wide food drive. Great Cub-friendly service hours.",
    link: ""
  },
  {
    date: "2026-12-08",
    title: "Recharter Due",
    category: "admin",
    tentpole: true,
    location: "Online — my.Scouting",
    note: "Renew the pack's charter. Key 3 task. Don't miss the deadline.",
    link: "https://my.scouting.org/"
  },
  {
    date: "2026-12-12",
    title: "Holiday Pack Party",
    category: "social",
    tentpole: false,
    location: "TBD",
    note: "Low-key celebration; optional gift or service tie-in.",
    link: ""
  },
  {
    date: "2027-01-24",
    title: "Pinewood Derby",
    category: "social",
    tentpole: true,
    location: "TBD",
    note: "Signature event. Hand out car kits in December; publish rules early.",
    link: "https://www.scouting.org/programs/cub-scouts/leader-resources/pack-meeting-resources/pinewood-derby/"
  },

  // ---------- SPRING 2027 — BLUE & GOLD, ADVANCEMENT, CROSSOVER ----------
  {
    date: "2027-02-21",
    title: "Blue & Gold Banquet",
    category: "advancement",
    tentpole: true,
    location: "TBD",
    note: "Celebrates Scouting's anniversary. Big advancement & recognition night.",
    link: ""
  },
  {
    date: "2027-03-20",
    title: "Spring Campout",
    category: "camp",
    tentpole: false,
    location: "Council camp (TBD)",
    note: "Confirm tour/activity plan and BALOO-trained leader on site.",
    link: ""
  },
  {
    date: "2027-04-17",
    title: "Crossover & Bridging Ceremony",
    category: "advancement",
    tentpole: true,
    location: "TBD",
    note: "Arrow of Light Scouts cross to a troop; dens advance a rank.",
    link: ""
  },
  {
    date: "2027-04-29",
    title: "Spring Recruitment Push",
    category: "recruiting",
    tentpole: false,
    location: "Westchase Elementary",
    note: "Second recruitment window before summer.",
    link: "https://beascout.scouting.org/"
  },

  // ---------- LATE SPRING / SUMMER 2027 ----------
  {
    date: "2027-05-15",
    title: "End-of-Year Pack Picnic",
    category: "social",
    tentpole: true,
    location: "Westchase area park",
    note: "Thank volunteers, hand out summer activity packets.",
    link: ""
  },
  {
    date: "2027-06-14",
    title: "Cub Scout Day Camp",
    category: "camp",
    tentpole: true,
    location: "Greater Tampa Bay Area Council",
    note: "Week-long council day camp. Register early; recruit adult chaperones.",
    link: "https://scoutingevent.com/089"
  }
];
