# TailwindCSS Prefix Parser

## 説明

指定した Prefix を TailwindCSS の各クラス名の先頭に置き換えるツール。

基本的な TailwindCSS のクラス名に対応しております。

独自で指定した TailwindCSS クラス名には非対応となります。

## 作った背景

Shopify のテーマ開発にて TailwindCSS を導入したは良いものの、既存の CSS を override しないように Prefix をつける必要性がありました。

ただ、開発工数を下げるために様々な TailwindCSS のコンポーネントを使用します。

その際、莫大な置換作業が発生しかえって時間が取られそうなため作成しました。

## サイト

https://twc-prefix-parser.vercel.app/

## 使用方法

① Prefix を決める

```text
tw-
```

② Input Field に貼り付ける

```html
<nav
  class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center"
>
  <a class="mr-5 hover:text-gray-900">First Link</a>
  <a class="mr-5 hover:text-gray-900">Second Link</a>
  <a class="mr-5 hover:text-gray-900">Third Link</a>
  <a class="mr-5 hover:text-gray-900">Fourth Link</a>
</nav>
```

③ 変換する

④Result に Prefix 付きで表示される

## Requirement

- TailwindCSS
- NextJS
- TS
- fortawesome
