module.exports = [
"[project]/src/components/FilterTabs.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
const FilterTabs = ({ tabs, activeTab, onTabChange })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "filter-tabs-wrapper",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "filter-tabs filter_tabs",
            children: tabs.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    className: `btn rounded-pill text-nowrap ${activeTab === tab.value ? "text-white border-0" : "bg-white border text-dark"}`,
                    style: activeTab === tab.value ? {
                        backgroundColor: "var(--bs-themecolor)"
                    } : {},
                    onClick: ()=>onTabChange(tab.value),
                    children: tab.label
                }, tab.value, false, {
                    fileName: "[project]/src/components/FilterTabs.jsx",
                    lineNumber: 8,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false, {
            fileName: "[project]/src/components/FilterTabs.jsx",
            lineNumber: 6,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/FilterTabs.jsx",
        lineNumber: 5,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = FilterTabs;
}),
"[project]/src/components/InnerBanner.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
;
;
;
const InnerBnanner = ({ title, heading, description, footer = false, button, buttonLink })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pt_pb_3 inner-banner",
        style: {
            backgroundImage: "url('/images/bg-pattern.png')"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "inner-banner-content text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sub_title justify-content-center",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/InnerBanner.jsx",
                        lineNumber: 9,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: heading
                    }, void 0, false, {
                        fileName: "[project]/src/components/InnerBanner.jsx",
                        lineNumber: 10,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/src/components/InnerBanner.jsx",
                        lineNumber: 11,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    footer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ms-lg-3 mt-3 mt-lg-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: buttonLink,
                            className: "button theme_btn",
                            children: [
                                button,
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/images/btn-arrow.svg",
                                    alt: ""
                                }, void 0, false, {
                                    fileName: "[project]/src/components/InnerBanner.jsx",
                                    lineNumber: 13,
                                    columnNumber: 75
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/InnerBanner.jsx",
                            lineNumber: 13,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/InnerBanner.jsx",
                        lineNumber: 12,
                        columnNumber: 22
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/InnerBanner.jsx",
                lineNumber: 8,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/InnerBanner.jsx",
            lineNumber: 7,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/InnerBanner.jsx",
        lineNumber: 6,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = InnerBnanner;
}),
"[project]/src/components/InsightsCards.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InsightCard",
    ()=>InsightCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const InsightCard = ({ insight })=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleinsightClick = (data)=>{
        router.push(`/insights/${data.id}`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "col-12 col-sm-6 col-lg-3",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
            className: `insight-card position-relative overflow-hidden rounded-4 ${insight.image ? "has-image" : "no-image"}`,
            style: {
                aspectRatio: "375 / 345",
                backgroundColor: insight.bgColor || "#000"
            },
            onClick: ()=>handleinsightClick(insight),
            children: [
                insight.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: insight.image,
                    alt: "",
                    className: "insight-card-image position-absolute top-0 start-0 w-100 h-100"
                }, void 0, false, {
                    fileName: "[project]/src/components/InsightsCards.jsx",
                    lineNumber: 26,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                insight.logo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "position-absolute top-50 start-50 translate-middle d-flex justify-content-center align-items-center w-100",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: insight.logo,
                        alt: insight.title,
                        className: "insight-card-logo img-fluid"
                    }, void 0, false, {
                        fileName: "[project]/src/components/InsightsCards.jsx",
                        lineNumber: 36,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/InsightsCards.jsx",
                    lineNumber: 35,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/InsightsCards.jsx",
            lineNumber: 14,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/InsightsCards.jsx",
        lineNumber: 13,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/components/pages/Insights.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FilterTabs$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FilterTabs.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InnerBanner$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/InnerBanner.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InsightsCards$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/InsightsCards.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helper$2f$Utils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/helper/Utils.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const Insights = ()=>{
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('all');
    const filteredInsights = activeTab === "all" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helper$2f$Utils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["insights"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helper$2f$Utils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["insights"].filter((insight)=>insight.category === activeTab);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "inner_hero_section news_banner",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InnerBanner$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    title: "Nibh vel velit Auctor Aliquet",
                    heading: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: " Getane Arbeit. Der beste Beweis unserer Fähigkeiten. "
                    }, void 0, false, {
                        fileName: "[project]/src/components/pages/Insights.jsx",
                        lineNumber: 23,
                        columnNumber: 74
                    }, ("TURBOPACK compile-time value", void 0)),
                    description: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: "Nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat "
                    }, void 0, false, {
                        fileName: "[project]/src/components/pages/Insights.jsx",
                        lineNumber: 23,
                        columnNumber: 149
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/pages/Insights.jsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/pages/Insights.jsx",
                lineNumber: 22,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "insight-tab-section pt_pb_3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4 mb-lg-5 d-flex justify-content-center w-100",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FilterTabs$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                tabs: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helper$2f$Utils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tabs"],
                                activeTab: activeTab,
                                onTabChange: setActiveTab
                            }, void 0, false, {
                                fileName: "[project]/src/components/pages/Insights.jsx",
                                lineNumber: 30,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/Insights.jsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "row g-3",
                            children: filteredInsights.map((insight)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InsightsCards$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InsightCard"], {
                                    insight: insight
                                }, insight.id, false, {
                                    fileName: "[project]/src/components/pages/Insights.jsx",
                                    lineNumber: 35,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/Insights.jsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/pages/Insights.jsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/pages/Insights.jsx",
                lineNumber: 26,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/pages/Insights.jsx",
        lineNumber: 21,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Insights;
}),
"[project]/src/helper/Utils.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
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
}),
];

//# sourceMappingURL=src_0e8p_yi._.js.map