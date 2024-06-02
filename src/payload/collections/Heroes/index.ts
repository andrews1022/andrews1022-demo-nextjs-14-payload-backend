import type { CollectionConfig } from 'payload/types'

import { anyone } from '../../access/anyone'
import { formatSlug } from './hooks/formatSlug'

export const Heroes: CollectionConfig = {
  slug: 'heroes',
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      hooks: {
        beforeChange: [formatSlug],
      },
      admin: {
        readOnly: true,
      },
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
    read: anyone,
  },
}
