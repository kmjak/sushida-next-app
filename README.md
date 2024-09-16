---

# タイピングゲームのセットアップ手順

## 1. 必要なパッケージのインストールとサーバーの起動

まずは、プロジェクトをクローンし、必要なパッケージをインストールしてください。次に、開発サーバーと`json-server`を起動します。

```bash
npm install
npm run dev
npm run json-server
```

---

## 2. `.env.local` の設定

プロジェクトルート (`typing-game-with-next/`) に `.env.local` ファイルを作成し、以下の内容を記入してください。
なお、`""`で囲まれている部分は、それぞれの環境に応じて設定してください。

```plaintext
NEXT_PUBLIC_JWT_URL=http://localhost:"Next.jsのポート番号"/services/jwt/
NEXT_PUBLIC_USERS_JSON_SERVER=http://localhost:"json-serverのポート番号"/users
NEXT_PUBLIC_JWT_SECRET_KEY="オリジナルのsecret key"
```

### **例**

Next.js のURLが `localhost:3000/` 、 JSON-ServerのURLが`localhost:3001/`の場合、設定ファイルは以下のようになります:

```plaintext
NEXT_PUBLIC_JWT_URL=http://localhost:3000/services/jwt/
NEXT_PUBLIC_USERS_JSON_SERVER=http://localhost:3001/users
NEXT_PUBLIC_JWT_SECRET_KEY=TEST-Secret-Key
```

その後、開発サーバーと`json-server`を起動して環境が正しく動作していることを確認します。

```bash
npm run dev
> next dev

  ▲ Next.js 14.2.8
  - Local:        http://localhost:3000
  - Environments: .env.local

npm run json-server
> typing-next-app@0.1.0 json-server
> json-server --watch src/json-server/users.json --port 3001
```

---

## 3. サインアップとログイン

`http://localhost:3000` にアクセスし、以下の条件に従ってサインアップとログインを行ってください。

- **アカウント名**: 1文字以上19文字以下で、英数字および `@`、`_`、`-` が使用可能。
- **パスワード**: 4文字以上19文字以下で、英数字および `@`、`_`、`-` が使用可能。

> **注意**: ユーザー認証なしではゲームをプレイできません。必ずログインしてください。

認証されていない場合、`http://localhost:3000/verified/` にアクセスしようとすると、`http://localhost:3000/` にリダイレクトされます。

---


## 4. ゲームのプレイ

ログインに成功すると、`http://localhost:3000/verified/` にアクセスできるようになり、実際にゲームをプレイできるようになります。

ゲームで出題されるワードは、`src/domain/word/words.ts` ファイルに記載されています。
自作の問題を追加したい場合は、このファイルを参考にして、単語リストを変更してください。

---

## 5. ログアウト・ユーザーの切り替え

ログアウト、または別のユーザーに切り替えたい場合は、`http://localhost:3000/` にアクセスし、`logout` を選択してください。これにより、認証画面に戻ります。

---

### ゲームセットアップのサマリー

- パッケージのインストール: `npm install`
- 開発サーバー起動: `npm run dev`
- JSONサーバー起動: `npm run json-server`
- `.env.local` 設定: 各自の環境に合わせて設定
- サインアップとログインを行い、ゲーム開始

---

これで、タイピングゲームのセットアップと操作方法について完了です。楽しんでプレイしてください！