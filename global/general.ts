import { GlobalConfig } from 'payload/types';

const General: GlobalConfig = {
    slug: 'general',
    admin: {
        // livePreview: {
        //     url: 'http://localhost:3000/',
        // }
    },
    fields: [
        {
            type: 'row',
            fields: [
            {
                name: 'logo',
                type: 'upload',
                relationTo: 'media',

                label: 'Logo',
                filterOptions: {
                    mimeType: { contains: 'image' },
                },
                admin: {
                    width: '50%'
                }
            },
            {
                name: 'favicon',
                type: 'upload',
                relationTo: 'media',

                label: 'Favicon',
                filterOptions: {
                    mimeType: { contains: 'image' },
                },
                admin: {
                    width: '50%'
                }
            },
                {
                    name: 'facebook_url',
                    type: 'text',

                    label: 'Facebook URL',
                    admin: {
                        width: '20%',
                    }
                },
                {
                    name: 'twitter_url',
                    type: 'text',

                    label: 'Twitter URL',
                    admin: {
                        width: '20%',
                    }
                },
                {
                    name: 'instagram_url',
                    type: 'text',

                    label: 'Instagram URL',
                    admin: {
                        width: '20%',
                    }
                },
                {
                    name: 'linkedin_url',
                    type: 'text',

                    label: 'Linkedin URL',
                    admin: {
                        width: '20%',
                    }
                },
                {
                    name: 'youtube_url',
                    type: 'text',

                    label: 'Youtube URL',
                    admin: {
                        width: '20%',
                    }
                },
                {
                    name: 'blog_about',
                    type: 'textarea',
                    label: 'Blog About',
                    admin: {
                        width: '100%',
                    }
                }
            
            ]
        },


    ],
};

export default General;