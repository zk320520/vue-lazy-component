!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["vue-lazy-component"]=e():t["vue-lazy-component"]=e()}(this,function(){return function(t){function e(n){if(i[n])return i[n].exports;var r=i[n]={exports:{},id:n,loaded:!1};return t[n].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var i={};return e.m=t,e.c=i,e.p="",e(0)}([function(t,e){"use strict";function i(t){var e=t.node;if(t.end)for(;!e.__vue__&&e!==t.end&&e.nextSibling;)e=e.nextSibling;return e.__vue__}function n(t){var e=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],n=t.FragmentFactory,r=t.util,o=r.createAnchor,s=r.replace;t.directive(e.name||"lazy",{terminal:!0,bind:function(){this.isInit=!1,this.anchor=o("v-if"),s(this.el,this.anchor)},update:function(t){var e=this;this.isInit||window.setTimeout(function(){e.insert(),e.updateRef(),e.isInit=!0},t||0)},unbind:function(){this.frag&&this.frag.destroy()},insert:function(){this.factory||(this.factory=new n(this.vm,this.el)),this.frag=this.factory.create(this._host,this._scope,this._frag),this.frag.before(this.anchor)},updateRef:function(){var t=this.descriptor.ref;if(t){var e=(this.vm||this._scope).$refs,n=e[t],r=this._frag.scope.$key;n&&(Array.isArray(n)?n.push(i(this._frag)):n[r]=i(this._frag))}}})}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=n}])});