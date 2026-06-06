import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This app lives in a subdirectory of a repo that also contains another
  // Next.js app (the Color Code project) with its own lockfile. Pin the
  // Turbopack root to this directory so Next doesn't infer the parent repo
  // as the workspace root. See node_modules/next/dist/docs/.../turbopack.md
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
