## 功能

## 執行

## 需求

- [] 二層選單 (類別 > 商品)
- [] 商品加至購物車
- [] 查看購物車
- [] 購物車內商品數量增加/減少
- [] 購物車內商品數量增加上限 10 個
- [] 購物車內商品數量減少下限 0 個，即等於移除
- [] 購物車內單一商品移除
- [] 購物車結單
- [] 訂單列表
- [] 訂單明細
- [] 清除所有訂單資訊
- [] 保存訂單歷史資訊至 localStorage

- [] 建置後端 Server
- [] 建置對應 API
   - 取得所有類別和對應商品 (GET)
   - 建立訂單 (POST)
   - 取得所有訂單歷史記錄 (GET)
- [] 前端重新串接對應 API
- [] 保存訂單歷史資訊至後端

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
