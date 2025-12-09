// 認証機能（feature/add-loginブランチ）
const SECRET_TOKEN = 'secret-token-xyz789'; // 履歴に残る機密情報

function login(username, password) {
  console.log('Login attempt:', username);
  return true;
}

function generateToken() {
  return SECRET_TOKEN;
}

module.exports = { login, generateToken };
