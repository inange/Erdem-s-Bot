
const Discord = require("discord.js");


const client = new Discord.Client();

 
const config = require("./config.json");


client.on("ready", () => {
 
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
 
  client.user.setGame(` ${client.guilds.size} sv ye bulasti ++help`);
});

client.on("guildCreate", guild => {
  
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setGame(`${client.guilds.size} sv ye bulasti ++help`);
});

client.on("guildDelete", guild => {
 
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setGame(`${client.guilds.size} sv ye bulasti ++help`);
});


client.on("message", async message => {

  if(message.author.bot) return;

  if(message.content.indexOf(config.prefix) !== 0) return;
  

  const args = message.content.slice(config.prefix.length).trim().split(/ +-/g);
  const command = args.shift().toLowerCase();
  
  // Let's go with a few common example commands! Feel free to delete or change those.
  
  if(command === "ping") {
    
    const m = await message.channel.send("Ping?");
    m.edit(`pingin ${m.createdTimestamp - message.createdTimestamp}ms. botun pingi : ${Math.round(client.ping)}ms`);
  }
  if(command === "help") {
  message.channel.send("++soyle (mesajiniz)");
  message.channel.send("++sevap");
  message.channel.send("++dank");
  message.channel.send("++komikmi");
  message.channel.send("++chatitemizle (2-100 arası sayı) (chati temizler)");
  message.channel.send("++help");
  }
  if(command === "selamla") {
  message.channel.send("--------------------------------------------");
  message.channel.send("                                         ");
  message.channel.send("                                         ");
  message.channel.send(`@${message.author.tag} HERKESI SELAMLIYOR`);
  message.channel.send("                                         ");
  message.channel.send("                                         ");
  message.channel.send("--------------------------------------------");
  }
  
   if(command === "soyle") {
    
    const sayMessage = args.join(" ");
  
    message.delete().catch(O_o=>{}); 
   
    message.channel.send(sayMessage);
  }
  if(command === "sevap") { 
    const m = await message.channel.send("opening semavats doors please standby.");
    m.edit("opening semavats doors please standby..");
    m.edit("opening semavats doors please standby...");
    m.edit("opening semavats doors please standby..");
    m.edit("opening semavats doors please standby.");
    m.edit("opening semavats doors please standby..");
    m.edit("opening semavats doors please standby...");
    m.edit("opening semavats doors please standby..");
    m.edit("opening semavats doors please standby.");
    m.edit("opening semavats doors please standby..");
    m.edit("opening semavats doors please standby...");
    m.edit("opening semavats doors please standby..");
    m.edit("opening semavats doors please standby.");
    m.edit("opening semavats doors please standby..");
    m.edit("opening semavats doors please standby...");
    m.edit("opening semavats doors please standby..");
    m.edit("opening semavats doors please standby.");
    m.edit("Can't Connect To Allah PLEASE TRY AGAIN");
  }
 if(command === "ahla") { 
    const m = await message.channel.send("Ah");
    const n = await message.channel.send("aH");
    m.edit("AH");
    n.edit("aH");
    m.edit("ah");
    n.edit("Ah");
    m.edit("AH");
    n.edit("aH");
    m.edit("AH");
    m.edit("aHHHHHHHH");
    n.edit("ah");
    m.edit("OHH");
    n.edit("OHHHHHHH");
    m.edit("aH");
    m.edit("OhOhOhOhOhOHOHHO");
    n.edit("aH");
    m.edit("ah");
    m.edit("Ah");
    n.edit("AH");
    m.edit("HOHOHOHOHO");
  
  }
    if(command === "erdem") { 
    const m = await message.channel.send("Kodumun sakatı");
    m.edit("Kodumun sakatı +1");
    m.edit("Kodumun sakatı +2");
    m.edit("Kodumun sakatı +3");
    m.edit("Kodumun sakatı +4");
    m.edit("Kodumun sakatı +5");
    m.edit("Kodumun sakatı +6");
    m.edit("Kodumun sakatı +7");
    m.edit("Kodumun sakatı +8");
    m.edit("Kodumun sakatı +9");
    m.edit("Kodumun sakatı +10");
    m.edit("Kodumun sakatı +11");
    m.edit("Kodumun sakatı +12");
    m.edit("Kodumun sakatı +13");
    m.edit("Kodumun sakatı +15");
    m.edit("Kodumun sakatı +16");
    m.edit("Kodumun sakatı +17");
    m.edit("Kodumun sakatı +18");
    m.edit("Kodumun sakatı +19");
    m.edit("Kodumun sakatı +20");
    m.edit("Kodumun sakatı +21");
    m.edit("Kodumun sakatı +22");
    m.edit("Kodumun sakatı +23");
    m.edit("Kodumun sakatı +24");
    m.edit("Kodumun sakatı +25");
    m.edit("Kodumun sakatı +26");
    m.edit("Kodumun sakatı +27");
    m.edit("Kodumun sakatı +28");
    m.edit("Kodumun sakatı +29");
    m.edit("Kodumun sakatı +30");
    m.edit("Kodumun sakatı +31");
    }
    if(command === "dank") { 
    message.channel.send("https://i.hizliresim.com/Z9Bqmg.png");
  }
    if(command === "komikmi") { 
    message.channel.send("https://i.hizliresim.com/YgLyvl.png");
  }
  
  
  if(command === "kick") {
    if(!message.member.roles.some(r=>["Sunucu", "Ekibi", "Kurucu", "Yetkilisi", "Sorumlusu"].includes(r.name)) )
      return message.reply("Yetkin yok veled!");
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Böyle biri yok!");
    if(!member.kickable) 
      return message.reply("Atamıyorum Benim yetkim mi yok yoksa onların yetkisi benden yüksekmi ?");
    
   
    let reason = args.slice(1).join(' ');
    if(!reason)
      return message.reply("Bir Sebebp belirtin");
    
    
    await member.kick(reason)
      .catch(error => message.reply(`üzgünüm ${message.author} kickleyemiyorum : ${error}`));
    message.reply(`${member.user.tag} , ${message.author.tag} tarafından kicklendi .sebep: ${reason}`);

  }
  
  if(command === "ban") {
   
    if(!message.member.roles.some(r=>["Administrator"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.bannable) 
      return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");

    let reason = args.slice(1).join(' ');
    if(!reason)
      return message.reply("Please indicate a reason for the ban!");
    
    await member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
    message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
  }
  
  if(command === "ct") {
    const deleteCount = parseInt(args[0], 10);
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("2 ile 100 arası bir sayı gir !");
    const fetched = await message.channel.fetchMessages({count: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Hata : ${error}`));
  }
});

client.login(process.env.BOT_TOKEN);
