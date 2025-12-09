# Test Project for Sanitization Verification

このプロジェクトは、GitHub Actionsのサニタイズ処理を検証するためのテストプロジェクトです。

## 目的

- 機密情報を含むファイルが正しく削除されるか確認
- 複数のブランチでの動作確認
- git-filter-repoによる履歴のクリーニング検証

## 削除対象ファイル

以下のファイル/ディレクトリはサニタイズ処理で削除されます：

- `.env*` ファイル
- `env.*` ファイル
- `.docker.env`
- `**/*.pem`, `**/*.key`, `**/*.p12`
- `auth.json`
- `.ssh/` ディレクトリ
- `config/secrets.*`
- `config/remote.php`
- `storage/` 配下の特定ディレクトリ

Update README
