const Discord = require("discord.js");
const config = require("../config.json");



module.exports = {
    name: "2take1",
    async runInteraction(_Client, interaction) {
        interaction.member.roles.add("1101549255128268981")
        
        interaction.reply(`2take1 ${interaction.guild.roles.cache.get("1101549255128268981")} ATTRIBUE AVEC SUCCES !`)
        ({ ephemeral: true})
    }

}
