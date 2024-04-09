let hiddenDiv = document.querySelector(".hiddenDiv");
let hiddenDivChild = document.querySelector(".hiddenDivChild");
let menu =document.querySelector(".menu");

let var2 =true ;

menu.addEventListener("click" , ()=>{


    if ( var2 === true ){

        hiddenDiv.style.display = "block";
        
        
        hiddenDivChild.style.display ="flex";

        var2=false ;

    }

    else{

        hiddenDiv.style.display = "none";
        
        hiddenDivChild.style.display = "none";
        

        var2=true  ;

    }

});