const Discord = require("discord.js");
const config = require("../config.json");



module.exports = {
    name: "ethereal",
    async runInteraction(_Client, interaction) {
        interaction.member.roles.add("1101207896961847418")
        
        interaction.reply(`ethereal ${interaction.guild.roles.cache.get("1101207896961847418")} ATTRIBUE AVEC SUCCES !`)
        ({ ephemeral: true})
    }

}
