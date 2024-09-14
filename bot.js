const { Client, GatewayIntentBits, Message } = require("discord.js");
const client = new Client({ 
    intents: [GatewayIntentBits.Guilds, 
    GatewayIntentBits.GuildMessages, 
    GatewayIntentBits.MessageContent],
 });

client.on("messageCreate", (Message)=>{
    if(Message.author.bot) return;
    if(Message.content.startsWith("create")){
        const URL = Message.content.split("create")[1];
        return Message.reply({
            content: "Generating Short ID for" + URL,
        });
    }
    Message.reply({
        content: "Hi! How can I help you?",
    });

    client.on('interactionCreate', interaction =>{
        console.log(interaction);
        interaction.reply("Pong!!");
    });
});

client.login("MTI4NDU0MjM3NTQxODUzMTkwMQ.GmieCQ.BSUUwp4GIzrLTIqB1mq4OcBtRzcyYRzUKjUOlY");

