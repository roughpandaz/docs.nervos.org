"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5358],{3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>d});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=r.createContext({}),p=function(e){var a=r.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},m=function(e){var a=p(e.components);return r.createElement(o.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(t),d=n,k=u["".concat(o,".").concat(d)]||u[d]||c[d]||s;return t?r.createElement(k,i(i({ref:a},m),{},{components:t})):r.createElement(k,i({ref:a},m))}));function d(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var s=t.length,i=new Array(s);i[0]=u;var l={};for(var o in a)hasOwnProperty.call(a,o)&&(l[o]=a[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<s;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},786:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var r=t(7462),n=t(3366),s=(t(7294),t(3905)),i=(t(4996),t(9960),["components"]),l={id:"sdk_examples_java",title:"Java",sidebar_position:4},o=void 0,p={unversionedId:"basics/guides/SDK_examples/sdk_examples_java",id:"basics/guides/SDK_examples/sdk_examples_java",title:"Java",description:"Single-sig transfer",source:"@site/docs/basics/guides/SDK_examples/java_lang.md",sourceDirName:"basics/guides/SDK_examples",slug:"/basics/guides/SDK_examples/sdk_examples_java",permalink:"/docs/basics/guides/SDK_examples/sdk_examples_java",draft:!1,editUrl:"https://github.com/nervosnetwork/docs-new/tree/develop/website/docs/basics/guides/SDK_examples/java_lang.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"sdk_examples_java",title:"Java",sidebar_position:4},sidebar:"Basics",previous:{title:"Go",permalink:"/docs/basics/guides/SDK_examples/sdk_examples_go"},next:{title:"Lumos/Javascript",permalink:"/docs/basics/guides/SDK_examples/sdk_examples_lumos"}},m={},c=[{value:"Single-sig transfer",id:"single-sig-transfer",level:2},{value:"Multi-sig transfer",id:"multi-sig-transfer",level:2},{value:"Chained transfer",id:"chained-transfer",level:2},{value:"Issue and send SUDT",id:"issue-and-send-sudt",level:2},{value:"DAO Deposit",id:"dao-deposit",level:2},{value:"DAO Withdrawal",id:"dao-withdrawal",level:2}],u={toc:c};function d(e){var a=e.components,t=(0,n.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"single-sig-transfer"},"Single-sig transfer"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"With ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/ckb-sdk-java/blob/master/example/src/main/java/org/nervos/ckb/example/SendCkbExample.java"},"Secp256k1")),(0,s.kt)("li",{parentName:"ul"},"With ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/ckb-sdk-java/blob/master/example/src/main/java/org/nervos/ckb/example/OmnilockExample.java"},"Omnilock")),(0,s.kt)("li",{parentName:"ul"},"With ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/ckb-sdk-java/blob/master/example/src/main/java/org/nervos/ckb/example/SendCkbByLightClientExample.java"},"Light-client"))),(0,s.kt)("h2",{id:"multi-sig-transfer"},"Multi-sig transfer"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"With ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/ckb-sdk-java/blob/master/example/src/main/java/org/nervos/ckb/example/SendCkbMultisigExample.java"},"Secp256k1")),(0,s.kt)("li",{parentName:"ul"},"With ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/ckb-sdk-java/blob/master/example/src/main/java/org/nervos/ckb/example/OmnilockMultisigExample.java"},"Omnilock"))),(0,s.kt)("h2",{id:"chained-transfer"},"Chained transfer"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/ckb-sdk-java/blob/master/example/src/main/java/org/nervos/ckb/example/SendChainedTransactionExample.java"},"Chained transfer"))),(0,s.kt)("h2",{id:"issue-and-send-sudt"},"Issue and send SUDT"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/ckb-sdk-java/blob/master/example/src/main/java/org/nervos/ckb/example/IssueSudtExample.java"},"Issue"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/ckb-sdk-java/blob/master/example/src/main/java/org/nervos/ckb/example/SendSudtExample.java"},"Send")))),(0,s.kt)("h2",{id:"dao-deposit"},"DAO Deposit"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/ckb-sdk-java/blob/master/example/src/main/java/org/nervos/ckb/example/DaoDepositExample.java"},"Deposit"))),(0,s.kt)("h2",{id:"dao-withdrawal"},"DAO Withdrawal"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/ckb-sdk-java/blob/master/example/src/main/java/org/nervos/ckb/example/DaoWithdrawExample.java"},"Withdraw")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/ckb-sdk-java/blob/master/example/src/main/java/org/nervos/ckb/example/DaoClaimExample.java"},"Claim"))))}d.isMDXComponent=!0}}]);