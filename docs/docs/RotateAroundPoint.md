# RotateAroundPoint

camera rotation around a point.

Live Demo: [RotateAroundPoint](https://syzdev.cn/cesium-plugins/example/RotateAroundPoint.html)

## `constructor(Cesium, viewer, rotateOpts)`

Constructor, used to initialize the instance object of `RotateAroundPoint`.

| Name         | Type     | Default     | Description                                                                                                                                                                                                |
| ------------ | -------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Cesium`     | `Object` |             | Cesium global object                                                                                                                                                                                       |
| `viewer`     | `Object` |             | Initialize `viewer` of Cesium scene                                                                                                                                                                        |
| `rotateOpts` | `Object` | (See below) | Configuration related to the camera rotation around the point, such as the position of the camera rotation around the point, the rotation rate, and the distance between the camera and the rotation point |

```javascript
import { RotateAroundPoint} from 'cesium-plugins'
const rotate = new RotateAroundPoint(Cesium, viewer, rotateOpts)
```

The parameter list and examples of `rotateOpts` are as follows:

```javascript
{
  position: new Cesium.Cartesian3.fromDegrees(114.296, 30.546, 20),
  degrees: 0.1, // For Cesium.Math.toRadians(degrees)
  range: 300, // For Cesium.HeadingPitchRange
}
```

## `start()`

Used to start the camera rotation around a point.

```javascript
rotate.start()
```

## `pause()`

Used to pause the camera rotation around a point.

```javascript
rotate.pause()
```
