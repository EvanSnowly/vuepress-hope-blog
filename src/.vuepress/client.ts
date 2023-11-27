// .vuepress/client.ts
import { defineClientConfig } from "@vuepress/client";
// @ts-ignore
import WrongQuestion from "./components/WrongQuestion.vue";

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
export default defineClientConfig({
    enhance: ({ app, router, siteData }) => {
        app.use(ElementPlus)
        app.component("WrongQuestion", WrongQuestion);
    },
});
