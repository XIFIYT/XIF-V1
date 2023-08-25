const Discord = require("discord.js");
const config = require("../config.json");


module.exports = {
     name: "help",
     description: "voici la liste des commandes /hello  /help /bouton1 /Salon /role/role2/shop/kick/ban/",
     option: [],
     runSlash: (_Client, interaction) => {

       
       

       var embed = new Discord.MessageEmbed()
       .setTitle("Help")
       .setDescription(` Voici la differente liste des commandes BAN/HELLO/SALON/KICK`)
       .setColor("FUSHIA")
       .setTimestamp()
       .setImage("https://cdn.discordapp.com/attachments/1092091901747929229/1108750474338906152/standard_5.gif")      
  
       interaction.reply({ content: `COMMANDES`, embeds: [embed], components: [] })
       
          
      
           
      
           
            
          },







    }






   
