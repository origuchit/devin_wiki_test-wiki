// ロガー機能
class Logger {
  constructor(level = 'info') {
    this.level = level;
  }

  log(message) {
    console.log(`[LOG] ${message}`);
  }

  error(message) {
    console.error(`[ERROR] ${message}`);
  }
}

module.exports = Logger;
