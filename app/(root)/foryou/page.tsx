import { TimelineDemo } from "@/components/root/foryoupage/event";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "For You",
};



const Foryou = () => {
  return (
    <div className="max-h-full w-full mt-5 sm:mt-10 bg-black-100">
      <TimelineDemo />
    </div>
  );
};

export default Foryou; 