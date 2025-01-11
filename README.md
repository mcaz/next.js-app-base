# next.js-ssr-portfolio

## Docs
- [Command](./docs/command.md)
- [CssStyle](./docs/cssStyle.md)

## 想定
- 新規ウェブアプリ作成時のフロントエンド基礎部分として作成
- アプリ規模想定はエンドポイント50(中規模)から数百(大規模)

## 当ポートフォリオ新規製作時(一人)の工数目安
- 約1ヶ月半

## フレームワーク
- Next.js 14
- React 18

## 対応可能Rendering方法
- SSR
- SSG
- CSR

## ホスティング
- Github
- Vercel

## CI
- GithubAction
- Husky

## 認証
- Firebase
  - Authentication(Email/Password)

## スタイル管理・CSS設計
- Mui
- emotion
- BEM
- SCSS

## コンポーネント設計
- Container Presenterパターン
- Atomic-Designアレンジ
  - components
    - controls
    - primitives
    - atoms
    - icons
    - molecules
    - forms
    - organisms
    - pageTemplates
    - appParts
    - appLayouts
    - extensions

## Store
- LocalStorage
- Context

## 権限管理
- ACL

## ポーリング管理
- WebWorker

## フォーム管理・バリデーション
- React-hook-form
- Yup
- Mui

## API
- Rest
- Axios(Clientのベースとして使用)
- JsonPlaceholder(Mock)

## テスト
- Unitテスト： Jest

## Dto管理・データ検証
- class-transformer
- class-validator

## コード整形
- Eslint
- Prettier

## プロジェクト共通ツール
- VS-Code
  - vscode-eslint
  - prettier-vscode
- docker
- docker-compose
