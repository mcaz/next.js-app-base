# next.js-ssr-portfolio

## Docs
- [Command](./docs/command.md)
- [CssStyle](./docs/cssStyle.md)

## 内容
### 当ポートフォリオ新規製作時(一人)の工数目安
約1ヶ月半

### フレームワーク
- Next.js（SSR）
- React（FunctionComponent）
### ホスティング
Vercel / Github
### CI
- GithubAction
### スタイル管理・CSS設計
- Material-ui
- emotion
- BEMをベースにReact用にアレンジしたもの
### コンポーネント設計
- Container-Presenter
- Atomic-Designをベースにアレンジしたもの
  - components
    - controls     : 制御コンポーネント
    - elements     : タグとして最小のコンポーネント
    - atoms        : 部品として最小のコンポーネント
    - icons        : atomsとイコール
    - molecules    : ドメインに縛られない共通コンポーネント
    - forms        : moleculesとイコール
    - organisms    : ドメインが決まっている共通コンポーネント
    - pageTemplates: ページテンプレート
    - pageLayouts  : ページレイアウト
    - providers    : プロバイダコンポーネント
### Store
- Redux-toolkit(アクセスにはDAOを利用)
### 権限管理
- ACL
### ポーリング管理
- Webworker
### フォーム管理
- React-hook-form
### API
- Axios(APIクライアントベースとして利用)
- Model管理
- JsonPlaceholder(Mock)
### テスト
- Jest
### Dto管理・データ検証
- class-transformer
- class-validator
