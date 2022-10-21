(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{289:function(t,s,a){"use strict";a.r(s);var e=a(13),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"cesium3dtilesloader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cesium3dtilesloader"}},[t._v("#")]),t._v(" Cesium3DTilesLoader")]),t._v(" "),s("p",[t._v("用于加载并配置3DTiles的工具类。")]),t._v(" "),s("p",[t._v("在线示例："),s("a",{attrs:{href:"https://syzdev.cn/cesium-plugins/example/Cesium3DTilesLoader.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cesium3DTilesLoader"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("img",{attrs:{src:"/cesium-plugins-docs/screenshot/Cesium3DTilesLoader.png",alt:"Cesium3DTilesLoader"}})]),t._v(" "),s("h2",{attrs:{id:"constructor-cesium-viewer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#constructor-cesium-viewer"}},[t._v("#")]),t._v(" "),s("code",[t._v("constructor(Cesium, viewer)")])]),t._v(" "),s("p",[t._v("构造函数，用于初始化"),s("code",[t._v("Cesium3DTilesLoader")]),t._v("实例对象。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("名称")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("默认值")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("Cesium")])]),t._v(" "),s("td",[s("code",[t._v("Object")])]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("Cesium全局对象")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("viewer")])]),t._v(" "),s("td",[s("code",[t._v("Object")])]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("初始化Cesium场景的"),s("code",[t._v("viewer")])])])])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Cesium3DTilesLoader "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cesium-plugins'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" loader "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Cesium3DTilesLoader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Cesium"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" viewer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"load-url-posopts-loadopts-cesium3dtileset"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#load-url-posopts-loadopts-cesium3dtileset"}},[t._v("#")]),t._v(" "),s("code",[t._v("load(url, posOpts, loadOpts): Cesium3DTileset")])]),t._v(" "),s("p",[t._v("核心方法，用于加载并配置3DTiles。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("名称")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("默认值")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("url")])]),t._v(" "),s("td",[s("code",[t._v("String")])]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("3DTiles的"),s("code",[t._v("tileset.json")]),t._v("资源路径")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("posOpts")])]),t._v(" "),s("td",[s("code",[t._v("Object")])]),t._v(" "),s("td",[t._v("（见下文）")]),t._v(" "),s("td",[t._v("加载3DTiles的位置、旋转和缩放参数")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("loadOpts")])]),t._v(" "),s("td",[s("code",[t._v("Object")])]),t._v(" "),s("td",[t._v("（见下文）")]),t._v(" "),s("td",[t._v("加载3DTiles的配置项，与"),s("code",[t._v("Cesium3DTileset")]),t._v("类的"),s("code",[t._v("option")]),t._v("配置项保持一致")])])])]),t._v(" "),s("p",[t._v("该方法会返回一个"),s("code",[t._v("Cesium3DTileset")]),t._v("实例对象。")]),t._v(" "),s("p",[s("code",[t._v("posOpts")]),t._v("的参数列表及默认配置如下：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("lon")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("116.391311")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 模型经度（单位：十进制）")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("lat")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("39.90616")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 模型纬度（单位：十进制）")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("hgt")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 模型高度（单位：米）")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("rx")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// x轴（经度）方向旋转角度（单位：度）")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("ry")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// y轴（纬度）方向旋转角度（单位：度）")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("rz")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// z轴（高程）方向旋转角度（单位：度）")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("scale")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 缩放比例")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("p",[s("code",[t._v("loadOpts")]),t._v("与"),s("code",[t._v("Cesium3DTileset")]),t._v("类的"),s("code",[t._v("option")]),t._v("配置项保持一致，详见"),s("a",{attrs:{href:"https://cesium.com/learn/cesiumjs/ref-doc/Cesium3DTileset.html?classFilter=Cesium3DTileset#Cesium3DTileset",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cesium3DTileset - Cesium Documentation"),s("OutboundLink")],1),t._v("，如可以添加如下配置：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("maximumScreenSpaceError")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("256")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("maximumMemoryUsage")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5120")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("immediatelyLoadDesiredLevelOfDetail")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("完整示例：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" url "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://syzdev.cn/cesium-docs-demo/3dtiles/tlfs/tileset.json'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" posOpts "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("lon")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("114.296")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("lat")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30.546")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("hgt")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("scale")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" loadOpts "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("maximumScreenSpaceError")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("256")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("maximumMemoryUsage")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5120")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("immediatelyLoadDesiredLevelOfDetail")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" tileset "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" loader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("load")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" posOpts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" loadOpts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"locate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#locate"}},[t._v("#")]),t._v(" "),s("code",[t._v("locate()")])]),t._v(" "),s("p",[t._v("用于将视角定位到所加载的3DTiles上。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("loader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("locate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"destroy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#destroy"}},[t._v("#")]),t._v(" "),s("code",[t._v("destroy()")])]),t._v(" "),s("p",[t._v("用于销毁"),s("code",[t._v("Cesium3DTilesLoader")]),t._v("实例对象。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("loader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("destroy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);