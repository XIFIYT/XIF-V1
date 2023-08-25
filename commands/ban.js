const Discord = require("discord.js");
const config = require("../config.json");


module.exports = {
     name: "ban",
     description: "bannisser une personne",
     options: [
        {
            name: "user", 
            description: "utilisateur a ban ",
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
            description: "raison du ban ",
            type: "STRING",
            required: false
        },
     ],
     runSlash: (Client, interaction) => {

       var user = interaction.options.getUser("user");
       var mess = interaction.options.getInteger("mess");
       var raison = interaction.options.getString("raison");
       try {var user.send(`Tu as ete banni du serveur ${message.guild.name}par ${message.user.tag} pour la raison \`${reason}\``)} catch(err) {}
     
      await message.reply(`${message.user} a banni ${user.tag} pour la raison : \`${reason}\``)
      await member.ban({reason: reason});
       interaction.guild.members.cache.get(user.id).ban({days: mess, reason: raison})
       interaction.reply(`le bannissement a bien ete fait`)
    }
} 