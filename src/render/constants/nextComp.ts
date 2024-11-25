import i1 from "@/src/render/Comp-images/next/id1/thumbnail.png";
import i_1 from "@/src/render/Comp-images/next/id1/overview.png"
import { CodeSnippetBundle1 } from "@/components/render/nextRen/id1/Bundle";


import i2 from "@/src/render/Comp-images/next/id2/thumbnail.png"
import { CodeSnippetBundle2 } from "@/components/render/nextRen/id2/Bundle";

export const Nextcomponents = [
  {
    id: 1,
    name: "Code Snippet",
    link: "/comp/next/1",
    img: i1.src,
    demoLink: 'https://shyam-jha.github.io/Fronchef-CodeSnippet/',
    product_img: i_1.src,
    description: "A beautifull code snippet",
    code: CodeSnippetBundle1,
  },
  {
      id: 2,
      name: "Fluid Scroll in Next",
      link: "/comp/react/2",
      img: i2.src, //thumbnail
      demoLink: "https://fronchef-react-comp2.vercel.app/", //your deployed demo link
      product_img: i2.src, //overview
      description: "A smooth webscroll implemented using Gsap",
      code: CodeSnippetBundle2,
  },
  /*Use this
    {
        id: 3,
        name: "",
        link: "",
        img: "", //thumbnail
        demoLink: "", //your deployed demo link
        product_img: "" , //overview
        description: "",
        code: "",
    },  */
];
