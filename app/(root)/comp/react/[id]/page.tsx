"use client";

import { useState, useMemo } from "react";
import { usePathname } from "next/navigation";
import Tabs from "@/components/root/renderpage/Tabs";
import CodeBlock from "@/components/root/renderpage/CodeBlock";
import { Reactcomponents } from "@/src/render/constants/reactComp";

interface CodeBundle {
    code: string;
    SrcCode?: {
        name: string;
        code: string;
    }[];
    dependencies: string[];
    Modifications?: {
        name: string;
        code: string;
    }[];
    message?: string[]; // Adjusted for the message
}

interface Component {
    id: number;
    name: string;
    link: string;
    img: string;
    product_img: string;
    description: string;
    demoLink: string;
    code: CodeBundle;
}

const Components = () => {
    const [activeTab, setActiveTab] = useState(0);
    const pathname = usePathname();

    const componentId = useMemo(() => {
        const parts = pathname.split("/");
        return parseInt(parts[parts.length - 1], 10);
    }, [pathname]);

    const component = useMemo(() => Reactcomponents.find(comp => comp.id === componentId), [componentId]);

    return (
        <div className="bg-black text-white mt-10 lg:ml-10 px-4 md:max-w-[70%] lg:max-w-[80%] h-full max-h-[90%] overflow-y-auto text-base md:text-xl">
            <div>
                <h1 id="name" className="text-5xl font-extrabold">{component?.name || "Component Not Found"}</h1>
                <p id="description" className="text-lg mt-4 text-zinc-300">{component?.description || "No description available."}</p>
                {component?.demoLink && (
                    <div className="mt-4">
                        <a
                            href={component.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-500 transition"
                        >
                            View Demo ↗ 
                        </a>
                    </div>
                )}
            </div>

            <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

            <div className="p-6">
                {activeTab === 0 && (
                    <div className="h-full w-full">
                        <div className="border border-zinc-500 p-4 object-contain inline-block h-full w-[100%] md:w-[90%] overflow-auto mt-10 rounded-2xl">
                            {component?.product_img && (
                                <img
                                    src={component.product_img}
                                    alt={`${component.name} Overview`}
                                    className="w-full h-auto min-h-[8rem] rounded-xl"
                                />
                            )}
                        </div>
                    </div>
                )}
                {activeTab === 1 && (
                    <div className="h-full w-full">
                        {component?.code?.code && (
                            <CodeBlock id="code" code={component.code.code} />
                        )}
                    </div>
                )}
            </div>

            <div id="installation" className="text-lg text-white mt-10">
                <h1 className="text-2xl text-green-400 font-extrabold">Installation</h1>

                {component?.code?.dependencies?.length ? (
                    <div id="dependency" className="mt-10">
                        <h2>Install all these dependencies</h2>
                        {component.code.dependencies.map((dependency, index) => (
                            <CodeBlock key={index} id={`dependency${index + 1}`} code={dependency} />
                        ))}
                    </div>
                ) : null}

                {component?.code?.Modifications?.some(mod => mod.name && mod.code) ? (
                    <div id="Modifications" className="mt-10">
                        <h2 className="text-2xl text-green-400 font-extrabold">Make these Modifications</h2>
                        {component.code.Modifications.map((modification, index) =>
                            modification.name || modification.code ? (
                                <div key={index} className="mt-10">
                                    <div className="bg-zinc-900 border border-zinc-600 inline-block p-2 text-[#ffffff] rounded text-xs md:text-base">
                                        {modification.name}
                                    </div>
                                    <CodeBlock id={`ModificationCode${index + 1}`} code={modification.code} />
                                </div>
                            ) : null
                        )}
                    </div>
                ) : null}

                {component?.code?.SrcCode?.some(src => src.name && src.code) ? (
                    <div id="SrcCode" className="mt-10">
                        <h2 className="text-2xl text-green-400 font-extrabold">Add these files to your application</h2>
                        {component.code.SrcCode.map((src, index) =>
                            src.name || src.code ? (
                                <div key={index} className="mt-10">
                                    <div className="bg-zinc-900 border border-zinc-600 inline-block p-2 text-[#ffffff] rounded text-xs md:text-base">
                                        {src.name}
                                    </div>
                                    <CodeBlock id={`SrcCodeBlock${index + 1}`} code={src.code} />
                                </div>
                            ) : null
                        )}
                    </div>
                ) : null}

                {component?.code?.message?.length ? (
                    <div id="message" className="mt-10">
                        <h2 className="text-2xl text-green-400 font-extrabold">Additional Information</h2>
                        {component.code.message.map((msg, index) => (
                            <div key={index} className="mt-4" dangerouslySetInnerHTML={{ __html: msg }} />
                        ))}
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default Components;
