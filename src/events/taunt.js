const { PermissionFlagsBits } = require("discord.js");

module.exports = {
    name: "messageCreate",
    async execute(message) {

        if (message.author.bot || !message.guild) return;
        if (!message.guild.members.me.permissionsIn(message.channel.id).has(PermissionFlagsBits.SendMessages)) return;
        const chance = Math.random() * 500;
        const taunts = [
          "MORON!!!!",
          "Your stupidity continues to amaze me.",
          "You are so goddamn gullible.",
          "Seriously!? How are you this stupid?",
          "Better hope you're bulletproof, buddy!",
          "I'm holding all the cards, and guess what? THEY'RE ALL FULL HOUSES! Never played cards, meaning to learn.",
          "Would you like to partake in my newest art project? I'll paint these walls with your blood.",
          "Urrrgh. COME OOON! YOU'RE NO FUN AT ALL!!",
          "Aeeruggg. COME OOON! YOU'RE NO FUN AT ALL!!",
          "Aeeruggg. You're BOOOORING!!!",
          "STOP HIDING!",
          "QUIT BEING A COWARD!",
          "If it isn't my WORST pal!",
          "You're wasting your time.",
          "Hey."
        ];
        const taunt = taunts[Math.floor(Math.random() * taunts.length)];
        if (chance < 497) {
            return;
          } else {
            message.channel.send(`<:Painter:1395294811447365682> ${taunt}`);
          };
    },
};