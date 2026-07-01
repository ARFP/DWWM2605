import { createInterface } from "readline/promises";
import { stdin as input, stdout as output } from "process";
import { table } from "console";

async function main() {
  const sc = new createInterface({ input, output });
  let motjoueur1 = await sc.question(
    "Veuillez entrer un nom commun à rechercher !!",
  );

  console.clear();
  motjoueur1 = motjoueur1.toLowerCase();
  let textepropre = motjoueur1.replaceAll(/[éèêë]/g, "e");

  let tabmotjoueur = [...textepropre];

  for (let i = 1; i < tabmotjoueur.length - 1; i++) {
    tabmotjoueur[i] = "-";
  }
  console.log(" le mot à deviner est le suivant \n ");
  console.log(afficherTableau(tabmotjoueur));
  //console.table(tabmotjoueur);
  //console.clear();

  let trouve = false;
  let essai = 0;
  let lettre = "";
  do {
    lettre = await sc.question(
      "Veuillez choisir une lettre qui compose le mot ou pas !!",
    );
    if (trouveLettre(tabmotjoueur, lettre, textepropre) == false) {
      essai++;
      if (6 - essai > 0) {
        console.log(
          "Il ne vous reste plus que : " + (6 - essai) + " coup(s) à jouer !!",
        );
      }
    } else {
      // console.log(tabmotjoueur);
      trouve = true;
      for (let i = 1; i < tabmotjoueur.length - 1; i++) {
        if (tabmotjoueur[i] == "-") {
          trouve = false;
        }
      }
    }
  } while (essai < 6 && trouve == false);
  if (trouve == true) {
    let chainemot = tabmotjoueur.join("");
    console.log(
      `Bravo !! Vous avez gagné et trouvé le mot qui était : ${chainemot} en ${essai} erreur(s)  !!`,
    );
  } else {
    console.log(
      "Vous avez dépassé le nombre d'essais requis pour deviner le mot (6 erreurs maxi !) vous êtes pendu !!",
    );
    console.log("vous pouvez rejouer une partie avec un autre mot deviner !");
  }

  sc.close();
}

function trouveLettre(_tabmotjoueur, lettre, mot) {
  let win = false;
  for (let i = 1; i < mot.length - 1; i++) {
    if (lettre == mot[i]) {
      _tabmotjoueur[i] = lettre;
      win = true;
    }
  }
  console.log(afficherTableau(_tabmotjoueur));
  return win;
}
function afficherTableau(_montab) {
  let tabaffichage = "[";
  for (const el of _montab) {
    tabaffichage += el + " ,";
  }
  tabaffichage = tabaffichage.substring(0, tabaffichage.length - 1);
  tabaffichage += "]";
  return tabaffichage;
}
await main();
