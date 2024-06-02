// Setup our environment variables via dotenv
require('dotenv').config()

// Import relevant classes from discord.js
const { Client, Intents, Interaction, Constants} = require('discord.js');

// Instantiate a new client with some necessary parameters.
const client = new Client(
    { intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] }
);


const sdk = require('api')('@alchemy-docs/v1.0#ipnv4gl7eukzcm');
sdk.server('https://eth-mainnet.g.alchemy.com/nft/v2');

let result = "";
// Notify progress
client.on('ready', function(e){
    console.log(`Logged in as ${client.user.tag}!`)

    const guildId = "823031986368675840";
    const guild = client.guilds.cache.get(guildId);
    let commands

    if (guild) {
        commands = guild.commands
    } else {
        commands = client.application?.commands
    }

    commands?.create({
        name: "create_account",
        description: "create xrpl account",
    })



    commands?.create({
        name: "send_xrp",
        description: "send xrp",
        options: [
            {
                name: 'amount',
                description: 'xrp amount',
                required: true,
                type: Constants.ApplicationCommandOptionTypes.STRING
            },
            {
                name: 'address',
                description: 'wallet address',
                required: true,
                type: Constants.ApplicationCommandOptionTypes.STRING
            }
        ]
    })

})

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) {
        return
    }

    const { commandName, options} = interaction

    if (commandName === 'create_account') {
        
        
        //create xrpl account

    }  else if (commandName === 'send_xrp') {
        const address = options.getString('address')
        const amount = options.getString('amount')

        //send using parameter variables
        

       
    }
})







// Authenticate
client.login(process.env.DISCORD_TOKEN)