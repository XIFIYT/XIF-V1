const Discord = require("discord.js");
const config = require("../config.json");


module.exports = {
     name: "help2",
     description: "voici la liste des commandes",
     option: [],
     runSlash: (_Client, interaction) => {

       
       

       var embed = new Discord.MessageEmbed()
       .setTitle("Help")
       .setDescription(` Voici la differente liste des commandes
       
       
        la listes des commandes : /key    /genkey pour les admins seulement /kick /ban /salon admin seulement /module /hello 

        Je sert a faire vos taches qui vous embettent
           
        
        et je suis un moderateur avec mes commandes /kick /ban je peut servir en tant qu'amis 
        

        Creer par XF ENGINE owner XIFI  | XF ENGINE | tous droit reserves @XFInc 
        
       
       
       
       `)
       .setColor("RED")
       .setTimestamp()
       .setImage("https://cdn.discordapp.com/attachments/1092091901747929229/1113837348250206208/standard_2.gif")      
  
       interaction.reply({ content: `HELP`, embeds: [embed], components: [] })
       
          
      
           
      
           
            
          },







    }






   
