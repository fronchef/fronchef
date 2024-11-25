import { exampleComponent } from "./exampleComponent";
import { indexCssModification } from "./IndexCssModification";
import {AboutComponentJsx} from "./aboutComponent"

export const CodeSnippetBundle2 = {
    code: exampleComponent,
    SrcCode: [
        { name: "components/FluidScroll.jsx", code: AboutComponentJsx}
    ],
    Modifications: [
        {name:"index.css", code: indexCssModification},
    ],
    dependencies: [
        'npm install gsap',
        'npm install @gsap/react',
        'npm install react react-dom',
    ],
    message: [
    ]
    
};
