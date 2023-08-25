const Discord = require("discord.js");
const config = require("../config.json");



module.exports = {
    name: "Fragment",
    async runInteraction(_Client, interaction) {
        interaction.member.roles.add("1100796840523337899")
        
        interaction.reply(`Fragment ${interaction.guild.roles.cache.get("1100796840523337899")} ATTRIBUE AVEC SUCCES !`)
        ({ ephemeral: true})
    }

}
