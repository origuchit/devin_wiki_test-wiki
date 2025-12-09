#!/bin/bash
# サニタイズ処理の検証スクリプト

echo "🔍 サニタイズ処理の検証を開始します..."
echo ""

# 削除対象ファイルのリスト
TARGET_FILES=(
  ".env"
  ".env.local"
  ".env.production"
  "env.development"
  ".docker.env"
  "auth.json"
  "config/secrets.json"
  "config/secrets.yaml"
  "config/remote.php"
  "certs/server.pem"
  "certs/client.key"
  "keys/api.p12"
  ".ssh/id_rsa"
  ".ssh/config"
  "storage/logs/app.log"
  "storage/framework/cache/data"
  "storage/app/tmp/temp-file.txt"
  "storage/app/private/secret-data.txt"
  "storage/batch/logs/batch.log"
)

echo "📋 削除対象ファイルの確認:"
echo "================================"
for file in "${TARGET_FILES[@]}"; do
  if [ -f "$file" ] || [ -d "$file" ]; then
    echo "❌ 存在: $file"
  else
    echo "✅ 削除済み: $file"
  fi
done

echo ""
echo "📊 ブランチ一覧:"
echo "================================"
git branch -a

echo ""
echo "📈 コミット履歴:"
echo "================================"
git log --oneline --all --graph

echo ""
echo "📁 現在のファイル構造:"
echo "================================"
find . -type f -not -path './.git/*' | sort

