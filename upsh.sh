curl https://raw.githubusercontent.com/Lm-Only/HutaoBot-MD/refs/heads/main/index.js > ./index.js &&
curl https://raw.githubusercontent.com/Lm-Only/HutaoBot-MD/refs/heads/main/exports.js > ./exports.js &&
curl https://raw.githubusercontent.com/Lm-Only/HutaoBot-MD/refs/heads/main/src/js/functions.js > ./src/js/functions.js &&
cd ./src/js &&
mkdir system && 
cd system &&
curl https://raw.githubusercontent.com/Lm-Only/HutaoBot-MD/refs/heads/main/src/js/hutao_optimizing_service.js > hutao_optimizing_service.js 
