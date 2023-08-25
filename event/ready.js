const Discord = require("discord.js");
const config = require("../config.json");
 
module.exports = {
    name: "ready",
    once: true,
    async execute(Client) {
        console.log("hey je suis allume")
      
        

        Client.guilds.cache.get(config.serveur).commands.set(Client.commands.map(cmd => cmd));
              
        Client.user.setPresence({ activities: [{ name: "XF ENGINE ", type : "WATCHING" }], status : "online"  })

 }
}