
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
  const o = await message.channel.send("aH");
  const p = await message.channel.send("aH");
  const r = await message.channel.send("aH");
  const s = await message.channel.send("aH");
  const t = await message.channel.send("aH");
    m.edit("AH");
    n.edit("aH");
    m.edit("ah");
    n.edit("Ah");
    o.edit("AH");
    n.edit("aH");
    m.edit("AH");
    p.edit("aHHHHHHHH");
    n.edit("ah");
    m.edit("OHH");
    n.edit("OHHHHHHH");
    s.edit("aH");
    m.edit("OhOhOhOhOhOHOHHO");
    n.edit("aH");
    r.edit("ah");
    m.edit("Ah");
    n.edit("AH");
    t.edit("HOHOHOHOHO");
    o.edit("AH");
    s.edit("aH");
    m.edit("ah");
    n.edit("Ah");
    o.edit("AH");
    p.edit("aH");
    m.edit("AH");
    r.edit("aHHHHHHHH");
    n.edit("ah");
    m.edit("OHH");
    n.edit("OHHHHHHH");
    s.edit("aH");
    m.edit("OhOhOhOhOhOHOHHO");
    n.edit("aH");
    r.edit("ah");
    m.edit("Ah");
    n.edit("AH");
    t.edit("HOHOHOHOHO");
  
  }
    if(command === "erdem") { 
    const m = await message.channel.send(":regional_indicator_s:");
    m.edit(":regional_indicator_s: :regional_indicator_a:");
    m.edit(":regional_indicator_s: :regional_indicator_a: :regional_indicator_k:");
    m.edit(":regional_indicator_s: :regional_indicator_a: :regional_indicator_k: :regional_indicator_a:");
    m.edit(":regional_indicator_s: :regional_indicator_a: :regional_indicator_k: :regional_indicator_a: :regional_indicator_t:");
    m.edit(":regional_indicator_s: :regional_indicator_a: :regional_indicator_k: :regional_indicator_a: :regional_indicator_t:       :regional_indicator_e:");
    m.edit(":regional_indicator_s: :regional_indicator_a: :regional_indicator_k: :regional_indicator_a: :regional_indicator_t:       :regional_indicator_e: :regional_indicator_r:");
    m.edit(":regional_indicator_s: :regional_indicator_a: :regional_indicator_k: :regional_indicator_a: :regional_indicator_t:       :regional_indicator_e: :regional_indicator_r: :regional_indicator_d:");
    m.edit(":regional_indicator_s: :regional_indicator_a: :regional_indicator_k: :regional_indicator_a: :regional_indicator_t:       :regional_indicator_e: :regional_indicator_r: :regional_indicator_d: :regional_indicator_e:");
    m.edit(":regional_indicator_s: :regional_indicator_a: :regional_indicator_k: :regional_indicator_a: :regional_indicator_t:       :regional_indicator_e: :regional_indicator_r: :regional_indicator_d: :regional_indicator_e: :regional_indicator_m:");
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
