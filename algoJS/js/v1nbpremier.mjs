import { createInterface } from "readline/promises";
import { stdin as input, stdout as output } from "process";
async function main() {
  // 1. On configure l'interface de lecture (entrée/sortie)
  const sc = new createInterface({ input, output });
  var compteur = 0;
  let nb='';
  do {
    if (compteur > 0) {
      console.log("❌ Erreur : ce n'est pas un nombre entier positif! ");
    }
    compteur++;
    nb = parseInt(
      await sc.question(" veuillez saisir un nombre entier positif"),
    );
  } while (isNaN(nb) || nb<0);
   let diviseur=2;
   while (nb%diviseur!=0 && diviseur<nb) {
  diviseur++;  
   }

   if (diviseur<nb) {
     console.log(`❌ Le nombre : ${nb} n'est pas premier`);
   }else
   {

 console.log(` ✅ Bravo ! Le nombre : ${nb} est premier`);
   }
 // console.log("\n" + nb);

  sc.close();
}
await main();
