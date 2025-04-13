import { sourceMapsEnabled } from "process";

let str = "V&#ig893ne93s*#&#)@h";
// let clean = str.replaceAll(/[^a-zA-Z0-9]/g,'');
let clean = str.replaceAll(/[^a-zA-Z]/g,'');
//regular expression [^a-zA-Z0-9] make sure to remove expect given i this
console.log(clean);

//TO reverse
let val1= "Vignesh";
let val2 ="My name is Vignesh";
 let rval1 = val1.split('').reverse().join('');
 let rval2 = val2.split('').reverse().join('');
 console.log(rval1);
 console.log(rval2);

 //To Sort
 let sval1= val1.toLowerCase().split('').sort().join('');
 console.log(sval1);

 //To reverse each word in a string
 let tval2 = "My name is Vignesh";
let words = tval2.split(' ');
let reversedWords = [];

for (let i = 0; i < words.length; i++) {
  let word = words[i];
  let reversed = word.split('').reverse().join('');
  reversedWords.push(reversed);
}

console.log(reversedWords.join(' '));
//To find the number of repeated characters in a string"
let gvalue="Learn Java Programming ";
let splitgvalue = gvalue.toLowerCase().replaceAll(" ",'');
let freq={};
for(let gchar of splitgvalue){
    freq[gchar]=(freq[gchar]||0)+1;
}
console.log(freq);
//To find the number of repeated string in a sentence"
let sent="Learn Java Programming java";
let splitsent = sent.toLowerCase().split(' ');
let freq1={};
for(let gchar1 of splitsent){
    freq1[gchar1]=(freq1[gchar1]||0)+1;
}
console.log(freq1);
// to find the no. of words in string
let para ="Learn Java Programming java";
let spara = para.split(' ');
console.log("No.of words in string :",spara.length);

// to find the given string is  palindrome
let str3="madam";
let rstr3= str3.split('').reverse().join('');
if(str3==rstr3){
    console.log("it is palindrome");
}else
console.log("Not a palindrome");

//to find given two strings are anagaram
function anagram(str4,str5){
    return str4.split('').sort().join('') === str5.split('').sort().join('');
}
console.log(anagram("vignesh","shengiv")); //True
console.log(anagram("vignesh","dhivya")); //False

//to find the vowels
let str6 = "Hello World";
let sstr6 = str6.replace(/\s/,''); // to remove unwanted spaces
let vowels = "AEIOUaeiou";
let count =0,consonants=0;
for(let char of sstr6) {
    if (vowels.includes(char)){
        count++;
    }else
    consonants++;
}console.log("No.of vowels:", count);
console.log("No.of consonants:", consonants);

//To print unqiue characters
 function unique(str){
    let unq= [ ...new Set(str)];
    return unq.join('');
 } console.log (unique("aabbcccddeeff"));

 //To remove spaces
 function rspace(str){
    return str.replace(/\s/g,'');
 }console.log(rspace("This is to check"));

 //to print each letter twice
 function ptwice(str){
    let split = str.split('');
    let result ='';
    for(let char of split){
        result += char + char;
    }return result;
 }console.log(ptwice("vignesh"));

 //to swap variables without 3rd varaibles
 function swap(str,str1){
    console.log("Before Swapping =",str,str1);
    [str,str1]=[str1,str];
// console.log("After swapping str =", str); 
// console.log("After swapping str1=", str1);
return [str,str1];
 }
 let [a, b] = swap("hello", "world");
 console.log("After Swapping: a =", a, ", b =", b);
//Output: a2b2c3d2 for the Input String Str = “aabbcccdd”
function duplttrcount(str){
    let count=1, result='';
    
    for(let i=0;i<str.length;i++){
        if(str[i]===str[i+1]){
            count++;
        }else
        {
            result+=str[i]+count;
            count=1; //resetting count
        }

    }return result;
}console.log(duplttrcount("aabbcccdd"));

//16.)	To gives two Output: “abcde”, “ABCDE” for the Input
let strmerged = "aBACbcEDed";
let sortedstr= strmerged.split('').sort().join('');
console.log(sortedstr);
let upper= sortedstr.match(/[A-Z]/g).join('');
let lower= sortedstr.match(/[a-z]/g).join('');

console.log("upper:",upper);
console.log("lower:",lower);
//--------------------------------
//using array and push method
let strmerged1 = "aBACbcEDed";
let upper1=[],lower1=[];
for(let char of strmerged1){
    if(char >='A'&& char <='Z'){
        upper1.push(char);
    }else if(char >='a'&& char <='z'){
        lower1.push(char);
    }
}console.log(upper1, lower1);


