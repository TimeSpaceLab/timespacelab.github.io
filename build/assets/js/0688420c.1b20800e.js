"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6951],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),h=a,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},57816:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"error-handling",title:"Error Handling",sidebar_label:"Error Handling"},s=void 0,p={unversionedId:"discussion/error-handling",id:"discussion/error-handling",title:"Error Handling",description:"The Darklang code you write in your handlers is available as soon as you type",source:"@site/docs/discussion/error-handling.md",sourceDirName:"discussion",slug:"/discussion/error-handling",permalink:"/discussion/error-handling",draft:!1,editUrl:"https://github.com/darklang/docs/edit/main/docs/discussion/error-handling.md",tags:[],version:"current",frontMatter:{id:"error-handling",title:"Error Handling",sidebar_label:"Error Handling"},sidebar:"docs",previous:{title:"Structured Editing",permalink:"/discussion/structured-editing"},next:{title:"Changelog",permalink:"/changelog"}},u={},d=[{value:"Incomplete Code",id:"incomplete-code",level:2},{value:"The finer details",id:"the-finer-details",level:3},{value:"Type errors",id:"type-errors",level:2},{value:"Error Rail",id:"error-rail",level:2},{value:"Background: Result and Option types",id:"background-result-and-option-types",level:3},{value:"Background: matches",id:"background-matches",level:3},{value:"Prototyping using the Error Rail",id:"prototyping-using-the-error-rail",level:3},{value:"Handling errors exhaustively",id:"handling-errors-exhaustively",level:3},{value:"Error rails with Incomplete and Type Errors",id:"error-rails-with-incomplete-and-type-errors",level:2}],c={toc:d};function h(e){var t=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Darklang code you write in your handlers is available as soon as you type\n(deployless). We have a number of built-in features to support this style of\nwriting, as well as dealing with errors."),(0,i.kt)("h2",{id:"incomplete-code"},"Incomplete Code"),(0,i.kt)("p",null,'Darklang executes code as you write it, and sometimes the code you execute won\'t\nbe fully written yet. We call code like this "incomplete". Anytime incomplete\ncode is executed, it results in a value of ',(0,i.kt)("inlineCode",{parentName:"p"},"<Incomplete>"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example:")," Here, the block has not been completed because the final expression\nis not filled in. Therefore the handler returns ",(0,i.kt)("inlineCode",{parentName:"p"},"<Incomplete>"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"error/image11.png",src:n(14187).Z,width:"1226",height:"350"})),(0,i.kt)("p",null,"Incomplete values are allowed to co-exist with other values--whenever they\ninteract, the result is another ",(0,i.kt)("inlineCode",{parentName:"p"},"<Incomplete>"),". If they do not interact, often\nthe valid value will continue, perhaps being returned to your user in a HTTP\nhandler, or saved in a datastore."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example:")," Here we left the query parameter blank in a call to\n",(0,i.kt)("inlineCode",{parentName:"p"},"HttpClient::get"),". The result of the function is therefore ",(0,i.kt)("inlineCode",{parentName:"p"},"<Incomplete>"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"error/image13.png",src:n(23887).Z,width:"2034",height:"398"})),(0,i.kt)("p",null,"When something is incomplete, it will be shown with a red underline. An\nexpression may be incomplete even if it seems fine: this is because something it\ndepends on is incomplete. For example, in the case below we are returning ",(0,i.kt)("inlineCode",{parentName:"p"},"var"),"\nbut never defined it:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"error/image10.png",src:n(73111).Z,width:"1326",height:"300"})),(0,i.kt)("p",null,'In these cases, we provide a link to the source of the incomplete. Click on\n"click to locate source" and it will take you the source of the error.'),(0,i.kt)("h3",{id:"the-finer-details"},"The finer details"),(0,i.kt)("p",null,"Incompletes are intended to allow you write code without disrupting the code\naround it. You can add an empty ",(0,i.kt)("inlineCode",{parentName:"p"},"let")," statement -- which will have an\n",(0,i.kt)("inlineCode",{parentName:"p"},"<Incomplete>")," value on the right -- and because that new value doesn't interact\nwith anything else, you code will continue to run just fine."),(0,i.kt)("p",null,"Similarly, ",(0,i.kt)("inlineCode",{parentName:"p"},"<Incomplete>"),"s are ignored in lists. If you have an empty list, and\nstart to add an entry to that list, the new code will result in ",(0,i.kt)("inlineCode",{parentName:"p"},"<Incomplete>"),"\nuntil you have completed the code. The list will evaluate to ",(0,i.kt)("inlineCode",{parentName:"p"},"[]"),". This is so\nthat you can add entries to lists to without temporarily breaking your code."),(0,i.kt)("p",null,"The same is true of fields in a record: they will be ignored until the field's\nvalue is complete."),(0,i.kt)("p",null,"If a HTTP handler results in an ",(0,i.kt)("inlineCode",{parentName:"p"},"<Incomplete>"),", your user will get a 500 status\ncode with an error message."),(0,i.kt)("h2",{id:"type-errors"},"Type errors"),(0,i.kt)("p",null,'When you see "invalid code", it means that your program is complete but has\nissues (which are almost always type error). The error message should have\nenough . Carefully read the message to see what\'s wrong.'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example:")),(0,i.kt)("p",null,"Here we tried to use ",(0,i.kt)("inlineCode",{parentName:"p"},"DB::set")," with an Int for the ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," parameter, even though\n",(0,i.kt)("inlineCode",{parentName:"p"},"key")," needs to be a string."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"error/image14.png",src:n(36069).Z,width:"2366",height:"532"})),(0,i.kt)("p",null,"To resolve this problem, we can use a string instead. ",(0,i.kt)("inlineCode",{parentName:"p"},'"123"')," or\n",(0,i.kt)("inlineCode",{parentName:"p"},"123 |> toString")," will both work."),(0,i.kt)("h2",{id:"error-rail"},"Error Rail"),(0,i.kt)("p",null,"The error rail is a unique feature of Darklang. It's purpose is to allow you\neasily prototype code without having to deal with every error."),(0,i.kt)("h3",{id:"background-result-and-option-types"},"Background: Result and Option types"),(0,i.kt)("p",null,"Darklang has two types that model errors. The ",(0,i.kt)("inlineCode",{parentName:"p"},"Option")," type allows you to model\na value or the lack of a value. For example, when fetching a value from a\ndictionary or Datastore, if the value doesn't exist, the function will return\n",(0,i.kt)("inlineCode",{parentName:"p"},"Nothing"),". If it does exist, the function will return the value wrapped in a\n",(0,i.kt)("inlineCode",{parentName:"p"},"Just"),"."),(0,i.kt)("p",null,"In this case it unwraps to ",(0,i.kt)("inlineCode",{parentName:"p"},"Just val")," and the behavior would be the same for\nfunctions that would return ",(0,i.kt)("inlineCode",{parentName:"p"},"Ok val"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"unique/offrail_value.png",src:n(83982).Z,width:"954",height:"258"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"unique/offrail_value.png",src:n(38772).Z,width:"928",height:"166"})),(0,i.kt)("p",null,"Similarly, to handle errors, you can use a ",(0,i.kt)("inlineCode",{parentName:"p"},"Result"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Ok val")," wraps a successful\noperation, and ",(0,i.kt)("inlineCode",{parentName:"p"},"Error err")," wraps a failure value (possibly a string, or some\nother value with information about the error)."),(0,i.kt)("h3",{id:"background-matches"},"Background: matches"),(0,i.kt)("p",null,"Getting the value from an ",(0,i.kt)("inlineCode",{parentName:"p"},"Option")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Result")," can be irritating. You need to\nuse ",(0,i.kt)("inlineCode",{parentName:"p"},"match")," to check both possible values. This gives you certainty that you've\nhandled the different options, but means you need to do this cumbersome step for\nany function which doesn't always succeed (which is a lot of them)."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"unique/match.png",src:n(72376).Z,width:"808",height:"270"})),(0,i.kt)("h3",{id:"prototyping-using-the-error-rail"},"Prototyping using the Error Rail"),(0,i.kt)("p",null,"When you are prototyping, you don't want to write tedious error checking code\nthat you might subsequently delete anyway. To make prototyping easier, functions\nthat result ",(0,i.kt)("inlineCode",{parentName:"p"},"Option")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Result")," types can be automatically unwrapped. It's as\nif these functions threw exceptions in the error case instead of using our more\nstructured error handling mechanism."),(0,i.kt)("p",null,"Functions that return ",(0,i.kt)("inlineCode",{parentName:"p"},"Option")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Result"),' are automatically "put on the\nerrorrail" This means that they are automatically unwrapped in the success case.\nIn the failure case, execution stops in the handler or function and the bad\nvalue is immediately returned.'),(0,i.kt)("p",null,"A grey circle (\ud83d\udd18) on the right indicates that a success value was unwrapped."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"unique/railnotyetrun.png",src:n(90007).Z,width:"806",height:"172"})),(0,i.kt)("p",null,"A red error sign (\ud83d\udeab) on the right indicates that the function failed and that\nexecution was stopped."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"unique/railnotyetrun.png",src:n(68185).Z,width:"826",height:"162"})),(0,i.kt)("p",null,"If the function has not yet been run, there will be a dotted line (\u2999) on the\nright to indicate that an error could happen."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"unique/railnotyetrun.png",src:n(57805).Z,width:"828",height:"176"})),(0,i.kt)("h3",{id:"handling-errors-exhaustively"},"Handling errors exhaustively"),(0,i.kt)("p",null,"While this is useful in prototyping, once you've figured out what your code is\nsupposed to do, you'll want to handle potential errors. The ErrorRail indicators\nwill show you places where an error might happen, allowing you to add error\nhandling code."),(0,i.kt)("p",null,"When you are ready to handle error cases, you remove them from the rail by using\nthe editor command ",(0,i.kt)("inlineCode",{parentName:"p"},"take-function-off-rail")," (open the Command palette by hitting\n",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl-\\")," ",(0,i.kt)("strong",{parentName:"p"},"on the function name"),"). The result will no longer be unwrapped, and\nyou can handle the ",(0,i.kt)("inlineCode",{parentName:"p"},"Option")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Result")," value directly. You will typically do\nthis using a ",(0,i.kt)("inlineCode",{parentName:"p"},"match"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"unique/match.png",src:n(77132).Z,width:"1356",height:"352"})),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"https://darklang.com/a/sample-match"},"our sample canvas")," for examples."),(0,i.kt)("h2",{id:"error-rails-with-incomplete-and-type-errors"},"Error rails with Incomplete and Type Errors"),(0,i.kt)("p",null,"Incompletes and type errors are not the same as ",(0,i.kt)("inlineCode",{parentName:"p"},"Option")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Result")," types, and\ncannot be used together. You cannot handle ",(0,i.kt)("inlineCode",{parentName:"p"},"<Incomplete>"),"s or type error using\nthe error rail."))}h.isMDXComponent=!0},73111:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image10-552468def66c5166b9fca7dff6ad0c92.png"},14187:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image11-ee07ad1b849e64b4120c3948e596aa90.png"},23887:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image13-6c8f72633e566f6cea4e08f7cfd1f705.png"},36069:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image14-fce436e102cbd6bd8e04f7afe09eedff.png"},68185:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/errorrail_failure-b4040aef678d99fda09c91e008b2be17.png"},90007:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/errorrail_success-e000a956c35ed7501228f689e7158f87.png"},72376:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/match-74867aab1d612baf31c5e1daac21a4f8.png"},77132:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/match_just-5e3ef6c0935c178a90bd47eb898c8a77.png"},38772:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/offrail_error-bc3b03753a94b5d8883252eda2742a45.png"},83982:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/offrail_value-b69903e3884744f84fa53e39c3c837a3.png"},57805:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/railnotyetrun-f9809db48bdf629b37769f884c167517.png"}}]);