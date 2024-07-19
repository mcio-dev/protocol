import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import { removeHtmlExtensionPlugin } from 'vuepress-plugin-remove-html-extension';
import { resolve } from "path";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
    title: "Minecraft Protocol",
    description: "协议资料整理",
    base: "/",
    lang: "zh-CN",
    locales: {
        "/": {
            lang: "zh-CN",
        },
    },
    markdown: {
        lineNumbers: true,
    },
    theme: hopeTheme({
        favicon: "/images/logo.png",
        sidebar: {
            "/": "structure",
        },
        navbar: [
            {
                text: "版本列表",
                link: "/versions",
            },
        ],
        print: false,
        pure: true,
        repo: "mcio-dev/protocol",
        docsDir: "docs",
        plugins: {
            activeHeaderLinks: true,
            nprogress: true,
            mdEnhance: {
                attrs: true,
                tabs: true,
                codetabs: true,
                sub: true,
                sup: true,
                mark: true,
            },
        },
        lastUpdated: true,
        breadcrumb: false,
        pageInfo: false,
        nextLink: false,
        prevLink: false,
        search: true,
        searchMaxSuggestions: 10,
        darkmode: "toggle"
    }),
    plugins: [
        removeHtmlExtensionPlugin()
    ],
    bundler: viteBundler({
        viteOptions: {
            resolve: {
                alias: {
                    "@": resolve(__dirname, "docs"),
                },
            },
        },
        vuePluginOptions: {},
    }),
});
