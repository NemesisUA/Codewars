/*
Task
Coding in function sortIt. function accept 1 parameters arr, it's a number array. Your task is to sort the array according to the specified conditions, and returns a new array(should not modify the original array).

conditions1: according to the number of elements(in ascending order) for example:

sortIt([1,1,1,2,2,3]) should return [3,2,2,1,1,1]
because [1,1,1,2,2,3] has one 3, two 2 and three 1
conditions2: If the same number of elements, according to the number values(in descending order) for example:

sortIt([1,1,1,2,2,2,3,3,3]) should return [3,3,3,2,2,2,1,1,1]
because number of 3,2 and 1 both are three, then according to 3>2>1
Comprehensive two conditions should be like this:

sortIt([1,2,3,4,4,5,5,6,6]) should return [3,2,1,6,6,5,5,4,4]
*/

function sortIt(arr){
  const arrCopy = [...arr];
  const count = {};  
  arrCopy.forEach(el => count[el] ? count[el]++ : count[el] = 1 );
  
  arrCopy.sort((a, b) => {
    if (count[a] < count[b]) return -1;
    if (count[a] > count[b]) return 1;
    if (count[a] == count[b]) return b - a;
    return 0;
  });
  
  return arrCopy;
}

/*
  Best:  
*/
function sortIt(arr){
  let numberOf = {};
  arr.forEach(x => numberOf[x] = (numberOf[x]||0) + 1);
  return arr.slice().sort((x, y) => numberOf[x] - numberOf[y] || y - x);
}

/*
Theory: 
arrayObject.sort([compareFunction])
The parameter compareFunction is optional. Specifies a function that defines the sort order. If omitted, the array is sorted according to each character's Unicode code point value, 
according to the string conversion of each element. Example:
*/
var arr=['c','a','b'];
arr.sort();
console.log(arr)   //output: [ 'a', 'b', 'c' ]

var arr=[1,2,3,11,21,31];
arr.sort();              //without params: [1, 11, 2, 21, 3, 31]
arr.sort((a,b)=>a-b);   //ascending sort   output: [ 1, 2, 3, 11, 21, 31 ]
arr.sort((a,b)=>b-a);   //descending sort  output: [ 31, 21, 11, 3, 2, 1 ]
