(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{283:function(t,s,a){"use strict";a.r(s);var e=a(13),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"floodanalysis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#floodanalysis"}},[t._v("#")]),t._v(" FloodAnalysis")]),t._v(" "),s("p",[t._v("Plugin for simulating flood analysis.")]),t._v(" "),s("p",[t._v("Live Demo: "),s("a",{attrs:{href:"https://syzdev.cn/cesium-plugins/example/FloodAnalysis.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("FloodAnalysis"),s("OutboundLink")],1)]),t._v(" "),s("blockquote",[s("p",[t._v("Note: when using this plugin, please ensure that terrain is loaded in the scene and terrain depth detection is enabled.")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("viewer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("terrainProvider "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Cesium"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createWorldTerrain")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nviewer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scene"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("globe"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("depthTestAgainstTerrain "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n")])])])]),t._v(" "),s("p",[s("img",{attrs:{src:"/cesium-plugins-docs/screenshot/FloodAnalysis.png",alt:"FloodAnalysis"}})]),t._v(" "),s("h2",{attrs:{id:"constructor-cesium-viewer-pos-floodopts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#constructor-cesium-viewer-pos-floodopts"}},[t._v("#")]),t._v(" "),s("code",[t._v("constructor(Cesium, viewer, pos, floodOpts)")])]),t._v(" "),s("p",[t._v("Constructor, used to initialize the instance object of "),s("code",[t._v("FloodAnalysis")]),t._v(".")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Default")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("Cesium")])]),t._v(" "),s("td",[s("code",[t._v("Object")])]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("Cesium global object")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("viewer")])]),t._v(" "),s("td",[s("code",[t._v("Object")])]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("Initialize "),s("code",[t._v("viewer")]),t._v(" of Cesium scene")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("pos")])]),t._v(" "),s("td",[s("code",[t._v("Array")])]),t._v(" "),s("td",[t._v("(See below)")]),t._v(" "),s("td",[t._v("Longitude and latitude region range used for simulation flood analysis")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("floodOpts")])]),t._v(" "),s("td",[s("code",[t._v("Object")])]),t._v(" "),s("td",[t._v("(See below)")]),t._v(" "),s("td",[t._v("Configuration related to floodopts, such as initial water level height, target water level height, water level rising speed, water color, etc.")])])])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" FloodAnalysis "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cesium-plugins'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" flood "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FloodAnalysis")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Cesium"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" viewer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pos"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" floodOpts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("The configuration example of "),s("code",[t._v("pos")]),t._v(" are as follows:")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" pos "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("85.122")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("28.848")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("85.074")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("28.309")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("86.037")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("28.257")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("86.044")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("28.835")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[t._v("The parameter list and default configuration of "),s("code",[t._v("floodOpts")]),t._v(" are as follows:")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("waterHeight")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// in meters")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("targetWaterHeight")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// in meters")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("speed")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// in meters")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("waterColor")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Cesium"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fromBytes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("157")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("250")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("120")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("code",[t._v("waterColor")]),t._v(" must be the color defined in Cesium, See: "),s("a",{attrs:{href:"https://cesium.com/learn/cesiumjs/ref-doc/Color.html?classFilter=color",target:"_blank",rel:"noopener noreferrer"}},[t._v("Color - Cesium Documentation"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"start-callback"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#start-callback"}},[t._v("#")]),t._v(" "),s("code",[t._v("start(callback)")])]),t._v(" "),s("p",[t._v("Used to start simulation flood analysis.")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Default")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("callback")])]),t._v(" "),s("td",[s("code",[t._v("Function")])]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("Callback function to get the current water level")])])])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("flood"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("waterHeight")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// console.log(waterHeight)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"pause"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pause"}},[t._v("#")]),t._v(" "),s("code",[t._v("pause()")])]),t._v(" "),s("p",[t._v("Used to pause simulation flood analysis.")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("flood"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("pause")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"destroy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#destroy"}},[t._v("#")]),t._v(" "),s("code",[t._v("destroy()")])]),t._v(" "),s("p",[t._v("Used to destroy simulated flood analysis in the scene.")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("flood"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("destroy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"getcurrentwaterheight"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getcurrentwaterheight"}},[t._v("#")]),t._v(" "),s("code",[t._v("getCurrentWaterHeight()")])]),t._v(" "),s("p",[t._v("Used to get  the current water level height.")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("flood"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getCurrentWaterHeight")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"setcurrentwaterheight-height"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setcurrentwaterheight-height"}},[t._v("#")]),t._v(" "),s("code",[t._v("setCurrentWaterHeight(height)")])]),t._v(" "),s("p",[t._v("Used to set the current water level height.")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Default")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("height")])]),t._v(" "),s("td",[s("code",[t._v("Number")])]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("Set the current water level height (in meters)")])])])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("flood"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setCurrentWaterHeight")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);