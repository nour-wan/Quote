let myDiv=document.getElementById("div");
let myBtn=document.getElementById("btn");


let myQuote=document.getElementById("Quote");
let saider=document.getElementById("saidBy");

var arrOfQuote=["Don't live the same year 75 times and call it a life.","It is hard to fail,but it is worse never to have triednto succeed."];
var arrOfSaider=["Robin Sharma","Theodore Roosevet"];

var i=0;
var j=0;

myBtn.onclick=function(){
    myQuote.textContent ='"'+ arrOfQuote[i];
    saider.textContent=arrOfSaider[i];
    i++;
    j++;
    if (i==(arrOfQuote.length)){
        i=0;
    };
    if (i==(arrOfSaider.length)){
        j=0;
    };
};


