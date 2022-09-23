# exportSceneAsImage

Function used to export the scene as an image (.png).

Live Demo: [exportSceneAsImage](https://syzdev.cn/cesium-plugins/example/exportSceneAsImage.html)

![exportSceneAsImage](/screenshot/exportSceneAsImage.png)

| Name       | Type     | Default                         | Description                         |
| ---------- | -------- | ------------------------------- | ----------------------------------- |
| `viewer`   | `Object` |                                 | Initialize `viewer` of Cesium scene |
| `fileName` | `String` | `Scene-${new Date().getTime()}` | File name to be exported            |
| `fileType` | `String` | `png` | File type to be exported            |

```javascript
import { exportSceneAsImage } from 'cesium-plugins'
exportSceneAsImage(viewer, 'example-file-name')
```