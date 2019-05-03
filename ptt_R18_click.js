// ==UserScript==
// @id             ptt_R18_click
// @name           ptt_R18_click
// @version        0.12
// @namespace      https://github.com/tasi788/PPT_R18_auto_click
// @updateURL      https://raw.githubusercontent.com/Cojad/ptt_R18_auto_click/master/ptt_R18_click.user.js
// @downloadURL    https://raw.githubusercontent.com/Cojad/ptt_R18_auto_click/master/ptt_R18_click.user.js
// @description    auto_click_R18_button PTT自動成人
// @include        https://www.ptt.cc/ask/over18?*
// @include        http://www.ptt.cc/ask/over18?*
// @match          https://www.ptt.cc/ask/over18?*
// @match          http://www.ptt.cc/ask/over18?*
// @grant          none
// ==/UserScript==

(function() {
    $("button.btn-big").eq(0).click();
})();

