import { createInterface } from "readline/promises";
import { stdin as input, stdout as output } from "process";
async function main() {
  const sc = new createInterface({ input, output });
  let tabPopulation = [];
    let age = 0;
    for (let i = 0; i < 20; i++) {
      essai = 0;
      do {
        if (essai > 0) {
          console.log(
            "Erreur l\'age doit être un nombre entier entre 1 et 120 !"
          );
        }
        age = parseInt(await sc.question("Veuillez saisir l'age de la personne numero: "));
        essai++;
      } while (isNaN(age) || age <= 0 || age > 120);

   tabPopulation.push();}

    console.table(tabPopulation);
  sc.close();
}
await main
