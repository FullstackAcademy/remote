//input: string
//output: number of vowels in that string

function vowelsCount(str){

    //input: string
    var input = str;

    //output: number of vowels in that string
    var numVowels = 0;

    //array of vowels
    var vowels = ["a", "e", "i", "o", "u"];

    /*
    Loop through each letter in the input string to check if it's a vowel. Loop through each letter in the array of vowels to compare to the current letter. If the current letter matches a letter in the array of vowels, increment numVowels by one
    */
    for(var i = 0; i < str.length; i++){
      //DEBUG: console.log("Current letter: " + str[i]);
        for(var j = 0; j < vowels.length; j++){
          //DEBUG: console.log("Current vowel: " + vowels[j]);
          //DEBUG: console.log("Does " + str[i].toLowerCase() + " equal " + vowels[j] + "?");
            if(str[i].toLowerCase() == vowels[j]){
                numVowels++;
                //DEBUG: console.log(str[i].toLowerCase() + " is a vowel");
            }
        }
    }

    return numVowels;

    console.log();
}