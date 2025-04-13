//#1.Find common elements between two arrays
let arr1= [1,2,3,4,5];
let arr2=[3,4,5,6,7];
let common = arr1.filter(val => arr2.includes(val));
console.log(common);

//remove duplicate within array
let arr3= [1,2,3,4,5,5,5,5,5,6,4,3];
 let new1 = new Set(arr3);
 console.log(new1);

 


