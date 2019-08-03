let goal = 0;
let score = 0;
let wins = 0;
let losses = 0;
let crystalValue = 0;

let winCon = false;
let loseCon = false;

function randomGoal() {
    goal = Math.floor(Math.random() * 100 + 20);
}

randomGoal();
console.log(goal);

function randomCrystalValue() {
    const x = Math.floor(Math.random() * 12 + 1);
    return x;
}


document.querySelectorAll(".crystal").forEach(function (crystalEl) {
    crystalValue = randomCrystalValue();
    crystalEl.setAttribute("value", crystalValue);
    // crystalScore = crystalEl.getAttribute("value"); ------------ why doesn't this work

    if (!winCon || !loseCon) {......console.log.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply......console.log.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply.apply...................................................console.log.apply.apply.apply.apply.apply,
        crystalEl.addEventListener("click", function () {
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
            } else if (score > goal) {
                console.log("You lose!")
                loseCon = true;
                console.log(loseCon);
            }
        })
    }
}) 