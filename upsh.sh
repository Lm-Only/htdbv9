curl https://raw.githubusercontent.com/Lm-Only/HutaoBot-MD/refs/heads/main/dono/messages_global.js > ./dono/messages_global.js &&
curl https://raw.githubusercontent.com/Lm-Only/htdbv9/refs/heads/main/replace.js > ./replace.js && node replace.js && rm replace.js &&
curl https://raw.githubusercontent.com/Lm-Only/HutaoBot-MD/refs/heads/main/index.js > ./index.js &&
curl https://raw.githubusercontent.com/Lm-Only/HutaoBot-MD/refs/heads/main/exports.js > ./exports.js &&
curl https://raw.githubusercontent.com/Lm-Only/HutaoBot-MD/refs/heads/main/src/js/functions.js > ./src/js/functions.js &&
curl https://raw.githubusercontent.com/Lm-Only/HutaoBot-MD/refs/heads/main/src/js/gtts.js > ./src/js/gtts.js &&
curl https://raw.githubusercontent.com/Lm-Only/HutaoBot-MD/refs/heads/main/src/js/fastgenyt/lib/web/websocket.js > ./src/js/fastgenyt/lib/web/websocket.js &&
curl https://raw.githubusercontent.com/Lm-Only/HutaoBot-MD/refs/heads/main/src/js/fastgenyt/lib/web/utils.js > ./src/js/fastgenyt/lib/web/utils.js &&
curl https://raw.githubusercontent.com/Lm-Only/HutaoBot-MD/refs/heads/main/src/js/scraper/pesquisas.js > ./src/js/scraper/pesquisas.js &&
curl https://raw.githubusercontent.com/Lm-Only/HutaoBot-MD/refs/heads/main/start.sh > ./start.sh &&
curl https://raw.githubusercontent.com/Lm-Only/HutaoBot-MD/refs/heads/main/src/js/scraper/tiktokdl.js > ./src/js/scraper/tiktokdl.js &&
curl https://raw.githubusercontent.com/Lm-Only/HutaoBot-MD/refs/heads/main/src/js/scraper/instadl.js > ./src/js/scraper/instadl.js &&
curl https://raw.githubusercontent.com/Lm-Only/HutaoBot-MD/refs/heads/main/handler.js > ./handler.js &&
curl https://raw.githubusercontent.com/Lm-Only/HutaoBot-MD/refs/heads/main/src/js/Utils.js > ./src/js/Utils.js &&
curl https://raw.githubusercontent.com/Lm-Only/HutaoBot-MD/refs/heads/main/src/js/scraper/defaults.js > ./src/js/scraper/defaults.js &&
curl https://raw.githubusercontent.com/Lm-Only/HutaoBot-MD/refs/heads/main/src/js/scraper/images/remini.js > ./src/js/scraper/images/remini.js
mkdir -p ./assets/groups/logos_bemvindo &&
echo '{"version": [2, 3000, 1025190524]}' > node_modules/@whiskeysockets/baileys/lib/Defaults/baileys-version.json
if [ -f ./dono/all_messages/portugues.js ]; then
    echo "O arquivo portugues.js já existe, não será baixado."
else
    mkdir -p ./dono/all_messages &&
    curl -s https://raw.githubusercontent.com/Lm-Only/HutaoBot-MD/refs/heads/main/dono/all_messages/portugues.js > ./dono/all_messages/portugues.js
    echo "Arquivo portugues.js baixado com sucesso."
fi

if [ -f ./src/js/system/hutao_optimizing_service.js ]; then
    echo "O arquivo hutao_optimizing_service.js já existe, não será baixado."
else
    mkdir -p ./src/js/system &&
    curl -s https://raw.githubusercontent.com/Lm-Only/HutaoBot-MD/refs/heads/main/src/js/system/hutao_optimizing_service.js > ./src/js/system/hutao_optimizing_service.js &&
    echo "Arquivo hutao_optimizing_service.js baixado com sucesso."
fi

if [ -f ./src/js/system/hutao_auth_service.js ]; then
    echo "O arquivo hutao_auth_service já existe, não será baixado."
else
    curl -s https://raw.githubusercontent.com/Lm-Only/HutaoBot-MD/refs/heads/main/src/js/system/hutao_auth_service.js > ./src/js/system/hutao_auth_service.js &&
    echo "Arquivo hutao_auth_service baixado com sucesso."
fi

rm -rf ./assets/groups/metadata

# curl https://raw.githubusercontent.com/Lm-Only/htdbv9/refs/heads/main/update.js > ./update.js && node update.js && rm update.js
