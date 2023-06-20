function isPalindrome(word) 
{
  // Write your algorithm here
  console.log(FlipWord(word));
  return (word == FlipWord(word));
}

function FlipWord(word)
{
  let splitString = word.split(""); 
  let reverseArray = splitString.reverse(); 
  let joinArray = reverseArray.join(""); 
  
  return joinArray; 
}
/* 
  Add your pseudocode here
  make a var of the same word flipped
  directly compare the strings
*/

/*
  Add written explanation of your solution here
  we just making the word backwords and seeing if its the same as the word forward
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
