const Discord = require("discord.js");
const config = require("../config.json");



module.exports = {
    name: "role5",
    async runInteraction(_Client, interaction) {
        interaction.member.roles.add("1092080783344291931")
        
        interaction.reply(`role ${interaction.guild.roles.cache.get("1092080783344291931")} ATTRIBUE AVEC SUCCES !`)
        ({ ephemeral: false})
    }

}