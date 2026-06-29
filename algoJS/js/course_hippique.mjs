import { createInterface } from "readline/promises";
import { stdin as input, stdout as output } from "process";

async function main() {
  const sc = new createInterface({ input, output });

  let nbpartant = parseInt(
    await sc.question(
      "Veuillez saisir le nombre exact de chevaux partant pour la course du quinté+ dans la 4ème Reunion !! :",
    ),
  );

  console.log(
    "recherche du nbre d'arrangements de 3 chevaux parmi le nombre de chevaux partant //tiercé dans l'ordre//",
  );

  let numerateur = calculFactorielle(nbpartant);
  let denominateur = nbpartant - 3;
  denominateur = calculFactorielle(denominateur);

  let nbtierce = Math.round(numerateur / denominateur);
  console.log(
    "vous avez une chance de gagner le tiercé dans l'ordre sur :" +
      nbtierce +
      "\n",
  );
  console.log(
    "-----------------------------------\n Recherche du nbre de combinaisons de 3 chevaux parmi le nombre de chevaux partant (saisi par l'utilisateur) //Tierce dans le désordre //",
  );
  let numerateurtierce = calculFactorielle(nbpartant);
  let denominateurpart1 = nbpartant - 3;
  denominateurpart1 = calculFactorielle(denominateurpart1);
  let denominateurpart2 = calculFactorielle(3);

  let combinaisonTierce = Math.round(
    numerateurtierce / (denominateurpart1 * denominateurpart2),
  );
  console.log(
    "vous avez une chance de gagner le tiercé dans le désordre sur :" +
      combinaisonTierce,
  );

  console.log("----------------------quarté------------------");
  console.log(
    "Recherche du nbre d'arrangements de 4 chevaux parmi le nombre de chevaux partant //quarté dans l'ordre//",
  );

  let numerateurquarte = calculFactorielle(nbpartant);
  let denominateurquarte = nbpartant - 4;
  denominateurquarte = calculFactorielle(denominateurquarte);

  let nbquarte = Math.round(numerateurquarte / denominateurquarte);
  console.log(
    "vous avez une chance de gagner le quarté dans l'ordre sur :" +
      nbquarte +
      "\n",
  );
  console.log(
    "-----------------------------------\n Recherche du nbre de combinaisons de 4 chevaux parmi le nombre de chevaux partant (saisi par l'utilisateur) //quarté dans le désordre //",
  );
  numerateurquarte = calculFactorielle(nbpartant);
  let denominateurpart1quarte = nbpartant - 4;
  denominateurpart1quarte = calculFactorielle(denominateurpart1quarte);
  let denominateurpart2quarte = calculFactorielle(4);

  let combinaisonquarte = Math.round(
    numerateurquarte / (denominateurpart1quarte * denominateurpart2quarte),
  );
  console.log(
    "vous avez une chance de gagner le quarté dans le désordre sur :" +
      combinaisonquarte,
  );

  console.log("----------------------Quinté +------------------");

  console.log(
    "recherche du nbre d'arrangements de 5 chevaux parmi le nombre de chevaux partant //quinté + dans l'ordre//",
  );

  let numerateurquinte = calculFactorielle(nbpartant);
  let denominateurquinte = nbpartant - 5;
  denominateurquinte = calculFactorielle(denominateurquinte);

  let nbquinte = Math.round(numerateurquinte / denominateurquinte);
  console.log(
    "vous avez une chance de gagner le quinté+ dans l'ordre sur :" +
      nbquinte +
      "\n",
  );
  console.log("-----------------------------------");
  console.log(
    "Recherche du nbre de combinaisons de 5 chevaux parmi le nombre de chevaux partant (saisi par l'utilisateur) // le quinté dans le désordre //",
  );
  //  numerateurquinte= calculFactorielle(nbpartant);
  let denominateurpart1quinte = nbpartant - 5;
  denominateurpart1quinte = calculFactorielle(denominateurpart1quinte);
  let denominateurpart2quinte = calculFactorielle(5);

  let combinaisonquinte = Math.round(
    numerateurquinte / (denominateurpart1quinte * denominateurpart2quinte),
  );
  console.log(
    "Vous avez une chance de gagner le quinté dans le désordre sur :" +
      combinaisonquinte,
  );

  sc.close();
}

function calculFactorielle(nombreEntier) {
  if (nombreEntier > 1) {
    return nombreEntier * calculFactorielle(nombreEntier - 1);
  } else {
    return 1;
  }
}
await main();
