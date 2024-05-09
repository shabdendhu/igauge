import { CollectionConfig } from 'payload/types'

const RatingBadges: CollectionConfig = {
    slug: 'rating-badges',
    admin: {
        useAsTitle: 'badges_name',
    },
    fields: [
        {
            name: 'badges_name',
            type: 'text',
            required: true,
            label: 'Badges Name',
        }

    ],
}
export default RatingBadges