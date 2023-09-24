const weightedRandom = require('weighted-random'); // You can replace this with your preferred randomization library

// Define probabilities for each player to score runs
const players = [
  { name: 'Kirat Boli', probabilities: [0.05, 0.3, 0.25, 0.1, 0.15, 0.01, 0.09, 0.05] },
  { name: 'N.S Nodhi', probabilities: [0.1, 0.4, 0.2, 0.05, 0.1, 0.01, 0.04, 0.1] },
  { name: 'R Rumrah', probabilities: [0.2, 0.3, 0.15, 0.05, 0.05, 0.01, 0.04, 0.2] },
  { name: 'Shashi Henra', probabilities: [0.3, 0.25, 0.05, 0.0, 0.05, 0.01, 0.04, 0.3] },
];

// Simulate a ball with given player's probabilities
function simulateBall(player) {
  const randomIndex = weightedRandom(player.probabilities);
  return [0, 1, 2, 3, 4, 5, 6, 'OUT'][randomIndex];
}

// Simulate an over
function simulateOver(batsmen, strikerIndex, totalRuns, ballsLeft) {
  let runsThisOver = 0;

  for (let i = 0; i < 6; i++) {
    if (ballsLeft === 0) {
      console.log(`Innings completed with ${totalRuns} runs.`);
      return totalRuns;
    }

    const striker = batsmen[strikerIndex];
    const run = simulateBall(striker);
    
    if (run === 'OUT') {
      console.log(`${striker.name} is OUT!`);
      strikerIndex = (strikerIndex + 1) % 3;
    } else {
      runsThisOver += run;
      totalRuns += run;

      if (run % 2 !== 0 || run === 4 || run === 6) {
        strikerIndex = (strikerIndex + 1) % 3;
      }
    }

    ballsLeft--;
  }

  console.log(`${striker.name} scores ${runsThisOver} runs in this over.`);
  return totalRuns;
}

// Simulate the last 4 overs
function simulateMatch() {
  let batsmenIndex = 0;
  let totalRuns = 0;
  let ballsLeft = 24;

  for (let i = 0; i < 4; i++) {
    console.log(`Over ${i + 17}:`);
    totalRuns = simulateOver(players, batsmenIndex, totalRuns, ballsLeft);
    batsmenIndex = (batsmenIndex + 1) % 3;
  }

  console.log(`Lengaburu scores ${totalRuns} runs in 20 overs.`);
  return totalRuns;
}

// Simulate the tiebreaker over
function simulateTieBreaker() {
  console.log("\nTiebreaker over:");

  let totalRuns = 0;
  let ballsLeft = 6;

  for (let i = 0; i < 6; i++) {
    const run = simulateBall(players[0]); // Using Kirat Boli's probabilities
    totalRuns += run;
    ballsLeft--;

    console.log(`Ball ${i + 1}: ${run} runs`);

    if (ballsLeft === 0) {
      console.log(`Tiebreaker completed with ${totalRuns} runs.`);
      return totalRuns;
    }
  }
}

// Run the simulation
console.log("Simulation Start:");
const totalRunsInMainMatch = simulateMatch();

if (totalRunsInMainMatch === 40) {
  const totalRunsInTieBreaker = simulateTieBreaker();
  
  if (totalRunsInTieBreaker > totalRunsInMainMatch) {
    console.log("Lengaburu wins the match!");
  } else {
    console.log("Enchai wins the match!");
  }
} else {
  console.log("Enchai wins the match!");
}
//npm install weighted-random

