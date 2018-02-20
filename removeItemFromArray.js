var secretWord = "apple";
var secretWordArray = secretWord.split("");
var guess = "p";

for (var counter = 0; counter < secretWordArray.length; counter++) {
	if (guess === secretWordArray[counter]) {
		secretWordArray.splice(counter, 1);
		counter = 0;
	}
}
secretWordArray

// (3) ["a", "l", "e"]
// 0: "a"
// 1: "l"
// 2: "e"