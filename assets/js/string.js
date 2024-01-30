// Reverse String Algorithm

let reverseString = function (str) {
    
    const charArray = str.split("");
    console.log(charArray);

    let left = 0;
    let right = str.length - 1;
  
    while (left < right) {
      // Swap characters
      [charArray[left], charArray[right]] = [charArray[right], charArray[left]];
  
      // Move the pointers
      left++;
      right--;
    }
  
    const reversedStr = charArray.join("");
  
    return reversedStr;
  };
  
  // Implementation
  const str = "hello world";
  const reversed = reverseString(str);
  console.log(`The reversed string for the given string '${str}' is ${reversed}`);
  
