import { createInterface } from "readline/promises";
import { stdin as input, stdout as output } from "process";

async function main() {

  const sc = new createInterface({ input, output });

// tableau alphabet en une ligne
  //const alphabetMin = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));

//tableau alphabet avec une boucle for
let alphabetMin=[]
for (let i = 0; i <26; i++) {
   alphabetMin.push( String.fromCharCode(97 + i) );  
}
//table
let frequencelettre=[];
for (let i = 0; i <26; i++) {
   frequencelettre.push(0); 
}


 let valid=false;
 let text= ""
while (valid==false) {
    
text=  await sc.question("Entrer un texte d'au moin 120 caractère ! ");
if (text.length<20) {

    console.log(`Texte trop court de ${text.length} caractère.\n Veuillez recommencer !`);
    
}else{ 
    valid=true;
}
}
 console.log(text);
text= text.toLowerCase();
text=text.replaceAll(" ", "");
text=text.replaceAll('é','e');
text=text.replaceAll('è','e');
text=text.replaceAll('ê','e');
for (let i = 0; i < alphabetMin.length; i++) {
    let lettre=alphabetMin[i];
    for (let j = 0; j < text.length; j++) {
        if (text[j]==lettre) {

            frequencelettre[i]++;

        }
        
    }

    
}
//affichage du résultat
for (let i = 0; i< frequencelettre.length; i++) {

    if (frequencelettre[i]>0) {

        console.log(` la lettre ${alphabetMin[i]} est présente : ${ frequencelettre[i]} fois dans le texte saisi `);
        
    }

    }


//console.log(alphabetMin);
 
  sc.close();

}
await main();
