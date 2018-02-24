const Discord = require('discord.js');
const guilds = require("../configs/guilds.json");
const fs = module.require("fs");

module.exports.run = async (bot, message, args) => {
    if (!(message.channel.type === "text")) return;
    if (!message.member.hasPermission("MANAGE_SERVER")) return console.log(`${message.author.tag} attempted 'config' command with insufficient permissions.`);
    if (args[0] == 'logchannel') {
        guilds[message.channel.guild.id].logChannelID = message.channel.id
        fs.writeFile("./configs/guilds.json", JSON.stringify(guilds, null, 4), err => {
            if (err) console.error('Error saving guilds.json file:', err);
        });
        message.channel.send(`This channel has been added to the guild config as the logChannel.`)
    }
    else if (args[0] == 'botchannel') {
        guilds[message.channel.guild.id].botChannelID = message.channel.id
        fs.writeFile("./configs/guilds.json", JSON.stringify(guilds, null, 4), err => {
            if (err) console.error('Error saving guilds.json file:', err);
        });
        message.channel.send(`This channel has been added to the guild config as the botChannel.`)
    }
    else if (args[0] == 'adminbotchannel') {
        guilds[message.channel.guild.id].adminbotChannelID = message.channel.id
        fs.writeFile("./configs/guilds.json", JSON.stringify(guilds, null, 4), err => {
            if (err) console.error('Error saving guilds.json file:', err);
        });
        message.channel.send(`This channel has been added to the guild config as the adminbotChannel.`)
    }
    else {
        return;
    }
}

module.exports.help = {
    name: "config",
    usage: "config <args>",
    description: "configure the current server"
}