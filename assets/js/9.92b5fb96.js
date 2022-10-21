(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{279:function(t,s,e){"use strict";e.r(s);var a=e(13),r=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"cesium3dtilesloader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cesium3dtilesloader"}},[t._v("#")]),t._v(" Cesium3DTilesLoader")]),t._v(" "),s("p",[t._v("Plugin for loading and configuring 3DTiles.")]),t._v(" "),s("p",[t._v("Live Demo: "),s("a",{attrs:{href:"https://syzdev.cn/cesium-plugins/example/Cesium3DTilesLoader.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cesium3DTilesLoader"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("img",{attrs:{src:"/cesium-plugins-docs/screenshot/Cesium3DTilesLoader.png",alt:"Cesium3DTilesLoader"}})]),t._v(" "),s("h2",{attrs:{id:"constructor-cesium-viewer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#constructor-cesium-viewer"}},[t._v("#")]),t._v(" "),s("code",[t._v("constructor(Cesium, viewer)")])]),t._v(" "),s("p",[t._v("Constructor, used to initialize the instance object of "),s("code",[t._v("Cesium3DTilesLoader")]),t._v(".")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Default")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("Cesium")])]),t._v(" "),s("td",[s("code",[t._v("Object")])]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("Cesium global object")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("viewer")])]),t._v(" "),s("td",[s("code",[t._v("Object")])]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("Initialize "),s("code",[t._v("viewer")]),t._v(" of Cesium scene")])])])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Cesium3DTilesLoader "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cesium-plugins'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" loader "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Cesium3DTilesLoader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Cesium"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" viewer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"load-url-posopts-loadopts-cesium3dtileset"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#load-url-posopts-loadopts-cesium3dtileset"}},[t._v("#")]),t._v(" "),s("code",[t._v("load(url, posOpts, loadOpts): Cesium3DTileset")])]),t._v(" "),s("p",[t._v("The core function is used to load and configure 3DTiles.")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Default")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("url")])]),t._v(" "),s("td",[s("code",[t._v("String")])]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("The resource path to "),s("code",[t._v("tileset.json")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("posOpts")])]),t._v(" "),s("td",[s("code",[t._v("Object")])]),t._v(" "),s("td",[t._v("(See below)")]),t._v(" "),s("td",[t._v("Load the position, rotation, and scale parameters for 3DTiles")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("loadOpts")])]),t._v(" "),s("td",[s("code",[t._v("Object")])]),t._v(" "),s("td",[t._v("(See below)")]),t._v(" "),s("td",[t._v("Load the configuration of 3DTiles, which is consistent with the "),s("code",[t._v("option")]),t._v(" configuration of the "),s("code",[t._v("Cesium3DTileset")]),t._v(" class")])])])]),t._v(" "),s("p",[t._v("This function will return an instance object of "),s("code",[t._v("Cesium3DTileset")]),t._v(".")]),t._v(" "),s("p",[t._v("The parameter list and default configuration of "),s("code",[t._v("posOpts")]),t._v(" are as follows:")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("lon")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("116.391311")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Longitude (in decimal)")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("lat")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("39.90616")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Latitude (in decimal)")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("hgt")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Height (in meters)")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("rx")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// X axis (longitude) direction rotation Angle (in degrees)")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("ry")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Y axis (latitude) direction rotation Angle (in degrees)")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("rz")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Z axis (height) direction rotation Angle (in degrees)")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("scale")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Scale of the 3DTiles")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("p",[s("code",[t._v("loadOpts")]),t._v(" is consistent with the "),s("code",[t._v("option")]),t._v(" configuration of the "),s("code",[t._v("Cesium3DTileset")]),t._v(" class，See: "),s("a",{attrs:{href:"https://cesium.com/learn/cesiumjs/ref-doc/Cesium3DTileset.html?classFilter=Cesium3DTileset#Cesium3DTileset",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cesium3DTileset - Cesium Documentation"),s("OutboundLink")],1),t._v("，For example, you can add the following configuration:")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("maximumScreenSpaceError")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("256")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("maximumMemoryUsage")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5120")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("immediatelyLoadDesiredLevelOfDetail")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Complete example:")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" url "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://syzdev.cn/cesium-docs-demo/3dtiles/tlfs/tileset.json'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" posOpts "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("lon")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("114.296")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("lat")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30.546")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("hgt")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("scale")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" loadOpts "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("maximumScreenSpaceError")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("256")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("maximumMemoryUsage")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5120")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("immediatelyLoadDesiredLevelOfDetail")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" tileset "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" loader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("load")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" posOpts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" loadOpts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"locate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#locate"}},[t._v("#")]),t._v(" "),s("code",[t._v("locate()")])]),t._v(" "),s("p",[t._v("Used to position the perspective on the loaded 3DTiles.")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("loader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("locate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"destroy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#destroy"}},[t._v("#")]),t._v(" "),s("code",[t._v("destroy()")])]),t._v(" "),s("p",[t._v("Used to destroy the "),s("code",[t._v("Cesium3DTilesLoader")]),t._v(" instance object.")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("loader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("destroy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);