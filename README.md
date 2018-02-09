# Hangman-Test

# Hangman Requirements

## Assignment

* Build a game of hangman on a single web page
* Tools available are HTML, CSS and JavaScript
* Maintain proper indention and whitespace throughout code
* Use comments religiously
* Remove all console.log statements prior to completion
* Create a public Repo in Github
* Add this entire document to the README
* Add Angeleah and Randy to the project

## Problem Description

* The application chooses a secret word
* The application shows the empty spaces for each letter of the secret word
* The application prompts the user to select a letter from the alphabet
* The user makes a guess
* The application indicates whether the guessed letter is part of the secret word
    * If the user selection is a part of the secret word, the letter is revealed in empty space(s)
    * If the user selection is not a part of the secret word
        * The incorrect guessed letter is placed in an incorrect guess section (visible)
        * The application creates the next part of the hangman body
* The application prompts the user to select a letter from the alphabet  
    * If the user guesses an already selected letter from the game, a prompt to make a different guess will be displayed
* If user guesses all lettters in the secret word
   * A prompt indicating the user WINS is displayed
   * Prompt to start a new game is displayed
* If the hangman body is complete (#parts of body?) the user loses 
   * A prompt indicating the end of game is displayed
   * Answer is displayed
   * Prompt to start a new game is displayed
   
## Recommendations

* Use previous code to give you ideas on how to write new code (r,p,s)
* Use Google and Stackoverflow to answer questions about js techniques
* Ask your lead/manager when you get stuck on things
* Try to complete as much of the game in the console before worrying about the user interface
* Try to use hard-coded values rather than using dynamic, user-generated values
* Write pseudo-code based on your problem description, which later on will become some of the Comments in your code
* Don't initially try to write the most efficient code
* Create branches for different pieces of your code and ask for reviews from @angeleah or @wrburgess, where necessary
