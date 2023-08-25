const Discord = require("discord.js");
const config = require("../config.json");
const bouton1 = require("../button/bouton1");


const bouton = new Discord.MessageActionRow()
.addComponents(
  new Discord.MessageButton()
  // .setCustomId("shop")
  .setLabel("LIEN KRISPIMODS")
  .setStyle("LINK")
  .setEmoji("")
  .setURL("https://krispymods.com/")
)

 
















module.exports = {
     name: "module",
     description: "voici la liste des mod menu online",
     option: [],
     runSlash: (_Client, interaction) => {

       
       

       var embed = new Discord.MessageEmbed()
       .setTitle("Mod Menu")
       .setDescription(` Voici la differente liste des mod menu online : 
       online🟢  update🟠   detected🔴
--------------------------------------------------------------
       STAND : online            🟢
--------------------------------------------------------------
       2take1: online            🟢
--------------------------------------------------------------
      rebound: online            🟢
--------------------------------------------------------------      
      cherax : online            🟢
--------------------------------------------------------------
   Phantom x : online            🟢
--------------------------------------------------------------
      X-Force: online            🟢
--------------------------------------------------------------
        ovix : online            🟢
--------------------------------------------------------------
      raiden : online            🟢
--------------------------------------------------------------
     Newway  : online            🟢
--------------------------------------------------------------
    Revenant : online            🟢
--------------------------------------------------------------
    Ethereal : online            🟢
--------------------------------------------------------------
     Circuit : online            🟢
--------------------------------------------------------------
    Midnight : online            🟢
--------------------------------------------------------------
     Victory : online            🟢
--------------------------------------------------------------
    Fragment : online            🟢
--------------------------------------------------------------
`)
       .setColor("RED") 
       .setTimestamp()
       .setImage("https://cdn.discordapp.com/attachments/1092091901747929229/1114253291954643046/standard_6.gif")   
  
       interaction.reply({ content: `Modmenu`, embeds: [embed], components: [bouton] })
       
          
      
           
       
           
            
          },


    




    }






   
