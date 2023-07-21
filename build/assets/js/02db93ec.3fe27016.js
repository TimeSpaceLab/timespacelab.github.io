"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8778],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(a),g=r,m=u["".concat(s,".").concat(g)]||u[g]||c[g]||l;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},27442:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),o=["components"],i={title:"Using an External DB",sidebar_label:"Using an External DB"},s=void 0,d={unversionedId:"walk-throughs/external-db",id:"walk-throughs/external-db",title:"Using an External DB",description:"Your project may require a more complex data structure than our datastores. If a",source:"@site/docs/walk-throughs/external-db.md",sourceDirName:"walk-throughs",slug:"/walk-throughs/external-db",permalink:"/walk-throughs/external-db",draft:!1,editUrl:"https://github.com/darklang/docs/edit/main/docs/walk-throughs/external-db.md",tags:[],version:"current",frontMatter:{title:"Using an External DB",sidebar_label:"Using an External DB"},sidebar:"docs",previous:{title:"Slack: send and receive messages",permalink:"/walk-throughs/slack-app"},next:{title:"Slack: check for new channels",permalink:"/walk-throughs/slack-channel-check"}},p={},c=[{value:"Set Up",id:"set-up",level:2},{value:"POST a New Record",id:"post-a-new-record",level:2},{value:"GET All Data",id:"get-all-data",level:2}],u={toc:c};function g(e){var t=e.components,i=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Your project may require a more complex data structure than our datastores. If a\nkey-value store works, we strongly recommend using the built-in datastore to\ntake advantage of language functions."),(0,l.kt)("p",null,"If you already have (or otherwise require) an external database, any external\ndatabase that provides a REST API can be used. For the purposes of this\ntutorial, we will be using ",(0,l.kt)("a",{parentName:"p",href:"https://restdb.io"},"restdb.io"),"."),(0,l.kt)("h2",{id:"set-up"},"Set Up"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Create a new database.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"external-db/create-db.png",src:a(63623).Z,width:"1202",height:"706"})),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Select ",(0,l.kt)("strong",{parentName:"li"},"Developer Mode")," in the upper right, and then choose\n",(0,l.kt)("strong",{parentName:"li"},"Collections +"))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"external-db/add-collection.png",src:a(72611).Z,width:"494",height:"184"})),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Enter the information for your new collection and click ",(0,l.kt)("strong",{parentName:"li"},"Save"),".")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"external-db/collection.png",src:a(10602).Z,width:"1870",height:"608"})),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"Add Name and Description text fields to your database by clicking ",(0,l.kt)("strong",{parentName:"li"},"Add\nFields +"),".")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"external-db/add-field.png",src:a(5898).Z,width:"1306",height:"762"})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"external-db/fields.png",src:a(89077).Z,width:"858",height:"272"})),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Grab your API Key by clicking on API Docs and finding the value labeled\n",(0,l.kt)("inlineCode",{parentName:"p"},"x-apikey:"),". Save it as a function in your Darklang canvas.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Optionally, also grab the URL at the top of your page (in my case, its\n",(0,l.kt)("inlineCode",{parentName:"p"},"https://mydatastore-e7f9.restdb.io/rest/mydata"),") and save it as another\nfunction in your Darklang canvas."))),(0,l.kt)("h2",{id:"post-a-new-record"},"POST a New Record"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Create your header by doing a ",(0,l.kt)("inlineCode",{parentName:"p"},"Dict::merge")," on ",(0,l.kt)("inlineCode",{parentName:"p"},"HttpClient::jsonContentType"),"\nand a dict containing your API Key")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Write an ",(0,l.kt)("inlineCode",{parentName:"p"},"HttpClient::post")," using your URL, your fields (note: the field\nnames are case sensitive) and your header, and then run it."))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"external-db/post.png",src:a(95125).Z,width:"866",height:"470"})),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Your data will appear in the restdb.io console.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"external-db/data.png",src:a(63068).Z,width:"1242",height:"514"})),(0,l.kt)("h2",{id:"get-all-data"},"GET All Data"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Create your header by doing a ",(0,l.kt)("inlineCode",{parentName:"p"},"Dict::merge")," on ",(0,l.kt)("inlineCode",{parentName:"p"},"HttpClient::jsonContentType"),"\nand a dict containing your API Key.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Write an ",(0,l.kt)("inlineCode",{parentName:"p"},"HttpClient::get")," using your URL and header, and then run it."))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"external-db/get-all.png",src:a(41566).Z,width:"852",height:"248"})),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Your handler will return all of the data in your database.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"external-db/get-all-data.png",src:a(7110).Z,width:"850",height:"512"})))}g.isMDXComponent=!0},72611:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/add-collection-3f0268f75a42ba237d197c9360f47a95.png"},5898:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/add-fields-bd9d26259448edc2a92e1ddced81d397.png"},10602:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/collection-59dc3def7f43cbf0eb818f4fb819e4ec.png"},63623:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-db-d316810fc0eebe61d755eb2a8ace517a.png"},63068:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/data-7a8597fd4f2f0761fd78a618b398469b.png"},89077:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/fields-65a30b94200466c94e611b87b51075b1.png"},7110:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/get-all-data-8574723c04faa137fe83052b3f5180d6.png"},41566:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/get-all-ce16aaff39428d1f299766e53f8861d5.png"},95125:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/post-2c16967791e6257b8a8ed520356d12c9.png"}}]);