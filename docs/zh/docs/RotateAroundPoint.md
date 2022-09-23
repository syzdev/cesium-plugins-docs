# RotateAroundPoint

用于相机绕点旋转的工具类。

在线示例：[RotateAroundPoint](https://syzdev.cn/cesium-plugins/example/RotateAroundPoint.html)

![RotateAroundPoint](/screenshot/RotateAroundPoint.png)

## `constructor(Cesium, viewer, rotateOpts)`

构造函数，用于初始化`RotateAroundPoint`实例对象。

| 名称           | 类型       | 默认值   | 描述                                      |
| ------------ | -------- | ----- | --------------------------------------- |
| `Cesium`     | `Object` |       | Cesium全局对象                              |
| `viewer`     | `Object` |       | 初始化Cesium场景的`viewer`                    |
| `rotateOpts` | `Object` | （见下文） | 与相机绕点旋转有关的配置项，如相机绕点旋转的位置，旋转速率和相机和旋转点的距离 |

```javascript
import { RotateAroundPoint} from 'cesium-plugins'
const rotate = new RotateAroundPoint(Cesium, viewer, rotateOpts)
```

`floodOpts`的参数列表和示例如下：

```javascript
{
  position: new Cesium.Cartesian3.fromDegrees(114.296, 30.546, 20),
  degrees: 0.1, // 用于Cesium.Math.toRadians(degrees)
  range: 300, // 用于Cesium.HeadingPitchRange
}
```

## `start()`

用于开始相机绕点旋转。

```javascript
rotate.start()
```

## `pause()`

用于暂停相机绕点旋转。

```javascript
rotate.pause()
```
