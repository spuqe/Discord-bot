const {JDClient, Discord} = require('./jdclient.js');
var bot = new JDClient();
const queue = new Map();

bot.trigger = '?';
bot.token = 'Token here';

        bot.discord.on("guildMemberAdd", (member) => {
        const embed = new Discord.RichEmbed()
        .setColor(0x00d0ff)
        .setTitle("New user joined!")
        .setDescription("Welcome, " + member + "!")
        .setFooter("https://discord.gg/xHusQ4d", "https://cdn.drawception.com/images/panels/2017/10-13/P7sMKBC2pR-4.png")
        .setTimestamp()
        bot.discord.channels.get(member.guild.systemChannelID).send({embed});
            },
        )
        bot.discord.on("guildMemberRemove", (member) => {
        const embed = new Discord.RichEmbed()
        .setColor(0x00d0ff)
        .setTitle("Bye!")
        .setDescription("Good bye, " + member + "!")
        .setFooter("https://discord.gg/xHusQ4d", "https://cdn.drawception.com/images/panels/2017/10-13/P7sMKBC2pR-4.png")
        .setTimestamp()
        bot.discord.channels.get(member.guild.systemChannelID).send({embed});
        },

        bot.onConnect = ()=>{
            console.log('We are logged into Dickcord!');
            })
            
        bot.Commands = {

    botstatus: {
        text: 'Changes bot status',
        run: (args, pars, arr) => {
            bot.discord.user.setActivity(arr.join(' '), { type: "WATCHING" });
            args.delete(1)
            console.log(args.author.tag, 'used the botstatus command!');
            },
         },

         joke: {
            text: "fun",
            run: (args, pars, arr) => {
                var facts = ["Yo mama's so fat, when she skips a meal, the stock market drops ", "Yo mama's so fat, when she fell I didn't laugh, but the sidewalk cracked up.", "Yo mama's so fat, it took me two buses and a train to get to her good side.", "Why do cows never have any money? Because the farmers milk them dry!", "My wife told me I had to stop acting like a flamingo. So I had to put my foot down.", "As I suspected, someone has been adding soil to my garden. The plot thickens.", "When a deaf person sees someone yawn do they think it’s a scream?", "What did the traffic light say to the car? Don’t look! I’m about to change.", "Somebody stole my microsoft office and they're going to pay - you have my Word.", "What did the left eye say to the right eye? Between you and me, something smells."];
                var fact = Math.floor(Math.random() * facts.length);
                args.channel.send("Finding fun jokes... "),
                args.channel.send(facts[fact]);
                args.delete(1)
                console.log(args.author.tag, 'used the joke command!');

            },
        },

        facts: {
            text: "facts",
            run: (args, pars, arr) => {
                var facts = ["Hawaiian pizza was invented by a Greek man in Canada. ", "The world’s first cosmonaut was a dog.", "Ketchup was invented in China.", "All blue-eyed people have a common ancestor.", "Workers are most productive on Mondays.", "The human eye can detect the light of a candle from over a mile away.", "You can tell if someone really likes you by looking at their feet while you talk.", "The oldest “your mom” joke dates from ancient Babylonia", "Penguin urine makes up about 3% of Antarctica’s glaciers.", "The name for the fear of long words is 36 letters long. ", "Nutella was originally invented as a way to stretch chocolate rations.", "A cat named Sweet Tart is the Mayor of Omena, Michigan.", "There is a medical procedure to remove the sense of fear.", "Genghis Khan has about 16 million living descendants.", "Grapes are toxic to dogs.", "Barbie’s full name is Barbara Millicent Roberts.", "Some snakes can sense when an earthquake is coming.", "Killer whales aren’t really whales.", "90% of the world’s fresh water is in Antarctica.",];
                var fact = Math.floor(Math.random() * facts.length);
                args.channel.send("searching for facts... "),
                args.channel.send(facts[fact]);
                args.delete(1)
                console.log(args.author.tag, 'used the facts command!');
            },
        },
        roulette: {
        text: "russian roulette",
        run: (args, pars, arr) => {
            var facts = ["YOU LOSE!", "YOU WIN!", "YOU LOSE!", "YOU WIN!", "YOU LOSE!", "YOU WIN!",];
            var fact = Math.floor(Math.random() * facts.length);

            args.react('🖤').then(() => args.react('❤'));
            const filter = (reaction, user) => {
            return ['🖤', '❤'].includes(reaction.emoji.name) && user.id === args.author.id;
            };
            args.channel.send("Pick a color! Black or red!")
            args.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
            .then(collected => {
            const reaction = collected.first();

            if (reaction.emoji.name === '🖤') {
            args.channel.send(facts[fact]);
            } else {
            args.channel.send(facts[fact]);
            }
            })
            .catch(collected => {
            args.channel.send('you reacted with neither a thumbs up, nor a thumbs down.');
            });
            }
        }
    },

bot.Connect()
