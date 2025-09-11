'use strict';

import NodeCache from '@cacheable/node-cache';
import { createInterface } from 'readline';
import { loggerInfo } from './utils.js';
import { readFile } from 'node:fs/promises';
import P from 'pino';
import makeWASocket, { makeCacheableSignalKeyStore, useMultiFileAuthState } from 'baileys';

const msgRetryCounterCache = new NodeCache({ 
    stdTTL: 5 * 60,
    useClones: false
});

const { sessionName } = JSON.parse(await readFile('./assets/settings.json', 'utf-8'));
const logger = P({ timestamp: () => `,"time":"${new Date().toJSON()}"`, }, P.destination('./assets/logs/wa-logs.txt'));
logger.level = 'error';

const question = (text) => {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => rl.question(text, (input) => {
        rl.close();
        resolve(input)
    }));
};

const startConnection = async () => {
    try {
        loggerInfo('Iniciando conexão...');
        
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState(sessionName);
        
        const sock = makeWASocket({
            logger,
            printQRInTerminal: false,
            auth: {
                creds: state.creds,
                keys: makeCacheableSignalKeyStore(state.keys, logger)
            },
            msgRetryCounterCache,
            syncFullHistory: false,
            generateHighQualityLinkPreview: true,
            markOnlineOnConnect: true
        });
        
        if (!sock.authState.creds.registered) {
            const phoneNumber = await getPhoneNumber(); 
            const code = await sock.requestPairingCode(phoneNumber);
        
            console.log('Seu código de emparelhamento: ', code?.match(/.{1,4}/g)?.join('-') || code);
        }
        
        return { ...sock, saveCreds };
    } catch (e) {
        throw new Error(e);
    }
};

async function getPhoneNumber() {
    try {
        while (true) {
            const phoneNumber = (await question('Insira o número: ')).replace(/[^0-9]/g, '');
            console.log(phoneNumber);
            if (Number(phoneNumber)) {
                return phoneNumber.toString();
            }
            
            console.log('Número inválido. Insira corretamente, por exemplo: 551122334455');
        }
    } catch (e) {
        throw e;
    }
}
       
export default startConnection;
    