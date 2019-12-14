"use strict";

function hasdata4(element){
     if (element.value == ""){
         window.alert("missing input");
         return false;
     }
    return true;
}

function divi()
{
    var num7 = document.getElementById("num7");
    var num8 = document.getElementById("num8");

    if (hasdata4(num7) && hasdata4(num8)){
        var n7 = Number(num7.value);

        var n8 = Number(num8.value);
    
        var sum = n7 / n8;
        document.getElementById("answer4").innerHTML = n7 + " / " + n8 + " = " + sum;
    }
}

function reset4() {
    document.getElementById("num7").value = "";
    document.getElementById("num8").value = "";
    document.getElementById("answer4").innerHTML = "";
}