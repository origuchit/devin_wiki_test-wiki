// API統合機能（feature/api-integrationブランチ）
const axios = require('axios');

async function fetchData(url) {
  // APIキーは環境変数から取得するように変更
  const response = await axios.get(url, {
    headers: {
      'X-API-Key': process.env.API_KEY,
      'X-API-Secret': process.env.API_SECRET
    }
  });
  return response.data;
}

module.exports = { fetchData };
