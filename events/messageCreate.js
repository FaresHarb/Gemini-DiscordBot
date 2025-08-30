const { Events, TextChannel, Message, BaseChannel } = require('discord.js');
const { GoogleGenAI } = require("@google/genai");
const { googleAiApiKey, channelId } = require('../config.json');

const genAI = new GoogleGenAI(googleAiApiKey);

const ai = new GoogleGenAI({ apiKey: googleAiApiKey });

async function aiResponse(message) {
    try {
        const prompt = message.content;

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
        });
        message.reply(response.text);
    } catch (error) {
        console.error('Error with AI response:', error);
        message.reply('error');
    }
}

module.exports = {
    name: Events.MessageCreate,
    async execute(message) {
        if (message.author.bot) return;
        if (channelId != 0) {
            if (message.channel.id == channelId)
                await aiResponse(message);
        }
        else {
            await aiResponse(message);
        }
    },
};
