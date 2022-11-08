const { Collection } = require("discord.js");
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'links',
  description: 'Send links',
  execute(client, message, args) {
    if (message.channel.type === 'dm' || !message.member.hasPermission("MANAGE_MESSAGES")) return;
    else {
        message.channel.send("|| https://discord.gg/knockoutcity ||\n|| https://discord.gg/FXfVH3Drdy ||")
        message.delete(message)
    }
  }
}