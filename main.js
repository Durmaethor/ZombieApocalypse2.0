
// Zombie Apocalypse random adventure game version 2.0 using new JavaScript skills

var beginningScenarios = ["You wake up in the hospital. It is eerily quiet. You tiptoe to the door and peek into the hall...", "You are sitting in the living room of your boarded up house. Your father and brother have gone out scavenging, but have yet to return...", "You are running down a long road surrounded on each side by trees. There is a horde of zombies chasing you. Suddenly, you trip..."];

// Function to choose a random scenario from the array

function randomNumber (range) {
   return Math.round(Math.random()*range);
}

// Alert the player with a random beginning scenario

alert (beginningScenarios[randomNumber(beginningScenarios.length - 1)]);

// List of weapons that will be randomly chosen from

var weaponList = ["Cat Skull", "Rubber Chicken", "Shovel", "Hose", "Shotgun"];

// Choose a random weapon for the player and alert them of the choice

var weapon = weaponList[randomNumber(weaponList.length - 1)];
alert("Fearing for your life, you quickly search for a weapon. After taking a quick look around you notice and grab a " + weapon + ".");

// Attack and survival function

var survival = randomNumber(2); // 33% chance of surviving

if(survival === 0) {
    alert("The zombie bites you. You lose.");
}
else if(survival > 0) {
    alert("You kill the zombie with your " + weapon + "! You survive!")
}



