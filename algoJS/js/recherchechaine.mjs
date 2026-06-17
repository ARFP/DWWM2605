import { createInterface } from "readline/promises";
import { stdin as input, stdout as output } from "process";
async function main() {
  const sc = new createInterface({ input, output });

  var phrase = "";
  var essai = 0;
  do {
    if (essai > 0) {
      console.log("N'oubliez pas le point !!");
    }
    phrase = await sc.question(
      "veuillez saisir une phrase qui se termine par un point!!",
    );
    essai++;
  } while (phrase.substring(phrase.length - 1) != ".");

  let regex=/^[\.]+$/
  if (phrase == "."  || regex.test(phrase)) {
    console.log("La chaine est  vide !");
  } else {
    let tablettre=[...phrase];

    phrase = phrase.toLowerCase();

    let tablettre2 = phrase.split("");
    let dernierChar = tablettre2.pop();

    console.log("[ " + tablettre2 + " ]");
    console.log(dernierChar);
    let lettre = await sc.question(
      "Veuillez saisir un caractère alphabétique sans accent !",
    );
    let frequence = 0;

    lettre = lettre.toLowerCase();
    for (let i = 0; i < tablettre2.length; i++) {
      if (tablettre2[i] === lettre) {
        frequence++;
      }
    }
    if (frequence == 0) {
      console.log(`La lettre ${lettre}  n'est pas présente dnas le mot !!`);
    } else {
      console.log(
        `la lettre ${lettre} est présente : ${frequence} fois dans le mot !! ${phrase}`,
      );
    }
  }
  sc.close();
}
await main();
