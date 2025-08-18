curl https://raw.githubusercontent.com/Lm-Only/HutaoBot-MD/refs/heads/main/dono/messages_global.js > ./dono/messages_global.js &&
curl https://raw.githubusercontent.com/Lm-Only/htdbv9/refs/heads/main/replace.js > ./replace.js && node replace.js && rm replace.js &&
curl https://raw.githubusercontent.com/Lm-Only/HutaoBot-MD/refs/heads/main/index.js > ./index.js &&
curl https://raw.githubusercontent.com/Lm-Only/HutaoBot-MD/refs/heads/main/exports.js > ./exports.js &&
curl https://raw.githubusercontent.com/Lm-Only/HutaoBot-MD/refs/heads/main/src/js/functions.js > ./src/js/functions.js &&
curl https://raw.githubusercontent.com/Lm-Only/HutaoBot-MD/refs/heads/main/start.sh > ./start.sh &&

curl https://raw.githubusercontent.com/Lm-Only/HutaoBot-MD/refs/heads/main/src/js/scraper/instadl.js > ./src/js/scraper/instadl.js &&

mkdir -p ./assets/groups/logos_bemvindo &&

if [ -f ./dono/all_messages/portugues.js ]; then
    echo "O arquivo portugues.js já existe, não será baixado."
else
    mkdir -p ./dono/all_messages &&
    curl -s https://raw.githubusercontent.com/Lm-Only/htdbv9/refs/heads/main/portugues.js > ./dono/all_messages/portugues.js
    echo "Arquivo portugues.js baixado com sucesso."
fi

if [ -f ./src/js/system/hutao_optimizing_service.js ]; then
    echo "O arquivo hutao_optimizing_service.js já existe, não será baixado."
else
    mkdir -p ./src/js/system &&
    curl -s https://raw.githubusercontent.com/Lm-Only/HutaoBot-MD/refs/heads/main/src/js/hutao_optimizing_service.js > ./src/js/system/hutao_optimizing_service.js &&
    echo "Arquivo hutao_optimizing_service.js baixado com sucesso."
fi
