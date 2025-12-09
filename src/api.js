// API統合機能（feature/api-integrationブランチ）
const axios = require('axios');

const API_KEY = 'api-key-secret-123'; // 履歴に残る機密情報
const API_SECRET = 'api-secret-xyz789';

async function fetchData(url) {
  const response = await axios.get(url, {
    headers: {
      'X-API-Key': API_KEY,
      'X-API-Secret': API_SECRET
    }
  });
  return response.data;
}

module.exports = { fetchData };
