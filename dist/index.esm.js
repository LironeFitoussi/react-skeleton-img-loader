import React, { useState, useCallback, useRef, useEffect } from 'react';
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

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var useLazyImage = function (src, _a) {
    var width = _a.width, height = _a.height, _b = _a.alt, alt = _b === void 0 ? '' : _b, _c = _a.style, style = _c === void 0 ? {} : _c;
    var _d = useState(false), loaded = _d[0], setLoaded = _d[1];
    var _e = useState(false), error = _e[0], setError = _e[1];
    var handleImageLoad = useCallback(function () { return setLoaded(true); }, []);
    var handleImageError = useCallback(function () { return setError(true); }, []);
    var imageRef = useRef(null);
    useEffect(function () {
        if (imageRef.current) {
            var img_1 = imageRef.current;
            img_1.addEventListener('load', handleImageLoad);
            img_1.addEventListener('error', handleImageError);
            return function () {
                img_1.removeEventListener('load', handleImageLoad);
                img_1.removeEventListener('error', handleImageError);
            };
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
        React.createElement("img", { ref: imageRef, src: src, alt: alt, width: width, height: height, style: __assign({ display: loaded ? 'block' : 'none' }, style) })));
};

export { useLazyImage as default };
//# sourceMappingURL=index.esm.js.map
