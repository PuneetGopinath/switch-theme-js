/**
 * Switch Theme JS v1.0.0-alpha1
 * Copyright (c) 2021 The Baal Krshna Team
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
    }

    var getCookie = function (name) {
        var name = name + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(";");
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == " ") {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    return {
        switch: function (theme) {
            document.documentElement.dataset.theme = theme;
            setCookie("theme", theme, 10);
            console.log("Switched theme to: " + theme);
        },

        get: function () {
            var theme = getCookie("theme");
            if (theme !== "") {
                switchTheme.switch(theme);
            }
            return theme;
        },
    };
});
