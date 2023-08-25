const Discord = require("discord.js");
const config = require("../config.json");


module.exports = {
    name: "Help",
    async runInteraction(Client, interaction) {
        interaction.reply({ content: "GG ", ephemeral: false})
    }


}