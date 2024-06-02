import type { CollectionConfig } from 'payload/types'

export const Heroes: CollectionConfig = {
  slug: 'heroes',
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'bannerImage',
      type: 'upload',
      relationTo: 'media',
    },
  ],
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
}
