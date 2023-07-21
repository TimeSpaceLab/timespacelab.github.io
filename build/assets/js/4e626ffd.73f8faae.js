"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3411],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,b=m["".concat(u,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(b,l(l({ref:t},s),{},{components:n})):r.createElement(b,l({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},45370:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),l=["components"],a={id:"troubleshooting",title:"Troubleshooting"},u=void 0,c={unversionedId:"contributing/troubleshooting",id:"contributing/troubleshooting",title:"Troubleshooting",description:"If you're having problems contributing, we want to help:",source:"@site/docs/contributing/troubleshooting.md",sourceDirName:"contributing",slug:"/contributing/troubleshooting",permalink:"/contributing/troubleshooting",draft:!1,editUrl:"https://github.com/darklang/docs/edit/main/docs/contributing/troubleshooting.md",tags:[],version:"current",frontMatter:{id:"troubleshooting",title:"Troubleshooting"},sidebar:"Contributing",previous:{title:"Debugging",permalink:"/contributing/debugging"},next:{title:"Making a Pull Request",permalink:"/contributing/making-a-pull-request"}},s={},p=[],m={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you're having problems contributing, we want to help:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ask for help in ",(0,o.kt)("a",{parentName:"li",href:"https://darklang.com/discord-invite"},"Discord"),". Or DM Paul\nBiggar directly if you prefer."),(0,o.kt)("li",{parentName:"ul"},"make an ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/darklang/dark/issues"},"issue")," describing the\nproblem, and someone will come help.")),(0,o.kt)("p",null,"Common fixes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Sometimes there are compilation problems where the build caches from various\npackage managers we use (NuGet) develop problems. They can be fixed by\nclearing the build directories (which are in Docker volumes) by running the\nrelated scripts:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"for dotnet errors, use ",(0,o.kt)("inlineCode",{parentName:"li"},"./scripts/build/clear-dotnet-build")," (run in the\ncontainer when it is running)"),(0,o.kt)("li",{parentName:"ul"},"to clear the database, use ",(0,o.kt)("inlineCode",{parentName:"li"},"./scripts/build/clear-all-local-dbs")," (run from\nthe host when the container is stopped)"),(0,o.kt)("li",{parentName:"ul"},"for other errors, use ",(0,o.kt)("inlineCode",{parentName:"li"},"./scripts/build/clear-builder-volumes")," (run from the\nhost when the container is stopped)"))),(0,o.kt)("li",{parentName:"ul"},"If you're having issues with building the dockerfile (or opening the remote\ndockerfile in VSCode):",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Update FORCE_BUILD in the Dockerfile to the next highest number, which will\nforce a fresh build"),(0,o.kt)("li",{parentName:"ul"},"Ensure you are not running as root (including calling ",(0,o.kt)("inlineCode",{parentName:"li"},"script/builder")," using\n",(0,o.kt)("inlineCode",{parentName:"li"},"sudo"),")")))))}d.isMDXComponent=!0}}]);