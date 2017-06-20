
// Zombie Apocalypse choose your own adventure game version 2.0 using new JavaScript skills

var beginningScenarios = ["You wake up in the hospital. It is eerily quiet. You tiptoe to the door and peek into the hall...", "You are sitting in the living room of your boarded up house. Your father and brother have gone out scavenging, but have yet to return...", "You are running down a long road surrounded on each side by trees. There is a horde of zombies chasing you. Suddenly, you trip..."];

// Alert the player with a random beginning scenario

function randomNumber (range) {
   return Math.round(Math.random()*range);
}

alert (beginningScenarios[randomNumber(beginningScenarios.length - 1)]);