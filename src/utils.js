// ユーティリティ関数
function formatDate(date) {
  return date.toISOString().split('T')[0];
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

module.exports = { formatDate, validateEmail };

