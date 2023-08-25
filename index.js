const Discord = require("discord.js");
const config = require("./config.json");

const Client = new Discord.Client({ partials : ["CHANNEL"], intents : 3243773 });

process.on("exit", code => { console.log("Le processus c'est arrete avec le code : " + code) });
process.on("uncaughtException", (err, origin) => { console.log("Uncaught Exception:" + err, "origine : " + origin) });
process.on("unhandledRejection", (reason, promise) => { console.log("unhandled Rejection : " + reason, "Promise : " + promise) })
process.on("warning", (...args) => console.log(...args));


["commands", "cooldowns", "buttons", "selects"].forEach(x => Client[x] = new Discord.Collection());
["CommandUtil", "EventUtil", "SelectUtil", "ButtonUtil"].forEach(handler => { 
    require(`./utils/handler/${handler}`)(Client) });

    


Client.login(config.token)



                                                                           
                                                                            
                                                                              
                                                                          
                                                                            
                                                                                  










