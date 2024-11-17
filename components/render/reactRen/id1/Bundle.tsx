import { ExampleComponent } from './ExampleComponent.js';
import { HighLightsSlides } from './HighLightsSlides.js';
import {indexCssModification } from "./modification/indexCSS.js";
import {tailwindConfigJsModification } from "./modification/tailwindconfig.js";
import { VideoCar } from './VideoCar.js';

export const CodeSnippetBundle = {
    code: ExampleComponent,
    SrcCode: [
        { name: "components/VideoCarousel.tsx", code: VideoCar },
        { name: "constant/index.js", code: HighLightsSlides },
    ],
    Modifications: [
        {name: "tailwindconfig.js", code: tailwindConfigJsModification},
        {name:"index.css", code: indexCssModification},
    ],
    dependencies: [
        'npm install gsap',
        'npm install @gsap/react',
        'npm install react react-dom',
    ],
    message: [
        `<h1>Download the assets from here <a href='https://drive.google.com/file/d/1syHiNxSIGXVApaIozdrLXM2x5dPhvaJL/view' class='text-red-400'>click here ↗</a></h1>`
    ]
    
};
