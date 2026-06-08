import { createInterface } from "readline/promises";
import { stdin as input, stdout as output } from "process";
async function main() {
  // 1. On configure l'interface de lecture (entrée/sortie)
  const sc = new createInterface({ input, output });

  // 2. On pose la question et on récupère la saisie dans une variable
 /* let A = parseInt(
    await sc.question("Veuillez saisir une année sur quatres chiffres"),
  );*/
  let A = Number( await sc.question('Veuillez saisir une année sur quatres chiffres'));

  if (A % 4 == 0) {
    if (A % 100 == 0) {
      if (A % 400 == 0) {
        console.log(A + " est bissextile !");
      } else {
        console.log(A + " n'est pas bissextile!");
      }
    } else {
      console.log(A + " est bissextile !");
    }
  } else {
    console.log(A + " n'est pas bissextile!");
    console.log(`version 2 ${A} n'est pas bissextile !`);
  }

  // 4. TRÈS IMPORTANT : On ferme l'interface pour rendre la main au terminal
  sc.close();
}
await main();
