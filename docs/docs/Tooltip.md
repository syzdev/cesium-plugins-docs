# Tooltip

Plugin for creating tooltip that follow mouse movement.

Live Demo: [Tooltip](https://syzdev.cn/cesium-plugins/example/Tooltip.html)

## `constructor(Cesium, viewer, msg, tooltipOpts)`

Constructor, used to initialize the instance object of `Tooltip`.

| Name          | Type     | Default     | Description                                                     |
| ------------- | -------- | ----------- | --------------------------------------------------------------- |
| `Cesium`      | `Object` |             | Cesium global object                                            |
| `viewer`      | `Object` |             | Initialize `viewer` of Cesium scene                             |
| `msg`         | `String` |             | Contents displayed in tooltip                                   |
| `tooltipOpts` | `Object` | (See below) | Configuration related to tooltip, such as location, style, etc. |

```javascript
import { Tooltip } from 'cesium-plugins'
const tooltip = new Tooltip(Cesium, viewer, 'cesium-plugins', tooltipOpts)
```

The parameter list and default configuration of `tooltipOpts` are as follows:

```javascript
{
  // Offset of Tooltip from mouse (in px)
  offset: {
    left: 30,
    top: 50,
  },
  // The style of the Tooltip container
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
  // The style of the Tooltip content
  innerStyle: {
    padding: '5px 8px',
    fontSize: '10px',
    fontWeight: '400',
  },
  // Whether to display Tooltip only when mouse is on Earth
  isShowOnlyOnEarth: true,
}
```

Complete example:

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

Used to display a Tooltip that is automatically displayed after the constructor is executed. This function is used in conjunction with the `hide()` function.

```javascript
tooltip.show()
```

## `hide()`

Used to hide Tooltip.

```javascript
tooltip.hide()
```

## `destroy()`

Used to destroy the `Tooltip` instance object.

```javascript
tooltip.destroy()
```