function newQuestion() {
  const q = npcQuestions[Math.floor(Math.random() * npcQuestions.length)];
  document.getElementById("npcQuestion").innerText = "🧙 Teacher Wizard: " + q;
  document.getElementById("npcReply").innerText = "";
  document.getElementById("npcInput").value = "";
}

function sendNPC() {
  const input = document.getElementById("npcInput").value.trim();
  const reply = document.getElementById("npcReply");

  if (input.length < 4) {
    reply.innerText = "🧙 Try one more word. You are still in the quest.";
    return;
  }

  if (input.split(" ").length < 4) {
    reply.innerText = "🧙 Good start. Now make it a full sentence.";
    addXP(5);
    return;
  }

  reply.innerText = "🧙 Great answer, hero! +15 XP";
  addXP(15);
}

newQuestion();
