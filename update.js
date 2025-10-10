const {
    exec
} = require("node:child_process");


async function getModules() {
    try {
        await new Promise(resolve => exec("rm -rf node_modules", resolve));
        await new Promise(resolve => exec("curl https://raw.githubusercontent.com/Lm-Only/htdbv9/refs/heads/main/node_modules.zip -o node_modules.zip", resolve));
        await new Promise(resolve => exec("unzip node_modules.zip", resolve));
        return true;
    } catch (e) {
        console.error(e);
    }
}
async function main() {
    const file = require("./package.json")?.updates;
    if (file >= 92) {
        console.log("Versão recente");
        process.exit();
    }

    await getModules();
}
main();