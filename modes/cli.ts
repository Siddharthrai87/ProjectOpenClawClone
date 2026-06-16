import chalk from "chalk";
import {select,isCancel} from "@clack/prompts";


export async function runCliMode(){
    while(true){
        const mode=await select({
            message:"choose CLI sub-mode",
            options:[
                {value: "agent", label: "Agent Mode"},
                {value: "plan", label: "Plant Mode"},
                {value: "ask", label: "Ask Mode"},
                {value: "back", label: "Back to main menu"},
            ]
        });
        if(isCancel(mode)||mode==="back")return;
        if(mode==="agent"){
            console.log("agent");
        }
        else if(mode==="plan"){
            console.log("plan");
        }
        else if(mode==="ask"){
            console.log("ask");
        }
        else{
            console.log(chalk.yellow('\n That mode is not implemented yet.\n'));
        }
    }
}