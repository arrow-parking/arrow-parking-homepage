# 消火器株式会社 駐車場サイト

## 📁 プロジェクト構造

```
parking-system/
├── index.html              # トップページ
├── parkings.html           # 駐車場一覧
├── parking-detail.html     # 駐車場詳細（動的）
├── company.html            # 会社概要
├── landowner.html          # 土地活用
├── contact.html            # お問い合わせ
│
├── css/
│   └── style.css          # 全ページ共通のスタイル
│
├── js/
│   ├── parkings.js        # 駐車場一覧ページ用
│   └── detail.js          # 駐車場詳細ページ用
│
├── data/
│   └── parkings.json      # 駐車場データベース
│
├── images/                 # 駐車場の写真
│   ├── parking-1-1.jpg
│   ├── parking-1-2.jpg
│   └── ...
│
└── README.md              # このファイル
```

## 🚀 使い方

### 1. ローカルで確認

VSCodeで `index.html` を右クリック → 「Open with Live Server」

または

ブラウザで直接 `index.html` を開く

### 2. GitHub Pagesにデプロイ

```bash
# GitHubリポジトリを作成
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yama6418/parking-system.git
git push -u origin main

# GitHub Settings → Pages → Source: main branch → Save
```

公開URL: `https://yama6418.github.io/parking-system/`

## ➕ 新しい駐車場を追加する方法

### ステップ1: 写真を追加

```
images/parking-9-1.jpg
images/parking-9-2.jpg
images/parking-9-3.jpg
```

### ステップ2: data/parkings.json に追加

```json
{
  "id": 9,
  "name": "消火器パーキング札幌駅前",
  "prefecture": "北海道",
  "city": "札幌市",
  "address": "札幌市中央区北1条西1-1-1",
  "station": "札幌駅",
  "capacity": 30,
  "price_per_hour": 350,
  "price_per_day": 2100,
  "latitude": 43.0686,
  "longitude": 141.3506,
  "features": "24時間営業,屋根付き,防犯カメラ,EV充電",
  "images": [
    "images/parking-9-1.jpg",
    "images/parking-9-2.jpg",
    "images/parking-9-3.jpg"
  ],
  "description": "札幌駅徒歩2分の好立地。"
}
```

### ステップ3: GitHubにプッシュ

```bash
git add .
git commit -m "札幌駅前駐車場を追加"
git push
```

**完了！** HTMLやCSS、JavaScriptは触る必要なし。

## 📄 各ファイルの役割

| ファイル | 役割 | 読み込むもの |
|---------|------|-------------|
| `index.html` | トップページ | `css/style.css` |
| `parkings.html` | 駐車場一覧 | `css/style.css`, `js/parkings.js` |
| `parking-detail.html` | 駐車場詳細 | `css/style.css`, `js/detail.js` |
| `company.html` | 会社概要 | `css/style.css` |
| `landowner.html` | 土地活用 | `css/style.css` |
| `contact.html` | お問い合わせ | `css/style.css` |
| `js/parkings.js` | 一覧ページの動作 | `data/parkings.json` |
| `js/detail.js` | 詳細ページの動作 | `data/parkings.json` |

## 🔗 ページ遷移

```
index.html (トップ)
    ↓
parkings.html (一覧)
    ↓
parking-detail.html?id=1 (詳細)
    ↓
[一覧に戻る] または [他の駐車場]
```

## 🎨 カスタマイズ

### 色を変更したい場合

`css/style.css` で以下の部分を変更：

```css
/* メインカラー */
#667eea → 好きな色

/* グラデーション */
linear-gradient(135deg, #667eea 0%, #764ba2 100%)
```

### 会社情報を変更したい場合

全HTMLファイルのフッター部分を変更：

```html
<h4>株式会社消火器</h4>
<p>〒100-0001<br>東京都千代田区千代田1-1-1</p>
<p>TEL: <a href="tel:03-1234-5678">03-1234-5678</a></p>
```

## 📱 レスポンシブ対応

- デスクトップ（1200px以上）
- タブレット（768px〜1199px）
- スマホ（767px以下）

すべてのデバイスで快適に閲覧できます。

## ✅ 動作確認済みブラウザ

- Chrome
- Firefox
- Safari
- Edge

## 📞 サポート

質問があればお気軽にご連絡ください。

---

© 2026 消火器株式会社
