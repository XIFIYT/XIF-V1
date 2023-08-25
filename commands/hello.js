const Discord = require("discord.js");
const config = require("../config.json");


module.exports = {
     name: "hello",
     description: "Dire Bonjour moi c XIF le bot a xifi jsui en developement  ",
     options: [
      {
        name: "cible",
        description: "Membre a qui vous souhaiter le dire",
        type: "USER",
        require: true
      },
      {
        name: "temps",
        description: "Le temps",
        type: "STRING",
        require: true,
        choices: [
          {
               name: "bonjour",
               value: "bonjour"
          },
          {
              name: "bonsoir",
              value: "bonsoir"
          }
        ]       
      }
     ],
     runSlash: (_Client, interaction) => {

       interaction.reply(`${interaction.user}vous dit ${interaction.options.getString("temps")} ${interaction.options.getUser("cible")} `)

    }
}