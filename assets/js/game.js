//global variables. (Global goes to top of page)
var randomNumber = function() {
    var value = Math.floor(Math.random()*30)+40;

    return value;
};

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 100;

var enemyNames = ['Roborto', 'Amy Android', 'Thomas T', 'Gokuf'];
var enemyHealth = randomNumber();
var enemyAttack = 12;

var startGame = function() {
    //reset player stats
    //debugger;
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 100;

for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {

        window.alert("Robot Gladiator's Round" + (i + 1));

        let pickedName = enemyNames[i];

        enemyHealth = randomNumber();git 

        fight(pickedName);

        console.log(playerHealth, playerAttack, playerMoney);
        console.log(pickedName + " has " +  randomNumber());

    } else {
        window.alert("You've died!");
        break;
    }
}

endGame();
};

var endGame = function() {
    window.alert("The game has ended! Lets see how you did!");

    if (playerHealth > 0) {
        window.alert("Great job! You survived! You have a score of " + playerMoney + " points!");
    } else {
        window.alert("You lost your Robot in battle!");
    }

    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        startGame(); 
    } else {
        window.alert("Thank you for playing Robot Gladiator's! Have a good day!");
    }
};


var fight = function(enemyName) {
    while (playerHealth > 0 && enemyHealth > 0) {
        var promptFight = window.prompt("Would you like to skip this fight? Enter 'FIGHT' to fight or 'SKIP' to skip.");

        if (promptFight === 'skip' || promptFight === 'SKIP' || promptFight === 'Skip' ) {

            var confirmSkip = window.confirm("Are you sure you want to skip?");

            if (confirmSkip) {

            window.alert(playerName + " has skipped the fight!");

            playerMoney = Math.max(0, playerMoney - 10);

            shop();

            break;
        }
    } else {

    enemyHealth = Math.max(0, enemyHealth - playerAttack);

    console.log(
        playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
    );

    if (enemyHealth <= 0) {
        window.alert(enemyName + " is vanquished!");

        playerMoney = playerMoney + 20;

        playerHealth = playerHealth + 15;

        console.log(playerMoney);
        console.log(playerHealth);

        var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

        if (storeConfirm) {
            shop();
        }

        break;
    } else {
        window.alert(enemyName + " has " + enemyHealth + " left!");
    }

    playerHealth = Math.max(0, playerHealth - enemyAttack);

    console.log(
        enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
    );

    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");

        break;
    } else {
        window.alert(playerName + " still has " + playerHealth + " left!");
    }
    
    }
}
};

var shop = function() {
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");

    switch (shopOptionPrompt) {
        case 'refill':
        case 'REFILL':
            window.alert("Refilling player's health by 20 for 7 dollars.");
            playerHealth += 20;
            playerMoney -= 7;
            break;
        case 'upgrade':
        case 'UPGRADE':
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            playerAttack += 6;
            playerMoney -= 7;
            break;
        case 'leave':
        case 'LEAVE':
            window.alert("You are leaving the store.");
            break;
        default: 
        window.alert("Try again.");
        shop();
        break;
    }
};

startGame();




