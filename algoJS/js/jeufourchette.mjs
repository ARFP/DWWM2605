import { createInterface } from "readline/promises";
import { stdin as input, stdout as output } from "process";

async function main() {
  const sc = createInterface({ input, output });
  let NbRandom = Math.floor(Math.random() * 100) + 1;
  let Nbchoisi = "";

  let min = 0;
  let max = 100;

  var nbessai = 0;

  do {
    Nbchoisi = parseInt(
      await sc.question(`choisir un nombre compris entre ${min} et ${max} : `),
    );
    if (isNaN(Nbchoisi)) {
      console.log("erreur veuillez saisir un nombre");
    } else {
      if (Nbchoisi < min || Nbchoisi > max) {
        console.log(
          `vous êtes en dehors de la plage de recherche pour rappel entre ${min} et ${max}`,
        );
      } else {
        if (Nbchoisi > NbRandom) {
          console.log("c'est moins ! vous perdez un essai! ");
          max = Nbchoisi;
        } else if (Nbchoisi < NbRandom) {
          console.log("C'est plus ! vous perdez un essai!");
          min = Nbchoisi;
        } else {
          console.log(
            "Bravo  !!vous avez trouvez le nombre recherché est :" + Nbchoisi,
          );
        }
      }
    }

    nbessai++;
  } while (Nbchoisi != NbRandom);

  console.log(
    "Vous avez trouvez le nombre recherché en :" + nbessai + " essais ",
  );
  sc.close();
}

await main();
