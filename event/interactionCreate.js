const Discord = require("discord.js");
const config = require("../config.json");


module.exports = {
    name: "interactionCreate",
    once: false,
    async execute(Client, interaction) {
       if (interaction.isCommand()) {
        const cmd = Client.commands.get(interaction.commandName);
        if (!cmd) return interaction.reply("Cette commande n'existe pas.");

             cmd.runSlash(Client, interaction);

       }
        else if (interaction.isButton()) {

               const btn = Client.buttons.get(interaction.customId);
               if (!btn) return interaction.reply("Ce bouton n'existe pas.");

               btn.runInteraction(Client, interaction);
        }
        else if (interaction.isSelectMenu()) {
            const selectMenu = Client.selects.get(interaction.customId);
            if (!selectMenu) return interaction.reply("Ce Menu de selection  n'existe pas.");

            selectMenu.runInteraction(Client, interaction);

            
        }
    }

}