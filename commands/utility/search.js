const { SlashCommandBuilder } = require("@discordjs/builders");
const { GoogleGenAI } = require('@google/genai');
const { googleAiApiKey } = require('../../config.json');
const wait = require('node:timers/promises').setTimeout;

const ai = new GoogleGenAI({ apiKey: googleAiApiKey });

async function aisearch(query, interaction) {
    try {
        const groundingTool = {
            googleSearch: {},
        };

        const config = {
            tools: [groundingTool],
        };
        
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: query,
            config,
        });
        
        await interaction.editReply(response.text);
    } catch (error) {
        console.log(error);
        await interaction.editReply('Sorry, there was an error processing your search.');
    }
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName('search')
        .setDescription('Searches Google for you!')
        .addStringOption(option =>
            option
                .setName('query')
                .setDescription('What would you like to search about')
                .setRequired(true)),
    async execute(interaction) {
        await interaction.deferReply();
        await aisearch(interaction.options.getString('query'), interaction);
    }
};