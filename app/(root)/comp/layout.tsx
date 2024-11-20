import Sidebar from "@/components/root/viewpage/Sidebar";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Components",
    description:
      "Fronchef provides open-source UI components for Next.js, React, and static HTML, as well as affordable website building services for Wix, WordPress, Next.js, MERN, and static sites. Build your website with ease and flexibility.",
    
  };

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex w-full bg-black max-h-screen overflow-y-auto">
            <div className="hidden md:block min-w-[15rem]">
                <Sidebar />
            </div>
            <div className="w-[100%]">
                {children}
            </div>
        </div>
    );
}