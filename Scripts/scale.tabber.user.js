// ==UserScript==
// @name          SCALE Tabber
// @namespace     http://stein.boston
// @description	  Provides tabbing functionality on student search page.
// @include       *smartt*
// ==/UserScript==

(function ($) {
    $(window).keydown(function (e) {
        if (e.keyCode == 13 || e.which == 13) {
            $('button[id="studentSearchForm:search"]').click();
        }
        if (e.keyCode == 9 || e.which == 9) {
            if ($('input[id="studentSearchForm:lastName"]').is(":focus")) {
                $('input[id="studentSearchForm:firstName"]').focus();
            } else {
                $('input[id="studentSearchForm:lastName"]').focus();
            }
            e.preventDefault();
        }
    });
})(window.jQuery);