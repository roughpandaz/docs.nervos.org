"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6917],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>u});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(t),u=r,k=m["".concat(c,".").concat(u)]||m[u]||d[u]||o;return t?a.createElement(k,i(i({ref:n},p),{},{components:t})):a.createElement(k,i({ref:n},p))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2959:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>l,contentTitle:()=>c,metadata:()=>s,toc:()=>p,default:()=>m});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),i=["components"],l={id:"mainnet",title:"Run a CKB Mainnet Node"},c=void 0,s={unversionedId:"basics/guides/mainnet",id:"basics/guides/mainnet",title:"Run a CKB Mainnet Node",description:"Fun Fact: Running a CKB Mainnet node not only helps contribute to the robustness and decentralized nature of the Network, it also means you do not need to rely on any 3rd party to provide data from the blockchain, which increases your security.",source:"@site/docs/basics/guides/mainnet.md",sourceDirName:"basics/guides",slug:"/basics/guides/mainnet",permalink:"/docs/basics/guides/mainnet",tags:[],version:"current",lastUpdatedBy:"xying21",lastUpdatedAt:1643343968,formattedLastUpdatedAt:"1/28/2022",frontMatter:{id:"mainnet",title:"Run a CKB Mainnet Node"},sidebar:"Basics",previous:{title:"Run a CKB Dev Blockchain",permalink:"/docs/basics/guides/devchain"},next:{title:"Run a CKB Testnet Node",permalink:"/docs/basics/guides/testnet"}},p=[],d={toc:p};function m(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Fun Fact: Running a CKB Mainnet node not only helps contribute to the robustness and decentralized nature of the Network, it also means you do not need to rely on any 3rd party to provide data from the blockchain, which increases your security.")),(0,o.kt)("p",null,"Running a node requires using the command line. If you have never used a command line before, you may refer to ",(0,o.kt)("a",{parentName:"p",href:"https://www.google.com/search?q=learn+command+line"},"how to use the command line tool")," on your computer. Although it may seem complicated at first, it is quite simple and you should be able to easily run a CKB node following the specific instructions below."),(0,o.kt)("p",null,"Step 1: Download the latest release CKB binary file from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/ckb/releases"},"CKB releases page on GitHub")," "),(0,o.kt)("p",null,"Step 2:  Unzip / extract the downloaded file to an easily accessible folder.\nFor Windows we recommend ",(0,o.kt)("inlineCode",{parentName:"p"},"C:\\ckb"),"\nOn Mac we recommend ",(0,o.kt)("inlineCode",{parentName:"p"},"~/Documents")),(0,o.kt)("p",null,"Step 3: Open up Terminal (Mac) or command line (Windows)."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"On Mac:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Either 1) open your Applications folder, then open Utilities and double-click on Terminal, or 2) press ",(0,o.kt)("inlineCode",{parentName:"li"},"Command - Spacebar")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"Control -Spacebar"),' to launch Spotlight and type "Terminal," then double-click the search result and the following steps are performed on Terminal.'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"On Windows:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Please note: if you are familiar with command line operation on Windows, you can skip this step and open the ",(0,o.kt)("inlineCode",{parentName:"li"},"cmd")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"Power Shell")," terminal instead."),(0,o.kt)("li",{parentName:"ul"},"Download Git for windows from ",(0,o.kt)("a",{parentName:"li",href:"https://git-scm.com/downloads"},"Git-Downloads"),", double-click to install it and open Git Bash in start menu. The following steps will be performed in Git Bash.")))),(0,o.kt)("p",null,"Step 4\uff1aCopy and paste the commands below into the Terminal (Mac) / Command Line (Windows):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Please note: the directory and folder name on your computer must match the commands below, if not, please modify the command script correspondingly. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Mac"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd /Users/(NAME)/Documents/ckb_v0.32.1_x86_64-apple-darwin\n./ckb --version\n./ckb-cli --version\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Windows")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd C:/ckb_v0.32.1_x86_64-pc-windows-msvc \nckb --version \nckb-cli --version\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"(click here to view response)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\nckb 0.32.1 (9ebc9ce 2020-05-29)\nckb-cli 0.32.0 (0fc435d 2020-05-22)\n"))),(0,o.kt)("p",null,"Step 5: To run the CKB node, copy and paste the commands below into the Terminal (Mac) / Command Line (Windows):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Initialize the node (run only once)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ckb init --chain mainnet\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"(click here to view response)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\nWARN: mining feature is disabled because of lacking the block assembler config options\nInitialized CKB directory in /PATH/ckb_v0.32.1_x86_64-apple-darwin\ncreate ckb.toml\ncreate ckb-miner.toml\n"))),(0,o.kt)("p",null,"** Start the node."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ckb run\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"(click here to view response)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'\n2020-06-05 18:10:19.785 +08:00 main INFO sentry  sentry is disabled\n2020-06-05 18:10:19.869 +08:00 main INFO main  Miner is disabled, edit ckb.toml to enable it\n2020-06-05 18:10:19.942 +08:00 main INFO ckb-memory-tracker  track current process: unsupported\n2020-06-05 18:10:19.942 +08:00 main INFO main  ckb version: 0.32.1 (9ebc9ce 2020-05-29)\n2020-06-05 18:10:19.942 +08:00 main INFO main  chain genesis hash: 0x92b197aa1fba0f63633922c61c92375c9c074a93e85963554f5499fe1450d0e5\n2020-06-05 18:10:19.944 +08:00 NetworkRuntime INFO ckb-network  p2p service event: ListenStarted { address: "/ip4/0.0.0.0/tcp/8115" }\n2020-06-05 18:10:19.946 +08:00 NetworkRuntime INFO ckb-network  Listen on address: /ip4/0.0.0.0/tcp/8115/p2p/QmWKGXVhYx2T8YmbsC1RYjnrRf1hfz2ZNTMywrkN9y2bVg\n2020-06-05 18:10:19.951 +08:00 main INFO ckb-db  Initialize a new database\n2020-06-05 18:10:19.983 +08:00 main INFO ckb-db  Init database version 20191201091330\n2020-06-05 18:10:20.146 +08:00 NetworkRuntime INFO ckb-relay  RelayProtocol(1).connected peer=SessionId(1)\n2020-06-05 18:10:20.146 +08:00 NetworkRuntime INFO ckb-sync  SyncProtocol.connected peer=SessionId(1)\n2020-06-05 18:10:20.451 +08:00 NetworkRuntime INFO ckb-sync  Ignoring getheaders from peer=SessionId(1) because node is in initial block download\n2020-06-05 18:10:20.749 +08:00 ChainService INFO ckb-chain  block: 1, hash: 0x2567f226c73b04a6cb3ef04b3bb10ab99f37850794cd9569be7de00bac4db875, epoch: 0(1/1743), total_diff: 0x3b1bb3d4c1376a, txs:1\n'))))}m.isMDXComponent=!0}}]);