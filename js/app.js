function startGame() {
  const name = document.getElementById("studentName").value.trim();
  const grade = document.getElementById("grade").value;
  const level = document.getElementById("level").value;

  if (!name) {
    alert("Please enter your hero name.");
    return;
  }

  const player = {
    name,
    grade,
    level,
    energy: 30,
    xp: 0,
    completedMissions: 0
  };

  localStorage.setItem("player", JSON.stringify(player));
  location.href = "map.html";
}

function getPlayer() {
  return JSON.parse(localStorage.getItem("player")) || {
    name: "Guest Hero",
    grade: "6",
    level: "support",
    energy: 30,
    xp: 0,
    completedMissions: 0
  };
}

function savePlayer(player) {
  localStorage.setItem("player", JSON.stringify(player));
}

function addXP(amount) {
  const player = getPlayer();
  player.xp += amount;
  player.energy = Math.min(100, player.energy + amount);
  player.completedMissions += 1;
  savePlayer(player);
  showXP("+" + amount + " XP");
}

function showXP(text) {
  const xp = document.createElement("div");
  xp.className = "xp-popup";
  xp.innerText = text;
  document.body.appendChild(xp);

  setTimeout(() => {
    xp.remove();
  }, 1800);
}
