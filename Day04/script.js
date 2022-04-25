//4 steps involved here
//step 01: create a XHR object
//need: this will create a new object which will have
//the interaction with servers via api
var request=new XMLHttpRequest();
//step 02: opening a request
//takes two parameters: "HTTP method","API URL"
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
//step 03: sending a request
request.send();
//step 04: once data is successfully loaded from server
//or status code is 200
request.onload=function(){ //onload is an event handler
//data from client to server is in the form of a string
//we need to convert to object/JSON by using JSON.parse()
var data=JSON.parse(request.response);
console.log(data);
/*for(var i=0;i<data.length;i++){
    console.log(data[i].name+" "+data[i].capital);
}*/
for(var i=0;i<data.length;i++){
    console.log(data[i].flag);
}
}
