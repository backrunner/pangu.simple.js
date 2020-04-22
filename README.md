<div align="center"><a>pangu.simple</a></div>

<p align="center">
Based on Vinta's version, modded by BackRunner.
</p>
<p align="center">
一个更加干净好用的 pangu.js
</p>

## 概述

之所以做这个版本主要是因为原本的 pangu.js 对内容做了过度的转化，有的东西不是我想要的，我只是想要加个空格。

所以特别做了这个版本来处理排版。

## 修改

- 去除了对中间点的转换
- 去除了标点强制到 Full-width 的转换
- 替换原有正则为一套更加适合普通写作的新正则
- 重写测试代码

## 用法

浏览器：

下载 /dist/browser 内的 pangu.js/pangu.min.js，用 script 标签载入脚本。

使用方式同原本的 pangu.js，修改只针对核心部分，API 均无变动

Node：

npm 安装或下载 /dist 中内容后按照原版 pangu.js 的使用方式使用即可。