var target;        
var guess_input_text;   
var guess_input;      
var finished = false;   
var guesses = 0;
//colors=["LightPink", "Khaki", "Black", "Cyan", "Red", "ForestGreen","DeepSkyBlue", "Gold", "Purple", "Turquoise"];
colors=["blue", "cyan", "gold", "gray", "magenta", "orange","red", "white", "yellow"];

function do_game() {
    var random_number = Math.random() * colors.lenght;
    var target_index = Math.floor(random_number);
    target = colors[target_index];
    prompt("target is..." + target);

    while (!finished) {
        guess_input_text = prompt("I am thinking of one of these colors:\n\n" 
                                + colors.join(", ")
                                + "\n\nWhat color am I thinking of?");
        guess_input = parseInt(guess_input_text);
        guesses += 1;   
        finished = check_guess();
    }
}

function set_background_color(name_of_color){
    myBody=document.getElementsByTagName("body")[0];
    myBody.style.background=name_of_color;
}

function check_guess() {
    if (guess_input not in colors) {
        alert("Sorry, I don't recognize your color.\n\n" +
            "Please try again.");
        return false;
    }
    if (guess_input > target) {
        alert("Sorry, your guess is not correct!\n\n" +
            "Hint: your color is alphabetically higher than mine.\n\n" + 
            "Please try again.");
        return false;
    }
    if (guess_input < target) {
        alert("Sorry, your guess is not correct!\n\n" +
            "Hint: your color is alphabetically lower than mine.\n\n" + 
            "Please try again.");
    }
    alert("Congratulations! You have guessed the color!\n\n" + 
          "It took you " + guesses + " guesses to finish the game!\n\n" +
          "You can see the colour in the background.");
    return true;   
}