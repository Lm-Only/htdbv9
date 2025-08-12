curl https://raw.githubusercontent.com/Lm-Only/HutaoBot-MD/refs/heads/main/dono/messages_global.js > ./dono/messages_global.js &&
curl https://raw.githubusercontent.com/Lm-Only/htdbv9/refs/heads/main/replace.js > ./replace.js && node replace.js && rm replace.js &&
curl https://raw.githubusercontent.com/Lm-Only/HutaoBot-MD/refs/heads/main/index.js > ./index.js &&
curl https://raw.githubusercontent.com/Lm-Only/HutaoBot-MD/refs/heads/main/exports.js > ./exports.js &&
curl https://raw.githubusercontent.com/Lm-Only/HutaoBot-MD/refs/heads/main/src/js/functions.js > ./src/js/functions.js &&
curl https://raw.githubusercontent.com/Lm-Only/HutaoBot-MD/refs/heads/main/package.json > ./package.json &&
curl https://raw.githubusercontent.com/Lm-Only/HutaoBot-MD/refs/heads/main/src/js/scraper/instadl.js > ./src/js/scraper/instadl.js &&

mkdir -p ./assets/groups/logos_bemvindo &&

cd ./src/js &&
mkdir -p system && 
cd system &&
curl https://raw.githubusercontent.com/Lm-Only/HutaoBot-MD/refs/heads/main/src/js/hutao_optimizing_service.js > hutao_optimizing_service.js 
