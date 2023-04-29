# コンポーネント構成

```
src/
 ├── config/
 ├── data/
 │   ├── models/
 │   │   ├── entities/
 │   │   │   ├── UserEntity.ts
 │   │   │   └── ProductEntity.ts
 │   │   └── repos/
 │   │       └── article/
 │   │           ├── index.ts
 │   │           ├── list.ts
 │   │           ├── get.ts
 │   │           ├── create.ts
 │   │           ├── update.ts
 │   │           └── remove.ts
 │   └── stores/
 │       └── user/
 │           ├── userStore.ts
 │           ├── userStore.hook.ts
 │           └── userStore.slice.ts
 ├── env/
 │   ├── backend/                                サーバーサイド
 │   └── frontend/                               フロントエンド
 │       ├── components/
 │       │   ├── controls/                       0: 制御コンポーネント Presentational
 │       │   │   ├── __shared__/
 │       │   │   └── If/
 │       │   │       ├── index.ts
 │       │   │       ├── If.tsx
 │       │   │       ├── If.types.d.ts
 │       │   │       ├── If.styles.ts
 │       │   │       └── Unless/
 │       │   │           ├── index.ts
 │       │   │           ├── Unless.tsx
 │       │   │           ├── Unless.types.d.ts
 │       │   │           └── Unless.styles.ts
 │       │   ├── electrons/                      1: タグとして最小のコンポーネント Presentational
 │       │   │   └── __shared__/
 │       │   ├── icons/                          2: アイコン Presentational
 │       │   │   └── __shared__/
 │       │   ├── atoms/                          3: 部品として最小のコンポーネント Presentational
 │       │   │   ├── __shared__/
 │       │   │   └── Button/
 │       │   │       ├── index.ts
 │       │   │       ├── Button.tsx
 │       │   │       ├── Button.types.d.ts
 │       │   │       └── Button.styles.ts
 │       │   ├── forms/                          4: フォームフィールド Presentational
 │       │   │   └── __shared__/
 │       │   ├── molecules/                      5: ドメインに縛られない共通コンポーネント Presentational
 │       │   │   └── __shared__/
 │       │   ├── organisms/                      6: ドメインに縛られる共通コンポーネント Presentational/Container
 │       │   │   └── __shared__/
 │       │   ├── templates/                      7: ページテンプレート Container
 │       │   │   └── __shared__/
 │       │   ├── pageLayouts/                    8: ページレイアウト Container
 │       │   │   └── __shared__/
 │       │   └── contexts/                       9: コンテキストコンポーネント Presentational/Container
 │       │       ├── __shared__/
 │       │       └── Theme/
 │       │           ├── index.ts
 │       │           ├── Theme.Provider.tsx
 │       │           ├── Theme.context.tsx
 │       │           └── Theme.types.d.ts
 │       ├── hooks/
 │       │   ├── lifecycle/
 │       │   │   └── lifecycleHook.useComponentDidMount.ts
 │       │   └── store/
 │       │       └── storeHook.useUserStore.ts
 │       ├── styles/
 │       │   ├── style.scss
 │       │   ├── style.animation.fade.scss
 │       │   ├── style.animation.flip.scss
 │       │   ├── style.animation.loop.scss
 │       │   ├── style.foundation.scss
 │       │   ├── style.vender.nprogress.scss
 │       │   ├── style.vender.simplebar.scss
 │       │   └── theme.ts
 │       └── workers/
 │           ├── worker.fetchWorker.ts
 │           └── worker.fetchWorker
 ├── worker.fetchWorker.ts
 ├── libs/
 │   └── style/
 │       ├── styleLib.stylesheet.ts
 │       └── styleLib.emotion.ts
 ├── pages/
 │   ├── _app.page.tsx
 │   ├── _document.page.styles.ts
 │   ├── index.backend.ts
 │   ├── index.frontend.tsx
 │   ├── index.frontend.style.ts
 │   ├── index.page.ts
 │   ├── index.types.d.ts
 │   └── model/
 │       ├── index.backend.ts
 │       ├── index.frontend.tsx
 │       ├── index.frontend.styles.ts
 │       ├── index.page.ts
 │       └── index.types.d.ts
 ├── types/
 │   ├── global.d.ts
 │   ├── enums.ts
 │   └── images.d.ts
 ├── tests/
 ├── docs/
 ├── .env
 ├── .github/
 │   └── workflows/
 ├── .vscode/
 │   ├── extension.json
 │   └── settings.json
 ├── .package.json
 ├── .yarn.lock.json
 └── Makefile
```
