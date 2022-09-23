# exportSceneAsImage

用于将场景导出为图片（.png）的方法。

在线示例：[exportSceneAsImage](https://syzdev.cn/cesium-plugins/example/exportSceneAsImage.html)

![exportSceneAsImage](/cesium-plugins-docs/screenshot/exportSceneAsImage.png)

| 名称         | 类型       | 默认值                             | 描述                   |
| ---------- | -------- | ------------------------------- | -------------------- |
| `viewer`   | `Object` |                                 | 初始化Cesium场景的`viewer` |
| `fileName` | `String` | `Scene-${new Date().getTime()}` | 导出的文件名               |
| `fileType` | `String` | `png` | 导出的文件类型               |

```javascript
import { exportSceneAsImage } from 'cesium-plugins'
exportSceneAsImage(viewer, 'example-file-name')
```