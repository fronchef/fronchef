import { Metadata } from "next";
import { Nextcomponents } from "@/src/render/constants/nextComp";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const componentId = parseInt(params.id, 10);
  const component = Nextcomponents.find((comp) => comp.id === componentId);

  if (!component) {
    return {
      title: "Component Not Found",
      description: "No description available for this component.",
    };
  }

  return {
    title: component.name,
    description: component.description,
    openGraph: {
      images: component.product_img
        ? [{ url: component.product_img, alt: `${component.name} Thumbnail` }]
        : [],
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
