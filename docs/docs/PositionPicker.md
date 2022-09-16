# PositionPicker

Plugin for left mouse click to pick up longitude, latitude, and height.

Live Demo: [PositionPicker](https://syzdev.cn/cesium-plugins/example/PositionPicker.html) (View the output in the browser console.)

## `constructor(Cesium, viewer)`

Constructor, used to initialize the instance object of `PositionPicker`.

| Name     | Type     | Default | Description                         |
| -------- | -------- | ------- | ----------------------------------- |
| `Cesium` | `Object` |         | Cesium global object                |
| `viewer` | `Object` |         | Initialize `viewer` of Cesium scene |

```javascript
import { PositionPicker } from 'cesium-plugins'
const picker = new PositionPicker(Cesium, viewer)
```

## `pick(callback, verbose)`

The core function is used to pick up longitude, latitude and height by clicking the left mouse button. The obtained longitude, latitude, and height can be obtained in the `callback` function.

| Name       | Type       | Default | Description                                                     |
| ---------- | ---------- | ------- | --------------------------------------------------------------- |
| `callback` | `Function` |         | Callback function for obtaining longitude, latitude and height  |
| `verbose`  | `Boolean`  | `true`  | Whether to output longitude, latitude and height on the console |

```javascript
picker.pick(({ lon, lat, hgt }) => {
  console.log(lon, lat, hgt)
}, true)
```

## `destroy()`

Used to destroy the `PositionPicker` instance object.

```javascript
picker.destroy()
```