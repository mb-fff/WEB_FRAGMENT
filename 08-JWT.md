## JWT

注意：JWT 是明文存储的，所以不要把一些重要的信息放进去

#### 前言

在浏览器中可以使用以下 API 进行 base64 的编/解码

```js
const encodedData = window.btoa('Hello, world') // 编码
const decodedData = window.atob(encodedData) // 解码
```

注意：base64 它不是加密，而是数据的另外一种展现形式，可以轻松的解码出来

#### JWT 介绍

JWT 组成：由 header、payload、signature 三部分组成的字符串，以英文句号间隔

-   header

    -   存放一些固定的数据
    -   使用 base64 编码

-   payload

    -   存放一些用户信息数据
    -   使用 base64 编码

-   signature
    -   签名，验证签名，防篡改和伪造（ header 和 payload 经过密钥加密生成）
    -   HS256
