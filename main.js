//
// Déclarations
const { Client, Collection, Discord, MessageEmbed } = require('discord.js');
const { TOKEN, PREFIX } = require('./config');
const fs = require('fs');

//
// Nécessaire pour récupérer les anciens messages avant son lancement/reboot
const client = new Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
client.commands = new Collection();
client.request = new (require("rss-parser"))();

//
// Chargements de toutes les commandes sur les fichiers séparés dans le dossier "commands"
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
  console.log(`Commande chargée:  ${command.name}`);
}

//
// Quand le bot se lance
client.on('ready', () => {
  client.user.setActivity('making us his team');
  console.log(`Connected as ${client.user.tag}!`);
});

//
// Détecter l'event message envoyé et voir si c'est une commande
client.on('message', message => {
  if (!message.content.startsWith(PREFIX) || message.author.bot) return;

  const args = message.content.slice(PREFIX.length).split(" ");      
  console.log(args);

  const command = args.shift().toLowerCase();

  console.log(command);

  if (!client.commands.has(command)) return;
  client.commands.get(command).execute(client, message, args); 
});


//
// CHANNEL TEMPORAIRES 
// voir le fichier ./channels temporaires.js

//
// Fin du code
client.login(TOKEN)