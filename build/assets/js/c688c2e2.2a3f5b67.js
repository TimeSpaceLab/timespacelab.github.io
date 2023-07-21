"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4221],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(a),m=r,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||i;return a?n.createElement(h,l(l({ref:t},u),{},{components:a})):n.createElement(h,l({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},67042:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),l=["components"],o={title:"Walk-through: Fetch and update an Airtable",sidebar_label:"Airtable: fetch and update"},s=void 0,d={unversionedId:"walk-throughs/airtable",id:"walk-throughs/airtable",title:"Walk-through: Fetch and update an Airtable",description:"This guide will walk you through how you can use Airtable\u2019s API to add or update",source:"@site/docs/walk-throughs/airtable.md",sourceDirName:"walk-throughs",slug:"/walk-throughs/airtable",permalink:"/walk-throughs/airtable",draft:!1,editUrl:"https://github.com/darklang/docs/edit/main/docs/walk-throughs/airtable.md",tags:[],version:"current",frontMatter:{title:"Walk-through: Fetch and update an Airtable",sidebar_label:"Airtable: fetch and update"},sidebar:"docs",previous:{title:"IFTTT: trigger an event",permalink:"/walk-throughs/ifttt-events"},next:{title:"Freshdesk: Fetch and update tickets",permalink:"/walk-throughs/freshdesk"}},u={},c=[{value:"What You Need",id:"what-you-need",level:2},{value:"Sending Information From Airtable to Darklang",id:"sending-information-from-airtable-to-darklang",level:2},{value:"Putting Information From Airtable into a Darklang Datastore",id:"putting-information-from-airtable-into-a-darklang-datastore",level:2},{value:"Sending Information From Darklang to Airtable",id:"sending-information-from-darklang-to-airtable",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],p={toc:c};function m(e){var t=e.components,o=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This guide will walk you through how you can use Airtable\u2019s API to add or update\ninformation in Airtable. An Airtable sample canvas is available\n",(0,i.kt)("a",{parentName:"p",href:"https://darklang.com/a/sample-airtable"},"here"),"."),(0,i.kt)("h2",{id:"what-you-need"},"What You Need"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"An Airtable account with a Base and table(s) already created. You will likely\nwant to plan what columns you will want to have in your Airtable ahead of\ntime."),(0,i.kt)("li",{parentName:"ul"},"Access to the ",(0,i.kt)("a",{parentName:"li",href:"https://airtable.com/api"},"Airtable API documentation"),"."),(0,i.kt)("li",{parentName:"ul"},"Access to your ",(0,i.kt)("a",{parentName:"li",href:"https://airtable.com/account"},"Airtable API key"),".")),(0,i.kt)("h2",{id:"sending-information-from-airtable-to-darklang"},"Sending Information From Airtable to Darklang"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create a background worker to send data to Airtable."),(0,i.kt)("li",{parentName:"ul"},'Add your API key, the Airtable API, and the Airtable table you\u2019re going to\nuse. An Airtable table looks something like this:\n"appYPi96qgCwabzfE/Airtable%20Sample"'),(0,i.kt)("li",{parentName:"ul"},"We\u2019ll access the data over Airtable\u2019s JSON API. In Darklang, we make HTTP\ncalls using ",(0,i.kt)("inlineCode",{parentName:"li"},"HttpClient::get"),".",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Headers in Darklang are passed in a dict, but we have convenience functions\nfor them, like ",(0,i.kt)("inlineCode",{parentName:"li"},"HttpClient::bearerToken")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"HttpClient::jsonContentType"),".\nYou can inspect the headers by clicking on ",(0,i.kt)("inlineCode",{parentName:"li"},"header")," to see it\u2019s live value."),(0,i.kt)("li",{parentName:"ul"},"To test out the API call, press the Play button."))),(0,i.kt)("li",{parentName:"ul"},"If you only want one field, like the Name field, you will want to add \u201cRecord\nType\u201d to your table. To get the exact string for this, reference the Retrieve\na Record section of your\n",(0,i.kt)("a",{parentName:"li",href:"https://airtable.com/api"},"Airtable API documentation"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"airtable/image5.png",src:a(37536).Z,width:"954",height:"258"})),(0,i.kt)("h2",{id:"putting-information-from-airtable-into-a-darklang-datastore"},"Putting Information From Airtable into a Darklang Datastore"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create a Darklang datastore and populate it with the fields you need.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"airtable/image1.png",src:a(14886).Z,width:"762",height:"252"})),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Next iterate through the results - held in ",(0,i.kt)("inlineCode",{parentName:"li"},"allData.body.records"),", and add\nthem to the DB using ",(0,i.kt)("inlineCode",{parentName:"li"},"DB::set"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"airtable/image4.png",src:a(84882).Z,width:"958",height:"628"})),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Click the play button - your datastore will update.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"airtable/image2.png",src:a(5602).Z,width:"1958",height:"374"})),(0,i.kt)("h2",{id:"sending-information-from-darklang-to-airtable"},"Sending Information From Darklang to Airtable"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create a background worker to send data to Airtable."),(0,i.kt)("li",{parentName:"ul"},"Add your API key, the Airtable API, and the Airtable table you\u2019re going to\nuse. An Airtable table looks something like this:\nappYPi96qgCwabzfE/Airtable%20Sample"),(0,i.kt)("li",{parentName:"ul"},"We\u2019ll access the data over Airtable\u2019s JSON API. In Darklang, we make HTTP\ncalls using ",(0,i.kt)("inlineCode",{parentName:"li"},"HttpClient::get"),".",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Headers in Darklang are passed in a dict, but we have convenience functions\nfor them, like ",(0,i.kt)("inlineCode",{parentName:"li"},"HttpClient::bearerToken")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"HttpClient::jsonContentType"),".\nYou can inspect the headers by clicking on \u2018header\u2019 to see it\u2019s live value."),(0,i.kt)("li",{parentName:"ul"},"To test out the API call, press the Play button."))),(0,i.kt)("li",{parentName:"ul"},"Create your ",(0,i.kt)("inlineCode",{parentName:"li"},"HttpClient::post")," call. Note that to add a new entry, you will\nneed to format your data using ",(0,i.kt)("inlineCode",{parentName:"li"},"records")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"fields"),". You can click the Play\nbutton next to post to manually populate your Airtable to check if its\nworking. Here, I\u2019ve added one entry, but you can replace the strings with\nvariables to add data however you would like.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"airtable/image6.png",src:a(72884).Z,width:"1058",height:"660"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"airtable/image7.png",src:a(58995).Z,width:"1218",height:"420"})),(0,i.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Field/column names in Airtable are case sensitive, so make sure your cases\nmatch everywhere."),(0,i.kt)("li",{parentName:"ul"},"Airtable will send over completely empty entries, so if it looks like you\u2019re\ngetting too much data, verify that you don\u2019t have an extra row in your table,\nlike this one:")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"airtable/image3.png",src:a(63908).Z,width:"862",height:"486"})))}m.isMDXComponent=!0},14886:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image1-a475adfa17c9333df8f1dcf7c8bc5d2a.png"},5602:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image2-3cba18bd76e7e67e22079e110a4b6fab.png"},63908:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image3-4faf1975c0ed82ecc80483ef0b3f801b.png"},84882:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image4-16028584df8c42dfad72dddc10bf86d6.png"},37536:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image5-3ffb62eb1778cdd425ad31c21fc1c0f3.png"},72884:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image6-adb18e54caf241e7891f990ba3f74c2d.png"},58995:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image7-9a1830cef1519afdd777df2157d7069d.png"}}]);