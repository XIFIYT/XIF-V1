const Discord = require("discord.js");
const config = require("../config.json");


module.exports = {
     name: "kick",
     description: "expulser une personne",
     options: [
        {
            name: "user", 
            description: "utilisateur a EXPULSER ",
            type: "USER",
            required: true
        },
        {
            name: "mess", 
            description: " message suprime au bout (en jour",
            type: "INTEGER",
            required: false
        },
        {
            name: "raison", 
            description: "raison du kick ",
            type: "STRING",
            required: false
        },
     ],
     runSlash: (Client, interaction) => {

       var user = interaction.options.getUser("user");
       var mess = interaction.options.getInteger("mess");
       var raison = interaction.options.getString("raison");
       
       interaction.guild.members.cache.get(user.id).kick({days: mess, reason: raison})
       interaction.reply(`l'EXPULSION  a bien ete fait`)
    }
}


