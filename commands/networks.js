const { Collection } = require("discord.js");
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'networks',
  description: 'Send networks',
  execute(client, message, args) {
    if (message.channel.type === 'dm' || !message.member.hasPermission("MANAGE_MESSAGES")) return;
    else {
        const networkOff = new MessageEmbed()
        .setColor('fff100')
        .setTitle(`Official Accounts`)
        .setDescription(" <:twitter:831231077820661800> Twitter: [@KnockoutCity](https://twitter.com/knockoutcity) \n <:twitch:831231077820399628> Twitch: [KnockoutCity](https://www.twitch.tv/knockoutcity) \n <:youtube:831231077842157618> Youtube: [KnockoutCity](https://www.youtube.com/knockoutcity) \n <:velan:831231077862473778> Velan Studios : [Editor's website](https://www.velanstudios.com/) \n <:reddit:831231077694701609> Reddit: [r/KnockoutCity](https://www.reddit.com/r/KnockoutCity) \n <:website:831231077564678247> Website: [Knockout-City](https://www.ea.com/fr-fr/games/knockout-city) \n <:discord:831231077837832222> Official Discord: https://discord.gg/KnockoutCity")
        .setThumbnail('https://i.imgur.com/7BUiR73.png')
        message.channel.send(networkOff)

        const networkHub = new MessageEmbed()
        .setColor('fff100')
        .setTitle(`Knockout City League Hub`)
        .setThumbnail('https://i.imgur.com/Lzqjwct.png')
        .setDescription(" <:twitter:831231077820661800> Twitter: [@KnockoutCityHUB](https://twitter.com/KnockoutCityHUB) \n <:challengermode:844611245923237918> Challengermode Space: [s/LeagueHub](https://www.challengermode.com/s/LeagueHub) \n <:youtube:831231077842157618> Youtube: [League Hub](https://www.youtube.com/channel/UCM97TT-NCDvePVx8sCcBKeQ) \n <:twitch:831231077820399628> Twitch: [KCLeagueHub](https://www.twitch.tv/kcleaguehub) \n <:discord:831231077837832222> Where you are: https://discord.gg/FXfVH3Drdy") 

        message.channel.send(networkHub)
        message.delete(message)
    }
  }
}