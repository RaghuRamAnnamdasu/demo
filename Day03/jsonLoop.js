//objective of the program is to iterate through JSON using for, for-in, for-of and forEach loop
//considering JSON considering an array for this purpose
var resume = {
    "Name": "Raghu Ram Annamdasu",
    "Email Id": "annamdasuraghuram@gmail.com",
    "Phone Number": "7382481437",
    "Education": [
        {
            "Degree": "10th", 
            "Year of passing": "2008", 
            "Course": "NA",
            "Percentage": "91.2", 
            "College": "KPR & JL Sidhartha High School" 
        },
        {
            "Degree": "12th", 
            "Year of passing": "2010", 
            "Course": "M.P.C", 
            "Percentage": "96.1", 
            "College": "KPR & JL Sidhartha Junior College"
        },
        {
            "Degree": "B.E", 
            "Year of passing": "2014", 
            "Course": "EEE",
            "Percentage": "92", 
            "College": "Sir CRR College Of Engineering"
        },
        {
            "Degree": "M.Tech", 
            "Year of passing": "2017", 
            "Course": "Power Systems Engineering", 
            "Percentage": "91", 
            "College": "IIT-Dhandbad"
        }
    ]
}
//Method-01: Using for loop
for(var i=0;i<resume["Education"].length;i++){
    console.log(resume["Education"][i],typeof(resume["Education"][i]));    //To print all the elements in the array resume["Education"]
}

//Method-02: Using for-in loop
for(var i in resume["Education"][0]){
    console.log(i,typeof(i));                                        //Prints the keys of the JSON resume["Education"][0]
}

//Method-03: Using for-of loop
for (var i of resume["Education"]){                          
    console.log(i);                                        //Prints all the elements in the array resume["Education"]
}

//Method-04: Using forEach loop
resume["Education"].forEach(functionValue);
function functionValue(value,index,array){
    console.log(value);                                     //Prints all the elements in the array resume["Education"]
}