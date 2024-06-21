#! /usr/bin/env node

import { differenceInSeconds } from "date-fns";
import inquirer from "inquirer"


const res = await inquirer.prompt(
    {
        name: "number",
        type: "number",
        message: "Enter a number:",
        validate: (input) => {
            if (isNaN(input)){
                return "Please enter a valid number";
                } else if (input > 60){
                    return "Please enter number between 1 TO 60";
                }
                else {
                    return (true);
                }
            
        }
    }
)
let input = (res.number);
function startTime(val: number){
    const initTime = new Date().setSeconds(new Date(). getSeconds()+ val);
    const intervalTime = new Date (initTime);
    setInterval((() => 
        {
            const currentTime = new Date();
            const timeDiff = differenceInSeconds(intervalTime, currentTime);
            if (timeDiff <= 0){
                console.log("Timer has expired");
                process.exit();
            }
            const min = Math.floor((timeDiff%(3600/24))/3600);
            const sec = Math.floor(timeDiff%60);
            console.log(`${min.toString().padStart(2, "0")} : ${sec.toString().padStart(2, "0")}`);
        }
),1000)
        
}
startTime(input);