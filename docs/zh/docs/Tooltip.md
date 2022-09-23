# Tooltip

用于创建跟随鼠标移动的Tooltip工具类。

在线示例：[Tooltip](https://syzdev.cn/cesium-plugins/example/Tooltip.html)

![Tooltip](/cesium-plugins-docs/screenshot/Tooltip.png)

## `constructor(Cesium, viewer, msg, tooltipOpts)`

构造函数，用于初始化`Tooltip`实例对象。

| 名称            | 类型       | 默认值   | 描述                      |
| ------------- | -------- | ----- | ----------------------- |
| `Cesium`      | `Object` |       | Cesium全局对象              |
| `viewer`      | `Object` |       | 初始化Cesium场景的`viewer`    |
| `msg`         | `String` |       | Tooltip中显示的字符           |
| `tooltipOpts` | `Object` | （见下文） | 与Tooltip有关的配置项，如位置、样式等。 |

```javascript
import { Tooltip } from 'cesium-plugins'
const tooltip = new Tooltip(Cesium, viewer, 'cesium-plugins', tooltipOpts)
```

`tooltipOpts`的参数列表及默认配置如下：

```javascript
{
  // Tooltip距离鼠标的偏移量（单位：px）
  offset: {
    left: 30,
    top: 50,
  },
  // Tooltip容器的样式
  containerStyle: {
    display: 'block',
    position: 'absolute',
    maxWidth: '150px',
    minWidth: '100px',
    borderRadius: '4px',
    background: '#757575',
    color: '#fafafa',
    zIndex: '999',
  },
  // Tooltip内容的样式
  innerStyle: {
    padding: '5px 8px',
    fontSize: '10px',
    fontWeight: '400',
  },
  // 是否仅当鼠标在地球上时显示Tooltip
  isShowOnlyOnEarth: true,
}
```

完整示例：

```javascript
const tooltipOpts = {
  offset: {
    top: 40,
    left: 20,
  },
  containerStyle: {
    maxWidth: '250px',
    color: '#fff',
    background: 'rgb(109, 171, 228)'
  },
  innerStyle: {
    fontSize: '20px'
  },
  isShowOnlyOnEarth: false
}

const tooltip = new Tooltip(Cesium, viewer, 'cesium-plugins', tooltipOpts)
```

## `show()`

用于显示Tooltip，在执行构造函数后，Tooltip便会自动显示，该方法的作用在于配合`hide()`方法一起使用。

```javascript
tooltip.show()
```

## `hide()`

用于隐藏Tooltip。

```javascript
tooltip.hide()
```

## `destroy()`

用于销毁`Tooltip`实例对象。

```javascript
tooltip.destroy()
```