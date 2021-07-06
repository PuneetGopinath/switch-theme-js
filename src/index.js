/**
 * Switch Theme JS v1.0.0-alpha1
 * Copyright (c) 2021 The Baal Krshna Team and Contributors
 * @license Lesser General Public License v2.1 (LGPl-2.1 - https://opensource.org/licenses/lgpl-2.1.php)
 */

(function (root, ns, factory) {
    "use strict";
    root[ns] = factory(ns, root);
})(window, "switchTheme", function () {
    var setCookie = function (name, value, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
        var expires = "expires=" + d.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    };
    var checkEmpty = function (variable) {
        if (variable) {
            return false;
        }
        return true;
    };
    var getCookie = function (cname) {
        const name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(";");
        var i;
        var c;
        for (i = 0; i < ca.length; i++) {
            c = ca[i];
            while (c.charAt(0) == " ") {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    };

    return {
        version: "v1.0.0-alpha1",
        get: function () {
            var theme = getCookie("theme");
            if (!checkEmpty(theme)) {
                this.switch(theme);
            } else {
                console.log("Theme not set or empty, can't get theme name");
            }
            return theme;
        },
        switch: function (theme) {
            document.documentElement.dataset.theme = theme;
            setCookie("theme", theme, 10);
            checkEmpty(theme) ? console.log("Theme not set or empty, can't switch theme") : console.log("Switched to: " + theme + " theme");
        },
    };
});
