"use strict";

function hasdata3(element){
     if (element.value == ""){
         window.alert("missing input");
         return false;
     }
    return true;
}

function multi()
{
    var num5 = document.getElementById("num5");
    var num6 = document.getElementById("num6");

    if (hasdata3(num5) && hasdata3(num6)){
        var n5 = Number(num5.value);

        var n6 = Number(num6.value);
    
        var sum = n5 * n6;
        document.getElementById("answer3").innerHTML = n5 + " * " + n6 + " = " + sum;
    }
}

function reset3() {
    document.getElementById("num5").value = "";
    document.getElementById("num6").value = "";
    document.getElementById("answer3").innerHTML = "";
}