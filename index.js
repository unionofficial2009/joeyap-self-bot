const discord = require("discord.js");
const bot = new discord.Client();
const superagent = require("superagent");
const randomWord = require("random-words");
const giveMeAJoke = require('give-me-a-joke');
 
var spam;
 

 
function startspam()
{
 
    console.log("Spam starting!")
    var server = bot.guilds.get("431118123664670720");
    var chan = new discord.TextChannel(server,{"id":"487330979908681729"});
    spam = bot.setInterval(()=>
    {       
       
       chan.send(randomWord()).then(msg=>{
            console.log(msg.content);
        }).catch((err) => {
            chan.send("=start").then(msg=>{
            console.log(msg.content);
          }); 	   
      });	  
  
    },180000);
}


 
function stopspam()
{
    bot.clearTimeout(spam);
    console.log("Spam Stopped.");
}
 
bot.on("ready",()=>{
    console.log("Ready!");
    //startspam();
    let server = bot.guilds.get("431118123664670720");
    let chan = new discord.TextChannel(server,{"id":"487330979908681729"});
 
    chan.send("Hey <@421634731709562886>!").then(msg=>{
            console.log(msg.content);
        }).catch((err) => {
            chan.send("=start").then(msg=>{
            console.log(msg.content);
          }); 	   
      });
    
   chan.send("=start").then(msg=>{
            console.log(msg.content);
        }).catch((err) => {
            chan.send("=start").then(msg=>{
            console.log(msg.content);
          }); 	   
      });
 
 
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
