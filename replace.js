'use strict';

const { writeFileSync, unlinkSync, existsSync } = require('fs');

const base = require('./dono/message.js').txt;
let cmd = {};

if (existsSync('./dono/messages_global.json')) {
    cmd = require('./dono/messages_global.json');
    unlinkSync('./dono/messages_global.json');
}

delete base['wait'];

const array = Object.keys(base);

let text = `"use strict";
/**
 * Aqui você pode editar mensagems do bot a vontade!
 * Muita atenção ao mexer em algo, para não dar problema depois.
 * Apenas mude os textos, menos outra coisa.
 */

const txt = {
`;

let textPartner = `    //Comando sugerido por @Becca
    add_parceria: "*Sucesso*!! Agora @#nmr# poderá enviar links #quantidade#... ✨️",

    //Comando sugerido por @Becca
    del_parceria: "*Sucesso*!! Agora @#nmr# não poderá enviar links neste grupo... ✨️",

    //Comando sugerido por @Becca
    reached_limit: "@#nmr# seu limite diário de divulgações esgotou, volte no próximo dia para divulgar novamente ou contrate um ADM! 🙇‍♀️",

    //Comando sugerido por @Becca
    mess_parceria: "Tudo certo, @#nmr#!\\n Você ainda pode divulgar #quantidade#... ✨️",

    //Comando sugerido por @Becca
    not_parceria: "@#nmr# você não tem parceria com o nosso grupo, contrate algum adm para que você possa divulgar aqui! ❣️",\n
`;

let textNews = `    message_play: "    ⸺͟͞ꪶ𝐁𝐄𝐌 ꪜ𝐈𝐍𝐃𝚯 (𝚫)᭄\n  ↳ 『 @#nmr# 』 - ♪\n-\n     ⸺͟͞ꪶ𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝙲̧𝙾̃𝙴𝚂᭄ 🎶 ↴\n-\n ஓீ፝͜͡🌃 ➮ 𝚃𝚒𝚝𝚞𝚕𝚘⧽ #titulo#\n ஓீ፝͜͡⏳ ➮ 𝚃𝚎𝚖𝚙𝚘⧽ #tempo#\n ஓீ፝͜͡🌌 ➮ 𝚅𝚒𝚎𝚠𝚜⧽ #views#\n ஓீ፝͜͡🌸 ➮ 𝙰𝚞𝚝𝚑𝚘𝚛⧽ #author#\n ஓீ፝͜͡✨ ➮ 𝙿𝚞𝚋𝚕𝚒𝚌𝚊𝚍𝚘⧽ #publicado#\n ஓீ፝͜͡🌠 ➮ 𝙳𝚎𝚜𝚌𝚛𝚒𝚌̧𝚊̃𝚘⧽ #desc#\n\n-\n     ✨𝑬𝒏𝒗𝒊𝒂𝒏𝒅𝒐... 𝑨𝒈𝒖𝒂𝒓𝒅𝒆 𝒖𝒎 𝒑𝒐𝒖𝒄𝒐...🌙\n-\n  #time#\nılı.lıllılı.ıllı..ılı.lıllılı.ıllı",
    
    message_perfil: "╭━✰°❀•°✮•| ⊱✿⊰ |•°•❀°✾✰━╮\n┝⋆⃟ۣۜ᭪➮ 𝐌𝐄𝐔 𝐏𝐄𝐑𝐅𝐈𝐋 『🥂』\n╰━✰°❀•°✮•| ⊱✿⊰ |•°•❀°✾✰━╯\n│╭━━───────━━╮\n│╎❒᭄꥓〭🌌 𝐍𝐎𝐌𝐄 - 『 #nome# 』\n│╎❒᭄꥓〭📱𝐍𝐔𝐌𝐄𝐑𝐎 - 『 #nmr# 』\n│╎❒᭄꥓〭💖 𝐁𝐈𝐎 - 『 #bio# 』\n│╎❒᭄꥓〭🔮 𝐂𝐎𝐍𝐄𝐂𝐓𝐀𝐃𝐎 𝐄𝐌 - 『 #aparelho# 』\n│┝─✰°❀•°✮•─✰°❀•°✮•𖦹५ॱ\n│╎❒᭄꥓〭👑 𝐃𝐎𝐍𝐎 -➮〘#dono#〙\n│╎❒᭄꥓〭🩸 𝐋𝐈𝐃𝐄𝐑 -➮〘#lider#〙\n│╎❒᭄꥓〭🔱 𝐀𝐃𝐌 -➮〘#adm#〙\n│╎❒᭄꥓〭💸 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 -➮〘#premium#〙\n│╎❒᭄꥓〭💰 𝐒𝐀𝐋𝐃𝐎 -➮ 〘 #saldo# 〙\n│╎❒᭄꥓〭💌 𝐄𝐒𝐓𝐀 𝐂𝐀𝐒𝐀𝐃𝐎 -➮ 〘 #casado# 〙\n│╰━━───────━━╯\n╰━━━✰°❀•°✮°•❀°✾✰━━━╯\n╎\n╭━✰°❀•°✮•| ⊱✿⊰ |•°•❀°✾✰━╮\n┝⋆⃟ۣۜ᭪➮ 𝐏𝐄𝐑𝐒𝐎𝐍𝐀𝐋𝐈𝐃𝐀𝐃𝐄 『💋』\n╰━✰°❀•°✮•| ⊱✿⊰ |•°•❀°✾✰━╯\n│╭━━───────━━╮\n│╎🐂𝙉𝙄𝙑𝙀𝙇-𝙂𝘼𝘿𝙊⧽ #lvlgado#\n│╎🌸𝙉𝙄𝙑𝙀𝙇-𝙋𝙐𝙏𝘼⧽ #lvlputa#\n│╎🥵𝙉𝙄𝙑𝙀𝙇-𝙂𝙊𝙓𝙏𝙊𝙎𝙐𝙍𝘼⧽ #lvlgostosa#\n│╎😍𝙉𝙄𝙑𝙀𝙇-𝘽𝙀𝙇𝙀𝙕𝘼⧽ #lvlbeleza#\n│╎🍼𝙋𝙍𝙊𝙂𝙍𝘼𝙈𝘼⧽ ( R$#programa# )\n│╰━━───────━━╯\n╰━━━✰°❀•°✮°•❀°✾✰━━━╯\n╎\n╭━✰°❀•°✮•| ⊱✿⊰ |•°•❀°✾✰━╮\n┝⋆⃟ۣۜ᭪➮ 𝐒𝐄𝐔𝐒 𝐃𝐀𝐃𝐎𝐒 『✨』\n╰━✰°❀•°✮•| ⊱✿⊰ |•°•❀°✾✰━╯\n│╭━━───────━━╮\n│╎░⃟⃛ ➮𝙼𝙴𝙽𝚂𝙰𝙶𝙴𝙼𝚂 #msgs# - 💬\n│╎░⃟⃛ ➮𝙲𝙾𝙈𝙰𝙉𝙳𝙊𝚂 #cmds# - ♨️\n│╎░⃟⃛ ➮𝚂𝚃𝙸𝙲𝙺𝙴𝚁𝚂 #stickers# - 💖\n│╰━━───────━━╯\n╰━━━✰°❀•°✮°•❀°✾✰━━━╯\n\n📜 𝑪𝒐𝒏𝒔𝒆𝒍𝒉𝒐 ↴ \n\n#conselho#\n\n𝐁𝐨𝐭: #bot#\n\n✰✰✰✰✰",\n`

let avisado = 0;

for (let key of array) {
    if (!['erros', 'waiting_message'].includes(key)) {
        if (key === 'only_group' && ['add_parceria', 'del_parceria', 'reached_limit', 'mess_parceria', 'not_parceria'].every(v => !array.includes(v)) && !avisado) {
            text += textPartner;
            avisado = 1;
        }
    
        if (['_parceria', 'reached_limit'].some(i => key.includes(i))) {
            text += `    //Comando sugerido por @Becca\n`;
        }
        
        text += `    ${key}: ${JSON.stringify(base[key])},\n\n`;
    }
}

if (!base?.message_play) {
    text += textNews;
}

if (cmd?.comando_invalido && !base?.comando_invalido) {
    text += `    comando_invalido: ${JSON.stringify(cmd.comando_invalido)},\n\n`;
} else if (!base?.comando_invalido) {
    text += `    comando_invalido: "┏═•❃༺✿༻❃•═┓\\n├✯ 𝐂𝐨𝐦𝐚𝐧𝐝𝐨: *#prefixo##comando#*\\n│𝐍𝐚̃𝐨 𝐄𝐧𝐜𝐨𝐧𝐭𝐫𝐚𝐝𝐨\\n├✯ 𝐃𝐢𝐠𝐢𝐭𝐞 *#prefixo#menu*\\n│𝐄 𝐯𝐞𝐣𝐚 𝐨𝐬 𝐜𝐨𝐦𝐚𝐧𝐝𝐨\\n│𝐂𝐨𝐦 𝐚𝐭𝐞𝐧ç𝐚𝐨!\\n┗═•❃༺✿༻❃•═┛‎",\n\n`;
}

const arrayM = JSON.stringify(base.waiting_message);

text += `    erros: {\n        api_error: "${base.erros.api_error}",\n        command_error_executor: "${base.erros.command_error_executor}"\n    },\n\n`;

text += `    waiting_message: ${arrayM},\n`;

text += '    wait() {\n        return this.waiting_message[Math.floor(Math.random() * this.waiting_message.length)];\n    }\n';

text += '};\n\nexports.txt = txt;\n';

writeFileSync('./dono/message.js', text);