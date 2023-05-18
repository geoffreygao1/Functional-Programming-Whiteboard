// Checking for Uniqueness
// Write an algorithm that determines whether all the elements in a string are unique. You may not convert the string into an array or use array methods to solve this problem. The algorithm should return a boolean.

// Example
// Input: "hello"
// Output: false
// Input: "copyright"
// Output: true


//Inputs: String
//Edge Cases: input is not a string, null input
//Output: bool 

const uniqueString = (inputString) => {
  // if (typeof inputString  != "string") { return false;}
  // inputString = inputString.toString();
  for (let i = 0; i < inputString.length; i++) {
    for (let j = 0; j < inputString.length; j++) {
      if (inputString.charAt(i) === inputString.charAt(j) && i != j) {
        return false;
      }
    }
  }
  return true;
}

const uniqueStringUsingArr = (inputString) => {
  const splitArr = inputString.split('');
  // [h,e,l,l,o]
  const filteredArr = splitArr.filter((ch, index) => splitArr.indexOf(ch) == index);
  return (filteredArr.length == splitArr.length);
}