import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Old service addresses that moved — permanent redirects keep links and Google rankings working.
  redirects() {
    return [
      { source: "/services/maintenance-seo", destination: "/services/website-maintenance", permanent: true },
      { source: "/:lang(sq|it)/services/maintenance-seo", destination: "/:lang/services/website-maintenance", permanent: true },
    ];
  },
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
