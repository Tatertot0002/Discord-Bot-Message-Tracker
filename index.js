const Discord = require('discord.js');
const client = new Discord.Client();
const logger = require("discordjs-logger");

logger.all(client);
client.on(`message`, message => {
    if (message.author.bot) return; 
    if (!message.guild) return; 
    if (message.guild) {
        const channel = client.channels.cache.get('828760308398948384');
        const embed = new Discord.MessageEmbed() 
            .setTitle("Peacekeeper Message Log")
            .setDescription(`
                 __**[Message]**__
                 ${message.content}
            `)
            .setTimestamp()
            .addField("[Author] ", `${message.author.username}`)
            .addField("[Author Disciminator] ", `${message.author.discriminator}`)
            .addField("[Server] ", `${message.guild.name}`)
            .addField("[Server ID] ", `${message.guild.id}`)
            .addField("[Channel Name] ", `${message.channel.name}`)
            .setColor('#fdca00')
    channel.send(embed); 
    return;
    }
});


client.login('Token');
