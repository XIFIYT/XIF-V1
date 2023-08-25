const Discord = require("discord.js");
const config = require("../config.json");



module.exports = {
    name: "role2",
    async runInteraction(Client, interaction) {
        interaction.member.roles.add("1092077180567166976")
        
        interaction.reply(`role ${interaction.guild.roles.cache.get("1092077180567166976")} ATTRIBUE AVEC SUCCES !`)
        ({ ephemeral: false})
    }

}
