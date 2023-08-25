const { promisify } = require("util");
const { glob } = require("glob");
const pGlob = promisify(glob);

module.exports = async Client => {
    (await pGlob(`${process.cwd()}/Selects/**/*.js`)).map(async selectMenufile => {
        const SelectMenu = require(selectMenufile)

        if (!SelectMenu.name || !cmd.description) return console.log(`[SELECT] - MENU de selection non charge : Pas de nom - Fichier ${selectMenufile}`);

        Client.Selects.set(SelectMenu.name, selectMenu);

        console.log(`[SELECT] - MENU de selection charge : ${selectMenu.name}`)

        

        
        
    })
}