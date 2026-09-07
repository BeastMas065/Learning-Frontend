const team = document.getElementById("team");
const year = document.getElementById("year");
const headCoach = document.getElementById("head-coach");
const cards = document.getElementById("player-cards");
const players = document.getElementById("players");

const footballTeam = {
  team: "Manchester United",
  year: 2026,
  headCoach: "Erik ten Hag",
  players: [
    {
      name: "Bruno Fernandes",
      position: "midfielder",
      isCaptain: true
    },
    {
      name: "Marcus Rashford",
      position: "forward",
      isCaptain: false
    },
    {
      name: "Lisandro Martinez",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Andre Onana",
      position: "goalkeeper",
      isCaptain: false
    }
  ]
};

team.innerText = footballTeam.team
year.innerText = footballTeam.year
headCoach.innerText = footballTeam.headCoach

for (let i of footballTeam.players) {
    if (i.isCaptain) {
    cards.innerHTML += `<div class="player-card">
        <h2>(Captain) ${i.name}</h2>
        <p>Position: ${i.position}</p>
    </div>`
    } else {
        cards.innerHTML += `<div class="player-card">
      <h2>${i.name}</h2>
      <p>Position: ${i.position}</p>
    </div>`
    }
}

function edit(value){
    if (value === "all") {
        cards.innerHTML = ""
        for (let i of footballTeam.players) {
            if (i.isCaptain) {
            cards.innerHTML += `<div class="player-card">
                <h2>(Captain) ${i.name}</h2>
                <p>Position: ${i.position}</p>
            </div>`
            } else {
                cards.innerHTML += `<div class="player-card">
            <h2>${i.name}</h2>
            <p>Position: ${i.position}</p>
            </div>`
            }
        }
        return;
    }
    cards.innerHTML = "";
    for (let i of footballTeam.players) {
        if (i.position === value){    
            if (i.isCaptain) {
            cards.innerHTML += `<div class="player-card">
                <h2>(Captain) ${i.name}</h2>
                <p>Position: ${i.position}</p>
            </div>`
            } else {
                cards.innerHTML += `<div class="player-card">
            <h2>${i.name}</h2>
            <p>Position: ${i.position}</p>
            </div>`
            }
        }   
    }
}

players.addEventListener("change", (event) => edit(event.target.value))