var playerMoney = 10;

var playerHealth = 100;
var playerAttack = 10;

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;
console.log(enemyName, enemyHealth, enemyAttack);

window.alert("Welcome to Robot Gladiators!");
var playerName = window.prompt("What is your robot's name?");
console.log(playerName, playerHealth, playerAttack);
var promptFight = window.prompt("Would you like to FIGHT or SKIP this round? Enter FIGHT or SKIP to choose.");
if (promptFight === "fight" || promptFight === "FIGHT") {
        window.alert("Round begins!");
        enemyHealth = enemyHealth - playerAttack;
        //Log result 
        console.log(playerName  + "attacked " + enemyName  + ". " + enemyName  + "now has " + enemyHealth + "health remaining.");
        //Check enemys health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + "health left!");
        }
        //Subtract value of 'enemyAttack' from 'playerHealth'
        playerHealth = playerHealth - enemyAttack;
        //Log result
        console.log(enemyName + " attacked " + playerName +  ". " + playerName + " now has " + playerHealth + " health remaining.");
        //Check players health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        }
        else {
            window.alert(playerName + "still has " + playerHealth +  " health left!");
        }
    }
else if (promptFight === "skip" || promptFight === "SKIP") {
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        playerMoney = playerMoney - 2;
        console.log("player money " + playerMoney);
    }
    else {
        window.alert("Round begins!");
        enemyHealth = enemyHealth - playerAttack;
        //Log result 
        console.log(playerName  + "attacked " + enemyName  + ". " + enemyName  + "now has " + enemyHealth + "health remaining.");
        //Check enemys health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + "health left!");
        }
        //Subtract value of 'enemyAttack' from 'playerHealth'
        playerHealth = playerHealth - enemyAttack;
        //Log result
        console.log(enemyName + " attacked " + playerName +  ". " + playerName + " now has " + playerHealth + " health remaining.");
        //Check players health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        }
        else {
            window.alert(playerName + "still has " + playerHealth +  " health left!");
        }
    }
} else { 
    window.alert("Choose a valid option. Try again!");
}

