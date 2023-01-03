import * as fs from "node:fs"

const testo="Questa è una prova1"

fs.writeFile("Test.txt",testo,err=>{
    if(err){
        console.log(err);
    }else{
        console.log("File scritto con successo");
    }
})