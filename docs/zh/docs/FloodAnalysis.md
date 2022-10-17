# FloodAnalysis

用于模拟淹没分析的工具类。

在线示例：[FloodAnalysis](https://syzdev.cn/cesium-plugins/example/FloodAnalysis.html)

> 注意：使用该工具类时，请确保场景中加载了地形，并且开启了地形深度检测。
> 
> ```javascript
> viewer.terrainProvider = Cesium.createWorldTerrain()
> viewer.scene.globe.depthTestAgainstTerrain = true
> ```

![FloodAnalysis](/cesium-plugins-docs/screenshot/FloodAnalysis.png)

## `constructor(Cesium, viewer, pos, floodOpts)`

构造函数，用于初始化`FloodAnalysis`实例对象。

| 名称          | 类型       | 默认值   | 描述                                            |
| ----------- | -------- | ----- | --------------------------------------------- |
| `Cesium`    | `Object` |       | Cesium全局对象                                    |
| `viewer`    | `Object` |       | 初始化Cesium场景的`viewer`                          |
| `pos`       | `Array`  | （见下文） | 用于模拟淹没分析的经纬度区域范围                              |
| `floodOpts` | `Object` | （见下文） | 与floodOpts有关的配置项，如初始水位高度，目标水位高度，水位上升速度，水的颜色等。 |

```javascript
import { FloodAnalysis } from 'cesium-plugins'
const flood = new FloodAnalysis(Cesium, viewer, pos, floodOpts)
```

`pos`的配置样例如下：

```javascript
const pos = [
  85.122, 28.848, 
  85.074, 28.309, 
  86.037, 28.257, 
  86.044, 28.835
]
```

`floodOpts`的参数列表及默认配置如下：

```javascript
{
  waterHeight: 0, // 单位：米
  targetWaterHeight: 100, // 单位：米
  speed: 1, // 单位：米
  waterColor: new Cesium.Color.fromBytes(64, 157, 250, 120),
}
```

其中`waterColor`需要是Cesium中定义的颜色，详见：[Color - Cesium Documentation](https://cesium.com/learn/cesiumjs/ref-doc/Color.html?classFilter=color)。

## `start(callback)`

用于开始模拟淹没分析。

| 名称         | 类型         | 默认值 | 描述            |
| ---------- | ---------- | --- | ------------- |
| `callback` | `Function` |     | 获取当前水位高度的回调函数 |

```javascript
flood.start((waterHeight) => {
  // console.log(waterHeight)
})
```

## `pause()`

用于暂停模拟淹没分析。

```javascript
flood.pause()
```

## `destroy()`

用于销毁场景中的模拟淹没分析。

```javascript
flood.destroy()
```

## `getCurrentWaterHeight()`

用于获取当前的水位高度。

```javascript
flood.getCurrentWaterHeight()
```

## `setCurrentWaterHeight(height)`

用于设置当前的水位高度。

| 名称       | 类型       | 默认值 | 描述             |
| -------- | -------- | --- | -------------- |
| `height` | `Number` |     | 设置当前的水位高度，单位：米 |

```javascript
flood.setCurrentWaterHeight(1000)
```