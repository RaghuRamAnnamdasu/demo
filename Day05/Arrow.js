//Programming using Arrow funstions


// 1) Print Odd numbers in an array
// Answer
var arr=[2,5,4,9,7,6,13,17,18];
var oddList=[];
var odd = (array)=>{
    array.forEach((value)=>{
        if(value%2 !== 0) 
        oddList.push(value);
    });
    return oddList;
};

console.log("Odd array =", odd(arr)); 



// 2) Convert all the strings to title caps in a string array
//Answer
var arr=["raghu","pravi","sudhee","sandhee"];
var caps=[];
var titleCaps = (array)=>{
    array.forEach((value)=>{
        caps.push(value.toUpperCase());
    });
    return caps;
};
console.log("Upper case array =", titleCaps(arr));



//3) Sum of all the numbers in an array
//Answer
var arr=[1,2,4,6,2,9];
var sum=0;
var summation = (array)=>{
    array.forEach((value)=>{ 
        sum=sum+value;
    });
    return sum;
};
console.log(`Sum of elements = ${summation(arr)}`);


//4) check for prime number
//Answer
var number = -2;
var isPrime=true;

var prime = (number)=>{
    if(number===1)
    console.log(number," is neither prime nor composite");
    for(var i=2;i<number;i++){
        if(number%i === 0)
        isPrime = false;
    }
    if(number<1 || !isPrime ) {
        console.log(number," is not a prime number");
    } else if(isPrime) {
        console.log(number," is a prime number");
    }
};

prime(number);



//5) check for palindrome number
//Answer
var number=141;
var palindrome = (num)=>{
    var temp=num.toString().split("");
    temp.reverse();
    temp=temp.join("");
    console.log(number, number===+temp ? "is a palindrome" : "is not a palindrome")
};
palindrome(number);