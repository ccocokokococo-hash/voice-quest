let bossTime = 30;
let bossInterval;

function startBossFight() {
  bossTime = 30;
  document.getElementById("bossTimer").innerText = bossTime;
  document.getElementById("bossResult").innerText = "Speak now. Do not stop.";

  clearInterval(bossInterval);

  bossInterval = setInterval(() => {
    bossTime--;
    document.getElementById("bossTimer").innerText = bossTime;

    if (bossTime <= 0) {
      clearInterval(bossInterval);
      document.getElementById("bossResult").innerText =
        "Boss defeated! Your voice is stronger than silence. +50 XP";
      addXP(50);
    }
  }, 1000);
}
