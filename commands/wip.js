const { Collection } = require("discord.js");
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'wip',
  description: 'Work in progress',
  execute(client, message, args) {
    if (message.channel.type === 'dm' || !message.member.hasPermission("MANAGE_MESSAGES")) return;
    else {
        const leWip = new MessageEmbed()
        .setColor('4B0070')
        .setTitle(`Work in Progress... \n`)
        .setFooter('Coming soon...', 'https://cdn.discordapp.com/avatars/831181199166668833/da914d93a2fc7e0519eb5ccc9053bb31.png?size=256')
        .setDescription(" ") 
        message.channel.send(leWip)
        message.delete(message)
    }
  }

}