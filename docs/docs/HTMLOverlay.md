# HTMLOverlay

To geographically place an HTML element on top of the Cesium canvas.

Live Demo: [HTMLOverlay](https://syzdev.cn/cesium-plugins/example/HTMLOverlay.html)

![HTMLOverlay](/cesium-plugins-docs/screenshot/HTMLOverlay.png)

## `constructor(Cesium, viewer, 'htmlOverlay', loadOpts)`

Constructor, used to initialize the instance object of `HTMLOverlay`.

| Name       | Type     | Default     | Description                                                                                                                                                |
| ---------- | -------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Cesium`   | `Object` |             | Cesium global object                                                                                                                                       |
| `viewer`   | `Object` |             | Initialize `viewer` of Cesium scene                                                                                                                        |
| `Element`  | `String` |             | The ID of the HTML element                                                                                                                                 |
| `loadOpts` | `Object` | (See below) | Configuration related to the HTMLOverlay, such as the position of the HTMLOverlay, offset on canvas, and whether to hide elements in the back of the earth |

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

The parameter list and default configuration of `HTMLOverlay` are as follows:

```javascript
{
  offset: {
    x: 0, // offset on canvas
    y: 0, // offset on canvas
  },
  hideOnBack: true, // whether to hide elements in the back of the earth
}
```

## `show()`

Used to show `HTMLOverlay`.

```javascript
overlay.show()
```

## `hide()`

Used to hide `HTMLOverlay`.

```javascript
overlay.hide()
```

## `destroy()`

Used to destroy the `HTMLOverlay` instance object.

```javascript
overlay.destroy()
```
