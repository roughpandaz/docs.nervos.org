"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2347],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),b=a,k=u["".concat(c,".").concat(b)]||u[b]||d[b]||o;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1093:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>c,metadata:()=>l,toc:()=>p,default:()=>u});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={id:"testnet",title:"Run a CKB Testnet Node"},c=void 0,l={unversionedId:"basics/guides/testnet",id:"basics/guides/testnet",title:"Run a CKB Testnet Node",description:"We have launched Aggron Testnet for developers to test their integration and smart contracts in real environment.The Aggron Testnet\u2019s info has been published via Wiki:",source:"@site/docs/basics/guides/testnet.md",sourceDirName:"basics/guides",slug:"/basics/guides/testnet",permalink:"/docs/basics/guides/testnet",tags:[],version:"current",lastUpdatedBy:"xy2101",lastUpdatedAt:1641540061,formattedLastUpdatedAt:"1/7/2022",frontMatter:{id:"testnet",title:"Run a CKB Testnet Node"},sidebar:"docs",previous:{title:"Run a CKB Mainnet Node",permalink:"/docs/basics/guides/mainnet"},next:{title:"Neuron Wallet Guide",permalink:"/docs/basics/guides/neuron"}},p=[{value:"Run a CKB Testnet node",id:"run-a-ckb-testnet-node",children:[],level:3}],d={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We have launched Aggron Testnet for developers to test their integration and smart contracts in real environment.The Aggron Testnet\u2019s info has been published via Wiki:\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/ckb/wiki/Chains"},"Chains")," .Please refer it for more details. Because of the hash rate surge, Aggron will reset regularly."),(0,o.kt)("h3",{id:"run-a-ckb-testnet-node"},"Run a CKB Testnet node"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"System Requirements")),(0,o.kt)("p",null,"Any modern computer with macOS/Linux/Windows operating system should be able to run a CKB node and mining programs. Alternatively, you can also use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/ckb/blob/develop/docs/run-ckb-with-docker.md"},"Docker")," if your operating system is not properly supported by CKB for now."),(0,o.kt)("p",null,"To run a CKB node, please follow the instructions explained in detail below:"),(0,o.kt)("p",null,"Step 1: Download the latest ckb binary file from the CKB releases page on ","[GitHub]"," (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/ckb/releases"},"https://github.com/nervosnetwork/ckb/releases"),"), then check if it works with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ckb --version \nckb-cli --version\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"(click here to view response)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ckb 0.32.1 (9ebc9ce 2020-05-29)\nckb-cli 0.32.0 (0fc435d 2020-05-22)\n"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2: Connect to Aggron Testnet")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Init CKB node with ",(0,o.kt)("inlineCode",{parentName:"li"},"ckb init --chain testnet"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ckb init --chain testnet\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"(click here to view response)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"WARN: mining feature is disabled because of lacking the block assembler config options\nInitialized CKB directory in /PATH/ckb_v0.32.1_x86_64-apple-darwin\ncreate ckb.toml\ncreate ckb-miner.toml\n"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3: Start the CKB Testnet node")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<p>ckb run</p>\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"(click here to view response)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'2020-06-05 18:23:10.086 +08:00 main INFO sentry  **Notice**: The ckb process will send stack trace to sentry on Rust panics. This is enabled by default before mainnet, which can be opted out by setting the option `dsn` to empty in the config file. The DSN is now https://dda4f353e15f4b62800d273a2afe70c2@sentry.nervos.org/4\n2020-06-05 18:23:10.172 +08:00 main INFO main  Miner is disabled, edit ckb.toml to enable it\n2020-06-05 18:23:10.176 +08:00 main INFO ckb-db  Initialize a new database\n2020-06-05 18:23:10.263 +08:00 main INFO ckb-db  Init database version 20191127135521\n2020-06-05 18:23:10.283 +08:00 main INFO ckb-memory-tracker  track current process: unsupported\n2020-06-05 18:23:10.284 +08:00 main INFO main  ckb version: 0.32.1 (9ebc9ce 2020-05-29)\n2020-06-05 18:23:10.284 +08:00 main INFO main  chain genesis hash: 0x10639e0895502b5688a6be8cf69460d76541bfa4821629d86d62ba0aae3f9606\n2020-06-05 18:23:10.285 +08:00 main INFO ckb-network  Generate random key\n2020-06-05 18:23:10.285 +08:00 main INFO ckb-network  write random secret key to "/PATH/ckb_v0.32.1_x86_64-apple-darwin/data/network/secret_key"\n2020-06-05 18:23:10.296 +08:00 NetworkRuntime INFO ckb-network  p2p service event: ListenStarted { address: "/ip4/0.0.0.0/tcp/8115" }\n2020-06-05 18:23:10.298 +08:00 NetworkRuntime INFO ckb-network  Listen on address: /ip4/0.0.0.0/tcp/8115/p2p/QmWpdvd65BhJV3KVyidSkGjd3SuTdCSNgk1WuRpnggMLWj\n2020-06-05 18:23:10.303 +08:00 main INFO ckb-db  Initialize a new database\n2020-06-05 18:23:10.336 +08:00 main INFO ckb-db  Init database version 20191201091330\n2020-06-05 18:23:10.484 +08:00 NetworkRuntime INFO ckb-sync  SyncProtocol.connected peer=SessionId(1)\n2020-06-05 18:23:10.484 +08:00 NetworkRuntime INFO ckb-relay  RelayProtocol(1).connected peer=SessionId(1)\n2020-06-05 18:23:10.732 +08:00 NetworkRuntime INFO ckb-sync  Ignoring getheaders from peer=SessionId(1) because node is in initial block download\n2020-06-05 18:23:10.927 +08:00 ChainService INFO ckb-chain  block: 1, hash: 0xd5ac7cf8c34a975bf258a34f1c2507638487ab71aa4d10a9ec73704aa3abf9cd, epoch: 0(1/1000), total_diff: 0x1800060, txs: 1\n\n'))))}u.isMDXComponent=!0}}]);