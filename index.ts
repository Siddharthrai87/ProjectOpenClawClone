#!/usr/bin/env bun
/* 
this is shebang it tells that it is being run by bun.
using this reduce bun index.ts wakeup to projectopenclawclone wakeup
but we are required to create a bin that will create a terminal of command named projectopenclawclone and when someone runs it it execute
./index.ts

bun link :- register the project globally as a cli tool if not link it will work only in project
 */
 import { Command } from "commander";
import { runwakeup } from "./tui/wakeup";

 const program = new Command();

 program
    .name("TerminalAI")
    .description("Sid codeClaw project")
    .version("0.0.1");

program.command("wakeup")
       .description("show the banner and pick cli or telgram mode")
       .action(
         async()=>{
            await runwakeup()
         }
       );
await program.parseAsync(process.argv)
