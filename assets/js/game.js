//global variables. (Global goes to top of page)
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 100;

var enemyNames = ['Roborto', 'Amy Android', 'Thomas T'];
var enemyHealth = 50;
var enemyAttack = 12;

var startGame = function() {
    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 100;

for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {

        window.alert("Robot Gladiator's Round" + (i + 1));

        var pickedName = enemyNames[i];

        enemyHealth = 50;

        fight(pickedName);

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

            playerMoney = playerMoney - 10;

            break;
        }
    }

    enemyHealth = enemyHealth - playerAttack;

    console.log(
        playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
    );

    if (enemyHealth <= 0) {
        window.alert(enemyName + " is vanquished!");

        playerMoney = playerMoney + 20;

        playerHealth = playerHealth + 15;

        console.log(playerMoney);
        console.log(playerHealth);

        break;
    } else {
        window.alert(enemyName + " has " + enemyHealth + " left!");
    }

    playerHealth = playerHealth - enemyAttack;

    console.log(
        enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
    );

    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");

        playerMoney = playerMoney - 10;

        break;
    } else {
        window.alert(playerName + " still has " + playerHealth + " left!");
    }
    
    }
};

startGame();




