const {JDClient, Discord} = require('./jdclient.js');
var bot = new JDClient();
const queue = new Map();

bot.trigger = '?';
bot.token = 'Your token here';

        bot.discord.on("guildMemberAdd", (member) => {
        const embed = new Discord.RichEmbed()
        .setColor(0x00d0ff)
        .setTitle("New user joined!")
        .setDescription("Welcome, " + member + "!")
        .setFooter("https://discord.gg/PEkQEnQ", "https://2.bp.blogspot.com/-THlHlH3GFlE/T8IygfqYKuI/AAAAAAAAABQ/TppgmJtazQM/s1600/es-jonne-w7kyzv.png")
        .setTimestamp()
        bot.discord.channels.get(member.guild.systemChannelID).send({embed});
            },
        )
        bot.discord.on("guildMemberRemove", (member) => {
        const embed = new Discord.RichEmbed()
        .setColor(0x00d0ff)
        .setTitle("Bye!")
        .setDescription("Good bye, " + member + "!")
        .setFooter("https://discord.gg/PEkQEnQ", "https://2.bp.blogspot.com/-THlHlH3GFlE/T8IygfqYKuI/AAAAAAAAABQ/TppgmJtazQM/s1600/es-jonne-w7kyzv.png")
        .setTimestamp()
        bot.discord.channels.get(member.guild.systemChannelID).send({embed});
        },

        bot.onConnect = ()=>{
            console.log('We are logged into Dickcord!');
            })
            
        bot.Commands = {

        help: {
        text: "shows all avaible commands",
        run: (args, pars, arr) => {
            args.channel.send("all avaible commands " + "your command here")
        }
        },

	ping: {
		text: 'Respond with pong!',
		run: (args, pars, arr) => {
            args.channel.send('Pong!');
            console.log("Console log. " + "User " + args.member.user.tag + " Used ping command ")
            console.log("------------------------------")
            args.delete(1)
        },
    },

    botstatus: {
        text: 'Changes bot status',
        run: (args, pars, arr) => {
            bot.discord.user.setActivity(arr.join(' '), { type: "WATCHING" });
            args.delete(1)
        },
    },
    yeet: {
        text: "Emoji",
        run: (args, pars, arr) => {
        args.react('🆒').then(() => args.react('💯'));

        const filter = (reaction, user) => {
            return ['🆒', '💯'].includes(reaction.emoji.name) && user.id === args.author.id;
        };

        args.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
            .then(collected => {
                const reaction = collected.first();

                if (reaction.emoji.name === '💯') {
                    args.reply("Answer here")
                } else {
                    args.reply('Answer here.');
                }
            })
            .catch(collected => {
                args.channel.send("Error")
            });
    
            console.log("Console log. " + "User " + args.member.user.tag + " Used emoji command ")
            console.log("------------------------------")
        },
    },

  },

bot.Connect()