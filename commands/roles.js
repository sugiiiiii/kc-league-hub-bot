const { Collection } = require("discord.js");
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'roles',
  description: 'Send embed about roles',
  execute(client, message, args) {
    if (message.channel.type === 'dm' || !message.member.hasPermission("MANAGE_MESSAGES")) return;
    else {

        const rolesMenu = new MessageEmbed()
        .setColor('4b006e')
        .setTitle(`Set your status\n`)
        .setDescription("\n") 
        .addFields(
        {
          name: ':mag_right: `Free Agent`',
          value: 'Pick this if you\'re a player without team\n',
          inline: true
        },
        {
          name: ':military_medal: `Captain`',
          value: 'Pick this one if you\'re a team captain',
          inline: true
        },
        {
          name: '<:region_americas:844920882173313055> `Americas`',
          value: 'Pick this if you\'re from a country of North or South America',
          inline: false
        },
        {
          name: '<:region_eu_africa:844920882359173182> `Europe`',
          value: 'Pick this one if you\'re from a European country',
          inline: false
        },
        {
          name: '<:region_oce_asia:844920882321162260> `Asia & Oceania`',
          value: 'Pick this one if you\'re from a Asian or Oceanian country',
          inline: false
        })

        const rolesRank = new MessageEmbed()
        .setColor('4b006e')
        .setTitle(`Select your rank\n`)
        .setDescription("React with the emoji corresponding to your in-game rank \n during the second season.") 
        .addFields(
        {
          name: 'Available Ranks',
          value: '<:Bronze:844689227580571649> `Bronze S2`\n<:Silver:844689227907072041> `Silver S2`\n<:Gold:844689228080087080> `Gold S2`\n<:Platinum:844689228122161153> `Platinum S2` \n\n',
          inline: false
        },
        {
          name: 'Your rank isn\'t there ?',
          value: 'For all higher ranks (`Sapphire S2`, `Emerald S2`, `Ruby S2`, `Diamond S2`), you must enter a query in <#844691790882930768> and provide a gif/clip to prove your in-game rank.'
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
        message.channel.send(rolesMenu)
        message.channel.send(rolesRank)
        message.channel.send(rolesCompet)
        message.delete(message)
    }
  }

}