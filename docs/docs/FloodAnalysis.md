# FloodAnalysis

Plugin for simulating flood analysis.

Live Demo: [FloodAnalysis](https://syzdev.cn/cesium-plugins/example/FloodAnalysis.html)

> Note: when using this plugin, please ensure that terrain is loaded in the scene and terrain depth detection is enabled.
> 
> ```javascript
> viewer.terrainProvider = Cesium.createWorldTerrain()
> viewer.scene.globe.depthTestAgainstTerrain = true
> ```

![FloodAnalysis](/screenshot/FloodAnalysis.png)

## `constructor(Cesium, viewer, pos, floodOpts)`

Constructor, used to initialize the instance object of `FloodAnalysis`.

| Name        | Type     | Default     | Description                                                                                                                                    |
| ----------- | -------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `Cesium`    | `Object` |             | Cesium global object                                                                                                                           |
| `viewer`    | `Object` |             | Initialize `viewer` of Cesium scene                                                                                                            |
| `pos`       | `Array`  | (See below) | Longitude and latitude region range used for simulation flood analysis                                                                         |
| `floodOpts` | `Object` | (See below) | Configuration related to floodopts, such as initial water level height, target water level height, water level rising speed, water color, etc. |

```javascript
import { PositionPicker } from 'cesium-plugins'
const flood = new FloodAnalysis(Cesium, viewer, pos, floodOpts)
```

The configuration example of `pos` are as follows:

```javascript
const pos = [
  85.122, 28.848, 
  85.074, 28.309, 
  86.037, 28.257, 
  86.044, 28.835
]
```

The parameter list and default configuration of `floodOpts` are as follows:

```javascript
{
  waterHeight: 0, // in meters
  targetWaterHeight: 100, // in meters
  speed: 1, // in meters
  waterColor: new Cesium.Color.fromBytes(64, 157, 250, 120),
}
```

`waterColor` must be the color defined in Cesium, See: [Color - Cesium Documentation](https://cesium.com/learn/cesiumjs/ref-doc/Color.html?classFilter=color).

## `start(callback)`

Used to start simulation flood analysis.

| Name       | Type       | Default | Description                                      |
| ---------- | ---------- | ------- | ------------------------------------------------ |
| `callback` | `Function` |         | Callback function to get the current water level |

```javascript
flood.start((waterHeight) => {
  // console.log(waterHeight)
})
```

## `pause()`

Used to pause simulation flood analysis.

```javascript
flood.pause()
```

## `destroy()`

Used to destroy simulated flood analysis in the scene.

```javascript
flood.destroy()
```

## `getCurrentWaterHeight()`

Used to get  the current water level height.

```javascript
flood.getCurrentWaterHeight()
```

## `setCurrentWaterHeight(height)`

Used to set the current water level height.

| Name     | Type     | Default | Description                                    |
| -------- | -------- | ------- | ---------------------------------------------- |
| `height` | `Number` |         | Set the current water level height (in meters) |

```javascript
flood.setCurrentWaterHeight(1000)
```