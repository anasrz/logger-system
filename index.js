var emitter = require('events').EventEmitter;
var util = require('util'); 
function log(client) {
  var me = this; 
  setTimeout(function () { 
    client.on('ready', () => {
      
    
 
    me.emit('ready',client.user); 

      
    })

    

     
    } , 1)
  client.on('messageReactionAdd',async (reaction,user) => {
 
    const message = !reaction.message.author ? await reaction.message.fetch() : reaction.message;
  const type = reaction.emoji.animated
    let typ = ''
    if(type === null) {
     typ = 'Normal' 
    }
        if(type === false) {
     typ = 'Animated' 
        }
    if(type === true) {
     typ = 'Not Animated' 
    }
    
    
  
const member = {
    id : user.id,
    username : user.username,

}

const msg = {
id : message.id,
user : {
    id : message.author.id,
    username : message.author.username,


},
channel : {
id : message.channel.id,
name : message.channel.name,

},
guild : {
id : message.guild.name,
name : message.guild.name,
},
    reaction : {
        name : reaction.emoji.name,
        id : reaction.emoji.id,
        type : typ,
    }

  

}
       
        setTimeout(function () { 


          
          
          me.emit('reactionLog',member,msg)
      } , 1)
})
const InvitesTracker = require('@androz2091/discord-invites-tracker');
const tracker = InvitesTracker.init(client, {
    fetchGuilds: true,
    fetchVanity: true,
    fetchAuditLogs: true
});
  tracker.on('guildMemberAdd', (member, type, invite) => {
 
    let inviter = ''   
    
   
       
    if(type === 'normal'){
         inviter = invite.inviter;
         
         }
      if(type === 'vanity'){
         inviter = {
           username : null,
           id : null,
           type : 'vanity'
    }
         }
        if(type === 'unknown'){
            inviter = {
           username : null,
           id : null,
           type : 'Error When Trying To Get Inviter'
            }
            }
          if(type === 'permissions'){
         inviter = {
           username : null,
           id : null,
           type : 'Please Check Bot Permmisions Icant Fetch Guild Invites'
         }
         }
      
            setTimeout(function () { 


          
          
          me.emit('memberJoin',member.user,inviter)
      } , 1)
  })
  client.on('guildMemberRemove', member => {
    setTimeout(function () { 


          
          
          me.emit('memberLeave',member)
      } , 1)
  })
  client.on("messageDelete", async (message) => {
      message.attachments.forEach(anas => {
        const url = anas.proxyURL;
        
        setTimeout(function () { 
        
     var format = anas.contentType.split("/").pop();   

          
          
          me.emit('fileLog',anas.url,message.author,message.channel,format)
      } , 1)
        })

    

})

  
    
} 
util.inherits(log, emitter)

module.exports = log;
 
                                                                                                            
