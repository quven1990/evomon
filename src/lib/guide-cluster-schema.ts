import type { GuideCluster } from "@/data/guide-clusters";
import { canonical } from "@/lib/site";

export function guideClusterItemListSchema(cluster: GuideCluster) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: cluster.schemaName,
    itemListElement: cluster.routes.map((route, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: route.title,
      description: route.description,
      url: canonical(route.href),
    })),
  };
}
