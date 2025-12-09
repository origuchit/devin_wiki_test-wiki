// セキュリティ機能
function validateInput(input) {
  // XSS対策
  return input.replace(/<script>/g, '');
}

module.exports = { validateInput };

