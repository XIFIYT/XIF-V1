const Discord = require("discord.js");
const config = require("../config.json");


const bouton100 = new Discord.MessageActionRow()
.addComponents(
  new Discord.MessageButton()
  // .setCustomId("shop")
  .setLabel("LIEN de mon youtube")
  .setStyle("LINK")
  .setEmoji("")
  .setURL("https://www.youtube.com/channel/UCOK-uh4xczNYofeqR1DA6Mw")
)

 

const bouton101 = new Discord.MessageActionRow()
.addComponents(
  new Discord.MessageButton()
  // .setCustomId("shop")
  .setLabel("LIEN de mon TikTok")
  .setStyle("LINK")
  .setEmoji("")
  .setURL("https://www.tiktok.com/@xifi.z")
)


module.exports = {
    name: "reseaux",
    description: "voici la liste de mes reseaux ",
    option: [],
    runSlash: ( Client, interaction) => {

      
      

      var embed = new Discord.MessageEmbed()
      .setTitle("reseaux")
      .setDescription(` Salut ma chaine youtube et TikTok sont la dans le but de vous montrer
      les mods menu gratuit payant pour voir ce qu'il contienne
      avant que vous les achetier pour etre sur que vous ne regreterier pas votre achat
      comme je l'ai dit au dessus je presente les mod menu gratuit 
      payant je vous montre comment les installer et comment changer le theme la langue etc
      bon n'hesiter pas a passer sur ma chaine youtube en cliquant
      sur le titre XIFI vous pourrer retrouver mes derniere video dans le salon youtube . `)
      .setColor("RED") 
      .setTimestamp()
      .setImage("https://cdn.discordapp.com/attachments/1092091901747929229/1114173975149424670/standard_4.gif")   
 
      interaction.reply({ content: `reseaux`, embeds: [embed], components: [bouton100,bouton101] })
      
         
     
          
      
          
        
    }
}
