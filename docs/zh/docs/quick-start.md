# 快速上手

## 安装

使用 npm:

```shell
npm i cesium-plugins
```

```javascript
import { PositionPicker } from 'cesium-plugins'
```

快速引入，可以直接通过 jsDelivr CDN 来引入 `cesium-plugins`：

```html
<script type="module">
  import { PositionPicker } from 'https://cdn.jsdelivr.net/npm/cesium-plugins@1.0.62/index.js'
</script>
```

UMD 格式也是支持的，可以通过命名空间 `CP` 来引入 `cesium-plugins`：

```html
<script src="https://cdn.jsdelivr.net/npm/cesium-plugins@1.0.62/index.umd.js"></script>
<script>
  const picker = new CP.PositionPicker(Cesium, viewer)
</script>
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