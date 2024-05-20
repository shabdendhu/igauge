import { CollectionConfig } from 'payload/types'

const Coll_SubjectName: CollectionConfig = {
    slug: 'college-subject_name',
    labels: {
        singular: 'Subject Name',
        plural: 'Subject Names',
    },
    admin: {
        useAsTitle: 'subject_name',
        group: 'Colleges',
    },
    fields: [
        {
            name: 'subject_name',
            type: 'text',
            required: true,
            label: 'Badges Name',
        },
        {
            name: 'icon',
            type: 'upload',
            relationTo: 'media',
            required: true,
            label: 'Icon',
        },

    ],
}
export default Coll_SubjectName