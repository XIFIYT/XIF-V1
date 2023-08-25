const Discord = require("discord.js");
const config = require("../config.json");



module.exports = {
    name: "role4",
    async runInteraction(_Client, interaction) {
        interaction.member.roles.add("1092080230539198465")
        
        interaction.reply(`role ${interaction.guild.roles.cache.get("1092080230539198465")} ATTRIBUE AVEC SUCCES !`)
        ({ ephemeral: false})
    }

}