const Discord = require("discord.js");
const config = require("../config.json");



module.exports = {
    name: "role3",
    async runInteraction(_Client, interaction) {
        interaction.member.roles.add("1092080477462077461")
        
        interaction.reply(`role ${interaction.guild.roles.cache.get("1092080477462077461")} ATTRIBUE AVEC SUCCES !`)
        ({ ephemeral: false})
    }

}