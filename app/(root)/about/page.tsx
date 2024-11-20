import { WobbleCardDemo } from "@/components/root/aboutpage/AboutHeader";
import Intro from "@/components/root/aboutpage/Intro"
import MeetTheTeam from "@/components/root/aboutpage/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  openGraph: {
    title: "About-Us Page",
    description: "Get to know who fronchef is",
    images: [
      {
        url: "@/src/root/images/aboutopengraph.png", // Adjust path as per your app structure
        alt: "Open Graph Image Description",
      },
    ],
  },
};


const Aboutpage = () => {
  return (
    <div className="h-full w-full bg-black-100">
      <WobbleCardDemo />
      <Intro />
      <MeetTheTeam />

    </div>
  );
};

export default Aboutpage; 