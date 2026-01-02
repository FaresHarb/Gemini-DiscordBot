# Discord Gemini Bot

🤖 A powerful Discord bot that integrates Google's Gemini AI to bring intelligent conversations directly to your Discord server. Chat with cutting-edge AI technology seamlessly within your community!

## Prerequisites

Before running this bot, make sure you have:
- [Node.js](https://nodejs.org/) installed (version 16.0.0 or higher)
- A Discord application and bot token
- A Google AI Studio API key for Gemini

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/FaresHarb/Gemini-DiscordBot
   cd Gemini-DiscordBot
   ```

2. **Install dependencies**
   ```bash
   npm install discord.js
   npm install @google/genai
   ```

## Configuration

1. **Get your Discord Bot Token and Client ID**
   - Go to the [Discord Developer Portal](https://discord.com/developers/applications)
   - Create a new application or select an existing one
   - Go to the "Bot" section and copy your bot token
   - Go to the "General Information" section and copy your Client ID

2. **Get your Google AI API Key**
   - Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Create a new API key or use an existing one

3. **Configure the bot**
   - Open the `config.js` file in your project directory
   - Replace the placeholder values with your actual credentials:
   ```javascript
   module.exports = {
     token: 'YOUR_DISCORD_BOT_TOKEN',
     clientId: 'YOUR_DISCORD_CLIENT_ID',
     googleApiKey: 'YOUR_GOOGLE_AI_API_KEY'
   };
   ```

## Running the Bot

1. **First time setup - Deploy commands** (only needed once):
   ```bash
   node deploy-commands.js
   ```

2. **Start the bot**:
   ```bash
   node index.js
   ```

If everything is configured correctly, you should see a message indicating that the bot is online.

## Bot Permissions

Make sure your bot has the following permissions in your Discord server:
- Send Messages
- Read Message History
- Use Slash Commands (if applicable)

## Inviting the Bot to Your Server

1. Go to the Discord Developer Portal
2. Navigate to your application
3. Go to the "OAuth2" > "URL Generator" section
4. Select "bot" in scopes
5. Select the required permissions
6. Copy the generated URL and open it in your browser
7. Select your server and authorize the bot

## Features

- AI-powered conversations using Google's Gemini model
- Discord integration for seamless chat experience

## Troubleshooting

**Bot not responding:**
- Check that all tokens and IDs in `config.js` are correct
- Ensure the bot has proper permissions in your Discord server
- Check the console for any error messages

**API errors:**
- Verify your Google AI API key is valid and has quota remaining
- Check that your Discord bot token hasn't expired

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details.

This means you are free to use, modify, and distribute this software, but any derivative works must also be licensed under GPL v3.0 and made available as open source.

## Support

If you need help or have questions, please [create an issue](link-to-your-issues-page) or contact [your contact information].

---

**Note:** Keep your tokens and API keys secure and never commit them to version control. Consider using environment variables for production deployments.
