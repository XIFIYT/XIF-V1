const Discord = require("discord.js");
const config = require("../config.json");



const bouton = new Discord.MessageActionRow()                                          
.addComponents(                                                                        
    new Discord.MessageButton()
    .setCustomId("stand")                                                         
    .setLabel("stand")                                                                  
    .setStyle("PRIMARY")                                                                 
    .setEmoji("")                                                                           
                                                                                              
  )


const bouton2 = new Discord.MessageActionRow()
.addComponents(
  new Discord.MessageButton()
  .setCustomId("2take1")
  .setLabel("2take1")
  .setStyle("PRIMARY")
  .setEmoji("")
  
)

const bouton4 = new Discord.MessageActionRow()
.addComponents(
  new Discord.MessageButton()
  .setCustomId("ethereal")
  .setLabel("ethereal")
  .setStyle("PRIMARY")
  .setEmoji("")
  
)

const bouton5 = new Discord.MessageActionRow()
.addComponents(
  new Discord.MessageButton()
  .setCustomId("Fragment")
  .setLabel("fragment")
  .setStyle("PRIMARY")
  .setEmoji("")
  
)

















module.exports = {
    name: "role",
    description: "voici la liste des mod menu ",
    option: [],
    runSlash: ( Client, interaction) => {

      
      

      var embed = new Discord.MessageEmbed()
      .setTitle("Mod Menu selection")
      .setDescription(` Voici la differente liste des mod menu online : 
   
`)
      .setColor("RED") 
      .setTimestamp()
      .setImage("https://cdn.discordapp.com/attachments/1092091901747929229/1110637995180171398/standard.gif")   
 
      interaction.reply({ content: `Modmenu`, embeds: [embed], components: [bouton, bouton2, bouton4, bouton5] })
      
         
     
          
      
          
           
         },


   




   }






  
