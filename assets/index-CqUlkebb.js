import{h as Xe,R as Be,v as Za,C as Qa,m as f,a as en,o as I,s as q,b as Z,M as tn,r as an,A as Q,w as nn,t as rn,D as ot,Z as on}from"./index.js";import{A as fe,C as Ut,L as st}from"./layers-CJNDsXgU.js";import{M as sn}from"./map-pin-CZVkk4gD.js";const ln=[["path",{d:"M11 10.27 7 3.34",key:"16pf9h"}],["path",{d:"m11 13.73-4 6.93",key:"794ttg"}],["path",{d:"M12 22v-2",key:"1osdcq"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M14 12h8",key:"4f43i9"}],["path",{d:"m17 20.66-1-1.73",key:"eq3orb"}],["path",{d:"m17 3.34-1 1.73",key:"2wel8s"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"m20.66 17-1.73-1",key:"sg0v6f"}],["path",{d:"m20.66 7-1.73 1",key:"1ow05n"}],["path",{d:"m3.34 17 1.73-1",key:"nuk764"}],["path",{d:"m3.34 7 1.73 1",key:"1ulond"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["circle",{cx:"12",cy:"12",r:"8",key:"46899m"}]],fn=Xe("cog",ln);const cn=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],un=Xe("smartphone",cn);const dn=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],mn=Xe("sparkles",dn);function Ce(e,t){(t==null||t>e.length)&&(t=e.length);for(var a=0,n=Array(t);a<t;a++)n[a]=e[a];return n}function pn(e){if(Array.isArray(e))return e}function hn(e){if(Array.isArray(e))return Ce(e)}function vn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function gn(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,Yt(n.key),n)}}function yn(e,t,a){return t&&gn(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function de(e,t){var a=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=Ve(e))||t){a&&(e=a);var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(l){throw l},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,o=!0,s=!1;return{s:function(){a=a.call(e)},n:function(){var l=a.next();return o=l.done,l},e:function(l){s=!0,i=l},f:function(){try{o||a.return==null||a.return()}finally{if(s)throw i}}}}function g(e,t,a){return(t=Yt(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function bn(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function xn(e,t){var a=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var n,r,i,o,s=[],l=!0,u=!1;try{if(i=(a=a.call(e)).next,t===0){if(Object(a)!==a)return;l=!1}else for(;!(l=(n=i.call(a)).done)&&(s.push(n.value),s.length!==t);l=!0);}catch(m){u=!0,r=m}finally{try{if(!l&&a.return!=null&&(o=a.return(),Object(o)!==o))return}finally{if(u)throw r}}return s}}function wn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Sn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function lt(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?lt(Object(a),!0).forEach(function(n){g(e,n,a[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):lt(Object(a)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))})}return e}function ye(e,t){return pn(e)||xn(e,t)||Ve(e,t)||wn()}function F(e){return hn(e)||bn(e)||Ve(e)||Sn()}function kn(e,t){if(typeof e!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var n=a.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Yt(e){var t=kn(e,"string");return typeof t=="symbol"?t:t+""}function he(e){"@babel/helpers - typeof";return he=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},he(e)}function Ve(e,t){if(e){if(typeof e=="string")return Ce(e,t);var a={}.toString.call(e).slice(8,-1);return a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set"?Array.from(e):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Ce(e,t):void 0}}var ft=function(){},Je={},Ht={},Gt=null,Xt={mark:ft,measure:ft};try{typeof window<"u"&&(Je=window),typeof document<"u"&&(Ht=document),typeof MutationObserver<"u"&&(Gt=MutationObserver),typeof performance<"u"&&(Xt=performance)}catch{}var An=Je.navigator||{},ct=An.userAgent,ut=ct===void 0?"":ct,$=Je,w=Ht,dt=Gt,ce=Xt;$.document;var z=!!w.documentElement&&!!w.head&&typeof w.addEventListener=="function"&&typeof w.createElement=="function",Bt=~ut.indexOf("MSIE")||~ut.indexOf("Trident/"),Ae,jn=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Nn=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,Vt={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},graphite:{"fa-thin":"thin",fagt:"thin"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},In={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Jt=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],N="classic",ie="duotone",Kt="sharp",qt="sharp-duotone",Zt="chisel",Qt="etch",ea="graphite",ta="jelly",aa="jelly-duo",na="jelly-fill",ra="notdog",ia="notdog-duo",oa="slab",sa="slab-press",la="thumbprint",fa="utility",ca="utility-duo",ua="utility-fill",da="whiteboard",Pn="Classic",En="Duotone",Fn="Sharp",Cn="Sharp Duotone",On="Chisel",Mn="Etch",Ln="Graphite",_n="Jelly",Tn="Jelly Duo",zn="Jelly Fill",$n="Notdog",Dn="Notdog Duo",Rn="Slab",Wn="Slab Press",Un="Thumbprint",Yn="Utility",Hn="Utility Duo",Gn="Utility Fill",Xn="Whiteboard",ma=[N,ie,Kt,qt,Zt,Qt,ea,ta,aa,na,ra,ia,oa,sa,la,fa,ca,ua,da];Ae={},g(g(g(g(g(g(g(g(g(g(Ae,N,Pn),ie,En),Kt,Fn),qt,Cn),Zt,On),Qt,Mn),ea,Ln),ta,_n),aa,Tn),na,zn),g(g(g(g(g(g(g(g(g(Ae,ra,$n),ia,Dn),oa,Rn),sa,Wn),la,Un),fa,Yn),ca,Hn),ua,Gn),da,Xn);var Bn={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},graphite:{100:"fagt"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},Vn={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Graphite":{100:"fagt",normal:"fagt"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},Jn=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["graphite",{defaultShortPrefixId:"fagt",defaultStyleId:"thin",styleIds:["thin"],futureStyleIds:[],defaultFontWeight:100}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),Kn={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},graphite:{thin:"fagt"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},whiteboard:{semibold:"fawsb"}},pa=["fak","fa-kit","fakd","fa-kit-duotone"],mt={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},qn=["kit"],Zn="kit",Qn="kit-duotone",er="Kit",tr="Kit Duotone";g(g({},Zn,er),Qn,tr);var ar={kit:{"fa-kit":"fak"}},nr={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},rr={kit:{fak:"fa-kit"}},pt={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},je,ue={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ir=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],or="classic",sr="duotone",lr="sharp",fr="sharp-duotone",cr="chisel",ur="etch",dr="graphite",mr="jelly",pr="jelly-duo",hr="jelly-fill",vr="notdog",gr="notdog-duo",yr="slab",br="slab-press",xr="thumbprint",wr="utility",Sr="utility-duo",kr="utility-fill",Ar="whiteboard",jr="Classic",Nr="Duotone",Ir="Sharp",Pr="Sharp Duotone",Er="Chisel",Fr="Etch",Cr="Graphite",Or="Jelly",Mr="Jelly Duo",Lr="Jelly Fill",_r="Notdog",Tr="Notdog Duo",zr="Slab",$r="Slab Press",Dr="Thumbprint",Rr="Utility",Wr="Utility Duo",Ur="Utility Fill",Yr="Whiteboard";je={},g(g(g(g(g(g(g(g(g(g(je,or,jr),sr,Nr),lr,Ir),fr,Pr),cr,Er),ur,Fr),dr,Cr),mr,Or),pr,Mr),hr,Lr),g(g(g(g(g(g(g(g(g(je,vr,_r),gr,Tr),yr,zr),br,$r),xr,Dr),wr,Rr),Sr,Wr),kr,Ur),Ar,Yr);var Hr="kit",Gr="kit-duotone",Xr="Kit",Br="Kit Duotone";g(g({},Hr,Xr),Gr,Br);var Vr={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},graphite:{"fa-thin":"fagt"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},Jr={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],graphite:["fagt"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},Oe={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},graphite:{fagt:"fa-thin"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},Kr=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],ha=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fagt","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(ir,Kr),qr=["solid","regular","light","thin","duotone","brands","semibold"],va=[1,2,3,4,5,6,7,8,9,10],Zr=va.concat([11,12,13,14,15,16,17,18,19,20]),Qr=["aw","fw","pull-left","pull-right"],ei=[].concat(F(Object.keys(Jr)),qr,Qr,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",ue.GROUP,ue.SWAP_OPACITY,ue.PRIMARY,ue.SECONDARY]).concat(va.map(function(e){return"".concat(e,"x")})).concat(Zr.map(function(e){return"w-".concat(e)})),ti={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},_="___FONT_AWESOME___",Me=16,ga="fa",ya="svg-inline--fa",U="data-fa-i2svg",Le="data-fa-pseudo-element",ai="data-fa-pseudo-element-pending",Ke="data-prefix",qe="data-icon",ht="fontawesome-i2svg",ni="async",ri=["HTML","HEAD","STYLE","SCRIPT"],ba=["::before","::after",":before",":after"],xa=(function(){try{return!0}catch{return!1}})();function oe(e){return new Proxy(e,{get:function(a,n){return n in a?a[n]:a[N]}})}var wa=c({},Vt);wa[N]=c(c(c(c({},{"fa-duotone":"duotone"}),Vt[N]),mt.kit),mt["kit-duotone"]);var ii=oe(wa),_e=c({},Kn);_e[N]=c(c(c(c({},{duotone:"fad"}),_e[N]),pt.kit),pt["kit-duotone"]);var vt=oe(_e),Te=c({},Oe);Te[N]=c(c({},Te[N]),rr.kit);var Ze=oe(Te),ze=c({},Vr);ze[N]=c(c({},ze[N]),ar.kit);oe(ze);var oi=jn,Sa="fa-layers-text",si=Nn,li=c({},Bn);oe(li);var fi=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ne=In,ci=[].concat(F(qn),F(ei)),te=$.FontAwesomeConfig||{};function ui(e){var t=w.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function di(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(w&&typeof w.querySelector=="function"){var mi=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];mi.forEach(function(e){var t=ye(e,2),a=t[0],n=t[1],r=di(ui(a));r!=null&&(te[n]=r)})}var ka={styleDefault:"solid",familyDefault:N,cssPrefix:ga,replacementClass:ya,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};te.familyPrefix&&(te.cssPrefix=te.familyPrefix);var V=c(c({},ka),te);V.autoReplaceSvg||(V.observeMutations=!1);var p={};Object.keys(ka).forEach(function(e){Object.defineProperty(p,e,{enumerable:!0,set:function(a){V[e]=a,ae.forEach(function(n){return n(p)})},get:function(){return V[e]}})});Object.defineProperty(p,"familyPrefix",{enumerable:!0,set:function(t){V.cssPrefix=t,ae.forEach(function(a){return a(p)})},get:function(){return V.cssPrefix}});$.FontAwesomeConfig=p;var ae=[];function pi(e){return ae.push(e),function(){ae.splice(ae.indexOf(e),1)}}var H=Me,C={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function hi(e){if(!(!e||!z)){var t=w.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var a=w.head.childNodes,n=null,r=a.length-1;r>-1;r--){var i=a[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(n=i)}return w.head.insertBefore(t,n),e}}var vi="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function gt(){for(var e=12,t="";e-- >0;)t+=vi[Math.random()*62|0];return t}function K(e){for(var t=[],a=(e||[]).length>>>0;a--;)t[a]=e[a];return t}function Qe(e){return e.classList?K(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Aa(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function gi(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,'="').concat(Aa(e[a]),'" ')},"").trim()}function be(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,": ").concat(e[a].trim(),";")},"")}function et(e){return e.size!==C.size||e.x!==C.x||e.y!==C.y||e.rotate!==C.rotate||e.flipX||e.flipY}function yi(e){var t=e.transform,a=e.containerWidth,n=e.iconWidth,r={transform:"translate(".concat(a/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(n/2*-1," -256)")};return{outer:r,inner:l,path:u}}function bi(e){var t=e.transform,a=e.width,n=a===void 0?Me:a,r=e.height,i=r===void 0?Me:r,o="";return Bt?o+="translate(".concat(t.x/H-n/2,"em, ").concat(t.y/H-i/2,"em) "):o+="translate(calc(-50% + ".concat(t.x/H,"em), calc(-50% + ").concat(t.y/H,"em)) "),o+="scale(".concat(t.size/H*(t.flipX?-1:1),", ").concat(t.size/H*(t.flipY?-1:1),") "),o+="rotate(".concat(t.rotate,"deg) "),o}var xi=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function ja(){var e=ga,t=ya,a=p.cssPrefix,n=p.replacementClass,r=xi;if(a!==e||n!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");r=r.replace(i,".".concat(a,"-")).replace(o,"--".concat(a,"-")).replace(s,".".concat(n))}return r}var yt=!1;function Ie(){p.autoAddCss&&!yt&&(hi(ja()),yt=!0)}var wi={mixout:function(){return{dom:{css:ja,insertCss:Ie}}},hooks:function(){return{beforeDOMElementCreation:function(){Ie()},beforeI2svg:function(){Ie()}}}},T=$||{};T[_]||(T[_]={});T[_].styles||(T[_].styles={});T[_].hooks||(T[_].hooks={});T[_].shims||(T[_].shims=[]);var E=T[_],Na=[],Ia=function(){w.removeEventListener("DOMContentLoaded",Ia),ve=1,Na.map(function(t){return t()})},ve=!1;z&&(ve=(w.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(w.readyState),ve||w.addEventListener("DOMContentLoaded",Ia));function Si(e){z&&(ve?setTimeout(e,0):Na.push(e))}function se(e){var t=e.tag,a=e.attributes,n=a===void 0?{}:a,r=e.children,i=r===void 0?[]:r;return typeof e=="string"?Aa(e):"<".concat(t," ").concat(gi(n),">").concat(i.map(se).join(""),"</").concat(t,">")}function bt(e,t,a){if(e&&e[t]&&e[t][a])return{prefix:t,iconName:a,icon:e[t][a]}}var Pe=function(t,a,n,r){var i=Object.keys(t),o=i.length,s=a,l,u,m;for(n===void 0?(l=1,m=t[i[0]]):(l=0,m=n);l<o;l++)u=i[l],m=s(m,t[u],u,t);return m};function Pa(e){return F(e).length!==1?null:e.codePointAt(0).toString(16)}function xt(e){return Object.keys(e).reduce(function(t,a){var n=e[a],r=!!n.icon;return r?t[n.iconName]=n.icon:t[a]=n,t},{})}function $e(e,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=a.skipHooks,r=n===void 0?!1:n,i=xt(t);typeof E.hooks.addPack=="function"&&!r?E.hooks.addPack(e,xt(t)):E.styles[e]=c(c({},E.styles[e]||{}),i),e==="fas"&&$e("fa",t)}var re=E.styles,ki=E.shims,Ea=Object.keys(Ze),Ai=Ea.reduce(function(e,t){return e[t]=Object.keys(Ze[t]),e},{}),tt=null,Fa={},Ca={},Oa={},Ma={},La={};function ji(e){return~ci.indexOf(e)}function Ni(e,t){var a=t.split("-"),n=a[0],r=a.slice(1).join("-");return n===e&&r!==""&&!ji(r)?r:null}var _a=function(){var t=function(i){return Pe(re,function(o,s,l){return o[l]=Pe(s,i,{}),o},{})};Fa=t(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){r[l.toString(16)]=o})}return r}),Ca=t(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){r[l]=o})}return r}),La=t(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(l){r[l]=o}),r});var a="far"in re||p.autoFetchSvg,n=Pe(ki,function(r,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!a&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:l}),r},{names:{},unicodes:{}});Oa=n.names,Ma=n.unicodes,tt=xe(p.styleDefault,{family:p.familyDefault})};pi(function(e){tt=xe(e.styleDefault,{family:p.familyDefault})});_a();function at(e,t){return(Fa[e]||{})[t]}function Ii(e,t){return(Ca[e]||{})[t]}function W(e,t){return(La[e]||{})[t]}function Ta(e){return Oa[e]||{prefix:null,iconName:null}}function Pi(e){var t=Ma[e],a=at("fas",e);return t||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function D(){return tt}var za=function(){return{prefix:null,iconName:null,rest:[]}};function Ei(e){var t=N,a=Ea.reduce(function(n,r){return n[r]="".concat(p.cssPrefix,"-").concat(r),n},{});return ma.forEach(function(n){(e.includes(a[n])||e.some(function(r){return Ai[n].includes(r)}))&&(t=n)}),t}function xe(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.family,n=a===void 0?N:a,r=ii[n][e];if(n===ie&&!e)return"fad";var i=vt[n][e]||vt[n][r],o=e in E.styles?e:null,s=i||o||null;return s}function Fi(e){var t=[],a=null;return e.forEach(function(n){var r=Ni(p.cssPrefix,n);r?a=r:n&&t.push(n)}),{iconName:a,rest:t}}function wt(e){return e.sort().filter(function(t,a,n){return n.indexOf(t)===a})}var St=ha.concat(pa);function we(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.skipLookups,n=a===void 0?!1:a,r=null,i=wt(e.filter(function(v){return St.includes(v)})),o=wt(e.filter(function(v){return!St.includes(v)})),s=i.filter(function(v){return r=v,!Jt.includes(v)}),l=ye(s,1),u=l[0],m=u===void 0?null:u,d=Ei(i),h=c(c({},Fi(o)),{},{prefix:xe(m,{family:d})});return c(c(c({},h),Li({values:e,family:d,styles:re,config:p,canonical:h,givenPrefix:r})),Ci(n,r,h))}function Ci(e,t,a){var n=a.prefix,r=a.iconName;if(e||!n||!r)return{prefix:n,iconName:r};var i=t==="fa"?Ta(r):{},o=W(n,r);return r=i.iconName||o||r,n=i.prefix||n,n==="far"&&!re.far&&re.fas&&!p.autoFetchSvg&&(n="fas"),{prefix:n,iconName:r}}var Oi=ma.filter(function(e){return e!==N||e!==ie}),Mi=Object.keys(Oe).filter(function(e){return e!==N}).map(function(e){return Object.keys(Oe[e])}).flat();function Li(e){var t=e.values,a=e.family,n=e.canonical,r=e.givenPrefix,i=r===void 0?"":r,o=e.styles,s=o===void 0?{}:o,l=e.config,u=l===void 0?{}:l,m=a===ie,d=t.includes("fa-duotone")||t.includes("fad"),h=u.familyDefault==="duotone",v=n.prefix==="fad"||n.prefix==="fa-duotone";if(!m&&(d||h||v)&&(n.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(n.prefix="fab"),!n.prefix&&Oi.includes(a)){var x=Object.keys(s).find(function(S){return Mi.includes(S)});if(x||u.autoFetchSvg){var b=Jn.get(a).defaultShortPrefixId;n.prefix=b,n.iconName=W(n.prefix,n.iconName)||n.iconName}}return(n.prefix==="fa"||i==="fa")&&(n.prefix=D()||"fas"),n}var _i=(function(){function e(){vn(this,e),this.definitions={}}return yn(e,[{key:"add",value:function(){for(var a=this,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){a.definitions[s]=c(c({},a.definitions[s]||{}),o[s]),$e(s,o[s]);var l=Ze[N][s];l&&$e(l,o[s]),_a()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,n){var r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,l=o.iconName,u=o.icon,m=u[2];a[s]||(a[s]={}),m.length>0&&m.forEach(function(d){typeof d=="string"&&(a[s][d]=u)}),a[s][l]=u}),a}}])})(),kt=[],X={},B={},Ti=Object.keys(B);function zi(e,t){var a=t.mixoutsTo;return kt=e,X={},Object.keys(B).forEach(function(n){Ti.indexOf(n)===-1&&delete B[n]}),kt.forEach(function(n){var r=n.mixout?n.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(a[o]=r[o]),he(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){a[o]||(a[o]={}),a[o][s]=r[o][s]})}),n.hooks){var i=n.hooks();Object.keys(i).forEach(function(o){X[o]||(X[o]=[]),X[o].push(i[o])})}n.provides&&n.provides(B)}),a}function De(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];var i=X[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(n))}),t}function Y(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];var r=X[e]||[];r.forEach(function(i){i.apply(null,a)})}function R(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return B[e]?B[e].apply(null,t):void 0}function Re(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,a=e.prefix||D();if(t)return t=W(a,t)||t,bt($a.definitions,a,t)||bt(E.styles,a,t)}var $a=new _i,$i=function(){p.autoReplaceSvg=!1,p.observeMutations=!1,Y("noAuto")},Di={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return z?(Y("beforeI2svg",t),R("pseudoElements2svg",t),R("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot;p.autoReplaceSvg===!1&&(p.autoReplaceSvg=!0),p.observeMutations=!0,Si(function(){Wi({autoReplaceSvgRoot:a}),Y("watch",t)})}},Ri={icon:function(t){if(t===null)return null;if(he(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:W(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var a=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=xe(t[0]);return{prefix:n,iconName:W(n,a)||a}}if(typeof t=="string"&&(t.indexOf("".concat(p.cssPrefix,"-"))>-1||t.match(oi))){var r=we(t.split(" "),{skipLookups:!0});return{prefix:r.prefix||D(),iconName:W(r.prefix,r.iconName)||r.iconName}}if(typeof t=="string"){var i=D();return{prefix:i,iconName:W(i,t)||t}}}},P={noAuto:$i,config:p,dom:Di,parse:Ri,library:$a,findIconDefinition:Re,toHtml:se},Wi=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot,n=a===void 0?w:a;(Object.keys(E.styles).length>0||p.autoFetchSvg)&&z&&p.autoReplaceSvg&&P.dom.i2svg({node:n})};function Se(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(n){return se(n)})}}),Object.defineProperty(e,"node",{get:function(){if(z){var n=w.createElement("div");return n.innerHTML=e.html,n.children}}}),e}function Ui(e){var t=e.children,a=e.main,n=e.mask,r=e.attributes,i=e.styles,o=e.transform;if(et(o)&&a.found&&!n.found){var s=a.width,l=a.height,u={x:s/l/2,y:.5};r.style=be(c(c({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function Yi(e){var t=e.prefix,a=e.iconName,n=e.children,r=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(p.cssPrefix,"-").concat(a):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:c(c({},r),{},{id:o}),children:n}]}]}function Hi(e){var t=["aria-label","aria-labelledby","title","role"];return t.some(function(a){return a in e})}function nt(e){var t=e.icons,a=t.main,n=t.mask,r=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.maskId,u=e.extra,m=e.watchable,d=m===void 0?!1:m,h=n.found?n:a,v=h.width,x=h.height,b=[p.replacementClass,i?"".concat(p.cssPrefix,"-").concat(i):""].filter(function(y){return u.classes.indexOf(y)===-1}).filter(function(y){return y!==""||!!y}).concat(u.classes).join(" "),S={children:[],attributes:c(c({},u.attributes),{},{"data-prefix":r,"data-icon":i,class:b,role:u.attributes.role||"img",viewBox:"0 0 ".concat(v," ").concat(x)})};!Hi(u.attributes)&&!u.attributes["aria-hidden"]&&(S.attributes["aria-hidden"]="true"),d&&(S.attributes[U]="");var k=c(c({},S),{},{prefix:r,iconName:i,main:a,mask:n,maskId:l,transform:o,symbol:s,styles:c({},u.styles)}),A=n.found&&a.found?R("generateAbstractMask",k)||{children:[],attributes:{}}:R("generateAbstractIcon",k)||{children:[],attributes:{}},j=A.children,O=A.attributes;return k.children=j,k.attributes=O,s?Yi(k):Ui(k)}function At(e){var t=e.content,a=e.width,n=e.height,r=e.transform,i=e.extra,o=e.watchable,s=o===void 0?!1:o,l=c(c({},i.attributes),{},{class:i.classes.join(" ")});s&&(l[U]="");var u=c({},i.styles);et(r)&&(u.transform=bi({transform:r,width:a,height:n}),u["-webkit-transform"]=u.transform);var m=be(u);m.length>0&&(l.style=m);var d=[];return d.push({tag:"span",attributes:l,children:[t]}),d}function Gi(e){var t=e.content,a=e.extra,n=c(c({},a.attributes),{},{class:a.classes.join(" ")}),r=be(a.styles);r.length>0&&(n.style=r);var i=[];return i.push({tag:"span",attributes:n,children:[t]}),i}var Ee=E.styles;function We(e){var t=e[0],a=e[1],n=e.slice(4),r=ye(n,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(p.cssPrefix,"-").concat(Ne.GROUP)},children:[{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(Ne.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(Ne.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:a,icon:o}}var Xi={found:!1,width:512,height:512};function Bi(e,t){!xa&&!p.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Ue(e,t){var a=t;return t==="fa"&&p.styleDefault!==null&&(t=D()),new Promise(function(n,r){if(a==="fa"){var i=Ta(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Ee[t]&&Ee[t][e]){var o=Ee[t][e];return n(We(o))}Bi(e,t),n(c(c({},Xi),{},{icon:p.showMissingIcons&&e?R("missingIconAbstract")||{}:{}}))})}var jt=function(){},Ye=p.measurePerformance&&ce&&ce.mark&&ce.measure?ce:{mark:jt,measure:jt},ee='FA "7.2.0"',Vi=function(t){return Ye.mark("".concat(ee," ").concat(t," begins")),function(){return Da(t)}},Da=function(t){Ye.mark("".concat(ee," ").concat(t," ends")),Ye.measure("".concat(ee," ").concat(t),"".concat(ee," ").concat(t," begins"),"".concat(ee," ").concat(t," ends"))},rt={begin:Vi,end:Da},me=function(){};function Nt(e){var t=e.getAttribute?e.getAttribute(U):null;return typeof t=="string"}function Ji(e){var t=e.getAttribute?e.getAttribute(Ke):null,a=e.getAttribute?e.getAttribute(qe):null;return t&&a}function Ki(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(p.replacementClass)}function qi(){if(p.autoReplaceSvg===!0)return pe.replace;var e=pe[p.autoReplaceSvg];return e||pe.replace}function Zi(e){return w.createElementNS("http://www.w3.org/2000/svg",e)}function Qi(e){return w.createElement(e)}function Ra(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.ceFn,n=a===void 0?e.tag==="svg"?Zi:Qi:a;if(typeof e=="string")return w.createTextNode(e);var r=n(e.tag);Object.keys(e.attributes||[]).forEach(function(o){r.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){r.appendChild(Ra(o,{ceFn:n}))}),r}function eo(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var pe={replace:function(t){var a=t[0];if(a.parentNode)if(t[1].forEach(function(r){a.parentNode.insertBefore(Ra(r),a)}),a.getAttribute(U)===null&&p.keepOriginalSource){var n=w.createComment(eo(a));a.parentNode.replaceChild(n,a)}else a.remove()},nest:function(t){var a=t[0],n=t[1];if(~Qe(a).indexOf(p.replacementClass))return pe.replace(t);var r=new RegExp("".concat(p.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(" ").reduce(function(s,l){return l===p.replacementClass||l.match(r)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",i.toNode.join(" "))}var o=n.map(function(s){return se(s)}).join(`
`);a.setAttribute(U,""),a.innerHTML=o}};function It(e){e()}function Wa(e,t){var a=typeof t=="function"?t:me;if(e.length===0)a();else{var n=It;p.mutateApproach===ni&&(n=$.requestAnimationFrame||It),n(function(){var r=qi(),i=rt.begin("mutate");e.map(r),i(),a()})}}var it=!1;function Ua(){it=!0}function He(){it=!1}var ge=null;function Pt(e){if(dt&&p.observeMutations){var t=e.treeCallback,a=t===void 0?me:t,n=e.nodeCallback,r=n===void 0?me:n,i=e.pseudoElementsCallback,o=i===void 0?me:i,s=e.observeMutationsRoot,l=s===void 0?w:s;ge=new dt(function(u){if(!it){var m=D();K(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!Nt(d.addedNodes[0])&&(p.searchPseudoElements&&o(d.target),a(d.target)),d.type==="attributes"&&d.target.parentNode&&p.searchPseudoElements&&o([d.target],!0),d.type==="attributes"&&Nt(d.target)&&~fi.indexOf(d.attributeName))if(d.attributeName==="class"&&Ji(d.target)){var h=we(Qe(d.target)),v=h.prefix,x=h.iconName;d.target.setAttribute(Ke,v||m),x&&d.target.setAttribute(qe,x)}else Ki(d.target)&&r(d.target)})}}),z&&ge.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function to(){ge&&ge.disconnect()}function ao(e){var t=e.getAttribute("style"),a=[];return t&&(a=t.split(";").reduce(function(n,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(n[o]=s.join(":").trim()),n},{})),a}function no(e){var t=e.getAttribute("data-prefix"),a=e.getAttribute("data-icon"),n=e.innerText!==void 0?e.innerText.trim():"",r=we(Qe(e));return r.prefix||(r.prefix=D()),t&&a&&(r.prefix=t,r.iconName=a),r.iconName&&r.prefix||(r.prefix&&n.length>0&&(r.iconName=Ii(r.prefix,e.innerText)||at(r.prefix,Pa(e.innerText))),!r.iconName&&p.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function ro(e){var t=K(e.attributes).reduce(function(a,n){return a.name!=="class"&&a.name!=="style"&&(a[n.name]=n.value),a},{});return t}function io(){return{iconName:null,prefix:null,transform:C,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Et(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=no(e),n=a.iconName,r=a.prefix,i=a.rest,o=ro(e),s=De("parseNodeAttributes",{},e),l=t.styleParser?ao(e):[];return c({iconName:n,prefix:r,transform:C,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var oo=E.styles;function Ya(e){var t=p.autoReplaceSvg==="nest"?Et(e,{styleParser:!1}):Et(e);return~t.extra.classes.indexOf(Sa)?R("generateLayersText",e,t):R("generateSvgReplacementMutation",e,t)}function so(){return[].concat(F(pa),F(ha))}function Ft(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!z)return Promise.resolve();var a=w.documentElement.classList,n=function(d){return a.add("".concat(ht,"-").concat(d))},r=function(d){return a.remove("".concat(ht,"-").concat(d))},i=p.autoFetchSvg?so():Jt.concat(Object.keys(oo));i.includes("fa")||i.push("fa");var o=[".".concat(Sa,":not([").concat(U,"])")].concat(i.map(function(m){return".".concat(m,":not([").concat(U,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=K(e.querySelectorAll(o))}catch{}if(s.length>0)n("pending"),r("complete");else return Promise.resolve();var l=rt.begin("onTree"),u=s.reduce(function(m,d){try{var h=Ya(d);h&&m.push(h)}catch(v){xa||v.name==="MissingIcon"&&console.error(v)}return m},[]);return new Promise(function(m,d){Promise.all(u).then(function(h){Wa(h,function(){n("active"),n("complete"),r("pending"),typeof t=="function"&&t(),l(),m()})}).catch(function(h){l(),d(h)})})}function lo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ya(e).then(function(a){a&&Wa([a],t)})}function fo(e){return function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=(t||{}).icon?t:Re(t||{}),r=a.mask;return r&&(r=(r||{}).icon?r:Re(r||{})),e(n,c(c({},a),{},{mask:r}))}}var co=function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.transform,r=n===void 0?C:n,i=a.symbol,o=i===void 0?!1:i,s=a.mask,l=s===void 0?null:s,u=a.maskId,m=u===void 0?null:u,d=a.classes,h=d===void 0?[]:d,v=a.attributes,x=v===void 0?{}:v,b=a.styles,S=b===void 0?{}:b;if(t){var k=t.prefix,A=t.iconName,j=t.icon;return Se(c({type:"icon"},t),function(){return Y("beforeDOMElementCreation",{iconDefinition:t,params:a}),nt({icons:{main:We(j),mask:l?We(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:k,iconName:A,transform:c(c({},C),r),symbol:o,maskId:m,extra:{attributes:x,styles:S,classes:h}})})}},uo={mixout:function(){return{icon:fo(co)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=Ft,a.nodeCallback=lo,a}}},provides:function(t){t.i2svg=function(a){var n=a.node,r=n===void 0?w:n,i=a.callback,o=i===void 0?function(){}:i;return Ft(r,o)},t.generateSvgReplacementMutation=function(a,n){var r=n.iconName,i=n.prefix,o=n.transform,s=n.symbol,l=n.mask,u=n.maskId,m=n.extra;return new Promise(function(d,h){Promise.all([Ue(r,i),l.iconName?Ue(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(v){var x=ye(v,2),b=x[0],S=x[1];d([a,nt({icons:{main:b,mask:S},prefix:i,iconName:r,transform:o,symbol:s,maskId:u,extra:m,watchable:!0})])}).catch(h)})},t.generateAbstractIcon=function(a){var n=a.children,r=a.attributes,i=a.main,o=a.transform,s=a.styles,l=be(s);l.length>0&&(r.style=l);var u;return et(o)&&(u=R("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),n.push(u||i.icon),{children:n,attributes:r}}}},mo={mixout:function(){return{layer:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.classes,i=r===void 0?[]:r;return Se({type:"layer"},function(){Y("beforeDOMElementCreation",{assembler:a,params:n});var o=[];return a(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(p.cssPrefix,"-layers")].concat(F(i)).join(" ")},children:o}]})}}}},po={mixout:function(){return{counter:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};n.title;var r=n.classes,i=r===void 0?[]:r,o=n.attributes,s=o===void 0?{}:o,l=n.styles,u=l===void 0?{}:l;return Se({type:"counter",content:a},function(){return Y("beforeDOMElementCreation",{content:a,params:n}),Gi({content:a.toString(),extra:{attributes:s,styles:u,classes:["".concat(p.cssPrefix,"-layers-counter")].concat(F(i))}})})}}}},ho={mixout:function(){return{text:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?C:r,o=n.classes,s=o===void 0?[]:o,l=n.attributes,u=l===void 0?{}:l,m=n.styles,d=m===void 0?{}:m;return Se({type:"text",content:a},function(){return Y("beforeDOMElementCreation",{content:a,params:n}),At({content:a,transform:c(c({},C),i),extra:{attributes:u,styles:d,classes:["".concat(p.cssPrefix,"-layers-text")].concat(F(s))}})})}}},provides:function(t){t.generateLayersText=function(a,n){var r=n.transform,i=n.extra,o=null,s=null;if(Bt){var l=parseInt(getComputedStyle(a).fontSize,10),u=a.getBoundingClientRect();o=u.width/l,s=u.height/l}return Promise.resolve([a,At({content:a.innerHTML,width:o,height:s,transform:r,extra:i,watchable:!0})])}}},Ha=new RegExp('"',"ug"),Ct=[1105920,1112319],Ot=c(c(c(c({},{FontAwesome:{normal:"fas",400:"fas"}}),Vn),ti),nr),Ge=Object.keys(Ot).reduce(function(e,t){return e[t.toLowerCase()]=Ot[t],e},{}),vo=Object.keys(Ge).reduce(function(e,t){var a=Ge[t];return e[t]=a[900]||F(Object.entries(a))[0][1],e},{});function go(e){var t=e.replace(Ha,"");return Pa(F(t)[0]||"")}function yo(e){var t=e.getPropertyValue("font-feature-settings").includes("ss01"),a=e.getPropertyValue("content"),n=a.replace(Ha,""),r=n.codePointAt(0),i=r>=Ct[0]&&r<=Ct[1],o=n.length===2?n[0]===n[1]:!1;return i||o||t}function bo(e,t){var a=e.replace(/^['"]|['"]$/g,"").toLowerCase(),n=parseInt(t),r=isNaN(n)?"normal":n;return(Ge[a]||{})[r]||vo[a]}function Mt(e,t){var a="".concat(ai).concat(t.replace(":","-"));return new Promise(function(n,r){if(e.getAttribute(a)!==null)return n();var i=K(e.children),o=i.filter(function(le){return le.getAttribute(Le)===t})[0],s=$.getComputedStyle(e,t),l=s.getPropertyValue("font-family"),u=l.match(si),m=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!u)return e.removeChild(o),n();if(u&&d!=="none"&&d!==""){var h=s.getPropertyValue("content"),v=bo(l,m),x=go(h),b=u[0].startsWith("FontAwesome"),S=yo(s),k=at(v,x),A=k;if(b){var j=Pi(x);j.iconName&&j.prefix&&(k=j.iconName,v=j.prefix)}if(k&&!S&&(!o||o.getAttribute(Ke)!==v||o.getAttribute(qe)!==A)){e.setAttribute(a,A),o&&e.removeChild(o);var O=io(),y=O.extra;y.attributes[Le]=t,Ue(k,v).then(function(le){var Ka=nt(c(c({},O),{},{icons:{main:le,mask:za()},prefix:v,iconName:A,extra:y,watchable:!0})),ke=w.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(ke,e.firstChild):e.appendChild(ke),ke.outerHTML=Ka.map(function(qa){return se(qa)}).join(`
`),e.removeAttribute(a),n()}).catch(r)}else n()}else n()})}function xo(e){return Promise.all([Mt(e,"::before"),Mt(e,"::after")])}function wo(e){return e.parentNode!==document.head&&!~ri.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Le)&&(!e.parentNode||e.parentNode.tagName!=="svg")}var So=function(t){return!!t&&ba.some(function(a){return t.includes(a)})},ko=function(t){if(!t)return[];var a=new Set,n=t.split(/,(?![^()]*\))/).map(function(l){return l.trim()});n=n.flatMap(function(l){return l.includes("(")?l:l.split(",").map(function(u){return u.trim()})});var r=de(n),i;try{for(r.s();!(i=r.n()).done;){var o=i.value;if(So(o)){var s=ba.reduce(function(l,u){return l.replace(u,"")},o);s!==""&&s!=="*"&&a.add(s)}}}catch(l){r.e(l)}finally{r.f()}return a};function Lt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(z){var a;if(t)a=e;else if(p.searchPseudoElementsFullScan)a=e.querySelectorAll("*");else{var n=new Set,r=de(document.styleSheets),i;try{for(r.s();!(i=r.n()).done;){var o=i.value;try{var s=de(o.cssRules),l;try{for(s.s();!(l=s.n()).done;){var u=l.value,m=ko(u.selectorText),d=de(m),h;try{for(d.s();!(h=d.n()).done;){var v=h.value;n.add(v)}}catch(b){d.e(b)}finally{d.f()}}}catch(b){s.e(b)}finally{s.f()}}catch(b){p.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(o.href," (").concat(b.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(b){r.e(b)}finally{r.f()}if(!n.size)return;var x=Array.from(n).join(", ");try{a=e.querySelectorAll(x)}catch{}}return new Promise(function(b,S){var k=K(a).filter(wo).map(xo),A=rt.begin("searchPseudoElements");Ua(),Promise.all(k).then(function(){A(),He(),b()}).catch(function(){A(),He(),S()})})}}var Ao={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=Lt,a}}},provides:function(t){t.pseudoElements2svg=function(a){var n=a.node,r=n===void 0?w:n;p.searchPseudoElements&&Lt(r)}}},_t=!1,jo={mixout:function(){return{dom:{unwatch:function(){Ua(),_t=!0}}}},hooks:function(){return{bootstrap:function(){Pt(De("mutationObserverCallbacks",{}))},noAuto:function(){to()},watch:function(a){var n=a.observeMutationsRoot;_t?He():Pt(De("mutationObserverCallbacks",{observeMutationsRoot:n}))}}}},Tt=function(t){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(n,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return n.flipX=!0,n;if(o&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(o){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},a)},No={mixout:function(){return{parse:{transform:function(a){return Tt(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,n){var r=n.getAttribute("data-fa-transform");return r&&(a.transform=Tt(r)),a}}},provides:function(t){t.generateAbstractTransformGrouping=function(a){var n=a.main,r=a.transform,i=a.containerWidth,o=a.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),m="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(m)},h={transform:"translate(".concat(o/2*-1," -256)")},v={outer:s,inner:d,path:h};return{tag:"g",attributes:c({},v.outer),children:[{tag:"g",attributes:c({},v.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:c(c({},n.icon.attributes),v.path)}]}]}}}},Fe={x:0,y:0,width:"100%",height:"100%"};function zt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Io(e){return e.tag==="g"?e.children:[e]}var Po={hooks:function(){return{parseNodeAttributes:function(a,n){var r=n.getAttribute("data-fa-mask"),i=r?we(r.split(" ").map(function(o){return o.trim()})):za();return i.prefix||(i.prefix=D()),a.mask=i,a.maskId=n.getAttribute("data-fa-mask-id"),a}}},provides:function(t){t.generateAbstractMask=function(a){var n=a.children,r=a.attributes,i=a.main,o=a.mask,s=a.maskId,l=a.transform,u=i.width,m=i.icon,d=o.width,h=o.icon,v=yi({transform:l,containerWidth:d,iconWidth:u}),x={tag:"rect",attributes:c(c({},Fe),{},{fill:"white"})},b=m.children?{children:m.children.map(zt)}:{},S={tag:"g",attributes:c({},v.inner),children:[zt(c({tag:m.tag,attributes:c(c({},m.attributes),v.path)},b))]},k={tag:"g",attributes:c({},v.outer),children:[S]},A="mask-".concat(s||gt()),j="clip-".concat(s||gt()),O={tag:"mask",attributes:c(c({},Fe),{},{id:A,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[x,k]},y={tag:"defs",children:[{tag:"clipPath",attributes:{id:j},children:Io(h)},O]};return n.push(y,{tag:"rect",attributes:c({fill:"currentColor","clip-path":"url(#".concat(j,")"),mask:"url(#".concat(A,")")},Fe)}),{children:n,attributes:r}}}},Eo={provides:function(t){var a=!1;$.matchMedia&&(a=$.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:c(c({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=c(c({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:c(c({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||s.children.push({tag:"animate",attributes:c(c({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:c(c({},o),{},{values:"1;0;1;1;0;1;"})}),n.push(s),n.push({tag:"path",attributes:c(c({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:c(c({},o),{},{values:"1;0;0;0;0;1;"})}]}),a||n.push({tag:"path",attributes:c(c({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:c(c({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Fo={hooks:function(){return{parseNodeAttributes:function(a,n){var r=n.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return a.symbol=i,a}}}},Co=[wi,uo,mo,po,ho,Ao,jo,No,Po,Eo,Fo];zi(Co,{mixoutsTo:P});P.noAuto;var J=P.config;P.library;P.dom;var Ga=P.parse;P.findIconDefinition;P.toHtml;var Oo=P.icon;P.layer;P.text;P.counter;function Mo(e){return e=e-0,e===e}function Xa(e){return Mo(e)?e:(e=e.replace(/[_-]+(.)?/g,(t,a)=>a?a.toUpperCase():""),e.charAt(0).toLowerCase()+e.slice(1))}var Lo=(e,t)=>Be.createElement("stop",{key:`${t}-${e.offset}`,offset:e.offset,stopColor:e.color,...e.opacity!==void 0&&{stopOpacity:e.opacity}});function _o(e){return e.charAt(0).toUpperCase()+e.slice(1)}var G=new Map,To=1e3;function zo(e){if(G.has(e))return G.get(e);const t={};let a=0;const n=e.length;for(;a<n;){const r=e.indexOf(";",a),i=r===-1?n:r,o=e.slice(a,i).trim();if(o){const s=o.indexOf(":");if(s>0){const l=o.slice(0,s).trim(),u=o.slice(s+1).trim();if(l&&u){const m=Xa(l);t[m.startsWith("webkit")?_o(m):m]=u}}}a=i+1}if(G.size===To){const r=G.keys().next().value;r&&G.delete(r)}return G.set(e,t),t}function Ba(e,t,a={}){if(typeof t=="string")return t;const n=(t.children||[]).map(d=>{let h=d;return("fill"in a||a.gradientFill)&&d.tag==="path"&&"fill"in d.attributes&&(h={...d,attributes:{...d.attributes,fill:void 0}}),Ba(e,h)}),r=t.attributes||{},i={};for(const[d,h]of Object.entries(r))switch(!0){case d==="class":{i.className=h;break}case d==="style":{i.style=zo(String(h));break}case d.startsWith("aria-"):case d.startsWith("data-"):{i[d.toLowerCase()]=h;break}default:i[Xa(d)]=h}const{style:o,role:s,"aria-label":l,gradientFill:u,...m}=a;if(o&&(i.style=i.style?{...i.style,...o}:o),s&&(i.role=s),l&&(i["aria-label"]=l,i["aria-hidden"]="false"),u){i.fill=`url(#${u.id})`;const{type:d,stops:h=[],...v}=u;n.unshift(e(d==="linear"?"linearGradient":"radialGradient",{...v,id:u.id},h.map(Lo)))}return e(t.tag,{...i,...m},...n)}var $o=Ba.bind(null,Be.createElement),$t=(e,t)=>{const a=Za.useId();return e||(t?a:void 0)},Do=class{constructor(e="react-fontawesome"){this.enabled=!1;let t=!1;try{t=typeof process<"u"&&!1}catch{}this.scope=e,this.enabled=t}log(...e){this.enabled&&console.log(`[${this.scope}]`,...e)}warn(...e){this.enabled&&console.warn(`[${this.scope}]`,...e)}error(...e){this.enabled&&console.error(`[${this.scope}]`,...e)}},Ro="searchPseudoElementsFullScan"in J&&typeof J.searchPseudoElementsFullScan=="boolean"?"7.0.0":"6.0.0",Wo=Number.parseInt(Ro)>=7,Uo=()=>Wo,ne="fa",M={beat:"fa-beat",fade:"fa-fade",beatFade:"fa-beat-fade",bounce:"fa-bounce",shake:"fa-shake",spin:"fa-spin",spinPulse:"fa-spin-pulse",spinReverse:"fa-spin-reverse",pulse:"fa-pulse"},Yo={left:"fa-pull-left",right:"fa-pull-right"},Ho={90:"fa-rotate-90",180:"fa-rotate-180",270:"fa-rotate-270"},Go={"2xs":"fa-2xs",xs:"fa-xs",sm:"fa-sm",lg:"fa-lg",xl:"fa-xl","2xl":"fa-2xl","1x":"fa-1x","2x":"fa-2x","3x":"fa-3x","4x":"fa-4x","5x":"fa-5x","6x":"fa-6x","7x":"fa-7x","8x":"fa-8x","9x":"fa-9x","10x":"fa-10x"},L={border:"fa-border",fixedWidth:"fa-fw",flip:"fa-flip",flipHorizontal:"fa-flip-horizontal",flipVertical:"fa-flip-vertical",inverse:"fa-inverse",rotateBy:"fa-rotate-by",swapOpacity:"fa-swap-opacity",widthAuto:"fa-width-auto"};function Xo(e){const t=J.cssPrefix||J.familyPrefix||ne;return t===ne?e:e.replace(new RegExp(String.raw`(?<=^|\s)${ne}-`,"g"),`${t}-`)}function Bo(e){const{beat:t,fade:a,beatFade:n,bounce:r,shake:i,spin:o,spinPulse:s,spinReverse:l,pulse:u,fixedWidth:m,inverse:d,border:h,flip:v,size:x,rotation:b,pull:S,swapOpacity:k,rotateBy:A,widthAuto:j,className:O}=e,y=[];return O&&y.push(...O.split(" ")),t&&y.push(M.beat),a&&y.push(M.fade),n&&y.push(M.beatFade),r&&y.push(M.bounce),i&&y.push(M.shake),o&&y.push(M.spin),l&&y.push(M.spinReverse),s&&y.push(M.spinPulse),u&&y.push(M.pulse),m&&y.push(L.fixedWidth),d&&y.push(L.inverse),h&&y.push(L.border),v===!0&&y.push(L.flip),(v==="horizontal"||v==="both")&&y.push(L.flipHorizontal),(v==="vertical"||v==="both")&&y.push(L.flipVertical),x!=null&&y.push(Go[x]),b!=null&&b!==0&&y.push(Ho[b]),S!=null&&y.push(Yo[S]),k&&y.push(L.swapOpacity),Uo()?(A&&y.push(L.rotateBy),j&&y.push(L.widthAuto),(J.cssPrefix||J.familyPrefix||ne)===ne?y:y.map(Xo)):y}var Vo=e=>typeof e=="object"&&"icon"in e&&!!e.icon;function Dt(e){if(e)return Vo(e)?e:Ga.icon(e)}function Jo(e){return Object.keys(e)}var Rt=new Do("FontAwesomeIcon"),Va={border:!1,className:"",mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1},Ko=new Set(Object.keys(Va)),Ja=Be.forwardRef((e,t)=>{const a={...Va,...e},{icon:n,mask:r,symbol:i,title:o,titleId:s,maskId:l,transform:u}=a,m=$t(l,!!r),d=$t(s,!!o),h=Dt(n);if(!h)return Rt.error("Icon lookup is undefined",n),null;const v=Bo(a),x=typeof u=="string"?Ga.transform(u):u,b=Dt(r),S=Oo(h,{...v.length>0&&{classes:v},...x&&{transform:x},...b&&{mask:b},symbol:i,title:o,titleId:d,maskId:m});if(!S)return Rt.error("Could not find icon",h),null;const{abstract:k}=S,A={ref:t};for(const j of Jo(a))Ko.has(j)||(A[j]=a[j]);return $o(k[0],A)});Ja.displayName="FontAwesomeIcon";var qo={prefix:"fab",iconName:"shopify",icon:[448,512,[],"e057","M388.5 104.1c-.2-1.1-.7-2.1-1.5-2.8s-1.8-1.2-2.9-1.2c-2 0-37.2-.8-37.2-.8s-21.6-20.8-29.6-28.8l0 432.7 125.7-31.2s-54-365.5-54.4-367.9zM288.9 70.5c-1.9-6.1-4.3-11.9-7.2-17.6-10.4-20-26-30.9-44.4-30.9-1.3 0-2.7 .1-4 .4-.4-.8-1.2-1.2-1.6-2-8-8.8-18.4-12.8-30.8-12.4-24 .8-48 18-67.2 48.8-13.6 21.6-24 48.8-26.8 70.1-27.6 8.4-46.8 14.4-47.2 14.8-14 4.4-14.4 4.8-16 18-1.2 10-38 291.8-38 291.8l302.6 52.5 0-438.3c-1.5 .1-2.9 .2-4.4 .4 0 0-5.6 1.6-14.8 4.4zM233.6 87.7c-16 4.8-33.6 10.4-50.8 15.6 4.8-18.8 14.4-37.6 25.6-50 4.4-4.4 10.4-9.6 17.2-12.8 6.8 14.4 8.4 34 8 47.2zM200.8 24.4c5-.2 10 1.1 14.4 3.6-6.4 3.2-12.8 8.4-18.8 14.4-15.2 16.4-26.8 42-31.6 66.5-14.4 4.4-28.8 8.8-42 12.8 8.8-38.4 41.2-96.4 78-97.2zM154.4 244.6c1.6 25.6 69.2 31.2 73.2 91.7 2.8 47.6-25.2 80.1-65.6 82.5-48.8 3.2-75.6-25.6-75.6-25.6l10.4-44s26.8 20.4 48.4 18.8c14-.8 19.2-12.4 18.8-20.4-2-33.6-57.2-31.6-60.8-86.9-3.2-46.4 27.2-93.3 94.5-97.7 26-1.6 39.2 4.8 39.2 4.8l-15.2 57.6s-17.2-8-37.6-6.4c-29.6 2-30 20.8-29.6 25.6zM249.6 82.9c0-12-1.6-29.2-7.2-43.6 18.4 3.6 27.2 24 31.2 36.4-7.2 2-15.2 4.4-24 7.2z"]},Zo={prefix:"fab",iconName:"laravel",icon:[512,512,[],"f3bd","M504.6 115.8c-.1-.2-.2-.5-.3-.7-.1-.4-.3-.8-.5-1.2-.2-.2-.3-.5-.5-.7-.2-.3-.5-.6-.7-.9-.2-.2-.5-.4-.8-.6-.3-.2-.6-.5-.9-.7L404.6 55.5c-1.2-.7-2.6-1.1-4-1.1s-2.8 .4-4 1.1L300.3 111c-.3 .2-.6 .4-.9 .7-.3 .2-.5 .4-.8 .6-.3 .3-.5 .6-.7 .9-.2 .2-.4 .4-.5 .7-.2 .4-.4 .8-.5 1.2-.1 .2-.2 .4-.3 .7-.2 .7-.3 1.4-.3 2.1l0 105.2-80.2 46.2 0-205.9c0-.7-.1-1.4-.3-2.1-.1-.2-.2-.4-.3-.7-.1-.4-.3-.8-.5-1.2-.1-.3-.4-.5-.5-.7-.2-.3-.5-.6-.7-.9-.2-.2-.5-.4-.8-.6-.3-.2-.6-.5-.9-.7L115.8 1.1c-1.2-.7-2.6-1.1-4-1.1s-2.8 .4-4 1.1L11.5 56.5c-.3 .2-.6 .4-.9 .7-.3 .2-.5 .4-.8 .6-.3 .3-.5 .6-.7 .9-.2 .3-.4 .5-.6 .7-.2 .4-.4 .8-.5 1.2-.1 .2-.2 .4-.3 .7-.2 .7-.3 1.4-.3 2.1l0 329.7c0 1.4 .4 2.8 1.1 4s1.7 2.2 2.9 2.9L204 510.9c.4 .2 .9 .4 1.3 .5 .2 .1 .4 .2 .6 .3 1.3 .4 2.8 .4 4.1 0 .2-.1 .4-.2 .6-.2 .5-.2 1-.3 1.4-.6L404.6 400.1c1.2-.7 2.2-1.7 2.9-2.9s1.1-2.6 1.1-4l0-105.3 92.2-53.1c1.2-.7 2.2-1.7 2.9-3s1.1-2.6 1.1-4l0-109.8c0-.7-.1-1.4-.2-2.1zM111.8 17.3l80.2 46.1-80.2 46.2-80.2-46.2 80.2-46.2zm88.2 60l0 201.3c-33.2 19.1-59.9 34.5-80.2 46.2l0-201.3C153 104.4 179.7 89 200 77.3zm0 412.8L23.5 388.5 23.5 77.3c20.3 11.7 47.1 27.1 80.2 46.2l0 215.2c0 .3 .1 .6 .1 .9 0 .4 .1 .8 .2 1.2 .1 .3 .2 .6 .4 .9 .1 .3 .3 .7 .4 1 .2 .3 .4 .5 .6 .8 .2 .3 .4 .6 .7 .8 .2 .2 .5 .4 .8 .6 .3 .2 .6 .5 .9 .7l92.2 52.2 .1 92.4zm8-106.2L128 338.6c54.7-31.5 113.5-65.3 176.3-101.5l80.1 46.1C355 300 296.2 333.5 208 383.9zm184.5 4.6l-176.5 101.6 0-92.3C317.4 340 376.2 306.4 392.5 297l0 91.4zm0-119.1c-20.3-11.6-47.1-27-80.2-46.1l0-91.4c20.3 11.7 47.1 27.1 80.2 46.2l0 91.3zm8-105.3l-80.2-46.2 80.2-46.2 80.2 46.1-80.2 46.2zm8 105.3l0-91.3c33.2-19.1 60-34.5 80.3-46.2l0 91.4-80.3 46.2z"]},Qo={prefix:"fab",iconName:"git-alt",icon:[448,512,[],"f841","M439.6 236.1L244 40.5C238.6 35 231.2 32 223.6 32s-15 3-20.4 8.4l-40.7 40.6 51.5 51.5c27.1-9.1 52.7 16.8 43.4 43.7l49.7 49.7c34.2-11.8 61.2 31 35.5 56.7-26.5 26.5-70.2-2.9-56-37.3l-46.3-46.3 0 121.9c25.3 12.5 22.3 41.8 9.1 55-6.4 6.4-15.2 10.1-24.3 10.1s-17.8-3.6-24.3-10.1c-17.6-17.6-11.1-46.9 11.2-56l0-123c-20.8-8.5-24.6-30.7-18.6-45L142.6 101 8.5 235.1C3 240.6 0 247.9 0 255.5s3 15 8.5 20.4L204.1 471.6c5.4 5.4 12.7 8.4 20.4 8.4s15-3 20.4-8.4L439.6 276.9c5.4-5.4 8.4-12.8 8.4-20.4s-3-15-8.4-20.4z"]},es={prefix:"fab",iconName:"react",icon:[512,512,[],"f41b","M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1 .9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2 .6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9-53.4 18.5-91.7 47.7-91.7 77.9 0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zM136.9 187.2c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zM115.7 320.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6 .4 19.5 .6 29.5 .6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8 .9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zM256 301.8a45.8 45.8 0 1 0 0-91.6 45.8 45.8 0 1 0 0 91.6z"]},ts={prefix:"fab",iconName:"js",icon:[448,512,[],"f3b8","M0 32l0 448 448 0 0-448-448 0zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5L152 385.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5l0-143.1 42.1 0 0 143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43L301 382.1c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"]},as={prefix:"fab",iconName:"php",icon:[640,512,[],"f457","M320 104.5c171.4 0 303.2 72.2 303.2 151.5S491.3 407.5 320 407.5C148.6 407.5 16.8 335.3 16.8 256S148.7 104.5 320 104.5zm0-16.8C143.3 87.7 0 163 0 256S143.3 424.3 320 424.3 640 349 640 256 496.7 87.7 320 87.7zM218.2 242.5c-7.9 40.5-35.8 36.3-70.1 36.3l13.7-70.6c38 0 63.8-4.1 56.4 34.3zM97.4 350.3l36.7 0 8.7-44.8c41.1 0 66.6 3 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7l-70.7 0-32.7 168.7zM283.1 136.7l36.5 0-8.7 44.8c31.5 0 60.7-2.3 74.8 10.7 14.8 13.6 7.7 31-8.3 113.1l-37 0c15.4-79.4 18.3-86 12.7-92-5.4-5.8-17.7-4.6-47.4-4.6l-18.8 96.6-36.5 0 32.7-168.6zM505 242.5c-8 41.1-36.7 36.3-70.1 36.3l13.7-70.6c38.2 0 63.8-4.1 56.4 34.3zM384.2 350.3l36.8 0 8.7-44.8c43.2 0 67.1 2.5 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7l-70.7 0-32.8 168.7z"]},ns={prefix:"fab",iconName:"node-js",icon:[448,512,[],"f3d3","M224.5 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6 .4l47.4 28.1c1.7 1 4.1 1 5.7 0L412 367.5c1.7-1 2.8-3 2.8-5l0-213.2c0-2.1-1.1-4-2.9-5.1L227.3 37.7c-1.7-1-4-1-5.7 0L37.1 144.3c-1.8 1-2.9 3-2.9 5.1l0 213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7l0-210.4c0-3 2.4-5.3 5.4-5.3l23.4 0c2.9 0 5.4 2.3 5.4 5.3l0 210.5c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6L20.6 396.1c-12-6.9-19.4-19.8-19.4-33.7l0-213.1c0-13.8 7.4-26.8 19.4-33.7L205.1 9c11.7-6.6 27.2-6.6 38.8 0L428.6 115.7c12 6.9 19.4 19.8 19.4 33.7l0 213.1c0 13.8-7.4 26.7-19.4 33.7L243.9 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zM373.6 297.9c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8 .5 2.4 2.7 4.2 5.2 4.2l24 0c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5l-23.9 0c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z"]};var rs={prefix:"fas",iconName:"robot",icon:[640,512,[129302],"f544","M352 0c0-17.7-14.3-32-32-32S288-17.7 288 0l0 64-96 0c-53 0-96 43-96 96l0 224c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-224c0-53-43-96-96-96l-96 0 0-64zM160 368c0-13.3 10.7-24 24-24l32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0c-13.3 0-24-10.7-24-24zm120 0c0-13.3 10.7-24 24-24l32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0c-13.3 0-24-10.7-24-24zm120 0c0-13.3 10.7-24 24-24l32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0c-13.3 0-24-10.7-24-24zM224 176a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm144 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM64 224c0-17.7-14.3-32-32-32S0 206.3 0 224l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96zm544-32c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32z"]};const is={Frontend:f.jsx(Ut,{className:"w-8 h-8"}),Backend:f.jsx(ot,{className:"w-8 h-8"}),Mobile:f.jsx(un,{className:"w-8 h-8"}),Tools:f.jsx(fn,{className:"w-8 h-8"}),Automation:f.jsx(on,{className:"w-8 h-8"}),DevOps:f.jsx(st,{className:"w-8 h-8"}),Databases:f.jsx(ot,{className:"w-8 h-8"}),Frameworks:f.jsx(st,{className:"w-8 h-8"})},os=[{label:"Node.js",icon:ns,color:"#339933",delay:1},{label:"PHP",icon:as,color:"#777BB4",delay:3},{label:"React",icon:es,color:"#61DAFB",delay:4},{label:"Automation",icon:rs,color:"#D14334",delay:5},{label:"Shopify",icon:qo,color:"#95bf47",delay:6},{label:"Git",icon:Qo,color:"#D14334",delay:7},{label:"Laravel",icon:Zo,color:"#FF2D20",delay:2},{label:"JavaScript",icon:ts,color:"#F7DF1E",delay:0}],Wt=[{top:"-60px",left:"45%",translateX:"-50%"},{top:"20%",right:"-50px"},{top:"59%",right:"-65px",translateY:"-50%"},{bottom:"-10%",right:"-45px"},{bottom:"-50px",left:"35%",translateX:"-50%"},{bottom:"15%",left:"-40px"},{top:"35%",left:"-65px",translateY:"-50%"},{top:"-8%",left:"-65px"}];function ss({icon:e,label:t,color:a,delay:n,index:r}){const i=Wt[r%Wt.length];return f.jsx(I.div,{initial:{opacity:0,scale:0},animate:{opacity:1,scale:1},transition:{duration:.5,delay:n*.1},className:"absolute w-14 h-14  items-center justify-center hidden md:flex rounded-full",style:{top:i.top,bottom:i.bottom,left:i.left,right:i.right,transform:i.translateX&&i.translateY?`translate(${i.translateX}, ${i.translateY})`:i.translateX?`translateX(${i.translateX})`:i.translateY?`translateY(${i.translateY})`:void 0,zIndex:10},children:f.jsx(I.div,{animate:{y:[0,-12,0],x:[0,r%2===0?8:-8,0],rotate:[0,8,0]},transition:{duration:4+n*.3,repeat:1/0,ease:"easeInOut"},className:"flex items-center justify-center w-full h-full rounded-full glass border border-primary/30 shadow-elegant hover:shadow-glow transition-all hover:scale-110",style:{color:a},title:t,children:f.jsx(Ja,{fontSize:"1.5rem",icon:e,className:"w-6 h-6"})})})}function us(){const e=Qa();return f.jsxs(f.Fragment,{children:[f.jsxs("section",{className:"relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden",children:[f.jsx(en,{}),f.jsx("div",{className:"mx-auto max-w-6xl px-4",children:f.jsxs("div",{className:"grid lg:grid-cols-12 gap-10 lg:gap-12 items-center",children:[f.jsxs("div",{className:"lg:col-span-7",children:[f.jsxs(I.p,{initial:e?!1:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{duration:.6},className:"inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground",children:[f.jsx(mn,{className:"h-3.5 w-3.5 text-primary-glow"}),"Available for new projects"]}),f.jsxs(I.h1,{initial:e?!1:{opacity:0,y:18},animate:{opacity:1,y:0},transition:{duration:.7,delay:.05},className:"mt-5 text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05]",children:["Hi, I'm ",f.jsx("span",{className:"text-gradient",children:q.name}),".",f.jsx("br",{}),"I build software that just works."]}),f.jsxs(I.p,{initial:e?!1:{opacity:0,y:14},animate:{opacity:1,y:0},transition:{duration:.7,delay:.15},className:"mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground",children:[q.tagline," Specializing in Flutter, Node.js, Laravel and AI-powered workflow automations with Make.com & n8n."]}),f.jsxs(I.div,{initial:e?!1:{opacity:0,y:14},animate:{opacity:1,y:0},transition:{duration:.7,delay:.25},className:"mt-8 flex flex-wrap items-center gap-3",children:[f.jsxs(Z,{to:"/projects",className:"group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-95 transition",children:["View my work",f.jsx(fe,{className:"h-4 w-4 transition-transform group-hover:translate-x-0.5"})]}),f.jsxs(Z,{to:"/contact",className:"inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium hover:bg-accent/40 transition",children:[f.jsx(tn,{className:"h-4 w-4"}),"Get in touch"]}),f.jsxs("span",{className:"hidden sm:inline-flex items-center gap-1.5 text-xs text-muted-foreground ml-2",children:[f.jsx(sn,{className:"h-3.5 w-3.5"}),q.location]})]}),f.jsx(I.div,{initial:e?!1:{opacity:0,y:14},animate:{opacity:1,y:0},transition:{duration:.7,delay:.35},className:"mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3",children:q.stats.map(t=>f.jsxs("div",{className:"glass rounded-2xl px-4 py-3",children:[f.jsx("p",{className:"text-2xl font-display font-bold text-gradient",children:t.value}),f.jsx("p",{className:"text-xs text-muted-foreground mt-0.5",children:t.label})]},t.label))})]}),f.jsx(I.div,{initial:e?!1:{opacity:0,scale:.92},animate:{opacity:1,scale:1},transition:{duration:.9,ease:[.22,1,.36,1]},className:"lg:col-span-5 relative mx-auto",children:f.jsxs("div",{className:"relative w-[280px] sm:w-[340px] lg:w-[400px] aspect-[4/5]",children:[f.jsx("div",{className:"absolute inset-0 w-full h-full",children:os.map((t,a)=>f.jsx(ss,{icon:t.icon,label:t.label,color:t.color,delay:t.delay,index:a},a))}),f.jsx("div",{className:"absolute -inset-6 rounded-[2rem] bg-gradient-primary opacity-30 blur-3xl animate-float"}),f.jsx(I.div,{animate:{opacity:[.3,.8,.3]},transition:{duration:4,repeat:1/0,ease:"easeInOut"},className:"absolute -inset-2 rounded-[2rem] bg-gradient-primary blur-xl"}),f.jsx(I.div,{animate:{opacity:[.2,.6,.2],backgroundColor:["rgba(99, 102, 241, 0.1)","rgba(99, 102, 241, 0.3)","rgba(99, 102, 241, 0.1)"]},transition:{duration:4,repeat:1/0,ease:"easeInOut"},className:"absolute -inset-2 rounded-[2rem]"}),f.jsxs("div",{className:"relative h-full w-full overflow-hidden rounded-[2rem] gradient-border shadow-elegant",children:[f.jsx("img",{src:an,alt:`${q.name} portrait`,className:"h-full w-full object-cover",loading:"eager"}),f.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent"})]}),f.jsxs("div",{className:"absolute -bottom-4 -left-4 glass rounded-2xl px-3 py-2 shadow-elegant",children:[f.jsx("p",{className:"text-[10px] uppercase tracking-widest text-muted-foreground",children:"Now"}),f.jsx("p",{className:"text-xs font-medium",children:"Building at Imara"})]}),f.jsxs("div",{className:"absolute -top-4 -right-4 glass rounded-2xl px-3 py-2 shadow-elegant",children:[f.jsx("p",{className:"text-[10px] uppercase tracking-widest text-muted-foreground",children:"Stack"}),f.jsx("p",{className:"text-xs font-medium",children:"Flutter · Node · AI"})]})]})})]})})]}),f.jsxs("section",{className:"relative py-20 sm:py-28 overflow-hidden",children:[f.jsxs("div",{className:"absolute inset-0 -z-10 overflow-hidden",children:[f.jsx("div",{className:"absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl opacity-30"}),f.jsx("div",{className:"absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl opacity-20"})]}),f.jsxs("div",{className:"mx-auto max-w-7xl px-4",children:[f.jsxs(Q,{className:"flex items-end justify-between gap-6 mb-16",children:[f.jsxs("div",{children:[f.jsx(I.p,{initial:{opacity:0,y:12},whileInView:{opacity:1,y:0},transition:{duration:.6},className:"text-xs uppercase tracking-[0.3em] text-primary-glow font-semibold mb-3",children:"Toolbox"}),f.jsx("h2",{className:"text-4xl sm:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent",children:"A modern, full-stack toolkit"})]}),f.jsxs(Z,{to:"/skills",className:"hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 text-sm font-medium text-primary-glow hover:bg-primary/10 transition-all hover:border-primary/60",children:["Explore all ",f.jsx(fe,{className:"h-4 w-4"})]})]}),f.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-4 gap-6",children:nn.map((t,a)=>f.jsx(Q,{delay:a*.08,children:f.jsxs(I.div,{whileHover:{y:-8,scale:1.02},transition:{type:"spring",stiffness:400,damping:30},className:"group h-full relative",children:[f.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"}),f.jsx("div",{className:"absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/30 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"}),f.jsxs("div",{className:"relative h-full glass backdrop-blur-sm rounded-3xl p-7 border border-primary/20 group-hover:border-primary/40 transition-all duration-300 overflow-hidden",children:[f.jsx("div",{className:"absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"}),f.jsx(I.div,{whileHover:{scale:1.1,rotate:5},transition:{type:"spring",stiffness:400,damping:30},className:"w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center text-primary mb-4 group-hover:from-primary/40 group-hover:to-primary/20 transition-all duration-300",children:is[t.key]||f.jsx(Ut,{className:"w-6 h-6"})}),f.jsx("h3",{className:"font-display font-bold text-lg mb-5 text-foreground group-hover:text-primary transition-colors duration-300",children:t.title}),f.jsx("div",{className:"flex flex-wrap gap-2",children:t.items.slice(0,6).map((n,r)=>f.jsx(I.span,{initial:{opacity:0,scale:.8},whileInView:{opacity:1,scale:1},transition:{duration:.3,delay:r*.05},className:"text-[12px] font-medium rounded-full border border-primary/30 bg-primary/5 px-3 py-1.5 text-muted-foreground hover:border-primary/60 hover:bg-primary/15 hover:text-primary transition-all duration-200 cursor-default",children:n},n))}),f.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right"})]})]})},t.title))})]})]}),f.jsx("section",{className:"relative py-16 sm:py-20",children:f.jsxs("div",{className:"mx-auto max-w-6xl px-4",children:[f.jsxs(Q,{className:"flex items-end justify-between gap-6 mb-10",children:[f.jsxs("div",{children:[f.jsx("p",{className:"text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2",children:"Selected work"}),f.jsx("h2",{className:"text-3xl sm:text-4xl font-bold",children:"Featured projects"})]}),f.jsxs(Z,{to:"/projects",className:"hidden sm:inline-flex items-center gap-1 text-sm text-primary-glow hover:opacity-80",children:["All projects ",f.jsx(fe,{className:"h-4 w-4"})]})]}),f.jsx("div",{className:"grid md:grid-cols-2 gap-5",children:rn.slice(0,2).map((t,a)=>f.jsx(Q,{delay:a*.08,children:f.jsxs("div",{className:"group relative h-full glass rounded-3xl p-6 sm:p-7 overflow-hidden hover:shadow-elegant transition-all hover:-translate-y-1",children:[f.jsx("div",{className:"absolute -top-20 -right-20 h-56 w-56 rounded-full bg-primary/20 blur-3xl opacity-60 group-hover:opacity-100 transition-opacity"}),f.jsxs("div",{className:"relative",children:[f.jsx("h3",{className:"text-xl font-display font-semibold",children:t.title}),f.jsx("p",{className:"mt-2 text-sm text-muted-foreground",children:t.blurb}),f.jsx("div",{className:"mt-4 flex flex-wrap gap-1.5",children:t.stack.slice(0,5).map(n=>f.jsx("span",{className:"text-[11px] rounded-full bg-secondary/60 px-2 py-0.5",children:n},n))})]})]})},t.title))})]})}),f.jsx("section",{className:"relative py-20",children:f.jsx("div",{className:"mx-auto max-w-4xl px-4",children:f.jsx(Q,{children:f.jsxs("div",{className:"relative overflow-hidden rounded-3xl glass p-10 sm:p-14 text-center shadow-elegant",children:[f.jsx("div",{className:"absolute inset-0 bg-gradient-primary opacity-10"}),f.jsxs("div",{className:"relative",children:[f.jsx("h2",{className:"text-3xl sm:text-4xl font-bold",children:"Have a project in mind?"}),f.jsx("p",{className:"mt-3 text-muted-foreground max-w-xl mx-auto",children:"Whether it's a mobile app, a full-stack platform, or an automation that saves your team hours every week — let's talk."}),f.jsxs(Z,{to:"/contact",className:"mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow",children:["Let's work together ",f.jsx(fe,{className:"h-4 w-4"})]})]})]})})})})]})}export{us as component};
