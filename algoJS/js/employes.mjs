import { createInterface } from "readline/promises";
import { stdin as input, stdout as output } from "process";
import { readFile } from "fs/promises";
async function main() {


  const texteBrut = await readFile("./modele.json", "utf-8");

  // 2. On transforme ce texte en un véritable tableau d'objets littéraux JS
  const mesdata = JSON.parse(texteBrut);

  // 3. Utilisation du tableau
   console.table( mesdata["data"]);
  let tabemployes = mesdata.data;
  //console.log(tabemployes);

  for (let i = 0; i < tabemployes.length; i++) {
    let objetemp = tabemployes[i];
    objetemp["mail"] = creerMail(tabemployes[i]);
    objetemp["employee_salary"]=Math.round( tabemployes[i].employee_salary/12);
    objetemp["birthday"]= (new Date().getFullYear())-tabemployes[i].employee_age
 
  }

  console.log(tabemployes);

  const sc = new createInterface({ input, output });
  sc.close();
}

function creerMail(obj) {
  let chainemail = "";
  let chainenom = obj["employee_name"];
  let tabnom = chainenom.split(" ");
  chainemail += tabnom[0].substring(0, 1) +"."+ tabnom[1] + "@email.com";
  return chainemail.toLowerCase();
}

main();
