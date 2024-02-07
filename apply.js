
//   14. Intermediate Algorithm Scripting: Smallest Common Multiple
// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.


function smallestCommons(arr) {
    //sort greatest to least
    arr.sort(function(a, b){
      return a - b;
    });
  
    //create a new array and add values greatest to lowest in the array
    var newArr = [];//left empty
  for(var i = arr[0]; i >= arr[1]; i--){
    newArr.push(i);
  }
   
  //variables needed declared outside of the loop
  var quot = 0;
  var loop = 1;
  var n;
  
  do{
    quot = newArr[0] * newArr[1];
    for(n = 2; n < newArr.length; n++){
      if(quot % newArr[n] !== 0){
      }
    }
    loop++;
  } while (n !== newArr.length); 
  return quot;
  
    }
    
    
    
    smallestCommons([1,5]); //returns 60 
 
 //   17.Intermediate Algorithm Scripting: Binary Agents
// Return an English translated sentence of the passed binary string.

// The binary string will be space separated.

function binaryAgent(str) {
    str = str.split(' ');//left empty
    var power;
    var decValue =0;
    var sentence = ' ';//return
   
    for(var i = 0; i < str.length; i++){
     for(var j = 0; j < str[i].length; j++ ){
       if(str[i][j] == 1){
         power = Math.pow(2, str[i].length - j - 1);
         decValue += power
       }
     }
     sentence += String.fromCharCode(decValue);
     decValue = 0;
    }
   
   return sentence;
     }
     
     binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
   
  
  //

  //   19.Intermediate Algorithm Scripting: Arguments Optional
// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

// Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

// sumTwoAnd(3) returns 5.

// If either argument isn't a valid number, return undefined.

function addTogether() {
   const [first, second] = Object.values(arguments);
   if(typeof first !== 'number'){
    return undefined;//return undefined
   }

   const addSecond = (second) => typeof second === 'number' ? first + second : undefined;

   if(second !== undefined){ //return undefined
    return addSecond(second);
   } else {
    return addSecond
   }
  }
  
  addTogether(2,3);
