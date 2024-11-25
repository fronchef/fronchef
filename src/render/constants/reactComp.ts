import i1 from "@/src/render/Comp-images/react/id1/thumbnail.png";
import i_1 from "@/src/render/Comp-images/react/id1/overview.png";
import { CodeSnippetBundle1 } from "@/components/render/reactRen/id1/Bundle";

import i2 from "@/src/render/Comp-images/react/id2/thumbnail.png"
import { CodeSnippetBundle2 } from "@/components/render/reactRen/id2/Bundle";

export const Reactcomponents = [
    {
        id: 1,
        name: "Apple Carousel",
        link: "/comp/react/1",
        img: i1.src,
        demoLink: "https://video-carousel-chi.vercel.app/",
        product_img: i_1.src,
        description: "A beautifull apple carousel",
        code: CodeSnippetBundle1,
    },
    {
        id: 2,
        name: "Fluid Scroll",
        link: "/comp/react/2",
        img: i2.src, //thumbnail
        demoLink: "https://fronchef-react-comp2.vercel.app/", //your deployed demo link
        product_img: i2.src, //overview
        description: "A smooth webscroll implemented using Gsap",
        code: CodeSnippetBundle2,
    },
    /*Use this
    {
        id: "",
        name: "",
        link: "",
        img: "", //thumbnail
        demoLink: "", //your deployed demo link
        product_img: "" , //overview
        description: "",
        code: "",
    },  */
];
