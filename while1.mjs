import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { get } from 'node:https';
import { log } from 'node:console';
const userInput = readline.createInterface({input, output});
let getal
let som = 0 ;

for(som ; som <= 100; som++){
    getal = parseFloat(await userInput.question('Geef een getal in: '));
    som += getal;
}
   console.log(som)
  




   