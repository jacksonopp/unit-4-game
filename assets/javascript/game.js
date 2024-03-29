//setting variables
let goal = 0;
let score = 0;
let wins = 0;
let losses = 0;
let crystalValue = 0;

//setting win/lose conditions
let winCon = false;
let loseCon = false;

//setting random goal function
function randomGoal() {
    goal = Math.floor(Math.random() * 100 + 20);
}
// randomGoal();
// console.log(goal);

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

//adding reset button
document.querySelector(".resetButton").addEventListener("click", function () {
    gameReset();
})

//the game
function runGame() {
    //initializing the info display
    scoreText.textContent = "Score:";
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;

    //runs through each crystal and sets it's value attribute to a random number
    document.querySelectorAll(".crystal").forEach(function (crystalEl) {
        crystalEl.setAttribute("data-value", 0);
        crystalValue = randomCrystalValue();
        // console.log("new-value:", crystalValue);
        crystalEl.setAttribute("data-value", crystalValue);
        crystalScore = crystalEl.getAttribute("data-value");
        // console.log("crystalScore:" + crystalScore);

        //adds event listener for click
        crystalEl.addEventListener("click", function () {
            //checks if either stop condition is true, and prevents the game from running until it's reset
            if (!winCon && !loseCon) {

                //get's the crystal number (for debugging)
                crystalNumber = crystalEl.getAttribute("id");
                // console.log("You clicked on: " + crystalNumber);
                // console.log(crystalNumber + "'s value is: " + crystalEl.getAttribute("data-value"));

                // adds the crystal value attribute to the score
                score += parseInt(crystalEl.getAttribute("data-value"));
                // console.log("your goal is: " + goal);
                // console.log("score: " + score);
                // console.log("winCon: " + winCon);
                // console.log("loseCon: " + loseCon);

                //checking for win condition
                if (score === goal) {
                    // console.log("You win!");
                    winCon = true;
                    wins++;
                    // hard reset
                    // gameReset();
                    // shows the reset button
                    resetBtn.innerHTML = "<button>Reset</button>";
                    // console.log(score);

                } else if (score > goal) {
                    console.log("You lose!")
                    loseCon = true;
                    // console.log(loseCon);
                    losses++;
                    // gameReset();
                    resetBtn.innerHTML = "<button>Reset</button>";
                    // console.log(score);
                }
            }
            scoreText.textContent = "Score: " + score;
            winsText.textContent = "Wins: " + wins;
            lossesText.textContent = "Losses: " + losses;
        })
    })
}

function gameReset() {
    winCon = false;
    loseCon = false;
    randomGoal();
    goalText.textContent = "Goal: " + goal;
    score = 0;
    scoreText.textContent = "Score:";
    resetBtn.innerHTML = "";
    // document.querySelectorAll(".crystal").forEach(function (crystalEl) {
    // })
}


gameReset();
runGame();