import { createInterface } from "readline/promises";
import { stdin as input, stdout as output } from "process";
async function main() {
  const sc = new createInterface({ input, output });
  var tabPopulation = [];
  let age = 0;
  for (let i = 0; i < 20; i++) {
    let essai = 0;
    do {
      if (essai > 0) {
        console.log(
          "Erreur l\'age doit être un nombre entier entre 1 et 120 !",
        );
      }
      age = parseInt(
        await sc.question(
          "Veuillez saisir l'age de la personne N° " + (i + 1) + ":",
        ),
      );
      essai++;
    } while (isNaN(age) == true || age < 1 || age > 120);

    tabPopulation.push(age);
  }
  //test population de plus de 20 ans ou moins de 20ans.
  let nbjeune = 0;
  for (let i = 0; i < tabPopulation.length; i++) {
    if (tabPopulation[i] < 20) {
      nbjeune++;
    }
  }
  // conclusion
  if (nbjeune == 0) {
    console.log("TOUTES LES PERSONNES ONT 20 ANS ou plus");
  } else if (nbjeune == tabPopulation.length) {
    console.log("TOUTES LES PERSONNES ONT MOINS DE 20 ANS");
  } else {
    console.log(` - de 20 : ${nbjeune} , + = à 20 : ${20 - nbjeune} ).`);
  }

  sc.close();
}

main();
