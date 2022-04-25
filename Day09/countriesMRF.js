var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function (){
    var data=JSON.parse(request.response);
    
    var asianCountries=data.filter((countryData)=>{
        return countryData.region==="Asia";
    });
    //console.log("Asian countries:", asianCountries);
    console.log(`Asian countries: ${asianCountries}`);
    
    
    var population=data.filter((countries)=>{
        return countries.population<200000;
    });
    console.log("Countries data whose population is less than 200000 : ",population);



    var details=data.forEach((countryData)=>{
        console.log(`Name:${countryData.name} , Capital:${countryData.capital} , Flag:${countryData.flag}`);
    });



    var totalPopulation=data.reduce((accum,value)=>{
        return accum+value.population;
    },0);
    console.log(`Total Population : ${totalPopulation}`);



    var countriesUSD=data.filter((countryData)=>{
        var currencyList=countryData["currencies"].filter((currency)=>{
            let usdCurrencyName = "United States dollar";
            return currency.name && currency.name.toLowerCase() === usdCurrencyName.toLowerCase();
        });
        return currencyList.length ? currencyList : null;
    });
    console.log("USD Countries:", countriesUSD);




}