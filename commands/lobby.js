const Discord = require("discord.js");
const config = require("../config.json");


module.exports = {
     name: "lobby",
     description: "voici la liste des commandes",
     option: [],
     runSlash: (_Client, interaction) => {

       
       

       var embed = new Discord.MessageEmbed()
       .setTitle("lobby")
       .setDescription(` Voici les différent type de compte lobby à vendre 

       Lever 1 : 10 tenue modder 500 million 4 véhicule modder Level 350   =  3€
       
       Level 2 : 15 tenue modder 1 milliard 7 véhicule modder tout débloqué level 500    = 5€ 
       
       Level 3 : 20 tenue modder 4 milliard 10 véhicule modder tout débloqué level au choix =  7€ 
       
       Je précise qu'avec le compte fourni = 2.90€ 

       Les lobby sans compte fourni se font sur prise de compte
        
       
       
       
       `)
       .setColor("RED")
       .setTimestamp()
       .setImage("https://cdn.discordapp.com/attachments/1092091901747929229/1114255987436703824/standard_8.gif")      
  
       interaction.reply({ content: `LOBBY`, embeds: [embed], components: [] })
       
          
      
           
      
           
            
          },







    }






   
