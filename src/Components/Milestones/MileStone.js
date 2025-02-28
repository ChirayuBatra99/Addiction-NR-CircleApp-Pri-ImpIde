const milestones = [
  { day: 1, title: "Capable Kiddo" },
  { day: 4, title: "Good Kiddo" },
  { day: 8, title: "Cool Kiddo" },
  { day: 15, title: "Firm Believer" },
  { day: 21, title: "Strong-Willed" },
  { day: 30, title: "Warrior" },
  { day: 45, title: "Unshakable" },
  { day: 60, title: "Resilient Hero" },
  { day: 75, title: "Unbreakable Spirit" },
  { day: 90, title: "Legend in the Making" },
  { day: 100, title: "Century Achiever" },
  { day: 120, title: "Iron Will" },
  { day: 150, title: "Fearless Fighter" },
  { day: 180, title: "Half-Year Hero" },
  { day: 210, title: "Braveheart" },
  { day: 250, title: "Power Player" },
  { day: 300, title: "Triple Century" },
  { day: 365, title: "One Year Champion" },
  { day: 450, title: "Master of Discipline" },
  { day: 500, title: "Half-Millennium Maverick" },
  { day: 600, title: "Invincible" },
  { day: 700, title: "Legend" },
  { day: 800, title: "Epic Achiever" },
  { day: 900, title: "Unstoppable Force" },
  { day: 1000, title: "The Mafia" }
];

const getMilestone = (day) => {
  // Find the last milestone before or equal to the given day
  const milestone = milestones
    .filter(m => m.day <= day)
    .at(-1); 

  return milestone ? milestone.title : "Newbie";
};

const getNextMilestone = (day) => {
  const milestone = milestones
    .filter(m => m.day > day).at(0);
    
    return milestone ? milestone.day : 1000;
}

export { milestones, getMilestone, getNextMilestone };
