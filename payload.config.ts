import { postgresAdapter } from "@payloadcms/db-postgres";

import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload/config";
// import sharp from 'sharp'
import { fileURLToPath } from "url";
import { seoPlugin } from '@payloadcms/plugin-seo'

import { Users } from "@/collections/Users";
import Institutions from "@/collections/Institutions";
import Media from "@/collections/Media";
import Blogs from "@/collections/Blogs";
import Blogscategory from "@/collections/Blogscategory";
import RatingBadges from "@/collections/RatingBadges";
import Events from "@/collections/Events";
import SubjectName from "@/collections/Subjects";
import Category from "@/collections/Category";
import Pages from "@/collections/Pages";
import Features from "@/collections/Features";
import States from "@/collections/States";
import Cities from "@/collections/Cities";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    Institutions,
    RatingBadges,
    SubjectName,
    Category,
    Pages,
    Media,
    Blogs,
    Blogscategory,
    Events,
    Features,
    States,
    Cities,
  ],
  editor: lexicalEditor({}),

  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  plugins: [
    seoPlugin({
      collections: ["institutions", "blogs", "events", "pages"],
      tabbedUI: true,
      uploadsCollection: "media",
      generateTitle: (data: any) => `igauge.in — ${data?.doc?.title?.value}`,
      generateDescription: ({ doc }: any) => doc?.excerpt?.value,
    }),
  ],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || "",
    },
  }),

  // Sharp is now an optional dependency -
  // if you want to resize images, crop, set focal point, etc.
  // make sure to install it and pass it to the config.

  // This is temporary - we may make an adapter pattern
  // for this before reaching 3.0 stable

  // sharp,
});
