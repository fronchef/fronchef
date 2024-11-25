import {exampleComponent } from "./exampleComponent";
import {globalCssModification } from "./GlobalCssModification";
import {AboutComponentJsx} from "./aboutComponent"

export const CodeSnippetBundle2 = {
    code: exampleComponent,
    SrcCode: [
        { name: "components/FluidScroll.tsx", code: AboutComponentJsx}
    ],
    Modifications: [
        {name:"app/global.css", code: globalCssModification},
    ],
    dependencies: [
        'npm install gsap',
        'npm install @gsap/react',
        'npm install react react-dom',
    ],
    message: [
    ]
    
};
