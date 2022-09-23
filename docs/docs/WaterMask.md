# WaterMask

Plugin for generating dynamic water surface.

Live Demo: [WaterMask](https://syzdev.cn/cesium-plugins/example/WaterMask.html)

![WaterMask](/screenshot/WaterMask.png)

## `constructor(Cesium, viewer, normalMapUrl, waterMaskOpts)`

Constructor, used to initialize the instance object of `WaterMask`.

| Name            | Type     | Default     | Description                                                                                                                             |
| --------------- | -------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `Cesium`        | `Object` |             | Cesium global object                                                                                                                    |
| `viewer`        | `Object` |             | Initialize `viewer` of Cesium scene                                                                                                     |
| `normalMapUrl`  | `String` |             | Normal Map of water                                                                                                                     |
| `waterMaskOpts` | `Object` | (See below) | Configuration related to water surface materials, such as `baseWaterColor`、`frequency`、`animationSpeed`、`amplitude`、`specularIntensity` |

```javascript
import { WaterMask } from 'cesium-plugins'
const waterMask = new WaterMask(Cesium, viewer, normalMapUrl, waterMaskOpts)
```

The parameter list and default configuration of `waterMaskOpts` are as follows:

```javascript
{
  baseWaterColor: new Cesium.Color.fromBytes(64, 157, 250, 60), // rgba color object base color of the water.
  frequency: 200.0, // Number that controls the number of waves.
  animationSpeed: 0.002, // Number that controls the animations speed of the water.
  amplitude: 5.0, // Number that controls the amplitude of water waves.
  specularIntensity: 1.0, // Number that controls the intensity of specular reflections.
  pos: [], // Range of loading dynamic water surface
},
```

The `pos` parameter has no default value, this parameter needs to provide an array of longitude and latitude, such as:

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

Used to load dynamic water surface.

```javascript
waterMask.load()
```

## `destroy()`

Used to destroy dynamic water surface.

```javascript
waterMask.destroy()
```
