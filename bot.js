

const Discord = require('discord.js');

const KiNg66S = new Discord.Client();

 const prefix = "+";

KiNg66S.on('ready', () => {

    console.log('I am ready!');

});

KiNg66S.on('message', message => {

    if (message.content === 'ping') {

        message.reply('pong');

      }

});






  
  





  
  
  



KiNg66S.on('message', message => {
  if (!message.content.startsWith(PREFIX)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== "336773905043685390") return;

  
  if (message.content.startsWith(PREFIX + 'setwatch')) {
  KiNg66S.user.setActivity(argresult, {type: 'WATCHING'})
     console.log('test' + argresult);
    message.channel.sendMessage(`Watch Now: **${argresult}`)
} 

 
  if (message.content.startsWith(PREFIX + 'setlis')) {
  KiNg66S.user.setActivity(argresult, {type: 'LISTENING'})
     console.log('test' + argresult);
    message.channel.sendMessage(`LISTENING Now: **${argresult}`)
} 


if (message.content.startsWith(PREFIX + 'na')) {
  KiNg66S.user.setUsername(argresult).then
      message.channel.sendMessage(`Username Changed To **${argresult}**`)
  return message.reply("You Can change the username 2 times per hour");
} 

if (message.content.startsWith(PREFIX + 'av')) {
  KiNg66S.user.setAvatar(argresult);
   message.channel.sendMessage(`Avatar Changed Successfully To **${argresult}**`);
}

if (message.content.startsWith(PREFIX + 'setstream')) {
  KiNg66S.user.setGame(argresult, "https://www.twitch.tv/KiNg66S");
     console.log('test' + argresult);
    message.channel.sendMessage(`Streaming: **${argresult}`)
} 
if (message.content.startsWith(PREFIX + 'setplay')) {
  KiNg66S.user.setGame(argresult);
     console.log('test' + argresult);
    message.channel.sendMessage(`Playing: **${argresult}`)
} 



});


  
 
 

 






KiNg66S.login(process.env.BOT_TOKEN);  //اياكككك تلعب هنا لا تحط توكنك هنا  

  

 

