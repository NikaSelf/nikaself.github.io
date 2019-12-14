"use strict";

function hasdata2(element){
     if (element.value == ""){
         window.alert("missing input");
         return false;
     }
    return true;
}

function sub()
{
    var num3 = document.getElementById("num3");
    var num4 = document.getElementById("num4");

    if (hasdata2(num3) && hasdata2(num4)){
        var n3 = Number(num3.value);

        var n4 = Number(num4.value);
    
        var sum = n3 - n4;
        document.getElementById("answer2").innerHTML = n3 + " - " + n4 + " = " + sum;
    }
}

function reset2() {
    document.getElementById("num3").value = "";
    document.getElementById("num4").value = "";
    document.getElementById("answer2").innerHTML = "";
}

