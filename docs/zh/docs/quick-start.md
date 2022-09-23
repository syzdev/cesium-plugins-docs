# 快速上手

## 安装

使用 npm：

```shell
npm i cesium-plugins
```

使用 jsDelivr CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/cesium-plugins@1.0.61/index.js"></script>
```

使用 unpkg CDN:

```html
<script src="https://unpkg.com/cesium-plugins@1.0.61/index.js"></script>
```

## 基本示例

请确保项目中`Cesium`已经成功引入，并且`viewer`已经完成初始化。

下面以`PositionPicker`为例描述`cesium-plugins`的基本用法。

```javascript
import { PositionPicker } from 'cesium-plugins'
const picker = new PositionPicker(Cesium, viewer)

picker.pick(({ lon, lat, hgt }) => {
  console.log(lon, lat, hgt)
}, true)
```