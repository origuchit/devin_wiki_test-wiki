# サニタイズ処理の検証手順

## 検証用プロジェクトの構成

このプロジェクトは、GitHub Actionsのサニタイズ処理を検証するために作成されました。

## 含まれる要素

### 1. 削除対象ファイル

以下のファイル/ディレクトリがサニタイズ処理で削除されるはずです：

- **環境変数ファイル**
  - `.env`
  - `.env.local`
  - `.env.production`
  - `env.development`
  - `.docker.env`

- **認証・秘密鍵ファイル**
  - `auth.json`
  - `config/secrets.json`
  - `config/secrets.yaml`
  - `config/remote.php`
  - `certs/server.pem`
  - `certs/client.key`
  - `keys/api.p12`
  - `.ssh/id_rsa`
  - `.ssh/config`

- **ストレージファイル**
  - `storage/logs/app.log`
  - `storage/framework/cache/data`
  - `storage/app/tmp/temp-file.txt`
  - `storage/app/private/secret-data.txt`
  - `storage/batch/logs/batch.log`

### 2. ブランチ構成

- `main` - メインブランチ
- `feature/add-login` - ログイン機能追加ブランチ
- `feature/api-integration` - API統合ブランチ
- `hotfix/security-patch` - セキュリティパッチブランチ

### 3. コミット履歴

複数のコミットが含まれており、各ブランチで異なる変更が加えられています。

## 検証方法

### ローカルでの検証

1. **検証スクリプトの実行**
   ```bash
   ./verify-sanitization.sh
   ```

2. **手動でのgit-filter-repo実行**
   ```bash
   pip install git-filter-repo
   git filter-repo \
     --path-glob '.env*' \
     --path-glob 'env.*' \
     --path-glob '.docker.env' \
     --path-glob '**/*.pem' \
     --path-glob '**/*.key' \
     --path-glob '**/*.p12' \
     --path-glob 'auth.json' \
     --path '.ssh' \
     --path-glob 'config/secrets.*' \
     --path 'config/remote.php' \
     --path 'storage/logs' \
     --path 'storage/framework' \
     --path 'storage/app/tmp' \
     --path 'storage/app/private' \
     --path 'storage/batch/logs' \
     --invert-paths \
     --force
   ```

3. **結果の確認**
   - 削除対象ファイルが存在しないことを確認
   - ブランチとコミット履歴が保持されていることを確認
   - 通常のコードファイルが残っていることを確認

### GitHub Actionsでの検証

1. このリポジトリをGitHubにプッシュ
2. GitHub Actionsのワークフローを実行
3. 結果リポジトリで以下を確認：
   - 削除対象ファイルが履歴から完全に削除されていること
   - すべてのブランチが正しく同期されていること
   - 通常のコードファイルが保持されていること

## 期待される結果

サニタイズ処理後は：

✅ **削除されるもの**
- 上記の削除対象ファイル/ディレクトリ
- これらのファイルを含む過去のコミット履歴

✅ **保持されるもの**
- 通常のソースコード（`src/`配下など）
- 設定ファイル（`.gitignore`、`package.json`など）
- すべてのブランチ
- 削除対象以外のコミット履歴

