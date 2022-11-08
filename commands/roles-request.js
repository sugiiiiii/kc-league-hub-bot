const { Collection } = require("discord.js");
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'roles-request',
  description: 'Send embed about roles',
  execute(client, message, args) {
    if (message.channel.type === 'dm' || !message.member.hasPermission("MANAGE_MESSAGES")) return;
    else {

        const rolesRank = new MessageEmbed()
        .setColor('4b006e')
        .setTitle(`Roles request`)
        .setDescription("\n") 
        .addFields(
        {
          name: 'Introduce a query is required for those ranks:',
          value: '<:Sapphire:844689228164366347> `Sapphire S2`\n<:Emerald:844689227722915840> `Emerald S2`\n<:Ruby:844689228151390258> `Ruby S2`\n<:Diamond:844689228113641513> `Diamond S2` \n\n',
          inline: false
        },
        {
          name: 'Please provide a gif/clip of your in-game rank, a staff member will give your appropriate role once he was verified.',
          value: 'Each check requires, that a human be there to process it, it will be done. Also please don\'t DM/Ping a staff member to point out that your request is still pending.'
        })
        .setImage("https://i.imgur.com/ME0iit7.png")

        message.channel.send(rolesRank)
        message.delete(message)
    }
  }

}