const Discord = require("discord.js");
const config = require("../config.json");



module.exports = {
    name: "stand",
    async runInteraction(Client, interaction) {
        interaction.member.roles.add("1100440370065715242")
        
        interaction.reply(`stand ${interaction.guild.roles.cache.get("1100440370065715242")} ATTRIBUE AVEC SUCCES !`)
        ({ ephemeral: true})
    }

}


    

