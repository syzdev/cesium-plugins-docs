# Quick Start

## Installation

Using npm:

```shell
npm i cesium-plugins
```

```javascript
import { PositionPicker } from 'cesium-plugins'
```

For quick sketches, you can import `cesium-plugins` directly from jsDelivr CDN.

```html
<script type="module">
  import { PositionPicker } from 'https://cdn.jsdelivr.net/npm/cesium-plugins@1.0.62/index.js'
</script>
```

The library is also available in UMD format under the namespace `CP`.

```html
<script src="https://cdn.jsdelivr.net/npm/cesium-plugins@1.0.62/index.umd.js"></script>
<script>
  const picker = new CP.PositionPicker(Cesium, viewer)
</script>
```

## Basic example

Make sure that `Cesium` has been set up and that the `viewer` has been initialized.

The following uses `PositionPicker` as an example to describe the basic usage of `cesium-plugins`.

```javascript
import { PositionPicker } from 'cesium-plugins'
const picker = new PositionPicker(Cesium, viewer)

picker.pick(({ lon, lat, hgt }) => {
  console.log(lon, lat, hgt)
}, true)
```