// Screen Elements
const screens = {
    menu: document.getElementById("menu-screen"),
    queue: document.getElementById("queue-screen"),
    match: document.getElementById("match-screen"),
    end: document.getElementById("end-screen"),
  };
  // Redirect button functionality
  document
    .getElementById("redirect-button")
    .addEventListener("click", function () {
      window.location.href = "https://rc-leaderboard.glitch.me"; // Replace with the target URL
    });

  // Rank Data
  const rankData = [
    {
      rank: "Bronze I",
      image:
        "https://cdn.glitch.global/c16ac13c-9db1-4fbb-a599-4c729f45d485/939597fb-c29f-4607-9a76-9a6c5f1edf48.image.png?v=1724334781837",
      minMMR: 0,
    },
    {
      rank: "Bronze II",
      image:
        "https://cdn.glitch.global/c16ac13c-9db1-4fbb-a599-4c729f45d485/9965effe-4989-4504-9200-7f04b6b665a2.image.png?v=1724334793116",
      minMMR: 168,
    },
    {
      rank: "Bronze III",
      image:
        "https://cdn.glitch.global/c16ac13c-9db1-4fbb-a599-4c729f45d485/a274e890-4257-4cd9-a02a-56bc80be47d3.image.png?v=1724334816902",
      minMMR: 231,
    },
    {
      rank: "Silver I",
      image:
        "https://cdn.glitch.global/c16ac13c-9db1-4fbb-a599-4c729f45d485/28b40287-5562-45ab-a236-5647e96f1d48.image.png?v=1724334852235",
      minMMR: 294,
    },
    {
      rank: "Silver II",
      image:
        "https://cdn.glitch.global/c16ac13c-9db1-4fbb-a599-4c729f45d485/6caddf21-bee3-46c3-9d27-05823806cb67.image.png?v=1724334861872",
      minMMR: 354,
    },
    {
      rank: "Silver III",
      image:
        "https://cdn.glitch.global/c16ac13c-9db1-4fbb-a599-4c729f45d485/faa8edc7-b482-4cc4-b5b0-ceed84627079.image.png?v=1724334871163",
      minMMR: 414,
    },
    {
      rank: "Gold I",
      image:
        "https://cdn.glitch.global/c16ac13c-9db1-4fbb-a599-4c729f45d485/df499a57-8fc0-4524-bdd0-2fae76ec9301.image.png?v=1724334902060",
      minMMR: 474,
    },
    {
      rank: "Gold II",
      image:
        "https://cdn.glitch.global/c16ac13c-9db1-4fbb-a599-4c729f45d485/a0dedb5b-6bc3-4322-afbb-77cc07184fec.image.png?v=1724334909730",
      minMMR: 534,
    },
    {
      rank: "Gold III",
      image:
        "https://cdn.glitch.global/c16ac13c-9db1-4fbb-a599-4c729f45d485/d3a3b2fc-6fcf-4bdc-85cc-8da4f40b2993.image.png?v=1724334914955",
      minMMR: 594,
    },
    {
      rank: "Platinum I",
      image:
        "https://cdn.glitch.global/c16ac13c-9db1-4fbb-a599-4c729f45d485/2f23a5f7-efe3-45ee-9cb8-acd533b0d6c4.image.png?v=1724335263302",
      minMMR: 655,
    },
    {
      rank: "Platinum II",
      image:
        "https://cdn.glitch.global/c16ac13c-9db1-4fbb-a599-4c729f45d485/3103ab33-c432-43ff-93c3-69a08d1ca602.image.png?v=1724335271866",
      minMMR: 714,
    },
    {
      rank: "Platinum III",
      image:
        "https://cdn.glitch.global/c16ac13c-9db1-4fbb-a599-4c729f45d485/c0fa94d0-d195-42d1-92f1-cb082976bdff.image.png?v=1724335280781",
      minMMR: 754,
    },
    {
      rank: "Diamond I",
      image:
        "https://cdn.glitch.global/c16ac13c-9db1-4fbb-a599-4c729f45d485/db671aad-2dd6-4328-897f-3f259be82fc5.image.png?v=1724335489836",
      minMMR: 834,
    },
    {
      rank: "Diamond II",
      image:
        "https://cdn.glitch.global/c16ac13c-9db1-4fbb-a599-4c729f45d485/76c9b43e-d0f6-4b05-9f32-7243d522c5f1.image.png?v=1724335504082",
      minMMR: 914,
    },
    {
      rank: "Diamond III",
      image:
        "https://cdn.glitch.global/c16ac13c-9db1-4fbb-a599-4c729f45d485/07082c63-cce6-4ff1-bff3-c3fceedf2e54.image.png?v=1724335508559",
      minMMR: 994,
    },
    {
      rank: "Champion I",
      image:
        "https://cdn.glitch.global/c16ac13c-9db1-4fbb-a599-4c729f45d485/a10c88af-e70d-4891-99e7-57abf90002d5.image.png?v=1724335525065",
      minMMR: 1074,
    },
    {
      rank: "Champion II",
      image:
        "https://cdn.glitch.global/c16ac13c-9db1-4fbb-a599-4c729f45d485/3d397ae6-e026-45af-b4e3-180318bd415a.image.png?v=1724335551068",
      minMMR: 1194,
    },
    {
      rank: "Champion III",
      image:
        "https://cdn.glitch.global/c16ac13c-9db1-4fbb-a599-4c729f45d485/c28f3b1a-1396-4f24-aec7-f289695e5695.image.png?v=1724335556235",
      minMMR: 1314,
    },
    {
      rank: "Grand Champion I",
      image:
        "https://cdn.glitch.global/c16ac13c-9db1-4fbb-a599-4c729f45d485/90ecba8a-55f9-457c-8834-2ec4ee1c97fe.image.png?v=1724335571459",
      minMMR: 1434,
    },
    {
      rank: "Grand Champion II",
      image:
        "https://cdn.glitch.global/c16ac13c-9db1-4fbb-a599-4c729f45d485/a90fa27e-2330-45d1-8b74-377fb4028842.image.png?v=1724335635668",
      minMMR: 1575,
    },
    {
      rank: "Grand Champion III",
      image:
        "https://cdn.glitch.global/c16ac13c-9db1-4fbb-a599-4c729f45d485/30d7ef7b-605e-4830-aa4d-153e5f77d67b.image.png?v=1724335639506",
      minMMR: 1709,
    },
    {
      rank: "Clicker Legend",
      image:
        "https://cdn.glitch.global/c16ac13c-9db1-4fbb-a599-4c729f45d485/21405196-dbc9-4527-91e7-9a41abc6a698.image.png?v=1724335671471",
      minMMR: 1864,
    },
  ];

  // Titles Data
  const titles = [
    {
    "title": "PRE-SEASON GRAND CHAMPION",
    "color": "gold",
    "glow": true,
    "minMMR": null,
    "wlUsers": ["z"]
  },
  {
    "title": "PRE-SEASON CLICKER LEGEND",
    "color": "#ed8ecc",
    "glow": true,
    "minMMR": null,
    "wlUsers": [""]
  },
  {
    "title": "S1 GRAND CHAMPION",
    "color": "red",
    "glow": true,
    "minMMR": null,
    "wlUsers": [""]
  },
  {
    "title": "S1 CLICKER LEGEND",
    "color": "white",
    "glow": true,
    "minMMR": null,
    "wlUsers": null
  },
  {
    "title": "S2 GRAND CHAMPION",
    "color": "gold",
    "glow": true,
    "minMMR": null,
    "wlUsers": [""]
  },
  {
    "title": "S2 CLICKER LEGEND",
    "color": "white",
    "glow": true,
    "minMMR": null,
    "wlUsers": [""]
  },

  {
    "title": "S3 GRAND CHAMPION",
    "color": "red",
    "glow": true,
    "minMMR": null,
    "wlUsers": null
  },
  {
    "title": "S3 CLICKER LEGEND",
    "color": "white",
    "glow": true,
    "minMMR": null,
    "wlUsers": null
  },
  {
    "title": "S4 GRAND CHAMPION",
    "color": "gold",
    "glow": true,
    "minMMR": null,
    "wlUsers": null
  },
  {
    "title": "S4 CLICKER LEGEND",
    "color": "white",
    "glow": true,
    "minMMR": null,
    "wlUsers": null
  },
  {
    "title": "S5 GRAND CHAMPION",
    "color": "red",
    "glow": true,
    "minMMR": null,
    "wlUsers": null
  },
  {
    "title": "S5 CLICKER LEGEND",
    "color": "white",
    "glow": true,
    "minMMR": null,
    "wlUsers": null
  },
  {
    "title": "S6 GRAND CHAMPION",
    "color": "gold",
    "glow": true,
    "minMMR": null,
    "wlUsers": null
  },
  {
    "title": "S6 CLICKER LEGEND",
    "color": "white",
    "glow": true,
    "minMMR": null,
    "wlUsers": null
  },
  {
    "title": "S7 GRAND CHAMPION",
    "color": "red",
    "glow": true,
    "minMMR": null,
    "wlUsers": null
  },
  {
    "title": "S7 CLICKER LEGEND",
    "color": "white",
    "glow": true,
    "minMMR": null,
    "wlUsers": null
  },
  {
    "title": "S8 GRAND CHAMPION",
    "color": "gold",
    "glow": true,
    "minMMR": null,
    "wlUsers": null
  },
  {
    "title": "S8 CLICKER LEGEND",
    "color": "white",
    "glow": true,
    "minMMR": null,
    "wlUsers": null
  },
  {
    "title": "S9 GRAND CHAMPION",
    "color": "red",
    "glow": true,
    "minMMR": null,
    "wlUsers": null
  },
  {
    "title": "S9 CLICKER LEGEND",
    "color": "white",
    "glow": true,
    "minMMR": null,
    "wlUsers": null
  },
  {
    "title": "S10 GRAND CHAMPION",
    "color": "gold",
    "glow": true,
    "minMMR": null,
    "wlUsers": null
  },
  {
    "title": "S10 CLICKER LEGEND",
    "color": "white",
    "glow": true,
    "minMMR": null,
    "wlUsers": null
  },
  {
    "title": "S11 GRAND CHAMPION",
    "color": "red",
    "glow": true,
    "minMMR": null,
    "wlUsers": null
  },
  {
    "title": "S11 CLICKER LEGEND",
    "color": "white",
    "glow": true,
    "minMMR": null,
    "wlUsers": null
  },
  {
    "title": "S12 GRAND CHAMPION",
    "color": "gold",
    "glow": true,
    "minMMR": null,
    "wlUsers": null
  },
  {
    "title": "S12 CLICKER LEGEND",
    "color": "white",
    "glow": true,
    "minMMR": null,
    "wlUsers": null
  },
  {
    "title": "S13 GRAND CHAMPION",
    "color": "red",
    "glow": true,
    "minMMR": null,
    "wlUsers": null
  },
  {
    "title": "S13 CLICKER LEGEND",
    "color": "white",
    "glow": true,
    "minMMR": null,
    "wlUsers": null
  },
  {
    "title": "S14 GRAND CHAMPION",
    "color": "gold",
    "glow": true,
    "minMMR": null,
    "wlUsers": null
  },
  {
    "title": "S14 CLICKER LEGEND",
    "color": "white",
    "glow": true,
    "minMMR": null,
    "wlUsers": [""]
  },
    {
    "title": "S15 GRAND CHAMPION",
    "color": "red",
    "glow": true,
    "minMMR": null,
    "wlUsers": null
  },
  {
    "title": "S15 CLICKER LEGEND",
    "color": "white",
    "glow": true,
    "minMMR": null,
    "wlUsers": [""]
  },
     {
    "title": "S16 GRAND CHAMPION",
    "color": "red",
    "glow": true,
    "minMMR": 1434,
    "wlUsers": null
  },
  {
    "title": "S16 CLICKER LEGEND",
    "color": "white",
    "glow": true,
    "minMMR": 1864,
    "wlUsers": [""]
  },

    
    {
      title: "S1 TOP 10",
      color: "gold",
      glow: true,
      minMMR: null,
      wlUsers: [""],
    },
    {
      title: "S1 TOP 3",
      color: "gold",
      glow: true,
      minMMR: null,
      wlUsers: [""],
    },
    {
      title: "S1 TOP CHAMPION",
      color: "gold",
      glow: true,
      minMMR: null,
      wlUsers: [""],
    },
    {
  title: "S2 TOP 10",
  color: "gold",
  glow: true,
  minMMR: null,
  wlUsers: [""],
},
{
  title: "S2 TOP 3",
  color: "gold",
  glow: true,
  minMMR: null,
  wlUsers: ["9"],
},
{
  title: "S2 TOP CHAMPION",
  color: "gold",
  glow: true,
  minMMR: null,
  wlUsers: ["9"],
},
{
  title: "S3 TOP 10",
  color: "gold",
  glow: true,
  minMMR: null,
  wlUsers: ["9"],
},
{
  title: "S3 TOP 3",
  color: "gold",
  glow: true,
  minMMR: null,
  wlUsers: ["9"],
},
{
  title: "S3 TOP CHAMPION",
  color: "gold",
  glow: true,
  minMMR: null,
  wlUsers: [""],
},
{
  title: "S4 TOP 10",
  color: "gold",
  glow: true,
  minMMR: null,
  wlUsers: ["9"],
},
{
  title: "S4 TOP 3",
  color: "gold",
  glow: true,
  minMMR: null,
  wlUsers: [""],
},
{
  title: "S4 TOP CHAMPION",
  color: "gold",
  glow: true,
  minMMR: null,
  wlUsers: [""],
},
{
  title: "S5 TOP 10",
  color: "gold",
  glow: true,
  minMMR: null,
  wlUsers: ["9"],
},
{
  title: "S5 TOP 3",
  color: "gold",
  glow: true,
  minMMR: null,
  wlUsers: ["9"],
},
{
  title: "S5 TOP CHAMPION",
  color: "gold",
  glow: true,
  minMMR: null,
  wlUsers: ["9"],
},
{
  title: "S6 TOP 10",
  color: "gold",
  glow: true,
  minMMR: null,
  wlUsers: ["9"],
},
{
  title: "S6 TOP 3",
  color: "gold",
  glow: true,
  minMMR: null,
  wlUsers: ["9"],
},
{
  title: "S6 TOP CHAMPION",
  color: "gold",
  glow: true,
  minMMR: null,
  wlUsers: [""],
},
{
  title: "S7 TOP 10",
  color: "gold",
  glow: true,
  minMMR: null,
  wlUsers: ["9"],
},
{
  title: "S7 TOP 3",
  color: "gold",
  glow: true,
  minMMR: null,
  wlUsers: ["9"],
},
{
  title: "S7 TOP CHAMPION",
  color: "gold",
  glow: true,
  minMMR: null,
  wlUsers: [""],
},
{
  title: "S8 TOP 10",
  color: "gold",
  glow: true,
  minMMR: null,
  wlUsers: ["9"],
},
{
  title: "S8 TOP 3",
  color: "gold",
  glow: true,
  minMMR: null,
  wlUsers: [""],
},
{
  title: "S8 TOP CHAMPION",
  color: "gold",
  glow: true,
  minMMR: null,
  wlUsers: [""],
},
{
  title: "S9 TOP 10",
  color: "gold",
  glow: true,
  minMMR: null,
  wlUsers: ["9"],
},
{
  title: "S9 TOP 3",
  color: "gold",
  glow: true,
  minMMR: null,
  wlUsers: [""],
},
{
  title: "S9 TOP CHAMPION",
  color: "gold",
  glow: true,
  minMMR: null,
  wlUsers: [""],
},
{
  title: "S10 TOP 10",
  color: "gold",
  glow: true,
  minMMR: null,
  wlUsers: [""],
},
{
  title: "S10 TOP 3",
  color: "gold",
  glow: true,
  minMMR: null,
  wlUsers: [""],
},
{
  title: "S10 TOP CHAMPION",
  color: "gold",
  glow: true,
  minMMR: null,
  wlUsers: [""],
},
{
  title: "S11 TOP 10",
  color: "gold",
  glow: true,
  minMMR: null,
  wlUsers: [""],
},
{
  title: "S11 TOP 3",
  color: "gold",
  glow: true,
  minMMR: null,
  wlUsers: [""],
},
{
  title: "S11 TOP CHAMPION",
  color: "gold",
  glow: true,
  minMMR: null,
  wlUsers: [""],
},
{
  title: "S12 TOP 10",
  color: "gold",
  glow: true,
  minMMR: null,
  wlUsers: [""],
},
{
  title: "S12 TOP 3",
  color: "gold",
  glow: true,
  minMMR: null,
  wlUsers: [""],
},
{
  title: "S12 TOP CHAMPION",
  color: "gold",
  glow: true,
  minMMR: null,
  wlUsers: [""],
},
{
  title: "S13 TOP 10",
  color: "gold",
  glow: true,
  minMMR: null,
  wlUsers: [""],
},
{
  title: "S13 TOP 3",
  color: "gold",
  glow: true,
  minMMR: null,
  wlUsers: [""],
},
{
  title: "S13 TOP CHAMPION",
  color: "gold",
  glow: true,
  minMMR: null,
  wlUsers: [""],
},
{
  title: "S14 TOP 10",
  color: "gold",
  glow: true,
  minMMR: null,
  wlUsers: [""],
},
{
  title: "S14 TOP 3",
  color: "gold",
  glow: true,
  minMMR: null,
  wlUsers: [""],
},
{
  title: "S14 TOP CHAMPION",
  color: "gold",
  glow: true,
  minMMR: null,
  wlUsers: [""],
},
    {
  title: "S15 TOP 10",
  color: "gold",
  glow: true,
  minMMR: null,
  wlUsers: [""],
},
{
  title: "S15 TOP 3",
  color: "gold",
  glow: true,
  minMMR: null,
  wlUsers: [""],
},
{
  title: "S15 TOP CHAMPION",
  color: "gold",
  glow: true,
  minMMR: null,
  wlUsers: [""],
},


    // TOURNAMENT TITLES
    {
      title: "S2 DIAMOND TOURNAMENT WINNER",
      color: "blue",
      glow: true,
      minMMR: null,
      wlUsers: [""],
    },
     {
      title: "S2 CHAMPION TOURNAMENT WINNER",
      color: "purple",
      glow: true,
      minMMR: null,
      wlUsers: [""],
    },
    {
      title: "S2 GRAND CHAMPION TOURNAMENT WINNER",
      color: "red",
      glow: true,
      minMMR: null,
      wlUsers: [""],
    },
     {
      title: "S2 CLICKER LEGEND TOURNAMENT WINNER",
      color: "white",
      glow: true,
      minMMR: null,
      wlUsers: [""],
    },
    
    // SEASON 15 TOURNAMENT TITLES
    {
      title: "S15 GRAND CHAMPION TOURNAMENT WINNER",
      color: "red",
      glow: true,
      minMMR: null,
      wlUsers: [""],
    },
     {
      title: "S15 CLICKER LEGEND TOURNAMENT WINNER",
      color: "white",
      glow: true,
      minMMR: null,
      wlUsers: [""],
    },
    // x3 WINS
    {
      title: "X3 S15 GRAND CHAMPION TOURNAMENT WINNER",
      color: "gold",
      glow: true,
      minMMR: null,
      wlUsers: [""],
    },
     {
      title: "X3 S15 CLICKER LEGEND TOURNAMENT WINNER",
      color: "pink",
      glow: true,
      minMMR: null,
      wlUsers: [""],
    },

    { title: ".", color: "black", glow: false, minMMR: 1, wlUsers: null },
    { title: "OG", color: "grey", glow: false, minMMR: null, wlUsers: null },
    { title: "EST. SEASON 1", color: "grey", glow: false, minMMR: null, wlUsers: null },
    { title: "EST. SEASON 2", color: "grey", glow: false, minMMR: 1, wlUsers: null },
     { title: "NOOB", color: "grey", glow: false, minMMR: 500, wlUsers: null, },
     { title: "JUST STARTING", color: "grey", glow: false, minMMR: 550, wlUsers: null, },
    { title: "CHALLENGER", color: "grey", glow: false, minMMR: 600, wlUsers: null },
    { title: "ELITE PLAYER", color: "grey", glow: false, minMMR: 750, wlUsers: null, },
     { title: "#NEEDMMR", color: "grey", glow: false, minMMR: 633, wlUsers: null, },
    { title: "LEVEL GRINDER", color: "grey", glow: false, minMMR: 766, wlUsers: null, },
    
    { title: "TOP GAMER", color: "grey", glow: false, minMMR: 1200, wlUsers: null },
    {
      title: "ALPHA TESTER",
      color: "gold",
      glow: true,
      minMMR: null,
      wlUsers: null,
    },

    {
      title: "DEVELOPER",
      color: "green",
      glow: true,
      minMMR: null,
      wlUsers: [""],
    },
    {
      title: "#1 GOONER",
      color: "gold",
      glow: true,
      minMMR: null,
      wlUsers: [""],
    },
    { title: "ADMIN", color: "red", glow: true, minMMR: null, wlUsers: [""] },

    {
      title: "RCCS ANALYST",
      color: "green",
      glow: true,
      minMMR: null,
      wlUsers: [""],
    },
    {
      title: "RCCS HOST",
      color: "green",
      glow: true,
      minMMR: null,
      wlUsers: [""],
    },
    {
      title: "RCCS MANAGMENT",
      color: "aqua",
      glow: true,
      minMMR: null,
      wlUsers: [""],
    },
  // RCCS TAGS
  // RCCS EXTRAS
{"title": "2-TIME WORLD CHAMPION", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
{"title": "RCCS MAJOR CHAMPION", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
{"title": "RCCS REGIONAL CHAMPION", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
{"title": "RCCS ELITE", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},

  // SEASON 1
  {"title": "RCCS S1 CONTENDER", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S1 ELITE", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S1 REGIONAL CONTENDER", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S1 REGIONAL FINALIST", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S1 MAJOR CONTENDER", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S1 MAJOR FINALIST", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S1 WORLDS CONTENDER", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S1 WORLD CHAMPION", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},

  // SEASON 2
  {"title": "RCCS S2 CONTENDER", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S2 ELITE", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S2 REGIONAL CONTENDER", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S2 REGIONAL FINALIST", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S2 MAJOR CONTENDER", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S2 MAJOR FINALIST", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S2 WORLDS CONTENDER", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S2 WORLD CHAMPION", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},

  // SEASON 3
  {"title": "RCCS S3 CONTENDER", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S3 ELITE", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S3 REGIONAL CONTENDER", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S3 REGIONAL FINALIST", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S3 MAJOR CONTENDER", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S3 MAJOR FINALIST", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S3 WORLDS CONTENDER", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S3 WORLD CHAMPION", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},

  // SEASON 4
  {"title": "RCCS S4 CONTENDER", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S4 ELITE", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S4 REGIONAL CONTENDER", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S4 REGIONAL FINALIST", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S4 MAJOR CONTENDER", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S4 MAJOR FINALIST", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S4 WORLDS CONTENDER", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S4 WORLD CHAMPION", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},

  // SEASON 5
  {"title": "RCCS S5 CONTENDER", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S5 ELITE", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S5 REGIONAL CONTENDER", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S5 REGIONAL FINALIST", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S5 MAJOR CONTENDER", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S5 MAJOR FINALIST", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S5 WORLDS CONTENDER", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S5 WORLD CHAMPION", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},

  // SEASON 6
  {"title": "RCCS S6 CONTENDER", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S6 ELITE", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S6 REGIONAL CONTENDER", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S6 REGIONAL FINALIST", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S6 MAJOR CONTENDER", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S6 MAJOR FINALIST", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S6 WORLDS CONTENDER", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S6 WORLD CHAMPION", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},

  // SEASON 7
  {"title": "RCCS S7 CONTENDER", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S7 ELITE", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S7 REGIONAL CONTENDER", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S7 REGIONAL FINALIST", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S7 MAJOR CONTENDER", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S7 MAJOR CHAMPION", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S7 MAJOR FINALIST", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S7 WORLDS CONTENDER", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S7 WORLD CHAMPION", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  
  // SEASON 8
  {"title": "RCCS S8 CONTENDER", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S8 ELITE", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S8 REGIONAL CONTENDER", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S8 REGIONAL FINALIST", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S8 MAJOR CONTENDER", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S8 MAJOR CHAMPION", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S8 MAJOR FINALIST", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S8 WORLDS CONTENDER", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S8 WORLD CHAMPION", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
    
  // SEASON 9 - ULTIMATE
  {"title": "RCCS S9 CHALLENGER", "color": "#4da1f6", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S9 CONTENDER", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S9 ELITE", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S9 REGIONAL CONTENDER", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S9 REGIONAL FINALIST", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S9 MAJOR CONTENDER", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S9 CHARLOTTE MAJOR CONTENDER", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S9 MAJOR CHAMPION", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S9 CHARLOTTE MAJOR CHAMPION", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S9 MAJOR FINALIST", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S9 WORLDS CONTENDER", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S9 WORLD CHAMPION", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S9 MVP", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
    
     // SEASON X - ULTIMATE
  {"title": "RCCS S10 CHALLENGER", "color": "#4da1f6", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S10 CONTENDER", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S10 ELITE", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S10 REGIONAL CONTENDER", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S10 REGIONAL FINALIST", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S10 MAJOR CONTENDER", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S10 ORLANDO MAJOR CONTENDER", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S10 MAJOR CHAMPION", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S10 ORLANDO MAJOR CHAMPION", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S10 MAJOR FINALIST", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S10 WORLDS CONTENDER", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S10 WORLD CHAMPION", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},
  {"title": "RCCS S10 MVP", "color": "aqua", "glow": true, "minMMR": null, "wlUsers": [""]},

    // CRL S1
    
  {
      title: "CRL S1 CONTENDER",
      color: "gold",
      glow: true,
      minMMR: null,
      wlUsers: [""],
    },
    {
      title: "CRL S1 FINALIST",
      color: "gold",
      glow: true,
      minMMR: null,
      wlUsers: [""],
    },
    {
      title: "CRL S1 CHAMPION",
      color: "gold",
      glow: true,
      minMMR: null,
      wlUsers: [""],
    },
    {
      title: "SALT MINE 1 CONTENDER",
      color: "gold",
      glow: true,
      minMMR: null,
      wlUsers: [""],
    },
    {
      title: "SALT MINE 1 MAIN EVENT QUALIFIER",
      color: "gold",
      glow: true,
      minMMR: null,
      wlUsers: [""],
    },
    {
      title: "SALT MINE 1 RUNNER-UP",
      color: "gold",
      glow: true,
      minMMR: null,
      wlUsers: [""],
    },
    {
      title: "SALT MINE 1 CHAMPION",
      color: "gold",
      glow: true,
      minMMR: null,
      wlUsers: [""],
    },
    {
      title: "SALT MINE 2 CONTENDER",
      color: "gold",
      glow: true,
      minMMR: null,
      wlUsers: [""],
    },
    {
      title: "SALT MINE 2 MAIN EVENT QUALIFIER",
      color: "gold",
      glow: true,
      minMMR: null,
      wlUsers: [""],
    },
    {
      title: "SALT MINE 2 RUNNER-UP",
      color: "gold",
      glow: true,
      minMMR: null,
      wlUsers: [""],
    },
    {
      title: "SALT MINE 2 CHAMPION",
      color: "gold",
      glow: true,
      minMMR: null,
      wlUsers: [""],
    },
    {
      title: "SALT MINE 3 CONTENDER",
      color: "gold",
      glow: true,
      minMMR: null,
      wlUsers: [""],
    },
    {
      title: "SALT MINE 3 MAIN EVENT QUALIFIER",
      color: "gold",
      glow: true,
      minMMR: null,
      wlUsers: [""],
    },
    {
      title: "SALT MINE 3 RUNNER-UP",
      color: "gold",
      glow: true,
      minMMR: null,
      wlUsers: [""],
    },
    {
      title: "SALT MINE 3 CHAMPION",
      color: "gold",
      glow: true,
      minMMR: null,
      wlUsers: [""],
    },
    
    {
      title: "2-TIME SALT MINE CHAMPION",
      color: "gold",
      glow: true,
      minMMR: null,
      wlUsers: [""],
    },
  ];

  // Player Data
  let player = {
    username: localStorage.getItem("username") || "Default Username",
    titles: JSON.parse(localStorage.getItem("titles")) || ["OG"],
    banner:
      "https://cdn.glitch.global/72db049d-1808-409d-b500-2fd22c653576/2024_11_20_0il_Kleki.png?v=1733234742213",
    mmr: parseInt(localStorage.getItem("mmr")) || 1000,
    wins: parseInt(localStorage.getItem("wins")) || 0,
    losses: parseInt(localStorage.getItem("losses")) || 0,
    clicks: 0,
    cps: 0,
    equippedTitle: localStorage.getItem("equippedTitle") || "OG",
    notifiedTitles: JSON.parse(localStorage.getItem("notifiedTitles")) || [], // To track notifications
  };

  const aiNames = [
    // Lower rank names
    "L",
    "kupid",
    "l0st",
    "jayleng",
    "weweewew",
    "RisingPhoinex87",
    "dr.1",
    "prot",
    "hunt",
    "kif",
    "?",
    "[MOD] rivverott",
    "1x Dark",
    "Moxxy!",
    "ä",
    "شغثغخ",
    "dark!",
  ];
const clickerLegendAIs = [
 { name: "yumi", title: "RCCS S9 CHARLOTTE MAJOR CONTENDER", mmr: 2166 },
{ name: "drali", title: "S2 CLICKER LEGEND", mmr: 1879 },
{ name: "wez", title: "RCCS S2 WORLD CHAMPION", mmr: 2233 },
{ name: "brickbybrick", title: "RCCS S5 WORLD CHAMPION", mmr: 1973 },
{ name: "Rw9", title: "SALT MINE 1 CHAMPION", mmr: 2338 },
{ name: "dark", title: "S12 GRAND CHAMPION", mmr: 1961 },
{ name: "mawykzy!", title: "S1 TOP CHAMPION", mmr: 2194 },
{ name: "Speed", title: "SALT MINE 3 MAIN EVENT QUALIFIER", mmr: 2167 },
{ name: ".", title: "SALT MINE 1 CONTENDER", mmr: 2218 },
{ name: "koto", title: "RCCS S5 WORLD CHAMPION", mmr: 2310 },
{ name: "dani", title: "RCCS S7 ELITE", mmr: 2139 },
{ name: "Qwert (OG)", title: "S1 GRAND CHAMPION", mmr: 2129 },
{ name: "dr.k", title: "S15 CLICKER LEGEND TOURNAMENT WINNER", mmr: 1865 },
{ name: "Void", title: "RCCS REGIONAL ELITE", mmr: 2178 },
{ name: "moon.", title: "RCCS S8 WORLDS CONTENDER", mmr: 1931 },
{ name: "Lru", title: "RCCS S9 WORLD CHAMPION", mmr: 1891 },
{ name: "Kha0s", title: "RCCS S9 CHARLOTTE MAJOR CONTENDER", mmr: 1989 },
{ name: "rising.", title: "PRE-SEASON GRAND CHAMPION", mmr: 1948 },
{ name: "?", title: "RCCS ELITE", mmr: 2182 },
{ name: "dynamo", title: "S1 CLICKER LEGEND", mmr: 2123 },
{ name: "f", title: "RCCS S9 CHARLOTTE MAJOR CONTENDER", mmr: 2257 },
{ name: "Hawk!", title: "RCCS S1 WORLD CHAMPION", mmr: 2309 },
{ name: "newpo", title: "2-TIME WORLD CHAMPION", mmr: 2248 },
{ name: "zen", title: "RCCS MAJOR CHAMPION", mmr: 2289 },
{ name: "v", title: "RCCS S6 WORLD CHAMPION", mmr: 2140 },
{ name: "a7md", title: "X3 S15 CLICKER LEGEND TOURNAMENT WINNER", mmr: 1992 },
{ name: "sieko", title: "S14 GRAND CHAMPION", mmr: 2111 },
{ name: "Mino", title: "S11 GRAND CHAMPION", mmr: 1908 },
{ name: "dyinq", title: "S13 GRAND CHAMPION", mmr: 1913 },
{ name: "toxin", title: "RCCS S4 MAJOR CONTENDER", mmr: 1981 },
{ name: "Bez", title: "S2 GRAND CHAMPION", mmr: 2156 },
{ name: "velocity", title: "S12 CLICKER LEGEND", mmr: 1899 },
{ name: "Chronic", title: "S1 GRAND CHAMPION", mmr: 1873 },
{ name: "Flinch", title: "S3 GRAND CHAMPION", mmr: 2305 },
{ name: "vatsi", title: "SALT MINE 3 RUNNER-UP", mmr: 2154 },
{ name: "Xyzle", title: "RCCS S8 WORLD CHAMPION", mmr: 2139 },
{ name: "ca$h", title: "RCCS S8 WORLD CHAMPION", mmr: 2139 },
{ name: "Darkmode", title: "RCCS S9 CHARLOTTE MAJOR CHAMPION", mmr: 2264 },
{ name: "nu3.", title: "S8 CLICKER LEGEND", mmr: 1879 },
{ name: "LetsG0Brand0n", title: "RCCS S7 WORLDS CONTENDER", mmr: 1983 },
{ name: "VAWQK.", title: "S15 GRAND CHAMPION TOURNAMENT WINNER", mmr: 1911 },
{ name: "helu30", title: "RCCS S4 MAJOR CHAMPION", mmr: 1998 },
{ name: "wizz", title: "S5 GRAND CHAMPION", mmr: 2101 },
{ name: "Sczribbles.", title: "RCCS S6 MAJOR CONTENDER", mmr: 1940 },
{ name: "7up", title: "SALT MINE 1 CONTENDER", mmr: 1954 },
{ name: "unkown", title: "RCCS S8 WORLDS CONTENDER", mmr: 2062 },
{ name: "t0es", title: "RCCS S5 REGIONAL CHAMPION", mmr: 1865 },
{ name: "Jynx.", title: "SALT MINE 2 RUNNER-UP", mmr: 1962 },
{ name: "Zapz", title: "RCCS S4 CONTENDER", mmr: 1920 },
{ name: "Aur0", title: "S9 CLICKER LEGEND", mmr: 1984 },
{ name: "Knight", title: "RCCS S6 MAJOR CHAMPION", mmr: 2133 },
{ name: "Cliqz", title: "SALT MINE 2 MAIN EVENT QUALIFIER", mmr: 2054 },
{ name: "Pyro.", title: "RCCS MAJOR CHAMPION", mmr: 2085 },
{ name: "dash!", title: "S6 GRAND CHAMPION", mmr: 2047 },
{ name: "ven", title: "S7 GRAND CHAMPION", mmr: 2079 },
{ name: "flow.", title: "RCCS S5 REGIONAL CONTENDER", mmr: 2002 },
{ name: "zenith", title: "RCCS S4 WORLDS CONTENDER", mmr: 1969 },
{ name: "volty", title: "SALT MINE 2 CONTENDER", mmr: 1930 },
{ name: "Aqua!", title: "S5 GRAND CHAMPION", mmr: 2056 },
{ name: "Styx", title: "S6 CLICKER LEGEND", mmr: 1895 },
{ name: "cheeseboi", title: "S9 CLICKER LEGEND", mmr: 1883 },
{ name: "Heat.", title: "RCCS S4 REGIONAL CHAMPION", mmr: 1960 },
{ name: "Slyde", title: "S7 CLICKER LEGEND", mmr: 2000 },
{ name: "fl1p", title: "RCCS S5 CONTENDER", mmr: 1920 },
{ name: "Otto", title: "S6 CLICKER LEGEND", mmr: 1964 },
{ name: "jetz", title: "S8 GRAND CHAMPION", mmr: 1954 },
{ name: "Crisp", title: "RCCS S7 MAJOR CHAMPION", mmr: 2001 },
{ name: "snailracer", title: "S4 GRAND CHAMPION", mmr: 2019 },
{ name: "Flickz", title: "RCCS S6 MAJOR CONTENDER", mmr: 2031 },
{ name: "tempo", title: "S5 CLICKER LEGEND", mmr: 1902 },
{ name: "Blaze.", title: "RCCS S5 REGIONAL CHAMPION", mmr: 1965 },
{ name: "skyfall", title: "SALT MINE 3 CHAMPION", mmr: 2040 },
{ name: "steam", title: "S10 CLICKER LEGEND", mmr: 1902 },
  { name: "storm", title: "SALT MINE 3 QUALIFIER", mmr: 2028 },
{ name: "rek:3", title: "S5 GRAND CHAMPION", mmr: 1956 },
{ name: "vyna1", title: "S10 GRAND CHAMPION", mmr: 1914 },
{ name: "deltairlines", title: "RCCS S7 CONTENDER", mmr: 1987 },
{ name: "ph", title: "S3 CLICKER LEGEND", mmr: 1872 },
{ name: "trace", title: "S9 GRAND CHAMPION", mmr: 1935 },
{ name: "avidic", title: "S2 CLICKER LEGEND", mmr: 1921 },
{ name: "tekk!", title: "S6 GRAND CHAMPION", mmr: 1943 },
{ name: "fluwo", title: "SALT MINE 2 CONTENDER", mmr: 2012 },
{ name: "climp?", title: "S13 CLICKER LEGEND", mmr: 1893 },
{ name: "zark", title: "RCCS S8 CHALLENGER", mmr: 1908 },
{ name: "diza", title: "RCCS S9 WORLDS CONTENDER", mmr: 1946 },
{ name: "O", title: "S12 GRAND CHAMPION", mmr: 1951 },
{ name: "Snooze", title: "S9 CLICKER LEGEND", mmr: 1879 },
{ name: "gode", title: "RCCS S4 MAJOR CONTENDER", mmr: 1994 },
{ name: "cola", title: "S8 GRAND CHAMPION", mmr: 1940 },
{ name: "hush(!)", title: "S4 GRAND CHAMPION", mmr: 1917 },
{ name: "sh4oud", title: "SALT MINE 1 CHAMPION", mmr: 2042 },
{ name: "vvv", title: "S11 CLICKER LEGEND", mmr: 1884 },
{ name: "critt", title: "S6 CLICKER LEGEND", mmr: 1930 },
{ name: "darkandlost2009", title: "RCCS S7 MAJOR CONTENDER", mmr: 1989 },
{ name: "pulse jubbo", title: "S10 GRAND CHAMPION", mmr: 1948 },
{ name: "pl havicic", title: "RCCS S6 REGIONAL CHAMPION", mmr: 2006 },
{ name: "ryft.", title: "S12 CLICKER LEGEND", mmr: 1895 },
{ name: "Lyric", title: "RCCS S5 CONTENDER", mmr: 1913 },
{ name: "dryft.", title: "S7 GRAND CHAMPION", mmr: 1959 },
{ name: "horiz", title: "RCCS S9 REGIONAL CHAMPION", mmr: 1975 },
{ name: "zeno", title: "S14 GRAND CHAMPION", mmr: 1927 },
{ name: "octane", title: "S5 CLICKER LEGEND", mmr: 1901 },
{ name: "wavetidess", title: "SALT MINE 2 QUALIFIER", mmr: 2020 },
{ name: "loster", title: "RCCS S7 WORLD CHAMPION", mmr: 2125 },
{ name: "mamba", title: "S8 GRAND CHAMPION", mmr: 1942 },
{ name: "Jack", title: "S1 GRAND CHAMPION", mmr: 1938 },
{ name: "innadeze", title: "RCCS S6 MAJOR CONTENDER", mmr: 1982 },
{ name: "s", title: "S3 GRAND CHAMPION", mmr: 1964 },
{ name: "offtenlost", title: "S5 GRAND CHAMPION", mmr: 1929 },
{ name: "bivo", title: "RCCS S8 REGIONAL CHAMPION", mmr: 1986 },
{ name: "Trace", title: "SALT MINE 3 MAIN EVENT QUALIFIER", mmr: 2017 },
{ name: "Talon", title: "S13 GRAND CHAMPION", mmr: 1918 },
  { name: "storm", title: "SALT MINE 3 QUALIFIER", mmr: 2028 },
{ name: "rek:3", title: "S5 GRAND CHAMPION", mmr: 1956 },
{ name: "vyna1", title: "S10 GRAND CHAMPION", mmr: 1914 },
{ name: "deltairlines", title: "RCCS S7 CONTENDER", mmr: 1987 },
{ name: "ph", title: "S3 CLICKER LEGEND", mmr: 1872 },
{ name: "trace", title: "S9 GRAND CHAMPION", mmr: 1935 },
{ name: "avidic", title: "S2 CLICKER LEGEND", mmr: 1921 },
{ name: "tekk!", title: "S6 GRAND CHAMPION", mmr: 1943 },
{ name: "fluwo", title: "SALT MINE 2 CONTENDER", mmr: 2012 },
{ name: "climp?", title: "S13 CLICKER LEGEND", mmr: 1893 },
{ name: "zark", title: "RCCS S8 CHALLENGER", mmr: 1908 },
{ name: "diza", title: "RCCS S9 WORLDS CONTENDER", mmr: 1946 },
{ name: "O", title: "S12 GRAND CHAMPION", mmr: 1951 },
{ name: "Snooze", title: "S9 CLICKER LEGEND", mmr: 1879 },
{ name: "gode", title: "RCCS S4 MAJOR CONTENDER", mmr: 1994 },
{ name: "cola", title: "S8 GRAND CHAMPION", mmr: 1940 },
{ name: "hush(!)", title: "S4 GRAND CHAMPION", mmr: 1917 },
{ name: "sh4oud", title: "SALT MINE 1 CHAMPION", mmr: 2042 },
{ name: "vvv", title: "S11 CLICKER LEGEND", mmr: 1884 },
{ name: "critt", title: "S6 CLICKER LEGEND", mmr: 1930 },
{ name: "darkandlost2009", title: "RCCS S7 MAJOR CONTENDER", mmr: 1989 },
{ name: "pulse jubbo", title: "S10 GRAND CHAMPION", mmr: 1948 },
{ name: "pl havicic", title: "RCCS S6 REGIONAL CHAMPION", mmr: 2006 },
{ name: "ryft.", title: "S12 CLICKER LEGEND", mmr: 1895 },
{ name: "Lyric", title: "RCCS S5 CONTENDER", mmr: 1913 },
{ name: "dryft.", title: "S7 GRAND CHAMPION", mmr: 1959 },
{ name: "horiz", title: "RCCS S9 REGIONAL CHAMPION", mmr: 1975 },
{ name: "zeno", title: "S14 GRAND CHAMPION", mmr: 1927 },
{ name: "octane", title: "S5 CLICKER LEGEND", mmr: 1901 },
{ name: "wavetidess", title: "SALT MINE 2 QUALIFIER", mmr: 2020 },
{ name: "loster", title: "RCCS S7 WORLD CHAMPION", mmr: 2125 },
{ name: "mamba", title: "S8 GRAND CHAMPION", mmr: 1942 },
{ name: "Jack", title: "S1 GRAND CHAMPION", mmr: 1938 },
{ name: "innadeze", title: "RCCS S6 MAJOR CONTENDER", mmr: 1982 },
{ name: "s", title: "S3 GRAND CHAMPION", mmr: 1964 },
{ name: "offtenlost", title: "S5 GRAND CHAMPION", mmr: 1929 },
{ name: "bivo", title: "RCCS S8 REGIONAL CHAMPION", mmr: 1986 },
{ name: "Trace", title: "SALT MINE 3 MAIN EVENT QUALIFIER", mmr: 2017 },
{ name: "Talon", title: "S13 GRAND CHAMPION", mmr: 1918 },
  { name: ".", title: "RCCS S9 CHALLENGER", mmr: 1882 },
  { name: "{?}", title: "S3 GRAND CHAMPION", mmr: 1911 },
  { name: "rraze", title: "RCCS S9 CONTENDER", mmr: 1905 },
  { name: "Dark{?}", title: ".", mmr: 1872 },
  { name: "zenhj", title: "S9 GRAND CHAMPION", mmr: 1928 },
  { name: "rinshoros bf", title: "RCCS S9 CHALLENGER", mmr: 1933 },
  { name: "Cipher", title: "S4 CLICKER LEGEND", mmr: 1897 },
  { name: "nova", title: "RCCS S9 CHALLENGER", mmr: 1919 },
  { name: "juzz", title: "S12 GRAND CHAMPION", mmr: 1886 },
  { name: "vortexx", title: "S2 GRAND CHAMPION", mmr: 1903 },
  { name: "officer", title: ".", mmr: 1869 },
  { name: "strike", title: "S8 CLICKER LEGEND", mmr: 1878 },
  { name: "Titan", title: "S11 GRAND CHAMPION", mmr: 1925 },
  { name: "comp", title: "RCCS S10 CHALLENGER", mmr: 1941 },
  { name: "pahnton", title: "S3 CLICKER LEGEND", mmr: 1891 },
  { name: "Mirage", title: "S7 GRAND CHAMPION", mmr: 1930 },
  { name: "space", title: "S13 CLICKER LEGEND", mmr: 1866 },
  { name: "boltt", title: "RCCS S10 CHALLENGER", mmr: 1910 },
  { name: "reeper", title: "RCCS S10 CHALLENGER", mmr: 1952 },
  { name: "piza", title: "S15 CLICKER LEGEND", mmr: 1881 },
  { name: "cheese.", title: "RCCS S9 CONTENDER", mmr: 1894 },
  { name: "frostbite", title: "S6 GRAND CHAMPION", mmr: 1907 },
  { name: "warthunderisbest", title: "S14 CLICKER LEGEND", mmr: 1875 },
  { name: "eecipe", title: "RCCS S10 CHALLENGER", mmr: 1888 }
// GRAND CS

  ];
  const grandChampionsAIs = [
    { "name": "Echo", "title": "S14 GRAND CHAMPION", "mmr": 1892 },
{ "name": "wisp", "title": "S9 GRAND CHAMPION", "mmr": 1875 },
{ "name": "Raptor", "title": "S5 CLICKER LEGEND", "mmr": 1859 },
{ "name": "Phantom", "title": "RCCS S7 REGIONAL CONTENDER", "mmr": 1831 },
{ "name": "nox", "title": "S3 GRAND CHAMPION", "mmr": 1798 },
{ "name": "Spookz", "title": "S11 CLICKER LEGEND", "mmr": 1817 },
{ "name": "frost.", "title": "S6 GRAND CHAMPION", "mmr": 1862 },
{ "name": "Rogue", "title": "RCCS S8 CONTENDER", "mmr": 1803 },
{ "name": "horizon", "title": "S10 GRAND CHAMPION", "mmr": 1852 },
{ "name": "Orbit", "title": "S13 CLICKER LEGEND", "mmr": 1794 },
{ "name": "vega", "title": "S2 GRAND CHAMPION", "mmr": 1827 },
{ "name": "shade", "title": "S4 CLICKER LEGEND", "mmr": 1843 },
{ "name": "drift", "title": "RCCS S5 REGIONAL CONTENDER", "mmr": 1769 },
{ "name": "ember", "title": "SALT MINE 2 CONTENDER", "mmr": 1815 },
{ "name": "zenith", "title": "S7 GRAND CHAMPION", "mmr": 1851 },
{ "name": "static", "title": "RCCS S6 CONTENDER", "mmr": 1776 },
{ "name": "Flare", "title": "S12 GRAND CHAMPION", "mmr": 1893 },
{ "name": "storm.", "title": "RCCS S9 CHALLENGER", "mmr": 1868 },
{ "name": "Lunar", "title": "RCCS S7 REGIONAL CONTENDER", "mmr": 1784 },
{ "name": "ignite", "title": "SALT MINE 1 CONTENDER", "mmr": 1799 },
{ "name": "terra", "title": "S10 CLICKER LEGEND", "mmr": 1820 },
{ "name": "Zypher", "title": "S8 GRAND CHAMPION", "mmr": 1881 },
{ "name": "Oblivion", "title": "SALT MINE 2 CONTENDER", "mmr": 1805 },
{ "name": "Nebula", "title": "S7 CLICKER LEGEND", "mmr": 1849 },
{ "name": "chrono", "title": "RCCS S9 CHALLENGER", "mmr": 1763 }
  ]



  let opponent = { name: "", mmr: 0, title: "" };

  // Utility Functions

  // Determine the player's current rank based on MMR
  function getRank(mmr) {
    let currentRank = rankData[0];
    for (let rank of rankData) {
      if (mmr >= rank.minMMR) {
        currentRank = rank;
      } else {
        break;
      }
    }
    return currentRank;
  }

function sortTitles(titles) {
  return titles.sort((a, b) => {
    const rarityOrder = (title) => {
      if (title.title === ".") return -1; // Title "." comes above all
      if (title.title === "DEVELOPER") return 0;
      if (title.title === "ADMIN") return 1;
      if (title.title.includes("GOONER")) return 2; // Titles with "Gooner" come below Admin
      if (title.title.includes("TIME WORLD")) return 3; // "TIME WORLD" comes below "GOONER"
      if (title.title.includes("RCCS") && title.color === "aqua" && title.glow) return 4;
      if (title.title.includes("RCCS") && title.glow) return 5;
      if (title.title.includes("CRL")) return 6; // Titles with "CRL" come below RCCS
      if (title.title.includes("SALT MINE")) return 7; // Titles with "SALT MINE" come below CRL
      if (title.title.includes("ALPHA TESTER") && title.color === "gold" && title.glow) return 8;
      if (
        ["ELITE", "TOP 10", "TOP 3", "TOP CHAMPION"].some((keyword) =>
          title.title.includes(keyword)
        ) &&
        title.color === "gold" &&
        title.glow
      )
        return 9;
      if (
        ["CLICKER LEGEND", "GRAND CHAMPION", "CHAMPION", "DIAMOND"].some((keyword) =>
          title.title.includes(keyword)
        )
      ) {
        // Prioritize "CLICKER LEGEND" above others in this group
        if (title.title.includes("CLICKER LEGEND")) return 10;
        if (title.title.includes("GRAND CHAMPION")) return 11;
        if (title.title.includes("CHAMPION")) return 12;
        if (title.title.includes("DIAMOND")) return 13;
      }
      if (title.title.includes("PRE-SEASON")) return 14;
      if (title.color === "grey" || !title.glow) return 15;
      return 16; // Default for anything else
    };

    return rarityOrder(a) - rarityOrder(b);
  });
}





  // Check and award titles based on rank and whitelist
  function checkAndAwardTitles() {
    titles.forEach((title) => {
      // Check if title is already earned
      if (!player.titles.includes(title.title)) {
        // Check whitelist
        if (
          title.wlUsers &&
          title.wlUsers.includes(player.username.toLowerCase())
        ) {
          player.titles.push(title.title);
          showNewTitleNotification(title.title);
        }
        // Check minMMR
        else if (title.minMMR && player.mmr >= title.minMMR) {
          player.titles.push(title.title);
          showNewTitleNotification(title.title);
        }
      }
    });
    savePlayerData();
  }

  // Save Player Data
  function savePlayerData() {
    localStorage.setItem("username", player.username);
    localStorage.setItem("mmr", player.mmr);
    localStorage.setItem("wins", player.wins);
    localStorage.setItem("losses", player.losses);
    localStorage.setItem("titles", JSON.stringify(player.titles));
    localStorage.setItem("equippedTitle", player.equippedTitle);
    localStorage.setItem("lastOpponent", JSON.stringify(player.lastOpponent || null)); // Save last opponent
  localStorage.setItem("lastMatchTime", player.lastMatchTime || ""); // Save last match time
    localStorage.setItem(
      "notifiedTitles",
      JSON.stringify(player.notifiedTitles)
    );
  }

  // Update the Menu Screen with current player data
  function updateMenu() {
    const rank = getRank(player.mmr);
    document.getElementById("username-display").textContent = player.username;
    document.getElementById("rank-image").src = rank.image;
    document.getElementById("rank-title").textContent = rank.title;
    document.getElementById("mmr-display").textContent = `MMR: ${player.mmr}`;
    document.getElementById(
      "stats-wl"
    ).textContent = `W ${player.wins} -  L ${player.losses}`;

    const winPercentage =
      player.wins + player.losses > 0
        ? ((player.wins / (player.wins + player.losses)) * 100).toFixed(2)
        : "0.00";
    document.getElementById("win-percentage").textContent = `${winPercentage}%`;

    const averageCPS =
      player.wins + player.losses > 0
        ? (player.cps / (player.wins + player.losses)).toFixed(2)
        : "0.00";
    document.getElementById("average-cps").textContent = averageCPS;

    // Set the username
    const usernameDisplay = document.getElementById("username-display");
    usernameDisplay.textContent = player.username;

    // Get the equipped title
    const equippedTitle = player.equippedTitle;
    const titleData = titles.find((title) => title.title === equippedTitle);

    const titleDisplay = document.getElementById("title-display");
    titleDisplay.textContent = equippedTitle;

    // Check if the title has a glow property and apply the glow
    if (titleData && titleData.glow) {
      titleDisplay.style.textShadow = `0 0 10px ${titleData.color}, 0 0 20px ${titleData.color}, 0 0 30px ${titleData.color}, 0 0 40px ${titleData.color}`;
    } else {
      titleDisplay.style.textShadow = "none"; // No glow if the title doesn't have it
    }

    // Apply the title color
    titleDisplay.style.color = titleData ? titleData.color : "#ddd";

    // Save data locally
    savePlayerData();
  }

  // Initial Menu Update
  updateMenu();

  // Check and award titles on load
  checkAndAwardTitles();

  // Allow Username Change
  document.getElementById("username-display").addEventListener("click", () => {
    const newUsername = prompt(
      "Enter your new username (1-20 characters):",
      player.username
    );
    if (newUsername && newUsername.length <= 20) {
      player.username = newUsername;
      checkAndAwardTitles(); // Re-check titles in case username affects whitelist
      updateMenu();
    }
  });

  // Screen Management
  function showScreen(name) {
    for (const key in screens) {
      screens[key].classList.toggle("hidden", key !== name);
    }
  }

  document.getElementById("queue-button").addEventListener("click", () => {
    showScreen("queue");
    startQueue();
  });

  // Variable to store the interval ID
  let queueInterval = null;

  // Request notification permission
  if (Notification.permission !== "granted") {
    Notification.requestPermission();
  }

function startQueue() {
  document.title = "[RC] - Searching"; // Update title
  let timer = 0;
  let minTime, maxTime;

  const currentHour = new Date().getHours();
  const isPeakTime = currentHour >= 12 && currentHour <= 20; // Define peak time (12 PM - 8 PM)
  const timeMultiplier = isPeakTime ? 1 : 1.1; // Off-peak hours take 1.5x longer

  // Active player scaling factor
  const playerScalingFactor = Math.max(0.1, Math.min(1.1, 2000 / totalPlayers));

  // More players = lower times, fewer players = higher times

  // Define base queue times based on rank
  if (player.mmr >= 1864) {
    // Clicker Legend or higher
    minTime = 12 * timeMultiplier * playerScalingFactor; // Minimum 30s scaled
    maxTime = (isPeakTime ? 99 : 100) * playerScalingFactor; // Scaled maximum time
  } else if (player.mmr >= 1434) {
    // Grand Champion I or higher
    minTime = 16 * timeMultiplier * playerScalingFactor; // Minimum 15s scaled
    maxTime = (isPeakTime ? 50 : 87) * playerScalingFactor; // Scaled maximum time
  } else {
    // Default queue times for lower ranks
    minTime = 5 * timeMultiplier * playerScalingFactor;
    maxTime = 23 * timeMultiplier * playerScalingFactor;
  }

  // Adjust overlap for Clicker Legend and GC3
  if (player.mmr >= 1864 && player.mmr < 9930) {
    maxTime += 56 * playerScalingFactor; // Add scaled buffer time for top ranks
  }

  // Introduce a random offset to minTime and maxTime for variability
  const randomOffset = Math.random() * 10 - 5; // Random value between -5 and +5 seconds
  minTime = Math.max(0, minTime + randomOffset); // Ensure minTime doesn't go below 0
  maxTime = Math.max(minTime + 1, maxTime + randomOffset); // Ensure maxTime > minTime

  // Display the maximum estimated time only
  document.getElementById("estimated-time").textContent = formatTime(Math.ceil(maxTime));

  // Get random match time between minTime and maxTime
  const matchTime = getRandomInt(minTime, maxTime);

  queueInterval = setInterval(() => {
    timer++;
    document.getElementById("queue-timer").textContent = formatTime(timer);

    // If timer exceeds maximum allowed time, widen the search range
    if (timer >= maxTime) {
      // Allow broader matchmaking range for high ranks
      if (player.mmr >= 1864) {
        maxTime += 100 * playerScalingFactor; // Extend by another scaled minute for top ranks
      } else {
        clearInterval(queueInterval);
        startMatch(); // Start the match immediately
      }
    }

    if (timer >= matchTime) {
      clearInterval(queueInterval);
      startMatch();
    }
  }, 1000);
}





  // Helper function to format time as "1m 30s" or "23s"
  function formatTime(seconds) {
    if (seconds < 60) {
      return `${seconds}s`;
    }
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}`;
  }

  // Helper function to get random integer between min and max (inclusive)
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Add event listener to the Cancel button
  document
    .getElementById("cancel-queue-button")
    .addEventListener("click", () => {
      clearInterval(queueInterval); // Stop the queue timer
      showScreen("menu"); // Optionally, go back to the menu screen
      location.reload(); // Refresh the page
    });

  // Notify user and update the title when a match is found
  function notifyMatchFound() {
    if (Notification.permission === "granted") {
      new Notification("Ranked Clicker - Match Found", {
        body: "Your match starts in 3 seconds.",
        icon: "https://cdn.glitch.global/fdcc09f0-fa4c-4a8a-a33d-afc5e3dcba21/2024_09_04_0d8_Kleki.png?v=1725451034549", // Replace with your icon's path
      });
    }
    document.title = `[RC] - Match Found | [${player.rank}]`;
  }
  function assignOpponent() {
  let selectedPool;

  if (player.mmr >= 1864) {
    // Players with 1864+ MMR get an opponent from the Clicker Legend AI pool
    selectedPool = clickerLegendAIs;
  } else if (player.mmr >= 1430) {
    // Players with 1430-1863 MMR get an opponent from the high MMR AI pool
    selectedPool = grandChampionsAIs;
  } else {
    // Players below 1430 get a general AI
    selectedPool = aiNames;
  }

  if (selectedPool.length > 0) {
    const ai = selectedPool[Math.floor(Math.random() * selectedPool.length)];
    opponent.name = ai.name;
    opponent.mmr = ai.mmr;
    opponent.title = ai.title;
  } else {
    // Fallback: Assign a random AI with a slight MMR adjustment
    const randomAI = generalAIs[Math.floor(Math.random() * generalAIs.length)];
    opponent.name = randomAI.name;
    opponent.mmr = player.mmr - 50 + Math.floor(Math.random() * 100);
    opponent.title = randomAI.title || "";
  }
}






  function startMatch() {
  notifyMatchFound(); // Notify the user
  setTimeout(() => {
    showScreen("match");

    // Assign Opponent Data based on MMR
if (player.mmr >= 1864) {
  // Assign only from Clicker Legend pool
  const ai = clickerLegendAIs[Math.floor(Math.random() * clickerLegendAIs.length)];
  opponent.name = ai.name;
  opponent.mmr = ai.mmr;
  opponent.title = ai.title;
} else if (player.mmr >= 1430) {
  // Assign from Grand Champions AI pool
  const ai = grandChampionsAIs[Math.floor(Math.random() * grandChampionsAIs.length)];
  opponent.name = ai.name;
  opponent.mmr = ai.mmr;
  opponent.title = ai.title;
} else {
  // Assign from General AI pool
  const randomAI = aiNames[Math.floor(Math.random() * aiNames.length)];
  opponent.name = typeof randomAI === "string" ? randomAI : randomAI.name;
  opponent.mmr = getRandomInt(player.mmr - 50, player.mmr + 50);
  opponent.title = typeof randomAI === "string" ? "" : randomAI.title;
}


    document.getElementById("opponent-name").textContent = opponent.name;
    document.getElementById("opponent-mmr").textContent = opponent.mmr;

    // Handle opponent title displa
    const opponentTitleDisplay = document.getElementById("opponent-title");
    if (opponent.title) {
      opponentTitleDisplay.textContent = opponent.title;
      const opponentTitleData = titles.find(
        (title) => title.title === opponent.title
      );
      if (opponentTitleData && opponentTitleData.glow) {
        opponentTitleDisplay.style.textShadow = `0 0 10px ${opponentTitleData.color}, 0 0 20px ${opponentTitleData.color}, 0 0 30px ${opponentTitleData.color}, 0 0 40px ${opponentTitleData.color}`;
      } else {
        opponentTitleDisplay.style.textShadow = "none";
      }
      opponentTitleDisplay.style.color = opponentTitleData
        ? opponentTitleData.color
        : "#ddd";
    } else {
      opponentTitleDisplay.textContent = "";
      opponentTitleDisplay.style.textShadow = "none";
    }

    // Display Player's Title with Glow
    const equippedTitle = player.equippedTitle;
    const titleData = titles.find((title) => title.title === equippedTitle);
    const titleDisplay = document.getElementById("player-title-display");
    titleDisplay.textContent = equippedTitle;

    if (titleData && titleData.glow) {
      titleDisplay.style.textShadow = `0 0 10px ${titleData.color}, 0 0 20px ${titleData.color}, 0 0 30px ${titleData.color}, 0 0 40px ${titleData.color}`;
    } else {
      titleDisplay.style.textShadow = "none";
    }
    titleDisplay.style.color = titleData ? titleData.color : "#ddd";

    // Reset Clicks
    document.getElementById("player-clicks").textContent = "0";
    document.getElementById("opponent-clicks").textContent = "0";

    // Countdown
    gameCountdown();
  }, 3000); // 3-second delay
}

  function getOpponentTitle(mmr) {
    // Simple logic for opponent titles based on MMR
    if (mmr >= 1200) return "S1 CHAMPION";
    if (mmr >= 834) return "S1 DIAMOND";
    if (mmr >= 800) return "ELITE PLAYER";
    if (mmr >= 500) return "TOP GAMER";
    if (mmr >= 300) return "CHALLENGER";
    if (mmr >= 100) return "OG";
    return "OG";
  }

  function gameCountdown() {
  let countdown = 5;
  document.getElementById("countdown-timer").textContent = countdown;
  const interval = setInterval(() => {
    countdown--;
    document.getElementById("countdown-timer").textContent = countdown;
    if (countdown <= 0) {
      clearInterval(interval);
      playGame();
    }
  }, 1000);
}

function playGame() {
  let playerClicks = 0,
    aiClicks = 0;
  const clickMargin = 7; // AI stays within ±7 clicks
  const aiAdjustmentInterval = 200; // Interval for AI to adjust
  let playerClicking = false; // Tracks if the player is actively clicking
  let gameTimer = 60; // Game duration in seconds

  // Show initial timer value
  document.getElementById("game-timer").textContent = `Time Left: ${gameTimer}s`;

  // Handle player clicks
  const playerClickHandler = (e) => {
    if (e.code === "Space") {
      playerClicks++;
      playerClicking = true;
      document.getElementById("player-clicks").textContent = playerClicks;
    }
  };

  document.addEventListener("keydown", playerClickHandler);

  // AI Clicking Logic
  const aiInterval = setInterval(() => {
    const clickDifference = playerClicks - aiClicks;

    let aiIncrement = getRandomInt(3, 4); // Base CPS for AI
    if (clickDifference > clickMargin) {
      aiIncrement += getRandomInt(2, 4);
    } else if (clickDifference < -clickMargin) {
      aiIncrement = Math.max(1, aiIncrement - getRandomInt(1, 2));
    }

    if (!playerClicking) {
      aiClicks += getRandomInt(2, 3);
    }

    aiClicks += aiIncrement;
    document.getElementById("opponent-clicks").textContent = aiClicks;
  }, aiAdjustmentInterval);

  // Game Timer Logic
  const gameTimerInterval = setInterval(() => {
    gameTimer--;
    document.getElementById("game-timer").textContent = `Time Left: ${gameTimer}s`;

    if (gameTimer <= 0) {
      clearInterval(aiInterval);
      clearInterval(gameTimerInterval);
      document.removeEventListener("keydown", playerClickHandler);

      // Determine the winner
      const playerWon = playerClicks > aiClicks;
      endGame(playerWon);
    }
  }, 1000);

  // Utility function for random integers
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}


function endGame(playerWon) {
  const opponentMMR = opponent.mmr;
  const mmrDifference = opponentMMR - player.mmr;

  // Determine MMR gain/loss range
  const maxMMRChange = 9;
  const minMMRChange = 7;

  let mmrChange;

  if (playerWon) {
    mmrChange = Math.max(
      minMMRChange,
      Math.min(maxMMRChange, Math.ceil(15 + mmrDifference / 20))
    );
    player.mmr += mmrChange;
    player.wins += 1;
  } else {
    mmrChange = Math.min(
      -minMMRChange,
      Math.max(-maxMMRChange, Math.floor(-10 + mmrDifference / 20))
    );
    player.mmr += mmrChange;
    player.losses += 1;
  }

  if (player.mmr < 0) player.mmr = 0;

  document.getElementById("mmr-change").textContent = 
    `${mmrChange > 0 ? "+" : ""}${mmrChange}`;
  document.getElementById("new-mmr").textContent = player.mmr;

  const newRank = getRank(player.mmr).title;
  document.getElementById("new-rank").textContent = newRank;

  updateMenu();
  checkAndAwardTitles();
  showScreen("end");
}




  document.getElementById("return-menu").addEventListener("click", () => {
    location.reload(); // Refresh the page
  });

  // Titles Management

  // Show Titles Popup
  document.getElementById("titles-button").addEventListener("click", () => {
    updateTitlesList();
    document.getElementById("title-popup").classList.remove("hidden");
  });

  // Close Titles Popup
  document.getElementById("close-title-popup").addEventListener("click", () => {
    document.getElementById("title-popup").classList.add("hidden");
  });
function renderTitles() {
  const sortedTitles = sortTitles(titles);

  // Assuming you have an element to display the titles
  const titleListElement = document.getElementById("title-list");
  titleListElement.innerHTML = sortedTitles
    .map((title) => `<li>${title.title}</li>`)
    .join("");
}
  // Update Titles List in Popup
function updateTitlesList() {
  const titlesList = document.getElementById("titles-list");
  titlesList.innerHTML = "";

  // Sort the player's unlocked titles based on rarity
  const unlockedTitles = player.titles
    .map((titleName) => titles.find((t) => t.title === titleName))
    .filter((titleObj) => titleObj !== undefined); // Filter out any undefined titles

  const sortedTitles = sortTitles(unlockedTitles); // Sort unlocked titles

  sortedTitles.forEach((titleObj) => {
    const titleDiv = document.createElement("div");
    titleDiv.textContent = titleObj.title;
    titleDiv.style.color = titleObj.color;
    if (titleObj.glow) {
      titleDiv.style.textShadow = `0 0 10px ${titleObj.color}`;
    }
    if (titleObj.title === player.equippedTitle) {
      titleDiv.style.border = `2px solid ${titleObj.color}`;
    }
    titleDiv.onclick = () => {
      player.equippedTitle = titleObj.title;
      updateMenu();
      titlesList
        .querySelectorAll("div")
        .forEach((div) => (div.style.border = "none"));
      titleDiv.style.border = `2px solid ${titleObj.color}`;
      savePlayerData();
    };
    titlesList.appendChild(titleDiv);
  });
}

  document.addEventListener("DOMContentLoaded", () => {
    const newsItems = document.querySelectorAll(".news-item");
    const newsPopup = document.getElementById("news-popup");
    const newsDetails = document.getElementById("news-details");
    const closeNewsPopup = document.getElementById("close-news-popup");
    let currentNewsIndex = 0;

    // Function to rotate news items
    function rotateNews() {
      newsItems[currentNewsIndex].classList.add("hidden");
      currentNewsIndex = (currentNewsIndex + 1) % newsItems.length;
      newsItems[currentNewsIndex].classList.remove("hidden");
    }

    // Start the rotation every 5 seconds
    setInterval(rotateNews, 5000);

    // Show pop-up with news details on click
    newsItems.forEach((item) => {
      item.addEventListener("click", () => {
        const details = item.getAttribute("data-details");
        newsDetails.textContent = details;
        newsPopup.classList.remove("hidden");
      });
    });

    // Close the pop-up
    closeNewsPopup.addEventListener("click", () => {
      newsPopup.classList.add("hidden");
    });
  });

  // Notification System

  function showNewTitleNotification(newTitle) {
    // Avoid multiple notifications for the same title
    if (player.notifiedTitles.includes(newTitle)) return;

    // Update notifiedTitles
    player.notifiedTitles.push(newTitle);
    savePlayerData();

    // Set the new title as equipped by default
    player.equippedTitle = newTitle;
    updateMenu();

    // Show Notification Popup
    document.getElementById("new-title").textContent = newTitle;
    document.getElementById("notification-popup").classList.remove("hidden");
  }
// Utility function to generate a realistic bell curve distribution
  function generateBellCurve(totalPlayers, ranks) {
    const peakIndex = Math.floor(ranks.length / 2);
    const variance = ranks.length / 6; // Determines spread of the curve
    const bellCurve = ranks.map((_, i) => {
      const exponent = -Math.pow(i - peakIndex, 2) / (2 * variance);
      return Math.exp(exponent);
    });
    const sum = bellCurve.reduce((a, b) => a + b, 0);
    return bellCurve.map(value => Math.round((value / sum) * totalPlayers));
  }

  // Define ranks
  const ranks = [
    "Bronze I", "Bronze II", "Bronze III",
    "Silver I", "Silver II", "Silver III",
    "Gold I", "Gold II", "Gold III",
    "Platinum I", "Platinum II", "Platinum III",
    "Diamond I", "Diamond II", "Diamond III",
    "Champion I", "Champion II", "Champion III",
    "Grand Champion I", "Grand Champion II", "Grand Champion III",
    "Clicker Legend"
  ];

  let totalPlayers = 300; // Starting average

  function updateOnlinePlayers() {
    // Simulate player count variation based on time of day
    const currentHour = new Date().getHours();
    const peakPlayers = 600; // Maximum players during peak
    const offPeakPlayers = 120; // Minimum players during off-peak
    const isPeak = currentHour >= 18 && currentHour <= 22; // 6 PM to 10 PM
    totalPlayers = Math.floor((isPeak ? peakPlayers : offPeakPlayers) + Math.random() * 50);

    // Update displayed text
    document.getElementById("online-players-text").textContent = `Online Players: ${totalPlayers}`;
  }

  function showRankPopup() {
    const rankPopup = document.getElementById("rank-popup");
    const rankList = document.getElementById("rank-list");

    // Clear existing list
    rankList.innerHTML = "";

    // Generate rank distribution
    const rankDistribution = generateBellCurve(totalPlayers, ranks);

    // Populate rank list
    ranks.forEach((rank, index) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${rank}: ${rankDistribution[index]} players`;
      rankList.appendChild(listItem);
    });

    rankPopup.style.display = "block";
  }

  function hideRankPopup() {
    document.getElementById("rank-popup").style.display = "none";
  }

  // Attach event listeners
  document.getElementById("online-players-text").addEventListener("click", showRankPopup);
  document.getElementById("close-popup").addEventListener("click", hideRankPopup);

  // Update online players every 5 seconds
  setInterval(updateOnlinePlayers, 5000);
  updateOnlinePlayers();

  // Handle Notification Popup Buttons
  document.getElementById("ok-button").addEventListener("click", () => {
    document.getElementById("notification-popup").classList.add("hidden");
  });

  document.getElementById("equip-now-button").addEventListener("click", () => {
    document.getElementById("notification-popup").classList.add("hidden");
    // Equip the new title is already handled in showNewTitleNotification
  });

  // Initial Titles List Update (if needed)
  updateTitlesList();