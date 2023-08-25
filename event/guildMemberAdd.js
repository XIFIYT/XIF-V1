const Discord = require("discord.js");
const config = require("../config.json");


module.exports = {
    name:"guildMemberAdd",
    once:  false,
    async execute(Client, member) {
        console.log(member.displayName + "est arrive sur le serveur")
    
    
    var embedlogs = new Discord.MessageEmbed()
        .setTitle("nouveau membre")
        .setDescription("<@" + member + "> est arrive sur le serveur ")
        .setColor("AQUA")
        .setTimestamp()
        Client.channels.cache.get(config.channels.logs).send({ embeds: [embedlogs]})

        var embedjoin = new Discord.MessageEmbed()
         .setTitle("Nouveau membre")
         .setDescription(`<@${member}> est arrive : souhaiter lui la bienvenue`)
         .setThumbnail(member.displayAvatarURL())
         .setColor("GREEN")
         .setTimestamp()
         Client.channels.cache.get(config.channels.bienvenue).send({ embeds : [embedjoin]})
         

         member.roles.add( config.roles.nouveau_membre,`${member.displayName} a rejoint le serveur. `)
    }
}