import { createInterface } from "readline/promises";
import { stdin as input, stdout as output } from "process";
async function main() {
  // 1. On configure l'interface de lecture (entrée/sortie)
  const sc = new createInterface({ input, output });

let S =parseFloat( await sc.question("Quel montant S voulez-vous placer ?"));

const taux= 0.0345;

let nbannee=parseInt( await sc.question(" Combien d'année vous placez cette somme?")); 
let choix =await sc.question("voulez placer à intérêt simple IS ou intérêt composé IC ?");

let VA=S;

if (choix.toUpperCase()=="IS") {
    
VA=Math.round(S*(1+ nbannee*taux), 2);

console.log(` ✅La valeur acquise au bout de ${nbannee} sera de : ${VA.toFixed(2)} €`);

} 

else if( choix.toUpperCase()=="IC") {
  VA= S*(1+taux)**nbannee;
  //VA= S*Math.pow(1+taux, nbannee),2;  
console.log(` ✅La valeur acquise au bout de ${nbannee} sera de : ${VA.toFixed(2)} €`);    
} else {

console.log(`❌ Choix de placement erroné !!!  VA inchangé ${VA} €`);
}


  sc.close();
}

await main();