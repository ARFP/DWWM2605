import { createInterface } from "readline/promises";
import { stdin as input, stdout as output } from "process";

async function main() {

  const sc = new createInterface({ input, output });
let phrase1="";

let nbessai=0;
  do {
    
    if(nbessai>0){
    console.log("Vous avez oubliez le point !!");
  }

    phrase1= await sc.question(" Veuillez saisir une phrase terminé par un point! :");
    nbessai++
  } while (phrase1[(phrase1.length)-1]!=".");
  
  //phrase1='ET LA MARINE VA VENIR A MALTE.';
  let phrase= phrase1.slice(0,-1);
  phrase=phrase.toLowerCase();
  phrase=phrase.replaceAll(' ','');
  let tabPhrase= [...phrase];
  let phraseinverse= (tabPhrase.reverse()).join("");
  //console.log(phrase);
 // console.log(phraseinverse);
  if (phrase===phraseinverse) {

    console.log(`La phrase saisie : ${phrase1} est un palindrome !!`);
    
  } else {
      console.log(`La phrase saisie : ${phrase1} n'est pas un palindrome !!`);
  }
  sc.close();
}

await main(); 

