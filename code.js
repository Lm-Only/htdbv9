'use strict';

const Was = (opts) => {
    return opts ? 1 : 0;
};

function *MakeLog() {
    yield `To Yo${"u".repeat(35)}\n`;
    yield `Was Thro${"u".repeat(35)}gh\n`;
}

class Main {
    constructor() {
        this.World = 'Earth';
    }
    
    static Delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    
    static async Message(words, ms) {
        for (let i = 0; i < words.length; ++i) {
            process.stdin.write(words[i]);
            await this.Delay(ms);
        }
    }
          
        
}

const Arraylogs = [
    { message: 'If the Party, Was over\n' },
    { message: 'And our time on Earth\n' }
];

const ExecuteLogs = async (array, lastMessage) => {
    for (const item of array) {
        await Main.Message(item.message, 40 * 2);
        await Main.Delay(300 * 2);
    }
    
    const ILoveUSoMuch = lastMessage.next();
    await Main.Message(ILoveUSoMuch.value, 40 * 2);
}

const start = async () => {
    try {
        const The = new Main();
        const Ending = "I don't know";
        const I_WANNA_BE = MakeLog();
        
        let value = 0;
        
        if (The.World) {
            value = Was(Ending) ? 1 : 0;
        }
        
        if (value > 0) {
           const LoveU = I_WANNA_BE.next();
           await Main.Message(LoveU.value, 50 * 2);
           await Main.Delay(600);
        }
        
        return ExecuteLogs(Arraylogs, I_WANNA_BE);
    } catch (error) {
        throw new Error('Failed to love you ' + error);
    }
};

start();