const Discord = require("discord.js");
const config = require("../config.json");

module.exports = {
    name:"guildMemberRemove",
    once:  false,
    async execute(Client, member) {
        console.log(member.displayName + "est partie du serveur")
    
    
    var embedlogs = new Discord.MessageEmbed()
        .setTitle("ancien membre")
        .setDescription("<@" + member + "> est partie du serveur ")
        .setColor("AQUA")
        .setTimestamp()
        Client.channels.cache.get(config.channels.logs.logs2).send({ embeds: [embedlogs]})

        var embedLeave = new Discord.MessageEmbed()
         .setTitle("ancien membre")
         .setDescription(`<@${member}> est partie : dite lui aurevoir`)
         .setThumbnail(member.displayAvatarURL())
         .setColor("FUCHSIA")
         .setTimestamp()
         Client.channels.cache.get(config.channels.bienvenue).send({ embeds : [embedLeave]})
         
    }
}