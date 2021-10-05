const fs = require('fs');
const path = require('path');

if(fs.existsSync("Logs")){
    
    fs.readdir("Logs",(err,files)=>{
        if(err){
            throw err
        }

        for (const file of files){
            
            const filepath= path.join("Logs",file)

            fs.unlink(filepath, err=>{
                if (err){
                    throw err
                }
            })
            console.log(`Delete file.....${file}` )
        }
        fs.rmdirSync("Logs")
        console.log('Deleted Directory Logs' )
    })
}

