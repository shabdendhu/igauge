import { postgresAdapter } from "@payloadcms/db-postgres";

import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload/config";
// import sharp from 'sharp'
import { fileURLToPath } from "url";
import { seoPlugin } from "@payloadcms/plugin-seo";
import { cloudStorage } from "@payloadcms/plugin-cloud-storage";
import { s3Adapter } from "@payloadcms/plugin-cloud-storage/s3";
import Otps from "./collections/Otp";

import { Users } from "./collections/Users";
import Media from "./collections/Media";
import Blogs from "./collections/Blogs";
import Blogscategory from "./collections/Blogscategory";
import Events from "./collections/Events";
import Pages from "./collections/Pages";
import States from "./collections/States";
import Cities from "./collections/Cities";
import Sch_SubjectRatings from "./collections/Sch_SubjectRatings";
import Coll_SubjectRatings from "./collections/Coll_SubjectRatings";
import Uni_SubjectRatings from "./collections/Uni_SubjectRatings";
import Schools from "./collections/Schools";
import University from "./collections/University";
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
import Sch_OtherFactor from "./collections/Sch_OtherFactor";
import Coll_OtherFactor from "./collections/Coll_OtherFactor";
import Uni_CategoryName from "./collections/Uni_CategoryName";
import Uni_SubjectName from "./collections/Uni_SubjectName";
import Coll_SubjectName from "./collections/Coll_SubjectName";
import Coll_CategoryName from "./collections/Coll_CategoryName";
import Sch_SubjectName from "./collections/Sch_SubjectName";
import Sch_CategoryName from "./collections/Sch_CategoryName";
import { BookmarkedInstitutions } from "./collections/Bookmarked";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

// const adapter = s3Adapter({
//   config: {
//     credentials: {
//       accessKeyId: process.env.S3_ACCESS_KEY_ID,
//       secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
//     },
//     endpoint: process.env.S3_ENDPOINT,
//     region: process.env.S3_REGION,
//   },
//   bucket: process.env.S3_BUCKET,
// });
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
  acl: "public-read",
  bucket: process.env.S3_BUCKET || "",
});

export default buildConfig({
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: "- QS I-GAUGE",
      favicon: "/favicon.svg",
      ogImage: "/logo.svg",
    },
  },
  collections: [
    Users,
    University,
    Uni_KeyPoints,
    Uni_SubjectName,
    Uni_SubjectRatings,
    Uni_CategoryName,
    Uni_CategoryRatings,
    Uni_OverallRating,
    Uni_OtherFactor,
    Colleges,
    Coll_KeyPoints,
    Coll_SubjectName,
    Coll_SubjectRatings,
    Coll_CategoryName,
    Coll_CategoryRatings,
    Coll_OverallRating,
    Coll_OtherFactor,
    Schools,
    Sch_KeyPoints,
    Sch_SubjectName,
    Sch_SubjectRatings,
    Sch_CategoryName,
    Sch_CategoryRatings,
    Sch_OverallRating,
    Sch_OtherFactor,
    Pages,
    Blogs,
    Blogscategory,
    Events,
    States,
    Cities,
    Media,
    Otps,
    BookmarkedInstitutions,
  ],

  globals: [General, HeaderMenu, Footer],

  editor: lexicalEditor({}),

  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  plugins: [
    seoPlugin({
      collections: [
        "universities",
        "colleges",
        "schools",
        "blogs",
        "events",
        "pages",
      ],
      tabbedUI: true,
      uploadsCollection: "media",
      generateTitle: (data: any) => `igauge.in — ${data?.doc?.title?.value}`,
      generateDescription: ({ doc }: any) => doc?.excerpt?.value,
    }),
    cloudStorage({
      collections: {
        media: {
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
