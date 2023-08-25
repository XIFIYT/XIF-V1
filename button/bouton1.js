const Discord = require("discord.js");
const config = require("../config.json");


module.exports = {
    name: "bouton1",
    async runInteraction(Client, interaction) {
        interaction.reply({ content: "NATHAN BG ", ephemeral: false})
    }


}