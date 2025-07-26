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