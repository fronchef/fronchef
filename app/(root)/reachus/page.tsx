import { ReachUsForm } from "@/components/root/reachpage/Reach";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reach Us",
};

const Aboutpage = () => {
    return (
        <div className="h-full w-full bg-black-100">
            <ReachUsForm />
        </div>
    );
};

export default Aboutpage; 