// http://ckang1229.gitee.io/vue-markdown-editor/zh/#%E4%BB%8B%E7%BB%8D
import VMdEditor from '@kangc/v-md-editor';
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
// import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';

// highlightjs
import hljs from 'highlight.js';
// Prism
import Prism from 'prismjs';

// highlight code
import 'prismjs/components/prism-json';




VMdPreview.use(vuepressTheme, {
    Hljs: hljs,
    codeHighlightExtensionMap: {
        vue: 'html',
    },
});

VMdEditor.use(vuepressTheme, {
    Prism,
    codeHighlightExtensionMap: {
        vue: 'html',
    },
});


import VueMarkdownEditor from '@kangc/v-md-editor';
import createCopyCodePlugin from '@kangc/v-md-editor/lib/plugins/copy-code/index';
import '@kangc/v-md-editor/lib/plugins/copy-code/copy-code.css';

VueMarkdownEditor.use(createCopyCodePlugin());
VMdPreview.use(createCopyCodePlugin());
VMdEditor.use(createCopyCodePlugin());


export {VMdEditor, VMdPreview};