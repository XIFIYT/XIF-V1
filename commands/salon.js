const Discord = require("discord.js");
const config = require("../config.json");


module.exports = {
     name: "salon",
     description: "Creer un salon",
     options: [
      {
        name: "name",
        description: "nom du salon",
        type: "STRING",
        require: true
      },
      
     ],
     runSlash: (_Client, interaction) => {

       interaction.guild.channels.create(`${interaction.options.getString("name")}`).then(channel => {
         interaction.reply(`${channel}`)

          channel.send(`${interaction.user} hey ce salon a ete creer pour toi`)
       })
    }
}