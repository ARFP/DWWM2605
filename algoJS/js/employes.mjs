import { createInterface } from "readline/promises";
import { stdin as input, stdout as output } from "process";
import { readFile } from 'fs/promises';
async function main() {
const texteBrut = await readFile('./employes.json', 'utf-8');
        
        // 2. On transforme ce texte en un véritable tableau d'objets littéraux JS
        const mesdata = JSON.parse(texteBrut);
        
        // 3. Utilisation du tableau
       // console.table( mesdata["data"]);
        let tabemployes= mesdata["data"];
        for (let i = 0; i < tabemployes.length; i++) {
            let objetemp= tabemployes[i];
            objetemp["mail"]=creerMail(tabemployes[i]);
            console.log(objetemp);
        }

const sc = new createInterface({ input, output });
sc.close();
}
function creerMail( obj)
{
let chainemail='';
let chainenom= obj["employee_name"];
let tabnom=chainenom.split(' ');
chainemail+=tabnom[0].substring(0,1)+tabnom[1]+ "@gmail.com";
return chainemail.toLowerCase(); 

}


main();