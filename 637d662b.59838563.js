(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{159:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),b=n,d=u["".concat(o,".").concat(b)]||u[b]||h[b]||i;return a?r.a.createElement(d,s(s({ref:t},c),{},{components:a})):r.a.createElement(d,s({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},96:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),i=(a(0),a(159)),o={title:"Query extras"},s={unversionedId:"api/start/api.query.other",id:"api/start/api.query.other",isDocsHomePage:!1,title:"Query extras",description:"In previous sections we took a walk through queries, showing how to use one-shot queries, how to subscribe to results and how to combine multiple queries into one. This section will aim to extend that knowledge showing some other features and utilities that are available on the api.query interfaces.",source:"@site/docs/api/start/api.query.other.md",slug:"/api/start/api.query.other",permalink:"/docs/api/start/api.query.other",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/api/start/api.query.other.md",version:"current",sidebar:"reference",previous:{title:"Multi queries",permalink:"/docs/api/start/api.query.multi"},next:{title:"Transactions",permalink:"/docs/api/start/api.tx"}},l=[{value:"State at a specific block",id:"state-at-a-specific-block",children:[]},{value:"State for a range of blocks",id:"state-for-a-range-of-blocks",children:[]},{value:"Map keys &amp; entries",id:"map-keys--entries",children:[]},{value:"State entries",id:"state-entries",children:[]},{value:"Entry metadata",id:"entry-metadata",children:[]},{value:"Let&#39;s transact already!",id:"lets-transact-already",children:[]}],c={rightToc:l};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In previous sections we took a walk through queries, showing how to use one-shot queries, how to subscribe to results and how to combine multiple queries into one. This section will aim to extend that knowledge showing some other features and utilities that are available on the ",Object(i.b)("inlineCode",{parentName:"p"},"api.query")," interfaces."),Object(i.b)("h2",{id:"state-at-a-specific-block"},"State at a specific block"),Object(i.b)("p",null,"Quite often is is useful (taking pruning into account, more on this later) to retrieve the state at a specific block. For instance we may wish to retrieve the current balance as well as the balance at a previous block for a specific account -"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"...\n\n// Retrieve the current block header\nconst lastHdr = await api.rpc.chain.getHeader();\n\n// Retrieve the balance at both the current and the parent hashes\nconst [{ data: balanceNow }, { data: balancePrev }] = await Promise.all([\n  api.query.system.account.at(lastHdr.hash, ADDR),\n  api.query.system.account.at(lastHdr.parentHash, ADDR)\n]);\n\n// Display the difference\nconsole.log(`The delta was ${balanceNow.free.sub(balancePrev.free)}`);\n")),Object(i.b)("p",null,"In the above example, we introduce the ",Object(i.b)("inlineCode",{parentName:"p"},".at(<hash>[, ...params]): Type")," query. For all ",Object(i.b)("inlineCode",{parentName:"p"},".at")," queries, the first parameter is always the block hash at which we want to make the query, in our example we use both the last retrieved block and the parent thereof. The params are optional as per the type of query made, for instance to retrieve the timestamp for a previous block, it would be -"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"...\n\n// Retrieve the timestamp for the previous block\nconst momentPrev = await api.query.timestamp.now.at(lastHdr.parentHash);\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},".at")," queries are all single-shot, i.e. there are no subscription option to these, since the state for a previous block should be static. (This is true to a certain extent, i.e. when blocks have been finalized)."),Object(i.b)("p",null,"An additional point to take care of (briefly mentioned above), is state pruning. By default a Polkadot/Substrate node will only keep state for the last 256 blocks, unless it is explicitly run in archive mode. This means that querying state further back than the pruning period will result in an error returned from the Node. (Generally most public RPC nodes only run with default settings, which includes aggressive state pruning)"),Object(i.b)("h2",{id:"state-for-a-range-of-blocks"},"State for a range of blocks"),Object(i.b)("p",null,"In addition to the ",Object(i.b)("inlineCode",{parentName:"p"},".at")," queries, you can also query state starting at a specific historic block and up to either a specified or the latest blocks. This is done via the ",Object(i.b)("inlineCode",{parentName:"p"},".range([from, to?], <...opt params>): [Hash, Type][]")," query. As an example -"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"...\n// Retrieve the current block header\nconst lastHdr = await api.rpc.chain.getHeader();\nconst startHdr = await api.rpc.chain.getBlockHash(lastHdr.number.unwrap().subn(500));\n\n// retrieve the range of changes\nconst changes = await api.query.system.account.range([startHdr]);\n\nchanges.forEach(([hash, value]) => {\n  console.log(hash.toHex(), value.toHuman());\n});\n")),Object(i.b)("h2",{id:"map-keys--entries"},"Map keys & entries"),Object(i.b)("p",null,"When working maps and double-maps, it is possible to retrieve a list of all the keys and entries for the map. For this we can use the ",Object(i.b)("inlineCode",{parentName:"p"},".entries(<args>): [StorageKey, Type][]")," queries. For example we may want to know the current list of validator exposures at a current era in the staking module -"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"...\n// Retrieve the active era\nconst activeEra = await api.query.staking.activeEra();\n\n// retrieve all exposures for the active era\nconst exposures = await api.query.staking.erasStakers.entries(activeEra.index);\n\nexposures.forEach(([key, exposure]) => {\n  console.log('key arguments:', key.args.map((k) => k.toHuman()));\n  console.log('     exposure:', exposure.toHuman());\n});\n")),Object(i.b)("p",null,"To understand the usage of the ",Object(i.b)("inlineCode",{parentName:"p"},"key.args"),", you need to understand that map/doublemap keys are stored alongside their lookups. This means that the raw key has hashed parts as well as the raw data. The API will decode the keys and provide the raw key arguments in args. This would mean -"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"if we are querying ",Object(i.b)("inlineCode",{parentName:"li"},"api.query.staking.validators(validatorId: AccountId)")," via ",Object(i.b)("inlineCode",{parentName:"li"},"entries"),", the ",Object(i.b)("inlineCode",{parentName:"li"},"key.args")," would be ",Object(i.b)("inlineCode",{parentName:"li"},"[AccountId]")),Object(i.b)("li",{parentName:"ul"},"if we are querying ",Object(i.b)("inlineCode",{parentName:"li"},"api.query.staking.erasStakers(era: EraIndex, validatorId: AccountId)")," via ",Object(i.b)("inlineCode",{parentName:"li"},"entries"),", the ",Object(i.b)("inlineCode",{parentName:"li"},"key.args")," would be ",Object(i.b)("inlineCode",{parentName:"li"},"[EraIndex, AccountId]"))),Object(i.b)("p",null,"the same applies to ",Object(i.b)("inlineCode",{parentName:"p"},".keys()")," - here the list of keys also have the decoded args, as specified. You can think of ",Object(i.b)("inlineCode",{parentName:"p"},".args")," as a tuple with the same types as the types required to retrieve a single entry in the map."),Object(i.b)("p",null,"In the first example we are querying a double-map, so we supply 1 argument. No arguments on double-maps will be very costly, retrieving all the eras and associated entries. In the same way as above we can simply do ",Object(i.b)("inlineCode",{parentName:"p"},".keys(activeEra.index): StorageKey[]")," to retrieve all the keys here, including the individual keys args (available on maps with decodable hashing functions) -"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// retrieve all the nominator keys\nconst keys = await api.query.staking.nominators.keys();\n\n// extract the first key argument [AccountId] as string\nconst nominatorIds = keys.map(({ args: [nominatorId] }) => nominatorId);\n\nconsole.log('all nominators:', nominatorIds.join(', '));\n")),Object(i.b)("h2",{id:"state-entries"},"State entries"),Object(i.b)("p",null,"In addition to using ",Object(i.b)("inlineCode",{parentName:"p"},"api.query")," to make actual on-chain queries, it can also be used to retrieve some information on the state entries. For instance to retrieve both the hash and size of an existing entry, we can make the following calls -"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"...\n\n// Retrieve the hash & size of the entry as stored on-chain\nconst [entryHash, entrySize] = await Promise.all([\n  api.query.system.account.hash(ADDR),\n  api.query.system.account.size(ADDR)\n]);\n\n// Output the info\nconsole.log(`The current size is ${entrySize} bytes with a hash of ${entryHash}`);\n")),Object(i.b)("p",null,"As per the previous examples, the params here apply explicitly to the actual needed values to identify an entry. As with ",Object(i.b)("inlineCode",{parentName:"p"},".at")," queries, there are no subscription versions for these queries, rather they are seen as one-shot values at a specific point in time."),Object(i.b)("h2",{id:"entry-metadata"},"Entry metadata"),Object(i.b)("p",null,"It has been explained that the ",Object(i.b)("inlineCode",{parentName:"p"},"api.query")," interfaces are decorated from the metadata. This also means that there is some information that we can gather from the entry, as decorated -"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Extract the info\nconst { meta, method, section } = api.query.system.account;\n\n// Display some info on a specific entry\nconsole.log(`${section}.${method}: ${meta.documentation.join(' ')}`);\nconsole.log(`query key: ${api.query.system.account.key(ADDR)}`);\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"section")," & ",Object(i.b)("inlineCode",{parentName:"p"},"method")," is an indication of where it is exposed on the API. In addition the ",Object(i.b)("inlineCode",{parentName:"p"},"meta")," holds an array with the metadata documentation for the entry."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"key")," endpoint requires some explanation. In the chain state, the key values (identified by the module, method & params) are hashed and this is used as a lookup. So underlying a single-shot query would utilize the ",Object(i.b)("inlineCode",{parentName:"p"},"api.rpc.state.getStorage")," entry, passing the output of ",Object(i.b)("inlineCode",{parentName:"p"},"key")," (which is a hashed representation of the values). Apart from the hashing, the API also takes care of type formatting, handling optional values and merging results across multiple subscriptions."),Object(i.b)("h2",{id:"lets-transact-already"},"Let's transact already!"),Object(i.b)("p",null,"At this point you are already burning to actually make some transactions. Making queries is cool, but just how do ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/start/api.tx"}),"you actually submit transactions on-chain"),"."))}p.isMDXComponent=!0}}]);