const { promisify } = require("util");
const { glob } = require("glob");
const pGlob = promisify(glob);

module.exports = async Client => {
    (await pGlob(`${process.cwd()}/button/**/*.js`)).map(async btnfile => {
        const btn = require(btnfile)

        if (!btn.name) return console.log(`[BTN] - Bouton non charge : Pas de nom - Fichier : ${btnfile}`);

        Client.buttons.set(btn.name, btn)

        console.log(`[BTN] - Bouton charge : ${btn.name}`)
    })
}