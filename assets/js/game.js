var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
// You can also log multiple values at once like this 
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;
//logs the values of the above variables 
console.log(enemyName, enemyHealth, enemyAttack);

var fight = function() {
    //alerts player of that the round is starting
    window.alert("Welcome to Robot Gladiators!");
    //Subtract value of 'playerAttack' from value of 'enemyHealth'
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
fight();
