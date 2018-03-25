	// Import the discord.js module
	var Discord = require("discord.js");

	// Create an instance of a Discord client
	var client = new Discord.Client();

	// Here we load the config.json file that contains our token and our prefix values. 
	var config = require("./config.json");
	// config.token contains the bot's token
	// config.prefix contains the message prefix.

	client.on("ready", () => {
	  // This event will run if the bot starts, and logs in, successfully.
	  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
	  // Example of changing the bot's playing game to something useful. `client.user` is what the
	  // docs refer to as the "ClientUser".
	});




	client.on("message", async message => {
	  // This event will run on every single message received, from any channel or DM.
	  
	  // It's good practice to ignore other bots. This also makes your bot ignore itself
	  // and not get into a spam loop (we call that "botception").
	  if(message.author.bot) return;
	  
	  // Also good practice to ignore any message that does not start with our prefix, 
	  // which is set in the configuration file.
	  if(message.content.indexOf(config.prefix) !== 0) return;
	  
	  // Here we separate our "command" name, and our "arguments" for the command. 
	  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
	  // command = say
	  // args = ["Is", "this", "the", "real", "life?"]
	  var args = message.content.slice(config.prefix.length).trim().split(/ +/g);
	  var command = args.shift().toLowerCase();
	  
	  // Let's go with a few common example commands! Feel free to delete or change those.
	  
	  if(command === "ping") {
		// Calculates ping between sending a message and editing it, giving a nice round-trip latency.
		// The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
		message.channel.send(`:ping_pong: Pong!`);
	  }
	  
	  if(command === "say") {
		// makes the bot say something and delete the message. As an example, it's open to anyone to use. 
		// To get the "message" itself we join the `args` back into a string with spaces: 
		var sayMessage = args.join(" ");
		// Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
		message.delete().catch(O_o=>{}); 
		// And we get the bot to say the thing: 
		message.channel.send(sayMessage);
	  }
	  

	if(command === "embed") {
	   message.channel.sendMessage({embed: {
	  color: 3447003,
	  description: "A very simple Embed!"
	}});
	}
	// Level 1 Raids
	if(command === "magikarp") {
		
	var embed = new Discord.RichEmbed()
	  .setTitle("Magikarp #129 | Raid Level 1")
	  .setColor("#6390F0")
	  .setDescription("**:beginner:  TYPE: Water**")
	  .setFooter(">>Full Guide Soon")
	  .setImage("https://i.imgur.com/EjWvamL.gif")
	  .setThumbnail("https://i.imgur.com/2Cp76lc.png")
	  .addField("**:star2: BOSS CP : 1165**", "**:ballot_box_with_check: Caught CP: 104-125**")
	  .addField("**WEATHER BOOST**", ":cloud_rain: Rain")
	  .addField("**WEAK AGAINST**", ":seedling: Grass, :zap: Electric ")

	  message.channel.send({embed});
	}
	
	if(command === "wailmer") {
		
	var embed = new Discord.RichEmbed()
	  .setTitle("Wailmer #320 | Raid Level 1")
	  .setColor("#6390F0")
	  .setDescription("**:beginner:  TYPE: Water**")
	  .setFooter(">>Full Guide Soon")
	  .setImage("https://i.imgur.com/Xm1Vwqo.gif")
	  .setThumbnail("https://i.imgur.com/XL9k8yZ.png")
	  .addField("**:star2: BOSS CP : 3369**", "**:ballot_box_with_check: Caught CP: 756-814**")
	  .addField("**WEATHER BOOST**", ":cloud_rain: Rain")
	  .addField("**WEAK AGAINST**", ":seedling: Grass, :zap: Electric ")

	  message.channel.send({embed});
	}
	
	if(command === "swablu") {
		
	var embed = new Discord.RichEmbed()
	  .setTitle("Swablu #333 | Raid Level 1")
	  .setColor("#A8A77A")
	  .setDescription("**:beginner:  TYPE: Normal/Flying**")
	  .setFooter(">>Full Guide Soon")
	  .setImage("https://i.imgur.com/cg0eael.gif")
	  .setThumbnail("https://i.imgur.com/XyqC5XU.png")
	  .addField("**:star2: BOSS CP : 2766**", "**:ballot_box_with_check: Caught CP: 374-412**")
	  .addField("**WEATHER BOOST**", ":white_sun_small_cloud:  Partly Cloudy, :dash: Wind")
	  .addField("**WEAK AGAINST**", ":diamond_shape_with_a_dot_inside: Rock, :zap: Electric, :snowflake: Ice")

	  message.channel.send({embed});
	}

	if(command === "snorunt") {
		
	var embed = new Discord.RichEmbed()
	  .setTitle("Snorunt #361 | Raid Level 1")
	  .setColor("#96D9D6")
	  .setDescription("**:beginner:  TYPE: Ice**")
	  .setFooter(">>Full Guide Soon")
	  .setImage("https://i.imgur.com/wLKthml.gif")
	  .setThumbnail("https://i.imgur.com/uuqzz6C.png")
	  .addField("**:star2: BOSS CP : 2825**", "**:ballot_box_with_check: Caught CP: 402-441**")
	  .addField("**WEATHER BOOST**", ":snowman: Snow")
	  .addField("**WEAK AGAINST**", ":diamond_shape_with_a_dot_inside: Rock, :boxing_glove: Fighting, :shield: Steel, :fire: Fire")

	  message.channel.send({embed});
	}
	
	//  Level  2 Raids
	
	if(command === "exeggutor") {
		
	var embed = new Discord.RichEmbed()
	  .setTitle("Exeggutor #103 | Raid Level 2")
	  .setColor("#7AC74C")
	  .setDescription("**:beginner:  TYPE: Grass/Psychic**")
	  .setFooter(">>Full Guide Soon")
	  .setImage("https://i.imgur.com/jHnN8vz.gif")
	  .setThumbnail("https://i.imgur.com/3YImmJX.png")
	  .addField("**:star2: BOSS CP : 13839**", "**:ballot_box_with_check: Caught CP: 1589-1666**")
	  .addField("**WEATHER BOOST**", ":sunny: Clear, :dash: Wind")
	  .addField("**WEAK AGAINST**", ":spider_web: Bug, :wind_chime: Flying, :fleur_de_lis: Poison, :fire: Fire, :snowflake: Ice, :ghost: Ghost, :eye_in_speech_bubble: Dark")

	  message.channel.send({embed});
	}
	
	if(command === "electabuzz") {
		
	var embed = new Discord.RichEmbed()
	  .setTitle("Electabuzz #125 | Raid Level 2")
	  .setColor("#F7D02C")
	  .setDescription("**:beginner:  TYPE: Electric**")
	  .setFooter(">>Full Guide Soon")
	  .setImage("https://i.imgur.com/MWCiNfX.gif")
	  .setThumbnail("https://i.imgur.com/IHOwQHW.png")
	  .addField("**:star2: BOSS CP : 12390**", "**:ballot_box_with_check: Caught CP: 1188-1255**")
	  .addField("**WEATHER BOOST**", ":cloud_rain: Rain")
	  .addField("**WEAK AGAINST**", ":hourglass: Ground")

	  message.channel.send({embed});
	}
	
	if(command === "sableye") {
		
	var embed = new Discord.RichEmbed()
	  .setTitle("Sableye #302 | Raid Level 2")
	  .setColor("#705746")
	  .setDescription("**:beginner:  TYPE: Dark/Ghost**")
	  .setFooter(">>Full Guide Soon")
	  .setImage("https://i.imgur.com/1GF0xdz.gif")
	  .setThumbnail("https://i.imgur.com/jDq1Xvg.png")
	  .addField("**:star2: BOSS CP : 8266**", "**:ballot_box_with_check: Caught CP: 694-745**")
	  .addField("**WEATHER BOOST**", ":fog: Fog")
	  .addField("**WEAK AGAINST**", ":sparkles: Fairy")

	  message.channel.send({embed});
	}
	
	if(command === "mawile") {
		
	var embed = new Discord.RichEmbed()
	  .setTitle("Mawile #303 | Raid Level 2")
	  .setColor("#B7B7CE")
	  .setDescription("**:beginner:  TYPE: Steel/Fairy**")
	  .setFooter(">>Full Guide Soon")
	  .setImage("https://i.imgur.com/0NE572q.gif")
	  .setThumbnail("https://i.imgur.com/pAcO41v.png")
	  .addField("**:star2: BOSS CP : 9403**", "**:ballot_box_with_check: Caught CP: 793-848**")
	  .addField("**WEATHER BOOST**", ":snowman: Snow, :cloud: Cloudy")
	  .addField("**WEAK AGAINST**", ":hourglass: Ground, :fire: Fire")

	  message.channel.send({embed});
	}
	
	if(command === "manectric") {
		
	var embed = new Discord.RichEmbed()
	  .setTitle("Manectric #310 | Raid Level 2")
	  .setColor("#F7D02C")
	  .setDescription("**:beginner:  TYPE: Electric**")
	  .setFooter(">>Full Guide Soon")
	  .setImage("https://i.imgur.com/4l62OT8.gif")
	  .setThumbnail("https://i.imgur.com/erQtU6O.png")
	  .addField("**:star2: BOSS CP : 11628**", "**:ballot_box_with_check: Caught CP: 1151-1217**")
	  .addField("**WEATHER BOOST**", ":cloud_rain: Rain")
	  .addField("**WEAK AGAINST**", ":hourglass: Ground")

	  message.channel.send({embed});
	}
	
	
	});

	client.login(config.token);
