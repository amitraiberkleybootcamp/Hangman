
function checkForLetter(letter, word){

  // Check if the letter is in the word
  if(word.indexOf(letter) != -1){
    return true;
  }
  else{
    return false;
  }

}

module.exports = checkForLetter;