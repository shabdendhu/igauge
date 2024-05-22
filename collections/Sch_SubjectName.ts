import { CollectionConfig } from "payload/types";

const Sch_SubjectName: CollectionConfig = {
  slug: "schools-subject_name",
  labels: {
    singular: "Subject Name",
    plural: "Subject Names",
  },
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "subject_name",
    group: "Schools",
  },
  fields: [
    {
      name: "subject_name",
      type: "text",
      required: true,
      label: "Badges Name",
    },
    {
      name: "icon",
      type: "upload",
      relationTo: "media",
      required: true,
      label: "Icon",
    },
  ],
};
export default Sch_SubjectName;
