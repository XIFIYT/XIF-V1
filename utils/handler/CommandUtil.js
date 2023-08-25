const { promisify } = require("util");
const { glob } = require("glob");
const pGlob = promisify(glob);

module.exports = async Client => {
    (await pGlob(`${process.cwd()}/Commands/**/*.js`)).map(async cmdfile => {
        const cmd = require(cmdfile)

        if (!cmd.name || !cmd.description) return console.log(`[cmd] - commande non charge : Pas de nom ou de description - Fichier ${cmdfile}`);

        Client.commands.set(cmd.name, cmd);

        console.log(`[cmd] - commande charge : ${cmd.name}`)

        

        
        
    })
}

    


    
      
    




    
        

