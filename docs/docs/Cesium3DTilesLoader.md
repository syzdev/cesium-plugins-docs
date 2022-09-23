# Cesium3DTilesLoader

Plugin for loading and configuring 3DTiles.

Live Demo: [Cesium3DTilesLoader](https://syzdev.cn/cesium-plugins/example/Cesium3DTilesLoader.html)

![Cesium3DTilesLoader](/cesium-plugins-docs/screenshot/Cesium3DTilesLoader.png)

## `constructor(Cesium, viewer)`

Constructor, used to initialize the instance object of `Cesium3DTilesLoader`.

| Name     | Type     | Default | Description                         |
| -------- | -------- | ------- | ----------------------------------- |
| `Cesium` | `Object` |         | Cesium global object                |
| `viewer` | `Object` |         | Initialize `viewer` of Cesium scene |

```javascript
import { Cesium3DTilesLoader } from 'cesium-plugins'
const loader = new Cesium3DTilesLoader(Cesium, viewer)
```

## `load(url, posOpts, loadOpts): Cesium3DTileset `

The core function is used to load and configure 3DTiles.

| Name       | Type     | Default     | Description                                                                                                           |
| ---------- | -------- | ----------- | --------------------------------------------------------------------------------------------------------------------- |
| `url`      | `String` |             | The resource path to `tileset.json`                                                                                   |
| `posOpts`  | `Object` | (See below) | Load the position, rotation, and scale parameters for 3DTiles                                                         |
| `loadOpts` | `Object` | (See below) | Load the configuration of 3DTiles, which is consistent with the `option` configuration of the `Cesium3DTileset` class |

This function will return an instance object of `Cesium3DTileset`.

The parameter list and default configuration of `posOpts` are as follows:

```javascript
{
  lon: 116.391311, // Longitude (in decimal)
  lat: 39.90616, // Latitude (in decimal)
  hgt: 0, // Height (in meters)
  rx: 0, // X axis (longitude) direction rotation Angle (in degrees)
  ry: 0, // Y axis (latitude) direction rotation Angle (in degrees)
  rz: 0, // Z axis (height) direction rotation Angle (in degrees)
  scale: 1, // Scale of the 3DTiles
},
```

`loadOpts` is consistent with the `option` configuration of the `Cesium3DTileset` class，See: [Cesium3DTileset - Cesium Documentation](https://cesium.com/learn/cesiumjs/ref-doc/Cesium3DTileset.html?classFilter=Cesium3DTileset#Cesium3DTileset)，For example, you can add the following configuration:

```javascript
{
  maximumScreenSpaceError: 256,
  maximumMemoryUsage: 5120,
  immediatelyLoadDesiredLevelOfDetail: true,
}
```

Complete example:

```javascript
const url = 'https://syzdev.cn/cesium-docs-demo/3dtiles/tlfs/tileset.json'
const posOpts = {
  lon: 114.296,
  lat: 30.546,
  hgt: 0,
  scale: 1
}
const loadOpts = {
  maximumScreenSpaceError: 256,
  maximumMemoryUsage: 5120,
  immediatelyLoadDesiredLevelOfDetail: true,
}
const tileset = loader.load(url, posOpts, loadOpts)
```

## `locate()`

Used to position the perspective on the loaded 3DTiles.

```javascript
loader.locate()
```

## `destroy()`

Used to destroy the `Cesium3DTilesLoader` instance object.

```javascript
loader.destroy()
```