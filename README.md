# vitality-money

- 系統環境: node v12.13.0

## env 設定說明

``` bash
$ cp .env.example .env
```

必要變數說明

| 名稱 | 說明 |
| ------ | ------ |
| NUXT_ENV_API_URL | api連結 |
| NUXT_ENV_DT_URL | DT網址 |
| NUXT_ENV_HORSE_URL | 黑馬網址 |


## 安裝步驟

``` bash
$ npm install (or yarn)

# run開發者模式
$ npm run dev (or yarn dev)

# 部屬步驟 (需架到server才需要用)
# pm2 可掛載
$ npm run build
$ npm run start

#靜態部屬
$ npm run generate
```
