let form = document.forms["formulari"];

let boto = document.getElementById("boto");

boto.addEventListener("click",comprovaExpressio,false);

function comprovaExpressio(evt){
    evt.preventDefault();
    let expressio = new RegExp(form["expressio"].value);
    let prova = form["prova"].value;
    let resultat = document.getElementById("resultat");
    if(expressio.test(prova)){
        resultat.innerHTML="L'expressió funciona correctament";
        resultat.style.color = "white";
        resultat.style.backgroundColor = "green";
    } else {
        resultat.innerHTML="Comprova l'expressió"
        resultat.style.color = "white";
        resultat.style.backgroundColor = "red";
    }
  
}

