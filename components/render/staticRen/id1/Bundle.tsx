import { HtmlCode } from './Html.js';
import { CssCode } from './Css.js';
import { JavascriptCode } from './Javascript.js';

export const CodeSnippetBundle = {
    SrcCode: [
        { name: "Html Code", code: HtmlCode },
        { name: "Css Code", code: CssCode },
        { name: "Javascipt Code", code: JavascriptCode },
    ],
    dependencies: [],
    message: [
        `This is not a responsive component works best on md and greater screens.`
    ],
};
