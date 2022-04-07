
![alt text](https://cdn.discordapp.com/attachments/944961145582784582/961681851024560229/Picsart_22-04-06_18-12-56-543.jpg)
## Install 
**Require Discord.js V13 Or High | Node 16 Or High.** 
```sh-session
npm i logger-system
```
## Define Client For Package :
* The Bot Is Require (CHANNEL , REACTION , MESSAGE) Partials
```js
const log = require('logger-system')
const {Client} = require('discord.js') ////13
const client = new Client({ intents: [
	Intents.FLAGS.GUILDS,
	Intents.FLAGS.GUILD_MESSAGES,
	Intents.FLAGS.GUILD_MEMBERS,
	Intents.FLAGS.GUILD_INVITES,
  Intents.GUILD_MESSAGE_REACTIONS
  Intents.FLAGS.GUILD_INVITES,


], partials: [
	"MESSAGE",
	"CHANNEL",
	"GUILD_MEMBER",
  "REACTION"
]});

const logger = new log(client)

logger.on('ready', bot => {
    console.log(`${bot.username} is ready`)
})

clinet.login('Your Super Hero Token')

```

## Reaction Logger :
```js
logger.on('reactionLog', (user,message) => {
    console.log(`
    Emoji Added By : 
    ${user.username}
    in :
    ${message.channel.name}
    message author : 
    ${message.user.username}

    `)
})
```

## File Logger : 
* When Some One Delete Message If The Message Include Attachments The Bot Will Log it
```js
logger.on('fileLog',(url,user,channel) => {
  console.log(`
${user.username} Deleted A message in ${channel.name}
Message Attachment url  : 
${url}
`)
})
```

## Guild Join / Leave Logger :
```js
logger.on('memberJoin', (member,inviter) => {
  console.log(`
${member.username} Joined The Guild By ${inviter.username}
`)
})
logger.on('memberLeave', (member,inviter) => {
  console.log(`
${member.username} Leaved The Guild 
`)
})
```
## Support Server : 
[Click Here](https://discord.gg/uPPMAAAC)

