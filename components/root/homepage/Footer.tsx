import Link from "next/link";
import Image from "next/image";
import i1 from "@/src/root/images/logoo.png"

const Footer = () => {
    return (
        <footer className="py-10 border-t px-4 bg-black text-white">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
                {/* Left Part: Services & Follow Us */}
                <div className="flex flex-col md:flex-row gap-8 md:gap-20">
                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Services</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/reachus" className="text-sm hover:underline" prefetch={false}>
                                    Next.js Powered Websites
                                </Link>
                            </li>
                            <li>
                                <Link href="/reachus" className="text-sm hover:underline" prefetch={false}>
                                    React Static Websites
                                </Link>
                            </li>
                            <li>
                                <Link href="/reachus" className="text-sm hover:underline" prefetch={false}>
                                    WordPress/Wix Websites
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Follow Us */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <div className="flex items-center gap-4">
                            <Link href="https://www.linkedin.com/company/fronchef/" className="text-sm hover:underline" prefetch={false}>
                                LinkedIn
                            </Link>
                            <Link href="https://github.com/fronchef/fronchef" className="text-sm hover:underline" prefetch={false}>
                                GitHub
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Right Part: Icons & One-Liner */}
                <div className="flex max-sm:w-full flex-col md:flex-row items-center md:items-end gap-4 mt-16 sm-mt-8 md:mt-0">
                    {/* Icons */}
                    <div className=" flex max-sm:w-full flex-col justify-center items-center gap-4">
                        <Image
                        src={i1}
                        alt="DreamUI Team"
                        className="rounded-md transition-transform duration-300 hover:scale-105 w-[130px] sm:w-[200px]" // Tailwind classes for width
                        />
                        
                        <p className="text-sm text-gray-400 text-center md:text-right">
                            &copy; 2024 Fronchef. All rights reserved.
                        </p>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
