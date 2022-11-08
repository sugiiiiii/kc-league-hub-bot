const { Collection } = require("discord.js");
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'roles-old',
  description: 'Send embed about roles',
  execute(client, message, args) {
    if (message.channel.type === 'dm' || !message.member.hasPermission("MANAGE_MESSAGES")) return;
    else {
        const rolesMenu = new MessageEmbed()
        .setColor('4b006e')
        .setTitle(`Set your status\n`)
        .setDescription("\n") 
        // .setImage('https://i.imgur.com/XUGt2gP.png')
        .addFields(
        {
          name: ':mag_right: `Free Agent`',
          value: 'Pick this if you\'re a player without team\n                                           ',
          inline: false
        },
        {
          name: ':military_medal: `Captain`',
          value: 'Pick this one if you\'re a team captain                                                ',
          inline: false
        })
        const rolesCompet = new MessageEmbed()
        .setColor('4b006e')
        .setTitle(`Get full access !\n`)
        .setThumbnail('https://images.emojiterra.com/twitter/v13.0/512px/2705.png')
        .setDescription("\n") 
        .addFields(
        {
          name: ':white_check_mark: `Competitor`',
          value: 'By adding the reaction you certify having read the rules and respecting them\n',
          inline: false
        })
        const regionMenu = new MessageEmbed()
        .setColor('4b006e')
        .setTitle(`Where are you from\n`)
        .setDescription("\n") 
        // .setImage('https://i.imgur.com/XUGt2gP.png')
        .addFields(
        {
          name: '<:region_americas:844920882173313055> `Americas`',
          value: 'Pick this if you\'re from a country of North or South America',
          inline: false
        },
        {
          name: ':earth_eu_africa: `Europe`',
          value: 'Pick this one if you\'re from a European country',
          inline: false
        },
        {
          name: '<:region_oce_asia:844920882321162260> `Asia & Oceania`',
          value: 'Pick this one if you\'re from a Asian or Oceanian country',
          inline: false
        })
        message.channel.send(regionMenu)
        message.channel.send(rolesMenu)
        message.channel.send(rolesCompet)
        message.delete(message)
    }
  }

}