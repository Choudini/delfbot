console.log('[Selfbot] By Praumat.')
console.log('[Selfbot] Y"a des bouts de codes dans des fichiers useless si jamais tu veux voir des trucs.')
console.log('[Selfbot] Attention tu peux te faire ban.')
const Discord = require("discord.js")
const bot = new Discord.Client()



const config = require("./config.json")
const prefix = config.prefix


bot.on("ready", () => {
    bot.login(config.token).catch(console.error);
    console.log('----------------------------------------------------------')
    console.log('[Selfbot] Connexion via le Token avec succès.')
    console.log('[Selfbot] Username: ' + bot.user.username)
    console.log('[Selfbot] Version 1.1')
})




bot.on("message", msg => { //ici tu peux voir que c'est msg, tu peux mettre ce que tu veux, tu peux même mettre fdp ça va marcher mais ducoup tu devras mettre fdp à la place des msg
    
    let cmd = msg.content.split(" ")[0]
    cmd = cmd.slice(prefix.length)

 
    if (msg.author.id !== config.userid) return; //ce bout de code très utile si t'as pas envie que le bot répondent aux autres t'ajoutes ça. Comme tu peux voir ici c'est msg, et plus bas ça sera message, fin bref tu dois avoir compris.

    if (cmd === "ping") {
       msg.channel.send(":ping_pong: Pong! **" + bot.ping.toFixed() + "**ms")
    }
   
  

   


 
})

bot.on("message", message => { //ici c'est message ducoup pour montrer comment ça fonctionne ducoup.

    if (message.author.id !== config.userid) return;
if (message.content.startsWith('avatar')) {
    
  if (!message.mentions.users.size) {
    let embed = new Discord.RichEmbed()
    .setImage(message.author.displayAvatarURL) //Avatar de l'utilisateur
    .setColor('RANDOM') // Génere une couleur aléatoire, tu peux changer ça en mettant un code couleur
    return  message.channel.send(embed);
    
    }
   
  const avatarList = message.mentions.users.map(user => {

    let embed = new Discord.RichEmbed()
  .setImage(user.displayAvatarURL)
  .setColor('RANDOM') 
  message.channel.send(embed);
  })


 
};
})





bot.on('message', message => {
 
    const config = require("./config.json")


//purge 100 messages max :/ Je sais pas comment faire plus. NEW : j'ai des solutions que j'appliquerai soon.
    if (message.author.id !== config.userid) return;

    let pruneprefix = config.prefix;
    if (!message.content.startsWith(pruneprefix)) return;
 
    const params = message.content.split(' ').slice(1);
    if (message.content.startsWith(pruneprefix+'purge')) {
        let messagecount = parseInt(params[0]);
     
        message.channel.fetchMessages({
                limit: 100
            })
            .then(messages => {
                let msg_array = messages.array();
                msg_array = msg_array.filter(m => m.author.id === bot.user.id);
                msg_array.length = messagecount + 1;
                msg_array.map(m => m.delete().catch(console.error));
            });
    }



     
  


});



bot.login(config.token).catch(console.error);
