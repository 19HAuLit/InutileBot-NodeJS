const Discord = require('discord.js');
const {
	prefix,
	token,
} = require('./config.json');

const client = new Discord.Client();
const ytdl = require('ytdl-core');

randomNumber = -540125133512;

console.log("Inutile Bot a bien été démaré");

client.on('message', function (message){

    //if(message.author.bot) return;

    const args = message.content.trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if(cmd === prefix+"help"){
        message.channel.send(" > **HELP :**\n > Le préfixe est : **"+prefix+"**\n > **Commandes :**\n > -Ajouté un role à un utilisateur (Admin): {préfixe}addrole @<iduser> @<idrole>\n > -Enlevé un role à un utilisateur (Admin): {préfixe}delrole @<iduser> @<idrole>\n > -Créer un role (Admin): {préfixe}createrole nomDuRole\n > -Tuto pour être invisible : {préfixe}invisible");
    }

    if(cmd === prefix+"createrole"){
        const permission = message.member.hasPermission("ADMINISTRATOR");
        nameRole = args[0];
        console.log(nameRole);

        if(nameRole === undefined) return message.channel.send("Vous devez mettre un nom pour le rôle");
        if(!permission) return message.channel.send("Vous n'avez pas la permissions pour utilisé cette commande");
        
        //message.guild.roles.create({ data: { name: nameRole, permissions: ['ADMINISTRATOR'] } });
        message.guild.roles.create({data: { name: nameRole}});
        message.channel.send("Le role "+ nameRole+" a bien été crée");
        console.log("Le role "+nameRole+" a bien été créé");
    }

    if(cmd === prefix+"addrole"){
        const role = message.mentions.roles.first();
        const user = message.mentions.members.first();
        const permission = message.member.hasPermission("ADMINISTRATOR");
        console.log("role:"+role +" user:"+ user +" permission:"+ permission);
        
        if(user === undefined || role === undefined) return message.channel.send("Syntax error: $addrole @<iduser> @<idrole>");
        if(!permission) return message.channel.send("Vous n'avez pas la permissions pour utilisé cette commande");

        user.roles.add(role);
        console.log("Le role (id: "+role+") a bien été ajouté à l'utilisateur (id: "+user+")");
        message.channel.send("Le role a bien été ajouté à l'utilisateur");
    }

    if(cmd === prefix+"delrole"){
        const role = message.mentions.roles.first();
        const user = message.mentions.members.first();
        const permission = message.member.hasPermission("ADMINISTRATOR");
        console.log("role:"+role +" user:"+ user +" permission:"+ permission);
        
        if(user === undefined || role === undefined) return message.channel.send("Syntax error: $addrole @<iduser> @<idrole>");
        if(!permission) return message.channel.send("Vous n'avez pas la permissions pour utilisé cette commande");

        user.roles.remove(role);
        console.log("Le role (id: "+role+") a bien été enlevé à l'utilisateur (id: "+user+")");
        message.channel.send("Le role a bien été enlevé à l'utilisateur");
    }

    if(cmd === prefix+"invisible"){
        message.channel.send("Pour pouvoir avoir votre pseudo en invisible, changez votre pseudo sur le server par ' ឵឵ ' et sur votre profil par '˞˞ '.\nPuis mettez cette image en tant qu'image de profil : https://cdn.discordapp.com/attachments/698541643657379840/717404506849280020/Sans_titre-1.png");
        console.log("Tuto invisible terminé");
    }

    if(cmd == prefix+"bingo"){
        firstNumber = args[0];
        finalNumber = args[1];

        if(firstNumber === undefined || finalNumber === undefined) return message.channel.send("Syntax error, exemple: $bingo 1 100");

        randomNumber = Math.floor((Math.random() * finalNumber) + firstNumber);
        console.log("Un nombre entre "+firstNumber+" et "+finalNumber+"  a été créer : "+randomNumber);
        
        message.author.send("***Bingo en cours:*** "+randomNumber);
        message.channel.send("Un **BINGO** vient d'être lancé, le nombre à trouvé est entre "+firstNumber+" et "+finalNumber+" inclus");
    }

    if(cmd == randomNumber){
        user = message.author;
        message.reply(" a trouvé la bonne réponse qui été : **"+randomNumber+"**");
        console.log("Bingo finish");
    }

    // if(cmd === prefix+"spam"){
    //     const userM = message.mentions.members.first();
    //     const permission = message.member.hasPermission("ADMINISTRATOR");

    //     if(!permission) return message.channel.send("Vous n'avez pas la permissions pour utilisé cette commande");

    //     userM.send("La prochainne fois ne met pas de photo de poubelle sur Insta =')");
    //     console.log("Spam effectué");
    //     message.channel.send("$spam <@577552296225800232>");
    // }
})

client.login(token);