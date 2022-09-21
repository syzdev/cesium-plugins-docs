# WaterMask

用于创建动态水面的工具类。

在线示例：[WaterMask](https://syzdev.cn/cesium-plugins/example/WaterMask.html)

## `constructor(Cesium, viewer, normalMapUrl, waterMaskOpts)`

构造函数，用于初始化`WaterMask`实例对象。

| 名称            | 类型       | 默认值   | 描述                      |
| ------------- | -------- | ----- | ----------------------- |
| `Cesium`      | `Object` |       | Cesium全局对象              |
| `viewer`      | `Object` |       | 初始化Cesium场景的`viewer`    |
| `normalMapUrl`         | `String` |       | 水面的法线贴图资源路径           |
| `waterMaskOpts` | `Object` | （见下文） | 与水面有关的配置项，如水面颜色、水波纹的数量、水流速度、水波纹的振幅、水面反射强度 |

```javascript
import { WaterMask  } from 'cesium-plugins'
const waterMask = new WaterMask(Cesium, viewer, normalMapUrl, waterMaskOpts)
```

`waterMaskOpts`的参数列表及默认配置如下：

```javascript
{
  baseWaterColor: new Cesium.Color.fromBytes(64, 157, 250, 60), // 水面颜色：rgba
  frequency: 200.0, // 水波纹的数量
  animationSpeed: 0.002, // 水流速度
  amplitude: 5.0, // 水波纹的振幅
  specularIntensity: 1.0, // 水面反射强度
  pos: [], // 水面范围，经纬度数组
},
```

其中`pos`参数没有默认值，该参数需要提供一个经纬度数组，如：

```javascript
const pos = [
  124.80506,
  30.64557,
  127.37983,
  30.69813,
  127.42934,
  29.17222,
  124.71773,
  29.17104,
]
```

## `load()`

用于加载动态水面。

```javascript
waterMask.load()
```

## `destroy()`

用于销毁动态水面。

```javascript
waterMask.destroy()
```