import { createInterface } from "readline/promises";
import { stdin as input, stdout as output } from "process";
var stgobelet=5;
async function main() {
const sc=createInterface({input,output});
let sommeIntroduite=0;
if (stgobelet!=0) {
let choix=await sc.question("veuillez choisir votre boisson !");
let prix =1.5; 
while(sommeIntroduite<prix )
{ console.log("inserer monnaie");
let piece= parseFloat(await sc.question("montant pièce introduite?"));
sommeIntroduite+=piece;
}
if (sommeIntroduite>prix) {
let rendu= sommeIntroduite-prix;
console.log(`monnaie à rendre :${rendu}`);
}
console.log("verser gobelet");
stgobelet--;
console.log("preparer boisson");
console.log(`stock gobelet: ${stgobelet}`);
console.log("Merci de votre visite !! ");

    
} else {
    console.log("machine insdiponible");
}
sc.close();
}
await main()
