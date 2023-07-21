"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2080],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>g});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=r.createContext({}),u=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},c=function(t){var e=u(t.components);return r.createElement(l.Provider,{value:e},t.children)},h={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),p=u(n),g=o,d=p["".concat(l,".").concat(g)]||p[g]||h[g]||i;return n?r.createElement(d,a(a({ref:e},c),{},{components:n})):r.createElement(d,a({ref:e},c))}));function g(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},18856:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>h});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],s={title:"Your next contribution"},l=void 0,u={unversionedId:"contributing/next-contribution",id:"contributing/next-contribution",title:"Your next contribution",description:"We have everyone start with a first PR, which makes a",source:"@site/docs/contributing/next-contribution.md",sourceDirName:"contributing",slug:"/contributing/next-contribution",permalink:"/contributing/next-contribution",draft:!1,editUrl:"https://github.com/darklang/docs/edit/main/docs/contributing/next-contribution.md",tags:[],version:"current",frontMatter:{title:"Your next contribution"},sidebar:"Contributing",previous:{title:"Making your first Pull Request",permalink:"/contributing/making-your-first-pull-request"},next:{title:"If you don't know our stack (F#)",permalink:"/contributing/if-you-dont-know-our-stack"}},c={},h=[{value:"Getting started",id:"getting-started",level:2},{value:"Issues",id:"issues",level:2},{value:"Initiatives",id:"initiatives",level:2},{value:"Scratching your itches",id:"scratching-your-itches",level:2},{value:"Larger Projects",id:"larger-projects",level:2}],p={toc:h};function g(t){var e=t.components,n=(0,o.Z)(t,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We have everyone start with ",(0,i.kt)("a",{parentName:"p",href:"/contributing/getting-started"},"a first PR"),", which makes a\nsmall but valuable contribution. Now that you've got it done, you can build\nsomething (a little bit) bigger."),(0,i.kt)("h2",{id:"getting-started"},"Getting started"),(0,i.kt)("p",null,"Below you'll find resources to help you figure out what to work on. After that,\nhead over to ",(0,i.kt)("a",{parentName:"p",href:"/contributing/fsharp-for-dark-developers"},"Working in the Dark repo")," to learn\nhow to contribute bigger things, like the basics of F#, the layout of the repo,\ntechnical guides to different parts of the codebase and product, and product and\nvision docs about where Darklang is going."),(0,i.kt)("h2",{id:"issues"},"Issues"),(0,i.kt)("p",null,"We have started adding issues that have been reported by users to the the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/issues"},"Issues on GitHub"),". We'll be going back\nthrough the backlog to add more of these soon."),(0,i.kt)("p",null,"We've marked a few good starting points:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/darklang/dark/labels/good-first-bug"},"good first bugs")," for\nyour first few contributions"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/darklang/dark/labels/good-early-bug"},"good early bugs")," for\nafter that")),(0,i.kt)("p",null,"We'll follow up with guides to solving various classes of bugs, as well as the\nbacklog of issues we've been tracking internally."),(0,i.kt)("h2",{id:"initiatives"},"Initiatives"),(0,i.kt)("p",null,'We have a number of "initiatives" which involve many small,\nrelated-but-disconnected tasks. They\'re\n',(0,i.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/labels/initiative"},"tagged in the issues"),". If\nyou'd like to help with an initiative, mention that you're working on it in the\ncomments, or just get started."),(0,i.kt)("p",null,"A common example is to\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/issues/2411"},"add a standard library function"),"."),(0,i.kt)("h2",{id:"scratching-your-itches"},"Scratching your itches"),(0,i.kt)("p",null,"If you've got something that you'd like to solve, either\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/darklang/dark/issues"},"make an issue")," or discuss it in\n",(0,i.kt)("a",{parentName:"p",href:"https://darklang.com/discord-invite"},"Discord"),". Our main purpose of opening the\nrepo was to allow users to solve their problems and not be blocked by us, so we\nhighly prioritize solving things you need solved."),(0,i.kt)("h2",{id:"larger-projects"},"Larger Projects"),(0,i.kt)("p",null,"Darklang is a project with a vision for where it is going. Unfortunately, that\nvision is not as documented as it could be. We're working on that over at the\n",(0,i.kt)("a",{parentName:"p",href:"https://roadmap.darklang.com"},"Darklang Roadmap"),"!"),(0,i.kt)("p",null,"In the meantime, the best thing to align well with that vision is to be very\ncommunicative. While many projects will take drive-by contributions, we are only\ngoing to take contributions which move in the same direction we are going.\nOften, those directions are quite subtle, so start by talking to us in\n",(0,i.kt)("a",{parentName:"p",href:"https://darklang.com/discord-invite"},"Discord"),", letting us know what you're\nthinking."),(0,i.kt)("p",null,"The best thing to work on is something that is personally (or professionally!)\nblocking you. Our main goal with opening Darklang is to enable users to unblock\nthemselves or to improve their experience. Many users have shown us long laundry\nlists of things that bother them - you might have one too. Or bring us the list,\nand we'll talk about where to start."),(0,i.kt)("p",null,"The important thing is to start small. Darklang is nearly 100,000 LOC. And we\nhave the constraints of supporting users' production apps in a continuous\ndelivery manner. You should aim for your first few contributions to be small and\nnon-controversial, before trying to design a big feature or product change."))}g.isMDXComponent=!0}}]);