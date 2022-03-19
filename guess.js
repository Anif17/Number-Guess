var answer = Math.floor(Math.random()*100) + 1;
var no_of_guesses = 0;
var guesses_num = [];
var answer_list = []

function play() {
    var user_guess =  document.getElementById("guess").value;

    if(user_guess < 1 || user_guess > 100){
        alert("Please Enter a number Between 1 to 100");
    }
    else{
        guesses_num.push(user_guess);
        answer_list.push(answer);
        no_of_guesses+= 1;
        if(user_guess < answer){
            message1.textContent = "Your Guess is Too Low";
            message2.textContent = "No. Of Guesses : " + no_of_guesses;
            message3.textContent = "Guessed Number Are: " + guesses_num;
        }
        else if(user_guess > answer){
            message1.textContent = "Your Guess is Too High";
            message2.textContent = "No. Of Guesses : " + no_of_guesses;
            message3.textContent = "Guessed Number Are: " + guesses_num;
        }
        else if(user_guesss == answer){
            message1.textContent = "Congrats You Won It!!";
            message2.textContent = "The number was " + answer;
            message3.textContent = " You guessed it in " + no_of_guesses + " Guessed";
        }
    }
}