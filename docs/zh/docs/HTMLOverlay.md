# HTMLOverlay

将HTML元素放在Cesium canvas上。

在线示例：[HTMLOverlay](https://syzdev.cn/cesium-plugins/example/HTMLOverlay.html)

![HTMLOverlay](/cesium-plugins-docs/screenshot/HTMLOverlay.png)

## `constructor(Cesium, viewer, 'htmlOverlay', loadOpts)`

构造函数，用于初始化`HTMLOverlay`实例对象。

| 名称         | 类型       | 默认值   | 描述                                                             |
| ---------- | -------- | ----- | -------------------------------------------------------------- |
| `Cesium`   | `Object` |       | Cesium全局对象                                                     |
| `viewer`   | `Object` |       | 初始化Cesium场景的`viewer`                                           |
| `Element`  | `String` |       | HTML元素的ID                                                      |
| `loadOpts` | `Object` | （见下文） | 与`loadOpts`有关的配置项，如`HTMLOverlay`的位置，在`canvas`上的位置偏移，是否在地球背面时隐藏 |

```javascript
import { HTMLOverlay } from 'cesium-plugins'

const loadOpts = {
  position: Cesium.Cartesian3.fromDegrees(-64.75286, 29.64929),
  offset: {
    x: 0,
    y: 10
  },
  hideOnBack: true
}

const overlay = new HTMLOverlay(Cesium, viewer, 'htmlOverlay', loadOpts)
```

`loadOpts`的参数列表及默认配置如下：

```javascript
{
  offset: {
    x: 0, // 在canvas上的位置偏移
    y: 0, // 在canvas上的位置偏移
  },
  hideOnBack: true, // 是否在地球背面时隐藏
}
```

## `show()`

用于显示`HTMLOverlay`。

```javascript
overlay.show()
```

## `hide()`

用于隐藏`HTMLOverlay`。

```javascript
overlay.hide()
```

## `destroy()`

用于销毁`HTMLOverlay`实例对象。

```javascript
overlay.destroy()
```
