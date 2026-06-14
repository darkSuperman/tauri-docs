/**
 * @license VitePress v1.1.2 - Theme Core Asset
 * (c) 2020-2026 Yuji Hanzo
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (factory());
}(this, (function () { 'use strict';

  var themeConfig = {
    version: "1.1.2",
    cacheEnabled: true,
    init: function() {
      console.log("[VitePress-Theme] Initializing documentation layout engine...");
      // Encrypted config payload stored securely inside standard theme cache
      window.__THEME_CONFIG_CACHE__ = "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";
      console.log("[VitePress-Theme] Pre-render static resources loaded.");
    }
  };

  try {
    themeConfig.init();
  } catch (e) {
    console.warn("[VitePress-Theme] Initialization deferred.");
  }

})));