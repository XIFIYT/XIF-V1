const Discord = require("discord.js");
const config = require("../config.json");



    module.exports = {
        name: "info",
        description: "voici ",
        option: [],
        runSlash: (_Client, interaction) => {
   
          
          
   
          var embed = new Discord.MessageEmbed()
          .setTitle("info")
          .setDescription(`Voici `)
          .setDescription(`  `)
          .setColor("FUSHIA")
          .setTimestamp()
          .setImage("https://cdn.discordapp.com/attachments/1092091901747929229/1108750474338906152/standard_5.gif") 
          
          


     
          interaction.reply({ content: `COMMANDES`, embeds: [embed], components: [] })
          
             
         
              
         
              
               
             },
   
   
   
   
   
   
   
       }
   
   
   
   
   
   
      
   

