# Quick Start

## Installation

Using npm:

```shell
npm i cesium-plugins
```

Using jsDelivr CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/cesium-plugins@1.0.6/index.js"></script>
```

Using unpkg CDN:

```html
<script src="https://unpkg.com/cesium-plugins@1.0.6/index.js"></script>
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