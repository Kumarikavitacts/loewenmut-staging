(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/AnimatedText.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/ThemeContext.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const DEFAULT_THEME = "yellow";
const AnimatedText = ()=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const themeContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const theme = themeContext?.theme || DEFAULT_THEME;
    const themeImages = {
        yellow: "/images/image-loewenmut-yellow.png",
        blue: "/images/image-loewenmut-blue.png",
        green: "/images/image-loewenmut-green.png",
        pink: "/images/image-loewenmut-pink.png"
    };
    const talkImage = themeImages[theme] || themeImages[DEFAULT_THEME];
    const handleGoToContact = ()=>{
        router.push("/kontakt");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: talkImage,
                    alt: ""
                }, void 0, false, {
                    fileName: "[project]/src/components/AnimatedText.jsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/AnimatedText.jsx",
                lineNumber: 31,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: "/images/moving-text.svg",
                className: "cursorPointer",
                onClick: handleGoToContact,
                alt: ""
            }, void 0, false, {
                fileName: "[project]/src/components/AnimatedText.jsx",
                lineNumber: 35,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AnimatedText.jsx",
        lineNumber: 30,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AnimatedText, "eFgUkdz0H9wvXwOTIph/XTSJhjw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = AnimatedText;
const __TURBOPACK__default__export__ = AnimatedText;
var _c;
__turbopack_context__.k.register(_c, "AnimatedText");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Home_Page_Components/Hero.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ResuableComponents$2f$SvgIcon$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ResuableComponents/SvgIcon.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ResuableComponents$2f$renderHtmlText$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ResuableComponents/renderHtmlText.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const Hero = ({ assets, scrollToNext })=>{
    _s();
    const heroData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "Hero.useSelector[heroData]": (state)=>state.home.data?.hero
    }["Hero.useSelector[heroData]"]);
    const untertitel = heroData?.untertitel || "";
    const titel1 = heroData?.titel1 || "";
    const titel2 = heroData?.titel2 || "";
    const beschreibung = heroData?.beschreibung || "";
    const benefits = heroData?.benefits || [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "pb_3 hero_section",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container position-relative",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero_row pb-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: assets.icon1,
                                alt: "",
                                className: "hro_icon_1",
                                "data-aos": "zoom-in"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Home_Page_Components/Hero.jsx",
                                lineNumber: 22,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: assets.icon2,
                                alt: "",
                                className: "hro_icon_2",
                                "data-aos": "zoom-in"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Home_Page_Components/Hero.jsx",
                                lineNumber: 23,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ResuableComponents$2f$renderHtmlText$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderHtmlText"])(untertitel)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Home_Page_Components/Hero.jsx",
                                        lineNumber: 25,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "line",
                                        "data-text": titel1,
                                        children: titel1
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Home_Page_Components/Hero.jsx",
                                        lineNumber: 26,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "line line-2",
                                        "data-text": titel2,
                                        children: titel2
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Home_Page_Components/Hero.jsx",
                                        lineNumber: 27,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Home_Page_Components/Hero.jsx",
                                lineNumber: 24,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hero_tech_text",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "htt_left",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: assets.icon3,
                                                alt: "",
                                                "data-aos": "zoom-in"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Home_Page_Components/Hero.jsx",
                                                lineNumber: 31,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: beschreibung
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Home_Page_Components/Hero.jsx",
                                                lineNumber: 32,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Home_Page_Components/Hero.jsx",
                                        lineNumber: 30,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "htt_right",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: assets.icon4,
                                                alt: "",
                                                "data-aos": "zoom-in"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Home_Page_Components/Hero.jsx",
                                                lineNumber: 35,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "scroll-down-btn",
                                                onClick: scrollToNext,
                                                "aria-label": "Scroll down",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "mouse-icon",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "mouse-wheel"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Home_Page_Components/Hero.jsx",
                                                        lineNumber: 38,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Home_Page_Components/Hero.jsx",
                                                    lineNumber: 37,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Home_Page_Components/Hero.jsx",
                                                lineNumber: 36,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Home_Page_Components/Hero.jsx",
                                        lineNumber: 34,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Home_Page_Components/Hero.jsx",
                                lineNumber: 29,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Home_Page_Components/Hero.jsx",
                        lineNumber: 21,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/Home_Page_Components/Hero.jsx",
                    lineNumber: 20,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Home_Page_Components/Hero.jsx",
                lineNumber: 19,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "pb_3 feature_section",
                "data-aos": "fade-up",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                            fileName: "[project]/src/components/Home_Page_Components/Hero.jsx",
                            lineNumber: 48,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "row feature_row mt-4 mt-lg-5",
                            children: benefits.map((benefit)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-6 col-lg-3   feature-col text-center",
                                    children: [
                                        benefit.Icon?.url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ResuableComponents$2f$SvgIcon$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: benefit.Icon.url
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Home_Page_Components/Hero.jsx",
                                                lineNumber: 56,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Home_Page_Components/Hero.jsx",
                                            lineNumber: 55,
                                            columnNumber: 36
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "feature_content",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    children: benefit.Titel
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Home_Page_Components/Hero.jsx",
                                                    lineNumber: 65,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: benefit.Text
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Home_Page_Components/Hero.jsx",
                                                    lineNumber: 66,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Home_Page_Components/Hero.jsx",
                                            lineNumber: 64,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, benefit.id, true, {
                                    fileName: "[project]/src/components/Home_Page_Components/Hero.jsx",
                                    lineNumber: 53,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Home_Page_Components/Hero.jsx",
                            lineNumber: 50,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Home_Page_Components/Hero.jsx",
                    lineNumber: 47,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Home_Page_Components/Hero.jsx",
                lineNumber: 46,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Home_Page_Components/Hero.jsx",
        lineNumber: 18,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Hero, "QdpK477VNpvf5zXgUguxVxRhatY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"]
    ];
});
_c = Hero;
const __TURBOPACK__default__export__ = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Home_Page_Components/Insights.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helper$2f$MediaUrl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/helper/MediaUrl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ResuableComponents$2f$renderHtmlText$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ResuableComponents/renderHtmlText.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const Insights = ()=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const insights = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "Insights.useSelector[insights]": (state)=>state.home.data?.references
    }["Insights.useSelector[insights]"]);
    const subTitle = insights?.Kurztitel || "";
    const titel = insights?.Titel || "";
    const buttonText = insights?.Button?.[0]?.button_text;
    const buttonLink = insights?.Button?.[0]?.button_link;
    // const buttonTarget = insights?.Button?.[0]?.Target || "_self";
    // Map API references
    const mappedReferences = (insights?.referenzens || []).map((item)=>({
            id: item.id,
            documentId: item.documentId,
            title: item.Titel,
            slug: item.Slug,
            text: item.Text,
            image: item.Bild,
            imageUrl: item.Bild?.url ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helper$2f$MediaUrl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMediaUrl"])(item.Bild.url) : null,
            module: item.Modul || []
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "pt_pb_3 insight_section",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sec-content",
                        "data-aos": "fade-up",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sub_title",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ResuableComponents$2f$renderHtmlText$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderHtmlText"])(subTitle)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Home_Page_Components/Insights.jsx",
                                lineNumber: 41,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "title_btn_flex",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "mb-0",
                                        children: [
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ResuableComponents$2f$renderHtmlText$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderHtmlText"])(titel),
                                            " "
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Home_Page_Components/Insights.jsx",
                                        lineNumber: 45,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "theme_btn_wrap",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/insights",
                                            className: "button theme_btn",
                                            children: [
                                                buttonText,
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: "/images/btn-arrow.svg",
                                                    alt: ""
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Home_Page_Components/Insights.jsx",
                                                    lineNumber: 47,
                                                    columnNumber: 82
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " "
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Home_Page_Components/Insights.jsx",
                                            lineNumber: 47,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Home_Page_Components/Insights.jsx",
                                        lineNumber: 46,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Home_Page_Components/Insights.jsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Home_Page_Components/Insights.jsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "row mt-lg-4",
                        "data-aos": "fade-up",
                        children: mappedReferences.map((insight)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-12 col-sm-6 col-lg-4 item-col mt-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    onClick: ()=>router.push(`/insights/${insight.slug}`),
                                    className: "insight_item",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "insight_img",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: insight.imageUrl,
                                                alt: insight.alt
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Home_Page_Components/Insights.jsx",
                                                lineNumber: 68,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Home_Page_Components/Insights.jsx",
                                            lineNumber: 67,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "insight_content_btn",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "insight_content",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            children: insight.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Home_Page_Components/Insights.jsx",
                                                            lineNumber: 78,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: insight.text
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Home_Page_Components/Insights.jsx",
                                                            lineNumber: 79,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Home_Page_Components/Insights.jsx",
                                                    lineNumber: 77,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "arrow_btn",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        width: "62",
                                                        height: "62",
                                                        viewBox: "0 0 62 62",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M21.7031 15.3516L45.8089 15.3516L45.8089 39.4574",
                                                                stroke: "#878C91",
                                                                strokeWidth: "3",
                                                                strokeMiterlimit: "10",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Home_Page_Components/Insights.jsx",
                                                                lineNumber: 90,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M12.0547 49.1094L45.4732 15.6908",
                                                                stroke: "#878C91",
                                                                strokeWidth: "3",
                                                                strokeMiterlimit: "10",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Home_Page_Components/Insights.jsx",
                                                                lineNumber: 99,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Home_Page_Components/Insights.jsx",
                                                        lineNumber: 83,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Home_Page_Components/Insights.jsx",
                                                    lineNumber: 82,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Home_Page_Components/Insights.jsx",
                                            lineNumber: 75,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Home_Page_Components/Insights.jsx",
                                    lineNumber: 61,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, insight.id, false, {
                                fileName: "[project]/src/components/Home_Page_Components/Insights.jsx",
                                lineNumber: 54,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Home_Page_Components/Insights.jsx",
                        lineNumber: 51,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Home_Page_Components/Insights.jsx",
                lineNumber: 39,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Home_Page_Components/Insights.jsx",
            lineNumber: 38,
            columnNumber: 1
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/Home_Page_Components/Insights.jsx",
        lineNumber: 37,
        columnNumber: 1
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Insights, "+D/lQzuHTBxVp1coN960QtySlng=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"]
    ];
});
_c = Insights;
const __TURBOPACK__default__export__ = Insights;
var _c;
__turbopack_context__.k.register(_c, "Insights");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Home_Page_Components/News.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helper$2f$Utils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/helper/Utils.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ResuableComponents$2f$NewsCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ResuableComponents/NewsCard.jsx [app-client] (ecmascript)");
"use client";
;
;
;
;
const News = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "pt_pb_3 news_section",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ResuableComponents$2f$NewsCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            newsData: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helper$2f$Utils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["newsData"].slice(0, 3),
            showHeader: true,
            showFooter: true,
            button: "Alle News",
            buttonLink: "/news"
        }, void 0, false, {
            fileName: "[project]/src/components/Home_Page_Components/News.jsx",
            lineNumber: 10,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/Home_Page_Components/News.jsx",
        lineNumber: 9,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = News;
const __TURBOPACK__default__export__ = News;
var _c;
__turbopack_context__.k.register(_c, "News");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Home_Page_Components/Project.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AnimatedText$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AnimatedText.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helper$2f$MediaUrl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/helper/MediaUrl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ResuableComponents$2f$renderHtmlText$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ResuableComponents/renderHtmlText.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const Project = ()=>{
    _s();
    const projectData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "Project.useSelector[projectData]": (state)=>state.home.data?.project
    }["Project.useSelector[projectData]"]);
    if (!projectData) {
        return null;
    }
    const kurztitel = projectData?.Kurztitel || "";
    const titel = projectData?.Titel || "";
    const bild = projectData?.Bild?.[0];
    const imageUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helper$2f$MediaUrl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMediaUrl"])(bild?.url) || "/images/ortweise.png";
    const beschreibung = projectData?.Beschreibung || [];
    const showButton = projectData?.Komponente === "Button";
    const buttonText = projectData?.Button[0].button_text;
    const buttonLink = projectData?.Button[0].button_link;
    /**
   * Get text from Strapi rich-text children
   */ const getText = (children = [])=>{
        return children.map((child)=>child?.text || "").join("");
    };
    /**
   * Render every Strapi description block dynamically
   */ const renderDescriptionBlock = (block, index)=>{
        if (!block) return null;
        switch(block.type){
            /*
       * HEADING
       */ case "heading":
                {
                    const level = block.level || 3;
                    const HeadingTag = `h${Math.min(Math.max(level, 1), 6)}`;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HeadingTag, {
                        className: level === 3 ? "fw-regular my-3" : "",
                        children: getText(block.children)
                    }, index, false, {
                        fileName: "[project]/src/components/Home_Page_Components/Project.jsx",
                        lineNumber: 55,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0));
                }
            /*
       * PARAGRAPH
       */ case "paragraph":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: getText(block.children)
                }, index, false, {
                    fileName: "[project]/src/components/Home_Page_Components/Project.jsx",
                    lineNumber: 69,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            /*
       * UNORDERED / ORDERED LIST
       */ case "list":
                {
                    const ListTag = block.format === "ordered" ? "ol" : "ul";
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ListTag, {
                        children: block.children?.map((listItem, itemIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: getText(listItem?.children)
                            }, itemIndex, false, {
                                fileName: "[project]/src/components/Home_Page_Components/Project.jsx",
                                lineNumber: 84,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, index, false, {
                        fileName: "[project]/src/components/Home_Page_Components/Project.jsx",
                        lineNumber: 82,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0));
                }
            /*
       * QUOTE
       */ case "quote":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                    children: getText(block.children)
                }, index, false, {
                    fileName: "[project]/src/components/Home_Page_Components/Project.jsx",
                    lineNumber: 97,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            /*
       * CODE
       */ case "code":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                        children: getText(block.children)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Home_Page_Components/Project.jsx",
                        lineNumber: 108,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, index, false, {
                    fileName: "[project]/src/components/Home_Page_Components/Project.jsx",
                    lineNumber: 107,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            /*
       * LINK
       */ case "link":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: block.url || "#",
                    children: getText(block.children)
                }, index, false, {
                    fileName: "[project]/src/components/Home_Page_Components/Project.jsx",
                    lineNumber: 119,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            /*
       * Default
       *
       * If Strapi adds another block type that we haven't
       * explicitly handled, still try to render its text.
       */ default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: getText(block.children)
                }, index, false, {
                    fileName: "[project]/src/components/Home_Page_Components/Project.jsx",
                    lineNumber: 135,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "pt_3 project_section",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-wrapper position-relative",
                "data-aos": "slide-up",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "row flex-lg-row-reverse",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-12 col-lg-6 ms-auto img-col",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: imageUrl,
                                    alt: bild?.alternativeText || titel || "Project",
                                    className: "w-100 img_radius"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Home_Page_Components/Project.jsx",
                                    lineNumber: 153,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Home_Page_Components/Project.jsx",
                                lineNumber: 152,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-12 col-lg-6 content-col mt-4 mt-lg-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "sec-content",
                                    children: [
                                        kurztitel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "sub_title",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ResuableComponents$2f$renderHtmlText$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderHtmlText"])(kurztitel)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Home_Page_Components/Project.jsx",
                                            lineNumber: 170,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        titel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ResuableComponents$2f$renderHtmlText$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderHtmlText"])(titel)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Home_Page_Components/Project.jsx",
                                            lineNumber: 177,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        beschreibung.map(renderDescriptionBlock),
                                        showButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "theme_btn_wrap mt-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: `${buttonLink}`,
                                                className: "button theme_btn",
                                                children: [
                                                    buttonText,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: "/images/btn-arrow.svg",
                                                        alt: ""
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Home_Page_Components/Project.jsx",
                                                        lineNumber: 194,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Home_Page_Components/Project.jsx",
                                                lineNumber: 188,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Home_Page_Components/Project.jsx",
                                            lineNumber: 187,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Home_Page_Components/Project.jsx",
                                    lineNumber: 166,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Home_Page_Components/Project.jsx",
                                lineNumber: 165,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Home_Page_Components/Project.jsx",
                        lineNumber: 149,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "anim_circle",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AnimatedText$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/components/Home_Page_Components/Project.jsx",
                            lineNumber: 207,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Home_Page_Components/Project.jsx",
                        lineNumber: 206,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Home_Page_Components/Project.jsx",
                lineNumber: 145,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Home_Page_Components/Project.jsx",
            lineNumber: 144,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/Home_Page_Components/Project.jsx",
        lineNumber: 143,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Project, "aRBIaNYxp2Yq7oo1J7GKzRNGFfQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"]
    ];
});
_c = Project;
const __TURBOPACK__default__export__ = Project;
var _c;
__turbopack_context__.k.register(_c, "Project");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Home_Page_Components/Services.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceSlider$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ServiceSlider.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ResuableComponents$2f$renderHtmlText$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ResuableComponents/renderHtmlText.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const Services = ({ nextSectionRef })=>{
    _s();
    const servicesIntro = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "Services.useSelector[servicesIntro]": (state)=>state.home.data?.servicesIntro
    }["Services.useSelector[servicesIntro]"]);
    const kurztitel = servicesIntro?.Kurztitel || "";
    const titel = servicesIntro?.Titel || "";
    const paragraph = servicesIntro?.Text?.[0]?.children?.[0]?.text || "";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: nextSectionRef,
        className: "pt_pb_3 services_section overflow-hidden",
        style: {
            backgroundImage: "url('/images/bg-pattern.png')"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-12 col-lg-4 content-col",
                            "data-aos": "fade-right",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sub_title",
                                children: [
                                    kurztitel,
                                    " "
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Home_Page_Components/Services.jsx",
                                lineNumber: 17,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Home_Page_Components/Services.jsx",
                            lineNumber: 16,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-12 col-lg-7 ms-auto content-col",
                            "data-aos": "fade-left",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: [
                                    " ",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ResuableComponents$2f$renderHtmlText$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderHtmlText"])(titel)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Home_Page_Components/Services.jsx",
                                lineNumber: 20,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Home_Page_Components/Services.jsx",
                            lineNumber: 19,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Home_Page_Components/Services.jsx",
                    lineNumber: 15,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceSlider$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    paragraph: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ResuableComponents$2f$renderHtmlText$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderHtmlText"])(paragraph)
                }, void 0, false, {
                    fileName: "[project]/src/components/Home_Page_Components/Services.jsx",
                    lineNumber: 23,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Home_Page_Components/Services.jsx",
            lineNumber: 14,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/Home_Page_Components/Services.jsx",
        lineNumber: 13,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Services, "B0V1zet3m+fJbyrSIt7y3kD7i2Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"]
    ];
});
_c = Services;
const __TURBOPACK__default__export__ = Services;
var _c;
__turbopack_context__.k.register(_c, "Services");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Home_Page_Components/Talk.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TalkSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TalkSection.jsx [app-client] (ecmascript)");
"use client";
;
;
;
const Talk = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "pt_pb_3 talk_section",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TalkSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/components/Home_Page_Components/Talk.jsx",
            lineNumber: 9,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/Home_Page_Components/Talk.jsx",
        lineNumber: 8,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Talk;
const __TURBOPACK__default__export__ = Talk;
var _c;
__turbopack_context__.k.register(_c, "Talk");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Home_Page_Components/Work.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WorkSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/WorkSection.jsx [app-client] (ecmascript)");
"use client";
;
;
;
const Work = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "pt_3 search_section",
        style: {
            backgroundImage: "url('/images/bg-pattern.png')"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container ",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WorkSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/Home_Page_Components/Work.jsx",
                lineNumber: 9,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Home_Page_Components/Work.jsx",
            lineNumber: 8,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/Home_Page_Components/Work.jsx",
        lineNumber: 7,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Work;
const __TURBOPACK__default__export__ = Work;
var _c;
__turbopack_context__.k.register(_c, "Work");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ResuableComponents/NewsCard.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
"use client";
;
;
;
;
const NewsCard = ({ newsData = [], showHeader = false, subTitle = "Related news", heading = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
    children: [
        "Nibh vel velit ",
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "Auctor Aliquet"
        }, void 0, false, {
            fileName: "[project]/src/components/ResuableComponents/NewsCard.jsx",
            lineNumber: 13,
            columnNumber: 22
        }, ("TURBOPACK compile-time value", void 0))
    ]
}, void 0, true, {
    fileName: "[project]/src/components/ResuableComponents/NewsCard.jsx",
    lineNumber: 12,
    columnNumber: 5
}, ("TURBOPACK compile-time value", void 0)), showFooter = false, button, buttonLink })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container",
        children: [
            showHeader && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sec-content",
                "data-aos": "fade-right",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sub_title",
                        children: subTitle
                    }, void 0, false, {
                        fileName: "[project]/src/components/ResuableComponents/NewsCard.jsx",
                        lineNumber: 27,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: heading
                    }, void 0, false, {
                        fileName: "[project]/src/components/ResuableComponents/NewsCard.jsx",
                        lineNumber: 31,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ResuableComponents/NewsCard.jsx",
                lineNumber: 26,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "row",
                "data-aos": "slide-up",
                children: newsData.map((news)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-12 col-sm-6 col-lg-4 item-col mt-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: `/news/${news.id}` || "/",
                            className: "news_item grey_bg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "news_img position-relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `news_tag ${news.categoryClass}`,
                                            children: news.category
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ResuableComponents/NewsCard.jsx",
                                            lineNumber: 50,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: news.image,
                                            alt: news.title,
                                            className: "w-100"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ResuableComponents/NewsCard.jsx",
                                            lineNumber: 56,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ResuableComponents/NewsCard.jsx",
                                    lineNumber: 48,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "news_content",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "news_date",
                                            children: news.date
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ResuableComponents/NewsCard.jsx",
                                            lineNumber: 66,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: news.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ResuableComponents/NewsCard.jsx",
                                            lineNumber: 70,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: news.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ResuableComponents/NewsCard.jsx",
                                            lineNumber: 74,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                                            fileName: "[project]/src/components/ResuableComponents/NewsCard.jsx",
                                            lineNumber: 78,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "arrow_btn",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Weiterlesen"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ResuableComponents/NewsCard.jsx",
                                                    lineNumber: 81,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "74",
                                                    height: "74",
                                                    viewBox: "0 0 74 74",
                                                    fill: "none",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                            cx: "36.7696",
                                                            cy: "36.7696",
                                                            r: "26",
                                                            transform: "rotate(-45 36.7696 36.7696)",
                                                            fill: "var(--bs-themecolor)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ResuableComponents/NewsCard.jsx",
                                                            lineNumber: 92,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M47.1916 26.7107L47.4887 42.1906L45.1998 42.1464L44.9756 30.4976L27.8367 47.6365L26.1986 45.9984L43.1878 29.0092L31.5364 28.7862L31.492 26.4895L47.1916 26.7107Z",
                                                            fill: "#373737"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ResuableComponents/NewsCard.jsx",
                                                            lineNumber: 100,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ResuableComponents/NewsCard.jsx",
                                                    lineNumber: 85,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ResuableComponents/NewsCard.jsx",
                                            lineNumber: 80,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ResuableComponents/NewsCard.jsx",
                                    lineNumber: 64,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ResuableComponents/NewsCard.jsx",
                            lineNumber: 44,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, news.id, false, {
                        fileName: "[project]/src/components/ResuableComponents/NewsCard.jsx",
                        lineNumber: 40,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/ResuableComponents/NewsCard.jsx",
                lineNumber: 38,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            showFooter && newsData?.length > 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "theme_btn_wrap d-flex justify-content-center mt-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: buttonLink,
                    className: "button theme_btn",
                    children: [
                        button,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/images/btn-arrow.svg",
                            alt: "Arrow"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ResuableComponents/NewsCard.jsx",
                            lineNumber: 122,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ResuableComponents/NewsCard.jsx",
                    lineNumber: 116,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ResuableComponents/NewsCard.jsx",
                lineNumber: 115,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ResuableComponents/NewsCard.jsx",
        lineNumber: 22,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
};
_c = NewsCard;
const __TURBOPACK__default__export__ = NewsCard;
var _c;
__turbopack_context__.k.register(_c, "NewsCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ResuableComponents/SvgIcon.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SvgIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helper$2f$MediaUrl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/helper/MediaUrl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function SvgIcon({ src, className = "" }) {
    _s();
    const [svg, setSvg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SvgIcon.useEffect": ()=>{
            const loadSvg = {
                "SvgIcon.useEffect.loadSvg": async ()=>{
                    try {
                        const response = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helper$2f$MediaUrl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMediaUrl"])(src));
                        if (!response.ok) {
                            throw new Error(`Failed to fetch SVG: ${response.status}`);
                        }
                        let svgText = await response.text();
                        // Replace hard-coded SVG colors with currentColor
                        svgText = svgText.replace(/fill="[^"]*"/gi, 'fill="currentColor"').replace(/stroke="[^"]*"/gi, 'stroke="currentColor"');
                        setSvg(svgText);
                    } catch (error) {
                        console.error("Failed to load SVG:", error);
                    }
                }
            }["SvgIcon.useEffect.loadSvg"];
            loadSvg();
        }
    }["SvgIcon.useEffect"], [
        src
    ]);
    if (!svg) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: className,
        dangerouslySetInnerHTML: {
            __html: svg
        }
    }, void 0, false, {
        fileName: "[project]/src/components/ResuableComponents/SvgIcon.jsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_s(SvgIcon, "BeQosiq5bQZyTJSmXWPBqC0KLfY=");
_c = SvgIcon;
var _c;
__turbopack_context__.k.register(_c, "SvgIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ResuableComponents/renderHtmlText.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "renderHtmlText",
    ()=>renderHtmlText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
const renderHtmlText = (html)=>{
    if (!html) return null;
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const convertTextNode = (text, key)=>{
        // Convert literal "\n" into actual line breaks
        const parts = text.split(/\r?\n/);
        return parts.map((part, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                children: [
                    part,
                    index < parts.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/src/components/ResuableComponents/renderHtmlText.jsx",
                        lineNumber: 17,
                        columnNumber: 38
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, `${key}-${index}`, true, {
                fileName: "[project]/src/components/ResuableComponents/renderHtmlText.jsx",
                lineNumber: 14,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)));
    };
    const convertNode = (node, index)=>{
        // Text node
        if (node.nodeType === Node.TEXT_NODE) {
            return convertTextNode(node.textContent, index);
        }
        // Ignore comments / unsupported node types
        if (node.nodeType !== Node.ELEMENT_NODE) {
            return null;
        }
        const children = Array.from(node.childNodes).map((child, childIndex)=>convertNode(child, `${index}-${childIndex}`));
        switch(node.tagName.toLowerCase()){
            // Paragraph
            case "p":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: children
                }, index, false, {
                    fileName: "[project]/src/components/ResuableComponents/renderHtmlText.jsx",
                    lineNumber: 48,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            // Headings
            case "h1":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    children: children
                }, index, false, {
                    fileName: "[project]/src/components/ResuableComponents/renderHtmlText.jsx",
                    lineNumber: 55,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            case "h2":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    children: children
                }, index, false, {
                    fileName: "[project]/src/components/ResuableComponents/renderHtmlText.jsx",
                    lineNumber: 58,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            case "h3":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    children: children
                }, index, false, {
                    fileName: "[project]/src/components/ResuableComponents/renderHtmlText.jsx",
                    lineNumber: 61,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            case "h4":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                    children: children
                }, index, false, {
                    fileName: "[project]/src/components/ResuableComponents/renderHtmlText.jsx",
                    lineNumber: 64,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            case "h5":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                    children: children
                }, index, false, {
                    fileName: "[project]/src/components/ResuableComponents/renderHtmlText.jsx",
                    lineNumber: 67,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            case "h6":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                    children: children
                }, index, false, {
                    fileName: "[project]/src/components/ResuableComponents/renderHtmlText.jsx",
                    lineNumber: 70,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            // Span
            case "span":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: children
                }, index, false, {
                    fileName: "[project]/src/components/ResuableComponents/renderHtmlText.jsx",
                    lineNumber: 75,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            // Bold
            case "strong":
            case "b":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                    children: children
                }, index, false, {
                    fileName: "[project]/src/components/ResuableComponents/renderHtmlText.jsx",
                    lineNumber: 84,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            // Italic
            case "em":
            case "i":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                    children: children
                }, index, false, {
                    fileName: "[project]/src/components/ResuableComponents/renderHtmlText.jsx",
                    lineNumber: 93,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            // Underline
            case "u":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("u", {
                    children: children
                }, index, false, {
                    fileName: "[project]/src/components/ResuableComponents/renderHtmlText.jsx",
                    lineNumber: 101,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            // Strikethrough
            case "s":
            case "del":
            case "strike":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("del", {
                    children: children
                }, index, false, {
                    fileName: "[project]/src/components/ResuableComponents/renderHtmlText.jsx",
                    lineNumber: 111,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            // Highlight
            case "mark":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mark", {
                    children: children
                }, index, false, {
                    fileName: "[project]/src/components/ResuableComponents/renderHtmlText.jsx",
                    lineNumber: 119,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            // Small text
            case "small":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                    children: children
                }, index, false, {
                    fileName: "[project]/src/components/ResuableComponents/renderHtmlText.jsx",
                    lineNumber: 127,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            // Subscript
            case "sub":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sub", {
                    children: children
                }, index, false, {
                    fileName: "[project]/src/components/ResuableComponents/renderHtmlText.jsx",
                    lineNumber: 135,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            // Superscript
            case "sup":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sup", {
                    children: children
                }, index, false, {
                    fileName: "[project]/src/components/ResuableComponents/renderHtmlText.jsx",
                    lineNumber: 143,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            // Line break
            case "br":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, index, false, {
                    fileName: "[project]/src/components/ResuableComponents/renderHtmlText.jsx",
                    lineNumber: 150,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            // Horizontal line
            case "hr":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, index, false, {
                    fileName: "[project]/src/components/ResuableComponents/renderHtmlText.jsx",
                    lineNumber: 154,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            // Links
            case "a":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: node.getAttribute("href") || "#",
                    target: node.getAttribute("target") || undefined,
                    rel: node.getAttribute("target") === "_blank" ? "noopener noreferrer" : undefined,
                    children: children
                }, index, false, {
                    fileName: "[project]/src/components/ResuableComponents/renderHtmlText.jsx",
                    lineNumber: 159,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            // Unordered list
            case "ul":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    children: children
                }, index, false, {
                    fileName: "[project]/src/components/ResuableComponents/renderHtmlText.jsx",
                    lineNumber: 181,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            // Ordered list
            case "ol":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                    children: children
                }, index, false, {
                    fileName: "[project]/src/components/ResuableComponents/renderHtmlText.jsx",
                    lineNumber: 189,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            // List item
            case "li":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    children: children
                }, index, false, {
                    fileName: "[project]/src/components/ResuableComponents/renderHtmlText.jsx",
                    lineNumber: 197,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            // Blockquote
            case "blockquote":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                    children: children
                }, index, false, {
                    fileName: "[project]/src/components/ResuableComponents/renderHtmlText.jsx",
                    lineNumber: 205,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            // Code
            case "code":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                    children: children
                }, index, false, {
                    fileName: "[project]/src/components/ResuableComponents/renderHtmlText.jsx",
                    lineNumber: 213,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            // Preformatted code
            case "pre":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                    children: children
                }, index, false, {
                    fileName: "[project]/src/components/ResuableComponents/renderHtmlText.jsx",
                    lineNumber: 221,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            // Generic div
            case "div":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: children
                }, index, false, {
                    fileName: "[project]/src/components/ResuableComponents/renderHtmlText.jsx",
                    lineNumber: 229,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            // Section
            case "section":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    children: children
                }, index, false, {
                    fileName: "[project]/src/components/ResuableComponents/renderHtmlText.jsx",
                    lineNumber: 237,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            // Article
            case "article":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                    children: children
                }, index, false, {
                    fileName: "[project]/src/components/ResuableComponents/renderHtmlText.jsx",
                    lineNumber: 245,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            // Unknown HTML tags
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                    children: children
                }, index, false, {
                    fileName: "[project]/src/components/ResuableComponents/renderHtmlText.jsx",
                    lineNumber: 253,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
        }
    };
    return Array.from(doc.body.childNodes).map((node, index)=>convertNode(node, index));
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ServiceSlider.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jquery$2f$dist$2f$jquery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jquery/dist/jquery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Apis$2f$HomePage$2f$apis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Apis/HomePage/apis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$aos$2f$dist$2f$aos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/aos/dist/aos.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const ServiceSlider = ({ paragraph })=>{
    _s();
    const sliderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [services, setServices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleLeistungenClick = (slug)=>{
        if (!slug) return;
        router.push(`/leistungen/${slug}`);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ServiceSlider.useEffect": ()=>{
            let mounted = true;
            const fetchServices = {
                "ServiceSlider.useEffect.fetchServices": async ()=>{
                    try {
                        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Apis$2f$HomePage$2f$apis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["homepageApiStructure"].getLeistungens();
                        if (!mounted) return;
                        const mapped = (result?.data || []).map({
                            "ServiceSlider.useEffect.fetchServices.mapped": (item)=>({
                                    id: item.documentId || item.id,
                                    slug: item.Slug,
                                    displayId: String(item.id).padStart(2, "0"),
                                    title: item.Titel,
                                    description: item.Text,
                                    tags: (item.tag || []).map({
                                        "ServiceSlider.useEffect.fetchServices.mapped": (tag)=>({
                                                id: tag.documentId || tag.id,
                                                title: tag.Titel
                                            })
                                    }["ServiceSlider.useEffect.fetchServices.mapped"])
                                })
                        }["ServiceSlider.useEffect.fetchServices.mapped"]);
                        setServices(mapped);
                    } catch (err) {
                        console.error("Failed to fetch services:", err);
                        if (mounted) {
                            setError(err);
                        }
                    } finally{
                        if (mounted) {
                            setLoading(false);
                        }
                    }
                }
            }["ServiceSlider.useEffect.fetchServices"];
            fetchServices();
            return ({
                "ServiceSlider.useEffect": ()=>{
                    mounted = false;
                }
            })["ServiceSlider.useEffect"];
        }
    }["ServiceSlider.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ServiceSlider.useEffect": ()=>{
            if (loading || error || services.length === 0) {
                return;
            }
            let mounted = true;
            const initializeSlider = {
                "ServiceSlider.useEffect.initializeSlider": async ()=>{
                    window.jQuery = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jquery$2f$dist$2f$jquery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
                    window.$ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jquery$2f$dist$2f$jquery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
                    await __turbopack_context__.A("[project]/node_modules/owl.carousel/dist/owl.carousel.js [app-client] (ecmascript, async loader)");
                    if (!mounted || !sliderRef.current) {
                        return;
                    }
                    const slider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jquery$2f$dist$2f$jquery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(sliderRef.current);
                    if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jquery$2f$dist$2f$jquery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fn.owlCarousel !== "function") {
                        console.error("Owl Carousel was not attached to jQuery");
                        return;
                    }
                    if (slider.hasClass("owl-loaded")) {
                        slider.trigger("destroy.owl.carousel");
                        slider.removeClass("owl-loaded");
                    }
                    slider.off("initialized.owl.carousel");
                    slider.on("initialized.owl.carousel", {
                        "ServiceSlider.useEffect.initializeSlider": ()=>{
                            requestAnimationFrame({
                                "ServiceSlider.useEffect.initializeSlider": ()=>{
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$aos$2f$dist$2f$aos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].refreshHard();
                                }
                            }["ServiceSlider.useEffect.initializeSlider"]);
                        }
                    }["ServiceSlider.useEffect.initializeSlider"]);
                    slider.owlCarousel({
                        loop: true,
                        margin: 30,
                        autoplay: true,
                        autoplayHoverPause: true,
                        autoplayTimeout: 5000,
                        smartSpeed: 400,
                        dots: false,
                        nav: true,
                        // Important: prevents Owl from changing height
                        // based on the active slide.
                        autoHeight: false,
                        navText: [
                            '<img src="/images/prev-arrow.svg" alt="Previous" />',
                            '<img src="/images/next-arrow.svg" alt="Next" />'
                        ],
                        responsive: {
                            0: {
                                items: 1
                            },
                            460: {
                                items: 1
                            },
                            768: {
                                items: 1
                            },
                            900: {
                                items: 1.6
                            },
                            1200: {
                                items: 1.7
                            }
                        }
                    });
                    // Calculate tallest card and apply its height
                    // to every card.
                    requestAnimationFrame({
                        "ServiceSlider.useEffect.initializeSlider": ()=>{
                            if (!mounted || !sliderRef.current) {
                                return;
                            }
                            const cards = slider.find(".service-card");
                            let maxHeight = 0;
                            cards.css("height", "auto");
                            cards.each({
                                "ServiceSlider.useEffect.initializeSlider": function() {
                                    const height = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jquery$2f$dist$2f$jquery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this).outerHeight();
                                    if (height > maxHeight) {
                                        maxHeight = height;
                                    }
                                }
                            }["ServiceSlider.useEffect.initializeSlider"]);
                            if (maxHeight > 0) {
                                cards.css("height", `${maxHeight}px`);
                            }
                        }
                    }["ServiceSlider.useEffect.initializeSlider"]);
                }
            }["ServiceSlider.useEffect.initializeSlider"];
            initializeSlider();
            return ({
                "ServiceSlider.useEffect": ()=>{
                    mounted = false;
                    if (sliderRef.current) {
                        const slider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jquery$2f$dist$2f$jquery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(sliderRef.current);
                        slider.off("initialized.owl.carousel");
                        if (slider.hasClass("owl-loaded")) {
                            slider.trigger("destroy.owl.carousel");
                        }
                    }
                }
            })["ServiceSlider.useEffect"];
        }
    }["ServiceSlider.useEffect"], [
        loading,
        error,
        services
    ]);
    const prevSlide = ()=>{
        if (sliderRef.current) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jquery$2f$dist$2f$jquery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(sliderRef.current).trigger("prev.owl.carousel");
        }
    };
    const nextSlide = ()=>{
        if (sliderRef.current) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jquery$2f$dist$2f$jquery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(sliderRef.current).trigger("next.owl.carousel");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "row service-slider-row",
        "data-aos": "fade-up",
        "data-aos-delay": "200",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "col-12 col-lg-4 content-col align-self-end mt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: paragraph
                    }, void 0, false, {
                        fileName: "[project]/src/components/ServiceSlider.jsx",
                        lineNumber: 214,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "slider-buttons d-none d-lg-block",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "btn-previous",
                                onClick: prevSlide,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/images/prev-arrow.svg",
                                    alt: "Previous"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ServiceSlider.jsx",
                                    lineNumber: 222,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/ServiceSlider.jsx",
                                lineNumber: 217,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "btn-next",
                                onClick: nextSlide,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/images/next-arrow.svg",
                                    alt: "Next"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ServiceSlider.jsx",
                                    lineNumber: 233,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/ServiceSlider.jsx",
                                lineNumber: 228,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ServiceSlider.jsx",
                        lineNumber: 216,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ServiceSlider.jsx",
                lineNumber: 213,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "col-12 col-lg-7 ms-auto slider-col mt-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "service-slider",
                    children: [
                        loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Wird geladen..."
                        }, void 0, false, {
                            fileName: "[project]/src/components/ServiceSlider.jsx",
                            lineNumber: 244,
                            columnNumber: 23
                        }, ("TURBOPACK compile-time value", void 0)),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Leistungen konnten nicht geladen werden."
                        }, void 0, false, {
                            fileName: "[project]/src/components/ServiceSlider.jsx",
                            lineNumber: 247,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        !loading && !error && services.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Keine Leistungen gefunden."
                        }, void 0, false, {
                            fileName: "[project]/src/components/ServiceSlider.jsx",
                            lineNumber: 256,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        !loading && !error && services.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: sliderRef,
                            className: "owl-carousel owl-theme service-owl-carousel",
                            children: services.map((service, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "item",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "service-card",
                                        onClick: ()=>handleLeistungenClick(service.slug),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "item-count",
                                                children: index + 1
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ServiceSlider.jsx",
                                                lineNumber: 279,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                children: service.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ServiceSlider.jsx",
                                                lineNumber: 283,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: service.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ServiceSlider.jsx",
                                                lineNumber: 285,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                                                fileName: "[project]/src/components/ServiceSlider.jsx",
                                                lineNumber: 287,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "item-tags",
                                                children: service.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: tag.title
                                                    }, tag.id, false, {
                                                        fileName: "[project]/src/components/ServiceSlider.jsx",
                                                        lineNumber: 291,
                                                        columnNumber: 27
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ServiceSlider.jsx",
                                                lineNumber: 289,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ServiceSlider.jsx",
                                        lineNumber: 271,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, service.id, false, {
                                    fileName: "[project]/src/components/ServiceSlider.jsx",
                                    lineNumber: 267,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/components/ServiceSlider.jsx",
                            lineNumber: 262,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ServiceSlider.jsx",
                    lineNumber: 243,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ServiceSlider.jsx",
                lineNumber: 242,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ServiceSlider.jsx",
        lineNumber: 207,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ServiceSlider, "6EuoQmflqmWhb1Ab7POETSH4ElY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ServiceSlider;
const __TURBOPACK__default__export__ = ServiceSlider;
var _c;
__turbopack_context__.k.register(_c, "ServiceSlider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/TalkSection.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/ThemeContext.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const DEFAULT_THEME = "yellow";
const TalkSection = ({ img, title, heading, description })=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const themeContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const theme = themeContext?.theme || DEFAULT_THEME;
    const themeImages = {
        yellow: "/images/image-loewenmut-yellow.png",
        blue: "/images/image-loewenmut-blue.png",
        green: "/images/image-loewenmut-green.png",
        pink: "/images/image-loewenmut-pink.png"
    };
    /*
   * If an image is manually passed, use it.
   * Otherwise use the image belonging to the selected theme.
   */ const talkImage = img || themeImages[theme] || themeImages[DEFAULT_THEME];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "row flex-lg-row-reverse align-items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "col-12 col-lg-4 img-col cursorPointer text-center",
                    "data-aos": "zoom-in",
                    onClick: ()=>router.push("/kontakt"),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: talkImage,
                        alt: title || "Genug geredet",
                        className: "img-fluid mx-auto"
                    }, void 0, false, {
                        fileName: "[project]/src/components/TalkSection.jsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/TalkSection.jsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "col-12 col-lg-8 content-col mt-4 mt-lg-0",
                    "data-aos": "fade-right",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sec-content",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sub_title",
                                children: "Aenean sollicitudin"
                            }, void 0, false, {
                                fileName: "[project]/src/components/TalkSection.jsx",
                                lineNumber: 57,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: [
                                    "Genug geredet.",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/components/TalkSection.jsx",
                                        lineNumber: 63,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Was dürfen ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "wir für Sie bewegen?"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TalkSection.jsx",
                                        lineNumber: 64,
                                        columnNumber: 26
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TalkSection.jsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Lassen Sie uns über Ihr Projekt sprechen."
                            }, void 0, false, {
                                fileName: "[project]/src/components/TalkSection.jsx",
                                lineNumber: 67,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "theme_btn_wrap mt-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/kontakt",
                                    className: "button theme_btn",
                                    children: [
                                        "Los geht’s",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/images/btn-arrow.svg",
                                            alt: "Arrow"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/TalkSection.jsx",
                                            lineNumber: 74,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/TalkSection.jsx",
                                    lineNumber: 72,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/TalkSection.jsx",
                                lineNumber: 71,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TalkSection.jsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/TalkSection.jsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TalkSection.jsx",
            lineNumber: 37,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/TalkSection.jsx",
        lineNumber: 36,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(TalkSection, "eFgUkdz0H9wvXwOTIph/XTSJhjw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = TalkSection;
const __TURBOPACK__default__export__ = TalkSection;
var _c;
__turbopack_context__.k.register(_c, "TalkSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/WorkSection.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helper$2f$Timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/helper/Timer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ResuableComponents$2f$renderHtmlText$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ResuableComponents/renderHtmlText.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function WorkSection() {
    _s();
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [germanyTime, setGermanyTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(""); // ← fixed
    const [indiaTime, setIndiaTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const WorkData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "WorkSection.useSelector[WorkData]": (state)=>state.home.data?.workMobile
    }["WorkSection.useSelector[WorkData]"]);
    const title = WorkData?.Titel;
    const description = WorkData?.Text;
    // Dynamic cards from API
    const cards = WorkData?.Prozess?.map((item, index)=>({
            number: index + 1,
            title: item.Titel,
            text: item.Text,
            className: `work-card-${index + 1}`,
            id: item.id
        })) || [];
    // Dynamic suggestions from API
    const suggestions = cards.map((card)=>card.title);
    /*
   * Find the card based on the current input.
   */ const matchedCard = cards.find((card)=>{
        const input = message.trim().toLowerCase();
        if (!input) return false;
        return card.title.toLowerCase().startsWith(input);
    });
    const hasMatch = Boolean(message.trim() && matchedCard);
    const handleSuggestionClick = (item)=>{
        setMessage(item);
    };
    const handleInputChange = (e)=>{
        setMessage(e.target.value);
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
    };
    const handleClear = ()=>{
        setMessage("");
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WorkSection.useEffect": ()=>{
            setGermanyTime((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helper$2f$Timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGermanyTime"])());
            setIndiaTime((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helper$2f$Timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getIndiaTime"])());
            const timer = setInterval({
                "WorkSection.useEffect.timer": ()=>{
                    setGermanyTime((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helper$2f$Timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGermanyTime"])());
                    setIndiaTime((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helper$2f$Timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getIndiaTime"])());
                }
            }["WorkSection.useEffect.timer"], 1000);
            return ({
                "WorkSection.useEffect": ()=>clearInterval(timer)
            })["WorkSection.useEffect"];
        }
    }["WorkSection.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pt_3 bg_theme_work_station",
        "data-aos": "zoom-in",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "work-section",
            children: [
                cards.map((card)=>{
                    const isVisible = !hasMatch || matchedCard.title === card.title;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `work-info-card ${card.className}`,
                        style: {
                            display: isVisible ? "" : "none"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "work-card-number",
                                children: card.number
                            }, void 0, false, {
                                fileName: "[project]/src/components/WorkSection.jsx",
                                lineNumber: 85,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                children: card.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/WorkSection.jsx",
                                lineNumber: 86,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: card.text
                            }, void 0, false, {
                                fileName: "[project]/src/components/WorkSection.jsx",
                                lineNumber: 87,
                                columnNumber: 15
                            }, this)
                        ]
                    }, card.id || card.number, true, {
                        fileName: "[project]/src/components/WorkSection.jsx",
                        lineNumber: 80,
                        columnNumber: 13
                    }, this);
                }),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "work-phone",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "work-status-bar",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: germanyTime
                                }, void 0, false, {
                                    fileName: "[project]/src/components/WorkSection.jsx",
                                    lineNumber: 95,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "work-status-icons",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/images/mobile-icons.svg",
                                        alt: ""
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WorkSection.jsx",
                                        lineNumber: 97,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/WorkSection.jsx",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/WorkSection.jsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "work-phone-content",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ResuableComponents$2f$renderHtmlText$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderHtmlText"])(title)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/WorkSection.jsx",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "work-intro",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ResuableComponents$2f$renderHtmlText$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderHtmlText"])(description)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/WorkSection.jsx",
                                    lineNumber: 104,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "work-suggestions",
                                    children: suggestions.map((item, index)=>{
                                        const isActive = hasMatch && matchedCard.title.toLowerCase() === item.toLowerCase();
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: isActive ? "active" : "",
                                            onClick: ()=>handleSuggestionClick(item),
                                            style: {
                                                backgroundColor: isActive ? "var(--bs-themecolor)" : undefined
                                            },
                                            children: item
                                        }, index, false, {
                                            fileName: "[project]/src/components/WorkSection.jsx",
                                            lineNumber: 116,
                                            columnNumber: 19
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/WorkSection.jsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    className: "work-search",
                                    onSubmit: handleSubmit,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: message,
                                            onChange: handleInputChange,
                                            readOnly: true,
                                            placeholder: "Gib eine Nachricht ein..."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/WorkSection.jsx",
                                            lineNumber: 137,
                                            columnNumber: 15
                                        }, this),
                                        message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "cursorPointer d-flex justify-content-center",
                                            onClick: handleClear,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "38",
                                                height: "38",
                                                viewBox: "0 0 38 38",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "19",
                                                        cy: "19",
                                                        r: "19",
                                                        fill: "var(--bs-themecolor)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/WorkSection.jsx",
                                                        lineNumber: 157,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M25.09 12.3691C24.6474 11.8764 23.9299 11.8764 23.4874 12.3691L19 17.3655L14.5126 12.3692C14.07 11.8764 13.3525 11.8764 12.91 12.3692C12.4674 12.8619 12.4674 13.6608 12.91 14.1536L17.3973 19.1499L12.91 24.1462C12.4674 24.639 12.4674 25.4379 12.91 25.9306C13.3526 26.4234 14.0701 26.4234 14.5126 25.9306L19 20.9343L23.4874 25.9307C23.9299 26.4234 24.6474 26.4234 25.09 25.9307C25.5326 25.4379 25.5325 24.639 25.09 24.1463L20.6026 19.1499L25.09 14.1535C25.5326 13.6608 25.5326 12.8619 25.09 12.3691Z",
                                                        fill: "black"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/WorkSection.jsx",
                                                        lineNumber: 163,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/WorkSection.jsx",
                                                lineNumber: 150,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/WorkSection.jsx",
                                            lineNumber: 146,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/WorkSection.jsx",
                                    lineNumber: 136,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/WorkSection.jsx",
                            lineNumber: 102,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/WorkSection.jsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/WorkSection.jsx",
            lineNumber: 72,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/WorkSection.jsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
_s(WorkSection, "Ie+YdKuJxNB7Oyhn14z4khQjJ/o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"]
    ];
});
_c = WorkSection;
const __TURBOPACK__default__export__ = WorkSection;
var _c;
__turbopack_context__.k.register(_c, "WorkSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/pages/Home.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/ThemeContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$aos$2f$dist$2f$aos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/aos/dist/aos.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helper$2f$sectionRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/helper/sectionRegistry.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$register$2f$slices$2f$homeSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/register/slices/homeSlice.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const DEFAULT_THEME = "yellow";
const themeAssets = {
    yellow: {
        icon1: "/images/hero-icon-1.png",
        icon2: "/images/hero-icon-2.png",
        icon3: "/images/hero-icon-3.png",
        icon4: "/images/hero-icon-4.png"
    },
    blue: {
        icon1: "/images/hero-icon-1-blue.png",
        icon2: "/images/hero-icon-2-blue.png",
        icon3: "/images/hero-icon-3-blue.png",
        icon4: "/images/hero-icon-4-blue.png"
    },
    green: {
        icon1: "/images/hero-icon-1-green.png",
        icon2: "/images/hero-icon-2-green.png",
        icon3: "/images/hero-icon-3-green.png",
        icon4: "/images/hero-icon-4-green.png"
    },
    pink: {
        icon1: "/images/hero-icon-1-pink.png",
        icon2: "/images/hero-icon-2-pink.png",
        icon3: "/images/hero-icon-3-pink.png",
        icon4: "/images/hero-icon-4-pink.png"
    }
};
const SectionFallback = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            minHeight: "200px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },
        "aria-label": "Loading",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: "32px",
                    height: "32px",
                    border: "3px solid rgba(0, 0, 0, 0.1)",
                    borderTopColor: "var(--bs-themecolor)",
                    borderRadius: "50%",
                    animation: "section-loader-spin 0.8s linear infinite"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/pages/Home.jsx",
                lineNumber: 64,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes section-loader-spin {
          to {
            transform: rotate(360deg);
          }
        }
      `
            }, void 0, false, {
                fileName: "[project]/src/components/pages/Home.jsx",
                lineNumber: 76,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/pages/Home.jsx",
        lineNumber: 55,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = SectionFallback;
const Home = ()=>{
    _s();
    /*
   * Get theme from ThemeContext.
   *
   * The fallback protects this component if it is ever
   * rendered without ThemeProvider.
   */ const themeContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const theme = themeContext?.theme || DEFAULT_THEME;
    const nextSectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    const { status } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "Home.useSelector": (state)=>state.home
    }["Home.useSelector"]);
    /*
   * Get assets for the selected theme.
   */ const assets = themeAssets[theme] || themeAssets[DEFAULT_THEME];
    /*
   * Scroll to next section.
   */ const scrollToNext = ()=>{
        nextSectionRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    };
    /*
   * Fetch home data.
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (status === "idle") {
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$register$2f$slices$2f$homeSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchHomeData"])());
            }
        }
    }["Home.useEffect"], [
        status,
        dispatch
    ]);
    /*
   * Refresh AOS after home data has loaded.
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (status === "succeeded") {
                requestAnimationFrame({
                    "Home.useEffect": ()=>{
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$aos$2f$dist$2f$aos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].refreshHard();
                    }
                }["Home.useEffect"]);
            }
        }
    }["Home.useEffect"], [
        status
    ]);
    const sectionOrder = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helper$2f$sectionRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_SECTION_ORDER"];
    const sectionProps = {
        hero: {
            assets,
            scrollToNext
        },
        services: {
            nextSectionRef
        }
    };
    /*
   * Loading state.
   */ if (status === "loading" || status === "idle") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: `home-page theme-${theme}`,
            "data-theme": theme,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionFallback, {}, void 0, false, {
                fileName: "[project]/src/components/pages/Home.jsx",
                lineNumber: 171,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/pages/Home.jsx",
            lineNumber: 167,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    /*
   * Error state.
   */ if (status === "failed") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: `home-page theme-${theme}`,
            "data-theme": theme,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    padding: "3rem",
                    textAlign: "center"
                },
                children: "Die Seite konnte nicht geladen werden."
            }, void 0, false, {
                fileName: "[project]/src/components/pages/Home.jsx",
                lineNumber: 185,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/pages/Home.jsx",
            lineNumber: 181,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    /*
   * Normal home page.
   *
   * IMPORTANT:
   * There is NO suppressHydrationWarning here.
   *
   * We want React to render the same initial theme
   * on server and client instead of hiding a mismatch.
   */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: `home-page theme-${theme}`,
        "data-theme": theme,
        children: sectionOrder.map((key)=>{
            const entry = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helper$2f$sectionRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SECTION_REGISTRY"][key];
            if (!entry) {
                return null;
            }
            const SectionComponent = entry.component;
            const extraProps = sectionProps[key] || {};
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionFallback, {}, void 0, false, {
                    fileName: "[project]/src/components/pages/Home.jsx",
                    lineNumber: 228,
                    columnNumber: 23
                }, ("TURBOPACK compile-time value", void 0)),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionComponent, {
                    ...extraProps
                }, void 0, false, {
                    fileName: "[project]/src/components/pages/Home.jsx",
                    lineNumber: 230,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, key, false, {
                fileName: "[project]/src/components/pages/Home.jsx",
                lineNumber: 226,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0));
        })
    }, void 0, false, {
        fileName: "[project]/src/components/pages/Home.jsx",
        lineNumber: 207,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Home, "Hpv6WRMwZx92f+PF4hKAJ5BAG5s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"]
    ];
});
_c1 = Home;
const __TURBOPACK__default__export__ = Home;
var _c, _c1;
__turbopack_context__.k.register(_c, "SectionFallback");
__turbopack_context__.k.register(_c1, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/helper/MediaUrl.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getMediaUrl",
    ()=>getMediaUrl,
    "getSvgAsText",
    ()=>getSvgAsText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const getMediaUrl = (relativeUrl)=>{
    if (!relativeUrl) return "";
    if (/^https?:\/\//i.test(relativeUrl)) return relativeUrl;
    const backendUrl = ("TURBOPACK compile-time value", "https://backend-strapi.loewenmut.ch/");
    return `${backendUrl.replace(/\/$/, "")}${relativeUrl}`;
};
const getSvgAsText = async (relativeUrl)=>{
    if (!relativeUrl) return "";
    const url = getMediaUrl(relativeUrl);
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch SVG: ${response.status}`);
    }
    return await response.text();
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/helper/Timer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// german timer 
__turbopack_context__.s([
    "getGermanyTime",
    ()=>getGermanyTime,
    "getIndiaTime",
    ()=>getIndiaTime
]);
const getGermanyTime = ()=>{
    return new Intl.DateTimeFormat("de-DE", {
        timeZone: "Europe/Berlin",
        hour: "2-digit",
        minute: "2-digit",
        //   second: "2-digit",
        hour12: true
    }).format(new Date());
};
const getIndiaTime = ()=>{
    return new Intl.DateTimeFormat("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        //   second: "2-digit",
        hour12: true
    }).format(new Date());
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/helper/Utils.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "homePageInsights",
    ()=>homePageInsights,
    "insights",
    ()=>insights,
    "newsData",
    ()=>newsData,
    "newsTabs",
    ()=>newsTabs,
    "projectInfoData",
    ()=>projectInfoData,
    "tabs",
    ()=>tabs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const tabs = [
    {
        label: "Alle",
        value: "all"
    },
    {
        label: "Bauwesen & Industrie",
        value: "bauwesen"
    },
    {
        label: "Gemeinde",
        value: "gemeinde"
    },
    {
        label: "E-Commerce",
        value: "ecommerce"
    },
    {
        label: "Gastronomie",
        value: "gastronomie"
    },
    {
        label: "Musik",
        value: "musik"
    },
    {
        label: "Dienstleistungen",
        value: "dienstleistungen"
    },
    {
        label: "Print",
        value: "print"
    }
];
const insights = [
    {
        id: 1,
        title: "Digitalisierung im Bauwesen",
        logo: '/images/websites_logo/mine-ex-logo-2-1.png',
        category: "bauwesen",
        image: "/images/Rectangle-1233.png",
        bgColor: "#2F2F2F"
    },
    {
        id: 2,
        title: "Neue Trends im E-Commerce",
        logo: '/images/websites_logo/martin_group.png',
        category: "ecommerce",
        image: "/images/Rectangle-1234.png",
        bgColor: "#000000"
    },
    {
        id: 3,
        title: "Digitale Lösungen für Gemeinden",
        logo: '/images/websites_logo/Mask_group.png',
        category: "gemeinde",
        image: "/images/Rectangle-1235.png",
        bgColor: "#E6007E"
    },
    {
        id: 4,
        title: "Marketing für Gastronomie",
        logo: '/images/websites_logo/Union_26.png',
        category: "gastronomie",
        image: "/images/Rectangle-1234.png",
        bgColor: "#000000"
    },
    {
        id: 5,
        title: "Musik und digitales Branding",
        logo: '/images/websites_logo/emilio-logo-web.png',
        category: "musik",
        image: "/images/Rectangle-1233.png",
        bgColor: "#D31245"
    },
    {
        id: 6,
        title: "Dienstleistungen digitalisieren",
        logo: '/images/websites_logo/Medzentrum_logo_2_4f77ba4953 1.png',
        category: "dienstleistungen",
        image: "/images/Rectangle-1233.png",
        bgColor: "#05A04B"
    },
    {
        id: 7,
        title: "Digitale Lösungen für Gemeinden",
        logo: '/images/websites_logo/Evb.png',
        category: "gemeinde",
        image: "/images/Rectangle-1235.png",
        bgColor: "#AB0033"
    },
    {
        id: 8,
        title: "Marketing für Gastronomie",
        logo: '/images/websites_logo/bike.png',
        category: "gastronomie",
        image: "/images/Rectangle-1233.png",
        bgColor: "#DF053A"
    },
    {
        id: 9,
        title: "Musik und digitales Branding",
        logo: '/images/websites_logo/logo_b637fc437f2.png',
        category: "musik",
        image: "/images/Rectangle-1233.png",
        bgColor: "#009EE3"
    },
    {
        id: 10,
        title: "Dienstleistungen digitalisieren",
        logo: '/images/websites_logo/1597880009.png',
        category: "dienstleistungen",
        image: "/images/Rectangle-1233.png",
        bgColor: "#000000"
    },
    {
        id: 11,
        title: "Musik und digitales Branding",
        logo: '/images/websites_logo/Neu-logo1.png',
        category: "musik",
        image: "/images/Rectangle-1233.png",
        bgColor: "#34A77B"
    },
    {
        id: 12,
        title: "Dienstleistungen digitalisieren",
        logo: '/images/websites_logo/quellenhof.png',
        category: "dienstleistungen",
        image: "/images/Rectangle-1233.png",
        bgColor: "#07B7DA"
    },
    {
        id: 13,
        title: "Digitale Lösungen für Gemeinden",
        logo: '/images/websites_logo/VBL-Logo1.png',
        category: "gemeinde",
        image: "/images/Rectangle-1235.png",
        bgColor: "#323232"
    },
    {
        id: 14,
        title: "Marketing für Gastronomie",
        logo: '/images/websites_logo/ntp-logo-white 1.png',
        category: "gastronomie",
        image: "/images/Rectangle-1234.png",
        bgColor: "#8B654C"
    },
    {
        id: 15,
        title: "Musik und digitales Branding",
        logo: '/images/websites_logo/hm.png',
        category: "musik",
        image: "/images/Rectangle-1233.png",
        bgColor: "#1B5441"
    },
    {
        id: 16,
        title: "Dienstleistungen digitalisieren",
        logo: '/images/websites_logo/sani.png',
        category: "dienstleistungen",
        image: "/images/Rectangle-1233.png",
        bgColor: "#00589B"
    }
];
const homePageInsights = [
    {
        id: 9,
        title: "mine-ex",
        description: "Mobile App - UI/UX Design",
        image: "/images/mine-ex.png",
        alt: "mine-ex"
    },
    {
        id: 8,
        title: "Martin & Co.",
        description: "Dashboard - UI/UX Design",
        image: "/images/martin-guitar.jpg",
        alt: "Martin Guitar"
    },
    {
        id: 7,
        title: "tellme",
        description: "Landingpage - UI/UX Design",
        image: "/images/tellme.png",
        alt: "Tellme"
    }
];
const projectInfoData = [
    {
        title: "Duis sed odio",
        active: false,
        icon: '/images/websites_logo/Vector1.png',
        items: [
            "Proin gravida nibh vel velit auctor aliquet.",
            "Aenean sollicitudin, lorem quis bibendum auctor, nisi elit.",
            "Duis sed odio sit amet nibh vulputate cursus a sit amet mauris."
        ]
    },
    {
        title: "Aenean sollicitudin",
        active: false,
        icon: '/images/websites_logo/Vector2.png',
        items: [
            "Proin gravida nibh vel velit auctor aliquet.",
            "Aenean sollicitudin, lorem quis bibendum auctor, nisi elit.",
            "Duis sed odio sit amet nibh vulputate cursus a sit amet mauris."
        ]
    },
    {
        title: "consequat ipsum",
        active: true,
        icon: '/images/websites_logo/Vector3.png',
        items: [
            "Proin gravida nibh vel velit auctor aliquet.",
            "Aenean sollicitudin, lorem quis bibendum auctor, nisi elit.",
            "Duis sed odio sit amet nibh vulputate cursus a sit amet mauris."
        ]
    }
];
const newsTabs = [
    {
        label: "Alle",
        value: "all"
    },
    {
        label: "Digitales Marketing",
        value: "marketing"
    },
    {
        label: "SEO",
        value: "seo"
    },
    {
        label: "Website-Entwicklung",
        value: "entwicklug"
    },
    {
        label: "Unternehmenswachstum",
        value: "website"
    },
    {
        label: "Print und Werbung",
        value: "print"
    }
];
const newsData = [
    {
        id: 1,
        category: "Digitales Marketing",
        categoryValue: "marketing",
        categoryClass: "purple_badge",
        image: "/images/news-1.png",
        date: "25.06.2026",
        title: "Gebrüder Stocker Tiefbau GmbH",
        description: "Nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh.",
        link: "/"
    },
    {
        id: 2,
        category: "SEO",
        categoryValue: "print",
        categoryClass: "blue_badge",
        image: "/images/news-2.png",
        date: "25.06.2026",
        title: "Gebrüder Stocker Tiefbau GmbH",
        description: "Nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh.",
        link: "/"
    },
    {
        id: 3,
        category: "Website-Entwicklung",
        categoryValue: "website",
        categoryClass: "red_badge",
        image: "/images/news-3.png",
        date: "25.06.2026",
        title: "Gebrüder Stocker Tiefbau GmbH",
        description: "Nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh.",
        link: "/"
    },
    {
        id: 4,
        category: "Digitales Marketing",
        categoryValue: "marketing",
        categoryClass: "purple_badge",
        image: "/images/news-1.png",
        date: "25.06.2026",
        title: "Gebrüder Stocker Tiefbau GmbH",
        description: "Nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh.",
        link: "/"
    },
    {
        id: 5,
        category: "SEO",
        categoryValue: "seo",
        categoryClass: "blue_badge",
        image: "/images/news-2.png",
        date: "25.06.2026",
        title: "Gebrüder Stocker Tiefbau GmbH",
        description: "Nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh.",
        link: "/"
    },
    {
        id: 6,
        category: "Website-Entwicklung",
        categoryValue: "entwicklug",
        categoryClass: "red_badge",
        image: "/images/news-3.png",
        date: "25.06.2026",
        title: "Gebrüder Stocker Tiefbau GmbH",
        description: "Nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh.",
        link: "/"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/helper/sectionRegistry.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_SECTION_ORDER",
    ()=>DEFAULT_SECTION_ORDER,
    "SECTION_REGISTRY",
    ()=>SECTION_REGISTRY
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Home_Page_Components$2f$Hero$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Home_Page_Components/Hero.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Home_Page_Components$2f$Services$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Home_Page_Components/Services.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Home_Page_Components$2f$Project$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Home_Page_Components/Project.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Home_Page_Components$2f$Insights$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Home_Page_Components/Insights.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Home_Page_Components$2f$Work$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Home_Page_Components/Work.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Home_Page_Components$2f$News$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Home_Page_Components/News.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Home_Page_Components$2f$Talk$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Home_Page_Components/Talk.jsx [app-client] (ecmascript)");
;
;
;
;
;
;
;
const SECTION_REGISTRY = {
    hero: {
        label: "Hero",
        component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Home_Page_Components$2f$Hero$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    },
    services: {
        label: "Services",
        component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Home_Page_Components$2f$Services$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    },
    project: {
        label: "Featured Project",
        component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Home_Page_Components$2f$Project$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    },
    insights: {
        label: "Insights",
        component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Home_Page_Components$2f$Insights$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    },
    work: {
        label: "Work / Search",
        component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Home_Page_Components$2f$Work$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    },
    news: {
        label: "News",
        component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Home_Page_Components$2f$News$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    },
    talk: {
        label: "Talk To Us",
        component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Home_Page_Components$2f$Talk$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    }
};
const DEFAULT_SECTION_ORDER = [
    "hero",
    "services",
    "project",
    "insights",
    "work",
    "news",
    "talk"
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0jlj8lq._.js.map