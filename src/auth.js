// 認証機能（feature/add-loginブランチ）
function login(username, password) {
  console.log('Login attempt:', username);
  return true;
}

function generateToken() {
  // トークンは環境変数から取得するように変更
  return process.env.AUTH_TOKEN;
}

module.exports = { login, generateToken };
