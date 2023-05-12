const { filter } = require("rxjs");

document.getElementById("inputSearch")
function buscador_interno(){


    filter= inputSearch.value.toUpperCase();
    li=box_search.getElemtsByTagName("li");


    //recoriendo elementos a filtar mediante los "li"
    
    for (i = 0; i < li.length; i++){

        a = li[i].getElemtsByTagName("a") [0];
        textValue = a.textContent || a.innerText;

        if(textValue.toUpperCase().indexOf(filter) > -1){

            li[i].style.display = "";
            box_search.style.display = "block";
        
            if(inputSearch.value === ""){
                box_search.style.display ="block"

            }
        }
        else{
            li[i].style.display = "none";

        }
    }
}