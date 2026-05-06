const team = [
  {
    name: "Aruzhan",
    role: "Speaker Mage",
    power: 80,
    status: "Active"
  },
  {
    name: "Ali",
    role: "Grammar Knight",
    power: 65,
    status: "Active"
  },
  {
    name: "Dias",
    role: "Silent Shadow",
    power: 35,
    status: "Needs activation"
  },
  {
    name: "Mira",
    role: "Energy Healer",
    power: 70,
    status: "Active"
  }
];

function renderTeam() {
  const grid = document.getElementById("teamGrid");

  team.forEach(member => {
    grid.innerHTML += `
      <div class="player-card ${member.status === "Needs activation" ? "passive" : ""}">
        <h3>${member.name}</h3>
        <p>Role: ${member.role}</p>
        <p>Voice Power: ${member.power}</p>
        <p>Status: ${member.status}</p>
      </div>
    `;
  });
}

function completeTeamMission() {
  document.getElementById("teamResult").innerText =
    "Team mission complete! The quiet student joined the story. +30 XP";
  addXP(30);
}

renderTeam();
