const container = document.getElementById("missionsContainer");

function renderMissions(filter = "all") {
  container.innerHTML = "";

  missions
    .filter(m => {
      if (filter === "all") return true;
      if (filter === "Fun") return m.category === "Fun";
      if (filter === "Team") return m.category === "Team";
      return m.difficulty === filter;
    })
    .forEach(m => {
      const colorClass =
        m.difficulty === "Easy" ? "easy" :
        m.difficulty === "Medium" ? "medium" :
        "hard";

      container.innerHTML += `
        <div class="mission-card">
          <div class="mission-top">
            <h2>${m.title}</h2>
            <span class="${colorClass}">${m.difficulty}</span>
          </div>

          <p>${m.task}</p>

          <div class="example-box">
            <b>Example:</b>
            <p>${m.example}</p>
          </div>

          <div class="mission-bottom">
            <b>Reward: +${m.reward} XP</b>
            <button onclick="startMission('${m.title}', ${m.reward})">Start Mission</button>
          </div>
        </div>
      `;
    });
}

function filterMissions(filter) {
  renderMissions(filter);
}

function startMission(title, reward) {
  addXP(reward);
  alert("Mission started: " + title + "\nNow say your answer in English!");
}

renderMissions();
