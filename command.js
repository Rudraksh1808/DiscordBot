import { REST, Routes } from 'discord.js';

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
    // to start command use npm command.js and for sever use npm start and use "type": "module", in package.json for customised commands /ping
  },
];

const rest = new REST({ version: '10' }).setToken("MTI4NDU0MjM3NTQxODUzMTkwMQ.GmieCQ.BSUUwp4GIzrLTIqB1mq4OcBtRzcyYRzUKjUOlY");

    try {
        console.log('Started refreshing application (/) commands.');
      
        await rest.put(Routes.applicationCommands("1284542375418531901"), { body: commands });
      
        console.log('Successfully reloaded application (/) commands.');
      } catch (error) {
        console.error(error);
}
