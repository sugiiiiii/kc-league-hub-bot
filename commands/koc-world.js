const { Collection } = require("discord.js");
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'kocworld',
  description: 'Send community servers list',
  execute(client, message, args) {
    if (message.channel.type === 'dm' || !message.member.hasPermission("MANAGE_MESSAGES")) return;
    else {
        const kocWorld = new MessageEmbed()
        .setColor('4b006e')
        .setTitle(`Knockout City World \n`)
        .setDescription("Here are the main other community servers...")
        .setThumbnail('https://emoji.gg/assets/emoji/7835_earth.png') 
        message.channel.send(kocWorld)
        // message.channel.send("> 🌍 KC LEAGUE **HUB** \n https://discord.gg/mPB6EM3M8Y \n > :flag_it: Knockout City **Italia** \n https://discord.gg/j9SZ8s6XPK \n > :flag_fr: Knockout City **France** \n https://discord.gg/Cn3euhw \n > :flag_de: :flag_at::flag_ch: Knockout City **DE/AT/CH** \n https://discord.gg/hC7ZcfKAnE \n > :flag_be: :flag_nl: :flag_lu: Knockout City **BeNeLux** \n https://discord.gg/K4yCv8aHzR \n > :flag_jp: Knockout City **Japan** \n https://discord.gg/SxGKPEU69s \n > :flag_es: Knockout City **Hispanic** \n https://discord.gg/ZWzKpJ9wvC \n > :flag_ru: Knockout City **CIS** \n https://discord.gg/PtDU3xrfh2 \n > :flag_au: Knockout City **OCE** \n https://discord.gg/44TwVFhgna \n > :flag_tr: Knockout City **Türkiye** \n https://discord.gg/wne7nWNG9h \n")
        message.channel.send("> 🌍 KC LEAGUE **HUB** \n https://discord.gg/mPB6EM3M8Y \n > :flag_it: Knockout City **Italia** \n https://discord.gg/j9SZ8s6XPK \n > :flag_fr: Knockout City **France** \n https://discord.gg/Cn3euhw \n > :flag_au: Knockout City **OCE** \n https://discord.gg/kocityoce \n > :flag_jp: Knockout City **Japan** \n https://discord.gg/SxGKPEU69s \n > :flag_ru: Knockout City **CIS** \n https://discord.gg/PtDU3xrfh2 \n > :flag_tr: Knockout City **Türkiye** \n https://discord.gg/wne7nWNG9h \n")
        message.delete(message)
    }
  }
}