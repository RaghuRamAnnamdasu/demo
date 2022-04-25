//Programming using Annonymous funstions


// 1) Print Odd numbers in an array
// Answer
var arr=[2,5,4,9,7,6,13,17,18];
var oddList=[];
var odd = function(array){
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
var titleCaps = function(array){
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
var summation = function(array){
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

var prime = function(number){
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
var palindrome = function(num){
    var temp=num.toString().split("");
    temp.reverse();
    temp=temp.join("");
    console.log(number, number===+temp ? "is a palindrome" : "is not a palindrome")
};
palindrome(number);



//6) Median of two arrays
//Answer
var array1=[1,4,5,7];
var array2=[5,8,9,13];
var median = function(arr1,arr2){
    var arr3=arr1.concat(arr2);
    arr3=arr3.sort((a,b) => a-b);
    var length=arr3.length;
    if(length%2===0){
        console.log("medain =",0.5*(arr3[length/2]+arr3[(length/2)-1]));
    }else{
        console.log("medain =",arr3[(length-1)/2]);
    }
};
median(array1,array2);



//7) Remove duplicates feom an array
//Answer
var array = [1,2,3,1,3,5];
var removeDuplicates = function(arr){
    var temp=[];
    for(var i=0;i<arr.length;i++){
        if(!temp.includes(arr[i])){
            temp.push(arr[i]);
        }
    }
    return temp;
};
console.log("Array after removing Duplicates = ",removeDuplicates(array));



//8) Rotate an array k times
//Answer
var array=[1,2,3,4];
var numOfRotations=3;
var rotation = function(arr,n){
    for(var i=0;i<n;i++){
        arr.reverse();
    }
    console.log("rotated array after",n,"times = ",arr);
};
rotation(array,numOfRotations);




