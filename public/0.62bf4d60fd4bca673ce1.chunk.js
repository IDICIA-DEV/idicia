webpackJsonp([0],{"./app/containers/StaticPages/reducer.js":function(e,a,s){"use strict";function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,a=arguments[1];switch(console.log("starting reducer "),a.type){case n.a:return console.log("Fetching page "+a.page),e.set("isLoading",!0).set("loadSuccess",!1);case n.b:return console.log("Failed to get page data"),e.set("isLoading",!1).set("loadSuccess",!1);case n.c:return console.log("Updating home page data (page + sliders)"),e.set("home",a.data).set("isLoading",!1).set("loadSuccess",!0);case n.d:return console.log("Updating data for page: "+a.pageName),e.set(a.pageName,a.data).set("isLoading",!1).set("loadSuccess",!0);default:return e}}Object.defineProperty(a,"__esModule",{value:!0});var o=s("./node_modules/immutable/dist/immutable.js"),n=(s.n(o),s("./app/containers/StaticPages/constants.js")),l=s.i(o.fromJS)({isLoading:!0,loadSuccess:!1,home:null,solutions:null,verification:null,enrichment:null,comparison:null,telecom:null,healthcare:null,compliance:null});a.default=t}});