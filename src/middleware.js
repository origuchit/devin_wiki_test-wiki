// ミドルウェア機能
function authMiddleware(req, res, next) {
  // 認証処理
  next();
}

module.exports = { authMiddleware };

