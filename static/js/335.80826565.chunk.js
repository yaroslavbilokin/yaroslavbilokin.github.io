"use strict";(self.webpackChunkeglobu=self.webpackChunkeglobu||[]).push([[335],{5335:function(e,n,t){t.r(n),t.d(n,{default:function(){return u}});var r=t(3168);t(2791);var i=t.p+"static/media/uncover-reason-icon.ce19781ac47b325dd758e6b7483b2011.svg";var a=t.p+"static/media/decentralize-reason-icon.dde86ce34967ec8657b2f11a01fc52b6.svg";var s=t.p+"static/media/bypass-reason-icon.53daad8f8bdc401ac9d8d1b213e351ed.svg";var o=t.p+"static/media/lead-reason-icon.19995661aa5da81c3af5794c9386d5c9.svg",c=t(184),u=function(){var e=(0,r.$)().t,n=[{id:0,title:e("WhyTradeSharing.uncover.title"),subTitle:e("WhyTradeSharing.uncover.subTitle"),icon:i},{id:1,title:e("WhyTradeSharing.decentralize.title"),subTitle:e("WhyTradeSharing.decentralize.subTitle"),icon:a},{id:2,title:e("WhyTradeSharing.bypass.title"),subTitle:e("WhyTradeSharing.bypass.subTitle"),icon:s},{id:3,title:e("WhyTradeSharing.lead.title"),subTitle:e("WhyTradeSharing.lead.subTitle"),icon:o}];return(0,c.jsxs)("div",{className:"why-trade-sharing__container",children:[(0,c.jsx)("div",{className:"why-trade-sharing__title",children:e("WhyTradeSharing.title")}),(0,c.jsx)("div",{className:"why-trade-sharing__subtitle",children:e("WhyTradeSharing.subTitle")}),(0,c.jsx)("div",{className:"why-trade-sharing__reasons",children:n.map((function(e){return(0,c.jsxs)("div",{className:"reason-container",children:[(0,c.jsx)("div",{className:"reason-icon__container",children:(0,c.jsx)("img",{src:e.icon,alt:"reason icon"})}),(0,c.jsxs)("div",{className:"reason-content",children:[(0,c.jsx)("div",{className:"title",children:e.title}),(0,c.jsx)("div",{className:"subtitle",children:e.subTitle})]})]},e.id)}))})]})}},3168:function(e,n,t){t.d(n,{$:function(){return h}});var r=t(9439),i=t(4942),a=t(2791),s=t(4909);function o(){if(console&&console.warn){for(var e,n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];"string"===typeof t[0]&&(t[0]="react-i18next:: ".concat(t[0])),(e=console).warn.apply(e,t)}}var c={};function u(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];"string"===typeof n[0]&&c[n[0]]||("string"===typeof n[0]&&(c[n[0]]=new Date),o.apply(void 0,n))}function l(e,n,t){e.loadNamespaces(n,(function(){if(e.isInitialized)t();else{e.on("initialized",(function n(){setTimeout((function(){e.off("initialized",n)}),0),t()}))}}))}function d(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!n.languages||!n.languages.length)return u("i18n.languages were undefined or empty",n.languages),!0;var r=n.languages[0],i=!!n.options&&n.options.fallbackLng,a=n.languages[n.languages.length-1];if("cimode"===r.toLowerCase())return!0;var s=function(e,t){var r=n.services.backendConnector.state["".concat(e,"|").concat(t)];return-1===r||2===r};return!(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!s(n.isLanguageChangingTo,e))&&(!!n.hasResourceBundle(r,e)||(!n.services.backendConnector.backend||!(!s(r,e)||i&&!s(a,e))))}function f(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function g(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?f(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function h(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.i18n,i=(0,a.useContext)(s.OO)||{},o=i.i18n,c=i.defaultNS,f=t||o||(0,s.nI)();if(f&&!f.reportNamespaces&&(f.reportNamespaces=new s.zv),!f){u("You will need to pass in an i18next instance by using initReactI18next");var h=function(e){return Array.isArray(e)?e[e.length-1]:e},p=[h,{},!1];return p.t=h,p.i18n={},p.ready=!1,p}f.options.react&&void 0!==f.options.react.wait&&u("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var b=g(g(g({},(0,s.JP)()),f.options.react),n),v=b.useSuspense,y=b.keyPrefix,m=e||c||f.options&&f.options.defaultNS;m="string"===typeof m?[m]:m||["translation"],f.reportNamespaces.addUsedNamespaces&&f.reportNamespaces.addUsedNamespaces(m);var w=(f.isInitialized||f.initializedStoreOnce)&&m.every((function(e){return d(e,f,b)}));function T(){return f.getFixedT(null,"fallback"===b.nsMode?m:m[0],y)}var j=(0,a.useState)(T),O=(0,r.Z)(j,2),S=O[0],N=O[1],x=(0,a.useRef)(!0);(0,a.useEffect)((function(){var e=b.bindI18n,n=b.bindI18nStore;function t(){x.current&&N(T)}return x.current=!0,w||v||l(f,m,(function(){x.current&&N(T)})),e&&f&&f.on(e,t),n&&f&&f.store.on(n,t),function(){x.current=!1,e&&f&&e.split(" ").forEach((function(e){return f.off(e,t)})),n&&f&&n.split(" ").forEach((function(e){return f.store.off(e,t)}))}}),[f,m.join()]);var k=(0,a.useRef)(!0);(0,a.useEffect)((function(){x.current&&!k.current&&N(T),k.current=!1}),[f]);var P=[S,f,w];if(P.t=S,P.i18n=f,P.ready=w,w)return P;if(!w&&!v)return P;throw new Promise((function(e){l(f,m,(function(){e()}))}))}}}]);
//# sourceMappingURL=335.80826565.chunk.js.map