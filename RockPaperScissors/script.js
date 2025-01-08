// Functions

function getComputerChoice(max) 
{
  return Math.floor(Math.random() * max);
}

function getUserChoice()
{
  let choice = prompt("Rock, paper or scissors?");
  choice = String(choice).toLowerCase();

  // validating input
  switch(choice)
  {
    case "rock":
      return 0;
      break;
    case "paper":
      return 1;
      break;
    case "scissors":
      return 2;
      break;
  }

  return "Incorrect input"
}

function playRound()
{
  // Verify function entry
  console.log("Round Started");
  let computerChoice = getComputerChoice(3);
  let playerChoice = getUserChoice();

  if(playerChoice === computerChoice)
  {
    console.log("Same, 0")
    return 0;
  }
  else if(playerChoice === 0 && computerChoice === 1)
  {
    console.log("1 point to Computer");
    return 2;
  }
  else if(playerChoice === 0 && computerChoice === 2)
  {
    console.log("1 point to Player");
    return 1;
  }
  else if(playerChoice === 1 && computerChoice === 0)
  {
    console.log("1 point to Player");
    return 1;
  }
    else if(playerChoice === 1 && computerChoice === 2)
  {
    console.log("1 point to Computer");
    return 2;
  }
  else if(playerChoice === 2 && computerChoice === 1)
  {
    console.log("1 point to Player");
    return 1;
  }
  else if(playerChoice === 2 && computerChoice === 0)
  {
    console.log("1 point to Computer");
    return 2;
  }



}

function gameLoop()
{
  // Setting scores at the start of the game
  let playerScore = 0;
  let cpuScore = 0;
  let currentround;
  
  // initial debugging showing generation works, function recalls on roundentry so values will be invalid
  console.log("Hello, User");
  for(let i = 0; i < 5; i++)
  {
    // Inside number of rounds
    console.log("Round " + i);
    switch(playRound())
    {
      case 0:
        break;
      case 1:
        playerScore++;
        break;
      case 2:
        cpuScore++;
        break;
    }
  }

  // Final scoring
  alert("Final scores: Player = " + playerScore + " | Computer = " + cpuScore);

}

gameLoop();

document.addEventListener("DOMContentLoaded", function() {
    // Placeholder for functionality to run once the DOM is loaded
});
