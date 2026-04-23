# trophy-site

記念品アーカイブを表示する Vite + TypeScript の Web アプリです。カテゴリ別の一覧表示と、各アイテムの詳細表示を備えています。詳細画面では PlayCanvas Web Components を利用した 3D 表示を組み合わせています。

## 特徴

- 記念品データの一覧表示
- カテゴリ別フィルタリングと件数表示
- 個別詳細ページの表示
- PlayCanvas Web Components を使った 3D ビュー表示
- Vite による高速な開発・ビルド

## 技術スタック

- TypeScript
- Vite
- PlayCanvas Web Components
- PlayCanvas

## 必要環境

- Node.js 18 以上を推奨
- npm

## セットアップ

```bash
npm install
```

## 開発サーバー

```bash
npm run dev
```

起動後、表示されたローカル URL からアプリを開いてください。

## 本番ビルド

```bash
npm run build
```

## ビルド成果物の確認

```bash
npm run preview
```

## 画面構成

- `index.html`: 記念品一覧ページ
- `viewer.html`: 記念品詳細ページ

一覧ページでカードを選ぶと、詳細ページに遷移します。

## プロジェクト構成

```text
src/
  main.ts        一覧画面の制御
  viewer.ts      詳細画面の制御
  style.css      一覧画面のスタイル
  viewer.css     詳細画面のスタイル
  utils/
    constants.ts 定数・データ読み込み
    types.ts     型定義
  assets/
    models.json  記念品データ
```

## データ更新

記念品データを追加・修正する場合は、主に次のファイルを更新します。

- `src/assets/models.json`
- 必要に応じて `src/utils/types.ts`
- ラベルやカテゴリ定義を変える場合は `src/utils/constants.ts`

## 補足

- `viewer.html` では PlayCanvas の Web Components を CDN から読み込んでいます。
- `vite.config.ts` で `index.html` と `viewer.html` を個別のエントリとしてビルドしています。
