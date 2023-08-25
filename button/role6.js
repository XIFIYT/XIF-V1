const Discord = require("discord.js");
const config = require("../config.json");



module.exports = {
    name: "role6",
    async runInteraction(_Client, interaction) {
        interaction.member.roles.add("1092080953372971008")
        
        interaction.reply(`role ${interaction.guild.roles.cache.get("1092080953372971008")} ATTRIBUE AVEC SUCCES !`)
        ({ ephemeral: false})
    }

}