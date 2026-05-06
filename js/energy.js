function renderEnergy() {
  const player = getPlayer();
  const value = document.getElementById("energyValue");
  const message = document.getElementById("energyMessage");

  value.innerText = player.energy + "%";

  if (player.energy < 30) {
    message.innerText = "Low energy. Complete an easy mission to reconnect.";
  } else if (player.energy < 70) {
    message.innerText = "Good. Keep speaking to grow your energy.";
  } else {
    message.innerText = "Amazing! You are becoming a Voice Hero.";
  }
}

function addEnergy(amount) {
  const player = getPlayer();
  player.energy = Math.min(100, player.energy + amount);
  savePlayer(player);
  renderEnergy();
}

function resetEnergy() {
  const player = getPlayer();
  player.energy = 30;
  savePlayer(player);
  renderEnergy();
}

renderEnergy();
