const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const fs = require("fs/promises");

module.exports = {
    data: {
        name: "ost",
        description: "Get an OST Song from Pressure's soundtrack",
        "integration_types": [0, 1],
        "contexts": [0, 1, 2]
    },
    async execute(interaction) {

      const ostsJsonData = await fs.readFile("data/ost.json", {encoding: "utf8"});
      const ostsMap = JSON.parse(ostsJsonData);
      const osts = ostsMap["ost"];
      const ost = osts[Math.floor(Math.random() * osts.length)];

      const embed = new EmbedBuilder()
      .setColor(`#768996`)
      .setTitle(`${ost.name}`)
      .addFields({ name: 'YouTube', value: `${ost.youtube}` })
      .addFields({ name: 'Spotify', value: `${ost.spotify}` })
      .addFields({ name: 'Apple Music', value: `${ost.apple}` })
      .setThumbnail(`https://cdn.sylvee.xyz/pressureost${ost.num}.png`)
      .setFooter({ text: `${ost.footer}` })

      await interaction.reply({ embeds: [embed] });
    },
};