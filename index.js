const Discord = require("discord.js");
const bot = new Discord.Client();
const superagent = require("superagent");
//const randomWord = require("random-words")
 
var spam;
 
var phrases = ["thing1","another one","keep adding more","there's no limit"];
 
function startspam()
{
    console.log("Spam starting!")
    var server = bot.guilds.get("427076307596345344");
    var chan = new discord.TextChannel(server,{"id":"427076307596345346"});
    spam = bot.setInterval(()=>
    {
        chan.send("test").then(msg=>{ // Sticking with randomwords.
            console.log(msg.content);
        });
  
    },5000);
}
 
function stopspam()
{
    bot.clearTimeout(spam);
    console.log("Spam Stopped.")
}
 
bot.on("ready",()=>{
    console.log("Ready!");
})
 
bot.on("message",msg=>{
    if(msg.author.id == "374886124126208000")
    {
        if(msg.content.toLowerCase() == "=start")
        {
            startspam()
        }
        else if(msg.content.toLowerCase() == "=stop")
        {
            stopspam()
        }
    }
})  



bot.login(process.env.BOT_TOKEN);
