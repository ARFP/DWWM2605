import { createInterface } from "readline/promises";
import { stdin as input, stdout as output } from "process";
async function main() {
  const sc = new createInterface({ input, output });

  let reponse = await sc.question("Est-ce qu'il fera beau demain? o/n");
  reponse = reponse.toLowerCase();
  if (reponse == "o") {
    console.log("Je prends mon vélo");
    reponse = await sc.question("Est-ce que le vélo est en bon état? o/n");
    if (reponse.toLowerCase() == "o") {
      console.log("Promenade en vélo");
    } else {
      console.log("j\emmène le vélo chez le garagiste");
      reponse = await sc.question("réparation immédiate ? 0/n");
      if (reponse.toLowerCase() == "o") {
        console.log("je fais réparer le vélo \n et promenade en vélo");
      } else {
        console.log("je me balade à pied à l'etang et je cueille des joncs !");
      }
    }
  } else {
    console.log("je consacre ma journée à la lecture");

    reponse = await sc.question(
      "Est-ce que j'ai mon livre Game of Trone ? o/n",
    );
    if (reponse.toLowerCase() == "o") {
      console.log(
        "je m'installe chez moi dans mon fauteuil et je lis le livre!!",
      );
    } else {
      console.log("Je vais à la bibliothèque !");
      reponse = await sc.question("Y a-t-il Game of Trone ? o/n");
      if (reponse.toLowerCase() == "o") {
        console.log("J'emprunte le livre \n Je rentre à mon domicile");
        console.log(
          "je m'installe chez moi dans mon fauteuil et je lis le livre!!",
        );
      } else {
        console.log("J'emprunte un roman policier \n Je rentre à mon domicile");
        console.log(
          "je m'installe chez moi dans mon fauteuil et je lis le livre!!",
        );
      }
    }
  }

  sc.close();
}

main();
