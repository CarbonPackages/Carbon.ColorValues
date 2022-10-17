/*! For license information please see Plugin.js.LICENSE.txt */
!function(e){var t={};function __webpack_require__(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,__webpack_require__),n.l=!0,n.exports}__webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.d=function(e,t,r){__webpack_require__.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},__webpack_require__.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.t=function(e,t){if(1&t&&(e=__webpack_require__(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(__webpack_require__.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)__webpack_require__.d(r,n,function(t){return e[t]}.bind(null,n));return r},__webpack_require__.n=function(e){var t=e&&e.__esModule?function getDefault(){return e.default}:function getModuleExports(){return e};return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=3)}([function(e,t,r){"use strict";r.r(t),r.d(t,"__extends",(function(){return __extends})),r.d(t,"__assign",(function(){return __assign})),r.d(t,"__rest",(function(){return __rest})),r.d(t,"__decorate",(function(){return __decorate})),r.d(t,"__param",(function(){return __param})),r.d(t,"__metadata",(function(){return __metadata})),r.d(t,"__awaiter",(function(){return __awaiter})),r.d(t,"__generator",(function(){return __generator})),r.d(t,"__createBinding",(function(){return __createBinding})),r.d(t,"__exportStar",(function(){return __exportStar})),r.d(t,"__values",(function(){return __values})),r.d(t,"__read",(function(){return __read})),r.d(t,"__spread",(function(){return __spread})),r.d(t,"__spreadArrays",(function(){return __spreadArrays})),r.d(t,"__await",(function(){return __await})),r.d(t,"__asyncGenerator",(function(){return __asyncGenerator})),r.d(t,"__asyncDelegator",(function(){return __asyncDelegator})),r.d(t,"__asyncValues",(function(){return __asyncValues})),r.d(t,"__makeTemplateObject",(function(){return __makeTemplateObject})),r.d(t,"__importStar",(function(){return __importStar})),r.d(t,"__importDefault",(function(){return __importDefault})),r.d(t,"__classPrivateFieldGet",(function(){return __classPrivateFieldGet})),r.d(t,"__classPrivateFieldSet",(function(){return __classPrivateFieldSet}));var extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function __extends(e,t){function __(){this.constructor=e}extendStatics(e,t),e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}var __assign=function(){return(__assign=Object.assign||function __assign(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function __rest(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}function __decorate(e,t,r,n){var o,a=arguments.length,i=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(i=(a<3?o(i):a>3?o(t,r,i):o(t,r))||i);return a>3&&i&&Object.defineProperty(t,r,i),i}function __param(e,t){return function(r,n){t(r,n,e)}}function __metadata(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function __awaiter(e,t,r,n){return new(r||(r=Promise))((function(o,a){function fulfilled(e){try{step(n.next(e))}catch(e){a(e)}}function rejected(e){try{step(n.throw(e))}catch(e){a(e)}}function step(e){e.done?o(e.value):function adopt(e){return e instanceof r?e:new r((function(t){t(e)}))}(e.value).then(fulfilled,rejected)}step((n=n.apply(e,t||[])).next())}))}function __generator(e,t){var r,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function verb(a){return function(u){return function step(a){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,n=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}}function __createBinding(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}function __exportStar(e,t){for(var r in e)"default"===r||t.hasOwnProperty(r)||(t[r]=e[r])}function __values(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function __read(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,a=r.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(n=a.next()).done;)i.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(o)throw o.error}}return i}function __spread(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(__read(arguments[t]));return e}function __spreadArrays(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),o=0;for(t=0;t<r;t++)for(var a=arguments[t],i=0,u=a.length;i<u;i++,o++)n[o]=a[i];return n}function __await(e){return this instanceof __await?(this.v=e,this):new __await(e)}function __asyncGenerator(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=r.apply(e,t||[]),a=[];return n={},verb("next"),verb("throw"),verb("return"),n[Symbol.asyncIterator]=function(){return this},n;function verb(e){o[e]&&(n[e]=function(t){return new Promise((function(r,n){a.push([e,t,r,n])>1||resume(e,t)}))})}function resume(e,t){try{!function step(e){e.value instanceof __await?Promise.resolve(e.value.v).then(fulfill,reject):settle(a[0][2],e)}(o[e](t))}catch(e){settle(a[0][3],e)}}function fulfill(e){resume("next",e)}function reject(e){resume("throw",e)}function settle(e,t){e(t),a.shift(),a.length&&resume(a[0][0],a[0][1])}}function __asyncDelegator(e){var t,r;return t={},verb("next"),verb("throw",(function(e){throw e})),verb("return"),t[Symbol.iterator]=function(){return this},t;function verb(n,o){t[n]=e[n]?function(t){return(r=!r)?{value:__await(e[n](t)),done:"return"===n}:o?o(t):t}:o}}function __asyncValues(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e=__values(e),t={},verb("next"),verb("throw"),verb("return"),t[Symbol.asyncIterator]=function(){return this},t);function verb(r){t[r]=e[r]&&function(t){return new Promise((function(n,o){(function settle(e,t,r,n){Promise.resolve(n).then((function(t){e({value:t,done:r})}),t)})(n,o,(t=e[r](t)).done,t.value)}))}}}function __makeTemplateObject(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function __importStar(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function __importDefault(e){return e&&e.__esModule?e:{default:e}}function __classPrivateFieldGet(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}function __classPrivateFieldSet(e,t,r){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,r),r}},function(e,t,r){"use strict";t.__esModule=!0;var n=r(0);t.default=function readFromConsumerApi(e){return function(){for(var t,r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];if(window["@Neos:HostPluginAPI"]&&window["@Neos:HostPluginAPI"]["@"+e])return(t=window["@Neos:HostPluginAPI"])["@"+e].apply(t,n.__spread(r));throw new Error("You are trying to read from a consumer api that hasn't been initialized yet!")}}},function(e,t,r){"use strict";t.__esModule=!0;var n=r(0),o=n.__importDefault(r(9)),a=n.__importDefault(r(10)),i=function(e){function SynchronousRegistry(t){var r=e.call(this,t)||this;return r._registry=[],r}return n.__extends(SynchronousRegistry,e),SynchronousRegistry.prototype.set=function(e,t,r){if(void 0===r&&(r=0),"string"!=typeof e)throw new Error("Key must be a string");if("string"!=typeof r&&"number"!=typeof r)throw new Error("Position must be a string or a number");var n={key:e,value:t};r&&(n.position=r);var o=this._registry.findIndex((function(t){return t.key===e}));return-1===o?this._registry.push(n):this._registry[o]=n,t},SynchronousRegistry.prototype.get=function(e){if("string"!=typeof e)return console.error("Key must be a string"),null;var t=this._registry.find((function(t){return t.key===e}));return t?t.value:null},SynchronousRegistry.prototype._getChildrenWrapped=function(e){var t=this._registry.filter((function(t){return 0===t.key.indexOf(e+"/")}));return a.default(t)},SynchronousRegistry.prototype.getChildrenAsObject=function(e){var t={};return this._getChildrenWrapped(e).forEach((function(e){t[e.key]=e.value})),t},SynchronousRegistry.prototype.getChildren=function(e){return this._getChildrenWrapped(e).map((function(e){return e.value}))},SynchronousRegistry.prototype.has=function(e){return"string"!=typeof e?(console.error("Key must be a string"),!1):Boolean(this._registry.find((function(t){return t.key===e})))},SynchronousRegistry.prototype._getAllWrapped=function(){return a.default(this._registry)},SynchronousRegistry.prototype.getAllAsObject=function(){var e={};return this._getAllWrapped().forEach((function(t){e[t.key]=t.value})),e},SynchronousRegistry.prototype.getAllAsList=function(){return this._getAllWrapped().map((function(e){return Object.assign({id:e.key},e.value)}))},SynchronousRegistry}(o.default);t.default=i},function(e,t,r){"use strict";r(4)},function(e,t,r){"use strict";var n=_interopRequireDefault(r(5)),o=_interopRequireDefault(r(12));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(0,n.default)("Carbon.ColorValues:Editor",{},(function(e,t){t.frontendConfiguration;e.get("inspector").get("editors").set("Carbon.ColorValues/Editor",{component:o.default})}))},function(e,t,r){"use strict";t.__esModule=!0;var n=r(0),o=n.__importDefault(r(6));t.createConsumerApi=o.default;var a=n.__importDefault(r(1));t.readFromConsumerApi=a.default;var i=r(8);t.SynchronousRegistry=i.SynchronousRegistry,t.SynchronousMetaRegistry=i.SynchronousMetaRegistry,t.default=a.default("manifest")},function(e,t,r){"use strict";t.__esModule=!0;var n=r(0).__importDefault(r(7)),o=function createReadOnlyValue(e){return{value:e,writable:!1,enumerable:!1,configurable:!0}};t.default=function createConsumerApi(e,t){var r={};Object.keys(t).forEach((function(e){Object.defineProperty(r,e,o(t[e]))})),Object.defineProperty(r,"@manifest",o(n.default(e))),Object.defineProperty(window,"@Neos:HostPluginAPI",o(r))}},function(e,t,r){"use strict";t.__esModule=!0,t.default=function(e){return function(t,r,n){var o;e.push(((o={})[t]={options:r,bootstrap:n},o))}}},function(e,t,r){"use strict";t.__esModule=!0;var n=r(0),o=n.__importDefault(r(2));t.SynchronousRegistry=o.default;var a=n.__importDefault(r(11));t.SynchronousMetaRegistry=a.default},function(e,t,r){"use strict";t.__esModule=!0;var n=function n(e){this.SERIAL_VERSION_UID="d8a5aa78-978e-11e6-ae22-56b6b6499611",this.description=e};t.default=n},function(e,t,r){"use strict";t.__esModule=!0;var n=r(0);t.default=function positionalArraySorter(e,t,r){var o,a,i,u,l,s,c,f,_,d,p,y,b,v;void 0===t&&(t="position"),void 0===r&&(r="key");var h="string"==typeof t?function(e){return e[t]}:t,m={},g={},w={},O={},S={},x={};e.forEach((function(e,t){var n=e[r]?e[r]:String(t);m[n]=t;var o=h(e),a=String(o||t),i=!1;if(a.startsWith("start")){var u=(l=a.match(/start\s+(\d+)/))&&l[1]?Number(l[1]):0;w[u]||(w[u]=[]),w[u].push(n)}else if(a.startsWith("end")){var l;u=(l=a.match(/end\s+(\d+)/))&&l[1]?Number(l[1]):0;O[u]||(O[u]=[]),O[u].push(n)}else if(a.startsWith("before")){if(c=a.match(/before\s+(\S+)(\s+(\d+))?/)){var s=c[1];u=c[3]?Number(c[3]):0;S[s]||(S[s]={}),S[s][u]||(S[s][u]=[]),S[s][u].push(n)}else i=!0}else if(a.startsWith("after")){var c;if(c=a.match(/after\s+(\S+)(\s+(\d+))?/)){s=c[1],u=c[3]?Number(c[3]):0;x[s]||(x[s]={}),x[s][u]||(x[s][u]=[]),x[s][u].push(n)}else i=!0}else i=!0;if(i){var f=parseFloat(a);!isNaN(f)&&isFinite(f)||(f=t),g[f]||(g[f]=[]),g[f].push(n)}}));var R=[],j=[],k=[],E=[],P=function sortedWeights(e,t){var r=Object.keys(e).map((function(e){return Number(e)})).sort((function(e,t){return e-t}));return t?r:r.reverse()},C=function addToResults(e,t){e.forEach((function(e){var r,o,a,i;if(!(E.indexOf(e)>=0)){if(E.push(e),S[e]){var u=P(S[e],!0);try{for(var l=n.__values(u),s=l.next();!s.done;s=l.next()){var c=s.value;addToResults(S[e][c],t)}}catch(e){r={error:e}}finally{try{s&&!s.done&&(o=l.return)&&o.call(l)}finally{if(r)throw r.error}}}if(t.push(e),x[e]){var f=P(x[e],!1);try{for(var _=n.__values(f),d=_.next();!d.done;d=_.next()){c=d.value;addToResults(x[e][c],t)}}catch(e){a={error:e}}finally{try{d&&!d.done&&(i=_.return)&&i.call(_)}finally{if(a)throw a.error}}}}}))};try{for(var q=n.__values(P(w,!1)),M=q.next();!M.done;M=q.next()){var A=M.value;C(w[A],R)}}catch(e){o={error:e}}finally{try{M&&!M.done&&(a=q.return)&&a.call(q)}finally{if(o)throw o.error}}try{for(var D=n.__values(P(g,!0)),N=D.next();!N.done;N=D.next()){A=N.value;C(g[A],j)}}catch(e){i={error:e}}finally{try{N&&!N.done&&(u=D.return)&&u.call(D)}finally{if(i)throw i.error}}try{for(var I=n.__values(P(O,!0)),T=I.next();!T.done;T=I.next()){A=T.value;C(O[A],k)}}catch(e){l={error:e}}finally{try{T&&!T.done&&(s=I.return)&&s.call(I)}finally{if(l)throw l.error}}try{for(var V=n.__values(Object.keys(S)),W=V.next();!W.done;W=V.next()){var F=W.value;if(!(E.indexOf(F)>=0))try{for(var L=(_=void 0,n.__values(P(S[F],!1))),B=L.next();!B.done;B=L.next()){A=B.value;C(S[F][A],R)}}catch(e){_={error:e}}finally{try{B&&!B.done&&(d=L.return)&&d.call(L)}finally{if(_)throw _.error}}}}catch(e){c={error:e}}finally{try{W&&!W.done&&(f=V.return)&&f.call(V)}finally{if(c)throw c.error}}try{for(var G=n.__values(Object.keys(x)),Y=G.next();!Y.done;Y=G.next()){F=Y.value;if(!(E.indexOf(F)>=0))try{for(var H=(b=void 0,n.__values(P(x[F],!1))),U=H.next();!U.done;U=H.next()){A=U.value;C(x[F][A],j)}}catch(e){b={error:e}}finally{try{U&&!U.done&&(v=H.return)&&v.call(H)}finally{if(b)throw b.error}}}}catch(e){p={error:e}}finally{try{Y&&!Y.done&&(y=G.return)&&y.call(G)}finally{if(p)throw p.error}}return n.__spread(R,j,k).map((function(e){return m[e]})).map((function(t){return e[t]}))}},function(e,t,r){"use strict";t.__esModule=!0;var n=r(0),o=function(e){function SynchronousMetaRegistry(){return null!==e&&e.apply(this,arguments)||this}return n.__extends(SynchronousMetaRegistry,e),SynchronousMetaRegistry.prototype.set=function(t,r){if("d8a5aa78-978e-11e6-ae22-56b6b6499611"!==r.SERIAL_VERSION_UID)throw new Error("You can only add registries to a meta registry");return e.prototype.set.call(this,t,r)},SynchronousMetaRegistry}(n.__importDefault(r(2)).default);t.default=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o,a=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),i=r(13),u=_interopRequireDefault(i),l=_interopRequireDefault(r(14)),s=r(15),c=_interopRequireDefault(r(16));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var f=(o=n=function(e){function Editor(){var e,t,r;_classCallCheck(this,Editor);for(var n=arguments.length,o=Array(n),a=0;a<n;a++)o[a]=arguments[a];return t=r=_possibleConstructorReturn(this,(e=Editor.__proto__||Object.getPrototypeOf(Editor)).call.apply(e,[this].concat(o))),r.onReset=function(){r.props.commit("")},r.previewBoxAttributes=function(e,t){var n=r.props.options.values,o=e&&Object.prototype.hasOwnProperty.call(n,e),a=o?n[e].color:t,i=o?n[e].label:null,u=[c.default.feedback];return("transparent"==e||!o&&"transparent"==t)&&u.push(c.default.transparent),o||t||u.push(c.default.checkboard),{className:u.filter((function(e){return!!e})).join(" "),style:{backgroundColor:a},title:i}},_possibleConstructorReturn(r,t)}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Editor,e),a(Editor,[{key:"render",value:function render(){var e=this.props,t=e.commit,r=e.value,n=Object.assign({},this.constructor.defaultOptions,this.props.options),o=n.values;if(!o)return u.default.createElement("div",{className:c.default.error},"No color values defined, please add them to your YAML configuration");var a=n.allowEmpty||Object.prototype.hasOwnProperty.call(o,""),i=[];for(var l in o){var f=o[l];i.push({label:f.label,color:f.color,disabled:f.disabled,key:l})}return u.default.createElement("div",{className:n.disabled&&c.default.disabled},u.default.createElement("div",{className:c.default.wrapper},u.default.createElement("div",this.previewBoxAttributes(r,n.placeholder)),a&&u.default.createElement("div",{className:c.default.reset},u.default.createElement(s.IconButton,{style:"lighter",icon:"times",title:n.resetLabel,onClick:this.onReset}))),u.default.createElement("div",{className:c.default.list},i.map((function(e){return e.color?u.default.createElement("button",{className:[c.default.item,"transparent"==e.color&&c.default.transparent].join(" "),disabled:e.disabled,style:{backgroundColor:e.color},title:e.label,onClick:function onClick(){return t(e.key)}}):u.default.createElement("div",{className:c.default.label},e.label)}))))}}]),Editor}(i.PureComponent),n.propTypes={value:l.default.string||l.default.number,commit:l.default.func.isRequired,i18nRegistry:l.default.object.isRequired,options:l.default.shape({allowEmpty:l.default.bool,placeholder:l.default.string,resetLabel:l.default.string,disabled:l.default.bool,values:l.default.objectOf(l.default.shape({label:l.default.string,color:l.default.string,disabled:l.default.bool}))}).isRequired},n.defaultOptions={allowEmpty:!0,disabled:!1,placeholder:null,resetLabel:"Reset"},o);t.default=f},function(e,t,r){"use strict";var n=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(r(1));e.exports=(0,n.default)("vendor")().React},function(e,t,r){"use strict";var n=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(r(1));e.exports=(0,n.default)("vendor")().PropTypes},function(e,t,r){"use strict";var n=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(r(1));e.exports=(0,n.default)("NeosProjectPackages")().ReactUiComponents},function(e,t,r){e.exports={wrapper:"ColorValuesEditor__wrapper___3NYbL",error:"ColorValuesEditor__error___3Bz6n",feedback:"ColorValuesEditor__feedback___3UxEd",transparent:"ColorValuesEditor__transparent___Ls6St",checkboard:"ColorValuesEditor__checkboard___39kI2",list:"ColorValuesEditor__list___1QCLd",label:"ColorValuesEditor__label___19urj",item:"ColorValuesEditor__item___9YGw9",disabled:"ColorValuesEditor__disabled___x_cCT",reset:"ColorValuesEditor__reset___45Sbd"}}]);
//# sourceMappingURL=Plugin.js.map