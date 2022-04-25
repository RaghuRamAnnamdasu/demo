   /* var res = [];
    var ele=0;
    function foo(arr,n){
        if(n !== undefined && n<0){
            return arr[0];
        } else if(n===undefined) {
            
            return arr[0];
        } else{
            for(var i=0;i<=n;i++){
                res.push(arr[i]);
            }
            return res;
        }
         
    }
    var arr = [7,9,0,-2];
    var n = -2;
    console.log(foo(arr,n));*/

  
    /*function foo(arr,n){
        if(n == undefined){
            return arr.slice(-1);
        } 
        return arr.slice(-n);   
    }
    console.log(foo([7,9,0,-2],3));*/

   /* //to print all numbers between given two numbers
    var output=[];
    function step(a,b){
        for(var i=a;i<=b;i++){
            output.push(i);
           
        }
        return output;
    }
    console.log(step(-2,7));*/

   /*//to print highest occured element and its count
    var arr=[3,'q','q','q',2,3,'q',3,'q',2,4,9,3,3,3,3];
    var temp={};
    for(i=0;i<arr.length;i++){
        if(temp[arr[i]]){
            temp[arr[i]]=temp[arr[i]]+1;
        } else{
            temp[arr[i]]=1;
        }
    }
    console.log(temp);
    var a=Object.keys(temp);
    var key='';
    var count=0;
    for(var i=0;i<a.length;i++){
        if(temp[a[i]]>count){
            key=a[i];
            count=temp[a[i]];
        }
    }
    console.log(key,count," times");*/

    /*//alternate for above problem
    var arr1=[3,'q','q','q',3,'q',3,'q',3];
    var minocc=1;
    var count=0;
    var ele;
    for(var i=0;i<arr1.length;i++){
    for(var j=i;j<arr1.length;j++){
    if(arr1[i]==arr1[j]){
    count++;
    }
    if(minocc<count){
    minocc=count;
    ele=arr1[i];
    }
    }
    count=0;
    }
    console.log(` element ${ele} occurred ${minocc}`);*/

    const num=2;
    {
        const num=3;
        console.log(num);
    }
    console.log(num);