import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Define your dynamic routes for component pages
  const components = [
    { type: 'next', ids: [1] }, // Example IDs for 'next' type
    { type: 'react', ids: [1] }, // Example IDs for 'react' type
    { type: 'static', ids: [1] }, // Example IDs for 'static' type
  ];

  // Generate the URLs for dynamic routes
  const componentEntries: MetadataRoute.Sitemap = components.flatMap(({ type, ids }) => 
    ids.map((id) => ({
      url: `https://fronchef.tech/comp/${type}/${id}`,
      //    // You can add this if you track last modified dates
    }))
  );

  return [
    {
      url: `https://fronchef.tech/about`,
       
    },
    {
      url: `https://fronchef.tech/foryou`,
       
    },
    {
      url: `https://fronchef.tech/reachus`,
       
    },
    {
      url: `https://fronchef.tech/install`,
       
    },
    ...componentEntries, // Add dynamic component pages to the sitemap
  ];
}
