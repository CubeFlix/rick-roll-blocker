// ==UserScript==
// @name         Rick Roll Blocker
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Blocks Rick Rolls or sites that even mention them.
// @author       cubeflix
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var forbiddenWords = ["rickroll", "rickastley", "nevergonnagiveyouup", "rickrolled"];
    var innerText = document.documentElement.innerHTML.split(' ').join('').split('-').join('').toLowerCase();

    for (var i = 0; i < forbiddenWords.length; i++){
        if (innerText.search(forbiddenWords[i]) != -1){
            document.documentElement.innerHTML = "<p style=\"font-size:100px;\">The following page could be a Rick Roll. No need to thank <a href=\"http://github.com/cubeflix\">me</a>.</p>";
        }
    }
})();
