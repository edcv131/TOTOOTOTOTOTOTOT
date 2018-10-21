const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});



client.on('message', message => {
if(message.content.startsWith('1s')) {
if(message.author.id !== "262274898422923264") return;
var args = message.content.split(' ').slice(1).join(' ');
message.channel.send(args);
}
});



client.login(process.env.BOT_TOKEN);
