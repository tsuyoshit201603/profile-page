# Profile Page Template

## Overview
Next.js（App Router）＋ TypeScript ＋ Tailwind CSS で構築した 1 ページ構成のプロフィール／ポートフォリオ用テンプレートです。テキストや配色を置き換えるだけで、自分だけのエンジニア向けプロフィールサイトを素早く立ち上げられます。静的なフロントエンド構成なので、ホスティング先を選ばずに利用できます。

## Features
- **Hero**: タイトル・肩書き・簡易説明・CTA ボタンをまとめたファーストビュー。
- **About / Profile**: 自己紹介テキストを掲載するセクション。
- **Skills / Toolkit**: タグ風の UI でスキルカテゴリと技術スタックを一覧表示。
- **Experience / Timeline**: 縦方向のタイムラインで経歴やプロジェクトを整理。
- **Links**: SNS や外部リンクをボタンで配置。
- **UI 特徴**: ダークテーマ基調、ガラスモーフィズム風カード、レスポンシブ対応、軽量な hover エフェクト。

## Tech Stack
- **Next.js (App Router)** ― フロントエンドのルーティングとページ構成を管理。
- **TypeScript** ― 型安全な開発体験を提供。
- **Tailwind CSS** ― ユーティリティベースでデザインを管理。
- バックエンドを持たない静的フロントエンドテンプレートです。

## Getting Started
1. リポジトリをクローン  
   ```bash
   git clone your-repo-url
   cd your-repo-url
   ```
2. 依存パッケージをインストール  
   ```bash
   npm install
   # または pnpm install / yarn install
   ```
3. 開発サーバーを起動  
   ```bash
   npm run dev
   ```
4. ブラウザで `http://localhost:3000` にアクセスして表示を確認します。

## Available Scripts
- `npm run dev` – 開発サーバーを起動します。
- `npm run build` – 本番用ビルドを生成します。
- `npm run start` – ビルド済みアプリをローカルで起動します。
- `npm run lint` – ESLint によるコードチェックを実行します。

## Customization
- 文章やセクション構成は `app/page.tsx` を中心に編集します。自己紹介文、スキル一覧、タイムライン項目、外部リンクなどを自分の情報に置き換えてください。
- グローバルスタイルは `app/globals.css` で調整できます。Tailwind CSS のユーティリティクラスを変更すると、配色やフォント、余白、カードデザインを自在にカスタマイズできます。
- プロフィール情報やリンク先はテンプレート内のダミーを参考に、各自の情報へ差し替えてください。

## Deployment
- Next.js プロジェクトとして、Vercel をはじめとしたホスティングサービスにそのままデプロイ可能です。
- `npm run build` で生成した成果物を任意のプラットフォームにアップロードすれば、静的サイトとして公開できます。

## Folder Structure
```
.
├── app/
│   ├── layout.tsx          # 共通レイアウト
│   ├── page.tsx            # 1ページ構成のメインコンテンツ
│   └── globals.css         # グローバルスタイル (Tailwind)
├── public/                 # 画像やファビコンなどの静的アセット
├── package.json
├── tsconfig.json
└── README.md
```

## License
MIT ライセンスを想定しています。必要に応じて任意のライセンスを設定してください。
