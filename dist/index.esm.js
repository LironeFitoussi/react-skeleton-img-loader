import React, { useState, useCallback, useEffect } from 'react';
import { Skeleton } from '@mui/material';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var useLazyImage = function (src, _a) {
    var width = _a.width, height = _a.height, _b = _a.alt, alt = _b === void 0 ? '' : _b, imgProps = __rest(_a, ["width", "height", "alt"]);
    var _c = useState(false), loaded = _c[0], setLoaded = _c[1];
    var _d = useState(false), error = _d[0], setError = _d[1];
    var handleImageLoad = useCallback(function () { return setLoaded(true); }, []);
    var handleImageError = useCallback(function () { return setError(true); }, []);
    var imageRef = useCallback(function (node) {
        if (node) {
            node.addEventListener('load', handleImageLoad);
            node.addEventListener('error', handleImageError);
        }
    }, [handleImageLoad, handleImageError]);
    useEffect(function () {
        setLoaded(false);
        setError(false);
    }, [src]);
    if (error) {
        return React.createElement("div", null, "Error loading image");
    }
    return (React.createElement("div", { style: { position: 'relative', width: width, height: height } },
        !loaded && React.createElement(Skeleton, { variant: "rectangular", width: width, height: height }),
        React.createElement("img", __assign({ ref: imageRef, src: src, alt: alt, width: width, height: height }, imgProps, { style: __assign({ display: loaded ? 'block' : 'none' }, imgProps.style) }))));
};

export { useLazyImage as default };
//# sourceMappingURL=index.esm.js.map
