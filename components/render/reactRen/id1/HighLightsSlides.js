export const HighLightsSlides = `import highlightFirstmv from "../constant/video/highlight-first.mp4"; {/* change path accordingly */}
import highlightSecmv from "../constant/video/hightlight-sec.mp4";
import highlightThirdmv from "../constant/video/hightlight-third.mp4";
import highlightFourthmv from "../constant/video/hightlight-fourth.mp4";


import replay from "../constant/images/replay.svg";
import play from "../constant/images/play.svg";
import pause from "../constant/images/pause.svg";
import logo from "../constant/images/logoo.png";
  
  
  export const replayImg = replay;
  export const playImg = play;
  export const pauseImg = pause;
  export const logoImg = logo;

  

  export const HightLightsSlides = [
    {
      id: 1,
      textLists: [
        "Enter A17 Pro.",
        "Game‑changing chip.",
        "Groundbreaking performance.",
      ],
      video: highlightFirstmv,
      videoDuration: 4,
    },
    {
      id: 2,
      textLists: ["Titanium.", "So strong. So light. So Pro."],
      video: highlightSecmv,
      videoDuration: 5,
    },
    {
      id: 3,
      textLists: [
        "iPhone 15 Pro Max has the",
        "longest optical zoom in",
        "iPhone ever. Far out.",
      ],
      video: highlightThirdmv,
      videoDuration: 2,
    },
    {
      id: 4,
      textLists: ["All-new Action button.", "What will yours do?."],
      video: highlightFourthmv,
      videoDuration: 3.63,
    },
  ];`;