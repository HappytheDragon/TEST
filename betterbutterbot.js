
const Discord = require('discord.js');
const client = new Discord.Client();
const channel = ('233696655688466435');





function survey() {}
client.login('MzE2NzE1NzY2ODQ4NDIxODg4.DAaOQA.xt_H2gVk34uzUqvW6bhihwQ8QRA');

client.on('message', (message) => {


  // Set the prefix
  let prefix = 'B3 ';
  // Exit and stop if the prefix is not there or if user is a bot
  if (!message.content.startsWith(prefix) || message.author.bot) return

  if (message.content.startsWith(prefix + 'Toto')) {
    message.channel.send('https://www.youtube.com/watch?v=FTQbiNvZqaY')
  } else
  if (message.content.startsWith(prefix + 'Patrick')) {
    message.channel.send('https://www.youtube.com/watch?v=PNHjBpsh0KQ')
	}else
	if (message.content.startsWith(prefix + 'Survey')) {message.channel.fetchMessages({limit: 100})
  .then(messages => console.log(messages.MessageEmbed)
  .catch(console.error))

}
if (message.content.startsWith(prefix + 'Toto')) {
  message.channel.send('https://www.youtube.com/watch?v=FTQbiNvZqaY')

}
if (message.content.startsWith(prefix + 'join')) {
    if(message.content.includes('Overwatch')){message.member.addRole('382627721492168707',[]) ;
        message.channel.send('You have been added too Overwatch')

  }
    else if(message.content.includes('PUBG'))
        {message.member.addRole('382717582894956554',[])
          message.channel.send('You have been added too PUBG')}

    else if(message.content.includes('League of Legends' || 'LOL'))
            {message.member.addRole('382718190800601108',[])
            message.channel.send('You have been added too League of Legends')}

    else if(message.content.includes('Counter Strike' || 'CS:GO'))
                    {message.member.addRole('382719288978440194',[])
                    message.channel.send('You have been added too CS:GO')}


      else{message.channel.send('Unknown Role')}


}
if (message.content.startsWith(prefix + 'leave')) {
    if(message.content.includes('Overwatch')){message.member.removeRole('382627721492168707',[]) ;
        message.channel.send('You have been removed from Overwatch')

  }
    else if(message.content.includes('PUBG'))
        {message.member.removeRole('382717582894956554',[])
          message.channel.send('You have been removed from PUBG')}

    else if(message.content.includes('League of Legends' || 'LOL'))
            {message.member.removeRole('382718190800601108',[])
            message.channel.send('You have been removed from League of Legends')}

    else if(message.content.includes('Counter Strike' || 'CS:GO'))
                    {message.member.removeRole('382719288978440194',[])
                    message.channel.send('You have been removed from CS:GO')}


      else{message.channel.send('Unknown Role')}


}
})
