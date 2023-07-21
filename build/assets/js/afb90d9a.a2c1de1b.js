"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2691],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>m});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var p=a.createContext({}),s=function(t){var e=a.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},u=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,p=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),d=s(r),m=n,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return r?a.createElement(f,i(i({ref:e},u),{},{components:r})):a.createElement(f,i({ref:e},u))}));function m(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},48937:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),i=["components"],l={title:"Tutorial: Your first Darklang application",sidebar_label:"Your first Darklang application",id:"first-dark-application"},p=void 0,s={unversionedId:"tutorials/first-dark-application",id:"tutorials/first-dark-application",title:"Tutorial: Your first Darklang application",description:"We're going to take you through a tutorial to build an entire application that",source:"@site/docs/tutorials/01-first-dark-application.md",sourceDirName:"tutorials",slug:"/tutorials/first-dark-application",permalink:"/tutorials/first-dark-application",draft:!1,editUrl:"https://github.com/darklang/docs/edit/main/docs/tutorials/01-first-dark-application.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Tutorial: Your first Darklang application",sidebar_label:"Your first Darklang application",id:"first-dark-application"},sidebar:"docs",previous:{title:"Tutorial",permalink:"/category/tutorial"},next:{title:"Create a HTTP handler",permalink:"/tutorials/create-http-handler"}},u={},c=[{value:"Open the Editor",id:"open-the-editor",level:2}],d={toc:c};function m(t){var e=t.components,r=(0,n.Z)(t,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We're going to take you through a tutorial to build an entire application that\nuses Darklang's basic functionality. This should take between 10m and 45m,\ndepending on how thorough you are. If you're having problems, come talk to us in\nthe ",(0,o.kt)("a",{parentName:"p",href:"https://darklang.com/discord-invite"},"Darklang Community Discord"),"."),(0,o.kt)("p",null,"The application will accept requests and aggregate those requests into a report\ndaily. It will optionally store the daily report in Airtable. You will create:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"a HTTP handler to make requests to"),(0,o.kt)("li",{parentName:"ul"},"a REPL to make requests to the handler"),(0,o.kt)("li",{parentName:"ul"},"a Datastore storing those requests"),(0,o.kt)("li",{parentName:"ul"},"a Cron aggregating those requests daily into a report"),(0,o.kt)("li",{parentName:"ul"},"another Datastore storing the reports"),(0,o.kt)("li",{parentName:"ul"},"(optional) a ",(0,o.kt)("inlineCode",{parentName:"li"},"HttpClient")," call to Airtable")),(0,o.kt)("p",null,"You can see a completed version of this tutorial at\n",(0,o.kt)("em",{parentName:"p"},"darklang.com/a/USERNAME-gettingstarted"),". If you'd like to start from scratch,\nnavigate to a fresh canvas (",(0,o.kt)("em",{parentName:"p"},"darklang.com/a/USERNAME-gettingstarted2"),", for\nexample.)"),(0,o.kt)("p",null,"A completed version of this tutorial, is also available at\n",(0,o.kt)("a",{parentName:"p",href:"https://darklang.com/a/sample-gettingstarted"},"https://darklang.com/a/sample-gettingstarted"),".\nNote that you should ",(0,o.kt)("strong",{parentName:"p"},"not")," copy/paste this ","\u2013"," we want to teach you to use\nthe Darklang editor."),(0,o.kt)("h2",{id:"open-the-editor"},"Open the Editor"),(0,o.kt)("p",null,"To start, open the Darklang editor by going to ",(0,o.kt)("em",{parentName:"p"},"darklang.com/a/USERNAME"),". If you\nhaven't signed up yet, you'll need to\n",(0,o.kt)("a",{parentName:"p",href:"https://darklang.com/signup"},"sign up for an account")," (it's free to signup)."))}m.isMDXComponent=!0}}]);