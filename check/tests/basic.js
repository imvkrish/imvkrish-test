//palindrome
let str1= "1001";
let a= str1.split('').reverse().join('');
if(str1===a){
    console.log(str1, "is palindrome");
}else{
    console.log(str1,"is not a palindrome");
}
//
let num1= 12345;
let total = [...num1.toString()].map(Number).reduce((a,b)=>a+b,0);
console.log(total);

//armstong number (153 = 1*3+5*3+3*3)= (1+125+27)=253;
function armstong(num){
    let digits= num.toString().split('');
    let power= digits.length;
    console.log(digits,power);
    let sum = digits.reduce((acc,digit)=>acc+ Math.pow(Number(digit),power),0);
    return sum;
    return sum==num;

}console.log(armstong(9474));

String nam= "Kvignesh"
var bl = nam.split('');
var a = bl[0];
bl.push(a);
bl.shift();
getSystem.out.println((bl).join(''));

function factorial(num){
    let fac =1;
    for(let i=1;i<=num;i++)
    fac *= i;
    return fac;
} console.log(factorial(5));

function toreverse(num){
    let rev = 0;
    while(num!==0){
        rev = rev*10 + num%10;
        num = Math.floor(num/10);

    } return rev;
}console.log(toreverse(156789));

function swapi(a,b){
   return[b,a];
} 
let[a,b] = swapi(12,14);
console.log("after swapping",a ,b);
or
let a1=20,b1=40;
[a1,b1]=[b1,a1];
console.log("afteer swapping", a1,b1);

//to remove unwanted Symbol

function cleanmytext(str){
    return str.replaceAll(/[^a-zA-Z0-9]/g,"");
}
console.log(cleanmytext("C$#^heck1234m*#^y  Tes&#^t"));

//odd or even
function oddoreven(num){
   return num%2===0 ? "Even" : "Odd";
}console.log(oddoreven(122));

//primeNumber
function ifPrime(num){
    return num%2===0 ? "Even" : "Odd";
 }console.log(oddoreven(122));

