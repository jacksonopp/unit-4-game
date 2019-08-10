const characters = {
    nicolBolas: {
        name: "Nicol Bolas",
        health: 0,
        attack: 0
    },
    jace: {
        name: "Jace",
        health: 0,
        attack: 0
    },
    ajani: {
        name: "Ajani Goldmane",
        health: 0,
        attack: 0
    },
    chandra: {
        name: "Chandra Nalaar",
        health: 0,
        attack: 0
    }
}


//converts the keys of charcters object into an array
const charKeys = Object.keys(characters);


for (let i = 0; i < charKeys.length; i++) {
    console.log(charKeys[i]);
    const charNum = i;
    const charChoices = document.createElement("div");
    charChoices.setAttribute("char-name", charKeys[i]);
    charChoices.classList.add("character");
    charChoices.innerHTML = "<h3>" + characters[charKeys[i]].name + "<h3>";
    document.getElementById("character-choose").append(charChoices);
}

let yourCharacter;
function enemyCharacters() {
    const enemies = charKeys.filter(function (x) {
        return x !== yourCharacter
    });
    return enemies;
};

document.querySelectorAll(".character").forEach(function (character) {
    character.addEventListener("click", function () {
        character.innerHTML = "";
        yourCharacter = characters[character.getAttribute("char-name")];
        console.log("yourCharacter: " + yourCharacter);
        const yourCharacterPlayer = document.createElement("div");
        yourCharacterPlayer.innerHTML = yourCharacter;
        document.getElementById("your-character").append(yourCharacterPlayer);
        const enemyPlayers = enemyCharacters();
        console.log(enemyPlayers);
    })
})