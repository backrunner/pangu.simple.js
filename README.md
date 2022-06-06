<div align="center"><a>pangu.simple</a></div>

<p align="center">
Based on Vinta's version, modified by BackRunner.
</p>
<p align="center">
一个更加干净好用的 pangu.js
</p>

## 概述

原版的 pangu.js 对内容做了过度的转化，有的东西并不符合中国大陆开发者对文字排版的需要。

这个版本替换了核心 pangu.js 的核心代码，同时去除了一些不必要的转换，来满足开发者更常规化的排版需求。

## 修改

- 去除了对中间点的转换

- 去除了标点强制到 Full-width 的转换

- 替换原有正则为一套更加适合普通写作的新正则

- 重写测试代码

## 用法

### 使用 npm 引入

Step 1: 安装这个包

```bash
$ npm install pangu.simple
```

Step 2: 引入这个包

```js
import pangu from 'pangu.simple';

pangu.spacingText('为什么你们就不能加一个Space呢');
```

### CDN 引入

```html
<script src="https://cdn.jsdelivr.net/npm/pangu.simple@1.0.5/dist/browser/pangu.js"></script>
```

### License

MIT

Copyright (c) 2020 - 2022 BackRunner (For modified parts)
Copyright (c) 2013 Vinta (For original parts)
