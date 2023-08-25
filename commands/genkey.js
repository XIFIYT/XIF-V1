const Discord = require("discord.js");
const config = require("../config.json");
const fs = require("fs");
const cles = require("../cles.json");

module.exports = {
     name: "genkey",
     description: "generer une cle  ",
     options: [
      {
        name: "role",
        description: "role gen key",
        type: "ROLE",
        required: true
      }
    
     ],
     runSlash: (_Client, interaction) => {
      
      if (!interaction.member.permissionsIn(interaction.channel).has("ADMINISTRATOR")) { return interaction.reply({ content: "Vous n'êtes pas Administrateur.", ephemeral: true }) }

       var key = genKey()



      console.log(key)

      
      
      cles[key] = interaction.options.getRole("role").id
       Savebdd()
       
       interaction.reply({content:`cle generer avec succes : ${key}`, ephemeral: false })
     
    }
}

function Savebdd() {
  fs.writeFile(`${process.cwd()}/cles.json`, JSON.stringify(cles, null, 4), (err) => {
      if (err) {
          console.log("Une Erreur de Fonction Savebdd est survenue...\n" + err)
      }
  })
}





function genKey() {
    var max = 999999999999999
    var min = 100000000000000
    var result = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!verifKey(result)) { return result } else { return genKey() }
}

function verifKey(key) {
    if (!cles[key]) {
        return false
    } else {
        key = genKey()
        return true
    }
}
