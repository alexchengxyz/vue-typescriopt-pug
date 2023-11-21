import { createApp } from 'vue';
import VueLazyload from 'vue-lazyload';
import App from './App.vue';

import '@styles/main.scss';

import type { GlobalInfo } from '../types';

type UrlInfoFunc = () => Promise<GlobalInfo>;
type UrlInfoReturnType = ReturnType<UrlInfoFunc>;

const themeUrl = './assets/theme';

/**
 * 取得網址資訊
 */
const urlInfo = async (): UrlInfoReturnType => {
    const { pathname } = window.location;
    const infoArr = pathname.split('/').slice(1);
    const output = {
        promotionId: infoArr[0] ? infoArr[0] : '',
        lang: infoArr[1] || 'en',
    };

    if (infoArr[0]) {
        const modules = import.meta.glob('./*/setting.json');
        const styleModule = modules[`./${infoArr[0]}/setting.json`];
        
        console.log(styleModule);

        if (styleModule) {
            const { lang } = styleModule;

            output.lang = lang;
        }
    }

    return output;
};

const initApp = async () => {
    const { promotionId, lang } = await urlInfo();

    if (promotionId) {
        const modules = import.meta.glob('./*/styles/style.scss');
        const styleModule = modules[`${themeUrl}/${promotionId}/styles/style.scss`];

        console.log(styleModule);
        if (styleModule) {
            styleModule();
        }
    }

    createApp(App)
        .use(VueLazyload)
        .provide('globalInfo', {
            promotionId, lang,
        }) // 定義全域變數
        .mount('#app');
};

initApp();
