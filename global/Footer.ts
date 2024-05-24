import {
  HTMLConverterFeature,
  lexicalEditor,
  lexicalHTML,
} from "@payloadcms/richtext-lexical";
import { GlobalConfig } from "payload/types";

const Footer: GlobalConfig = {
  slug: "footer",
  admin: {
    // livePreview: {
    //     url: 'http://localhost:3000/',
    // }
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "footer_description",
      label: "Footer Description",
      type: "richText",
      required: true,
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          HTMLConverterFeature({}),
        ],
      }),
    },
    lexicalHTML("footer_description", { name: "footer_description_html" }),
    {
      name: "primary_footer_menu",
      label: "Primary Footer Menu",
      type: "array",
      fields: [
        {
          name: "name",
          label: "Menu Name",
          type: "text",
          required: true,
        },
        {
          name: "link",
          label: "Menu Link",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "policy_footer_menu",
      label: "Policy Footer Menu",
      type: "array",
      fields: [
        {
          name: "name",
          label: "Menu Name",
          type: "text",
          required: true,
        },
        {
          name: "link",
          label: "Menu Link",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "copy_right",
      label: "Copy Right Text",
      type: "text",
      required: true,
    },
  ],
};

export default Footer;
