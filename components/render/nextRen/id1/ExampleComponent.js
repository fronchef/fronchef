export const ExampleComponentCode = `
import React from "react";
import CodeBlock from "@/component/CodeSnippet";
import Footer from "@/component/Footer";

const ExampleComponent = () => {
    const jsxCode = \`
import React from "react";
const HelloWorld = () => {
    return (
        <div>
            <h1>Hello, World!</h1>
        </div>
    );
};

export default HelloWorld;
\`;

    return (
        <>
            <div className="flex flex-col justify-center items-center w-full h-full py-20 border-b-2 bg-black text-white">
                <h2 className="text-2xl font-bold mb-4">JSX Code Example</h2>
                <CodeBlock id="example-jsx-code" code={jsxCode} language="jsx" />
            </div>
            <Footer />
        </>
    );
};

export default ExampleComponent;
`;
