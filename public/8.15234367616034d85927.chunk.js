webpackJsonp([8],{"./app/components/ContactForm/index.js":function(e,t,i){"use strict";var n=i("./node_modules/react/react.js"),r=(i.n(n),function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,i,n,r){var o=t&&t.defaultProps,a=arguments.length-3;if(i||0===a||(i={}),i&&o)for(var s in o)void 0===i[s]&&(i[s]=o[s]);else i||(i=o||{});if(1===a)i.children=r;else if(a>1){for(var l=Array(a),d=0;d<a;d++)l[d]=arguments[d+3];i.children=l}return{$$typeof:e,type:t,key:void 0===n?null:""+n,ref:null,props:i,_owner:null}}}()),o={padding:"10px 12px",width:"100%",textAlign:"center"},a={flex:1,borderBottom:"1px solid #ddd"},s={backgroundColor:"#3d3d8a",color:"#fff",borderRadius:"6px",width:"50%",height:"40px",marginTop:"35px",marginBottom:"10px",cursor:"pointer",boxShadow:"1px 1px 4px rgba(0, 0, 0, 0.6)"},l=function(e){return e.preventDefault()},d=r("h1",{className:"title"},void 0,"Contact Us"),c=r("div",{style:a},void 0,r("input",{type:"text",placeholder:"Name",style:o})),m=r("div",{style:a},void 0,r("input",{type:"text",placeholder:"Phone Number",style:o})),u=r("div",{style:a},void 0,r("input",{type:"text",placeholder:"Company",style:o})),p=r("div",{style:a},void 0,r("input",{type:"text",placeholder:"Email",style:o})),f=r("button",{style:s},void 0,"Submit"),h=function(){return r("div",{className:"columns is-multiline",id:"contactForm",style:{paddingTop:"30px"}},void 0,r("div",{className:"card column is-half is-offset-one-quarter"},void 0,r("div",{className:"card-content",style:{padding:"0 2.5rem",textAlign:"center"}},void 0,d,r("div",{className:"content"},void 0,r("form",{onSubmit:l},void 0,r("div",{style:{display:"flex",flexDirection:"column"}},void 0,c,m,u,p,r("div",{style:{flex:1,textAlign:"center"}},void 0,f)))))))};t.a=h},"./app/components/TelifiedTemplate/index.js":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("./node_modules/react/react.js"),r=(i.n(n),i("./node_modules/prop-types/index.js")),o=(i.n(r),i("./node_modules/react-reveal/dist/Reveal.js")),a=i.n(o),s=(i("./app/utils/staticHtmlUtils.js"),i("./app/components/ContactForm/index.js")),l=i("./app/components/TelifiedTemplate/styles.scss"),d=i.n(l),c=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,i,n,r){var o=t&&t.defaultProps,a=arguments.length-3;if(i||0===a||(i={}),i&&o)for(var s in o)void 0===i[s]&&(i[s]=o[s]);else i||(i=o||{});if(1===a)i.children=r;else if(a>1){for(var l=Array(a),d=0;d<a;d++)l[d]=arguments[d+3];i.children=l}return{$$typeof:e,type:t,key:void 0===n?null:""+n,ref:null,props:i,_owner:null}}}(),m=c("div",{},void 0,c("h1",{className:"title is-1 animated fadeInUp"},void 0,"Telephone Verified"),c("p",{className:"animated fadeInUp"},void 0,"Our service verifies consumer identity by providing direct access to the ultimate source of accurate contact data: the phone company billing database. Telified confirms the name, address and phone number supplied is indeed valid.")),u=c("ul",{className:"animated fadeInUp"},void 0,c("li",{},void 0,"Verify the name, address and phone number supplied in on-line orders is truly valid."),c("li",{},void 0,"Verify a telephone number is truly active or has been disconnected."),c("li",{},void 0,"Verify that consumer identity is valid and associated to the provided phone number."),c("li",{},void 0,"Verify the customer contact information you have on file is still current."),c("li",{},void 0,"Provide an alternative to credit verification for those with little or no credit history."),c("li",{},void 0,"Remove phone numbers made invalid over time."),c("li",{},void 0,"Detect if cell phone numbers have been reassigned."),c("li",{},void 0,"Help you stay in compliance with TCPA regulations.")),p=c("h1",{className:"title is-1"},void 0,"The Telified Collection"),f=c("div",{className:"content"},void 0,c("h1",{},void 0,"NAME AND ADDRESS VERIFICATION"),c("p",{},void 0,"Telified 3D is our flagship version and is available for the purposes of identity verification and risk mitigation.  3D specifically focuses on verification of the 3 primary data attributes that form a consumer's identity: Name, Street Address and Telephone Number.")),h=c("div",{className:"content"},void 0,c("h1",{},void 0,"ACTIVE/INACTIVE"),c("p",{},void 0,"Telified AI answers the critical questions of whether or not a telephone number is active or inactive; whether it is connected and dialable or has been disconnected.")),v=c("div",{className:"content"},void 0,c("h1",{},void 0,"CONSENT REVERIFICATION"),c("p",{},void 0,"Telified CR is a special configuration of Telified designed specifically to provide companies with a mechanism for periodically reverifying a consumer's consent to communicate with a specific phone number. This can help buinesses prevent costly TCPA violations."),c("p",{},void 0,c("a",{},void 0,"For more details, download our Consent Reverification PDF."))),g=c("div",{className:"content"},void 0,c("h1",{},void 0,"INTERCONTINENTAL"),c("p",{},void 0,"Telified IC extends our Telified line of telephone verification services into the rest of the world. Telified-IC supports carrier, device type and general location information just like our Line Identification Services do in the US and Canada."),c("p",{},void 0,c("a",{},void 0,"See coverage map here."))),b=c("hr",{}),y=c("h2",{className:"title is-2"},void 0,"Want to learn more about Telified and our broad coverage option?"),A=c(a.a,{effect:"animated fadeIn"},void 0,c(s.a,{})),_=function(){return c("section",{},void 0,c("section",{className:"hero is-fullheight is-primary "+d.a.telifiedHero},void 0,c("div",{className:"container has-text-centered "+d.a.telifiedContentStrip},void 0,m,c("div",{},void 0,c("h1",{className:"title is-1 "+d.a.header2+" animated fadeInUp"},void 0,"What Telified Can Do For You"),u))),c("div",{className:"container has-text-centered "+d.a.section2},void 0,p,c("div",{className:"columns is-multiline"},void 0,c("div",{className:"column is-half "+d.a.collectionItem},void 0,f),c("div",{className:"column is-half "+d.a.collectionItem},void 0,h),c("div",{className:"column is-half "+d.a.collectionItem},void 0,v),c("div",{className:"column is-half "+d.a.collectionItem},void 0,g)),b,y),A)};t.default=_},"./app/components/TelifiedTemplate/styles.scss":function(e,t,i){var n=i("./node_modules/css-loader/index.js?url=false&modules&sourceMap&localIdentName=[local]___[hash:base64:5]!./node_modules/sass-loader/lib/loader.js?outputStyle=expanded&sourceMap!./app/components/TelifiedTemplate/styles.scss");"string"==typeof n&&(n=[[e.i,n,""]]);i("./node_modules/style-loader/addStyles.js")(n,{fixUrls:!0});n.locals&&(e.exports=n.locals)},"./app/utils/staticHtmlUtils.js":function(e,t,i){"use strict";var n=i("./node_modules/react/react.js"),r=(i.n(n),i("./node_modules/react-router/es/index.js")),o=i("./node_modules/html-react-parser/index.js"),a=i.n(o),s=i("./node_modules/html-react-parser/lib/dom-to-react.js"),l=i.n(s);i.d(t,"a",function(){return c});var d=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,i,n,r){var o=t&&t.defaultProps,a=arguments.length-3;if(i||0===a||(i={}),i&&o)for(var s in o)void 0===i[s]&&(i[s]=o[s]);else i||(i=o||{});if(1===a)i.children=r;else if(a>1){for(var l=Array(a),d=0;d<a;d++)l[d]=arguments[d+3];i.children=l}return{$$typeof:e,type:t,key:void 0===n?null:""+n,ref:null,props:i,_owner:null}}}(),c=function(e){return a()(e,{replace:function(e){if("a"===e.name&&e.attribs.href&&e.children)return d(r.d,{to:e.attribs.href},void 0,l()(e.children))}})}},"./node_modules/css-loader/index.js?url=false&modules&sourceMap&localIdentName=[local]___[hash:base64:5]!./node_modules/sass-loader/lib/loader.js?outputStyle=expanded&sourceMap!./app/components/TelifiedTemplate/styles.scss":function(e,t,i){t=e.exports=i("./node_modules/css-loader/lib/css-base.js")(),t.push([e.i,'.telifiedHero___2bxmv{background-image:-webkit-linear-gradient(141deg,rgba(0,0,0,.3),rgba(0,0,0,.3) 71%,rgba(0,0,0,.3)),-webkit-linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.3)),url("http://res.cloudinary.com/dyjo5a3ci/image/upload/v1514087427/idicia/Telified.png");background-image:linear-gradient(141deg,rgba(0,0,0,.3),rgba(0,0,0,.3) 71%,rgba(0,0,0,.3)),linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.3)),url("http://res.cloudinary.com/dyjo5a3ci/image/upload/v1514087427/idicia/Telified.png");background-size:cover}.telifiedContentStrip___2OD6-{background-color:hsla(0,0%,78%,.33);padding:5rem;flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center}.header2___3f8bw{margin-top:5rem}.section2___n39aM{padding:2rem 0}.collectionItem___2TKOl{min-height:10rem;background-color:rgba(255,166,0,.822);border:1px solid #444;padding:1.5rem}',"",{version:3,sources:["/./app/components/TelifiedTemplate/styles.scss"],names:[],mappings:"AAAA,sBACE,iPAAkR,AAClR,iOAAkQ,AAClQ,qBAAsB,CACvB,AAED,8BACE,oCAA2C,AAC3C,aAAa,AACb,OAAO,AACP,aAAa,AACb,sBAAsB,AACtB,mBAAmB,AACnB,sBAAuB,CACxB,AAED,iBACE,eAAgB,CACjB,AAED,kBACE,cAAe,CAChB,AAED,wBACE,iBAAiB,AACjB,sCAA0C,AAC1C,sBAAsB,AACtB,cAAe,CAChB",file:"styles.scss",sourcesContent:[".telifiedHero {\n  background-image: -webkit-linear-gradient(141deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.3) 71%, rgba(0, 0, 0, 0.3) 100%),-webkit-linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('http://res.cloudinary.com/dyjo5a3ci/image/upload/v1514087427/idicia/Telified.png');\n  background-image: linear-gradient(141deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.3) 71%, rgba(0, 0, 0, 0.3) 100%),linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('http://res.cloudinary.com/dyjo5a3ci/image/upload/v1514087427/idicia/Telified.png');\n  background-size: cover;\n}\n\n.telifiedContentStrip {\n  background-color: rgba(200, 200, 200, 0.33);\n  padding: 5rem;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.header2 {\n  margin-top: 5rem;\n}\n\n.section2 {\n  padding: 2rem 0;\n}\n\n.collectionItem {\n  min-height: 10rem;\n  background-color: rgba(255, 166, 0, 0.822);\n  border: #444 1px solid;\n  padding: 1.5rem;\n}\n"],sourceRoot:"webpack://"}]),t.locals={telifiedHero:"telifiedHero___2bxmv",telifiedContentStrip:"telifiedContentStrip___2OD6-",header2:"header2___3f8bw",section2:"section2___n39aM",collectionItem:"collectionItem___2TKOl"}},"./node_modules/html-dom-parser/lib/domparser.js":function(e,t,i){"use strict";var n,r=i("./node_modules/html-dom-parser/lib/utilities.js"),o=r.isIE,a="html",s="body",l="head",d=/<([a-zA-Z]+[0-9]?)/,c=/<head[\s\S]*>[\s\S]*<\/head>/i,m=/<body[\s\S]*>[\s\S]*<\/body>/i,u=/<(area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)(.*?)\/?>/gi,p=o(),f=o(9);if("function"==typeof window.DOMParser){var h=new window.DOMParser,v=f?"text/xml":"text/html";n=function(e,t){return t&&(e=["<",t,">",e,"</",t,">"].join("")),f&&(e=e.replace(u,"<$1$2$3/>")),h.parseFromString(e,v)}}var g;if("object"==typeof document.implementation){var b=document.implementation.createHTMLDocument(p?"HTML_DOM_PARSER_TITLE":void 0);g=function(e,t){if(t)return b.documentElement.getElementsByTagName(t)[0].innerHTML=e,b;try{return b.documentElement.innerHTML=e,b}catch(t){if(n)return n(e)}}}var y,A=document.createElement("template");A.content&&(y=function(e){return A.innerHTML=e,A.content.childNodes});var _=g||n;e.exports=function(e){var t,i=e.match(d);i&&i[1]&&(t=i[1]);var r,o,u;switch(t){case a:if(n)return r=n(e),c.test(e)||(o=r.getElementsByTagName(l)[0])&&o.parentNode.removeChild(o),m.test(e)||(o=r.getElementsByTagName(s)[0])&&o.parentNode.removeChild(o),r.getElementsByTagName(a);break;case l:if(_)return u=_(e).getElementsByTagName(l),m.test(e)?u[0].parentNode.childNodes:u;break;case s:if(_)return u=_(e).getElementsByTagName(s),c.test(e)?u[0].parentNode.childNodes:u;break;default:if(y)return y(e);if(_)return _(e,s).getElementsByTagName(s)[0].childNodes}return[]}},"./node_modules/html-dom-parser/lib/html-to-dom-client.js":function(e,t,i){"use strict";var n=i("./node_modules/html-dom-parser/lib/domparser.js"),r=i("./node_modules/html-dom-parser/lib/utilities.js"),o=r.formatDOM,a=r.isIE(9),s=/<(![a-zA-Z\s]+)>/;e.exports=function(e){if("string"!=typeof e)throw new TypeError("First argument must be a string.");if(!e)return[];var t,i=e.match(s);return i&&i[1]&&(t=i[1],a&&(e=e.replace(i[0],""))),o(n(e),null,t)}},"./node_modules/html-dom-parser/lib/utilities.js":function(e,t,i){"use strict";function n(e){for(var t,i={},n=0,r=e.length;n<r;n++)t=e[n],i[t.name]=t.value;return i}function r(e,t,i){t=t||null;for(var o,a,s,l=[],d=0,c=e.length;d<c;d++){switch(o=e[d],s={next:null,prev:l[d-1]||null,parent:t},a=l[d-1],a&&(a.next=s),0!==o.nodeName.indexOf("#")&&(s.name=o.nodeName.toLowerCase(),s.attribs={},o.attributes&&o.attributes.length&&(s.attribs=n(o.attributes))),o.nodeType){case 1:"script"===s.name||"style"===s.name?s.type=s.name:s.type="tag",s.children=r(o.childNodes,s);break;case 3:s.type="text",s.data=o.nodeValue;break;case 8:s.type="comment",s.data=o.nodeValue}l.push(s)}return i&&(l.unshift({name:i.substring(0,i.indexOf(" ")).toLowerCase(),data:i,type:"directive",next:l[0]?l[0]:null,prev:null,parent:t}),l[1]&&(l[1].prev=l[0])),l}function o(e){return e?document.documentMode===e:/(MSIE |Trident\/|Edge\/)/.test(navigator.userAgent)}e.exports={formatAttributes:n,formatDOM:r,isIE:o}},"./node_modules/html-react-parser/index.js":function(e,t,i){"use strict";function n(e,t){if("string"!=typeof e)throw new TypeError("First argument must be a string");return r(o(e,a),t)}var r=i("./node_modules/html-react-parser/lib/dom-to-react.js"),o=i("./node_modules/html-dom-parser/lib/html-to-dom-client.js"),a={decodeEntities:!0};e.exports=n},"./node_modules/html-react-parser/lib/attributes-to-props.js":function(e,t,i){"use strict";function n(e){e=e||{};var t,i,n,o={};for(t in e)i=e[t],l(t)?o[t]=i:(n=s.html[t.toLowerCase()],n?o[n]=i:(n=s.svg[t])&&(o[n]=i));return e.style&&(o.style=r(e.style)),o}function r(e){if("string"!=typeof e)throw new Error("`cssToJs`: first argument must be a string. ");for(var t,i,n,r={},a=e.split(";"),s=0,l=a.length;s<l;s++)if(t=a[s].trim().split(":"),2===t.length&&(t[0]=t[0].trim(),t[1]=t[1].trim(),t[0]&&t[1]))for(i=0,n=t.length;i<n;i++)r[o.camelCase(t[0])]=t[1];return r}var o=i("./node_modules/html-react-parser/lib/utilities.js"),a=i("./node_modules/html-react-parser/lib/property-config.js"),s=a.config,l=a.HTMLDOMPropertyConfig.isCustomAttribute;e.exports=n},"./node_modules/html-react-parser/lib/dom-to-react.js":function(e,t,i){"use strict";function n(e,t){t=t||{};for(var i,a,s,l,d=[],c="function"==typeof t.replace,m=0,u=e.length;m<u;m++)if(i=e[m],c&&(a=t.replace(i),r.isValidElement(a)))u>1&&(a=r.cloneElement(a,{key:m})),d.push(a);else if("text"!==i.type){if(s=o(i.attribs),l=null,"script"===i.type||"style"===i.type)i.children[0]&&(s.dangerouslySetInnerHTML={__html:i.children[0].data});else{if("tag"!==i.type)continue;"textarea"===i.name&&i.children[0]?s.defaultValue=i.children[0].data:i.children&&i.children.length&&(l=n(i.children,t))}u>1&&(s.key=m),d.push(r.createElement(i.name,s,l))}else d.push(i.data);return 1===d.length?d[0]:d}var r=i("./node_modules/react/react.js"),o=i("./node_modules/html-react-parser/lib/attributes-to-props.js");e.exports=n},"./node_modules/html-react-parser/lib/property-config.js":function(e,t,i){"use strict";var n,r=i("./node_modules/html-react-parser/lib/utilities.js"),o=i("./node_modules/react-dom/lib/HTMLDOMPropertyConfig.js"),a=i("./node_modules/react-dom/lib/SVGDOMPropertyConfig.js"),s={html:{},svg:{}};s.html=r.invertObject(o.DOMAttributeNames);for(n in o.Properties)s.html[n.toLowerCase()]=n;s.svg=r.invertObject(a.DOMAttributeNames);for(n in a.Properties)s.html[n]=n;e.exports={config:s,HTMLDOMPropertyConfig:o,SVGDOMPropertyConfig:a}},"./node_modules/html-react-parser/lib/utilities.js":function(e,t,i){"use strict";function n(e){if("string"!=typeof e)throw new TypeError("First argument must be a string");if(e.indexOf("-")>0){for(var t=e.toLowerCase().split("-"),i=1,n=t.length;i<n;i++)t[i]=t[i].charAt(0).toUpperCase()+t[i].slice(1);return t.join("")}return e}function r(e,t){if("object"!=typeof e||!e)throw new TypeError("First argument must be an object");var i,n,r="function"==typeof t,o={},a={};for(i in e)n=e[i],r&&(o=t(i,n))&&2===o.length?a[o[0]]=o[1]:"string"==typeof n&&(a[n]=i);return a}e.exports={camelCase:n,invertObject:r}}});