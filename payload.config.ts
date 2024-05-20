import { postgresAdapter } from "@payloadcms/db-postgres";

import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload/config";
// import sharp from 'sharp'
import { fileURLToPath } from "url";
import { seoPlugin } from '@payloadcms/plugin-seo'
import { cloudStorage } from '@payloadcms/plugin-cloud-storage';
import { s3Adapter } from '@payloadcms/plugin-cloud-storage/s3';

import { Users } from "@/collections/Users";
import Media from "@/collections/Media";
import Blogs from "@/collections/Blogs";
import Blogscategory from "@/collections/Blogscategory";
import Events from "@/collections/Events";
import Pages from "@/collections/Pages";
import States from "@/collections/States";
import Cities from "@/collections/Cities";
import Sch_SubjectRatings from "./collections/Sch_SubjectRatings";
import Coll_SubjectRatings from "./collections/Coll_SubjectRatings";
import Uni_SubjectRatings from "./collections/Uni_SubjectRatings";
import Schools from "./collections/Schools";
import University from "@/collections/University";
import Colleges from "./collections/Colleges";
import Uni_OverallRating from "./collections/Uni_OverallRating";
import Uni_CategoryRatings from "./collections/Uni_CategoryRating";
import Coll_CategoryRatings from "./collections/Coll_CategoryRating";
import Coll_OverallRating from "./collections/Coll_OverallRating";
import Sch_CategoryRatings from "./collections/Sch_CategoryRating";
import Sch_OverallRating from "./collections/Sch_OverallRating";
import Uni_KeyPoints from "./collections/Uni_KeyPoints";
import Coll_KeyPoints from "./collections/Coll_KeyPoints";
import Sch_KeyPoints from "./collections/Sch_KeyPoints";
import Footer from "./global/Footer";
import General from "./global/general";
import HeaderMenu from "./global/HeaderMenu";
import Uni_OtherFactor from "./collections/Uni_OtherFactor";
import Uni_CoreAdvanced from "./collections/Uni_Core-Criteria";
import Sch_CoreAdvanced from "./collections/Sch_Core-Advanced";
import Sch_OtherFactor from "./collections/Sch_OtherFactor";
import Coll_CoreAdvanced from "./collections/Coll_Core-Advanced";
import Coll_OtherFactor from "./collections/Coll_OtherFactor";
import Uni_Advanced from "./collections/Uni_Advanced-Criteria";
import Coll_Advanced from "./collections/Coll_Advanced-Criteria";
import Sch_Advanced from "./collections/Sch_Advanced";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const adapter = s3Adapter({
  config: {
    forcePathStyle: true,
    region: process.env.S3_REGION,
    endpoint: process.env.S3_ENDPOINT,
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY_ID || "",
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || "",
    },
  },
  acl: 'public-read',
  bucket: process.env.S3_BUCKET || "",
})

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    University,
    Uni_KeyPoints,
    Uni_SubjectRatings,
    Uni_CategoryRatings,
    Uni_OverallRating,
    Uni_CoreAdvanced,
    Uni_Advanced,
    Uni_OtherFactor,
    Colleges,
    Coll_KeyPoints,
    Coll_SubjectRatings,
    Coll_CategoryRatings,
    Coll_OverallRating,
    Coll_CoreAdvanced,
    Coll_Advanced,
    Coll_OtherFactor,
    Schools,
    Sch_KeyPoints,
    Sch_SubjectRatings,
    Sch_CategoryRatings,
    Sch_OverallRating,
    Sch_CoreAdvanced,
    Sch_Advanced,
    Sch_OtherFactor,
    Pages,
    Blogs,
    Blogscategory,
    Events,
    States,
    Cities,
    Media,
  ],

  globals: [
    General,
    HeaderMenu,
    Footer,
  ],
  
  
  editor: lexicalEditor({}),

  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  plugins: [
    seoPlugin({
      collections: ["universities", "colleges", "schools", "blogs", "events", "pages"],
      tabbedUI: true,
      uploadsCollection: "media",
      generateTitle: (data: any) => `igauge.in — ${data?.doc?.title?.value}`,
      generateDescription: ({ doc }: any) => doc?.excerpt?.value,
    }),
    cloudStorage({
      collections: {
        'media': {
          adapter,
          generateFileURL: (file) => {
            return `https://qs-igauge.blr1.digitaloceanspaces.com/${file.filename}`; 
          },
        },
      },
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
