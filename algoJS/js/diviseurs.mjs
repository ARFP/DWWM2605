import { createInterface } from "readline/promises";
import { stdin as input, stdout as output } from "process";
async function main() {
  // 1. On configure l'interface de lecture (entrée/sortie)
  const sc = new createInterface({ input, output });
  let number = parseInt(
    await sc.question(" entrer un nombre entier positif >1 !"),
  );
  let nbdiviseurs = 0;
  let tabnumber = [];
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      tabnumber.push(i);
      nbdiviseurs++;
    }
  }
  let initialValue = 0;
  // const sumWithInitial = array1.reduce(
  //   (accumulator, currentValue) => accumulator + currentValue,
  //   initialValue,
  // );

  const sommeD = tabnumber.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
  );
  var sommetest = 0;
  // for (let i = 0; i < tabnumber.length; i++) {
  //     sommetest+=tabnumber[i];

  // }
  tabnumber.forEach((e) => {
    sommetest += e;
  });

  
  if (nbdiviseurs == 0) {
    console.log("Le nombre :" + number + " est premier !");
  } else {
    console.log(`Les diviseurs du nombre ${number} sont : ${tabnumber}`);
    console.log(number + " est divisible  par " + nbdiviseurs + " diviseurs");
    console.log(`la somme des diviseurs est :${sommeD}`);
    console.log(`la somme des diviseurs est :${sommetest}`);
  }

  sc.close();
}
await main();
