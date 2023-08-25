const Discord = require("discord.js");
const config = require("../config.json");


module.exports = {
     name: "rules",
     description: "Reglement pour vos serveur deja fait ",
     option: [],
     runSlash: (_Client, interaction) => {

       
       

       var embed = new Discord.MessageEmbed()
       .setTitle("Regle")
       .setDescription(` 



       LE REGLEMENT

       Reglement
           
       BONJOUR VOICI LES RÈGLES À RESPECTER !
                 
       3 Warns = BAN PERM   
       
       LES REGLES DE BASES D'UN SERVEUR  
       
       1. TROLL = [TempBan 3D]
       
       2. Insultes = [TempBan 3H]
       
       3. Insultes Graves = [TempBan 7D]
       
       4. Provocation envers un STAFF = [TempBan 5H]
       
       5. Toutes formes de PUBLICITÉ = [BAN PERM]
       
       6. Insultes Graves et (ou) répétitive = [BAN PERM]
       
        PROPOS DEPLACÉ OU INAPROPRIER  
       
       7. . Contenue ou Propos Raciste = [BAN PERM]
       
       8. Contenue ou Propos NSFW = [TempBan 15D]
       
       9. Propos ou Actes de types CHARO = [BAN PERM]
       
       10. Contenu ou Propos Discriminatoire = [TempBan 15D]
       
       11. Contenu ou Propos Pedopornographiques = [BAN PERM]
        
        AUTRES REGLES
       
       12. Tout Spam Voc & Text = [TempBan 3H]
       
       13. Toute Revente de Compte = [BAN PERM]
       
       14. Toute Demande de SUB ou NITRO = [KICK]
       
       15. Toute Menace envers un STAFF ou Abonné = [TempBan 15D]
       
       16. Tout liens (Ip Logger,Grab Token,Invitation) = [BAN PERM]
       
       17. Toute Fausse accusation envers un (Abonné,Staff..) = [TempBan 15D]
       
       18. Tout SoundBoard, Bruits parasite ou Modificateurs de Voix = [BAN PERM] 
       
       19. Pas de Demande de Move, si persiste = [TempBan 1H]
       
       20. Ne pas Chanter sans l'accord des personnes présentes, si persiste = TempBan 2h
       
       21. Ne pas mettre de Musique sans l'accord des personnes présentes, si persiste = TempBan 2h
       
       22. Ne pas divulguer d'informations personnelles d'autres personnes (Nom,Prénom,Adresse,Photos...) sans que la personne concernée soit d'accord = [BAN PERM]     


       `)
       .setColor("RED")
       .setTimestamp()
       .setImage("https://cdn.discordapp.com/attachments/1092091901747929229/1113840599997632552/standard_3.gif")      
  
       interaction.reply({ content: `Rules`, embeds: [embed], components: [] })
       
          
      
           
      
           
            
          },







    }






   
