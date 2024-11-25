import { ExampleComponentCode } from './ExampleComponent.js';
import { CodeBlockSnippet } from './CodeBlockSnippet.js';
import { CopyButtonSnippet } from './CopyButtonSnippet.js';
import {tailwindConfigTsModification} from './tailwindconfigmod.js';
import {globalCssModification} from './globalcssmod.js';

export const CodeSnippetBundle1 = {
    code: ExampleComponentCode,
    SrcCode: [
        { name: "components/CodeSnippet.tsx", code: CodeBlockSnippet },
        { name: "components/CopyButton.tsx", code: CopyButtonSnippet },
    ],
    Modifications: [   
        { name: "tailwind.config.ts", code: tailwindConfigTsModification },
        { name: "global.css", code: globalCssModification },
    ],
    dependencies: [
        'npm install react-syntax-highlighter --save',
        'npm install @heroicons/react',
    ],   
    message: []
};
