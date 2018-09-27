const discord = require("discord.js");
const bot = new discord.Client();
const superagent = require("superagent");
const randomWord = require("random-words");
 
var spam;
 

 
function startspam()
{
 
    console.log("Spam starting!")
    var server = bot.guilds.get("431118123664670720");
    var chan = new discord.TextChannel(server,{"id":"487330979908681729"});
    spam = bot.setInterval(()=>
    {       
     
       chan.send(`${randomWord()} ${randomWord()} ${randomWord()} ${randomWord()} ${randomWord()}`).then(msg=>{ // Sticking with randomwords.
            console.log(msg.content);
        });
  
    },5000);
}


 
function stopspam()
{
    bot.clearTimeout(spam);
    console.log("Spam Stopped.");
}
 
bot.on("ready",()=>{
    console.log("Ready!");
});
 
bot.on("message",msg=>{
    if(msg.author.id == "421634731709562886")
    {
        if(msg.content.toLowerCase() == "=start")
        {
            startspam();
        }
        else if(msg.content.toLowerCase() == "=stop")
        {
            stopspam();
        }
    }
});



bot.login(process.env.BOT_TOKEN);
