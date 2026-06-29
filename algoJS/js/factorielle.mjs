import { createInterface } from "readline/promises";
import { stdin as input, stdout as output } from "process";

async function main() {

    const sc = new createInterface({ input, output });

    let nbTest= parseInt( await sc.question("Veuillez saisir un nombre entier positif <100 !!: "));
    // application de la fonction factorielle
    let result= calculFactorielle(nbTest);
    
    console.log(` le nombre ${nbTest} passé en argument de la fonction factorielle donnera : ${result} `);
    
    sc.close();
}
//une fonction récursive est une fonction qui s'appelle elle-même jusqu'à une limite ici nombreEntier>1.  
function calculFactorielle( nombreEntier)
{
if (nombreEntier>1) {
     return nombreEntier * calculFactorielle(nombreEntier - 1);
} else {
    return 1
}

}

await main();