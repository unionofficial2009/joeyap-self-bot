const Discord = require("discord.js");
const bot = new Discord.Client();
const superagent = require("superagent");
//const randomWord = require("random-words")
 

 

 
bot.on("ready",()=>{
    console.log("Ready!");
    var server = bot.guilds.find("id","431118123664670720")
    var chan = new discord.TextChannel(server,{"id":"487330979908681729"});
    bot.setInterval(()=>
    {
        chan.send("test").then(msg=>{
            console.log(msg.content);
        });
 
    },60000);
})  



bot.login(process.env.BOT_TOKEN);
