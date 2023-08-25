const Discord = require("discord.js");
const config = require("../config.json");
const fs = require("fs");
const cles = require("../cles.json");

module.exports = {
    name: "key",
    description: "rentrer une key",
    options: [
        {
            name: "key",
            description: "Clé de rôle",
            type: "INTEGER",
            required: true
        }













    ],
    runSlash: (Client, interaction) => {

        var key = interaction.options.getInteger('key');

        if (!cles[key]) {
            interaction.reply({ content: `Clé invalide.`, ephemeral: true })
        } else {
            interaction.member.roles.add(cles[key])
            interaction.reply({ content: `Clé entrée avec succès ! Rôle <@&${cles[key]}> ajouté !`, ephemeral: true })

            delete cles[key];
            Savebdd()
        }

    }
}


function Savebdd() {
    fs.writeFile(`${process.cwd()}/cles.json`, JSON.stringify(cles, null, 4), (err) => {
        if (err) {
            console.log("Une Erreur de Fonction Savebdd est survenue...\n" + err)
        }
    })
}