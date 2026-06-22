# Arrow Parking Homepage

Arrow Parking のホームページです。Next.js (TypeScript) で構築し、GitHub Pages にデプロイしています。

## 技術スタック

- Next.js 16 (Static Export)
- TypeScript 5
- React 19
- Tailwind CSS 4
- pnpm 10

## プロジェクト構成

```
├── .github/workflows/
│   └── deploy.yml              # GitHub Actions 自動デプロイ設定
│
├── app/                        # アプリケーション本体
│   ├── layout.tsx              # ルートレイアウト
│   ├── page.tsx                # トップページ（構造化データ含む）
│   ├── globals.css             # グローバルスタイル
│   ├── sitemap.ts              # サイトマップ自動生成
│   ├── robots.ts               # robots.txt 生成
│   │
│   ├── components/             # 再利用可能コンポーネント
│   │   ├── JsonLd.tsx          # JSON-LD 構造化データ
│   │   ├── layout/
│   │   │   ├── Navbar.tsx      # ナビゲーション
│   │   │   └── Footer.tsx      # フッター
│   │   └── parking/
│   │       ├── ParkingCard.tsx  # 駐車場カード
│   │       └── ParkingGallery.tsx # 写真ギャラリー
│   │
│   ├── parkings/               # 駐車場ページ
│   │   ├── layout.tsx          # 駐車場一覧メタデータ
│   │   ├── page.tsx            # 駐車場一覧
│   │   ├── [id]/               # 動的ルート
│   │   │   ├── page.tsx        # 駐車場詳細
│   │   │   └── events/
│   │   │       └── page.tsx    # イベント情報
│   │   └── udagawa/
│   │       └── page.tsx        # 宇田川専用ページ
│   │
│   ├── company/
│   │   └── page.tsx            # 会社概要ページ
│   ├── landowner/
│   │   └── page.tsx            # 土地活用ページ
│   ├── contact/
│   │   └── page.tsx            # お問い合わせページ
│   │
│   └── types/
│       └── parking.ts          # Parking 型定義
│
├── data/
│   └── parkings.json           # 駐車場データ
│
├── public/                     # 静的ファイル
│   ├── CNAME                   # カスタムドメイン設定
│   ├── logo.png
│   ├── favicon.ico
│   ├── llms.txt
│   └── images/parkings/        # 駐車場写真
│
├── aqua.yaml                   # CLI ツールバージョン管理
├── Taskfile.yml                # 開発コマンド定義
├── next.config.ts              # Next.js 設定
├── tailwind.config.ts          # Tailwind CSS 設定
├── postcss.config.mjs          # PostCSS 設定
├── eslint.config.mjs           # ESLint 設定
├── tsconfig.json               # TypeScript 設定
├── package.json                # 依存関係
└── pnpm-lock.yaml              # ロックファイル
```

## 前提条件

[aqua](https://aquaproj.github.io/) がインストールされている必要があります。

```bash
brew install aquaproj/aqua/aqua
```

aqua の bin ディレクトリに PATH を通してください。

```bash
export PATH="${AQUA_ROOT_DIR:-${XDG_DATA_HOME:-$HOME/.local/share}/aquaproj-aqua}/bin:$PATH"
```

## セットアップ

```bash
task dev
```

初回実行時に `aqua i -l` と `pnpm install` が自動で走り、必要なツール (Node.js, pnpm) のインストールと依存パッケージの取得が行われます。

## 開発コマンド

全てのコマンドは [go-task](https://taskfile.dev/) 経由で実行します。

| コマンド | 説明 |
| --- | --- |
| `task dev` | 開発サーバーを起動 |
| `task build` | プロダクションビルド |
| `task lint` | ESLint を実行 |

## デプロイ

`main` ブランチに push すると、GitHub Actions が自動的にビルド・デプロイを行います。
