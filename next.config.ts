import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io"], // 👈 Sanity ke images allow karein
  },
};

module.exports = nextConfig;
