import { CollectionConfig } from 'payload/types'

const Sch_KeyPoints: CollectionConfig = {
    slug: 'school-keypoints',
    labels: {
        singular: 'Keypoint',
        plural: 'Keypoints',
    },
    admin: {
        useAsTitle: 'KeyPoint_title',
        group: 'Schools',
    },
    fields: [
        {
            name: 'KeyPoint_title',
            type: 'text',
            required: true,
            label: 'KeyPoint Title',
        },

    ],
}
export default Sch_KeyPoints