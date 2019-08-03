//setting variables
let goal = 0;
let score = 0;
let wins = 0;
let losses = 0;
let crystalValue = 0;

//setting win/lose conditions
let winCon = false;
let loseCon = false;

//setting random goal
function randomGoal() {
    goal = Math.floor(Math.random() * 100 + 20);
}
randomGoal();
console.log(goal);

//setting random value for crystal
function randomCrystalValue() {
    const x = Math.floor(Math.random() * 12 + 1);
    return x;
}

//setting up page elements
const resetBtn = document.getElementById("reset");
const goalText = document.getElementById("goal");
const scoreText = document.getElementById("score");
const winsText = document.getElementById("wins");
const lossesText = document.getElementById("losses");

//setting up reset function
function gameReset() {
    winCon = false;
    loseCon = false;
    randomGoal();
    console.log("new goal: " + goal);
    score = 0;
    scoreText.textContent = "score:";
    resetBtn.innerHTML = "";
    runGame();
}

//adding reset button
document.querySelector(".resetButton").addEventListener("click", function(){
    gameReset();
})

//the game
function runGame() {
    scoreText.textContent = "score:";
    winsText.textContent = "wins: " + wins;
    lossesText.textContent = "losses: " + losses;

    document.querySelectorAll(".crystal").forEach(function (crystalEl) {
        crystalEl.setAttribute("value", 0);
        crystalValue = randomCrystalValue();
        crystalEl.setAttribute("value", crystalValue);
        // crystalScore = crystalEl.getAttribute("value"); ------------ why doesn't this work

        crystalEl.addEventListener("click", function () {
            if (!winCon && !loseCon) {
                crystalNumber = crystalEl.getAttribute("id");
                console.log("You clicked on: " + crystalNumber);
                console.log(crystalNumber + "'s value is: " + crystalEl.getAttribute("value"));
                score += parseInt(crystalEl.getAttribute("value"));
                console.log(score);
                //checking for win condition
                if (score === goal) {
                    console.log("You win!");
                    winCon = true;
                    console.log(winCon);
                    wins++;
                    resetBtn.innerHTML = "<button>reset</button>";

                } else if (score > goal) {
                    console.log("You lose!")
                    loseCon = true;
                    console.log(loseCon);
                    losses++;
                    resetBtn.innerHTML = "<button>reset</button>";
                }
            }
            scoreText.textContent = "score: " + score;
            winsText.textContent = "wins: " + wins;
            lossesText.textContent = "losses: " + losses;

        })
        goalText.textContent = "goal: " + goal;

    })
}

runGame();

