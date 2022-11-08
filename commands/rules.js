const { Collection } = require("discord.js");
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'rules',
  description: 'Send rules',
  execute(client, message, args) {
    if (message.channel.type === 'dm' || !message.member.hasPermission("MANAGE_MESSAGES")) return;
    else {
        const rules = new MessageEmbed()
        .setColor('4b006e')
        .setTitle(`Rules`)
        // .setFooter('Add reaction to certify that you have read the rules', 'https://images.emojiterra.com/twitter/512px/2b07.png')
        .setDescription(" ")
        .setImage('https://i.imgur.com/My32NCn.png') 
        .addFields(
        {
          name: `:one: : Don't bully, discriminate or harass anyone`,
          value: `If there is no change in attitude upon multiple warnings will result in a ban.`,
        },
        {
          name: `:two: : No personal attacks or threats`,
          value: `Remember, we are building a great gaming community here, treat everyone around you respectfully!`,
        },
        {
          name: `:three: : Avoid NSFW content in any form`,
          value: `Any possibly offensive or inappropriate content should not be posted or discussed. Respect each other. No drama or bad attitude will be tolerated.`,
        },
        {
          name: `:four: : Links to illegal or offensive content are also prohibited`,
          value: `Did we really need to clarify it, despite rule :three: ?`,
        },
        {
          name: `:five: : Disturbing or hateful usernames will result in a ban`,
          value: `Just ? Whats the purpose ? Just don't.`,
        },
        {
          name: `:six: : Self-promotion is not allowed.`,
          value: `No promotions **for other discord** server will be accepted except in #koc-world`,
        },
        {
          name: `:seven: : The rules apply in DM`,
          value: `Rule violations are also prohibited in members'private messages.`,
        },
        {
          name: `:eight: : Don't be too stubborn`,
          value: `If you do not understand why you have been sanctioned, despite having reread the above rules, you can contact a staff member through the support channel or by private message but once an explanation is given, do not discuss further.`,
        })
        message.channel.send(rules)

        const channelsExpl = new MessageEmbed()
        .setColor('fff004')
        .setTitle(`Channels explained`)
        .setDescription(" ") 
        .addFields(
        {
          name: `# 🔔 announcements`,
          value: `Stay informed about our server, the game and other news...`,
        },
        {
          name: `# 📤 send-tickets`,
          value: `A problem ? Need help ? Contact the staff by making a ticket.`,
        },
        {
          name: `# 📲 twitter-feed`,
          value: ` Official twitter feed to stay informed.`,
        },
        {
          name: `# 🔎 looking-for-team`,
          value: `If you are looking for a Crew (Crew +30 Players)`,
        },
        {
          name: `# 🔎 looking-for-players`,
          value: `If you are looking for players (For your team or just to play some games)`,
        },
        {
          name: `# 🏆 looking-for-scrim`,
          value: `If you are looking for scrim`,
        },
        {
          name: `# 📊 ggs`,
          value: `Share your screenshot of stats or game's leaderboard`,
        },
        {
          name: `# 🎬 self-promotions`,
          value: `Only to promote your content related to Knockout City.`,
        })
        message.channel.send(channelsExpl)
        message.channel.send(":key: https://discord.gg/mPB6EM3M8Y")
        message.delete(message)
    }
  }

}