"use strict";!function(t){var e="offset",n=function(){},o=void 0===t.addEventListener,r={loopDelay:50,maxLoop:5,debug:!0,found:n,notfound:n,complete:n};var l=function(){var t={};this.addUrl=function(e){return t[e]={url:e,state:"pending",format:null,data:null,result:null},t[e]},this.setResult=function(e,n,o){var r=t[e];if(null==r&&(r=this.addUrl(e)),r.state=n,null!=o){if("string"==typeof o)try{o=function(t){var e;try{e=JSON.parse(t)}catch(n){try{e=new Function("return "+t)()}catch(t){m("Failed secondary JSON parse",!0)}}return e}(o),r.format="json"}catch(t){r.format="easylist"}return r.data=o,r}r.result=null}},i=[],u=null,a={cssClass:"pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links"},s={nullProps:[e+"Parent"],zeroProps:[]};s.zeroProps=[e+"Height",e+"Left",e+"Top",e+"Width",e+"Height","clientHeight","clientWidth"];var d={quick:null,remote:null},c=null,f={test:0,download:0};function p(t){return"function"==typeof t}function m(e,n){(r.debug||n)&&t.console&&t.console.log&&(n?console.error("[ABD] "+e):console.log("[ABD] "+e))}function y(t){m("start beginTest"),1!=c&&(!0,v(t),d.quick="testing",f.test=setTimeout(function(){!function t(e,n){var o;var l=document.body;var d=!1;null==u&&(m("recast bait"),v(e||a));if("string"==typeof e)return m("invalid bait used",!0),void(b()&&setTimeout(function(){!1},5));f.test>0&&(clearTimeout(f.test),f.test=0);null!==l.getAttribute("abp")&&(m("found adblock body attribute"),d=!0);for(o=0;o<s.nullProps.length;o++){if(null==u[s.nullProps[o]]){n>4&&(d=!0),m("found adblock null attr: "+s.nullProps[o]);break}if(1==d)break}for(o=0;o<s.zeroProps.length&&1!=d;o++)0==u[s.zeroProps[o]]&&(n>4&&(d=!0),m("found adblock zero attr: "+s.zeroProps[o]));if(void 0!==window.getComputedStyle){var y=window.getComputedStyle(u,null);"none"!=y.getPropertyValue("display")&&"hidden"!=y.getPropertyValue("visibility")||(n>4&&(d=!0),m("found adblock computedStyle indicator"))}!0;d||n++>=r.maxLoop?(m("exiting test loop - value: "+(c=d)),function(){var t,e;if(null===c)return;for(t=0;t<i.length;t++){e=i[t];try{null!=e&&(p(e.complete)&&e.complete(c),c&&p(e.found)?e.found():!1===c&&p(e.notfound)&&e.notfound())}catch(t){m("Failure in notify listeners "+t.Message,!0)}}}(),b()&&setTimeout(function(){!1},5)):f.test=setTimeout(function(){t(e,n)},r.loopDelay)}(t,1)},5))}function v(t){var e,n=document.body,o="width: 1px !important; height: 1px !important; position: absolute !important; left: -10000px !important; top: -1000px !important;";if(null!=t&&"string"!=typeof t){for(null!=t.style&&(o+=t.style),u=function(t,e){var n,o,r=e;if(o=document.createElement(t),r)for(n in r)r.hasOwnProperty(n)&&o.setAttribute(n,r[n]);return o}("div",{class:t.cssClass,style:o}),m("adding bait node to DOM"),n.appendChild(u),e=0;e<s.nullProps.length;e++)u[s.nullProps[e]];for(e=0;e<s.zeroProps.length;e++)u[s.zeroProps[e]]}else m("invalid bait being cast")}function b(){if(null===u)return!0;try{p(u.remove)&&u.remove(),document.body.removeChild(u)}catch(t){}return u=null,!0}function g(){var e,n,r,l,i=!1;document.readyState&&"complete"==document.readyState&&(i=!0),e=function(){y(a)},i?e():(n=t,r="load",l=e,o?n.attachEvent("on"+r,l):n.addEventListener(r,l,!1))}var h={version:"1.0",init:function(t){var e,o;if(t){for(e in o={complete:n,found:n,notfound:n},t)t.hasOwnProperty(e)&&("complete"==e||"found"==e||"notFound"==e?o[e.toLowerCase()]=t[e]:r[e]=t[e]);i.push(o),new l,g()}}};t.adblockDetector=h}(window);