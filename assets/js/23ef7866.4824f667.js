(self.webpackChunk=self.webpackChunk||[]).push([[9229],{5318:function(t,e,n){"use strict";n.d(e,{Zo:function(){return h},kt:function(){return u}});var r=n(7378);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=r.createContext({}),c=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},h=function(t){var e=c(t.components);return r.createElement(i.Provider,{value:e},t.children)},y={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,i=t.parentName,h=l(t,["components","mdxType","originalType","parentName"]),s=c(n),u=a,g=s["".concat(i,".").concat(u)]||s[u]||y[u]||o;return n?r.createElement(g,p(p({ref:e},h),{},{components:n})):r.createElement(g,p({ref:e},h))}));function u(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,p=new Array(o);p[0]=s;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=t,l.mdxType="string"==typeof t?t:a,p[1]=l;for(var c=2;c<o;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2215:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return p},metadata:function(){return l},toc:function(){return i},default:function(){return h}});var r=n(9603),a=n(120),o=(n(7378),n(5318)),p={slug:"/polyglot/python/",title:"Python Wechaty",sidebar_label:"Python"},l={unversionedId:"polyglot/python/overview",id:"polyglot/python/overview",isDocsHomePage:!1,title:"Python Wechaty",description:"Python Wechaty",source:"@site/docs/polyglot/python/overview.md",sourceDirName:"polyglot/python",slug:"/polyglot/python/",permalink:"/docs/polyglot/python/",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/python/overview.md",version:"current",lastUpdatedBy:"Soumi Bardhan",lastUpdatedAt:1620156331,formattedLastUpdatedAt:"5/4/2021",sidebar_label:"Python",frontMatter:{slug:"/polyglot/python/",title:"Python Wechaty",sidebar_label:"Python"},sidebar:"docs",previous:{title:"TypeScript Wechaty",permalink:"/docs/polyglot/typescript/"},next:{title:"Go Wechaty",permalink:"/docs/polyglot/go/"}},i=[{value:"Getting Started",id:"getting-started",children:[]},{value:"History",id:"history",children:[]},{value:"Blogs",id:"blogs",children:[]},{value:"Maintainers",id:"maintainers",children:[]}],c={toc:i};function h(t){var e=t.components,n=(0,a.Z)(t,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/python-wechaty"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Wechaty-Python-blue",alt:"Python Wechaty"}))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GitHub Repo ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/wechaty/python-wechaty"},"https://github.com/wechaty/python-wechaty")),(0,o.kt)("li",{parentName:"ul"},"Getting Started Template Repo ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/wechaty/python-wechaty-getting-started"},"https://github.com/wechaty/python-wechaty-getting-started"))),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"Template Repo: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/python-wechaty-getting-started"},"https://github.com/wechaty/python-wechaty-getting-started")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git clone git@github.com:wechaty/python-wechaty-getting-started.git\ncd python-wechaty-getting-started\nmake install\nmake bot\n")),(0,o.kt)("h2",{id:"history"},"History"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2020/06/17/python-wechaty-beta-released/"},"Python Wechaty Beta Released: A Simple Bot, wj-Mcat, Jun 17, 2020"))),(0,o.kt)("h2",{id:"blogs"},"Blogs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2021/04/17/python-wechaty-use-web/"},"\u6559\u4f60\u7528python-wecahty\u548cweb\u534f\u8bae\u5f00\u53d1\u673a\u5668\u4eba, @wj-Mcat, Apr 17, 2021")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2021/03/08/python-wechaty-and-wechaty-puppet-padlocal/"},"Python-wechaty & wechaty-puppet-padlocal\u7684\u521d\u63a2, iivveess, Mar 8, 2021")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2021/02/03/python-wechaty-for-padlocal-puppet-service/"},"Python Wechaty\u5982\u4f55\u4f7f\u7528PadLocal Puppet Service, Biofer, Feb, 3, 2021"))),(0,o.kt)("p",null,"Read more blogs with the ",(0,o.kt)("inlineCode",{parentName:"p"},"Python")," tag at ",(0,o.kt)("a",{parentName:"p",href:"https://wechaty.js.org/tags.html#python"},"https://wechaty.js.org/tags.html#python")),(0,o.kt)("h2",{id:"maintainers"},"Maintainers"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wechaty.js.org/contributors/wj-mcat"},"@wj-Mcat"))))}h.isMDXComponent=!0}}]);