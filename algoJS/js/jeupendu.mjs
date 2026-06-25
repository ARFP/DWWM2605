import { createInterface } from "readline/promises";
import { stdin as input, stdout as output } from "process";

async function main() {
let tabmotjoueur=[];
  const sc = new createInterface({ input, output });
let motjoueur1= await sc.question("Veuillez entrer un nom commun à rechercher !!");
 tabmotjoueur= [...motjoueur1];
for (let i = 1; i < tabmotjoueur.length-1; i++) {
   
   tabmotjoueur[i]='-'; 
}
console.clear();

console.log(" le mot à deviner est le suivant \n ");
console.log(tabmotjoueur);
sc.close();
}

await main();