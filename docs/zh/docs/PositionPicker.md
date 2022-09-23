# PositionPicker

用于鼠标左键点击拾取经度、纬度和高度的工具类。

在线示例：[PositionPicker](https://syzdev.cn/cesium-plugins/example/PositionPicker.html)（在浏览器控制台查看输出）

![PositionPicker](/cesium-plugins-docs/screenshot/PositionPicker.png)

## `constructor(Cesium, viewer)`

构造函数，用于初始化`PositionPicker`实例对象。

| 名称       | 类型       | 默认值 | 描述                   |
| -------- | -------- | --- | -------------------- |
| `Cesium` | `Object` |     | Cesium全局对象           |
| `viewer` | `Object` |     | 初始化Cesium场景的`viewer` |

```javascript
import { PositionPicker } from 'cesium-plugins'
const picker = new PositionPicker(Cesium, viewer)
```

## `pick(callback, verbose)`

核心方法，用于鼠标左键点击拾取经度、纬度和高度。获取的经度、纬度和高度可在回调函数`callback`中获取。

| 名称         | 类型         | 默认值    | 描述               |
| ---------- | ---------- | ------ | ---------------- |
| `callback` | `Function` |        | 获取经度、纬度和高度的回调函数  |
| `verbose`  | `Boolean`  | `true` | 是否在控制台输出经度、纬度和高度 |

```javascript
picker.pick(({ lon, lat, hgt }) => {
  console.log(lon, lat, hgt)
}, true)
```

## `destroy()`

用于销毁`PositionPicker`实例对象。

```javascript
picker.destroy()
```