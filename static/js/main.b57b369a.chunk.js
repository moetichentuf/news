(this["webpackJsonpreact-router-demo-final"]=this["webpackJsonpreact-router-demo-final"]||[]).push([[0],{19:function(e,t,n){e.exports=n(30)},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(15),c=n.n(r),o=n(4),m=n(8),u=n(18),i=n(6),s=function(e){var t=e.match;return l.a.createElement("div",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(o.b,{to:"".concat(t.url,"/shoes")},"Shoes")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"".concat(t.url,"/boots")},"Boots")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"".concat(t.url,"/footwear")},"Footwear"))),l.a.createElement(i.b,{path:"".concat(t.path,"/:name"),render:function(e){var t=e.match;return l.a.createElement("div",null,l.a.createElement("h3",null," ",t.params.name," "))}}))};var E=function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){fetch("https://api.nytimes.com/svc/topstories/v2/science.json?api-key=Eh1mLri6hw2hf4qYmOWIebjtpxSXZBLL").then((function(e){return e.json()})).then((function(e){return r(e.results)}))}),[]),console.log(n),l.a.createElement("div",null,l.a.createElement("h1",null,"\ud83d\udd2cScience",l.a.createElement("span",null,".")),n.length>0?n.map((function(e){return l.a.createElement("li",null,l.a.createElement("a",{href:e.url}," ",l.a.createElement("h2",null,e.title),l.a.createElement("p",null,e.abstract),l.a.createElement("img",{src:e.multimedia[0].url,alt:e.multimedia[0].url})))})):l.a.createElement("h1",null,"Loading posts..."))};function h(e){var t=(e.location.state||{from:{pathname:"/"}}).from;console.log(t);var n=Object(a.useState)(!1),r=Object(m.a)(n,2),c=r[0],o=r[1];return c?l.a.createElement(i.a,{to:t}):l.a.createElement("div",null,l.a.createElement("p",null,"You must log in to view the page at ",t.pathname),l.a.createElement("button",{onClick:function(){p.authenticate((function(){o(!0)}))}},"Log in"))}var p={isAuthenticated:!1,authenticate(e){this.isAuthenticated=!0,setTimeout(e,100)}};n(29);function f(){return l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar"},l.a.createElement("ul",{className:"nav navbar-nav"},l.a.createElement("input",{type:"Add Tag",name:"name"}),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/"},"\ud83d\udd25 Trending")),l.a.createElement("li",null),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/products"},"\ud83d\udd2c Science")),l.a.createElement("li",null,"+"))),l.a.createElement(i.d,null,l.a.createElement(i.b,{path:"/login",component:h}),l.a.createElement(i.b,{exact:!0,path:"/",component:b}),l.a.createElement(i.b,{path:"/category",component:s}),l.a.createElement(d,{path:"/admin",component:v}),l.a.createElement(i.b,{path:"/products",component:E})))}var d=function(e){var t=e.component,n=Object(u.a)(e,["component"]);return l.a.createElement(i.b,Object.assign({},n,{render:function(e){return!0===p.isAuthenticated?l.a.createElement(t,e):l.a.createElement(i.a,{to:{pathname:"/login",state:{from:e.location}}})}}))};function b(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){fetch("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=Eh1mLri6hw2hf4qYmOWIebjtpxSXZBLL").then((function(e){return e.json()})).then((function(e){return r(e.results)}))}),[]),console.log(n),l.a.createElement("div",null,l.a.createElement("h1",null,"\ud83d\udd25Trending",l.a.createElement("span",null,".")),n.length>0?n.map((function(e){return l.a.createElement("li",null,l.a.createElement("a",{href:e.url}," ",l.a.createElement("h2",null,e.title),l.a.createElement("p",null,e.abstract),l.a.createElement("img",{src:e.multimedia[0].url,alt:e.multimedia[0].url})))})):l.a.createElement("h1",null,"Loading posts..."))}var v=function(e){e.match;return l.a.createElement("div",null," ",l.a.createElement("h2",null,"Welcome admin "))},g=document.getElementById("root");c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(o.a,null,l.a.createElement(f,null))),g)}},[[19,1,2]]]);
//# sourceMappingURL=main.b57b369a.chunk.js.map