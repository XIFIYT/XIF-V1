const Discord = require("discord.js");
const config = require("../config.json");


module.exports = {
     name: "donateurhelp",
     description: "donateur/customer",
     option: [],
     runSlash: (_Client, interaction) => {

       
       

       var embed = new Discord.MessageEmbed()
       .setTitle("donateurhelp")
       .setDescription(` Voici comment devenir donateur/customer
    
        Pour devenir donateur/customer le role avec tous ses avantages et a 2€ si vous n'aver pas d'argent 
       
        soit vous booster une a deux fois le serveur ou soit un petit mod menu suffit

        Pour activer les cles pour devenir donateur/customer pour active votre cle donateur/customer

        vous dever faire /key et metter votre cles et le role vous sera attribue automatiquement 


        Creer par XF ENGINE owner XIFI  | XF ENGINE | tous droit reserves @XFInc 
        
       
       
       
       `)
       .setColor("RED")
       .setTimestamp()
       .setImage("https://cdn.discordapp.com/attachments/1092091901747929229/1114259968418381884/standard_9.gif")      
  
       interaction.reply({ content: `DONATEUR`, embeds: [embed], components: [] })
       
          
      
           
      
           
            
          },







    }






   
